import { and, eq, lte } from "drizzle-orm";
import { db, schema } from "@/db";
import { USER_ATTRIBUTE } from "./cart";

// Subset of Shopify's REST order webhook payload that the account area uses.
type OrderPayload = {
  admin_graphql_api_id: string;
  name: string;
  email: string | null;
  financial_status: string | null;
  fulfillment_status: string | null;
  total_price: string;
  currency: string;
  order_status_url: string | null;
  cancelled_at: string | null;
  created_at: string;
  updated_at: string;
  note_attributes?: { name: string; value: string }[];
  line_items: { title: string; variant_title: string | null; quantity: number; price: string; product_id: number | null }[];
  fulfillments?: { status: string; tracking_company: string | null; tracking_numbers: string[]; tracking_urls: string[]; created_at: string }[];
  refunds?: { created_at: string; transactions?: { amount: string }[] }[];
};

export const ORDER_TOPICS = new Set(["orders/create", "orders/updated", "orders/cancelled"]);

async function resolveUserId(order: OrderPayload): Promise<string | null> {
  const tagged = order.note_attributes?.find((a) => a.name === USER_ATTRIBUTE)?.value;
  if (tagged) {
    const u = await db.query.user.findFirst({ where: eq(schema.user.id, tagged), columns: { id: true } });
    if (u) return u.id;
  }
  // Guest checkouts are matched by email, but only to verified addresses, so
  // nobody can see another person's orders by registering their email.
  if (order.email) {
    const u = await db.query.user.findFirst({
      where: and(eq(schema.user.email, order.email.toLowerCase()), eq(schema.user.emailVerified, true)),
      columns: { id: true },
    });
    if (u) return u.id;
  }
  return null;
}

export async function syncOrder(order: OrderPayload) {
  const shopifyUpdatedAt = new Date(order.updated_at);
  const row = {
    id: order.admin_graphql_api_id,
    name: order.name,
    userId: await resolveUserId(order),
    email: order.email?.toLowerCase() ?? null,
    financialStatus: order.financial_status,
    fulfillmentStatus: order.fulfillment_status,
    totalAmount: order.total_price,
    currency: order.currency,
    detail: {
      lineItems: order.line_items.map((l) => ({
        title: l.title,
        variantTitle: l.variant_title,
        quantity: l.quantity,
        price: l.price,
      })),
      fulfillments: (order.fulfillments ?? []).map((f) => ({
        status: f.status,
        company: f.tracking_company,
        numbers: f.tracking_numbers,
        urls: f.tracking_urls,
        createdAt: f.created_at,
      })),
      refunded: (order.refunds ?? []).length > 0,
    },
    statusUrl: order.order_status_url,
    cancelledAt: order.cancelled_at ? new Date(order.cancelled_at) : null,
    placedAt: new Date(order.created_at),
    shopifyUpdatedAt,
    syncedAt: new Date(),
  };
  // Deliveries can arrive out of order; only newer Shopify versions overwrite.
  await db
    .insert(schema.shopOrder)
    .values(row)
    .onConflictDoUpdate({
      target: schema.shopOrder.id,
      set: { ...row, id: undefined },
      setWhere: lte(schema.shopOrder.shopifyUpdatedAt, shopifyUpdatedAt),
    });
}

export async function processEvent(id: string) {
  const event = await db.query.webhookEvent.findFirst({ where: eq(schema.webhookEvent.id, id) });
  if (!event || event.processedAt) return;
  try {
    if (ORDER_TOPICS.has(event.topic)) await syncOrder(JSON.parse(event.payload) as OrderPayload);
    await db
      .update(schema.webhookEvent)
      .set({ processedAt: new Date(), attempts: event.attempts + 1, lastError: null })
      .where(eq(schema.webhookEvent.id, id));
  } catch (err) {
    await db
      .update(schema.webhookEvent)
      .set({ attempts: event.attempts + 1, lastError: String(err).slice(0, 1000) })
      .where(eq(schema.webhookEvent.id, id));
    throw err;
  }
}

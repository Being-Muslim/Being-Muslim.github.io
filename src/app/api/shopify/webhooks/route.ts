import { env } from "cloudflare:workers";
import { db, schema } from "@/db";
import { processEvent } from "@/lib/shopify/orders";

async function validHmac(body: string, hmac: string | null) {
  if (!hmac) return false;
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(env.SHOPIFY_CLIENT_SECRET),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["verify"],
  );
  let sig: Uint8Array<ArrayBuffer>;
  try {
    sig = Uint8Array.from(atob(hmac), (c) => c.charCodeAt(0));
  } catch {
    return false;
  }
  return crypto.subtle.verify("HMAC", key, sig, new TextEncoder().encode(body));
}

// Shopify order webhooks. The delivery is stored before it is processed and
// we only answer 200 once it is stored and processed. On any failure we
// answer 500, so Shopify redelivers (for up to 48h); the stored copy is
// deduped by event id and reprocessed. last_error keeps the reason.
export async function POST(req: Request) {
  const body = await req.text();
  if (!(await validHmac(body, req.headers.get("x-shopify-hmac-sha256")))) {
    return new Response("invalid signature", { status: 401 });
  }
  const topic = req.headers.get("x-shopify-topic") ?? "unknown";
  const id = req.headers.get("x-shopify-event-id") ?? req.headers.get("x-shopify-webhook-id");
  if (!id) return new Response("missing event id", { status: 400 });

  await db
    .insert(schema.webhookEvent)
    .values({ id, topic, payload: body, receivedAt: new Date() })
    .onConflictDoNothing();

  try {
    await processEvent(id);
  } catch (err) {
    console.error("shopify webhook processing failed", topic, id, err);
    return new Response("processing failed", { status: 500 });
  }
  return new Response("ok");
}

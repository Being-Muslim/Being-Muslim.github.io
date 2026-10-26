import type { Metadata } from "next";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { and, eq } from "drizzle-orm";
import { db, schema } from "@/db";
import { getSession } from "@/lib/auth";
import { formatMoney } from "@/lib/shopify/money";
import { orderStatus } from "@/lib/order-status";

export const metadata: Metadata = { title: "Order · Being Muslim" };

type Detail = {
  lineItems: { title: string; variantTitle: string | null; quantity: number; price: string }[];
  fulfillments: { status: string; company: string | null; numbers: string[]; urls: string[]; createdAt: string }[];
  refunded: boolean;
};

type Props = { params: Promise<{ id: string }> };

export default async function OrderPage({ params }: Props) {
  const session = await getSession();
  const { id } = await params;
  if (!session) redirect(`/account/?next=/account/orders/${encodeURIComponent(id)}/`);
  if (!/^\d+$/.test(id)) notFound();

  // Scoped to the signed-in user, so one account can never open another's order.
  const order = await db.query.shopOrder.findFirst({
    where: and(eq(schema.shopOrder.id, `gid://shopify/Order/${id}`), eq(schema.shopOrder.userId, session.user.id)),
  });
  if (!order) notFound();
  const detail = order.detail as Detail;
  const money = (amount: string) => formatMoney({ amount, currencyCode: order.currency });

  return (
    <div className="st-page" style={{ maxWidth: 860 }}>
      <p className="st-kicker">
        <Link href="/account/" style={{ color: "inherit" }}>
          Account
        </Link>{" "}
        / Order
      </p>
      <h1 className="st-title" style={{ marginBottom: 8 }}>
        Order {order.name}
      </h1>
      <p className="st-muted" style={{ margin: "0 0 32px" }}>
        Placed {order.placedAt.toLocaleDateString("en-US", { dateStyle: "long" })} · <span className="st-pill">{orderStatus(order)}</span>
      </p>

      <table className="st-table" style={{ marginBottom: 32 }}>
        <thead>
          <tr>
            <th>Item</th>
            <th>Qty</th>
            <th style={{ textAlign: "right" }}>Price</th>
          </tr>
        </thead>
        <tbody>
          {detail.lineItems.map((l, i) => (
            <tr key={i}>
              <td>
                {l.title}
                {l.variantTitle ? <div className="st-muted" style={{ fontSize: 14 }}>{l.variantTitle}</div> : null}
              </td>
              <td>{l.quantity}</td>
              <td style={{ textAlign: "right" }}>{money(l.price)}</td>
            </tr>
          ))}
          <tr>
            <td colSpan={2}>
              <strong>Total</strong>
            </td>
            <td style={{ textAlign: "right" }}>
              <strong>{money(order.totalAmount)}</strong>
            </td>
          </tr>
        </tbody>
      </table>

      {detail.fulfillments.length ? (
        <>
          <h2 className="st-sub">Shipping</h2>
          {detail.fulfillments.map((f, i) => (
            <p key={i} className="st-note" style={{ marginBottom: 12 }}>
              Shipped {new Date(f.createdAt).toLocaleDateString("en-US", { dateStyle: "medium" })}
              {f.company ? ` with ${f.company}` : ""}.
              {f.numbers.map((n, j) => (
                <span key={n}>
                  {" "}
                  Tracking:{" "}
                  {f.urls[j] ? (
                    <a href={f.urls[j]} target="_blank" rel="noopener noreferrer">
                      {n}
                    </a>
                  ) : (
                    n
                  )}
                </span>
              ))}
            </p>
          ))}
        </>
      ) : null}

    </div>
  );
}

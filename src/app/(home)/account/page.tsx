import type { Metadata } from "next";
import Link from "next/link";
import { desc, eq } from "drizzle-orm";
import { db, schema } from "@/db";
import { getSession } from "@/lib/auth";
import { formatMoney } from "@/lib/shopify/money";
import { orderStatus } from "@/lib/order-status";
import AuthForms from "./AuthForms";
import SignOut from "./SignOut";

export const metadata: Metadata = { title: "Account · Being Muslim" };

type Props = { searchParams: Promise<{ next?: string }> };

// Only ever redirect within this site: resolve against a fixed origin and
// keep the result only if it stays there (rejects //evil.com, /\evil.com).
function sameSitePath(next: string | undefined) {
  const base = "https://site.invalid";
  if (!next || /[\\\u0000-\u001f]/.test(next)) return "/account/";
  try {
    const url = new URL(next, base);
    return url.origin === base ? url.pathname + url.search + url.hash : "/account/";
  } catch {
    return "/account/";
  }
}

export default async function AccountPage({ searchParams }: Props) {
  const session = await getSession();
  if (!session) {
    const safeNext = sameSitePath((await searchParams).next);
    return (
      <div className="st-page narrow">
        <p className="st-kicker">Account</p>
        <h1 className="st-title">Your account</h1>
        <AuthForms next={safeNext} />
      </div>
    );
  }

  const orders = await db.query.shopOrder.findMany({
    where: eq(schema.shopOrder.userId, session.user.id),
    orderBy: desc(schema.shopOrder.placedAt),
  });

  return (
    <div className="st-page" style={{ maxWidth: 900 }}>
      <p className="st-kicker">Account</p>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", gap: 16, flexWrap: "wrap" }}>
        <h1 className="st-title">Assalamu alaikum, {session.user.name.split(" ")[0]}</h1>
        <SignOut />
      </div>
      <p className="st-muted" style={{ margin: "-12px 0 40px" }}>
        Signed in as {session.user.email}
      </p>

      <h2 className="st-sub">Orders</h2>
      {orders.length === 0 ? (
        <p className="st-muted">
          No orders yet. Orders you place while signed in appear here. <Link href="/shop/">Visit the shop</Link>.
        </p>
      ) : (
        <table className="st-table">
          <thead>
            <tr>
              <th>Order</th>
              <th>Date</th>
              <th>Status</th>
              <th style={{ textAlign: "right" }}>Total</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((o) => (
              <tr key={o.id}>
                <td>
                  <Link href={`/account/orders/${o.id.split("/").pop()}/`} style={{ color: "inherit", fontWeight: 600 }}>
                    {o.name}
                  </Link>
                </td>
                <td>{o.placedAt.toLocaleDateString("en-US", { dateStyle: "medium" })}</td>
                <td>
                  <span className="st-pill">{orderStatus(o)}</span>
                </td>
                <td style={{ textAlign: "right" }}>{formatMoney({ amount: o.totalAmount, currencyCode: o.currency })}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

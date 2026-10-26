import type { Metadata } from "next";
import Link from "next/link";
import { getCart } from "@/lib/shopify/cart";
import { formatMoney, sized } from "@/lib/shopify/money";
import { getSession } from "@/lib/auth";
import { checkout, setLineQuantity } from "../actions";

export const metadata: Metadata = { title: "Cart · Being Muslim" };

export default async function CartPage() {
  const [cart, session] = await Promise.all([getCart(), getSession()]);
  const lines = cart?.lines.nodes ?? [];

  return (
    <div className="st-page" style={{ maxWidth: 860 }}>
      <p className="st-kicker">Cart</p>
      <h1 className="st-title">Your cart</h1>
      {lines.length === 0 ? (
        <>
          <p className="st-muted" style={{ marginBottom: 24 }}>
            Your cart is empty.
          </p>
          <Link className="st-btn" href="/shop/">
            Browse the shop
          </Link>
        </>
      ) : (
        <>
          {lines.map((line) => (
            <div key={line.id} className="st-line">
              {line.merchandise.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={sized(line.merchandise.image.url, 160)} alt="" />
              ) : (
                <span />
              )}
              <div>
                <Link href={`/shop/${line.merchandise.product.handle}/`} style={{ color: "inherit", fontWeight: 500 }}>
                  {line.merchandise.product.title}
                </Link>
                {line.merchandise.title !== "Default Title" ? (
                  <div className="st-muted" style={{ fontSize: 14 }}>
                    {line.merchandise.title}
                  </div>
                ) : null}
                <div style={{ marginTop: 10, display: "flex", gap: 12, alignItems: "center" }}>
                  <div className="st-qty">
                    <form action={setLineQuantity}>
                      <input type="hidden" name="lineId" value={line.id} />
                      <input type="hidden" name="quantity" value={line.quantity - 1} />
                      <button type="submit" aria-label={`Remove one ${line.merchandise.product.title}`}>
                        −
                      </button>
                    </form>
                    <span aria-label="Quantity">{line.quantity}</span>
                    <form action={setLineQuantity}>
                      <input type="hidden" name="lineId" value={line.id} />
                      <input type="hidden" name="quantity" value={line.quantity + 1} />
                      <button type="submit" aria-label={`Add one ${line.merchandise.product.title}`}>
                        +
                      </button>
                    </form>
                  </div>
                  <form action={setLineQuantity}>
                    <input type="hidden" name="lineId" value={line.id} />
                    <input type="hidden" name="quantity" value={0} />
                    <button type="submit" className="st-muted" style={{ background: "none", border: 0, cursor: "pointer", font: "inherit", fontSize: 14, textDecoration: "underline" }}>
                      Remove
                    </button>
                  </form>
                </div>
              </div>
              <div className="st-price">{formatMoney(line.cost.totalAmount)}</div>
            </div>
          ))}
          <div className="st-summary">
            <div>
              <div style={{ fontSize: 18 }}>
                Subtotal <strong>{formatMoney(cart!.cost.subtotalAmount)}</strong>
              </div>
              <div className="st-muted" style={{ fontSize: 14 }}>
                Shipping and tax are calculated at checkout.
              </div>
            </div>
            <form action={checkout}>
              <button className="st-btn" type="submit">
                Check out
              </button>
            </form>
          </div>
          {!session ? (
            <p className="st-note" style={{ marginTop: 24 }}>
              <Link href="/account/?next=/cart/" style={{ color: "inherit", fontWeight: 600 }}>
                Sign in or create an account
              </Link>{" "}
              before checking out to see this order in your account later.
            </p>
          ) : null}
        </>
      )}
    </div>
  );
}

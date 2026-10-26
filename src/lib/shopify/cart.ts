import { cookies } from "next/headers";
import { storefront, storefrontConfigured } from "./storefront";
import {
  CART_ATTRIBUTES_UPDATE,
  CART_BUYER_IDENTITY_UPDATE,
  CART_CREATE,
  CART_LINES_ADD,
  CART_LINES_REMOVE,
  CART_LINES_UPDATE,
  CART_QUERY,
} from "./queries";
import type { Cart, UserError } from "./types";

const CART_COOKIE = "bm_cart";
// Cart attribute that ties a Shopify order back to a site account.
export const USER_ATTRIBUTE = "bm_user_id";

function check(userErrors: UserError[]) {
  if (userErrors.length) throw new Error(userErrors.map((e) => e.message).join("; "));
}

async function setCartCookie(id: string) {
  (await cookies()).set(CART_COOKIE, id, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  });
}

export async function getCart(): Promise<Cart | null> {
  const id = (await cookies()).get(CART_COOKIE)?.value;
  if (!id || !storefrontConfigured) return null;
  const data = await storefront<{ cart: Cart | null }>(CART_QUERY, { id });
  return data.cart;
}

export async function addLine(merchandiseId: string, quantity: number) {
  const existing = await getCart();
  if (existing) {
    const data = await storefront<{ cartLinesAdd: { cart: Cart; userErrors: UserError[] } }>(CART_LINES_ADD, {
      cartId: existing.id,
      lines: [{ merchandiseId, quantity }],
    });
    check(data.cartLinesAdd.userErrors);
    return data.cartLinesAdd.cart;
  }
  const data = await storefront<{ cartCreate: { cart: Cart; userErrors: UserError[] } }>(CART_CREATE, {
    input: { lines: [{ merchandiseId, quantity }] },
  });
  check(data.cartCreate.userErrors);
  await setCartCookie(data.cartCreate.cart.id);
  return data.cartCreate.cart;
}

export async function updateLine(lineId: string, quantity: number) {
  const cart = await getCart();
  if (!cart) return null;
  if (quantity <= 0) {
    const data = await storefront<{ cartLinesRemove: { cart: Cart; userErrors: UserError[] } }>(CART_LINES_REMOVE, {
      cartId: cart.id,
      lineIds: [lineId],
    });
    check(data.cartLinesRemove.userErrors);
    return data.cartLinesRemove.cart;
  }
  const data = await storefront<{ cartLinesUpdate: { cart: Cart; userErrors: UserError[] } }>(CART_LINES_UPDATE, {
    cartId: cart.id,
    lines: [{ id: lineId, quantity }],
  });
  check(data.cartLinesUpdate.userErrors);
  return data.cartLinesUpdate.cart;
}

// Before handing off to Shopify checkout, stamp the cart with the signed-in
// account so the order webhook can file the order under that account.
export async function prepareCheckout(user: { id: string; email: string } | null): Promise<string | null> {
  const cart = await getCart();
  if (!cart || cart.totalQuantity === 0) return null;
  // Always rewrite the account tag, so a cart left behind on a shared
  // computer never files the next person's order under the last account.
  const attrs = await storefront<{ cartAttributesUpdate: { userErrors: UserError[] } }>(CART_ATTRIBUTES_UPDATE, {
    cartId: cart.id,
    attributes: [{ key: USER_ATTRIBUTE, value: user?.id ?? "" }],
  });
  check(attrs.cartAttributesUpdate.userErrors);
  if (user) {
    const identity = await storefront<{ cartBuyerIdentityUpdate: { userErrors: UserError[] } }>(
      CART_BUYER_IDENTITY_UPDATE,
      { cartId: cart.id, buyerIdentity: { email: user.email } },
    );
    check(identity.cartBuyerIdentityUpdate.userErrors);
  }
  return cart.checkoutUrl;
}

export async function clearCart() {
  (await cookies()).delete(CART_COOKIE);
}

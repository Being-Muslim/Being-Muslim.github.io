import type { Money } from "./types";

export function formatMoney(m: Money) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: m.currencyCode }).format(Number(m.amount));
}

// Shopify CDN images resize on the fly with a width parameter.
export function sized(url: string, width: number) {
  const u = new URL(url);
  u.searchParams.set("width", String(width));
  return u.toString();
}

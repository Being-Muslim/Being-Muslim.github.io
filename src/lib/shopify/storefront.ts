import { env } from "cloudflare:workers";
import { headers } from "next/headers";
import { API_VERSION, SHOP_DOMAIN } from "./config";

// Server-side Storefront API calls use the Headless channel's private token.
// Shopify asks for the shopper's IP so its bot protection sees real buyers,
// not our Worker.
// False until the Headless channel token is in 1Password and deployed.
export const storefrontConfigured = Boolean(env.SHOPIFY_STOREFRONT_PRIVATE_TOKEN);

export async function storefront<T>(query: string, variables?: Record<string, unknown>): Promise<T> {
  const h = await headers().catch(() => null);
  const buyerIp = h?.get("cf-connecting-ip") ?? undefined;
  const res = await fetch(`https://${SHOP_DOMAIN}/api/${API_VERSION}/graphql.json`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Shopify-Storefront-Private-Token": env.SHOPIFY_STOREFRONT_PRIVATE_TOKEN,
      ...(buyerIp ? { "Shopify-Storefront-Buyer-IP": buyerIp } : {}),
    },
    body: JSON.stringify({ query, variables }),
  });
  if (!res.ok) throw new Error(`Shopify Storefront API ${res.status}`);
  const body = (await res.json()) as { data?: T; errors?: { message: string }[] };
  if (body.errors?.length) throw new Error(`Shopify Storefront API: ${body.errors.map((e) => e.message).join("; ")}`);
  return body.data as T;
}

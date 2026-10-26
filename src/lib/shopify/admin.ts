import { env } from "cloudflare:workers";
import { API_VERSION, SHOP_DOMAIN } from "./config";

// Admin API access for our own Dev Dashboard app via the client credentials
// grant. Tokens live 24h; cache per isolate and refresh a minute early.
let cached: { token: string; expiresAt: number } | null = null;

async function adminToken(): Promise<string> {
  if (cached && cached.expiresAt > Date.now() + 60_000) return cached.token;
  const res = await fetch(`https://${SHOP_DOMAIN}/admin/oauth/access_token`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "client_credentials",
      client_id: env.SHOPIFY_CLIENT_ID,
      client_secret: env.SHOPIFY_CLIENT_SECRET,
    }),
  });
  if (!res.ok) throw new Error(`Shopify admin token request failed: ${res.status}`);
  const body = (await res.json()) as { access_token: string; expires_in: number };
  cached = { token: body.access_token, expiresAt: Date.now() + body.expires_in * 1000 };
  return cached.token;
}

export async function adminGraphql<T>(query: string, variables?: Record<string, unknown>): Promise<T> {
  const res = await fetch(`https://${SHOP_DOMAIN}/admin/api/${API_VERSION}/graphql.json`, {
    method: "POST",
    headers: { "Content-Type": "application/json", "X-Shopify-Access-Token": await adminToken() },
    body: JSON.stringify({ query, variables }),
  });
  if (!res.ok) throw new Error(`Shopify Admin API ${res.status}`);
  const body = (await res.json()) as { data?: T; errors?: { message: string }[] };
  if (body.errors?.length) throw new Error(`Shopify Admin API: ${body.errors.map((e) => e.message).join("; ")}`);
  return body.data as T;
}

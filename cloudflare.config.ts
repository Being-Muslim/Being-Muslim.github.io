import { bindings, defineConfig, defineWorker } from "cf/config";

export default defineConfig({
  worker: defineWorker({
    name: "being-muslim-site",
    entrypoint: "vinext/server/fetch-handler",
    compatibilityDate: "2026-10-26",
    compatibilityFlags: ["nodejs_compat"],
    assets: {
      notFoundHandling: "none",
    },
    env: {
      ASSETS: bindings.assets(),
      // Accounts, sessions and mirrored Shopify orders
      DB: bindings.d1({ name: "being-muslim", id: "22f212fc-8f5b-494b-9563-e45bac1c1598" }),
      SITE_URL: bindings.text(process.env.SITE_URL ?? "http://localhost:3001"),
      // Values live in 1Password; locally: op run --env-file=.env.op
      BETTER_AUTH_SECRET: bindings.secret(),
      SHOPIFY_CLIENT_ID: bindings.secret(),
      SHOPIFY_CLIENT_SECRET: bindings.secret(),
      SHOPIFY_STOREFRONT_PRIVATE_TOKEN: bindings.secret(),
    },
  }),
});

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
    },
  }),
});

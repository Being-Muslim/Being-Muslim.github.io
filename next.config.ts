import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for GitHub Pages (static-only host)
  output: "export",
  // GH Pages can't run the Next image optimizer; pages use plain <img> anyway
  images: { unoptimized: true },
  // Emit /route/index.html so GH Pages resolves /a, /a-staging/learn, etc.
  trailingSlash: true,
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Served by vinext on Cloudflare Workers; pages use plain <img>
  images: { unoptimized: true },
  // Keep /route/ URLs identical to the GitHub Pages build
  trailingSlash: true,
};

export default nextConfig;

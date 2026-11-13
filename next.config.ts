import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep hot-reload output separate from production build artifacts.
  distDir: process.env.NODE_ENV === "development" ? ".next-dev" : ".next",
};

export default nextConfig;

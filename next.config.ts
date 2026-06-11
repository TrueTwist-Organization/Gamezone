import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  devIndicators: false,
  trailingSlash: true,
  turbopack: {
    root: path.resolve(__dirname),
  },
  images: {
    localPatterns: [
      {
        pathname: "/media/g/**",
      },
      {
        pathname: "/img/**",
      },
    ],
  },
};

export default nextConfig;

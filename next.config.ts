import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  devIndicators: false,
  trailingSlash: true,
  outputFileTracingExcludes: {
    "/api/admin/local-games": ["public/games/**/*"],
    "/embed/[id]/[[...path]]": ["public/games/**/*"],
  },
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
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Permissions-Policy",
            value:
              "gamepad=*, autoplay=*, fullscreen=*, accelerometer=*, gyroscope=*, magnetometer=*, payment=*, camera=(), microphone=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;

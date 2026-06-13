import { NextResponse } from "next/server";
import { getSiteSettings } from "@/lib/settings-store";

export const revalidate = 3600;

export async function GET() {
  const settings = await getSiteSettings();
  const customAdsTxt = settings.ads.adsTxt.trim();

  if (customAdsTxt) {
    return new NextResponse(`${customAdsTxt}\n`, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "public, max-age=3600",
      },
    });
  }

  try {
    const response = await fetch("https://wonderwebhost.com/ads.txt", {
      next: { revalidate: 3600 },
    });

    if (response.ok) {
      const text = await response.text();
      return new NextResponse(text, {
        headers: {
          "Content-Type": "text/plain; charset=utf-8",
          "Cache-Control": "public, max-age=3600",
        },
      });
    }
  } catch {
    // Fall through to publisher ID line.
  }

  const publisherId = settings.ads.gptPublisherId.trim();
  if (publisherId) {
    const normalized = publisherId.startsWith("pub-") ? publisherId : `pub-${publisherId}`;
    return new NextResponse(`google.com, ${normalized}, DIRECT, f08c47fec0942fa0\n`, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "public, max-age=3600",
      },
    });
  }

  return new NextResponse("google.com, pub-6779260501485953, DIRECT, f08c47fec0942fa0\n", {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}

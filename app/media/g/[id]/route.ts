import { getGameImageSource } from "@/lib/game-sources";

type RouteParams = {
  params: Promise<{ id: string }>;
};

export async function GET(_request: Request, { params }: RouteParams) {
  const { id } = await params;
  const imageUrl = getGameImageSource(id);

  if (!imageUrl) {
    return new Response("Image not found", { status: 404 });
  }

  const upstream = await fetch(imageUrl, {
    headers: { "User-Agent": "Mozilla/5.0 (compatible; GameZoneMedia/1.0)" },
  });

  if (!upstream.ok) {
    return new Response("Image unavailable", { status: upstream.status });
  }

  return new Response(upstream.body, {
    headers: {
      "Content-Type": upstream.headers.get("content-type") ?? "image/webp",
      "Cache-Control": "public, max-age=86400",
    },
  });
}

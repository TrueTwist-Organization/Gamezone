import { prepareEmbeddedHtml } from "@/lib/embed-html";
import { embedContentSecurityPolicy, sanitizeEmbeddedJavaScript } from "@/lib/embed-shield";
import { getGamePlaySource } from "@/lib/game-sources";

type RouteParams = {
  params: Promise<{ id: string; path?: string[] }>;
};

function playBaseUrl(playUrl: string): string {
  return playUrl.endsWith("/") ? playUrl : `${playUrl}/`;
}

export async function GET(request: Request, { params }: RouteParams) {
  const { id, path = [] } = await params;
  const playUrl = getGamePlaySource(id);

  if (!playUrl) {
    return new Response("Game not found", { status: 404 });
  }

  const requestUrl = new URL(request.url);
  const base = playBaseUrl(playUrl);
  const subPath = path.join("/");
  const target = `${base}${subPath}${requestUrl.search}`;

  const upstream = await fetch(target, {
    headers: { "User-Agent": "Mozilla/5.0 (compatible; GameZoneEmbed/1.0)" },
    redirect: "follow",
  });

  if (!upstream.ok) {
    return new Response("Game unavailable", { status: upstream.status });
  }

  const contentType = upstream.headers.get("content-type") ?? "application/octet-stream";
  const embedPrefix = `/embed/${id}/`;

  const embedHeaders = {
    "Content-Security-Policy": embedContentSecurityPolicy,
    "X-Content-Type-Options": "nosniff",
  };

  if (contentType.includes("text/html") && subPath === "") {
    const html = await upstream.text();
    const body = prepareEmbeddedHtml(html, embedPrefix);

    return new Response(body, {
      headers: {
        ...embedHeaders,
        "Content-Type": "text/html; charset=utf-8",
        "Cache-Control": "public, max-age=300",
      },
    });
  }

  if (contentType.includes("javascript") || subPath.endsWith(".js")) {
    const source = await upstream.text();
    const sanitized = sanitizeEmbeddedJavaScript(source);

    return new Response(sanitized, {
      headers: {
        ...embedHeaders,
        "Content-Type": contentType,
        "Cache-Control": "public, max-age=86400",
      },
    });
  }

  return new Response(upstream.body, {
    headers: {
      ...embedHeaders,
      "Content-Type": contentType,
      "Cache-Control": "public, max-age=86400",
    },
  });
}

import { readFile } from "fs/promises";
import { prepareEmbeddedHtml } from "@/lib/embed-html";
import { embedContentSecurityPolicy, sanitizeEmbeddedJavaScript } from "@/lib/embed-shield";
import { getGamePlaySource } from "@/lib/game-sources";
import {
  contentTypeForPath,
  isLocalGamePlayUrl,
  resolveLocalGameFile,
} from "@/lib/local-games";

type RouteParams = {
  params: Promise<{ id: string; path?: string[] }>;
};

function playBaseUrl(playUrl: string): string {
  return playUrl.endsWith("/") ? playUrl : `${playUrl}/`;
}

const embedHeaders = {
  "Content-Security-Policy": embedContentSecurityPolicy,
  "X-Content-Type-Options": "nosniff",
};

async function serveLocalGameFile(
  playUrl: string,
  subPath: string,
  embedPrefix: string,
) {
  const filePath = resolveLocalGameFile(playUrl, subPath);
  const contentType = contentTypeForPath(filePath);
  const source = await readFile(filePath);

  if (contentType.includes("text/html") && subPath === "") {
    const body = prepareEmbeddedHtml(source.toString("utf-8"), embedPrefix);
    return new Response(body, {
      headers: {
        ...embedHeaders,
        "Content-Type": "text/html; charset=utf-8",
        "Cache-Control": "public, max-age=300",
      },
    });
  }

  if (contentType.includes("javascript") || filePath.endsWith(".js")) {
    const sanitized = sanitizeEmbeddedJavaScript(source.toString("utf-8"));
    return new Response(sanitized, {
      headers: {
        ...embedHeaders,
        "Content-Type": contentType,
        "Cache-Control": "public, max-age=86400",
      },
    });
  }

  return new Response(source, {
    headers: {
      ...embedHeaders,
      "Content-Type": contentType,
      "Cache-Control": "public, max-age=86400",
    },
  });
}

async function serveLocalGameFileFromStatic(
  request: Request,
  playUrl: string,
  subPath: string,
  embedPrefix: string,
) {
  const origin = new URL(request.url).origin;
  const base = playBaseUrl(playUrl);
  const relativePath = subPath.replace(/^\/+/, "") || "index.html";
  const target = `${origin}${base}${relativePath}`;

  const upstream = await fetch(target, {
    headers: { "User-Agent": "Mozilla/5.0 (compatible; GameZoneEmbed/1.0)" },
    redirect: "follow",
  });

  if (!upstream.ok) {
    return new Response("Game unavailable", { status: upstream.status });
  }

  const contentType = upstream.headers.get("content-type") ?? contentTypeForPath(relativePath);

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

  if (contentType.includes("javascript") || relativePath.endsWith(".js")) {
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

export async function GET(request: Request, { params }: RouteParams) {
  const { id, path = [] } = await params;
  const playUrl = getGamePlaySource(id);

  if (!playUrl) {
    return new Response("Game not found", { status: 404 });
  }

  const requestUrl = new URL(request.url);
  const subPath = path.join("/");
  const embedPrefix = `/embed/${id}/`;

  if (isLocalGamePlayUrl(playUrl)) {
    try {
      if (process.env.VERCEL) {
        return await serveLocalGameFileFromStatic(request, playUrl, subPath, embedPrefix);
      }
      return await serveLocalGameFile(playUrl, subPath, embedPrefix);
    } catch {
      return new Response("Game unavailable", { status: 404 });
    }
  }

  const base = playBaseUrl(playUrl);
  const target = `${base}${subPath}${requestUrl.search}`;

  const upstream = await fetch(target, {
    headers: { "User-Agent": "Mozilla/5.0 (compatible; GameZoneEmbed/1.0)" },
    redirect: "follow",
  });

  if (!upstream.ok) {
    return new Response("Game unavailable", { status: upstream.status });
  }

  const contentType = upstream.headers.get("content-type") ?? "application/octet-stream";

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

import path from "path";

const LOCAL_GAME_ROOT = "/games/";

export function isLocalGamePlayUrl(playUrl: string | undefined): playUrl is string {
  return Boolean(playUrl?.startsWith(LOCAL_GAME_ROOT));
}

export function resolveLocalGameFile(playUrl: string, subPath = ""): string {
  const baseDir = path.resolve(process.cwd(), "public", playUrl.replace(/^\/+/, ""));
  const relativePath = subPath.replace(/^\/+/, "") || "index.html";
  const resolved = path.resolve(baseDir, relativePath);

  if (!resolved.startsWith(baseDir)) {
    throw new Error("Invalid game path");
  }

  return resolved;
}

export function contentTypeForPath(filePath: string): string {
  const ext = path.extname(filePath).toLowerCase();
  const types: Record<string, string> = {
    ".html": "text/html; charset=utf-8",
    ".js": "application/javascript; charset=utf-8",
    ".css": "text/css; charset=utf-8",
    ".json": "application/json; charset=utf-8",
    ".webp": "image/webp",
    ".png": "image/png",
    ".webm": "video/webm",
    ".wasm": "application/wasm",
  };
  return types[ext] ?? "application/octet-stream";
}

import { cpSync, existsSync, mkdirSync, readdirSync, readFileSync, rmSync, statSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { execSync } from "node:child_process";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const PUBLIC_GAMES = path.join(ROOT, "public", "games");
const REGISTRY_FILE = path.join(ROOT, "data", "local-games.json");
const sourcePath =
  process.argv[2] ?? path.join(process.env.USERPROFILE ?? "", "Downloads", "games.zip");
const tmpRoot = path.join(ROOT, "tmp-extract", "games-zip-import");

function folderToSlug(name) {
  return name.replace(/^\d+-/, "").replace(/\.zip$/i, "").replace(/_/g, "-");
}

function findGameRoot(dir, depth = 0) {
  if (depth > 4) return null;
  if (existsSync(path.join(dir, "index.html"))) return dir;
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (!entry.isDirectory() || entry.name.startsWith("__MACOSX") || entry.name.startsWith("_")) continue;
    const found = findGameRoot(path.join(dir, entry.name), depth + 1);
    if (found) return found;
  }
  return null;
}

function extractZip(zipFile, destDir) {
  mkdirSync(destDir, { recursive: true });
  execSync(
    `powershell -NoProfile -Command "Expand-Archive -LiteralPath '${zipFile.replace(/'/g, "''")}' -DestinationPath '${destDir.replace(/'/g, "''")}' -Force"`,
    { stdio: "inherit" },
  );
}

function loadSlugToId() {
  const map = new Map();
  if (!existsSync(REGISTRY_FILE)) return map;
  const registry = JSON.parse(readFileSync(REGISTRY_FILE, "utf8"));
  for (const [gameId, entry] of Object.entries(registry.games ?? {})) {
    map.set(entry.slug, gameId);
  }
  return map;
}

function resolveZipSources(inputPath) {
  if (!existsSync(inputPath)) {
    throw new Error(`Path not found: ${inputPath}`);
  }

  const stats = statSync(inputPath);
  if (stats.isDirectory()) {
    if (existsSync(path.join(inputPath, "games"))) {
      const nested = path.join(inputPath, "games");
      if (readdirSync(nested).some((name) => name.toLowerCase().endsWith(".zip"))) {
        return readdirSync(nested)
          .filter((name) => name.toLowerCase().endsWith(".zip"))
          .map((name) => path.join(nested, name));
      }
    }
    return readdirSync(inputPath)
      .filter((name) => name.toLowerCase().endsWith(".zip"))
      .map((name) => path.join(inputPath, name));
  }

  if (inputPath.toLowerCase().endsWith(".zip")) {
    return [inputPath];
  }

  throw new Error(`Expected a .zip file or folder of .zip files: ${inputPath}`);
}

function importGameZip(zipFile, slugToId) {
  const slug = folderToSlug(path.basename(zipFile));
  const extractDir = path.join(tmpRoot, "nested", slug);
  rmSync(extractDir, { recursive: true, force: true });
  extractZip(zipFile, extractDir);

  const gameRoot = findGameRoot(extractDir);
  if (!gameRoot) {
    return { slug, status: "error", message: "index.html not found" };
  }

  const dest = path.join(PUBLIC_GAMES, slug);
  rmSync(dest, { recursive: true, force: true });
  cpSync(gameRoot, dest, { recursive: true });

  return {
    slug,
    gameId: slugToId.get(slug) ?? "not in registry",
    status: "copied",
    dest: `public/games/${slug}/`,
    playUrl: slugToId.has(slug) ? `/games/${slugToId.get(slug)}/` : null,
  };
}

mkdirSync(tmpRoot, { recursive: true });
const slugToId = loadSlugToId();
const zipFiles = resolveZipSources(sourcePath);

if (zipFiles.length === 0) {
  console.error(`No .zip game files found for: ${sourcePath}`);
  process.exit(1);
}

const results = zipFiles.map((zipFile) => importGameZip(zipFile, slugToId));

console.log(
  JSON.stringify(
    {
      sourcePath,
      total: results.length,
      copied: results.filter((item) => item.status === "copied").length,
      errors: results.filter((item) => item.status === "error").length,
      results,
    },
    null,
    2,
  ),
);

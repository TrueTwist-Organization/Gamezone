import { cpSync, existsSync, readFileSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const PUBLIC_GAMES = path.join(ROOT, "public", "games");
const REGISTRY_FILE = path.join(ROOT, "data", "local-games.json");
const LIST_DATA = path.join(ROOT, "lib", "list-data.json");
const GAMES_CACHE = path.join(ROOT, "lib", "games-cache.json");

const MANUAL_BY_SLUG = {
  "fruit-cutter-fun-game": "31676",
  "cube-speed-dash-reflex-arcade-run": "33992",
  "bubble-shooter-classic-play-online-free": "28983",
  "black-and-pink-puzzle-challenge": "34264",
  "kai-archer-adventure-quest": "32212",
  "angry-plants-garden-defense": "30009",
  "enchanted-battlements-2d-fantasy-defense": "33490",
  "fish-master-relaxed-fishing-fun": "34318",
  "brainrot-click-to-hatch-game": "34835",
  "color-ball-shoot-aim-match-solve": "30710",
  "bullets-master-puzzle-shooter": "32934",
  "build-a-burger-runner-cooking-game": "31415",
  "balloon-blitz": "40001",
  "weighted-seesaw": "40002",
  "skibidi-toilet-soccer": "29221",
  "bird-sort-puzzles": "32957",
  "diamond-digger": "33375",
  "bubble-merge-2048-puzzle-shooter": "32504",
};

const SOURCES = [
  path.join(ROOT, "tmp-extract", "games-download", "games download", "games"),
  path.join(ROOT, "tmp-extract", "games", "games"),
  path.join(ROOT, "tmp-extract", "final_game_puzzle_15", "final_game_puzzle_15"),
  path.join(ROOT, "tmp-extract", "nested"),
];

function folderToSlug(name) {
  return name.replace(/^\d+-/, "").replace(/\.zip$/i, "").replace(/_/g, "-");
}

function readGameTitle(gameDir) {
  const indexPath = path.join(gameDir, "index.html");
  if (!existsSync(indexPath)) return null;
  const html = readFileSync(indexPath, "utf8");
  const match = html.match(/<title[^>]*>([^<]+)<\/title>/i);
  if (!match) return null;
  const title = match[1].trim();
  if (!title || title === "www.layabox.com" || title.startsWith("Unity Web")) {
    return null;
  }
  return title;
}

function titleFromSlug(slug) {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
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

function collectSources() {
  const items = [];
  const seen = new Set();

  function add(sourceRoot, label) {
    const slug = folderToSlug(path.basename(label));
    if (seen.has(slug)) return;
    seen.add(slug);
    items.push({ sourceRoot, slug, label });
  }

  for (const source of SOURCES) {
    if (!existsSync(source)) continue;
    for (const entry of readdirSync(source, { withFileTypes: true })) {
      if (entry.name.startsWith("_") || entry.name === "__MACOSX") continue;
      const fullPath = path.join(source, entry.name);
      if (entry.isDirectory()) {
        const root = findGameRoot(fullPath);
        if (root) add(root, entry.name);
      }
    }
  }

  return items;
}

function copyGame(sourceRoot, slug) {
  const dest = path.join(PUBLIC_GAMES, slug);
  rmSync(dest, { recursive: true, force: true });
  cpSync(sourceRoot, dest, { recursive: true });
}

const listData = JSON.parse(readFileSync(LIST_DATA, "utf8"));
const gamesCache = JSON.parse(readFileSync(GAMES_CACHE, "utf8"));
const registry = { updatedAt: new Date().toISOString(), games: {} };

let nextLocalId = 50001;
const usedIds = new Set([
  ...listData.all.map((game) => game.id),
  ...Object.keys(gamesCache),
  ...Object.values(MANUAL_BY_SLUG),
]);

function allocateId() {
  while (usedIds.has(String(nextLocalId))) {
    nextLocalId += 1;
  }
  const id = String(nextLocalId);
  usedIds.add(id);
  nextLocalId += 1;
  return id;
}

function ensureCatalogEntry(id, title, category = "Puzzles") {
  const href = `/games/${id}`;
  const image = `/img/game/${id}-512x384.png`;

  if (!listData.all.find((game) => game.id === id)) {
    listData.all.unshift({
      id,
      title,
      image,
      href,
      category,
      score: 7.5,
    });
  }

  if (!gamesCache[id]) {
    gamesCache[id] = {
      id,
      title,
      image,
      href,
      badge: "NOW",
      category,
      score: 7.5,
      updated: "N/A",
      tags: [category, "HTML5", "1 Player"],
      howToPlay: "Mouse click or touch the screen to play",
      description: `Play ${title} online for free on GameZone.`,
      editorsView: "",
      playUrl: `/games/${id}/`,
    };
  } else {
    gamesCache[id].playUrl = `/games/${id}/`;
  }
}

const imported = [];
const sources = collectSources();

for (const item of sources) {
  const title = readGameTitle(item.sourceRoot) ?? titleFromSlug(item.slug);
  copyGame(item.sourceRoot, item.slug);

  let gameId = MANUAL_BY_SLUG[item.slug];
  if (!gameId) {
    gameId = allocateId();
    ensureCatalogEntry(gameId, title);
    gamesCache[gameId].playUrl = `/games/${item.slug}/`;
  } else {
    ensureCatalogEntry(gameId, gamesCache[gameId]?.title ?? listData.all.find((g) => g.id === gameId)?.title ?? title);
    gamesCache[gameId].playUrl = `/games/${item.slug}/`;
  }

  registry.games[gameId] = { slug: item.slug, title };
  imported.push({ gameId, slug: item.slug, title });
}

writeFileSync(REGISTRY_FILE, `${JSON.stringify(registry, null, 2)}\n`, "utf8");
writeFileSync(LIST_DATA, `${JSON.stringify(listData, null, 2)}\n`, "utf8");
writeFileSync(GAMES_CACHE, `${JSON.stringify(gamesCache, null, 2)}\n`, "utf8");

console.log(JSON.stringify({ total: imported.length, imported }, null, 2));

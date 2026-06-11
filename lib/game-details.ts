import gamesCache from "./games-cache.json";
import listData from "./list-data.json";
import type { GameDetail, RecommendedGame } from "./types";

type CachedGame = Omit<GameDetail, "recommended">;

function cleanText(text: string): string {
  return text
    .replace(/<\/?div>/g, "")
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .trim();
}

function playUrlFromImage(image: string): string {
  const hashMatch = image.match(/\/([a-z0-9]+)-512x384\.webp$/i);
  return hashMatch ? `https://html5.gamemonetize.com/${hashMatch[1]}/` : "";
}

function buildDetailFromList(id: string): CachedGame | undefined {
  const item = listData.all.find((game) => game.id === id);
  if (!item) return undefined;

  return {
    id: item.id,
    title: item.title,
    image: item.image,
    href: item.href,
    badge: "NOW",
    category: item.category,
    score: item.score,
    updated: "N/A",
    tags: [item.category],
    howToPlay: "Use mouse or touch controls to play.",
    description: `Play ${item.title} online for free.`,
    editorsView: "",
    playUrl: playUrlFromImage(item.image),
  };
}

function withRecommended(game: CachedGame): GameDetail {
  const pool = Object.values(gamesCache as Record<string, CachedGame>).filter(
    (item) => item.id !== game.id,
  );
  const sameCategory = pool.filter((item) => item.category === game.category);
  const recommended: RecommendedGame[] = [...sameCategory, ...pool]
    .filter((item, index, arr) => arr.findIndex((x) => x.id === item.id) === index)
    .slice(0, 12)
    .map((item) => ({ id: item.id, title: item.title, image: item.image }));

  return { ...game, recommended };
}

export function getGameDetail(id: string): GameDetail | undefined {
  const raw =
    (gamesCache as Record<string, CachedGame>)[id] ?? buildDetailFromList(id);
  if (!raw) return undefined;

  return withRecommended({
    ...raw,
    howToPlay: cleanText(raw.howToPlay),
    description: cleanText(raw.description),
    editorsView: cleanText(raw.editorsView),
  });
}

export function getAllGameIds(): string[] {
  return Object.keys(gamesCache);
}

export function getGameFromIndex(id: string): GameDetail | undefined {
  return getGameDetail(id);
}

import gamesData from "@/lib/games-data.json";
import { getLocalGamesRegistry } from "@/lib/local-games-registry";
import listData from "@/lib/list-data.json";
import gamesCache from "@/lib/games-cache.json";
import type { GameItem } from "@/lib/types";

function gameCardFromId(id: string): GameItem | undefined {
  const fromList = listData.all.find((game) => game.id === id);
  if (fromList) {
    return {
      id: fromList.id,
      title: fromList.title,
      image: fromList.image,
      href: fromList.href,
    };
  }

  const fromCache = (gamesCache as Record<string, GameItem & { id: string }>)[id];
  if (fromCache) {
    return {
      id: fromCache.id,
      title: fromCache.title,
      image: fromCache.image,
      href: fromCache.href,
    };
  }

  return undefined;
}

export function getHomepagePopularGames(): GameItem[] {
  const registry = getLocalGamesRegistry();
  const localCards = Object.keys(registry.games)
    .map((id) => gameCardFromId(id))
    .filter((game): game is GameItem => Boolean(game));

  const seen = new Set<string>();
  const merged: GameItem[] = [];

  for (const game of [...localCards, ...gamesData.popular]) {
    const id = game.id ?? game.href;
    if (seen.has(id)) {
      continue;
    }
    seen.add(id);
    merged.push(game);
  }

  return merged;
}

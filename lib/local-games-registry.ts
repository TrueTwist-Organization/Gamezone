import localGamesJson from "@/data/local-games.json";
import type { LocalGameEntry, LocalGamesRegistry } from "@/lib/local-games.types";

const registry = localGamesJson as LocalGamesRegistry;

export function getLocalGamesRegistry(): LocalGamesRegistry {
  return registry;
}

export function getLocalGameEntry(id: string): LocalGameEntry | undefined {
  return registry.games[id];
}

export function getLocalGamePlayUrl(id: string): string | undefined {
  const entry = getLocalGameEntry(id);
  if (!entry?.slug) {
    return undefined;
  }
  return `/games/${entry.slug}/`;
}

export function getLocalGameIdForSlug(slug: string): string | undefined {
  return Object.entries(registry.games).find(([, entry]) => entry.slug === slug)?.[0];
}

export function getAllLocalGameIds(): string[] {
  return Object.keys(registry.games);
}

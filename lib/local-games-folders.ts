import type { LocalGameFolder, LocalGamesRegistry } from "@/lib/local-games.types";

export function foldersFromRegistry(registry: LocalGamesRegistry): LocalGameFolder[] {
  return Object.entries(registry.games)
    .map(([gameId, entry]) => ({
      slug: entry.slug,
      hasIndex: true,
      fileCount: 0,
      linkedGameId: gameId,
    }))
    .sort((a, b) => a.slug.localeCompare(b.slug));
}

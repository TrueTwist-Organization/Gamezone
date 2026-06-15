import { access, readdir, stat } from "node:fs/promises";
import path from "node:path";
import type { LocalGameFolder, LocalGamesRegistry } from "@/lib/local-games.types";

const GAMES_DIR = path.join(process.cwd(), "public", "games");

async function folderHasIndex(slug: string): Promise<boolean> {
  try {
    await access(path.join(GAMES_DIR, slug, "index.html"));
    return true;
  } catch {
    return false;
  }
}

async function countFolderFiles(dir: string): Promise<number> {
  let count = 0;
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      count += await countFolderFiles(fullPath);
    } else if (entry.isFile()) {
      count += 1;
    }
  }
  return count;
}

export async function scanLocalGameFolders(registry: LocalGamesRegistry): Promise<LocalGameFolder[]> {
  let entries;
  try {
    entries = await readdir(GAMES_DIR, { withFileTypes: true });
  } catch {
    return [];
  }

  const slugToGameId = new Map(
    Object.entries(registry.games).map(([gameId, entry]) => [entry.slug, gameId]),
  );

  const folders: LocalGameFolder[] = [];
  for (const entry of entries) {
    if (!entry.isDirectory()) {
      continue;
    }

    const slug = entry.name;
    const folderPath = path.join(GAMES_DIR, slug);
    const folderStat = await stat(folderPath);
    if (!folderStat.isDirectory()) {
      continue;
    }

    folders.push({
      slug,
      hasIndex: await folderHasIndex(slug),
      fileCount: await countFolderFiles(folderPath),
      linkedGameId: slugToGameId.get(slug),
    });
  }

  return folders.sort((a, b) => a.slug.localeCompare(b.slug));
}

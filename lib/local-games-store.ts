import { access, readdir, readFile, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import type { LocalGameFolder, LocalGamesRegistry } from "@/lib/local-games.types";

const REGISTRY_FILE = path.join(process.cwd(), "data", "local-games.json");
const GAMES_DIR = path.join(process.cwd(), "public", "games");

function isVercelRuntime(): boolean {
  return Boolean(process.env.VERCEL);
}

function slugPattern(slug: string): boolean {
  return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug);
}

export function validateLocalGamesRegistry(input: unknown): LocalGamesRegistry {
  if (!input || typeof input !== "object") {
    throw new Error("Invalid local games payload.");
  }

  const candidate = input as Partial<LocalGamesRegistry>;
  if (!candidate.games || typeof candidate.games !== "object") {
    throw new Error("Local games registry must include a games map.");
  }

  for (const [gameId, entry] of Object.entries(candidate.games)) {
    if (!gameId.trim()) {
      throw new Error("Game IDs cannot be empty.");
    }
    if (!entry || typeof entry !== "object" || typeof entry.slug !== "string") {
      throw new Error(`Invalid entry for game ${gameId}.`);
    }
    if (!slugPattern(entry.slug)) {
      throw new Error(`Invalid folder slug "${entry.slug}" for game ${gameId}.`);
    }
    if (entry.title !== undefined && typeof entry.title !== "string") {
      throw new Error(`Invalid title for game ${gameId}.`);
    }
  }

  return {
    updatedAt: candidate.updatedAt ?? new Date().toISOString(),
    games: candidate.games,
  };
}

async function readRegistryFromFile(): Promise<LocalGamesRegistry> {
  try {
    const raw = await readFile(REGISTRY_FILE, "utf8");
    return validateLocalGamesRegistry(JSON.parse(raw));
  } catch {
    return { updatedAt: new Date().toISOString(), games: {} };
  }
}

async function saveRegistryToFile(registry: LocalGamesRegistry): Promise<void> {
  const payload = JSON.stringify(registry, null, 2);
  await writeFile(REGISTRY_FILE, payload, "utf8");
}

export async function getLocalGamesRegistryFromStore(): Promise<LocalGamesRegistry> {
  return readRegistryFromFile();
}

export async function saveLocalGamesRegistry(registry: LocalGamesRegistry): Promise<{ storage: "file" | "readonly" }> {
  if (isVercelRuntime()) {
    throw new Error(
      "Live site is read-only. Edit data/local-games.json in your project, commit, and redeploy to Vercel.",
    );
  }

  const nextRegistry: LocalGamesRegistry = {
    ...validateLocalGamesRegistry(registry),
    updatedAt: new Date().toISOString(),
  };

  await saveRegistryToFile(nextRegistry);
  return { storage: "file" };
}

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

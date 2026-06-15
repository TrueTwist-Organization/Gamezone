import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import type { LocalGamesRegistry } from "@/lib/local-games.types";

const REGISTRY_FILE = path.join(process.cwd(), "data", "local-games.json");

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

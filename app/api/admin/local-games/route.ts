import { NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import { listData } from "@/lib/list-data";
import { foldersFromRegistry } from "@/lib/local-games-folders";
import {
  getLocalGamesRegistryFromStore,
  saveLocalGamesRegistry,
  validateLocalGamesRegistry,
} from "@/lib/local-games-store";

async function resolveLocalGameFolders(registry: Awaited<ReturnType<typeof getLocalGamesRegistryFromStore>>) {
  if (process.env.VERCEL) {
    return foldersFromRegistry(registry);
  }

  const { scanLocalGameFolders } = await import("@/lib/local-games-scan");
  return scanLocalGameFolders(registry);
}

export async function GET() {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  const registry = await getLocalGamesRegistryFromStore();
  const folders = await resolveLocalGameFolders(registry);
  const catalog = listData.all.map((game) => ({
    id: game.id,
    title: game.title,
    href: game.href,
    linkedSlug: registry.games[game.id]?.slug,
  }));

  return NextResponse.json({ registry, folders, catalog });
}

export async function PUT(request: Request) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  try {
    const body = await request.json();
    const registry = validateLocalGamesRegistry(body);

    if (!process.env.VERCEL) {
      const { scanLocalGameFolders } = await import("@/lib/local-games-scan");
      const folders = await scanLocalGameFolders(registry);

      for (const entry of Object.values(registry.games)) {
        const folder = folders.find((item) => item.slug === entry.slug);
        if (!folder) {
          throw new Error(`Folder "public/games/${entry.slug}/" was not found.`);
        }
        if (!folder.hasIndex) {
          throw new Error(`Folder "public/games/${entry.slug}/" is missing index.html.`);
        }
      }
    }

    const result = await saveLocalGamesRegistry(registry);
    const nextFolders = await resolveLocalGameFolders(registry);

    return NextResponse.json({
      ok: true,
      storage: result.storage,
      registry,
      folders: nextFolders,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed to save local games.";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}

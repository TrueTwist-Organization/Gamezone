"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import type { LocalGameFolder, LocalGamesRegistry } from "@/lib/local-games.types";

type CatalogGame = {
  id: string;
  title: string;
  href: string;
  linkedSlug?: string;
};

type LocalGamesPayload = {
  registry: LocalGamesRegistry;
  folders: LocalGameFolder[];
  catalog: CatalogGame[];
};

const inputClass =
  "w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white outline-none ring-violet-500 focus:ring-2";

export function GamesEditor() {
  const [payload, setPayload] = useState<LocalGamesPayload | null>(null);
  const [selectedGameId, setSelectedGameId] = useState("");
  const [selectedSlug, setSelectedSlug] = useState("");
  const [status, setStatus] = useState("");
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(true);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/admin/local-games/");
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error ?? "Failed to load local games.");
      }
      setPayload(data);
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Failed to load local games.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void load();
  }, [load]);

  const registry = payload?.registry;
  const folders = payload?.folders ?? [];
  const catalog = payload?.catalog ?? [];

  const unlinkedFolders = useMemo(
    () => folders.filter((folder) => !folder.linkedGameId && folder.hasIndex),
    [folders],
  );

  const unlinkedCatalog = useMemo(
    () => catalog.filter((game) => !registry?.games[game.id]),
    [catalog, registry],
  );

  const saveRegistry = async (nextRegistry: LocalGamesRegistry) => {
    setSaving(true);
    setStatus("");
    try {
      const response = await fetch("/api/admin/local-games/", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(nextRegistry),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error ?? "Failed to save local games.");
      }
      setPayload((current) =>
        current
          ? {
              ...current,
              registry: data.registry,
              folders: data.folders,
              catalog: current.catalog.map((game) => ({
                ...game,
                linkedSlug: data.registry.games[game.id]?.slug,
              })),
            }
          : current,
      );
      setStatus(
        data.storage === "file"
          ? "Saved to data/local-games.json. Commit and deploy to update the live site."
          : "Saved successfully.",
      );
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Failed to save local games.");
    } finally {
      setSaving(false);
    }
  };

  const linkGame = async () => {
    if (!registry || !selectedGameId || !selectedSlug) {
      setStatus("Choose both a catalog game and an uploaded folder.");
      return;
    }

    const nextRegistry: LocalGamesRegistry = {
      ...registry,
      games: {
        ...registry.games,
        [selectedGameId]: { slug: selectedSlug },
      },
    };

    await saveRegistry(nextRegistry);
    setSelectedGameId("");
    setSelectedSlug("");
  };

  const unlinkGame = async (gameId: string) => {
    if (!registry) {
      return;
    }

    const nextGames = { ...registry.games };
    delete nextGames[gameId];
    await saveRegistry({ ...registry, games: nextGames });
  };

  if (loading) {
    return <p className="text-sm text-slate-400">Loading local games...</p>;
  }

  if (!payload || !registry) {
    return <p className="text-sm text-red-300">{status || "Unable to load local games."}</p>;
  }

  return (
    <div className="space-y-6">
      <section className="rounded-2xl border border-violet-500/30 bg-violet-500/10 p-5 text-sm text-violet-100">
        <h2 className="text-lg font-semibold text-white">How to add a self-hosted game</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5">
          <li>Copy the full game folder into <code className="rounded bg-slate-900 px-1">public/games/your-slug/</code>.</li>
          <li>Make sure the folder contains an <code className="rounded bg-slate-900 px-1">index.html</code> entry file.</li>
          <li>Link the folder below to an existing catalog game ID.</li>
          <li>Commit <code className="rounded bg-slate-900 px-1">public/games/</code> and <code className="rounded bg-slate-900 px-1">data/local-games.json</code>, then deploy.</li>
        </ol>
      </section>

      <section className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
        <h2 className="text-lg font-semibold">Link Uploaded Folder</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <label className="block space-y-2">
            <span className="text-sm font-medium text-slate-200">Catalog game</span>
            <select
              className={inputClass}
              value={selectedGameId}
              onChange={(event) => setSelectedGameId(event.target.value)}
            >
              <option value="">Select a game ID</option>
              {unlinkedCatalog.map((game) => (
                <option key={game.id} value={game.id}>
                  {game.id} — {game.title}
                </option>
              ))}
            </select>
          </label>
          <label className="block space-y-2">
            <span className="text-sm font-medium text-slate-200">Uploaded folder</span>
            <select
              className={inputClass}
              value={selectedSlug}
              onChange={(event) => setSelectedSlug(event.target.value)}
            >
              <option value="">Select a folder slug</option>
              {unlinkedFolders.map((folder) => (
                <option key={folder.slug} value={folder.slug}>
                  {folder.slug} ({folder.fileCount} files)
                </option>
              ))}
            </select>
          </label>
        </div>
        <Button onClick={linkGame} disabled={saving || !selectedGameId || !selectedSlug}>
          Link Game
        </Button>
      </section>

      <section className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
        <h2 className="text-lg font-semibold">Linked Local Games</h2>
        {Object.keys(registry.games).length === 0 ? (
          <p className="text-sm text-slate-400">No local games linked yet.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead className="text-slate-400">
                <tr>
                  <th className="px-3 py-2">Game ID</th>
                  <th className="px-3 py-2">Folder</th>
                  <th className="px-3 py-2">Play path</th>
                  <th className="px-3 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(registry.games).map(([gameId, entry]) => (
                  <tr key={gameId} className="border-t border-slate-800">
                    <td className="px-3 py-3 font-medium">{gameId}</td>
                    <td className="px-3 py-3">{entry.slug}</td>
                    <td className="px-3 py-3 text-slate-300">/embed/{gameId}/</td>
                    <td className="px-3 py-3">
                      <Button variant="secondary" onClick={() => unlinkGame(gameId)} disabled={saving}>
                        Unlink
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      <section className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
        <h2 className="text-lg font-semibold">Uploaded Folders</h2>
        {folders.length === 0 ? (
          <p className="text-sm text-slate-400">No folders found in public/games/ yet.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead className="text-slate-400">
                <tr>
                  <th className="px-3 py-2">Folder</th>
                  <th className="px-3 py-2">Files</th>
                  <th className="px-3 py-2">index.html</th>
                  <th className="px-3 py-2">Linked game</th>
                </tr>
              </thead>
              <tbody>
                {folders.map((folder) => (
                  <tr key={folder.slug} className="border-t border-slate-800">
                    <td className="px-3 py-3 font-medium">{folder.slug}</td>
                    <td className="px-3 py-3">{folder.fileCount}</td>
                    <td className="px-3 py-3">{folder.hasIndex ? "Yes" : "Missing"}</td>
                    <td className="px-3 py-3">{folder.linkedGameId ?? "—"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      {status ? <p className="text-sm text-slate-300">{status}</p> : null}
    </div>
  );
}

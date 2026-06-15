import Link from "next/link";
import { AdminShell } from "@/components/admin/admin-shell";
import { getLocalGamesRegistryFromStore } from "@/lib/local-games-store";
import { getSiteSettings } from "@/lib/settings-store";

export default async function AdminDashboardPage() {
  const settings = await getSiteSettings();
  const localGames = await getLocalGamesRegistryFromStore();
  const localGameCount = Object.keys(localGames.games).length;

  return (
    <AdminShell
      title="Dashboard"
      description="Manage your site content and monetization without editing code."
    >
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <Link
          href="/admin/games/"
          className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 transition-colors hover:border-violet-500"
        >
          <h2 className="text-lg font-semibold">Local Games</h2>
          <p className="mt-2 text-sm text-slate-400">
            Link uploaded folders in public/games/ to catalog game IDs.
          </p>
          <p className="mt-4 text-xs text-violet-300">{localGameCount} linked local game(s)</p>
        </Link>
        <Link
          href="/admin/ads/"
          className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 transition-colors hover:border-violet-500"
        >
          <h2 className="text-lg font-semibold">Ad Slots</h2>
          <p className="mt-2 text-sm text-slate-400">
            Replace demo GPT units with your real AdX / AdSense code.
          </p>
          <p className="mt-4 text-xs text-violet-300">
            Header: {settings.ads.headerBanner.provider} · Bottom: {settings.ads.bottomAnchor.provider} · Pre-play:{" "}
            {settings.ads.gameInterstitial.provider}
          </p>
        </Link>
        <Link
          href="/admin/site/"
          className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 transition-colors hover:border-violet-500"
        >
          <h2 className="text-lg font-semibold">Site Info</h2>
          <p className="mt-2 text-sm text-slate-400">Update site name, tagline, and description.</p>
          <p className="mt-4 text-xs text-violet-300">{settings.site.name}</p>
        </Link>
        <Link
          href="/admin/homepage/"
          className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 transition-colors hover:border-violet-500"
        >
          <h2 className="text-lg font-semibold">Homepage</h2>
          <p className="mt-2 text-sm text-slate-400">Choose which game appears in the hero banner.</p>
          <p className="mt-4 text-xs text-violet-300">Hero game ID: {settings.homepage.heroGameId}</p>
        </Link>
      </div>
      <p className="mt-6 text-sm text-slate-500">Last updated: {new Date(settings.updatedAt).toLocaleString()}</p>
    </AdminShell>
  );
}

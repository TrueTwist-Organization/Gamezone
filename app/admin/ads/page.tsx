import { AdminShell } from "@/components/admin/admin-shell";
import { SettingsEditor } from "@/components/admin/settings-editor";
import { getSiteSettings } from "@/lib/settings-store";

export default async function AdminAdsPage() {
  const settings = await getSiteSettings();

  return (
    <AdminShell
      title="Ad Slots"
      description="Switch from demo ads to your real Google Ad Manager (AdX), AdSense, or custom embed code."
    >
      <div className="mb-6 rounded-2xl border border-violet-500/30 bg-violet-500/10 p-4 text-sm text-violet-100">
        <p className="font-medium">Quick setup</p>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-violet-50/90">
          <li>
            <strong>AdX / GAM:</strong> choose GPT, paste your ad unit path like{" "}
            <code className="rounded bg-slate-900 px-1">/12345678/your_ad_unit</code>
          </li>
          <li>
            <strong>AdSense:</strong> choose AdSense, paste your <code className="rounded bg-slate-900 px-1">ca-pub-</code>{" "}
            client and slot ID
          </li>
          <li>
            <strong>Custom:</strong> paste any ad network HTML or script snippet
          </li>
          <li>
            <strong>Pre-play interstitial:</strong> shows immediately when the player clicks Play Now, before the game
            starts
          </li>
          <li>
            <strong>Vercel saves:</strong> connect <strong>Blob</strong> (Storage tab) or add{" "}
            <strong>Upstash Redis</strong> (Marketplace) to this project, then redeploy. Without that, Save shows a
            read-only filesystem error.
          </li>
        </ul>
      </div>
      <SettingsEditor initialSettings={settings} mode="ads" />
    </AdminShell>
  );
}

import { AdminShell } from "@/components/admin/admin-shell";
import { SettingsEditor } from "@/components/admin/settings-editor";
import { listData } from "@/lib/list-data";
import { getSiteSettings } from "@/lib/settings-store";

export default async function AdminHomepagePage() {
  const settings = await getSiteSettings();
  const gameOptions = listData.all.map((game) => ({ id: game.id, title: game.title }));

  return (
    <AdminShell title="Homepage" description="Pick which game is featured in the top hero card on the home page.">
      <SettingsEditor initialSettings={settings} mode="homepage" gameOptions={gameOptions} />
    </AdminShell>
  );
}

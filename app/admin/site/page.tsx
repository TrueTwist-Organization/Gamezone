import { AdminShell } from "@/components/admin/admin-shell";
import { SettingsEditor } from "@/components/admin/settings-editor";
import { getSiteSettings } from "@/lib/settings-store";

export default async function AdminSitePage() {
  const settings = await getSiteSettings();

  return (
    <AdminShell title="Site Info" description="Edit branding shown in the header, footer, and browser title.">
      <SettingsEditor initialSettings={settings} mode="site" />
    </AdminShell>
  );
}

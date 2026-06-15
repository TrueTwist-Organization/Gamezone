import { AdminShell } from "@/components/admin/admin-shell";
import { GamesEditor } from "@/components/admin/games-editor";

export default function AdminGamesPage() {
  return (
    <AdminShell
      title="Local Games"
      description="Link uploaded game folders in public/games/ to catalog game IDs so they play from your own hosting."
    >
      <GamesEditor />
    </AdminShell>
  );
}

"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const links = [
  { href: "/admin/", label: "Dashboard" },
  { href: "/admin/ads/", label: "Ad Slots" },
  { href: "/admin/site/", label: "Site Info" },
  { href: "/admin/homepage/", label: "Homepage" },
];

export function AdminShell({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();

  const logout = async () => {
    await fetch("/api/admin/logout/", { method: "POST" });
    router.push("/admin/login/");
    router.refresh();
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="border-b border-slate-800 bg-slate-900">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-violet-300">GameZone Admin</p>
            <h1 className="text-xl font-semibold">{title}</h1>
            {description ? <p className="mt-1 text-sm text-slate-400">{description}</p> : null}
          </div>
          <div className="flex items-center gap-2">
            <Link
              href="/"
              className="inline-flex h-8 items-center justify-center rounded-lg border border-slate-700 px-2.5 text-sm font-medium text-slate-100 hover:bg-slate-800"
            >
              View Site
            </Link>
            <Button variant="secondary" onClick={logout}>
              Logout
            </Button>
          </div>
        </div>
        <nav className="mx-auto flex max-w-6xl gap-2 overflow-x-auto px-4 pb-4">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  active ? "bg-violet-500 text-white" : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </header>
      <main className="mx-auto max-w-6xl px-4 py-8">{children}</main>
    </div>
  );
}

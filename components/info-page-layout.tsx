import Link from "next/link";
import { ScrollToTop, SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

type InfoPageLayoutProps = {
  title: string;
  children: React.ReactNode;
};

export function InfoPageLayout({ title, children }: InfoPageLayoutProps) {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <SiteHeader />
      <main id="main" role="main" className="mx-auto max-w-3xl px-4 py-10 md:px-8 md:py-14">
        <nav className="mb-6 text-sm">
          <Link href="/" className="text-[var(--brand-purple)] transition-colors hover:text-[var(--brand-orange)]">
            ← Back to Home
          </Link>
        </nav>
        <h1 className="mb-8 text-3xl font-semibold text-gray-900">{title}</h1>
        <div className="info-page-content space-y-4 text-base leading-7 text-gray-700">{children}</div>
      </main>
      <SiteFooter variant="list" />
      <ScrollToTop />
    </div>
  );
}

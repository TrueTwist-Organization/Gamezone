import { GamesListPage } from "@/components/games-list-page";
import { ScrollToTop, SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getGamesForList } from "@/lib/list-data";
import { gameImagePath } from "@/lib/public-paths";
import { getSiteSettings } from "@/lib/settings-store";
import { sitePageTitle } from "@/lib/site";

type ListPageProps = {
  searchParams: Promise<{ category?: string }>;
};

export async function generateMetadata() {
  const settings = await getSiteSettings();
  return {
    title: sitePageTitle(settings.site, "Browse Categories"),
  };
}

export default async function ListPage({ searchParams }: ListPageProps) {
  const { category } = await searchParams;
  const games = getGamesForList(category).map((game) => ({
    ...game,
    image: gameImagePath(game.id),
  }));

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main id="main" role="main">
        <GamesListPage games={games} />
      </main>
      <SiteFooter variant="list" />
      <ScrollToTop />
    </div>
  );
}

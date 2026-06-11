import { FunRanks } from "@/components/fun-ranks";
import { HotPicks } from "@/components/hot-picks";
import { PopularGames } from "@/components/popular-games";
import { ScrollToTop, SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { TrendingNow } from "@/components/trending-now";
import { siteData } from "@/lib/games";
import { toPublicGameCard } from "@/lib/public-game";

export default function Home() {
  const hero = toPublicGameCard(siteData.hero);
  const popular = siteData.popular.map((game) => toPublicGameCard(game));
  const hotPicks = siteData.hotPicks.map((game) => toPublicGameCard(game));
  const funRanks = siteData.funRanks.map((rank) => ({
    ...rank,
    ...toPublicGameCard(rank),
  }));
  const trending = siteData.trending.map((game) => toPublicGameCard(game));

  return (
    <div className="min-h-screen bg-[var(--brand-orange)]">
      <SiteHeader hero={hero} heroBadge="HOT" />
      <main id="main" role="main" className="max-w-none bg-[var(--brand-orange)]">
        <PopularGames games={popular} />
        <HotPicks games={hotPicks} />
        <FunRanks ranks={funRanks} />
        <TrendingNow games={trending} />
      </main>
      <SiteFooter />
      <ScrollToTop />
    </div>
  );
}

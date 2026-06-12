import gamesData from "@/lib/games-data.json";
import { listData } from "@/lib/list-data";
import { toPublicGameCard } from "@/lib/public-game";
import { getSiteSettings } from "@/lib/settings-store";

export async function getHomepageHero() {
  const settings = await getSiteSettings();
  const heroId = settings.homepage.heroGameId;

  if (heroId) {
    const fromList = listData.all.find((game) => game.id === heroId);
    if (fromList) {
      return toPublicGameCard(fromList);
    }
  }

  return toPublicGameCard(gamesData.hero);
}

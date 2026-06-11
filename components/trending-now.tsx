import { GameImage } from "@/components/game-image";
import Link from "next/link";
import type { GameItem } from "@/lib/types";

type TrendingNowProps = {
  games: GameItem[];
};

export function TrendingNow({ games }: TrendingNowProps) {
  return (
    <section className="px-3 py-5 md:px-8">
      <div className="mx-auto md:max-w-5xl">
        <h2 className="text-xl font-semibold">Trending Now</h2>
        <div id="trendingGrid" className="mt-4 grid w-full grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {games.map((game) => (
            <Link key={game.href} href={game.href} className="group block">
              <div className="game-card game-card-wide overflow-hidden">
                <GameImage
                  src={game.image}
                  alt={game.title}
                  width={320}
                  height={180}
                  className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-105"
                />
              </div>
              <div className="game-title transition-transform duration-200 group-hover:scale-105">
                {game.title}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

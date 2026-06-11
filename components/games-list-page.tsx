"use client";

import { GameImage } from "@/components/game-image";
import Link from "next/link";
import { useState } from "react";
import { LIST_BATCH_SIZE } from "@/lib/list-data";
import type { ListGameItem } from "@/lib/types";

type GamesListPageProps = {
  games: ListGameItem[];
};

export function GamesListPage({ games }: GamesListPageProps) {
  const [visibleCount, setVisibleCount] = useState(LIST_BATCH_SIZE);
  const visibleGames = games.slice(0, visibleCount);
  const hasMore = visibleCount < games.length;

  return (
    <section className="category-bg">
      <div className="mx-auto max-w-7xl px-4 py-6 md:px-8">
        <h1 id="category-title" className="mb-6 text-center text-3xl font-bold text-white">
          Games
        </h1>
        <div id="game-grid" className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {visibleGames.map((game) => (
            <Link key={game.id} href={game.href} className="group block">
              <div>
                <div className="game-card game-card-square overflow-hidden">
                  <GameImage
                    src={game.image}
                    alt={game.title}
                    width={512}
                    height={512}
                    className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-105"
                  />
                </div>
                <div className="game-title transition-transform duration-200 group-hover:scale-105">
                  {game.title}
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="py-8 text-center">
          <button
            type="button"
            id="load-more-btn"
            disabled={!hasMore}
            onClick={() => setVisibleCount((count) => count + LIST_BATCH_SIZE)}
            className="rounded-full bg-[var(--brand-purple)] px-8 py-3 font-bold text-white transition-colors duration-300 hover:bg-[var(--brand-green)] disabled:cursor-not-allowed disabled:opacity-50"
          >
            Load More
          </button>
        </div>
      </div>
    </section>
  );
}

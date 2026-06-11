"use client";

import { GameImage } from "@/components/game-image";
import Link from "next/link";
import { useRef } from "react";
import type { GameItem } from "@/lib/types";

type PopularGamesProps = {
  games: GameItem[];
};

function ChevronLeft() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path
        fillRule="evenodd"
        d="M15.78 5.72a.75.75 0 010 1.06L10.56 12l5.22 5.22a.75.75 0 11-1.06 1.06l-5.75-5.75a.75.75 0 010-1.06l5.75-5.75a.75.75 0 011.06 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path
        fillRule="evenodd"
        d="M8.22 18.28a.75.75 0 010-1.06L13.44 12 8.22 6.78a.75.75 0 011.06-1.06l5.75 5.75a.75.75 0 010 1.06l-5.75 5.75a.75.75 0 01-1.06 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function PopularGames({ games }: PopularGamesProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    const node = scrollerRef.current;
    if (!node) return;
    node.scrollBy({ left: direction === "left" ? -320 : 320, behavior: "smooth" });
  };

  return (
    <section id="home-game-carousel" className="bg-white px-3 py-2 md:px-8 md:py-5">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-semibold">Popular Games</h2>
        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Previous"
            onClick={() => scroll("left")}
            className="rounded-full border border-gray-300 bg-[var(--brand-footer-blue)] p-2 text-white shadow"
          >
            <ChevronLeft />
          </button>
          <button
            type="button"
            aria-label="Next"
            onClick={() => scroll("right")}
            className="rounded-full border border-gray-300 bg-[var(--brand-footer-blue)] p-2 text-white shadow"
          >
            <ChevronRight />
          </button>
        </div>
      </div>

      <div
        ref={scrollerRef}
        id="gameListScroller"
        className="scrollbar-hide flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pt-2 pb-2"
      >
        {games.map((game) => (
          <div
            key={game.href}
            className="group relative shrink-0 cursor-pointer snap-start overflow-visible shadow game-card game-card_1"
          >
            <span className="tag-badge bg-[var(--brand-purple)]">FUN</span>
            <Link href={game.href} className="block h-full">
              <GameImage
                src={game.image}
                alt={game.title}
                width={240}
                height={128}
                className="h-full w-full object-cover"
              />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

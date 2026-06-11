"use client";

import { GameImage } from "@/components/game-image";
import Link from "next/link";
import { useState } from "react";
import { ScrollToTop, SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import type { PublicGameDetail } from "@/lib/public-game";
import { gamePagePath } from "@/lib/public-paths";

type GameDetailViewProps = {
  game: PublicGameDetail;
};

export function GameDetailView({ game }: GameDetailViewProps) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <SiteHeader
        hero={{ title: game.title, image: game.image, href: game.href }}
        heroBadge="NOW"
      />

      <main id="main" role="main">
        <section className="detail-bg">
          <div className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-6 md:px-8">
            <div className="rounded-xl bg-white px-4 py-4 shadow">
              <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                <div className="flex flex-col gap-1 text-sm text-gray-800">
                  <div className="text-lg font-semibold">Game Info</div>
                  <div>Updated: {game.updated}</div>
                  <div>Category: {game.category}</div>
                  <div>Score: {game.score}</div>
                </div>
                <button type="button" className="btn-play" onClick={() => setPlaying(true)}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  <span>Play Now</span>
                </button>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {game.tags.map((tag) => (
                  <span key={tag} className="tag-chip">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {playing ? (
              <div className="overflow-hidden rounded-xl bg-black shadow">
                <iframe
                  src={game.embedPath}
                  title={game.title}
                  className="mx-auto w-full max-w-[420px] min-h-[640px] border-0"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                  onLoad={(event) => {
                    event.currentTarget.focus();
                  }}
                />
              </div>
            ) : null}

            <div className="flex flex-col gap-4">
              <div className="rounded-xl bg-white px-4 py-4 shadow">
                <h2 className="mb-2 text-lg font-semibold">How to Play</h2>
                <div className="text-sm text-gray-800">{game.howToPlay}</div>
              </div>
              <div className="rounded-xl bg-white px-4 py-4 shadow">
                <h2 className="mb-2 text-lg font-semibold">Description</h2>
                <div className="whitespace-pre-line text-sm text-gray-800">{game.description}</div>
              </div>
              {game.editorsView ? (
                <div className="rounded-xl bg-white px-4 py-4 shadow">
                  <h2 className="mb-2 text-lg font-semibold">Editor&apos;s View</h2>
                  <div className="whitespace-pre-line text-sm text-gray-800">{game.editorsView}</div>
                </div>
              ) : null}
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="text-lg font-semibold text-white">Recommended</h2>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                {game.recommended.map((item) => (
                  <Link key={item.id} href={gamePagePath(item.id)} className="group block">
                    <div className="game-card game-card-square overflow-hidden">
                      <GameImage
                        src={item.image}
                        alt={item.title}
                        width={300}
                        height={300}
                        className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-105"
                      />
                    </div>
                    <div className="game-title transition-transform duration-200 group-hover:scale-105">
                      {item.title}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
      <ScrollToTop />
    </div>
  );
}

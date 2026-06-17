"use client";

import { GameImage } from "@/components/game-image";
import Link from "next/link";
import { useGamePlay } from "@/components/game-play-provider";
import { GoogleAdsGamePageConversion } from "@/components/google-ads-game-page-conversion";
import { ScrollToTop, SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { DetailBannerAd } from "@/components/site-ads";
import { useSiteSettings } from "@/components/site-settings-provider";
import type { PublicGameDetail } from "@/lib/public-game";
import { gamePagePath } from "@/lib/public-paths";

type GameDetailViewProps = {
  game: PublicGameDetail;
};

export function GameDetailView({ game }: GameDetailViewProps) {
  const { openGame } = useGamePlay();
  const { ads } = useSiteSettings();

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <GoogleAdsGamePageConversion />
      <SiteHeader
        hero={{ id: game.id, title: game.title, image: game.image, href: game.href }}
        heroBadge="NOW"
        heroRefresh
        useDetailBanner
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
                <button
                  type="button"
                  className="btn-play"
                  onClick={() => openGame({ id: game.id, title: game.title })}
                >
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

            <div className="flex justify-center">
              <DetailBannerAd ads={ads} slot="detailBanner2" />
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

"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { GameImage } from "@/components/game-image";
import { HeaderBannerAd } from "@/components/site-ads";
import { useSiteSettings } from "@/components/site-settings-provider";
import { mobileNavLinks, navLinks } from "@/lib/games";
import { siteAssets } from "@/lib/public-paths";
import type { GameItem } from "@/lib/types";

const ASSETS = siteAssets;

type SiteHeaderProps = {
  hero?: GameItem;
  heroBadge?: "HOT" | "NOW";
  /** When false, hero is display-only. */
  heroLink?: boolean;
  /** Reload the page when the hero image is clicked (game detail page). */
  heroRefresh?: boolean;
};

export function SiteHeader({ hero, heroBadge = "HOT", heroLink = true, heroRefresh = false }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { site, ads } = useSiteSettings();

  return (
    <header
      className="site-header"
      style={{ backgroundImage: `url(${ASSETS.heroBg})` }}
    >
      <div className="header-top">
        <div className="header-bar">
          <Link href="/" className="header-brand">
            <Image
              src={ASSETS.logo}
              alt={site.name}
              width={40}
              height={40}
              className="brand-logo"
              priority
            />
            <span className="brand-title">{site.name}</span>
          </Link>
        </div>

        <nav className="header-nav">
          {navLinks.map((link, index) => (
            <Link
              key={link.label}
              href={link.href}
              className={`nav-pill ${index > 0 ? "nav-item hidden md:inline-flex" : "inline-flex"}`}
            >
              {link.label}
            </Link>
          ))}
          <button
            type="button"
            className="menu-toggle md:hidden"
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
          >
            <Image src={ASSETS.menu} alt="Menu" width={40} height={40} />
          </button>
        </nav>
      </div>

      {hero ? (
        <div className="header-hero-layout w-full">
          <aside className="header-ad-slot hidden md:block" aria-label="Advertisement">
            <HeaderBannerAd ads={ads} />
          </aside>
          <div className="header-hero-row">
            <div className="header-hero-center">
              {heroRefresh ? (
                <a
                  href={hero.href}
                  className="block"
                  onClick={(event) => {
                    event.preventDefault();
                    window.location.reload();
                  }}
                >
                  <HeroCard hero={hero} heroBadge={heroBadge} />
                </a>
              ) : heroLink ? (
                <Link href={hero.href} className="block">
                  <HeroCard hero={hero} heroBadge={heroBadge} />
                </Link>
              ) : (
                <div className="block">
                  <HeroCard hero={hero} heroBadge={heroBadge} static />
                </div>
              )}
            </div>
          </div>
        </div>
      ) : null}

      {menuOpen ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          onClick={() => setMenuOpen(false)}
        >
          <div
            className="relative w-3/4 max-w-sm rounded-lg bg-white p-6"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="absolute top-2 right-6 text-2xl text-gray-600"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
            >
              ×
            </button>
            <ul className="flex flex-col gap-4 text-center">
              {mobileNavLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-lg text-gray-800 transition-colors hover:text-[var(--brand-purple)]"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : null}
    </header>
  );
}

function HeroCard({
  hero,
  heroBadge,
  static: isStatic = false,
}: {
  hero: GameItem;
  heroBadge: "HOT" | "NOW";
  static?: boolean;
}) {
  return (
    <div className={`hero-card hero-fixed${isStatic ? " hero-card--static" : ""}`}>
      <span className={`hero-badge ${heroBadge === "NOW" ? "hero-badge--new" : "hero-badge--hot"}`}>
        {heroBadge}
      </span>
      <GameImage
        src={hero.image}
        alt={hero.title}
        width={512}
        height={384}
        className="hero-image"
        priority
      />
      <div className="hero-title">{hero.title}</div>
    </div>
  );
}

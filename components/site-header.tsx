"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { DemoAd } from "@/components/demo-ad";
import { GameImage } from "@/components/game-image";
import { mobileNavLinks, navLinks } from "@/lib/games";
import { siteAssets } from "@/lib/public-paths";
import { siteConfig } from "@/lib/site";
import type { GameItem } from "@/lib/types";

const ASSETS = siteAssets;

type SiteHeaderProps = {
  hero?: GameItem;
  heroBadge?: "HOT" | "NOW";
};

export function SiteHeader({ hero, heroBadge = "HOT" }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

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
              alt={siteConfig.name}
              width={40}
              height={40}
              className="brand-logo"
              priority
            />
            <span className="brand-title">{siteConfig.name}</span>
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
        <div className="header-hero-layout w-full py-2">
          <div className="header-ad-slot hidden md:block">
            <DemoAd />
          </div>
          <div className="header-hero-center">
            <Link href={hero.href} className="block">
              <div className="hero-card hero-fixed">
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
            </Link>
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

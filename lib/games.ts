import gamesData from "./games-data.json";
import type { SiteData } from "./types";

export const siteData = gamesData as SiteData;

export const navLinks = [
  { label: "Games", href: "/list/" },
  { label: "Puzzle", href: "/list/?category=puzzle" },
  { label: "Hypercasual", href: "/list/?category=hypercasual" },
  { label: "Girls", href: "/list/?category=girls" },
  { label: "Arcade", href: "/list/?category=arcade" },
] as const;

export const mobileNavLinks = [
  { label: "Home", href: "/" },
  { label: "All", href: "/list/" },
  ...navLinks.slice(1),
] as const;

export function gameImagePath(id: string): string {
  return `/media/g/${id}/`;
}

export function gameEmbedPath(id: string): string {
  return `/embed/${id}/`;
}

export function gamePagePath(id: string): string {
  return `/games/${id}/`;
}

export const siteAssets = {
  logo: "/img/logo.png",
  menu: "/img/menunav.png",
  heroBg: "/img/hero.jpg",
  funRanksBg: "/img/bg_3.svg",
} as const;

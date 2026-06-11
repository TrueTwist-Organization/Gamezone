export const siteConfig = {
  name: "GameZone",
  tagline: "Free Online Games",
  description:
    "Play free online games — puzzle, arcade, hypercasual, and more on GameZone.",
  copyrightYear: 2026,
} as const;

export function sitePageTitle(page?: string): string {
  if (!page) return `${siteConfig.tagline} | ${siteConfig.name}`;
  return `${page} | ${siteConfig.name}`;
}

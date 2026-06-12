import type { SiteBranding } from "@/lib/site-settings.types";

export const fallbackSiteConfig: SiteBranding = {
  name: "GameZone",
  tagline: "Free Online Games",
  description:
    "Play free online games — puzzle, arcade, hypercasual, and more on GameZone.",
  copyrightYear: 2026,
};

export function sitePageTitle(site: SiteBranding, page?: string): string {
  if (!page) return `${site.tagline} | ${site.name}`;
  return `${page} | ${site.name}`;
}

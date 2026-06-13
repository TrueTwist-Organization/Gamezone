import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { defaultSiteSettings } from "@/lib/site-settings-defaults";
import type { SiteSettings } from "@/lib/site-settings.types";

const SETTINGS_FILE = path.join(process.cwd(), "data", "site-settings.json");

export type SettingsStorage = "file" | "readonly";

function isVercelRuntime(): boolean {
  return Boolean(process.env.VERCEL);
}

function mergeSettings(partial: Partial<SiteSettings>): SiteSettings {
  return {
    ...defaultSiteSettings,
    ...partial,
    site: { ...defaultSiteSettings.site, ...partial.site },
    ads: {
      ...defaultSiteSettings.ads,
      ...partial.ads,
      headerBanner: {
        ...defaultSiteSettings.ads.headerBanner,
        ...partial.ads?.headerBanner,
      },
      bottomAnchor: {
        ...defaultSiteSettings.ads.bottomAnchor,
        ...partial.ads?.bottomAnchor,
      },
      gameInterstitial: {
        ...defaultSiteSettings.ads.gameInterstitial,
        ...partial.ads?.gameInterstitial,
      },
    },
    homepage: { ...defaultSiteSettings.homepage, ...partial.homepage },
  };
}

function parseSettings(raw: string): SiteSettings {
  const parsed = JSON.parse(raw) as Partial<SiteSettings>;
  return mergeSettings(parsed);
}

async function readFromFile(): Promise<SiteSettings> {
  try {
    const raw = await readFile(SETTINGS_FILE, "utf8");
    return parseSettings(raw);
  } catch {
    return defaultSiteSettings;
  }
}

async function saveToFile(settings: SiteSettings): Promise<void> {
  const payload = JSON.stringify(settings, null, 2);
  await writeFile(SETTINGS_FILE, payload, "utf8");
}

export async function getSiteSettings(): Promise<SiteSettings> {
  return readFromFile();
}

export async function saveSiteSettings(settings: SiteSettings): Promise<{ storage: SettingsStorage }> {
  if (isVercelRuntime()) {
    throw new Error(
      "Live site is read-only. Edit data/site-settings.json in your project (paste your GAM/AdSense paths or custom HTML), commit, and redeploy to Vercel.",
    );
  }

  const nextSettings: SiteSettings = {
    ...mergeSettings(settings),
    updatedAt: new Date().toISOString(),
  };

  await saveToFile(nextSettings);
  return { storage: "file" };
}

export function validateSiteSettings(input: unknown): SiteSettings {
  if (!input || typeof input !== "object") {
    throw new Error("Invalid settings payload.");
  }

  return mergeSettings(input as Partial<SiteSettings>);
}

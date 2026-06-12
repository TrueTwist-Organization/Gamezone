import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { head, put } from "@vercel/blob";
import { defaultSiteSettings } from "@/lib/site-settings-defaults";
import type { SiteSettings } from "@/lib/site-settings.types";

const SETTINGS_FILE = path.join(process.cwd(), "data", "site-settings.json");
const BLOB_PATHNAME = "site-settings.json";

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

async function readFromBlob(): Promise<SiteSettings | null> {
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    return null;
  }

  try {
    const blob = await head(BLOB_PATHNAME);
    const response = await fetch(blob.url, { cache: "no-store" });
    if (!response.ok) {
      return null;
    }

    return parseSettings(await response.text());
  } catch {
    return null;
  }
}

async function readFromFile(): Promise<SiteSettings> {
  try {
    const raw = await readFile(SETTINGS_FILE, "utf8");
    return parseSettings(raw);
  } catch {
    return defaultSiteSettings;
  }
}

export async function getSiteSettings(): Promise<SiteSettings> {
  const fromBlob = await readFromBlob();
  if (fromBlob) {
    return fromBlob;
  }

  return readFromFile();
}

export async function saveSiteSettings(settings: SiteSettings): Promise<{ storage: "blob" | "file" }> {
  const nextSettings: SiteSettings = {
    ...mergeSettings(settings),
    updatedAt: new Date().toISOString(),
  };
  const payload = JSON.stringify(nextSettings, null, 2);

  if (process.env.BLOB_READ_WRITE_TOKEN) {
    await put(BLOB_PATHNAME, payload, {
      access: "public",
      addRandomSuffix: false,
      allowOverwrite: true,
      contentType: "application/json",
    });
    return { storage: "blob" };
  }

  await writeFile(SETTINGS_FILE, payload, "utf8");
  return { storage: "file" };
}

export function validateSiteSettings(input: unknown): SiteSettings {
  if (!input || typeof input !== "object") {
    throw new Error("Invalid settings payload.");
  }

  return mergeSettings(input as Partial<SiteSettings>);
}

import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { head, put } from "@vercel/blob";
import { defaultSiteSettings } from "@/lib/site-settings-defaults";
import type { SiteSettings } from "@/lib/site-settings.types";

const SETTINGS_FILE = path.join(process.cwd(), "data", "site-settings.json");
const BLOB_PATHNAME = "site-settings.json";
const REDIS_KEY = "site-settings";

export type SettingsStorage = "blob" | "redis" | "file";

function isVercelRuntime(): boolean {
  return Boolean(process.env.VERCEL);
}

function hasUpstashRedis(): boolean {
  return Boolean(process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN);
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

async function upstashCommand<T>(command: unknown[]): Promise<T> {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) {
    throw new Error("Upstash Redis is not configured.");
  }

  const response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(command),
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Upstash request failed (${response.status}).`);
  }

  const data = (await response.json()) as { result?: T; error?: string };
  if (data.error) {
    throw new Error(data.error);
  }

  return data.result as T;
}

async function readFromRedis(): Promise<SiteSettings | null> {
  if (!hasUpstashRedis()) {
    return null;
  }

  try {
    const raw = await upstashCommand<string | null>(["GET", REDIS_KEY]);
    if (!raw) {
      return null;
    }

    return parseSettings(raw);
  } catch {
    return null;
  }
}

async function saveToRedis(settings: SiteSettings): Promise<void> {
  const payload = JSON.stringify(settings);
  await upstashCommand(["SET", REDIS_KEY, payload]);
}

async function readFromBlob(): Promise<SiteSettings | null> {
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

async function saveToBlob(settings: SiteSettings): Promise<void> {
  const payload = JSON.stringify(settings, null, 2);
  await put(BLOB_PATHNAME, payload, {
    access: "public",
    addRandomSuffix: false,
    allowOverwrite: true,
    contentType: "application/json",
  });
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

function productionStorageError(): Error {
  return new Error(
    "Admin saves need persistent storage on Vercel. In your Vercel project: open Storage, connect an existing Blob store to this project (or add Upstash Redis from the Marketplace), then redeploy.",
  );
}

export async function getSiteSettings(): Promise<SiteSettings> {
  const fromRedis = await readFromRedis();
  if (fromRedis) {
    return fromRedis;
  }

  const fromBlob = await readFromBlob();
  if (fromBlob) {
    return fromBlob;
  }

  return readFromFile();
}

export async function saveSiteSettings(settings: SiteSettings): Promise<{ storage: SettingsStorage }> {
  const nextSettings: SiteSettings = {
    ...mergeSettings(settings),
    updatedAt: new Date().toISOString(),
  };

  if (hasUpstashRedis()) {
    await saveToRedis(nextSettings);
    return { storage: "redis" };
  }

  if (isVercelRuntime()) {
    try {
      await saveToBlob(nextSettings);
      return { storage: "blob" };
    } catch (error) {
      const message = error instanceof Error ? error.message : "Blob save failed.";
      throw new Error(`${message} ${productionStorageError().message}`);
    }
  }

  if (process.env.BLOB_READ_WRITE_TOKEN || process.env.BLOB_STORE_ID) {
    try {
      await saveToBlob(nextSettings);
      return { storage: "blob" };
    } catch {
      // Fall back to local file when developing with blob configured but unavailable.
    }
  }

  try {
    await saveToFile(nextSettings);
    return { storage: "file" };
  } catch (error) {
    if (isVercelRuntime()) {
      throw productionStorageError();
    }

    const message = error instanceof Error ? error.message : "File save failed.";
    throw new Error(message);
  }
}

export function validateSiteSettings(input: unknown): SiteSettings {
  if (!input || typeof input !== "object") {
    throw new Error("Invalid settings payload.");
  }

  return mergeSettings(input as Partial<SiteSettings>);
}

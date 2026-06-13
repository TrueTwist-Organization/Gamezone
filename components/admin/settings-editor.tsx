"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import type { AdProvider, AdSlotSettings, SiteSettings } from "@/lib/site-settings.types";

type SettingsEditorProps = {
  initialSettings: SiteSettings;
  mode: "ads" | "site" | "homepage" | "all";
  gameOptions?: Array<{ id: string; title: string }>;
};

function Field({
  label,
  hint,
  children,
}: {
  label: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block space-y-2">
      <span className="text-sm font-medium text-slate-200">{label}</span>
      {hint ? <span className="block text-xs text-slate-400">{hint}</span> : null}
      {children}
    </label>
  );
}

const inputClass =
  "w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white outline-none ring-violet-500 focus:ring-2";

function AdSlotEditor({
  slot,
  onChange,
}: {
  slot: AdSlotSettings;
  onChange: (slot: AdSlotSettings) => void;
}) {
  return (
    <div className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold">{slot.label}</h3>
          <p className="text-sm text-slate-400">Slot ID: {slot.slotId}</p>
        </div>
        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={slot.enabled}
            onChange={(event) => onChange({ ...slot, enabled: event.target.checked })}
          />
          Enabled
        </label>
      </div>

      <Field label="Provider">
        <select
          className={inputClass}
          value={slot.provider}
          onChange={(event) => onChange({ ...slot, provider: event.target.value as AdProvider })}
        >
          <option value="gpt">Google Ad Manager / AdX (GPT)</option>
          <option value="adsense">Google AdSense</option>
          <option value="custom">Custom HTML / Script</option>
          <option value="disabled">Disabled</option>
        </select>
      </Field>

      {slot.provider === "gpt" ? (
        <>
          <Field label="GPT Ad Unit Path" hint="Example: /12345678/site_banner">
            <input
              className={inputClass}
              value={slot.gptUnitPath}
              onChange={(event) => onChange({ ...slot, gptUnitPath: event.target.value })}
            />
          </Field>
          <Field label="Sizes" hint="Format: 300x250, 728x90">
            <input
              className={inputClass}
              value={slot.sizes
                .map((size) => (size === "fluid" ? "fluid" : `${size[0]}x${size[1]}`))
                .join(", ")}
              onChange={(event) => {
                const sizes = event.target.value
                  .split(",")
                  .map((part) => part.trim())
                  .filter(Boolean)
                  .map((part) => {
                    if (part === "fluid") {
                      return "fluid" as const;
                    }

                    const [w, h] = part.split("x").map(Number);
                    return [w, h] as [number, number];
                  })
                  .filter((size) => size === "fluid" || (Number.isFinite(size[0]) && Number.isFinite(size[1])));
                onChange({ ...slot, sizes });
              }}
            />
          </Field>
        </>
      ) : null}

      {slot.provider === "adsense" ? (
        <>
          <Field label="AdSense Client ID" hint="ca-pub-xxxxxxxxxxxxxxxx">
            <input
              className={inputClass}
              value={slot.adsenseClient}
              onChange={(event) => onChange({ ...slot, adsenseClient: event.target.value })}
            />
          </Field>
          <Field label="AdSense Slot ID">
            <input
              className={inputClass}
              value={slot.adsenseSlot}
              onChange={(event) => onChange({ ...slot, adsenseSlot: event.target.value })}
            />
          </Field>
        </>
      ) : null}

      {slot.provider === "custom" ? (
        <Field label="Custom HTML / Embed Code">
          <textarea
            className={`${inputClass} min-h-40 font-mono`}
            value={slot.customHtml}
            onChange={(event) => onChange({ ...slot, customHtml: event.target.value })}
          />
        </Field>
      ) : null}
    </div>
  );
}

export function SettingsEditor({ initialSettings, mode, gameOptions = [] }: SettingsEditorProps) {
  const [settings, setSettings] = useState(initialSettings);
  const [status, setStatus] = useState<string>("");
  const [saving, setSaving] = useState(false);

  const save = async () => {
    setSaving(true);
    setStatus("");
    try {
      const response = await fetch("/api/admin/settings/", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(settings),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error ?? "Failed to save settings.");
      }
      setSettings(data.settings);
      setStatus(
        data.storage === "file"
          ? "Saved to data/site-settings.json. Commit and deploy to update the live site."
          : "Saved successfully.",
      );
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Failed to save settings.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-6">
      {(mode === "site" || mode === "all") && (
        <section className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
          <h2 className="text-lg font-semibold">Site Branding</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Field label="Site Name">
              <input
                className={inputClass}
                value={settings.site.name}
                onChange={(event) =>
                  setSettings({ ...settings, site: { ...settings.site, name: event.target.value } })
                }
              />
            </Field>
            <Field label="Tagline">
              <input
                className={inputClass}
                value={settings.site.tagline}
                onChange={(event) =>
                  setSettings({ ...settings, site: { ...settings.site, tagline: event.target.value } })
                }
              />
            </Field>
          </div>
          <Field label="Description">
            <textarea
              className={`${inputClass} min-h-24`}
              value={settings.site.description}
              onChange={(event) =>
                setSettings({ ...settings, site: { ...settings.site, description: event.target.value } })
              }
            />
          </Field>
        </section>
      )}

      {(mode === "homepage" || mode === "all") && (
        <section className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
          <h2 className="text-lg font-semibold">Homepage Hero Game</h2>
          <Field label="Featured Game ID">
            <select
              className={inputClass}
              value={settings.homepage.heroGameId}
              onChange={(event) =>
                setSettings({
                  ...settings,
                  homepage: { ...settings.homepage, heroGameId: event.target.value },
                })
              }
            >
              {gameOptions.map((game) => (
                <option key={game.id} value={game.id}>
                  {game.id} — {game.title}
                </option>
              ))}
            </select>
          </Field>
        </section>
      )}

      {(mode === "ads" || mode === "all") && (
        <section className="space-y-4">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
            <h2 className="text-lg font-semibold">Global Ad Scripts</h2>
            <p className="mt-1 text-sm text-slate-400">
              Paste verification tags, GPT setup, or any extra ad code. Use only trusted code.
            </p>
            <div className="mt-4 space-y-4">
              <Field label="Head Scripts">
                <textarea
                  className={`${inputClass} min-h-28 font-mono`}
                  value={settings.ads.globalHeadScripts}
                  onChange={(event) =>
                    setSettings({
                      ...settings,
                      ads: { ...settings.ads, globalHeadScripts: event.target.value },
                    })
                  }
                />
              </Field>
              <Field label="Body Scripts">
                <textarea
                  className={`${inputClass} min-h-28 font-mono`}
                  value={settings.ads.globalBodyScripts}
                  onChange={(event) =>
                    setSettings({
                      ...settings,
                      ads: { ...settings.ads, globalBodyScripts: event.target.value },
                    })
                  }
                />
              </Field>
            </div>
          </div>

          <AdSlotEditor
            slot={settings.ads.headerBanner}
            onChange={(headerBanner) =>
              setSettings({ ...settings, ads: { ...settings.ads, headerBanner } })
            }
          />
          <AdSlotEditor
            slot={settings.ads.bottomAnchor}
            onChange={(bottomAnchor) => setSettings({ ...settings, ads: { ...settings.ads, bottomAnchor } })}
          />
          <div className="rounded-2xl border border-violet-500/30 bg-violet-500/10 p-4 text-sm text-violet-100">
            The pre-play interstitial shows immediately when a player clicks Play Now, before the game
            loaded. They must close the ad before playing.
          </div>
          <AdSlotEditor
            slot={settings.ads.gameInterstitial}
            onChange={(gameInterstitial) =>
              setSettings({ ...settings, ads: { ...settings.ads, gameInterstitial } })
            }
          />
        </section>
      )}

      <div className="flex flex-wrap items-center gap-3">
        <Button onClick={save} disabled={saving}>
          {saving ? "Saving..." : "Save Changes"}
        </Button>
        {status ? <p className="text-sm text-slate-300">{status}</p> : null}
      </div>
    </div>
  );
}

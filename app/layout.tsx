import type { Metadata } from "next";
import { Slackey } from "next/font/google";
import { GamePlayProvider } from "@/components/game-play-provider";
import { SiteAds } from "@/components/site-ads";
import { SiteSettingsProvider } from "@/components/site-settings-provider";
import { StickyAnchorAd } from "@/components/sticky-anchor-ad";
import { getSiteSettings } from "@/lib/settings-store";
import { sitePageTitle } from "@/lib/site";
import "./globals.css";

const slackey = Slackey({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-slackey",
});

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();
  return {
    title: sitePageTitle(settings.site),
    description: settings.site.description,
    icons: {
      icon: "/img/logo.png",
      apple: "/img/logo.png",
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const settings = await getSiteSettings();

  return (
    <html lang="en" className={`${slackey.variable} h-full`}>
      <body className="min-h-screen antialiased">
        <SiteSettingsProvider settings={settings}>
          <GamePlayProvider>
            <SiteAds ads={settings.ads} />
            {children}
            <StickyAnchorAd ads={settings.ads} />
          </GamePlayProvider>
        </SiteSettingsProvider>
      </body>
    </html>
  );
}

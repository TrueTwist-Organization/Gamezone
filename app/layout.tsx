import type { Metadata } from "next";
import { Slackey } from "next/font/google";
import { GooglePubAds } from "@/components/google-pubads";
import { siteConfig, sitePageTitle } from "@/lib/site";
import "./globals.css";

const slackey = Slackey({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-slackey",
});

export const metadata: Metadata = {
  title: sitePageTitle(),
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${slackey.variable} h-full`}>
      <body className="min-h-screen antialiased">
        <GooglePubAds />
        {children}
      </body>
    </html>
  );
}

import { InfoPageLayout } from "@/components/info-page-layout";
import { getSiteSettings } from "@/lib/settings-store";
import { sitePageTitle } from "@/lib/site";

export async function generateMetadata() {
  const settings = await getSiteSettings();
  return {
    title: sitePageTitle(settings.site, "Terms of Use"),
    description: `Terms of Use for ${settings.site.name}.`,
  };
}

export default async function TermsOfUsePage() {
  const settings = await getSiteSettings();
  const { site } = settings;
  const year = site.copyrightYear;

  return (
    <InfoPageLayout title="Terms of Use">
      <p>
        By accessing or using {site.name}, you agree to these Terms of Use. If you do not agree, please do not use
        the site.
      </p>

      <h2 className="pt-2 text-xl font-semibold text-gray-900">Use of the Site</h2>
      <p>
        {site.name} provides free online games for personal, non-commercial entertainment. You may browse and play
        games on the site subject to these terms and applicable laws.
      </p>

      <h2 className="pt-2 text-xl font-semibold text-gray-900">Acceptable Use</h2>
      <p>You agree not to:</p>
      <ul className="list-disc space-y-2 pl-6">
        <li>Use the site for unlawful purposes</li>
        <li>Attempt to disrupt, hack, or reverse engineer site systems or games</li>
        <li>Scrape, copy, or redistribute site content without permission</li>
        <li>Interfere with other users&apos; enjoyment of the site</li>
      </ul>

      <h2 className="pt-2 text-xl font-semibold text-gray-900">Games &amp; Third-Party Content</h2>
      <p>
        Games and related assets may be provided by third-party developers. {site.name} does not guarantee that every
        game will be available at all times or work on every device or browser.
      </p>

      <h2 className="pt-2 text-xl font-semibold text-gray-900">Disclaimer</h2>
      <p>
        The site and games are provided &quot;as is&quot; without warranties of any kind. To the fullest extent
        permitted by law, we disclaim liability for any damages arising from your use of {site.name}.
      </p>

      <h2 className="pt-2 text-xl font-semibold text-gray-900">Changes</h2>
      <p>
        We may update these Terms of Use at any time. Continued use of the site after changes are posted means you
        accept the updated terms.
      </p>

      <h2 className="pt-2 text-xl font-semibold text-gray-900">Contact</h2>
      <p>
        Questions about these terms? Email{" "}
        <a href="mailto:support@workfromhomejobshub.com" className="text-[var(--brand-purple)] underline">
          support@workfromhomejobshub.com
        </a>
        .
      </p>

      <p className="text-sm text-gray-500">Last updated: January 1, {year}</p>
    </InfoPageLayout>
  );
}

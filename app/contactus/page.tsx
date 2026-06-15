import { InfoPageLayout } from "@/components/info-page-layout";
import { getSiteSettings } from "@/lib/settings-store";
import { sitePageTitle } from "@/lib/site";

export async function generateMetadata() {
  const settings = await getSiteSettings();
  return {
    title: sitePageTitle(settings.site, "Contact Us"),
    description: `Contact ${settings.site.name} for support, feedback, or business inquiries.`,
  };
}

export default async function ContactUsPage() {
  const settings = await getSiteSettings();
  const { site } = settings;

  return (
    <InfoPageLayout title="Contact Us">
      <p>
        Thank you for visiting {site.name}. If you have questions about our games, website, advertising, or
        partnerships, we are happy to help.
      </p>
      <p>
        For general support or feedback, please email us at{" "}
        <a href="mailto:support@workfromhomejobshub.com" className="text-[var(--brand-purple)] underline">
          support@workfromhomejobshub.com
        </a>
        . We aim to respond within a few business days.
      </p>
      <p>
        When contacting us, include as much detail as possible (game name, device, browser, and a description of
        the issue) so we can assist you faster.
      </p>
      <p>
        You can also browse our{" "}
        <a href="/list/" className="text-[var(--brand-purple)] underline">
          game categories
        </a>{" "}
        or return to the{" "}
        <a href="/" className="text-[var(--brand-purple)] underline">
          homepage
        </a>{" "}
        to keep playing.
      </p>
    </InfoPageLayout>
  );
}

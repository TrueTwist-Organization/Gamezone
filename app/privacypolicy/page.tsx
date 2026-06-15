import { InfoPageLayout } from "@/components/info-page-layout";
import { getSiteSettings } from "@/lib/settings-store";
import { sitePageTitle } from "@/lib/site";

export async function generateMetadata() {
  const settings = await getSiteSettings();
  return {
    title: sitePageTitle(settings.site, "Privacy Policy"),
    description: `Privacy Policy for ${settings.site.name}.`,
  };
}

export default async function PrivacyPolicyPage() {
  const settings = await getSiteSettings();
  const { site } = settings;
  const year = site.copyrightYear;

  return (
    <InfoPageLayout title="Privacy Policy">
      <p>
        This Privacy Policy explains how {site.name} (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) collects,
        uses, and protects information when you use our website and games.
      </p>

      <h2 className="pt-2 text-xl font-semibold text-gray-900">Information We Collect</h2>
      <p>
        We may collect technical information such as browser type, device type, IP address, pages visited, and
        general usage data. Some third-party services used on our site (including advertising partners) may also
        collect information through cookies and similar technologies.
      </p>

      <h2 className="pt-2 text-xl font-semibold text-gray-900">How We Use Information</h2>
      <p>We use collected information to:</p>
      <ul className="list-disc space-y-2 pl-6">
        <li>Operate and improve {site.name}</li>
        <li>Display games and site content</li>
        <li>Serve and measure advertisements</li>
        <li>Maintain security and prevent abuse</li>
      </ul>

      <h2 className="pt-2 text-xl font-semibold text-gray-900">Cookies &amp; Advertising</h2>
      <p>
        {site.name} uses cookies and third-party advertising technologies to support free access to games. Ad
        partners may use cookies to deliver relevant ads and measure performance. You can manage cookie preferences
        through your browser settings.
      </p>

      <h2 className="pt-2 text-xl font-semibold text-gray-900">Third-Party Services</h2>
      <p>
        Our site may include embedded games, analytics, and advertising from third parties. Those providers have
        their own privacy policies and we encourage you to review them.
      </p>

      <h2 className="pt-2 text-xl font-semibold text-gray-900">Children&apos;s Privacy</h2>
      <p>
        {site.name} is intended for a general audience. If you believe a child has provided personal information
        through our site, please contact us and we will take appropriate steps to remove it.
      </p>

      <h2 className="pt-2 text-xl font-semibold text-gray-900">Contact</h2>
      <p>
        For privacy-related questions, contact{" "}
        <a href="mailto:support@workfromhomejobshub.com" className="text-[var(--brand-purple)] underline">
          support@workfromhomejobshub.com
        </a>
        .
      </p>

      <p className="text-sm text-gray-500">Last updated: January 1, {year}</p>
    </InfoPageLayout>
  );
}

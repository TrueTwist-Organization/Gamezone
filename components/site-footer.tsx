"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/site";

type SiteFooterProps = {
  variant?: "home" | "list";
};

export function SiteFooter({ variant = "home" }: SiteFooterProps) {
  if (variant === "list") {
    return (
      <footer className="bg-[var(--brand-footer-blue)] text-white" role="contentinfo">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row">
          <span className="text-sm">© {siteConfig.copyrightYear} {siteConfig.name}</span>
          <nav className="flex items-center gap-6 text-sm">
            <Link href="/contactus/" className="transition-colors hover:text-[var(--brand-orange)]" title="Contact Us">
              Contact Us
            </Link>
            <Link href="/privacypolicy/" className="transition-colors hover:text-[var(--brand-orange)]" title="Privacy Policy">
              Privacy Policy
            </Link>
            <Link href="/termsofuse/" className="transition-colors hover:text-[var(--brand-orange)]" title="Terms of Use">
              Terms of Use
            </Link>
          </nav>
        </div>
      </footer>
    );
  }

  return (
    <footer className="bg-[var(--brand-footer-blue)] py-6 text-white" role="contentinfo">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-3 px-4 text-center text-sm">
        <p>© {siteConfig.copyrightYear} {siteConfig.name}</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/contactus/" className="transition-colors hover:text-[var(--brand-orange)]">
            Contact Us
          </Link>
          <Link href="/privacypolicy/" className="transition-colors hover:text-[var(--brand-orange)]">
            Privacy Policy
          </Link>
          <Link href="/termsofuse/" className="transition-colors hover:text-[var(--brand-orange)]">
            Terms of Use
          </Link>
        </div>
      </div>
    </footer>
  );
}

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed right-4 bottom-10 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-[var(--brand-purple)] text-lg text-white shadow-lg transition-transform hover:scale-110"
    >
      ↑
    </button>
  );
}

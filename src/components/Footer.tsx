"use client";

import { siteConfig } from "@/data/config";
import { ArrowUp, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full border-t border-border-subtle bg-bg-card/40 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <span className="font-serif text-2xl text-fg-primary font-light tracking-wide">
              {siteConfig.brandName}
            </span>
            <p className="font-sans text-xs text-fg-muted font-light mt-1">
              {siteConfig.name} · {siteConfig.title}
            </p>
          </div>

          {/* Social Links & Phone */}
          <div className="flex flex-wrap items-center gap-6 font-mono text-xs text-fg-muted">
            <a
              href={siteConfig.socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent-gold transition-colors flex items-center gap-1 uppercase"
            >
              <span>Instagram</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>

            <a
              href={siteConfig.socialLinks.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent-gold transition-colors flex items-center gap-1 uppercase"
            >
              <span>YouTube</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>

            <a
              href={siteConfig.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-full bg-accent-gold/15 text-accent-gold border border-accent-gold/40 hover:bg-accent-gold hover:text-black transition-all flex items-center gap-1.5 uppercase font-medium"
            >
              <span>WhatsApp</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>

            <a
              href={`mailto:${siteConfig.email}`}
              className="px-3.5 py-1.5 rounded-full border border-border-strong text-fg-muted hover:border-accent-gold hover:text-accent-gold transition-all flex items-center gap-1.5 uppercase font-medium"
            >
              <span>Email</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-border-subtle hover:border-accent-gold text-fg-muted hover:text-accent-gold transition-colors font-mono text-xs uppercase tracking-wider"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-fg-dim">
          <span>{siteConfig.brandName} &copy; 2026. All rights reserved.</span>
          <span>Designed &amp; Engineered for High-Retention Video Experiences.</span>
        </div>
      </div>
    </footer>
  );
}

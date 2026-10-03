"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/data/config";
import ThemeToggle from "./ThemeToggle";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navLinks = [
  { name: "Work", href: "#work" },
  { name: "Services", href: "#services" },
  { name: "Pricing", href: "#pricing" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "py-3 bg-bg-primary/85 backdrop-blur-md border-b border-border-subtle shadow-sm"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Wordmark */}
          <Link
            href="#"
            className="flex items-center gap-2 group focus:outline-none"
            onClick={closeMenu}
          >
            <span className="font-serif tracking-wider text-base sm:text-lg font-semibold text-fg-primary group-hover:text-accent-gold transition-colors">
              {siteConfig.brandName}
            </span>
            <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-accent-gold" />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs uppercase font-mono tracking-widest text-fg-muted hover:text-accent-gold transition-colors relative py-1"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Cluster */}
          <div className="flex items-center gap-3 sm:gap-4">
            <ThemeToggle />

            {/* Gold "Hire Me" Pill CTA */}
            <a
              href={siteConfig.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2 rounded-full bg-accent-gold text-black font-semibold text-xs tracking-wider uppercase hover:bg-accent-gold-hover hover:scale-105 active:scale-95 transition-all shadow-md group"
            >
              <span>Hire Me</span>
              <span className="w-5 h-5 rounded-full bg-black/10 flex items-center justify-center transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowUpRight className="w-3 h-3 text-black" />
              </span>
            </a>

            {/* Mobile Menu Button - 44px touch target */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              className="md:hidden w-11 h-11 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full border border-border-subtle bg-bg-card text-fg-primary hover:border-accent-gold transition-colors active:scale-95"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen Mobile Menu Overlay with Safe Area Insets */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-bg-primary/95 backdrop-blur-2xl md:hidden flex flex-col justify-between p-6 pt-[max(5.5rem,env(safe-area-inset-top))] pb-[max(2rem,env(safe-area-inset-bottom))] overflow-y-auto no-scrollbar"
          >
            <div className="flex flex-col gap-6">
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent-gold">
                NAVIGATION
              </span>
              <nav className="flex flex-col gap-5">
                {navLinks.map((link, idx) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={closeMenu}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + idx * 0.05 }}
                    className="font-serif text-3xl text-fg-primary hover:text-accent-gold transition-colors flex items-center justify-between border-b border-border-subtle pb-3 min-h-[48px]"
                  >
                    <span>{link.name}</span>
                    <span className="font-mono text-xs text-fg-muted">0{idx + 1}</span>
                  </motion.a>
                ))}
              </nav>
            </div>

            <div className="flex flex-col gap-3 pt-6 border-t border-border-subtle">
              <a
                href={siteConfig.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="w-full flex items-center justify-center gap-2 py-3.5 min-h-[48px] rounded-full bg-accent-gold text-black font-semibold text-sm tracking-wider uppercase shadow-md active:scale-95 transition-all"
              >
                <span>Chat on WhatsApp</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${siteConfig.email}`}
                onClick={closeMenu}
                className="w-full flex items-center justify-center gap-2 py-3 min-h-[44px] rounded-full border border-border-strong text-fg-primary hover:border-accent-gold hover:text-accent-gold font-semibold text-xs tracking-wider uppercase transition-all"
              >
                <span>Send Email</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

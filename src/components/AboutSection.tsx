"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/data/config";
import Image from "next/image";
import { Sparkles, CheckCircle2, ArrowUpRight, MapPin, Instagram } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-border-subtle">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Portrait & Double-Bezel Media Card */}
        <div className="lg:col-span-5">
          <div className="relative p-2 rounded-[2rem] bg-bg-card border border-border-subtle shadow-2xl backdrop-blur-xl">
            {/* Top Bar with Live Badge */}
            <div className="flex items-center justify-between px-3 py-2 border-b border-border-subtle mb-3 font-mono text-xs">
              <span className="text-accent-gold uppercase tracking-wider text-[10px]">
                CREATOR PROFILE
              </span>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                <span>Open for work</span>
              </div>
            </div>

            {/* Media Image / Portrait */}
            <div className="relative aspect-[4/5] w-full rounded-[calc(2rem-0.5rem)] overflow-hidden bg-bg-card-subtle">
              <Image
                src={siteConfig.portraitPhoto}
                alt={`${siteConfig.name} - ${siteConfig.title}`}
                fill
                sizes="(max-width: 768px) 100vw, 450px"
                className="object-cover grayscale contrast-110 hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent pointer-events-none" />

              {/* Inset Creator Label */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 p-3 sm:p-4 rounded-xl bg-black/80 backdrop-blur-md border border-white/10 text-white flex items-end justify-between gap-2">
                <div className="min-w-0">
                  <p className="font-mono text-[9px] sm:text-[10px] uppercase tracking-widest text-accent-gold font-semibold truncate">
                    {siteConfig.name}
                  </p>
                  <p className="font-serif text-base sm:text-lg font-light truncate">
                    {siteConfig.brandName}
                  </p>
                  <div className="flex items-center gap-1 font-mono text-[9px] sm:text-[10px] text-white/70 mt-0.5 sm:mt-1 truncate">
                    <MapPin className="w-3 h-3 text-accent-gold shrink-0" />
                    <span className="truncate">Dudahi / Tamkuhi Road · India</span>
                  </div>
                </div>

                <a
                  href={siteConfig.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 sm:p-2.5 rounded-full bg-accent-gold text-black hover:scale-110 transition-transform shrink-0"
                  aria-label="Instagram Profile"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Bio, Statement, Tools, Strengths */}
        <div className="lg:col-span-7 flex flex-col gap-8">
          <div>
            <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-accent-gold">
              BEHIND THE EDITS [08]
            </span>

            {/* Headline Statement */}
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-fg-primary font-light mt-2 tracking-tight leading-[1.1]">
              I edit stories, <span className="italic-serif-accent">not just footage.</span>
            </h2>

            {/* Bio Body */}
            <p className="font-sans text-sm sm:text-base text-fg-muted font-light mt-6 leading-relaxed">
              {siteConfig.bio}
            </p>
          </div>

          {/* Tools Block: Strictly CapCut & Alight Motion */}
          <div className="p-6 rounded-2xl bg-bg-card border border-border-subtle">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-accent-gold" />
                <h3 className="font-mono text-xs uppercase tracking-widest text-accent-gold">
                  Core Software Mastery
                </h3>
              </div>
              <span className="font-mono text-[10px] uppercase tracking-wider text-fg-dim">
                Mobile &amp; Motion Rigs
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {siteConfig.tools.map((tool, tIdx) => (
                <div
                  key={tIdx}
                  className="p-4 rounded-xl bg-bg-card-subtle border border-border-subtle hover:border-accent-gold/40 transition-colors"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-serif text-lg text-fg-primary font-medium">
                      {tool.name}
                    </h4>
                    <span className="font-mono text-[9px] uppercase tracking-wider text-accent-gold px-2 py-0.5 rounded bg-accent-gold/10">
                      {tool.level}
                    </span>
                  </div>
                  <p className="font-sans text-xs text-fg-muted font-light leading-relaxed">
                    {tool.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Creative Strengths */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-fg-muted mb-4">
              Creative Strengths
            </h3>
            <ul className="flex flex-col gap-3">
              {siteConfig.strengths.map((str, sIdx) => (
                <li key={sIdx} className="flex items-start gap-3 font-sans text-xs sm:text-sm text-fg-muted font-light">
                  <CheckCircle2 className="w-4 h-4 text-accent-gold shrink-0 mt-0.5" />
                  <span>{str}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

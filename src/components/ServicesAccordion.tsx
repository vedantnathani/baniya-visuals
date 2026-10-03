"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/data/config";

interface ServiceItem {
  number: string;
  title: string;
  subtitle: string;
  details: string;
  tags: string[];
}

const services: ServiceItem[] = [
  {
    number: "01",
    title: "Short-Form Content",
    subtitle: "Instagram Reels, YouTube Shorts, trending clips",
    details: "Crafted specifically for the vertical feed. Fast-paced hooks within the first 2 seconds, punch-in cuts, and sound-effect accents that stop user scrolling.",
    tags: ["Vertical 9:16", "Hook Strategy", "Viral Formats"],
  },
  {
    number: "02",
    title: "Cinematic Editing",
    subtitle: "Cinematic sequences, music sync, story-driven edits",
    details: "Atmospheric narrative building with seamless match cuts, dynamic color palettes, and emotional music synchronization that elevates brand storytelling.",
    tags: ["Story Arcs", "Dynamic LUTs", "Soundstage Polish"],
  },
  {
    number: "03",
    title: "Social Media",
    subtitle: "Trend-based formats, fast hooks, beat-sync, retention-focused cuts",
    details: "Retention-engineered pacing designed to maximize algorithmic watch-time and trigger shares, saves, and re-watches on Instagram and TikTok.",
    tags: ["Algorithm-Tuned", "Retention Curves", "Beat Synchronization"],
  },
  {
    number: "04",
    title: "YouTube Editing",
    subtitle: "Engaging cuts, pacing, transitions, audio and visual polish",
    details: "Longer format narrative maintenance with pattern interrupts, zoom pulses, custom kinetic text, and seamless B-roll integration.",
    tags: ["Pattern Interrupts", "Longform Flow", "Audio Leveling"],
  },
  {
    number: "05",
    title: "Visual Enhancement",
    subtitle: "Color correction, sound correction, motion effects",
    details: "High-grade color correction matching camera profiles, voiceover frequency cleanup, bass compression, and custom Alight Motion velocity curves.",
    tags: ["Color Balancing", "Foley Layers", "Velocity Curves"],
  },
  {
    number: "06",
    title: "Cinematography",
    subtitle: "Creative shot selection, visual flow, cinematic presentation",
    details: "Sifting through hours of raw b-roll to extract golden moments, establishing cinematic rhythm, spatial continuity, and visual flow.",
    tags: ["Curated B-Roll", "Spatial Continuity", "Visual Flow"],
  },
  {
    number: "07",
    title: "Thumbnails",
    subtitle: "Clean, attention-grabbing concepts and compositions",
    details: "Eye-catching cover frames and visual hooks with strong compositional balance, subject isolation, and clean typography.",
    tags: ["CTR Optimization", "Cover Framing", "Visual Punch"],
  },
];

export default function ServicesAccordion() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleItem = (idx: number) => {
    setExpandedIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section id="services" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-border-subtle">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
        <div>
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-gold/10 border border-accent-gold/30 text-accent-gold text-xs uppercase tracking-wider font-medium">
            WHAT I DO · RETENTION SERVICES
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-fg-primary font-light mt-3 tracking-tight">
            Specialized <span className="italic-serif-accent">capabilities.</span>
          </h2>
        </div>
        <p className="font-sans text-sm sm:text-base text-fg-muted max-w-[42ch] font-light">
          Tailored post-production for creators and brands looking to scale their digital audience through cinematic craftsmanship.
        </p>
      </div>

      {/* Accordion Stack */}
      <div className="flex flex-col divide-y divide-border-subtle">
        {services.map((service, idx) => {
          const isOpen = expandedIndex === idx;

          return (
            <div
              key={service.number}
              onMouseEnter={() => setExpandedIndex(idx)}
              onClick={() => toggleItem(idx)}
              className="py-6 sm:py-8 group cursor-pointer transition-colors"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-6 sm:gap-12">
                  <span className="font-mono text-sm sm:text-base text-accent-gold">
                    {service.number}
                  </span>
                  <div>
                    <h3 className="font-serif text-2xl sm:text-4xl text-fg-primary group-hover:text-accent-gold transition-colors font-light">
                      {service.title}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-fg-muted font-light mt-1">
                      {service.subtitle}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full border border-border-subtle group-hover:border-accent-gold flex items-center justify-center text-fg-muted group-hover:text-accent-gold transition-colors">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </div>
              </div>

              {/* Collapsible Details Panel */}
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pt-6 sm:pt-8 pl-12 sm:pl-20 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                      <p className="md:col-span-8 font-sans text-sm sm:text-base text-fg-muted font-light leading-relaxed">
                        {service.details}
                      </p>
                      <div className="md:col-span-4 flex flex-wrap gap-2">
                        {service.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 rounded-full border border-border-subtle bg-bg-card font-mono text-[10px] uppercase tracking-wider text-accent-gold"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}

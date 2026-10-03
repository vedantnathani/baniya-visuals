"use client";

import { motion } from "framer-motion";

const marqueeItems = [
  "Instagram Reels",
  "YouTube Shorts",
  "Cinematic Edits",
  "Beat-Sync",
  "Speed Ramps",
  "Sound Design",
  "Thumbnails",
];

export default function MarqueeStrip() {
  return (
    <section
      id="marquee"
      aria-label="Core Specialties Ticker"
      className="relative w-full max-w-full py-4 border-y border-border-subtle bg-bg-card/50 overflow-hidden overflow-x-clip select-none"
    >
      <div className="flex w-max">
        {/* Repeating tracks for seamless loop */}
        {[0, 1].map((copyIndex) => (
          <motion.div
            key={copyIndex}
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{
              duration: 24,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex items-center shrink-0"
          >
            {marqueeItems.map((item, idx) => (
              <div key={idx} className="flex items-center">
                <span className="font-mono text-xs sm:text-sm uppercase tracking-[0.25em] text-fg-muted px-6 sm:px-10 hover:text-accent-gold transition-colors">
                  {item}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-accent-gold" />
              </div>
            ))}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

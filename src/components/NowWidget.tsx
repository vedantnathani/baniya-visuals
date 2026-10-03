"use client";

import { useState } from "react";
import { siteConfig } from "@/data/config";
import { Film, X, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function NowWidget() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="fixed bottom-6 left-6 z-40 select-none">
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-3 p-3 px-4 rounded-2xl bg-bg-card/90 border border-border-subtle shadow-2xl backdrop-blur-xl max-w-[340px] text-xs"
          >
            {/* Pulsing indicator */}
            <div className="relative flex items-center justify-center shrink-0">
              <span className="w-2.5 h-2.5 rounded-full bg-accent-gold" />
              <span className="absolute w-2.5 h-2.5 rounded-full bg-accent-gold animate-ping opacity-75" />
            </div>

            <div className="flex flex-col overflow-hidden">
              <div className="flex items-center gap-2">
                <span className="font-mono text-[9px] uppercase tracking-wider text-accent-gold font-semibold">
                  NOW: {siteConfig.nowWidget.status}
                </span>
                <span className="font-mono text-[9px] text-fg-dim">
                  · {siteConfig.nowWidget.date}
                </span>
              </div>
              <p className="font-sans text-xs text-fg-primary truncate font-light mt-0.5">
                {siteConfig.nowWidget.project}
              </p>
            </div>

            {/* Dismiss button */}
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Minimize now status"
              className="p-1 rounded-full text-fg-dim hover:text-fg-primary hover:bg-bg-card-subtle transition-colors shrink-0 ml-1"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        ) : (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={() => setIsOpen(true)}
            aria-label="Expand now status"
            className="flex items-center gap-2 p-2.5 px-3 rounded-full bg-bg-card/90 border border-border-subtle shadow-lg backdrop-blur-xl text-fg-muted hover:text-accent-gold transition-colors font-mono text-[10px] uppercase tracking-wider"
          >
            <span className="w-2 h-2 rounded-full bg-accent-gold animate-pulse" />
            <span>NOW</span>
            <ChevronUp className="w-3 h-3" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

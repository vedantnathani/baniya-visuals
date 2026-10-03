"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface IntroPreloaderProps {
  onComplete?: () => void;
}

export default function IntroPreloader({ onComplete }: IntroPreloaderProps) {
  const [count, setCount] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Check reduced motion or previous view
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const hasSeenIntro = sessionStorage.getItem("baniya-intro-seen");

    if (prefersReducedMotion || hasSeenIntro) {
      setIsDone(true);
      if (onComplete) onComplete();
      return;
    }

    const duration = 1800; // ~1.8 seconds
    const intervalTime = 20;
    const increment = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
      setCount((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            sessionStorage.setItem("baniya-intro-seen", "true");
            setIsDone(true);
            if (onComplete) onComplete();
          }, 200);
          return 100;
        }
        return next;
      });
    }, intervalTime);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        skipIntro();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      clearInterval(timer);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onComplete]);

  const skipIntro = () => {
    sessionStorage.setItem("baniya-intro-seen", "true");
    setIsDone(true);
    if (onComplete) onComplete();
  };

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{
            y: "-100%",
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[10000] bg-[#0A0A0A] text-[#F2F0EB] flex flex-col justify-between p-6 sm:p-12 select-none overflow-hidden"
        >
          {/* Top Bar */}
          <div className="flex justify-between items-center text-xs font-mono text-[#9E9B93]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-ping" />
              <span className="uppercase tracking-widest text-[10px]">INITIALIZING ARCHIVE</span>
            </div>
            <button
              onClick={skipIntro}
              className="px-3 py-1 rounded-full border border-white/10 hover:border-[#D4AF37] text-[10px] uppercase tracking-widest hover:text-[#D4AF37] transition-colors"
            >
              Skip Intro [ESC]
            </button>
          </div>

          {/* Center Brand typography */}
          <div className="text-center my-auto">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-mono text-xs uppercase tracking-[0.3em] text-[#D4AF37] mb-3"
            >
              GOVIND MADDESHIYA
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-serif text-3xl sm:text-5xl md:text-6xl font-light tracking-wide text-[#F2F0EB]"
            >
              BANIYA VISUALS WORKS
            </motion.h1>
          </div>

          {/* Bottom Counter & Progress */}
          <div className="w-full max-w-xl mx-auto flex flex-col gap-3">
            <div className="flex justify-between items-end font-mono">
              <span className="text-xs uppercase tracking-widest text-[#9E9B93]">
                Cinematic Portfolio
              </span>
              <span className="text-4xl sm:text-5xl font-light text-[#D4AF37]">
                {Math.floor(count).toString().padStart(3, "0")}
              </span>
            </div>

            {/* Hairline Progress Bar */}
            <div className="w-full h-[1px] bg-white/10 relative overflow-hidden">
              <motion.div
                className="absolute inset-y-0 left-0 bg-[#D4AF37]"
                style={{ width: `${count}%` }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/data/config";
import { ArrowDown, ArrowUpRight, RefreshCw } from "lucide-react";

interface EditStyle {
  id: string;
  counter: string;
  title: string;
  badge: string;
  videoUrl: string;
  posterUrl: string;
  tagline: string;
}

const editStyles: EditStyle[] = [
  {
    id: "cinematic",
    counter: "01 / 04",
    title: "Cinematic",
    badge: "CINEMATIC PACING & COLOR",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-vertical-portrait-of-a-man-in-front-of-neon-lights-42994-large.mp4",
    posterUrl: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
    tagline: "Atmospheric framing with high-contrast color grading",
  },
  {
    id: "reels",
    counter: "02 / 04",
    title: "Reels / Trending",
    badge: "VIRAL VELOCITY & HOOKS",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-vertical-shot-of-a-skater-doing-tricks-in-a-skatepark-42656-large.mp4",
    posterUrl: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&w=800&q=80",
    tagline: "Instant 3-second hook retention and bass-matched cuts",
  },
  {
    id: "youtube",
    counter: "03 / 04",
    title: "YouTube",
    badge: "TALKING HEAD & B-ROLL",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-vertical-shot-of-a-photographer-taking-pictures-in-nature-42666-large.mp4",
    posterUrl: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80",
    tagline: "Clean visual rhythm, zoom pulses, and engaging B-roll",
  },
  {
    id: "shorts",
    counter: "04 / 04",
    title: "Shorts",
    badge: "RAPID-FIRE PACING",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-vertical-view-of-a-dj-performing-at-a-party-41716-large.mp4",
    posterUrl: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80",
    tagline: "Hypnotic rhythm engineered for 100%+ replay loops",
  },
];

export default function Hero() {
  const [styleIndex, setStyleIndex] = useState(0);
  const currentStyle = editStyles[styleIndex];
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const nextStyle = () => {
    setStyleIndex((prev) => (prev + 1) % editStyles.length);
  };

  // IntersectionObserver to auto play/pause only in viewport
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [styleIndex]);

  // Words for word-by-word reveal
  const headlineWords = [
    { text: "BANIYA", isAccent: false },
    { text: "MAKES", isAccent: false },
    { text: "reels", isAccent: true },
    { text: "STICK.", isAccent: false },
  ];

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100dvh] pt-24 pb-12 px-4 sm:px-6 lg:px-8 flex flex-col justify-between max-w-7xl mx-auto overflow-hidden"
    >
      {/* Background radial highlight */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] rounded-full pointer-events-none opacity-20 blur-[120px]"
        style={{ background: "radial-gradient(circle, var(--accent-gold) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      {/* Main Grid: Headline & CTAs on Left, Interactive Video Showcase on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center my-auto">
        {/* Left Column: Typography & CTAs */}
        <div className="lg:col-span-7 flex flex-col gap-6 z-10">
          {/* Eyebrow Label */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border-subtle bg-bg-card/60 backdrop-blur-sm w-fit font-mono text-[10px] sm:text-xs uppercase tracking-widest text-fg-muted">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-gold animate-ping" />
            <span>{siteConfig.title}</span>
          </div>

          {/* Headline with word-by-word reveal and italic serif accent */}
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-fg-primary leading-[1.08]">
            {headlineWords.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * i, ease: [0.16, 1, 0.3, 1] }}
                className={word.isAccent ? "italic-serif-accent mx-2" : "inline-block mr-2"}
              >
                {word.text}
              </motion.span>
            ))}
          </h1>

          {/* Subline */}
          <p className="font-sans text-base sm:text-lg text-fg-muted max-w-[50ch] font-light leading-relaxed">
            Reels · Shorts · Cinematic edits · YouTube content. Strong pacing and sound design that holds viewer attention.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#work"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent-gold text-black font-semibold text-xs tracking-wider uppercase hover:bg-accent-gold-hover hover:scale-105 active:scale-95 transition-all shadow-lg group"
            >
              <span>View the work</span>
              <span className="w-6 h-6 rounded-full bg-black/10 flex items-center justify-center transition-transform group-hover:translate-y-0.5">
                <ArrowDown className="w-3.5 h-3.5 text-black" />
              </span>
            </a>

            <a
              href={siteConfig.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border-strong hover:border-accent-gold text-fg-primary font-mono text-xs tracking-wider uppercase hover:text-accent-gold transition-all"
            >
              <span>WhatsApp me</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Stats Bar */}
          <div className="pt-6 border-t border-border-subtle flex items-center gap-8 text-xs font-mono text-fg-muted">
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-normal text-fg-primary">
                {siteConfig.stats.experience}
              </span>
              <span className="uppercase text-[10px] tracking-wider text-fg-muted">
                Experience
              </span>
            </div>
            <div className="w-[1px] h-8 bg-border-subtle" />
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-normal text-accent-gold">
                {siteConfig.stats.videosEdited}
              </span>
              <span className="uppercase text-[10px] tracking-wider text-fg-muted">
                Delivered
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Character-led Interactive Video Switcher */}
        <div className="lg:col-span-5 flex flex-col items-center lg:items-end">
          {/* Double-Bezel Hardware Enclosure */}
          <div className="relative w-full max-w-[320px] sm:max-w-[340px] p-2 rounded-[2rem] bg-bg-card/70 border border-border-subtle shadow-2xl backdrop-blur-xl">
            {/* Top Device Bar with Style Switcher */}
            <div className="flex items-center justify-between px-3 py-2 border-b border-border-subtle mb-2 font-mono text-xs">
              <span className="text-accent-gold font-medium tracking-wider">
                {currentStyle.counter}
              </span>
              <button
                onClick={nextStyle}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-border-subtle bg-bg-card-subtle hover:border-accent-gold hover:text-accent-gold text-[10px] uppercase tracking-wider transition-colors active:scale-95"
                title="Cycle editing style"
              >
                <RefreshCw className="w-3 h-3 text-accent-gold animate-spin-slow" />
                <span>Change style</span>
              </button>
            </div>

            {/* Inner Video Core with 9:16 vertical ratio */}
            <div
              className="relative aspect-[9/16] w-full rounded-[calc(2rem-0.5rem)] overflow-hidden bg-black/90 group"
              data-cursor="play"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStyle.id}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.04 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full h-full relative"
                >
                  <video
                    ref={videoRef}
                    src={currentStyle.videoUrl}
                    poster={currentStyle.posterUrl}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                  />

                  {/* Gradient Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

                  {/* Bottom Video Badge & Tagline */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 flex flex-col gap-1 pointer-events-none">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[9px] uppercase tracking-widest text-accent-gold font-medium">
                        {currentStyle.badge}
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    </div>
                    <p className="font-sans text-xs text-white/90 font-light line-clamp-1">
                      {currentStyle.tagline}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="flex justify-center pt-8">
        <a
          href="#marquee"
          aria-label="Scroll down to explore"
          className="flex flex-col items-center gap-2 text-fg-dim hover:text-accent-gold transition-colors font-mono text-[10px] uppercase tracking-widest"
        >
          <span>Scroll</span>
          <ArrowDown className="w-3 h-3 animate-bounce" />
        </a>
      </div>
    </section>
  );
}

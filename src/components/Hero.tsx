"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/data/config";
import Image from "next/image";
import {
  ArrowDown,
  ArrowUpRight,
  Heart,
  MessageCircle,
  Share2,
  Music2,
  CheckCircle,
  RefreshCw,
  Play,
} from "lucide-react";

interface HeroStyle {
  id: string;
  counter: string;
  title: string;
  badge: string;
  posterUrl: string;
  videoUrl: string;
  reelUrl: string;
  caption: string;
  audio: string;
  likes: string;
  comments: string;
}

const heroStyles: HeroStyle[] = [
  {
    id: "reels",
    counter: "01 / 04",
    title: "School Events",
    badge: "EVENT SHOWREEL",
    posterUrl: "/assets/reels/reel-2.jpg",
    videoUrl: "/assets/videos/reel-2.mp4",
    reelUrl: "https://www.instagram.com/reel/Dc8InDqCYsK/?stkn=ejBpd2Q5N3BpbjJt",
    caption: "Teacher's Day Celebration At JPS school 📍 #teachersday #viral #explorepage✨ #dudahi",
    audio: "Shreya Ghoshal, Shaan • Deewangi",
    likes: "4.6K",
    comments: "142",
  },
  {
    id: "commercial",
    counter: "02 / 04",
    title: "Cafe Commercial",
    badge: "COMMERCIAL REEL",
    posterUrl: "/assets/reels/reel-1.jpg",
    videoUrl: "/assets/videos/reel-1.mp4",
    reelUrl: "https://www.instagram.com/reel/DdsVlN7vvy9/?stkn=MXdsZzJpbGk4MnZ1Yg==",
    caption: "CHANDIGARH CAFE AND RESTAURANT ❤️🙌🏻 TAMKUHI ROAD 📍 #tamkuhiroad #viral",
    audio: "Trending Commercial Beat · @baniya_visuals",
    likes: "3.8K",
    comments: "98",
  },
  {
    id: "cinematic",
    counter: "03 / 04",
    title: "Spiritual Cinema",
    badge: "CINEMATIC STORY",
    posterUrl: "/assets/reels/reel-6.jpg",
    videoUrl: "/assets/videos/reel-6.mp4",
    reelUrl: "https://www.instagram.com/reel/DVXwke9kWoe/",
    caption: "I Found Him When No One Is There ❤️✨ #trendingreels #hanumanji #cinematic",
    audio: "Devotional Ambient Strings · @baniya_visuals",
    likes: "5.2K",
    comments: "284",
  },
  {
    id: "heritage",
    counter: "04 / 04",
    title: "Heritage Visuals",
    badge: "ARCHITECTURAL CUT",
    posterUrl: "/assets/reels/reel-4.jpg",
    videoUrl: "/assets/videos/reel-4.mp4",
    reelUrl: "https://www.instagram.com/reel/DcoObeMMGcu/",
    caption: "Khaas Baradari Heritage Visuals — Lucknow 📍 #khaasbaradari #viral #lucknow",
    audio: "Atmospheric Heritage Score · @baniya_visuals",
    likes: "2.1K",
    comments: "76",
  },
];

export default function Hero() {
  const [styleIndex, setStyleIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const currentStyle = heroStyles[styleIndex];

  const nextStyle = () => {
    setStyleIndex((prev) => (prev + 1) % heroStyles.length);
    setIsLiked(false);
  };

  const headlineWords = [
    { text: "BANIYA", isAccent: false },
    { text: "MAKES", isAccent: false },
    { text: "reels", isAccent: true },
    { text: "STICK.", isAccent: false },
  ];

  return (
    <section className="relative min-h-[100dvh] pt-24 pb-12 px-4 sm:px-6 lg:px-8 flex flex-col justify-between max-w-7xl mx-auto overflow-hidden">
      {/* Glow highlight */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] rounded-full pointer-events-none opacity-20 blur-[130px]"
        style={{ background: "radial-gradient(circle, var(--accent-gold) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      {/* 1. Instagram Story Highlights Ticker (Creator Essential) */}
      <div className="w-full pb-8 mb-4 overflow-x-auto no-scrollbar">
        <div className="flex items-center gap-4 sm:gap-6 min-w-max">
          <div className="flex flex-col items-center">
            <a
              href="https://www.instagram.com/baniya_visuals/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative p-[2.5px] rounded-full bg-gradient-to-tr from-amber-400 via-rose-500 to-purple-600 hover:scale-105 transition-transform"
            >
              <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-bg-primary bg-bg-card">
                <Image
                  src={siteConfig.profilePhoto}
                  alt={siteConfig.name}
                  fill
                  className="object-cover"
                />
              </div>
              <span className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-emerald-500 border-2 border-bg-primary" />
            </a>
            <span className="font-mono text-[10px] text-fg-muted mt-1.5 font-medium">
              Govind
            </span>
          </div>

          <div className="w-[1px] h-10 bg-border-subtle shrink-0" />

          {siteConfig.storyHighlights.map((story) => (
            <a
              key={story.id}
              href="#work"
              className="flex flex-col items-center group cursor-pointer"
            >
              <div className="p-[2px] rounded-full bg-gradient-to-tr from-amber-400/80 via-rose-500/80 to-purple-600/80 group-hover:from-amber-400 group-hover:via-rose-500 group-hover:to-purple-600 group-hover:scale-105 transition-all">
                <div className="relative w-13 h-13 sm:w-15 sm:h-15 w-[52px] h-[52px] sm:w-[60px] sm:h-[60px] rounded-full overflow-hidden border-2 border-bg-primary bg-bg-card">
                  <Image
                    src={story.image}
                    alt={story.label}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>
              <span className="font-mono text-[10px] uppercase tracking-wider text-fg-muted group-hover:text-accent-gold mt-1.5 transition-colors">
                {story.label}
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* Main Grid: Creator Info & Headline on Left, Instagram Smartphone Mockup on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center my-auto">
        {/* Left Column */}
        <div className="lg:col-span-7 flex flex-col gap-5 sm:gap-6 z-10">
          {/* Creator Profile Chip */}
          <div className="inline-flex items-center gap-2 sm:gap-3 p-1.5 pr-3 sm:pr-4 rounded-full border border-border-subtle bg-bg-card/70 backdrop-blur-md max-w-full overflow-hidden">
            <div className="relative w-6 h-6 sm:w-7 sm:h-7 rounded-full overflow-hidden border border-accent-gold/40 shrink-0">
              <Image
                src={siteConfig.profilePhoto}
                alt={siteConfig.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex items-center gap-1.5 shrink-0">
              <span className="font-mono text-xs text-accent-gold font-semibold">
                {siteConfig.handle}
              </span>
              <CheckCircle className="w-3.5 h-3.5 fill-accent-gold text-black" />
            </div>
            <span className="text-fg-dim text-xs shrink-0">·</span>
            <span className="font-mono text-[10px] sm:text-[11px] text-fg-muted uppercase tracking-wider truncate">
              {siteConfig.title}
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-fg-primary leading-[1.1] break-words">
            {headlineWords.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * i, ease: [0.16, 1, 0.3, 1] }}
                className={word.isAccent ? "italic-serif-accent mx-1 sm:mx-2" : "inline-block mr-1.5 sm:mr-2"}
              >
                {word.text}
              </motion.span>
            ))}
          </h1>

          {/* Subline */}
          <p className="font-sans text-sm sm:text-base lg:text-lg text-fg-muted max-w-[50ch] font-light leading-relaxed">
            Reels · Shorts · Cinematic edits · YouTube content. Strong pacing and sound design that holds viewer attention.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 pt-2">
            <a
              href="#work"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-accent-gold text-black font-semibold text-xs tracking-wider uppercase hover:bg-accent-gold-hover hover:scale-105 active:scale-95 transition-all shadow-lg group text-center"
            >
              <span>View the work</span>
              <span className="w-6 h-6 rounded-full bg-black/10 flex items-center justify-center transition-transform group-hover:translate-y-0.5">
                <ArrowDown className="w-3.5 h-3.5 text-black" />
              </span>
            </a>

            <div className="flex items-center gap-2 sm:gap-3">
              <a
                href={siteConfig.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full border border-border-strong hover:border-accent-gold text-fg-primary font-mono text-xs tracking-wider uppercase hover:text-accent-gold transition-all text-center"
              >
                <span>WhatsApp me</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <a
                href={siteConfig.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-3.5 rounded-full bg-bg-card border border-border-subtle hover:border-accent-gold text-fg-muted hover:text-accent-gold font-mono text-xs uppercase tracking-wider transition-all"
              >
                <span>@baniya_visuals ↗</span>
              </a>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="pt-6 border-t border-border-subtle grid grid-cols-3 divide-x divide-border-subtle text-xs font-mono text-fg-muted">
            <div className="flex flex-col pr-2">
              <span className="font-serif text-xl sm:text-2xl font-normal text-fg-primary">
                {siteConfig.stats.experience}
              </span>
              <span className="uppercase text-[9px] sm:text-[10px] tracking-wider text-fg-muted">
                Experience
              </span>
            </div>
            <div className="flex flex-col px-2 sm:px-4 text-center">
              <span className="font-serif text-xl sm:text-2xl font-normal text-accent-gold">
                {siteConfig.stats.videosEdited}
              </span>
              <span className="uppercase text-[9px] sm:text-[10px] tracking-wider text-fg-muted">
                Delivered
              </span>
            </div>
            <div className="flex flex-col pl-2 sm:pl-4 text-right sm:text-left">
              <span className="font-serif text-xl sm:text-2xl font-normal text-fg-primary">
                100%
              </span>
              <span className="uppercase text-[9px] sm:text-[10px] tracking-wider text-fg-muted truncate">
                Retention Pacing
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Smartphone Instagram Reel Mockup */}
        <div className="lg:col-span-5 flex flex-col items-center lg:items-end w-full">
          <div className="relative w-full max-w-[280px] sm:max-w-[340px] p-2 rounded-[2.2rem] sm:rounded-[2.4rem] bg-bg-card border-2 border-border-subtle shadow-2xl backdrop-blur-xl">
            {/* Top Phone Header */}
            <div className="flex items-center justify-between px-3 py-2 border-b border-border-subtle mb-2 font-mono text-xs">
              <span className="text-accent-gold font-medium tracking-wider">
                {currentStyle.counter}
              </span>
              <button
                onClick={nextStyle}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-border-subtle bg-bg-card-subtle hover:border-accent-gold hover:text-accent-gold text-[10px] uppercase tracking-wider transition-colors active:scale-95"
                title="Cycle reel style"
              >
                <RefreshCw className="w-3 h-3 text-accent-gold animate-spin-slow" />
                <span>Change style</span>
              </button>
            </div>

            {/* Inner Instagram Reel Viewport (9:16) */}
            <div className="relative aspect-[9/16] w-full rounded-[calc(2.4rem-0.6rem)] overflow-hidden bg-black shadow-inner">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStyle.id}
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.03 }}
                  transition={{ duration: 0.4 }}
                  className="relative w-full h-full"
                >
                  <video
                    key={currentStyle.videoUrl}
                    src={currentStyle.videoUrl}
                    poster={currentStyle.posterUrl}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                  />

                  {/* Top Instagram Reel Bar */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10 text-white drop-shadow">
                    <div className="flex items-center gap-2">
                      <div className="relative w-7 h-7 rounded-full overflow-hidden border border-white">
                        <Image
                          src={siteConfig.profilePhoto}
                          alt={siteConfig.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <span className="font-sans font-semibold text-xs text-white">
                        baniya_visuals
                      </span>
                      <a
                        href={siteConfig.socialLinks.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-2 py-0.5 rounded-full border border-white/60 bg-black/30 backdrop-blur-sm text-[9px] font-mono uppercase text-white hover:bg-white hover:text-black transition-colors"
                      >
                        Follow
                      </a>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-black/40 backdrop-blur-sm font-mono text-[9px] uppercase tracking-wider text-accent-gold">
                      {currentStyle.badge}
                    </span>
                  </div>

                  {/* Gradient Overlay for Instagram UI readability */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/90 pointer-events-none" />

                  {/* Right Social Actions Rail */}
                  <div className="absolute right-3 bottom-20 flex flex-col items-center gap-4 z-10">
                    {/* Like button */}
                    <button
                      onClick={() => setIsLiked(!isLiked)}
                      className="flex flex-col items-center gap-1 group active:scale-125 transition-transform"
                    >
                      <div className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center">
                        <Heart
                          className={`w-5 h-5 ${
                            isLiked
                              ? "fill-rose-500 text-rose-500 scale-110"
                              : "text-white group-hover:text-rose-400"
                          } transition-all`}
                        />
                      </div>
                      <span className="font-mono text-[10px] text-white/90">
                        {isLiked ? "Liked" : currentStyle.likes}
                      </span>
                    </button>

                    {/* Comments */}
                    <div className="flex flex-col items-center gap-1">
                      <div className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-white">
                        <MessageCircle className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-[10px] text-white/90">
                        {currentStyle.comments}
                      </span>
                    </div>

                    {/* Share */}
                    <a
                      href={currentStyle.reelUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:text-accent-gold transition-colors"
                    >
                      <Share2 className="w-5 h-5" />
                    </a>

                    {/* Audio spinning disc */}
                    <div className="w-9 h-9 rounded-full bg-black/60 border border-white/20 p-1 flex items-center justify-center animate-spin-slow">
                      <div className="w-full h-full rounded-full bg-accent-gold flex items-center justify-center">
                        <Music2 className="w-3.5 h-3.5 text-black" />
                      </div>
                    </div>
                  </div>

                  {/* Bottom Caption & Instagram Link */}
                  <div className="absolute bottom-3 left-3 right-16 z-10 flex flex-col gap-1.5 text-white">
                    <p className="font-sans text-xs font-light leading-snug line-clamp-2 drop-shadow">
                      {currentStyle.caption}
                    </p>

                    <div className="flex items-center gap-1.5 text-[10px] font-mono text-accent-gold drop-shadow">
                      <Music2 className="w-3 h-3 shrink-0" />
                      <span className="truncate">{currentStyle.audio}</span>
                    </div>

                    <a
                      href={currentStyle.reelUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 inline-flex items-center gap-1 text-[10px] font-mono uppercase tracking-wider text-white hover:text-accent-gold transition-colors"
                    >
                      <span>Watch Reel on Instagram</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
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

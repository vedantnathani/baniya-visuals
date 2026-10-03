"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/data/projects";
import Image from "next/image";
import {
  X,
  ArrowUpRight,
  Play,
  Pause,
  Volume2,
  VolumeX,
  MessageCircle,
  Instagram,
} from "lucide-react";
import { siteConfig } from "@/data/config";

interface VideoModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function VideoModal({ project, onClose }: VideoModalProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const progressBarRef = useRef<HTMLDivElement | null>(null);

  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(5);
  const [viewMode, setViewMode] = useState<"video" | "embed">("video");

  // Extract Instagram Reel ID if available
  const reelId = project?.instagramUrl
    ? project.instagramUrl.match(/reel\/([A-Za-z0-9_-]+)/)?.[1] || ""
    : "";

  useEffect(() => {
    if (!project) return;

    // Reset video state when project changes
    setIsPlaying(true);
    setCurrentTime(0);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === " ") {
        e.preventDefault();
        togglePlay();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [project, onClose]);

  if (!project) return null;

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    const nextMuted = !isMuted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
      if (videoRef.current.duration && !isNaN(videoRef.current.duration)) {
        setDuration(videoRef.current.duration);
      }
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!progressBarRef.current || !videoRef.current) return;
    const rect = progressBarRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(1, clickX / rect.width));
    const targetTime = percentage * (videoRef.current.duration || duration);
    videoRef.current.currentTime = targetTime;
    setCurrentTime(targetTime);
  };

  const formatTime = (seconds: number) => {
    const s = Math.floor(seconds);
    const m = Math.floor(s / 60);
    const rem = s % 60;
    return `${m.toString().padStart(2, "0")}:${rem.toString().padStart(2, "0")}`;
  };

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;
  const timecode = `${formatTime(currentTime)} / ${formatTime(duration)}`;

  const bookingText = encodeURIComponent(
    `Hi Govind, I loved your "${project.title}" reel and would like to book a similar video edit for my content!`
  );

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[1000] bg-black/92 backdrop-blur-2xl flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-label={`Preview for ${project.title}`}
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        {/* Top Control Bar */}
        <div className="fixed top-4 left-4 right-4 sm:top-6 sm:left-8 sm:right-8 flex items-center justify-between z-30 pointer-events-none">
          <div className="flex items-center gap-3 pointer-events-auto">
            <div className="relative w-9 h-9 rounded-full overflow-hidden border border-accent-gold/40 shadow">
              <Image
                src={siteConfig.profilePhoto}
                alt={siteConfig.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <span className="text-[10px] font-mono text-accent-gold uppercase tracking-wider block">
                {project.number} · {project.category}
              </span>
              <h3 className="font-serif text-sm sm:text-base text-white font-light line-clamp-1 max-w-[200px] sm:max-w-md">
                {project.title}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2 pointer-events-auto">
            {/* View Mode Switcher */}
            {reelId && (
              <div className="hidden sm:flex items-center p-0.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-mono">
                <button
                  onClick={() => setViewMode("video")}
                  className={`px-3 py-1 rounded-full transition-all ${
                    viewMode === "video"
                      ? "bg-accent-gold text-black font-semibold"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  HD Reel Player
                </button>
                <button
                  onClick={() => setViewMode("embed")}
                  className={`px-3 py-1 rounded-full transition-all ${
                    viewMode === "embed"
                      ? "bg-accent-gold text-black font-semibold"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  IG Embed
                </button>
              </div>
            )}

            {/* Direct Open in Instagram */}
            <a
              href={project.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-amber-500 via-rose-500 to-purple-600 text-white font-semibold text-xs uppercase tracking-wider hover:opacity-90 transition-opacity shadow-md"
            >
              <Instagram className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Watch on App</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label="Close preview"
              className="p-2 sm:p-2.5 rounded-full bg-white/10 hover:bg-accent-gold hover:text-black text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Central Modal Container */}
        <div className="relative w-full max-w-[420px] my-auto pt-16 pb-4 sm:py-8 flex flex-col items-center">
          {viewMode === "embed" && reelId ? (
            /* Mode: Instagram Embed Iframe (optional) */
            <div className="relative w-full aspect-[9/16] max-h-[78vh] rounded-[2rem] overflow-hidden border-2 border-white/20 bg-black shadow-2xl flex flex-col">
              <iframe
                src={`https://www.instagram.com/reel/${reelId}/embed/`}
                className="w-full h-full border-none rounded-[2rem]"
                allowFullScreen
                scrolling="no"
                title={project.title}
              />
            </div>
          ) : (
            /* Primary Mode: Full HD HTML5 Reel Video Player with Complete Controls */
            <div className="relative w-full aspect-[9/16] max-h-[78vh] rounded-[2.2rem] overflow-hidden border-2 border-white/20 bg-black shadow-2xl flex flex-col justify-between p-4 group select-none">
              {/* Working HTML5 Video Tag */}
              <video
                ref={videoRef}
                key={project.videoUrl}
                src={project.videoUrl}
                poster={project.posterUrl}
                autoPlay
                playsInline
                loop
                muted={isMuted}
                onTimeUpdate={handleTimeUpdate}
                onClick={togglePlay}
                className="absolute inset-0 w-full h-full object-cover cursor-pointer"
              />

              {/* Gradient Overlays for readable text and controls */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/90 pointer-events-none" />

              {/* Top Controls: Badge, Year, and Audio Mute Toggle */}
              <div className="relative z-10 flex items-center justify-between text-white">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-full bg-accent-gold/20 border border-accent-gold/40 text-[10px] font-mono text-accent-gold font-medium">
                    {project.category}
                  </span>
                  <span className="font-mono text-xs text-white/80">{project.year}</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={toggleMute}
                    aria-label={isMuted ? "Unmute audio" : "Mute audio"}
                    className="p-2 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white hover:text-accent-gold hover:border-accent-gold transition-colors active:scale-95"
                  >
                    {isMuted ? (
                      <VolumeX className="w-4 h-4 text-rose-400" />
                    ) : (
                      <Volume2 className="w-4 h-4 text-accent-gold" />
                    )}
                  </button>
                </div>
              </div>

              {/* Center Play/Pause Overlay on Hover or Pause */}
              <div
                className={`relative z-10 my-auto flex justify-center transition-opacity duration-300 ${
                  isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-100"
                }`}
              >
                <button
                  onClick={togglePlay}
                  className="w-16 h-16 rounded-full bg-accent-gold/95 text-black flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all"
                  aria-label={isPlaying ? "Pause reel" : "Play reel"}
                >
                  {isPlaying ? (
                    <Pause className="w-7 h-7 fill-black" />
                  ) : (
                    <Play className="w-7 h-7 fill-black ml-1" />
                  )}
                </button>
              </div>

              {/* Bottom Card Controls & Metadata */}
              <div className="relative z-10 flex flex-col gap-2.5 text-white">
                {/* Interactive Timecode & Scrubber Bar */}
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center justify-between font-mono text-[10px] text-white/80">
                    <span className="text-accent-gold font-medium">{timecode}</span>
                    <span className="text-[9px] uppercase tracking-wider text-white/60">
                      1080×1920 · 60 FPS
                    </span>
                  </div>

                  {/* Clickable Scrubber Bar */}
                  <div
                    ref={progressBarRef}
                    onClick={handleSeek}
                    className="w-full h-2 bg-white/20 rounded-full overflow-hidden cursor-pointer hover:h-2.5 transition-all relative"
                    title="Click to seek"
                  >
                    <div
                      className="h-full bg-accent-gold rounded-full transition-all duration-100"
                      style={{ width: `${progressPercent}%` }}
                    />
                  </div>
                </div>

                <h4 className="font-serif text-lg font-light leading-snug line-clamp-1">
                  {project.title}
                </h4>

                <p className="font-sans text-xs text-white/80 font-light line-clamp-2">
                  {project.description}
                </p>

                {/* Hashtags */}
                <div className="flex flex-wrap gap-1">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[9px] text-white/70 bg-white/10 px-2 py-0.5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Book This Style Button */}
                <a
                  href={`${siteConfig.whatsappLink}?text=${bookingText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 w-full py-3 rounded-full bg-accent-gold text-black font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 hover:bg-accent-gold-hover transition-colors shadow-lg active:scale-95"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Book Edit Like This</span>
                </a>
              </div>
            </div>
          )}

          {/* Quick Switch for Mobile if reelId exists */}
          {reelId && (
            <div className="sm:hidden flex items-center justify-center gap-2 mt-3 w-full">
              <button
                onClick={() => setViewMode(viewMode === "embed" ? "video" : "embed")}
                className="text-xs font-mono text-accent-gold underline underline-offset-4"
              >
                Switch to {viewMode === "embed" ? "HD Reel Player" : "Instagram Embed"}
              </button>
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

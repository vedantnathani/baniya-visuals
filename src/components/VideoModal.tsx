"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/data/projects";
import Image from "next/image";
import { X, ArrowUpRight, Heart, Music2, Share2 } from "lucide-react";
import { siteConfig } from "@/data/config";

interface VideoModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function VideoModal({ project, onClose }: VideoModalProps) {
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[1000] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={`Reel preview for ${project.title}`}
        >
          {/* Top Control Bar */}
          <div className="absolute top-4 left-4 right-4 sm:top-6 sm:left-8 sm:right-8 flex items-center justify-between z-20">
            <div className="flex items-center gap-3">
              <div className="relative w-8 h-8 rounded-full overflow-hidden border border-accent-gold/40">
                <Image
                  src={siteConfig.profilePhoto}
                  alt={siteConfig.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-[10px] uppercase tracking-widest text-accent-gold">
                  {project.number} · {project.category}
                </span>
                <h3 className="font-serif text-base sm:text-xl text-white font-light line-clamp-1">
                  {project.title}
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {/* Direct Open in Instagram */}
              <a
                href={project.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-amber-500 via-rose-500 to-purple-600 text-white font-semibold text-xs tracking-wider uppercase hover:opacity-90 transition-opacity"
              >
                <span>Watch on Instagram</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              {/* Close Button */}
              <button
                onClick={onClose}
                aria-label="Close preview"
                className="p-3 rounded-full bg-white/10 hover:bg-accent-gold hover:text-black text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Central 9:16 Smartphone Card Container */}
          <div className="relative max-h-[82vh] aspect-[9/16] w-full max-w-[380px] rounded-3xl overflow-hidden border-2 border-white/15 shadow-2xl bg-black flex flex-col justify-between p-4">
            {/* Background Reel Poster */}
            <Image
              src={project.posterUrl}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />

            {/* Dark Scrim Gradients */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/90 pointer-events-none" />

            {/* Top Bar inside card */}
            <div className="relative z-10 flex items-center justify-between text-white">
              <div className="flex items-center gap-2">
                <span className="font-sans font-semibold text-xs text-white">
                  baniya_visuals
                </span>
                <span className="px-2 py-0.5 rounded-full bg-accent-gold/20 border border-accent-gold/40 text-[9px] font-mono text-accent-gold uppercase">
                  {project.category}
                </span>
              </div>
              <span className="font-mono text-xs text-white/80">{project.year}</span>
            </div>

            {/* Right Interactive Rail */}
            <div className="absolute right-4 bottom-24 flex flex-col items-center gap-4 z-10 text-white">
              <div className="flex flex-col items-center gap-1">
                <div className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center">
                  <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
                </div>
                <span className="font-mono text-[10px]">{project.likes}</span>
              </div>

              <a
                href={project.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:text-accent-gold"
              >
                <Share2 className="w-5 h-5" />
              </a>
            </div>

            {/* Bottom Content Area */}
            <div className="relative z-10 flex flex-col gap-2 text-white">
              <p className="font-sans text-sm font-light leading-snug line-clamp-2">
                {project.description}
              </p>

              <div className="flex items-center gap-1.5 text-xs font-mono text-accent-gold">
                <Music2 className="w-3.5 h-3.5 shrink-0" />
                <span className="truncate">{project.audioTrack}</span>
              </div>

              {/* Tags Cloud */}
              <div className="flex flex-wrap gap-1 pt-1">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[10px] text-white/70 bg-white/10 px-2 py-0.5 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Open in Instagram CTA */}
              <a
                href={project.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 w-full py-3 rounded-full bg-gradient-to-r from-amber-500 via-rose-500 to-purple-600 text-white font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-lg"
              >
                <span>Watch Reel on Instagram</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

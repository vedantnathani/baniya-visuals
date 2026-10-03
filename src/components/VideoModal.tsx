"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/data/projects";
import { X, Volume2, VolumeX, Play, Pause } from "lucide-react";

interface VideoModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function VideoModal({ project, onClose }: VideoModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === " ") {
        e.preventDefault();
        togglePlay();
      }
      if (e.key === "m" || e.key === "M") {
        toggleMute();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [project, onClose]);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[1000] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={`Video player for ${project.title}`}
        >
          {/* Top Control Bar */}
          <div className="absolute top-4 left-4 right-4 sm:top-6 sm:left-8 sm:right-8 flex items-center justify-between z-20">
            <div className="flex flex-col">
              <span className="font-mono text-[10px] uppercase tracking-widest text-accent-gold">
                {project.number} / {project.category}
              </span>
              <h3 className="font-serif text-lg sm:text-2xl text-white font-light">
                {project.title}
              </h3>
            </div>

            <div className="flex items-center gap-3">
              {/* Mute Toggle */}
              <button
                onClick={toggleMute}
                aria-label={isMuted ? "Unmute audio" : "Mute audio"}
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                {isMuted ? <VolumeX className="w-5 h-5 text-red-400" /> : <Volume2 className="w-5 h-5 text-accent-gold" />}
              </button>

              {/* Close Button */}
              <button
                onClick={onClose}
                aria-label="Close video player"
                className="p-3 rounded-full bg-white/10 hover:bg-accent-gold hover:text-black text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Central 9:16 Video Container */}
          <div className="relative max-h-[82vh] aspect-[9/16] w-full max-w-[420px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black">
            <video
              ref={videoRef}
              src={project.videoUrl}
              poster={project.posterUrl}
              autoPlay
              playsInline
              loop
              className="w-full h-full object-cover cursor-pointer"
              onClick={togglePlay}
            />

            {/* Play/Pause overlay indicator */}
            {!isPlaying && (
              <div
                onClick={togglePlay}
                className="absolute inset-0 bg-black/40 flex items-center justify-center cursor-pointer"
              >
                <div className="w-16 h-16 rounded-full bg-accent-gold text-black flex items-center justify-center shadow-2xl">
                  <Play className="w-8 h-8 ml-1" />
                </div>
              </div>
            )}
          </div>

          {/* Bottom Technique Metadata */}
          <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 text-center text-xs font-mono text-[#9E9B93]">
            <span>Techniques: {project.techniques}</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

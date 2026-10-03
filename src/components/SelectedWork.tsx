"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projectsData, Project } from "@/data/projects";
import VideoModal from "./VideoModal";
import Image from "next/image";
import { Play, ArrowUpRight, Music2, Heart, Film } from "lucide-react";

type FilterCategory = "All" | "Reels" | "Shorts" | "Cinematic" | "YouTube";
const categories: FilterCategory[] = ["All", "Reels", "Shorts", "Cinematic", "YouTube"];

export default function SelectedWork() {
  const [selectedCategory, setSelectedCategory] = useState<FilterCategory>("All");
  const [activeProject, setActiveProject] = useState<Project>(projectsData[0]);
  const [modalProject, setModalProject] = useState<Project | null>(null);

  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <section id="work" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16 border-b border-border-subtle pb-8">
        <div>
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-gold/10 border border-accent-gold/30 text-accent-gold text-xs uppercase tracking-wider font-medium mb-3">
            FEATURED REELS · 4K 60FPS
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-fg-primary font-light tracking-tight">
            Selected <span className="italic-serif-accent">works.</span>
          </h2>
          <p className="font-sans text-xs sm:text-sm text-fg-muted font-light mt-2 max-w-[50ch]">
            Real Instagram reels &amp; cinematic projects edited by Govind Maddeshiya (@baniya_visuals). Click any reel to play the live preview.
          </p>
        </div>

        {/* Filter Chips */}
        <div className="flex gap-2 overflow-x-auto no-scrollbar overscroll-x-contain sm:flex-wrap pb-2 sm:pb-0 w-full sm:w-auto -mx-4 px-4 sm:mx-0 sm:px-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2.5 min-h-[44px] rounded-full font-mono text-xs uppercase tracking-wider shrink-0 transition-all duration-200 active:scale-95 ${
                selectedCategory === cat
                  ? "bg-accent-gold text-black font-semibold shadow-md"
                  : "border border-border-subtle bg-bg-card text-fg-muted hover:text-fg-primary hover:border-accent-gold"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Showcase Grid: List on Left, Sticky Vertical Preview on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Project List */}
        <div className="lg:col-span-7 flex flex-col divide-y divide-border-subtle">
          {filteredProjects.map((project) => {
            const isActive = activeProject.id === project.id;

            return (
              <div
                key={project.id}
                onMouseEnter={() => {
                  if (typeof window !== "undefined" && window.matchMedia("(hover: hover)").matches) {
                    setActiveProject(project);
                  }
                }}
                onClick={() => {
                  setActiveProject(project);
                  setModalProject(project);
                }}
                className={`py-6 sm:py-8 px-3 sm:px-4 -mx-3 sm:-mx-4 transition-all group cursor-pointer rounded-2xl active:bg-bg-card/70 ${
                  isActive ? "bg-bg-card/60 shadow-sm" : "hover:bg-bg-card/30"
                }`}
              >
                <div className="flex items-start justify-between gap-3 sm:gap-4">
                  <div className="flex items-start gap-3 sm:gap-6 flex-1 min-w-0">
                    <span className="font-mono text-xs sm:text-sm text-accent-gold pt-1 shrink-0">
                      {project.number}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 sm:gap-3 mb-1.5 flex-wrap">
                        <h3 className="font-serif text-lg sm:text-2xl text-fg-primary group-hover:text-accent-gold transition-colors font-light leading-snug">
                          {project.title}
                        </h3>
                        <span className="px-2 py-0.5 rounded-full border border-border-subtle font-mono text-[9px] uppercase tracking-wider text-fg-muted shrink-0">
                          {project.category}
                        </span>
                      </div>

                      <p className="font-sans text-xs sm:text-sm text-fg-muted font-light max-w-[48ch] leading-relaxed line-clamp-2 sm:line-clamp-none">
                        {project.description}
                      </p>

                      {/* Hashtags */}
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="font-mono text-[9px] sm:text-[10px] text-fg-dim hover:text-accent-gold transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Technique notes & direct actions */}
                      <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-3 pt-2 border-t border-border-subtle/50 text-xs font-mono">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setModalProject(project);
                          }}
                          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 min-h-[36px] rounded-full bg-accent-gold text-black font-semibold text-[10px] sm:text-[11px] uppercase tracking-wider hover:bg-accent-gold-hover shadow transition-all active:scale-95"
                        >
                          <Play className="w-3 h-3 fill-black" />
                          <span>Watch Reel</span>
                        </button>

                        <a
                          href={project.instagramUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-fg-muted hover:text-accent-gold flex items-center gap-1 uppercase tracking-wider text-[10px] sm:text-[11px] transition-colors py-1"
                        >
                          <span>Instagram ↗</span>
                        </a>

                        <span className="text-fg-dim hidden sm:inline">·</span>
                        <span className="text-fg-muted text-[11px] hidden sm:inline">
                          {project.techniques}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Mobile Reel Preview Thumbnail */}
                  <div className="lg:hidden relative w-16 sm:w-20 aspect-[9/16] rounded-xl overflow-hidden shrink-0 border border-border-subtle bg-black shadow-md active:scale-95 transition-transform">
                    <Image
                      src={project.posterUrl}
                      alt={project.title}
                      fill
                      sizes="80px"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <div className="w-7 h-7 rounded-full bg-accent-gold/90 text-black flex items-center justify-center shadow">
                        <Play className="w-3.5 h-3.5 fill-black ml-0.5" />
                      </div>
                    </div>
                  </div>

                  {/* Play Action button on desktop */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setModalProject(project);
                    }}
                    className="hidden lg:flex items-center justify-center w-11 h-11 rounded-full border border-accent-gold/40 bg-accent-gold/10 text-accent-gold group-hover:bg-accent-gold group-hover:text-black transition-all shrink-0 mt-1 shadow-md hover:scale-105 active:scale-95"
                    aria-label={`Watch reel preview for ${project.title}`}
                  >
                    <Play className="w-4 h-4 fill-current ml-0.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Sticky Preview Container for Desktop */}
        <div className="hidden lg:block lg:col-span-5 sticky top-28">
          <div className="p-3 rounded-[2.2rem] bg-bg-card border border-border-subtle shadow-2xl backdrop-blur-xl">
            <div className="flex items-center justify-between px-3 py-2 border-b border-border-subtle mb-3 font-mono text-xs text-fg-muted">
              <span className="text-accent-gold font-medium">
                {activeProject.number} · {activeProject.category}
              </span>
              <span className="text-[10px] uppercase tracking-wider text-fg-dim">
                CLICK TO PLAY REEL
              </span>
            </div>

            {/* Active Video Canvas */}
            <div
              className="relative aspect-[9/16] w-full rounded-[calc(2.2rem-0.75rem)] overflow-hidden bg-black group cursor-pointer"
              onClick={() => setModalProject(activeProject)}
            >
              <video
                key={activeProject.videoUrl}
                src={activeProject.videoUrl}
                poster={activeProject.posterUrl}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/30 pointer-events-none" />

              {/* Top Reel Header */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-white pointer-events-none">
                <span className="font-mono text-xs font-semibold text-accent-gold">
                  @baniya_visuals
                </span>
                <span className="flex items-center gap-1 font-mono text-xs bg-black/50 px-2 py-0.5 rounded-full">
                  <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
                  <span>{activeProject.likes}</span>
                </span>
              </div>

              {/* Center Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="px-6 py-3 rounded-full bg-accent-gold text-black font-semibold text-xs tracking-wider uppercase flex items-center gap-2 shadow-2xl group-hover:scale-110 active:scale-95 transition-transform">
                  <Play className="w-4 h-4 fill-black" />
                  <span>Play Reel Preview</span>
                </div>
              </div>

              {/* Bottom Details */}
              <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-black/80 backdrop-blur-md border border-white/10 text-white pointer-events-none">
                <h4 className="font-serif text-base font-light mb-1 line-clamp-1">
                  {activeProject.title}
                </h4>
                <div className="flex items-center gap-1.5 font-mono text-[10px] text-accent-gold tracking-wide">
                  <Music2 className="w-3 h-3 shrink-0" />
                  <span className="truncate">{activeProject.audioTrack}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Video Player */}
      <VideoModal project={modalProject} onClose={() => setModalProject(null)} />
    </section>
  );
}

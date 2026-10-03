"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projectsData, Project } from "@/data/projects";
import VideoModal from "./VideoModal";
import Image from "next/image";
import { Play, ArrowUpRight, Music2, Heart } from "lucide-react";

type FilterCategory = "All" | "Reels" | "Shorts" | "Cinematic" | "YouTube";
const categories: FilterCategory[] = ["All", "Reels", "Shorts", "Cinematic", "YouTube"];

export default function SelectedWork() {
  const [selectedCategory, setSelectedCategory] = useState<FilterCategory>("All");
  const [activeProject, setActiveProject] = useState<Project>(projectsData[0]);
  const [modalProject, setModalProject] = useState<Project | null>(null);
  const [mobileExpandedId, setMobileExpandedId] = useState<string | null>(projectsData[0].id);

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
            Real Instagram reels &amp; cinematic projects edited by Govind Maddeshiya (@baniya_visuals). Tap any reel to preview or watch directly on Instagram.
          </p>
        </div>

        {/* Filter Chips */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 rounded-full font-mono text-xs uppercase tracking-wider transition-all duration-200 ${
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
            const isMobileOpen = mobileExpandedId === project.id;

            return (
              <div
                key={project.id}
                onMouseEnter={() => setActiveProject(project)}
                className={`py-6 sm:py-8 transition-colors group cursor-pointer ${
                  isActive ? "bg-bg-card/40 px-4 rounded-2xl -mx-4" : ""
                }`}
                onClick={() => {
                  setActiveProject(project);
                  setMobileExpandedId(isMobileOpen ? null : project.id);
                }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4 sm:gap-6">
                    <span className="font-mono text-xs sm:text-sm text-accent-gold pt-1">
                      {project.number}
                    </span>
                    <div>
                      <div className="flex items-center gap-3 mb-1.5 flex-wrap">
                        <h3 className="font-serif text-xl sm:text-2xl text-fg-primary group-hover:text-accent-gold transition-colors font-light">
                          {project.title}
                        </h3>
                        <span className="px-2.5 py-0.5 rounded-full border border-border-subtle font-mono text-[9px] uppercase tracking-wider text-fg-muted">
                          {project.category}
                        </span>
                      </div>

                      <p className="font-sans text-xs sm:text-sm text-fg-muted font-light max-w-[48ch] leading-relaxed">
                        {project.description}
                      </p>

                      {/* Hashtags */}
                      <div className="flex flex-wrap gap-1.5 mt-2.5">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="font-mono text-[10px] text-fg-dim hover:text-accent-gold transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Technique notes & direct Instagram link */}
                      <div className="flex items-center gap-4 mt-3 pt-2 border-t border-border-subtle/50 text-xs font-mono">
                        <a
                          href={project.instagramUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-accent-gold hover:underline flex items-center gap-1 uppercase tracking-wider text-[11px]"
                        >
                          <span>Watch on Instagram</span>
                          <ArrowUpRight className="w-3 h-3" />
                        </a>
                        <span className="text-fg-dim">·</span>
                        <span className="text-fg-muted text-[11px]">
                          {project.techniques}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Launch button on desktop */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setModalProject(project);
                    }}
                    className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full border border-border-subtle bg-bg-card group-hover:border-accent-gold group-hover:bg-accent-gold text-fg-primary group-hover:text-black transition-all shrink-0 mt-1"
                    aria-label={`Open reel preview for ${project.title}`}
                  >
                    <Play className="w-4 h-4 fill-current ml-0.5" />
                  </button>
                </div>

                {/* Mobile Inline Video Preview on tap */}
                <div className="lg:hidden">
                  <AnimatePresence>
                    {isMobileOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35 }}
                        className="overflow-hidden pt-4"
                      >
                        <div
                          className="relative aspect-[9/16] w-full max-w-[280px] mx-auto rounded-2xl overflow-hidden bg-black border border-border-subtle shadow-xl"
                          onClick={() => setModalProject(project)}
                        >
                          <Image
                            src={project.posterUrl}
                            alt={project.title}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                            <div className="w-12 h-12 rounded-full bg-accent-gold text-black flex items-center justify-center shadow-lg">
                              <Play className="w-5 h-5 ml-0.5 fill-black" />
                            </div>
                          </div>
                          <span className="absolute bottom-2 left-2 right-2 text-center text-[10px] font-mono text-white/90 bg-black/70 py-1 rounded">
                            Tap to expand reel
                          </span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
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
                INSTAGRAM REEL · 9:16
              </span>
            </div>

            {/* Poster Canvas */}
            <div
              className="relative aspect-[9/16] w-full rounded-[calc(2.2rem-0.75rem)] overflow-hidden bg-black group cursor-pointer"
              data-cursor="play"
              onClick={() => setModalProject(activeProject)}
            >
              <Image
                key={activeProject.id}
                src={activeProject.posterUrl}
                alt={activeProject.title}
                fill
                sizes="420px"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                priority
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

              {/* Hover Play Pill */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="px-5 py-2.5 rounded-full bg-accent-gold text-black font-semibold text-xs tracking-wider uppercase flex items-center gap-2 shadow-2xl group-hover:scale-110 transition-transform">
                  <Play className="w-3.5 h-3.5 fill-black" />
                  <span>Preview Reel</span>
                </div>
              </div>

              {/* Bottom Details */}
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-black/75 backdrop-blur-md border border-white/10 text-white pointer-events-none">
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

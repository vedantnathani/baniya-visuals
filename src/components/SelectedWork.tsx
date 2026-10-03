"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projectsData, Project } from "@/data/projects";
import VideoModal from "./VideoModal";
import { Play, ArrowUpRight, Check } from "lucide-react";

type FilterCategory = "All" | "Reels" | "Shorts" | "Cinematic" | "YouTube";
const categories: FilterCategory[] = ["All", "Reels", "Shorts", "Cinematic", "YouTube"];

export default function SelectedWork() {
  const [selectedCategory, setSelectedCategory] = useState<FilterCategory>("All");
  const [activeProject, setActiveProject] = useState<Project>(projectsData[0]);
  const [modalProject, setModalProject] = useState<Project | null>(null);
  const [mobileExpandedId, setMobileExpandedId] = useState<string | null>(projectsData[0].id);

  const previewVideoRef = useRef<HTMLVideoElement>(null);

  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  // Keep active project valid when filters change
  useEffect(() => {
    if (filteredProjects.length > 0 && !filteredProjects.some((p) => p.id === activeProject.id)) {
      setActiveProject(filteredProjects[0]);
      setMobileExpandedId(filteredProjects[0].id);
    }
  }, [selectedCategory, filteredProjects, activeProject]);

  // Video IntersectionObserver for preview autoplay
  useEffect(() => {
    const video = previewVideoRef.current;
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
      { threshold: 0.25 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [activeProject]);

  return (
    <section id="work" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16 border-b border-border-subtle pb-8">
        <div>
          <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-accent-gold">
            SELECTED ARCHIVE [05]
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-fg-primary font-light mt-2 tracking-tight">
            Curated <span className="italic-serif-accent">works.</span>
          </h2>
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

      {/* Showcase Grid: List on Left, Sticky Vertical Video Preview on Right */}
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
                  isActive ? "bg-bg-card/40 px-4 rounded-xl -mx-4" : ""
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
                      <div className="flex items-center gap-3 mb-1.5">
                        <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl text-fg-primary group-hover:text-accent-gold transition-colors font-light">
                          {project.title}
                        </h3>
                        <span className="px-2.5 py-0.5 rounded-full border border-border-subtle font-mono text-[9px] uppercase tracking-wider text-fg-muted">
                          {project.category}
                        </span>
                      </div>
                      <p className="font-sans text-xs sm:text-sm text-fg-muted font-light max-w-[48ch]">
                        {project.description}
                      </p>
                      <p className="font-mono text-[10px] text-accent-gold mt-2 uppercase tracking-wider">
                        {project.techniques}
                      </p>
                    </div>
                  </div>

                  {/* Launch button on desktop */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setModalProject(project);
                    }}
                    className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full border border-border-subtle bg-bg-card group-hover:border-accent-gold group-hover:bg-accent-gold text-fg-primary group-hover:text-black transition-all shrink-0 mt-1"
                    aria-label={`Open full-screen player for ${project.title}`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
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
                          className="relative aspect-[9/16] w-full max-w-[280px] mx-auto rounded-xl overflow-hidden bg-black border border-border-subtle shadow-xl"
                          onClick={() => setModalProject(project)}
                        >
                          <video
                            src={project.videoUrl}
                            poster={project.posterUrl}
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                            <div className="w-12 h-12 rounded-full bg-accent-gold text-black flex items-center justify-center shadow-lg">
                              <Play className="w-5 h-5 ml-0.5" />
                            </div>
                          </div>
                          <span className="absolute bottom-2 left-2 right-2 text-center text-[10px] font-mono text-white/90 bg-black/60 py-1 rounded">
                            Tap for full-screen sound
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
          <div className="p-3 rounded-[2rem] bg-bg-card border border-border-subtle shadow-2xl backdrop-blur-xl">
            <div className="flex items-center justify-between px-3 py-2 border-b border-border-subtle mb-3 font-mono text-xs text-fg-muted">
              <span className="text-accent-gold font-medium">
                {activeProject.number} · {activeProject.category}
              </span>
              <span className="text-[10px] uppercase tracking-wider text-fg-dim">
                9:16 VERTICAL
              </span>
            </div>

            {/* Video Canvas */}
            <div
              className="relative aspect-[9/16] w-full rounded-[calc(2rem-0.75rem)] overflow-hidden bg-black group cursor-pointer"
              data-cursor="play"
              onClick={() => setModalProject(activeProject)}
            >
              <video
                key={activeProject.id}
                ref={previewVideoRef}
                src={activeProject.videoUrl}
                poster={activeProject.posterUrl}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />

              {/* Hover Play Pill */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="px-5 py-2.5 rounded-full bg-accent-gold/90 text-black font-semibold text-xs tracking-wider uppercase flex items-center gap-2 shadow-2xl group-hover:scale-110 transition-transform">
                  <Play className="w-3.5 h-3.5 fill-black" />
                  <span>Watch with sound</span>
                </div>
              </div>

              {/* Bottom Technique details */}
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-black/70 backdrop-blur-md border border-white/10 text-white pointer-events-none">
                <h4 className="font-serif text-base font-light mb-1">
                  {activeProject.title}
                </h4>
                <p className="font-mono text-[10px] text-accent-gold tracking-wide">
                  {activeProject.techniques}
                </p>
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

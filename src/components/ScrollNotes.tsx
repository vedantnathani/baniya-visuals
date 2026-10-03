"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles } from "lucide-react";

interface NoteCard {
  label: string;
  tag: string;
  statement: {
    lead: string;
    italic: string;
    tail?: string;
  };
  explanation: string;
  imageUrl: string;
}

const notes: NoteCard[] = [
  {
    label: "01",
    tag: "TIMING & CUTS",
    statement: {
      lead: "Pacing is a ",
      italic: "design",
      tail: " decision.",
    },
    explanation: "Cuts are not arbitrary trims. Each millisecond of frame hold establishes psychological anticipation, rhythm, and tension that commands audience retention.",
    imageUrl: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80",
  },
  {
    label: "02",
    tag: "AUDIO DESIGN",
    statement: {
      lead: "Music sync ",
      italic: "drives",
      tail: " retention.",
    },
    explanation: "When transient sound effects lock with visual velocity, the brain enters a flow state. Subtle whooshes, risers, and bass drops transform simple cuts into cinematic moments.",
    imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
  },
  {
    label: "03",
    tag: "STORYTELLING",
    statement: {
      lead: "Every edit is ",
      italic: "tailored",
      tail: " to the story.",
    },
    explanation: "No generic templates or repetitive presets. The visual language, velocity curves, and color tones are tailored to match each creator's unique energy.",
    imageUrl: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80",
  },
];

export default function ScrollNotes() {
  return (
    <section className="w-full border-t border-border-subtle overflow-hidden">
      <div className="max-w-7xl mx-auto py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="mb-16 text-center max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-gold/10 border border-accent-gold/30 text-accent-gold text-xs uppercase tracking-wider font-medium mb-3"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Editor&apos;s Craft</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-3xl sm:text-5xl text-fg-primary font-light tracking-tight"
        >
          Editorial <span className="italic-serif-accent">notes.</span>
        </motion.h2>
      </div>

      {/* 3 Staggered Cards with Scroll Springs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {notes.map((note, idx) => (
          <motion.div
            key={note.label}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.7,
              delay: idx * 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="group flex flex-col rounded-[2.2rem] bg-bg-card border border-border-subtle overflow-hidden sm:hover:border-accent-gold/50 sm:hover:-translate-y-1.5 transition-all duration-300 shadow-lg"
          >
            {/* Image Header with Scrim */}
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-bg-card-subtle">
              <Image
                src={note.imageUrl}
                alt={note.statement.lead}
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-bg-card/40 to-transparent" />

              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span className="font-serif text-xs font-semibold text-accent-gold px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10">
                  {note.label}
                </span>
                <span className="font-sans text-[10px] uppercase tracking-wider text-white/80 px-2 py-0.5 rounded-full bg-black/50 backdrop-blur-md">
                  {note.tag}
                </span>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl font-light text-fg-primary leading-snug mb-3">
                  {note.statement.lead}
                  <span className="italic-serif-accent">{note.statement.italic}</span>
                  {note.statement.tail}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-fg-muted font-light leading-relaxed">
                  {note.explanation}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

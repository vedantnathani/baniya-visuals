"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface NoteCard {
  number: string;
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
    number: "NOTE 01",
    statement: {
      lead: "Pacing is a ",
      italic: "design",
      tail: " decision.",
    },
    explanation: "Cuts are not arbitrary trims. Each millisecond of frame hold establishes psychological anticipation and rhythm.",
    imageUrl: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80",
  },
  {
    number: "NOTE 02",
    statement: {
      lead: "Music sync ",
      italic: "drives",
      tail: " retention.",
    },
    explanation: "When transient sound effects lock with visual velocity, the brain enters a flow state that discourages scrolling away.",
    imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
  },
  {
    number: "NOTE 03",
    statement: {
      lead: "Every edit is ",
      italic: "tailored",
      tail: " to the story.",
    },
    explanation: "No rigid templates. The visual language, font choice, and energy level match the individual creator's distinct voice.",
    imageUrl: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80",
  },
];

export default function ScrollNotes() {
  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-border-subtle">
      {/* Section Header */}
      <div className="mb-16 text-center max-w-2xl mx-auto">
        <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-accent-gold">
          PHILOSOPHY [09]
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl text-fg-primary font-light mt-2 tracking-tight">
          Editorial <span className="italic-serif-accent">notes.</span>
        </h2>
      </div>

      {/* 3 Staggered Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {notes.map((note, idx) => (
          <motion.div
            key={note.number}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col rounded-[2rem] bg-bg-card border border-border-subtle overflow-hidden hover:border-accent-gold/40 transition-colors shadow-lg"
          >
            {/* Image Header with Scrim */}
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-bg-card-subtle">
              <Image
                src={note.imageUrl}
                alt={note.statement.lead}
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-bg-card/40 to-transparent" />
              <div className="absolute top-4 left-4 font-mono text-[10px] uppercase tracking-widest text-accent-gold px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10">
                {note.number}
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

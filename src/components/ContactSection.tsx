"use client";

import { siteConfig } from "@/data/config";
import { ArrowUpRight, MessageCircle, Mail, Instagram, Sparkles, Clock, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactSection() {
  const quickOptions = [
    { label: "Book Instagram Reel", text: "Hi Govind, I want to book an Instagram Reel edit." },
    { label: "Book YouTube Video", text: "Hi Govind, I want to discuss a YouTube video project." },
    { label: "Cinematic / Event Edit", text: "Hi Govind, I'd like to collaborate on a cinematic / event video." },
    { label: "Monthly Retainer", text: "Hi Govind, I'm looking for a video editing retainer for my brand/channel." },
  ];

  return (
    <section id="contact" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-border-subtle">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-accent-gold/10 border border-accent-gold/30 text-accent-gold text-xs font-medium uppercase tracking-wider mb-4"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Let&apos;s Create Something Viral</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light text-fg-primary tracking-tight mb-6"
        >
          LET&apos;S WORK <span className="italic-serif-accent">TOGETHER.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-sans text-lg sm:text-2xl text-fg-muted font-light max-w-[38ch] mx-auto leading-relaxed"
        >
          &ldquo;{siteConfig.closingMantra}&rdquo;
        </motion.p>
      </div>

      {/* Main Direct Booking Action Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
        {/* 1. WhatsApp Button (Primary Channel) */}
        <motion.a
          href={siteConfig.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="group relative p-8 rounded-[2rem] bg-gradient-to-b from-bg-card to-bg-card-subtle border-2 border-accent-gold/40 hover:border-accent-gold hover:shadow-[0_12px_40px_var(--accent-glow)] transition-all duration-300 flex flex-col justify-between"
        >
          <div>
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <MessageCircle className="w-7 h-7" />
            </div>
            <span className="text-[11px] font-medium uppercase tracking-wider text-emerald-400 block mb-1">
              Fastest Response · Instant Chat
            </span>
            <h3 className="font-serif text-2xl text-fg-primary font-normal mb-2">
              Chat on WhatsApp
            </h3>
            <p className="font-sans text-xs sm:text-sm text-fg-muted font-light leading-relaxed">
              Send your raw footage or project idea directly. Typical reply in under 30 minutes.
            </p>
          </div>

          <div className="pt-8">
            <span className="w-full py-3.5 px-6 rounded-full bg-accent-gold text-black font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 group-hover:bg-accent-gold-hover shadow-lg transition-colors">
              <span>Message on WhatsApp</span>
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </div>
        </motion.a>

        {/* 2. Direct Email Button */}
        <motion.a
          href={`mailto:${siteConfig.email}?subject=${encodeURIComponent("Video Editing Inquiry for Baniya Visuals Works")}`}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="group relative p-8 rounded-[2rem] bg-bg-card border border-border-subtle hover:border-accent-gold/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
        >
          <div>
            <div className="w-14 h-14 rounded-2xl bg-accent-gold/10 text-accent-gold border border-accent-gold/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Mail className="w-7 h-7" />
            </div>
            <span className="text-[11px] font-medium uppercase tracking-wider text-fg-dim block mb-1">
              Commercial / Retainer Briefs
            </span>
            <h3 className="font-serif text-2xl text-fg-primary font-normal mb-2">
              Send Email
            </h3>
            <p className="font-sans text-xs sm:text-sm text-fg-muted font-light leading-relaxed">
              For detailed briefs, drive folders, agency collaborations, and project scope discussions.
            </p>
          </div>

          <div className="pt-8">
            <span className="w-full py-3.5 px-6 rounded-full border border-border-strong hover:border-accent-gold text-fg-primary group-hover:text-accent-gold font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-colors">
              <span>Send an Email</span>
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </div>
        </motion.a>

        {/* 3. Instagram DM Button */}
        <motion.a
          href={siteConfig.socialLinks.instagram}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="group relative p-8 rounded-[2rem] bg-bg-card border border-border-subtle hover:border-accent-gold/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
        >
          <div>
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-amber-500/20 via-rose-500/20 to-purple-600/20 text-rose-400 border border-rose-500/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Instagram className="w-7 h-7" />
            </div>
            <span className="text-[11px] font-medium uppercase tracking-wider text-fg-dim block mb-1">
              Social Direct Message
            </span>
            <h3 className="font-serif text-2xl text-fg-primary font-normal mb-2">
              DM on Instagram
            </h3>
            <p className="font-sans text-xs sm:text-sm text-fg-muted font-light leading-relaxed">
              Drop a link to your reference reel or DM me directly on <span className="text-accent-gold font-medium">@baniya_visuals</span>.
            </p>
          </div>

          <div className="pt-8">
            <span className="w-full py-3.5 px-6 rounded-full border border-border-strong hover:border-accent-gold text-fg-primary group-hover:text-accent-gold font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-colors">
              <span>Open Instagram DM</span>
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </div>
        </motion.a>
      </div>

      {/* Instant WhatsApp Quick Select Chips */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto p-6 sm:p-8 rounded-[2rem] bg-bg-card-subtle/60 border border-border-subtle text-center flex flex-col items-center gap-4"
      >
        <span className="text-xs uppercase tracking-wider text-fg-dim font-medium">
          Quick Start: Choose what you need edited and message directly
        </span>

        <div className="flex flex-wrap items-center justify-center gap-2.5">
          {quickOptions.map((opt, i) => (
            <a
              key={i}
              href={`${siteConfig.whatsappLink}?text=${encodeURIComponent(opt.text)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full border border-border-subtle bg-bg-card hover:border-accent-gold hover:text-accent-gold text-fg-muted text-xs transition-all active:scale-95 flex items-center gap-1.5"
            >
              <span>{opt.label}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-xs text-fg-dim border-t border-border-subtle/60 w-full mt-2">
          <span className="flex items-center gap-1.5">
            <CheckCircle className="w-3.5 h-3.5 text-accent-gold" />
            Quick Turnaround
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle className="w-3.5 h-3.5 text-accent-gold" />
            Full 4K Quality Exports
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle className="w-3.5 h-3.5 text-accent-gold" />
            Revision Support
          </span>
        </div>
      </motion.div>
    </section>
  );
}

# Requirements: Baniya Visuals Works Portfolio

## System & Architecture Requirements
- [x] Next.js 14/15 App Router with TypeScript
- [x] Tailwind CSS configured with custom design tokens and CSS variables
- [x] Lenis smooth scrolling integration
- [x] Motion (`motion/react` / `framer-motion`) animations respecting `prefers-reduced-motion`
- [x] Triple theme system (Dark Cinema [default], Light Editorial, Bold Color) saved in `localStorage`
- [x] Mobile-first architecture optimized for Instagram link-in-bio traffic (360px to 1920px)
- [x] Netlify deploy config (`netlify.toml`)

## Content & Section Requirements
- [x] **01 Animated Intro**: ~2s skippable preloader with 0-100 counter and curtain wipe reveal
- [x] **02 Sticky Navbar**: Wordmark "Baniya Visuals Works", links, theme switcher, "Hire Me" gold pill button, fullscreen mobile drawer
- [x] **03 Character-led Hero**: 
  - Headline: "BANIYA MAKES *reels* STICK." (word-by-word reveal)
  - 4-style interactive switcher (Cinematic, Reels / Trending, YouTube, Shorts) with live video swapping
  - Subline: "Reels · Shorts · Cinematic edits · YouTube content"
  - CTAs: "View the work", "WhatsApp me"
  - Stats row: 8+ Years · 500+ Videos Edited
  - Ambient scroll indicator
- [x] **04 Marquee Strip**: Infinite scrolling text ticker (Instagram Reels • YouTube Shorts • Cinematic Edits...)
- [x] **05 Selected Work (Interactive Showcase)**:
  - Interactive numbered list (01, 02, 03...) with category tags
  - Side-by-side 9:16 vertical video preview on desktop; accordion/tap preview on mobile
  - Full-screen modal player with sound toggle and close button
  - Filter chips: All / Reels / Shorts / Cinematic / YouTube
  - Data sourced cleanly from `/data/projects.ts` (6 curated showcase items)
- [x] **06 Services / Core Expertise**: Numbered accordion (01 to 07) with expandable hover preview
- [x] **07 Pricing**:
  - "Simple *pricing.*"
  - 3 tiered cards (Standard Cut ₹300, Advanced Motion ₹700-₹800 [highlighted], Royal Cinema Grade ₹1000-₹1200)
  - WhatsApp pre-filled booking links
  - Custom quote disclaimer
- [x] **08 About**:
  - Creator photo / visual + bio & quote: "I edit stories, *not just footage.*"
  - "Open for work" pulsing badge
  - Tools block: CapCut (Advanced) & Alight Motion (Advanced)
  - Creative strengths list
- [x] **09 Scroll-Driven Notes**: 3 editorial cards animating on scroll
- [x] **10 Mood / Now Widget**: Floating indicator "NOW: Editing [current project]" with date stamp
- [x] **11 Contact Section**:
  - "LET'S WORK TOGETHER."
  - "Turn your raw footage into content people want to watch."
  - Direct WhatsApp, Email, Instagram DM actions + validated contact form with mailto fallback
- [x] **12 Footer**: Social links, phone number, back-to-top button, copyright 2026
- [x] **Interactions & Polish**:
  - Custom magnetic cursor (dot -> "PLAY" pill over video previews, touch-disabled)
  - Subtle film-grain overlay
  - Viewport-aware video observer for auto-play/pause and low data consumption

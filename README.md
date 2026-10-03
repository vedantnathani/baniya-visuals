# Baniya Visuals Works

> **Cinematic Video Editor & Content Creator Portfolio**  
> Personal brand and showcase of **Govind Maddeshiya** (@baniya_visuals) — 8+ years of craft, 500+ reels delivered, engineered for viewer retention.

---

## Overview

**Baniya Visuals Works** is an award-style editorial creative portfolio built with Next.js 14 App Router, TypeScript, and Tailwind CSS. The interface adopts an editorial publication aesthetic with typography-led hierarchy, fluid Lenis momentum scrolling, high-performance reel previews, and instant direct WhatsApp booking.

### Core Highlights
- **Editorial Design System:** Default warm ivory and ochre gold theme with Cormorant Garamond, Cinzel, JetBrains Mono, and Plus Jakarta Sans typography.
- **Three Switchable Visual Themes:** 
  1. *Light Editorial* (Default — luxury print publication aesthetic)
  2. *Dark Cinema* (Nocturne theater mood with glowing gold accents)
  3. *Bold Color* (Electric midnight sapphire and amber)
- **Active Reel Previews:** HTML5 vertical video playback with play/pause, volume controls, timecode scrubber, and direct "Watch on App ↗" Instagram links.
- **Fluid Lenis Scrolling:** Kinetic inertia damping and smooth hash navigation across sections.
- **1-Tap Direct Collaboration:** Frictionless direct WhatsApp booking (`wa.me/916393101990`) and mail actions without clunky contact forms.
- **Vercel Deploy Ready:** Clean, standard Next.js App Router setup with dynamic SEO metadata, OpenGraph cards, and schema.org Person structured data.

---

## Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + Vanilla CSS Tokens
- **Animations:** [Framer Motion](https://www.framer-motion.dev/)
- **Smooth Scroll:** [Lenis](https://github.com/darkroomengineering/lenis)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Fonts:** Cormorant Garamond, Cinzel, Plus Jakarta Sans, JetBrains Mono (Next.js Google Fonts)

---

## Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Locally
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build
```bash
npm run build
npm start
```

---

## Project Structure

```text
├── public/
│   └── assets/
│       ├── images/       # Govind's portraits and brand assets
│       ├── reels/        # Reel cover posters
│       └── videos/       # Local vertical video loops (9:16)
├── src/
│   ├── app/
│   │   ├── globals.css   # Theme tokens and Lenis styles
│   │   ├── layout.tsx    # SEO, fonts, schema.org Person JSON-LD
│   │   └── page.tsx      # Main single-page portfolio layout
│   ├── components/       # Hero, SelectedWork, Services, Pricing, VideoModal, etc.
│   └── data/             # Site configuration, project metadata, and pricing
├── brag-output/          # Hyperframes launch video and assets
└── README.md
```

---

## Deployment (Vercel)

This repository is optimized for one-click deployment on **Vercel**:

1. Push this repository to GitHub.
2. Import the repository in your [Vercel Dashboard](https://vercel.com/new).
3. Framework preset: **Next.js**.
4. Click **Deploy**.

---

## License

Private portfolio repository © 2026 Govind Maddeshiya (Baniya Visuals Works). All rights reserved.

export interface Project {
  id: string;
  number: string;
  title: string;
  category: "Reels" | "Shorts" | "Cinematic" | "YouTube";
  description: string;
  techniques: string;
  videoUrl: string; // PLACEHOLDER: Paste your direct video URL (.mp4 or .webm)
  posterUrl: string; // PLACEHOLDER: Paste thumbnail/poster image URL
  year: string;
  aspectRatio: string;
}

export const projectsData: Project[] = [
  {
    id: "project-1",
    number: "01",
    title: "Midnight Tokyo Cyber Montage",
    category: "Cinematic",
    description: "Atmospheric nightlife narrative driven by color grade contrast and cinematic pacing.",
    techniques: "Color grading, speed ramps, sound design, ambient foley",
    // PLACEHOLDER: Replace with actual video URL
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-vertical-portrait-of-a-man-in-front-of-neon-lights-42994-large.mp4",
    posterUrl: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
    year: "2026",
    aspectRatio: "9:16",
  },
  {
    id: "project-2",
    number: "02",
    title: "Urban Streetwear Velocity Reel",
    category: "Reels",
    description: "High-octane apparel showcase with instant hook rate and synchronized bass drops.",
    techniques: "Beat-sync, velocity keyframes, kinetic typography captions",
    // PLACEHOLDER: Replace with actual video URL
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-vertical-shot-of-a-skater-doing-tricks-in-a-skatepark-42656-large.mp4",
    posterUrl: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&w=800&q=80",
    year: "2026",
    aspectRatio: "9:16",
  },
  {
    id: "project-3",
    number: "03",
    title: "Apex Electronic Club Visualizer",
    category: "Shorts",
    description: "Hypnotic live performance teaser engineered for 100%+ replay retention.",
    techniques: "Rhythm matching, flash cuts, custom optical glow, bass rumble",
    // PLACEHOLDER: Replace with actual video URL
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-vertical-view-of-a-dj-performing-at-a-party-41716-large.mp4",
    posterUrl: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80",
    year: "2026",
    aspectRatio: "9:16",
  },
  {
    id: "project-4",
    number: "04",
    title: "Creator Masterclass YouTube Edit",
    category: "YouTube",
    description: "Talking-head longform cut with high-retention zoom pulses and illustrative B-roll.",
    techniques: "Engagement zoom cuts, sound accents, subtle motion graphics",
    // PLACEHOLDER: Replace with actual video URL
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-vertical-shot-of-a-photographer-taking-pictures-in-nature-42666-large.mp4",
    posterUrl: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80",
    year: "2025",
    aspectRatio: "9:16",
  },
  {
    id: "project-5",
    number: "05",
    title: "Nocturne City Lights Walkthrough",
    category: "Cinematic",
    description: "Mood-driven cinematic sequence showcasing narrative flow and soundstage precision.",
    techniques: "Seamless match cuts, anamorphic flare polish, dynamic LUTs",
    // PLACEHOLDER: Replace with actual video URL
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-vertical-shot-of-a-woman-walking-through-a-city-at-night-42984-large.mp4",
    posterUrl: "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=800&q=80",
    year: "2025",
    aspectRatio: "9:16",
  },
  {
    id: "project-6",
    number: "06",
    title: "Choreography & Motion Rhythm",
    category: "Reels",
    description: "Vibrant dance movement edit with micro-transitions and synchronized tempo shifts.",
    techniques: "Speed ramps, motion tracking blur, punch-in transitions",
    // PLACEHOLDER: Replace with actual video URL
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-vertical-shot-of-a-woman-dancing-in-a-neon-room-42998-large.mp4",
    posterUrl: "https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&w=800&q=80",
    year: "2025",
    aspectRatio: "9:16",
  },
];

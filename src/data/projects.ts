export interface Project {
  id: string;
  number: string;
  title: string;
  category: "Reels" | "Shorts" | "Cinematic" | "YouTube";
  description: string;
  techniques: string;
  instagramUrl: string;
  posterUrl: string;
  year: string;
  aspectRatio: string;
  tags: string[];
  likes: string;
  audioTrack: string;
}

export const projectsData: Project[] = [
  {
    id: "project-1",
    number: "01",
    title: "Teacher's Day Celebration At JPS School 📍",
    category: "Reels",
    description: "High-energy event recap featuring dynamic student crowd moments, speech highlights, and rhythm sync at JPS School Dudahi.",
    techniques: "Beat-sync cuts, energetic speed ramps, crowd audio enhancement",
    instagramUrl: "https://www.instagram.com/reel/Dc8InDqCYsK/?stkn=ejBpd2Q5N3BpbjJt",
    posterUrl: "/assets/reels/reel-2.jpg",
    year: "2026",
    aspectRatio: "9:16",
    tags: ["#teachersday", "#explorepage✨", "#viral", "#dudahi", "#tamkuhiroad"],
    likes: "4.6K",
    audioTrack: "Shreya Ghoshal, Shaan • Deewangi (Rainbow Mix)",
  },
  {
    id: "project-2",
    number: "02",
    title: "Chandigarh Cafe & Restaurant 📍",
    category: "Reels",
    description: "Commercial reel showcasing the vibrant ambiance, warm lighting, and culinary hospitality at Tamkuhi Road.",
    techniques: "Smooth camera motion, appetizing color contrast, commercial pacing",
    instagramUrl: "https://www.instagram.com/reel/DdsVlN7vvy9/?stkn=MXdsZzJpbGk4MnZ1Yg==",
    posterUrl: "/assets/reels/reel-1.jpg",
    year: "2026",
    aspectRatio: "9:16",
    tags: ["@chandigarh_cafe_restaurant01", "#tamkuhiroad", "#viral", "#explorepage✨", "#dudahi"],
    likes: "3.8K",
    audioTrack: "Trending Commercial Beat · @baniya_visuals",
  },
  {
    id: "project-3",
    number: "03",
    title: "Cafe 1991 Lucknow 📍",
    category: "Cinematic",
    description: "Aesthetic food & beverage presentation with fast hook cuts and trending music synchronization.",
    techniques: "Macro food close-ups, warm grade, trending hook transitions",
    instagramUrl: "https://www.instagram.com/reel/DWJ5zR5AdUG/",
    posterUrl: "/assets/reels/reel-5.jpg",
    year: "2026",
    aspectRatio: "9:16",
    tags: ["@cafe1991official", "#lucknow", "#trending", "#cafeaesthetic"],
    likes: "2.8K",
    audioTrack: "Chill Lo-Fi Beat · @baniya_visuals",
  },
  {
    id: "project-4",
    number: "04",
    title: '"I Found Him When No One Is There"',
    category: "YouTube",
    description: "Spiritual cinematic storytelling with emotional visual build-up, divine transitions, and devotional resonance.",
    techniques: "Slow-motion devotional build, golden flare lighting, emotional audio mix",
    instagramUrl: "https://www.instagram.com/reel/DVXwke9kWoe/",
    posterUrl: "/assets/reels/reel-6.jpg",
    year: "2026",
    aspectRatio: "9:16",
    tags: ["#hanumanji", "#trendingreels", "#cinematic", "#bhakti"],
    likes: "5.2K",
    audioTrack: "Devotional Ambient Strings · @baniya_visuals",
  },
  {
    id: "project-5",
    number: "05",
    title: "Khaas Baradari Heritage Visuals — Lucknow 📍",
    category: "Cinematic",
    description: "Heritage architecture, moody atmospheric lighting, and architectural symmetry cut to beat.",
    techniques: "Symmetrical framing, historic architectural reveal, bass drop sync",
    instagramUrl: "https://www.instagram.com/reel/DcoObeMMGcu/",
    posterUrl: "/assets/reels/reel-4.jpg",
    year: "2025",
    aspectRatio: "9:16",
    tags: ["#khaasbaradari", "#lucknow", "#viral", "#cinematic"],
    likes: "2.1K",
    audioTrack: "Atmospheric Heritage Score · @baniya_visuals",
  },
  {
    id: "project-6",
    number: "06",
    title: "Aesthetic Tamkuhi Road Showcase 📍",
    category: "Shorts",
    description: "Cinematic interior flow, warm amber tones, and subtle speed ramping for social-first promotion.",
    techniques: "Velocity curve pacing, ambient restaurant sounds, warm grading",
    instagramUrl: "https://www.instagram.com/reel/Dc6JzwmqKvD/",
    posterUrl: "/assets/reels/reel-3.jpg",
    year: "2025",
    aspectRatio: "9:16",
    tags: ["#kushinagar", "#cafe", "#explorepage✨", "#aesthetic"],
    likes: "3.4K",
    audioTrack: "Aesthetic Lo-Fi Vibes · @baniya_visuals",
  },
];

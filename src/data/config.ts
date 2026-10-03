export interface StoryHighlight {
  id: string;
  label: string;
  image: string;
  reelUrl: string;
  category: string;
}

export interface SiteConfig {
  name: string;
  brandName: string;
  title: string;
  handle: string;
  phone: string;
  whatsappLink: string;
  email: string;
  availability: string;
  stats: {
    experience: string;
    videosEdited: string;
  };
  closingMantra: string;
  bio: string;
  quote: {
    normal: string;
    italic: string;
    after: string;
  };
  tools: Array<{
    name: string;
    level: string;
    description: string;
  }>;
  strengths: string[];
  pricing: Array<{
    id: string;
    tag: string;
    title: string;
    price: string;
    priceSub: string;
    buttonText: string;
    isFeatured: boolean;
    features: string[];
    whatsappPrefill: string;
  }>;
  nowWidget: {
    status: string;
    project: string;
    date: string;
    location: string;
  };
  socialLinks: {
    instagram: string;
    youtube: string;
    whatsapp: string;
    email: string;
  };
  profilePhoto: string;
  portraitPhoto: string;
  storyHighlights: StoryHighlight[];
}

export const siteConfig: SiteConfig = {
  name: "Govind Maddeshiya",
  brandName: "Baniya Visuals Works",
  title: "Professional Video Editor & Cinematic Content Creator",
  handle: "@baniya_visuals",
  phone: "+91 63931 01990",
  whatsappLink: "https://wa.me/916393101990",
  email: "govindmaddeshiya9@gmail.com",
  availability: "Video Editing • Reels • Shorts • Cinematic Edits • YouTube Content",
  stats: {
    experience: "8+ Years",
    videosEdited: "500+ Videos Edited",
  },
  closingMantra: "Turn your raw footage into content people want to watch.",
  bio: "Creative, detail-focused video editor with 8+ years of editing experience and 500+ videos edited. Experienced in cinematic projects, trending clips, short-form content, social-media reels and YouTube-style videos. Focused on strong pacing, clean transitions, impactful sound design, music synchronization, visual flow and storytelling, with an editing style tailored to the creator, brand or story.",
  quote: {
    normal: "I edit stories, ",
    italic: "not just",
    after: " footage.",
  },
  tools: [
    {
      name: "CapCut (Advanced)",
      level: "Advanced Mastery",
      description: "Fast-paced viral transitions, VFX, dynamic auto and styled captions, beat-synchronization, sound design, and vertical social-media retention formats.",
    },
    {
      name: "Alight Motion (Advanced)",
      level: "Advanced Mastery",
      description: "Custom motion graphics, keyframing, velocity curves/speed ramps, camera pan mechanics, and fluid text animations.",
    },
  ],
  strengths: [
    "Clean editing with obsessive attention to micro-details and frame timing",
    "Trend-aware visual aesthetics adapted to evolving social algorithms",
    "Sharp focus on dynamic pacing, sound design, and musical synchronization",
    "Flexible visual style individually customized to each creator and story",
    "Quality workflow with clear, friendly, and responsive communication",
  ],
  pricing: [
    {
      id: "standard",
      tag: "MOBILE FAST-TRACK",
      title: "Standard Cut",
      price: "₹300",
      priceSub: "/ 30 Sec Base",
      buttonText: "BOOK STANDARD CUT",
      isFeatured: false,
      features: [
        "Ideal for quick turnaround reels and trending audio clips",
        "Clean jump cuts, pace refinement, and basic text overlays",
        "Direct export optimized for Instagram Reels and YouTube Shorts",
      ],
      whatsappPrefill: "Hi Govind, I'd like to book the Standard Cut.",
    },
    {
      id: "advanced",
      tag: "CUSTOM MOTION FX",
      title: "Advanced Motion",
      price: "₹700 - ₹800",
      priceSub: "Per Video",
      buttonText: "BOOK ADVANCED EDIT",
      isFeatured: true,
      features: [
        "Multi-layer sound design and rhythmic beat-synced cuts",
        "Custom keyframe motion, speed ramps, and stylized dynamic captions",
        "Color correction and retention-engineered hooks for high engagement",
      ],
      whatsappPrefill: "Hi Govind, I'd like to book the Advanced Motion edit.",
    },
    {
      id: "cinema",
      tag: "PC WORKSTATION RIG",
      title: "Royal Cinema Grade",
      price: "₹1000 - ₹1200",
      priceSub: "Per Video",
      buttonText: "BOOK CINEMA GRADE",
      isFeatured: false,
      features: [
        "Full cinematic color grading, custom LUT integration, and film texture",
        "High-fidelity sound design, ambient foley, and cinematic score sync",
        "Custom title typography, storytelling arc polish, and revision priority",
      ],
      whatsappPrefill: "Hi Govind, I'd like to book the Royal Cinema Grade edit.",
    },
  ],
  nowWidget: {
    status: "CURRENTLY EDITING",
    project: "School Event & Cafe Commercial Campaign",
    date: "October 2026",
    location: "India",
  },
  socialLinks: {
    instagram: "https://www.instagram.com/baniya_visuals/",
    youtube: "https://youtube.com/@baniyavisuals",
    whatsapp: "https://wa.me/916393101990",
    email: "mailto:govindmaddeshiya9@gmail.com",
  },
  profilePhoto: "/assets/images/govind_insta_profile.jpg",
  portraitPhoto: "/assets/images/govind-maddeshiya.jpg",
  storyHighlights: [
    {
      id: "events",
      label: "Events",
      image: "/assets/reels/reel-2.jpg",
      reelUrl: "https://www.instagram.com/reel/Dc8InDqCYsK/?stkn=ejBpd2Q5N3BpbjJt",
      category: "Reels",
    },
    {
      id: "cafes",
      label: "Cafes",
      image: "/assets/reels/reel-1.jpg",
      reelUrl: "https://www.instagram.com/reel/DdsVlN7vvy9/?stkn=MXdsZzJpbGk4MnZ1Yg==",
      category: "Reels",
    },
    {
      id: "cinematic",
      label: "Cinematic",
      image: "/assets/reels/reel-6.jpg",
      reelUrl: "https://www.instagram.com/reel/DVXwke9kWoe/",
      category: "Cinematic",
    },
    {
      id: "heritage",
      label: "Heritage",
      image: "/assets/reels/reel-4.jpg",
      reelUrl: "https://www.instagram.com/reel/DcoObeMMGcu/",
      category: "Shorts",
    },
    {
      id: "trending",
      label: "Trending",
      image: "/assets/reels/reel-5.jpg",
      reelUrl: "https://www.instagram.com/reel/DWJ5zR5AdUG/",
      category: "Cinematic",
    },
    {
      id: "aesthetic",
      label: "Aesthetic",
      image: "/assets/reels/reel-3.jpg",
      reelUrl: "https://www.instagram.com/reel/Dc6JzwmqKvD/",
      category: "Shorts",
    },
  ],
};

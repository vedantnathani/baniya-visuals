export interface SiteConfig {
  name: string;
  brandName: string;
  title: string;
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
    instagram: string; // PLACEHOLDER: replace with real IG handle
    youtube: string;   // PLACEHOLDER: replace with real YouTube channel
    whatsapp: string;
    email: string;
  };
  portraitPhoto: string; // PLACEHOLDER: replace with creator portrait
}

export const siteConfig: SiteConfig = {
  name: "Govind Maddeshiya",
  brandName: "Baniya Visuals Works",
  title: "Professional Video Editor & Cinematic Content Creator",
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
      level: "Mastery Level",
      description: "Fast-paced transitions, VFX, automated and stylized typography captions, beat-synchronization, sound design, and retention-focused vertical social-media formats.",
    },
    {
      name: "Alight Motion (Advanced)",
      level: "Mastery Level",
      description: "Custom motion graphics, intricate keyframing, complex velocity curves/speed ramps, camera pan mechanics, and fluid text animations.",
    },
  ],
  strengths: [
    "Clean editing with obsessive attention to micro-details and frame timing",
    "Trend-aware visual aesthetics adapted to evolving social algorithms",
    "Sharp focus on dynamic pacing, sound design, and musical synchronization",
    "Flexible visual style individually customized to each creator and story",
    "High-reliability delivery workflow with clear, responsive communication",
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
    status: "CURRENTLY IN PRODUCTION",
    project: "Cinematic Travel Montage & Short-Form Narrative",
    date: "October 2026",
    location: "India",
  },
  socialLinks: {
    // PLACEHOLDER: Replace handles with actual creator social links
    instagram: "https://instagram.com/baniyavisuals",
    youtube: "https://youtube.com/@baniyavisuals",
    whatsapp: "https://wa.me/916393101990",
    email: "mailto:govindmaddeshiya9@gmail.com",
  },
  // PLACEHOLDER: Creator portrait photograph
  portraitPhoto: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80",
};

import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Cinzel, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/data/config";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  variable: "--font-cinzel",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${siteConfig.brandName} | ${siteConfig.title}`,
  description: `${siteConfig.bio} ${siteConfig.closingMantra}`,
  metadataBase: new URL("https://baniyavisuals.com"),
  keywords: [
    "Govind Maddeshiya",
    "Baniya Visuals Works",
    "Video Editor",
    "Cinematic Video Editor",
    "Instagram Reels Editor",
    "YouTube Shorts Editor",
    "CapCut Editor",
    "Alight Motion Editor",
    "Video Editor India",
  ],
  authors: [{ name: siteConfig.name, url: "https://baniyavisuals.com" }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://baniyavisuals.com",
    title: `${siteConfig.brandName} · ${siteConfig.name}`,
    description: siteConfig.closingMantra,
    siteName: siteConfig.brandName,
    images: [
      {
        url: siteConfig.portraitPhoto,
        width: 1200,
        height: 630,
        alt: `${siteConfig.brandName} - Video Editor Portfolio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.brandName} | ${siteConfig.name}`,
    description: siteConfig.closingMantra,
    images: [siteConfig.portraitPhoto],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    alternateName: siteConfig.brandName,
    jobTitle: siteConfig.title,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    url: "https://baniyavisuals.com",
    image: siteConfig.portraitPhoto,
    description: siteConfig.bio,
    sameAs: [
      siteConfig.socialLinks.instagram,
      siteConfig.socialLinks.youtube,
      siteConfig.whatsappLink,
    ],
    knowsAbout: [
      "Cinematic Video Editing",
      "Instagram Reels",
      "YouTube Shorts",
      "CapCut Video Production",
      "Alight Motion Keyframing",
      "Sound Design and Synchronization",
    ],
  };

  return (
    <html lang="en" data-theme="light-editorial">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${jakarta.variable} ${cormorant.variable} ${cinzel.variable} ${mono.variable} font-sans antialiased selection:bg-accent-gold selection:text-black`}
      >
        <div className="grain-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}

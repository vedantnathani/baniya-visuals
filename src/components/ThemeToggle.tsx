"use client";

import { useEffect, useState } from "react";
import { Sparkles, Moon, Sun } from "lucide-react";

export type ThemeMode = "dark-cinema" | "light-editorial" | "bold-color";

const themes: { id: ThemeMode; label: string; icon: typeof Moon }[] = [
  { id: "dark-cinema", label: "Cinema", icon: Moon },
  { id: "light-editorial", label: "Editorial", icon: Sun },
  { id: "bold-color", label: "Bold", icon: Sparkles },
];

export default function ThemeToggle() {
  const [currentTheme, setCurrentTheme] = useState<ThemeMode>("dark-cinema");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("baniya-theme") as ThemeMode | null;
    if (saved && ["dark-cinema", "light-editorial", "bold-color"].includes(saved)) {
      setTheme(saved);
    } else {
      setTheme("dark-cinema");
    }
  }, []);

  const setTheme = (theme: ThemeMode) => {
    setCurrentTheme(theme);
    if (typeof window !== "undefined") {
      localStorage.setItem("baniya-theme", theme);
      const root = document.documentElement;
      if (theme === "dark-cinema") {
        root.removeAttribute("data-theme");
        root.classList.add("dark");
      } else {
        root.setAttribute("data-theme", theme);
        if (theme === "light-editorial") {
          root.classList.remove("dark");
        } else {
          root.classList.add("dark");
        }
      }
    }
  };

  const cycleTheme = () => {
    const currentIndex = themes.findIndex((t) => t.id === currentTheme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex].id);
  };

  if (!mounted) {
    return (
      <div className="w-8 h-8 rounded-full border border-border-subtle bg-bg-card flex items-center justify-center opacity-60">
        <Moon className="w-3.5 h-3.5 text-accent-gold" />
      </div>
    );
  }

  const activeThemeObj = themes.find((t) => t.id === currentTheme) || themes[0];
  const IconComponent = activeThemeObj.icon;

  return (
    <div className="relative group inline-flex items-center">
      {/* Quick click toggle button */}
      <button
        onClick={cycleTheme}
        aria-label={`Current visual theme: ${activeThemeObj.label}. Click to cycle themes.`}
        className="flex items-center gap-2 px-2.5 py-1.5 rounded-full border border-border-subtle bg-bg-card/80 backdrop-blur-md hover:border-accent-gold transition-all duration-300 active:scale-95 text-fg-primary text-xs font-mono"
      >
        <IconComponent className="w-3.5 h-3.5 text-accent-gold animate-pulse-slow" />
        <span className="hidden sm:inline uppercase text-[10px] tracking-wider text-fg-muted group-hover:text-fg-primary transition-colors">
          {activeThemeObj.label}
        </span>
      </button>

      {/* Expanded flyout menu on hover for direct selection */}
      <div className="absolute right-0 top-full mt-2 hidden group-hover:flex flex-col gap-1 p-1.5 rounded-xl border border-border-subtle bg-bg-card/95 backdrop-blur-xl shadow-2xl z-50 min-w-[140px]">
        {themes.map((t) => {
          const ItemIcon = t.icon;
          const isActive = t.id === currentTheme;
          return (
            <button
              key={t.id}
              onClick={() => setTheme(t.id)}
              className={`flex items-center gap-2.5 px-3 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider text-left transition-all ${
                isActive
                  ? "bg-accent-gold/15 text-accent-gold font-medium"
                  : "text-fg-muted hover:text-fg-primary hover:bg-bg-card-subtle"
              }`}
            >
              <ItemIcon className="w-3.5 h-3.5" />
              <span>{t.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

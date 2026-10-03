"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [isPointer, setIsPointer] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Disable on touch devices
    if (typeof window !== "undefined") {
      const isTouch = window.matchMedia("(pointer: coarse)").matches;
      setIsTouchDevice(isTouch);
      if (isTouch) return;

      const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReduced) return;

      const handleMouseMove = (e: MouseEvent) => {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
        if (!isVisible) setIsVisible(true);

        const target = e.target as HTMLElement | null;
        if (!target) return;

        // Check for custom cursor attributes
        const playTarget = target.closest('[data-cursor="play"]');
        if (playTarget) {
          setCursorText("PLAY");
          setIsPointer(false);
          return;
        }

        const clickable = target.closest("button, a, input, textarea, [role='button']");
        if (clickable) {
          setCursorText("");
          setIsPointer(true);
        } else {
          setCursorText("");
          setIsPointer(false);
        }
      };

      const handleMouseLeave = () => {
        setIsVisible(false);
      };

      window.addEventListener("mousemove", handleMouseMove, { passive: true });
      document.body.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        document.body.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, [isVisible, mouseX, mouseY]);

  if (isTouchDevice || !isVisible) return null;

  const isPlayMode = cursorText === "PLAY";

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center font-mono font-semibold select-none"
      style={{
        x: cursorX,
        y: cursorY,
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{
        width: isPlayMode ? 64 : isPointer ? 36 : 10,
        height: isPlayMode ? 64 : isPointer ? 36 : 10,
        backgroundColor: isPlayMode
          ? "var(--accent-gold)"
          : isPointer
          ? "rgba(212, 175, 55, 0.2)"
          : "var(--accent-gold)",
        border: isPointer && !isPlayMode ? "1px solid var(--accent-gold)" : "none",
        color: "#0A0A0A",
      }}
      transition={{ type: "spring", damping: 20, stiffness: 300 }}
    >
      {isPlayMode && (
        <motion.span
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          className="text-[11px] tracking-widest font-bold text-black"
        >
          PLAY
        </motion.span>
      )}
    </motion.div>
  );
}

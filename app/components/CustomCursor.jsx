"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [cursorText, setCursorText] = useState("");

  // Mouse position with spring physics for smooth follow
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Apply spring for lag/ease effect
  const springConfig = { damping: 25, stiffness: 200 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Hide native cursor
    document.body.style.cursor = "none";

    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    // Handle hover states for interactive elements
    const handleMouseEnter = (e) => {
      if (!e.target) return;
      const target = e.target.closest ? e.target.closest("[data-cursor-hover]") : null;
      if (target) {
        setIsHovering(true);
        const text = target.getAttribute("data-cursor-text");
        if (text) setCursorText(text);
      }
    };

    const handleMouseLeave = (e) => {
      if (!e.target) return;
      const target = e.target.closest ? e.target.closest("[data-cursor-hover]") : null;
      if (target) {
        setIsHovering(false);
        setCursorText("");
      }
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseenter", handleMouseEnter, true);
    document.addEventListener("mouseleave", handleMouseLeave, true);

    return () => {
      document.body.style.cursor = "auto";
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseenter", handleMouseEnter, true);
      document.removeEventListener("mouseleave", handleMouseLeave, true);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        translateX: "-50%",
        translateY: "-50%",
      }}
    >
      <motion.div
        animate={{
          scale: isHovering ? 3 : 1,
          backgroundColor: isHovering ? "rgba(52, 211, 153, 0.8)" : "rgba(255, 255, 255, 0.9)",
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="w-3 h-3 rounded-full flex items-center justify-center"
      >
        {cursorText && (
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-[8px] font-bold text-white whitespace-nowrap"
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>
    </motion.div>
  );
}

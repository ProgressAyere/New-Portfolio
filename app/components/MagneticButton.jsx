"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function MagneticButton({ children, href, className = "" }) {
  const ref = useRef(null);
  
  // Track mouse position relative to button
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // Apply spring physics for smooth magnetic pull
  const springConfig = { damping: 15, stiffness: 150 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Calculate distance from center, scaled down for subtle effect
    const distanceX = (e.clientX - centerX) * 0.3;
    const distanceY = (e.clientY - centerY) * 0.3;
    
    x.set(distanceX);
    y.set(distanceY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: xSpring, y: ySpring }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.a>
  );
}

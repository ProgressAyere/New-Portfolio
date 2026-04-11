"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { Play } from "lucide-react";

export default function ProjectCard({ project, index, onExpand, isExpanded }) {
  const cardRef = useRef(null);
  const videoRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  // Mouse position tracking for 3D tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring physics for smooth tilt
  const springConfig = { damping: 20, stiffness: 150 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), springConfig);

  // Handle video playback on hover
  useEffect(() => {
    if (isHovered && videoRef.current) {
      videoRef.current.play();
    } else if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [isHovered]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Normalize mouse position to -0.5 to 0.5 range
    const x = (e.clientX - centerX) / (rect.width / 2);
    const y = (e.clientY - centerY) / (rect.height / 2);

    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    // Delay video appearance for smooth crossfade
    setTimeout(() => setShowVideo(true), 100);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setShowVideo(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  const handleClick = () => {
    if (!isExpanded) {
      onExpand(project);
    }
  };

  return (
    <motion.div
      ref={cardRef}
      layoutId={`project-${project.title}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      style={{
        perspective: 1000,
        transformStyle: "preserve-3d",
      }}
      className="cursor-pointer group"
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative bg-slate-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-emerald-400/30 transition-colors will-change-transform"
      >
        {/* Media container with crossfade */}
        <div className="relative aspect-video bg-slate-950 overflow-hidden">
          <AnimatePresence mode="wait">
            {!showVideo ? (
              // Thumbnail image
              <motion.img
                key="thumbnail"
                src={project.thumbnailSrc}
                alt={project.title}
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full object-cover"
              />
            ) : (
              // Video on hover
              <motion.video
                key="video"
                ref={videoRef}
                src={project.videoSrc}
                muted
                loop
                playsInline
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full object-cover"
              />
            )}
          </AnimatePresence>

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />

          {/* Pulsing preview badge */}
          <motion.div
            animate={
              isHovered
                ? { scale: 1, opacity: 1 }
                : {
                    scale: [1, 1.1, 1],
                    opacity: [0.8, 1, 0.8],
                  }
            }
            transition={
              isHovered
                ? { duration: 0.2 }
                : {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }
            }
            className="absolute top-4 right-4 px-3 py-1.5 bg-emerald-500/90 backdrop-blur-sm rounded-full flex items-center gap-1.5 text-white text-sm font-medium"
          >
            <Play className="w-3 h-3 fill-white" />
            <span>Preview</span>
          </motion.div>
        </div>

        {/* Card content */}
        <div className="p-6 space-y-2">
          <h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-slate-400 leading-relaxed">{project.outcome}</p>
        </div>

        {/* Hover glow effect */}
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
          style={{
            boxShadow: "0 0 0 1px rgba(52, 211, 153, 0.3), 0 0 40px rgba(52, 211, 153, 0.15)",
          }}
        />
      </motion.div>
    </motion.div>
  );
}

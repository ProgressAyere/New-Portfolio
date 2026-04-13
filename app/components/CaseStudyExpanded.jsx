"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { X, Volume2, VolumeX, ExternalLink } from "lucide-react";
import MagneticButton from "./MagneticButton";

export default function CaseStudyExpanded({ project, onClose }) {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  // Autoplay video when expanded
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <motion.div
      layoutId={`project-${project.title}`}
      className="col-span-full bg-slate-900/95 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Close button */}
      <div className="sticky top-0 z-20 flex justify-end p-4 bg-gradient-to-b from-slate-900 to-transparent">
        <motion.button
          onClick={onClose}
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
        >
          <X className="w-5 h-5 text-white" />
        </motion.button>
      </div>

      {/* Video player with sound toggle */}
      <div className="relative aspect-video bg-slate-950">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          preload="metadata"
          className="w-full h-full object-cover"
        >
          <source src={project.videoSrc} type="video/mp4" />
        </video>

        {/* Sound toggle button */}
        <motion.button
          onClick={toggleMute}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute bottom-4 right-4 p-3 rounded-full bg-black/50 backdrop-blur-sm hover:bg-black/70 transition-colors"
        >
          {isMuted ? (
            <VolumeX className="w-5 h-5 text-white" />
          ) : (
            <Volume2 className="w-5 h-5 text-white" />
          )}
        </motion.button>
      </div>

      {/* Case study content */}
      <div className="p-8 md:p-12 space-y-12">
        {/* Header */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {project.title}
          </h2>
          <p className="text-xl text-emerald-400">{project.outcome}</p>
        </div>

        {/* Problem */}
        <div>
          <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">
            Problem
          </h3>
          <p className="text-lg text-slate-300 leading-relaxed">
            {project.problem}
          </p>
        </div>

        {/* Solution */}
        <div>
          <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">
            Solution
          </h3>
          <p className="text-lg text-slate-300 leading-relaxed">
            {project.solution}
          </p>
        </div>

        {/* Tech Stack */}
        <div>
          <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
            Tech Stack
          </h3>
          <div className="flex flex-wrap gap-3">
            {project.techStack.map((tech, i) => (
              <div
                key={i}
                className="px-4 py-2.5 bg-slate-800/50 border border-white/10 rounded-lg text-sm text-slate-200 flex items-center gap-2.5 hover:bg-slate-800 transition-colors"
              >
                {tech.icon && (
                  <span className="text-lg" style={{ color: tech.color }}>
                    {tech.icon}
                  </span>
                )}
                <span className="font-medium">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Results */}
        <div>
          <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
            Results
          </h3>
          <ul className="space-y-3">
            {project.results.map((result, i) => (
              <li key={i} className="flex items-start gap-3 text-slate-300">
                <span className="text-emerald-400 mt-1">✓</span>
                <span className="text-lg">{result}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Button with magnetic effect */}
        <div className="pt-6">
          <MagneticButton
            href={project.liveSiteUrl}
            className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-semibold rounded-xl transition-all shadow-lg shadow-emerald-500/25 flex items-center gap-2 w-fit"
          >
            <span>View Live Site</span>
            <ExternalLink className="w-5 h-5" />
          </MagneticButton>
        </div>
      </div>
    </motion.div>
  );
}

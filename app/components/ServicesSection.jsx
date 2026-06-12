"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import {
  SiReact,
  SiTailwindcss,
  SiFramer,
  SiNextdotjs,
  SiEthereum,
  SiSolidity,
} from "react-icons/si";

// Animation constants for easy tuning
const ANIMATION_CONFIG = {
  staggerDelay: 0.15,
  cardSpring: { type: "spring", stiffness: 300, damping: 30 },
  contentStagger: 0.08,
  badgeStagger: 0.05,
  hoverScale: 1.03,
  expandDuration: 0.4,
};

export default function ServicesSection() {
  const [expandedCard, setExpandedCard] = useState(null);
  const [isMounted, setIsMounted] = useState(false);
  const videoRefs = useRef({});

  const services = [
    {
      id: "interactive",
      title: "Interactive Web Experiences",
      description: "Animations and interactions that make users stop scrolling",
      videoSrc: "/pcc-video.mp4", 
      scope: [
        "Custom scroll-triggered animations",
        "Micro-interactions and hover states",
        "Performance-optimized motion design",
      ],
      deliverables: [
        "Production-ready React components",
        "GSAP/Framer Motion animation library",
        "Performance audit report",
        "Documentation and handoff guide",
      ],
      techStack: [
        { name: "React", icon: SiReact, color: "#61DAFB" },
        { name: "GSAP", icon: SiFramer, color: "#88CE02" },
        { name: "Framer Motion", icon: SiFramer, color: "#0055FF" },
        { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
      ],
    },
    {
      id: "landing",
      title: "High-Converting Landing Pages",
      description: "Pages that load fast, look premium, and drive conversions",
      videoSrc: "/bcc-landscape-video-mockup.mp4", // Replace with landing page demo
      scope: [
        "Mobile-first responsive design",
        "Conversion-optimized layouts",
        "A/B testing ready structure",
      ],
      deliverables: [
        "Next.js production build",
        "Lighthouse 95+ performance score",
        "SEO optimization included",
        "Analytics integration ready",
      ],
      techStack: [
        { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
        { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
        { name: "Framer Motion", icon: SiFramer, color: "#0055FF" },
        { name: "React", icon: SiReact, color: "#61DAFB" },
      ],
    },
    {
      id: "web3",
      title: "Web3 Frontend Builds",
      description: "Onchain interfaces that feel as smooth as Web2",
      videoSrc: "/ghonsi-landscape video.mp4", // Replace with Web3 dashboard demo
      scope: [
        "Wallet connection flows",
        "Smart contract interaction UI",
        "Real-time blockchain data display",
      ],
      deliverables: [
        "React + TypeScript codebase",
        "wagmi/RainbowKit integration",
        "Multi-chain support ready",
        "Gas optimization patterns",
      ],
      techStack: [
        { name: "React", icon: SiReact, color: "#61DAFB" },
        { name: "Ethereum", icon: SiEthereum, color: "#627EEA" },
        { name: "Solidity", icon: SiSolidity, color: "#363636" },
        { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
      ],
    },
  ];

  const handleCardClick = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  const handleVideoHover = (id, isHovering) => {
    const video = videoRefs.current[id];
    if (!video) return;

    if (isHovering) {
      video.play();
    } else {
      video.pause();
    }
  };

  // Container animation for scroll-triggered stagger
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: ANIMATION_CONFIG.staggerDelay,
        delayChildren: 0.2,
      },
    },
  };

  // Card entrance animation
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: ANIMATION_CONFIG.cardSpring,
    },
  };

  // Expanded content stagger
  const contentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: ANIMATION_CONFIG.contentStagger,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  // Tech badge spring animation
  const badgeVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
        delay: i * ANIMATION_CONFIG.badgeStagger,
      },
    }),
  };

  // Fix hydration mismatch
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <style jsx global>{`
        @keyframes rotateBorder {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        .conic-border {
          position: relative;
        }

        .conic-border::before {
          content: "";
          position: absolute;
          inset: -2px;
          border-radius: 1rem;
          padding: 2px;
          background: conic-gradient(
            from 0deg,
            #8b5cf6,
            #06b6d4,
            #8b5cf6
          );
          -webkit-mask: linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.3s ease;
          animation: rotateBorder 3s linear infinite;
        }

        .conic-border:hover::before {
          opacity: 1;
        }
      `}</style>

      <section
        id="services"
        className="relative min-h-screen py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-black via-slate-950 to-slate-900"
      >
        {/* Assumes Lenis is initialized globally for smooth scroll */}
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-gradient-to-r from-violet-400/10 via-cyan-400/10 to-violet-400/10 border border-violet-400/20 rounded-full text-violet-400"
            >
              // Services
            </motion.span>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Productised Services
            </h2>
            <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto">
              I work with clear agreements. So your project stays on track.
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {services.map((service) => {
              const isExpanded = expandedCard === service.id;

              return (
                <motion.div
                  key={service.id}
                  layout
                  variants={cardVariants}
                  onClick={() => handleCardClick(service.id)}
                  className="conic-border group cursor-pointer"
                >
                  <motion.div
                    layout
                    className="relative bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden"
                  >
                    {/* Device Frame with Video */}
                    <motion.div
                      layout
                      onMouseEnter={() => handleVideoHover(service.id, true)}
                      onMouseLeave={() => handleVideoHover(service.id, false)}
                      whileHover={{ scale: ANIMATION_CONFIG.hoverScale }}
                      transition={ANIMATION_CONFIG.cardSpring}
                      className="relative p-6"
                    >
                      {/* Browser chrome mockup */}
                      <div className="bg-slate-800 rounded-lg overflow-hidden border border-slate-700 shadow-2xl">
                        <div className="bg-slate-900 px-3 py-2 flex items-center gap-1.5 border-b border-slate-700">
                          <div className="w-2 h-2 rounded-full bg-red-500" />
                          <div className="w-2 h-2 rounded-full bg-yellow-500" />
                          <div className="w-2 h-2 rounded-full bg-green-500" />
                        </div>
                        <div className="relative aspect-video bg-slate-950">
                          <video
                            ref={(el) => (videoRefs.current[service.id] = el)}
                            src={service.videoSrc}
                            muted
                            loop
                            playsInline
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </motion.div>

                    {/* Card Content */}
                    <motion.div layout className="px-6 pb-6">
                      {/* Title and Description */}
                      <motion.div layout className="mb-4">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="text-2xl font-bold text-white">
                            {service.title}
                          </h3>
                          <motion.div
                            animate={{ rotate: isExpanded ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <ChevronDown className="w-6 h-6 text-violet-400" />
                          </motion.div>
                        </div>
                        <p className="text-slate-400">{service.description}</p>
                      </motion.div>

                      {/* Expanded Content */}
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            variants={contentVariants}
                            className="space-y-6 pt-4 border-t border-white/10"
                          >
                            {/* Scope */}
                            <motion.div variants={itemVariants}>
                              <h4 className="text-sm font-semibold text-violet-400 uppercase tracking-wider mb-3">
                                Scope
                              </h4>
                              <ul className="space-y-2">
                                {service.scope.map((item, i) => (
                                  <li
                                    key={i}
                                    className="flex items-start gap-2 text-slate-300"
                                  >
                                    <span className="text-violet-400 mt-1">•</span>
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </motion.div>

                            {/* Deliverables */}
                            <motion.div variants={itemVariants}>
                              <h4 className="text-sm font-semibold text-violet-400 uppercase tracking-wider mb-3">
                                Deliverables
                              </h4>
                              <ul className="space-y-2">
                                {service.deliverables.map((item, i) => (
                                  <li
                                    key={i}
                                    className="flex items-start gap-2 text-slate-300"
                                  >
                                    <span className="text-cyan-400">✓</span>
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </motion.div>

                            {/* Tech Stack */}
                            <motion.div variants={itemVariants}>
                              <h4 className="text-sm font-semibold text-violet-400 uppercase tracking-wider mb-3">
                                Tech Stack
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {service.techStack.map((tech, i) => (
                                  <motion.span
                                    key={i}
                                    custom={i}
                                    variants={badgeVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="hidden"
                                    className="px-3 py-1.5 bg-slate-800/50 border border-white/10 rounded-lg text-sm text-slate-200 flex items-center gap-2"
                                  >
                                    <tech.icon
                                      className="w-4 h-4"
                                      style={{ color: tech.color }}
                                    />
                                    <span>{tech.name}</span>
                                  </motion.span>
                                ))}
                              </div>
                            </motion.div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>

                    {/* Hover glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </>
  );
}

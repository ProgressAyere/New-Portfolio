"use client";

import { motion } from "framer-motion";
import { Sparkles, Wallet, Layers } from "lucide-react";
import { useState, useEffect } from "react";

export default function WhatIDo() {
  const [hoveredCard, setHoveredCard] = useState(null);

  // Container orchestrates staggered card entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.1,
      },
    },
  };

  // Individual card entrance animation
  const cardItemVariants = {
    hidden: {
      y: 40,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  // Icon micro-animation on hover
  const iconVariants = {
    rest: { scale: 1, rotate: 0 },
    hover: {
      scale: 1.1,
      rotate: 15,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  // Typewriter component
  const TypewriterText = ({ text, isHovered }) => {
    const [displayedText, setDisplayedText] = useState("");
    const [isTypingComplete, setIsTypingComplete] = useState(false);

    useEffect(() => {
      if (isHovered) {
        setDisplayedText("");
        setIsTypingComplete(false);
        let currentIndex = 0;
        
        const typingInterval = setInterval(() => {
          if (currentIndex <= text.length) {
            setDisplayedText(text.slice(0, currentIndex));
            currentIndex++;
          } else {
            clearInterval(typingInterval);
            setIsTypingComplete(true);
          }
        }, 50);

        return () => clearInterval(typingInterval);
      } else {
        setDisplayedText("");
        setIsTypingComplete(false);
      }
    }, [isHovered, text]);

    if (!isHovered) return <div className="min-h-[4.5rem]"></div>;

    return (
      <p className="text-slate-400 leading-relaxed min-h-[4.5rem]">
        {displayedText}
        {!isTypingComplete && (
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.5, repeat: Infinity }}
            className="inline-block w-0.5 h-4 bg-emerald-400 ml-1"
          />
        )}
      </p>
    );
  };

  const cards = [
    {
      icon: Sparkles,
      title: "Interactive Experiences",
      description:
        "I help modern startups build interactive web experiences that convert visitors into believers.",
      media: {
        type: "video",
        src: "/bcc-nav-video1-mockup.mp4",
      },
      gradient: "from-violet-500/20 to-purple-500/20",
      link: "https://bcc-yct.vercel.app",
    },
    {
      icon: Wallet,
      title: "Web3 Builds",
      description:
        "I help Web3 founders build onchain interfaces that make complex protocols feel effortless.",
      media: {
        type: "image",
        src: "/ghonsi-home-mockup.png",
      },
      gradient: "from-emerald-500/20 to-teal-500/20",
      link: "https://ghonsiproof.com",
    },
    {
      icon: Layers,
      title: "Motion Design Systems",
      description:
        "I help product teams build motion design systems that make every interaction feel intentional.",
      media: {
        type: "video",
        src: "/bcc-nav-video2-mockup.mp4",
      },
      gradient: "from-blue-500/20 to-cyan-500/20",
      link: "https://bcc-yct.vercel.app/community",
    },
  ];

  return (
    <section
      id="what-i-do"
      className="relative min-h-screen py-24 md:py-32 px-6 md:px-12 lg:px-20 overflow-hidden bg-black"
    >
      {/* Noise texture overlay for premium feel */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          {/* Label tag */}
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-gradient-to-r from-emerald-400/10 via-cyan-400/10 to-teal-400/10 border border-emerald-400/20 rounded-full text-emerald-400"
          >
            // What I Do
          </motion.span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Three Ways I Add Value
          </h2>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto">
            Specialized expertise across interactive design, Web3 interfaces, and motion systems
          </p>
        </motion.div>

        {/* Cards Grid with staggered animation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              variants={cardItemVariants}
              initial="rest"
              whileHover="hover"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group relative"
            >
              {/* Glassmorphism card */}
              <div className="relative h-full bg-white/[0.04] backdrop-blur-xl rounded-2xl border border-white/[0.08] p-6 md:p-8 overflow-hidden transition-all duration-500">
                {/* Animated glow border on hover */}
                <motion.div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl`}
                />
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    boxShadow: "0 0 0 1px rgba(139,92,246,0.4), 0 0 24px rgba(139,92,246,0.2)",
                  }}
                />

                {/* Device frame media preview */}
                <div className="relative mb-6 rounded-xl overflow-hidden bg-slate-950/50 border border-white/5 aspect-video">
                  {card.media.type === "video" ? (
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                    >
                      <source src={card.media.src} type="video/mp4" />
                    </video>
                  ) : (
                    <img
                      src={card.media.src}
                      alt={card.title}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                    />
                  )}
                  {/* Gradient overlay for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                </div>

                {/* Icon with micro-animation */}
                <motion.div
                  variants={iconVariants}
                  className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-xl bg-gradient-to-br from-violet-500/20 to-purple-500/20 border border-violet-500/30"
                >
                  <card.icon className="w-6 h-6 text-violet-400" />
                </motion.div>

                {/* Positioning copy */}
                <h3 className="text-2xl font-bold text-white mb-3">{card.title}</h3>
                <TypewriterText 
                  text={card.description} 
                  isHovered={hoveredCard === index}
                />

                {/* Hover indicator */}
                <motion.a
                  href={card.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 flex items-center gap-2 text-sm font-medium text-violet-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ x: -10 }}
                  whileHover={{ x: 0 }}
                >
                  <span>Explore</span>
                  <motion.svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </motion.svg>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

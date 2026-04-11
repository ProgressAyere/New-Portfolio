"use client";

import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap, ScrollTrigger } from "../lib/gsap";

export default function WhyWorkWithMe() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const checkmarksRef = useRef([]);

  // Value propositions with video paths
  const valueProps = [
    {
      title: "Fast Delivery",
      description: "Ship production-ready code in days, not weeks",
      videoSrc: "/bcc-nav-video1-mockup.mp4",
    },
    {
      title: "Clean Maintainable Code",
      description: "Code that your team can actually understand and extend",
      videoSrc: "/bcc-nav-video2-mockup.mp4",
    },
    {
      title: "Pixel-Perfect Execution",
      description: "Every interaction feels intentional, every detail matters",
      videoSrc: "/ghonsi-landscape video.mp4",
    },
  ];

  // What you get deliverables
  const deliverables = [
    "A site that loads fast and converts",
    "Code you can actually maintain",
    "Zero revision chaos",
    "Mobile-first responsive design",
    "Performance optimization baked in",
    "Clean documentation included",
  ];

  // Rotate through value props every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % valueProps.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [valueProps.length]);

  // GSAP ScrollTrigger for checkmark animations
  useEffect(() => {
    checkmarksRef.current.forEach((checkmark, index) => {
      if (!checkmark) return;

      const path = checkmark.querySelector("path");
      if (!path) return;

      // Get path length for stroke animation
      const pathLength = path.getTotalLength();

      // Set initial state
      gsap.set(path, {
        strokeDasharray: pathLength,
        strokeDashoffset: pathLength,
      });

      // Animate on scroll with stagger
      gsap.to(path, {
        strokeDashoffset: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: checkmark,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        delay: index * 0.1, // Stagger effect
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // Animation variants for value prop transitions
  const contentVariants = {
    enter: {
      opacity: 0,
      x: 50,
      scale: 0.95,
    },
    center: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
    exit: {
      opacity: 0,
      x: -50,
      scale: 0.95,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const videoVariants = {
    enter: {
      opacity: 0,
      scale: 0.9,
      rotateY: -15,
    },
    center: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      rotateY: 15,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section id="why-work-with-me" className="relative min-h-screen py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
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
            className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-gradient-to-r from-emerald-400/10 via-cyan-400/10 to-teal-400/10 border border-emerald-400/20 rounded-full text-emerald-400"
          >
            // Why Work With Me
          </motion.span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            You Get More Than Code
          </h2>
        </motion.div>

        {/* Rotating Value Propositions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-32">
          {/* Text Content */}
          <div className="relative h-64 flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                variants={contentVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-0 flex flex-col justify-center"
              >
                <h3 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
                  {valueProps[currentIndex].title}
                </h3>
                <p className="text-xl md:text-2xl text-slate-400">
                  {valueProps[currentIndex].description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Video Device Frame */}
          <div className="relative" style={{ perspective: "1000px" }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                variants={videoVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="relative"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Browser-style device frame */}
                <div className="bg-slate-800 rounded-xl shadow-2xl overflow-hidden border border-slate-700">
                  {/* Browser chrome */}
                  <div className="bg-slate-900 px-4 py-3 flex items-center gap-2 border-b border-slate-700">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                  </div>

                  {/* Video content */}
                  <div className="relative aspect-video bg-slate-950">
                    <video
                      key={valueProps[currentIndex].videoSrc}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover"
                    >
                      <source src={valueProps[currentIndex].videoSrc} type="video/mp4" />
                    </video>
                  </div>
                </div>

                {/* Glow effect */}
                <div className="absolute inset-0 -z-10 blur-3xl opacity-30 bg-gradient-to-r from-emerald-500 to-cyan-500" />
              </motion.div>
            </AnimatePresence>

            {/* Progress indicators */}
            <div className="flex justify-center gap-2 mt-8">
              {valueProps.map((_, index) => (
                <motion.div
                  key={index}
                  className="h-1 rounded-full bg-slate-700 overflow-hidden"
                  style={{ width: "60px" }}
                >
                  <motion.div
                    className="h-full bg-emerald-400"
                    initial={{ width: "0%" }}
                    animate={{
                      width: currentIndex === index ? "100%" : "0%",
                    }}
                    transition={{
                      duration: 3,
                      ease: "linear",
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* What You Get Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            What You Get
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {deliverables.map((item, index) => (
              <motion.div
                key={index}
                ref={(el) => (checkmarksRef.current[index] = el)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors"
              >
                {/* Animated SVG Checkmark */}
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="flex-shrink-0 mt-1"
                >
                  <path
                    d="M5 13l4 4L19 7"
                    stroke="#34D399"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <p className="text-lg text-slate-300 font-medium">{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Button with Pulsing Glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <motion.a
            href="#contact"
            className="relative inline-block group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Pulsing glow effect */}
            <motion.div
              className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 blur-xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Button */}
            <div className="relative px-12 py-5 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-xl text-white font-bold text-lg shadow-2xl overflow-hidden">
              <span className="relative z-10">Let's Build Something</span>
              
              {/* Shimmer effect on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
            </div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function SplashScreen({ onComplete }) {
  const [splashDone, setSplashDone] = useState(false);

  useEffect(() => {
    // Disable scrolling during splash
    document.body.style.overflow = "hidden";

    // Complete splash after 2500ms
    const timer = setTimeout(() => {
      setSplashDone(true);
      
      // Re-enable scrolling after exit animation completes (700ms)
      setTimeout(() => {
        document.body.style.overflow = "auto";
        if (onComplete) onComplete();
      }, 700);
    }, 2500);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "auto";
    };
  }, [onComplete]);

  // Logo entrance animation
  const logoVariants = {
    hidden: {
      scale: 0.6,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 18,
        duration: 0.8,
      },
    },
  };

  // Glow fade-in animation
  const glowVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 0.6,
      transition: {
        duration: 0.8,
      },
    },
  };

  // Floating idle animation
  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 0.8,
      },
    },
  };

  // Glow pulse animation
  const glowPulseVariants = {
    animate: {
      opacity: [0.4, 0.7, 0.4],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 0.8,
      },
    },
  };

  // Name reveal animation
  const nameVariants = {
    hidden: {
      y: 30,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  // Subtitle reveal animation
  const subtitleVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: 0.8,
      },
    },
  };

  // Progress bar animation
  const progressBarVariants = {
    hidden: {
      scaleX: 0,
    },
    visible: {
      scaleX: 1,
      transition: {
        duration: 2.2,
        ease: "linear",
      },
    },
  };

  // Split screen exit animation
  const topHalfVariants = {
    exit: {
      y: "-100%",
      transition: {
        duration: 0.7,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  const bottomHalfVariants = {
    exit: {
      y: "100%",
      transition: {
        duration: 0.7,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  return (
    <AnimatePresence mode="wait">
      {!splashDone && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 1 }}
          className="fixed inset-0 z-[9999] flex flex-col"
          style={{ backgroundColor: "#050810" }}
        >
          {/* Top Half */}
          <motion.div
            variants={topHalfVariants}
            exit="exit"
            className="relative flex-1 flex items-end justify-center pb-8"
          >
            <div className="relative">
              {/* Teal glow behind character */}
              <motion.div
                variants={glowVariants}
                initial="hidden"
                animate="visible"
                className="absolute inset-0 flex items-center justify-center"
              >
                <motion.div
                  variants={glowPulseVariants}
                  animate="animate"
                  className="w-64 h-64 md:w-80 md:h-80 rounded-full"
                  style={{
                    background: "radial-gradient(circle, rgba(0, 212, 255, 0.6) 0%, transparent 70%)",
                    filter: "blur(80px)",
                  }}
                />
              </motion.div>

              {/* ProGem NFT Character */}
              <motion.div
                variants={logoVariants}
                initial="hidden"
                animate="visible"
                className="relative z-10"
              >
                <motion.div
                  variants={floatingVariants}
                  animate="animate"
                  className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden"
                >
                  <Image
                    src="/my-nft.JPG"
                    alt="ProGem NFT"
                    fill
                    sizes="(max-width: 768px) 192px, 256px"
                    className="object-cover"
                    priority
                  />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Bottom Half */}
          <motion.div
            variants={bottomHalfVariants}
            exit="exit"
            className="relative flex-1 flex flex-col items-center justify-start pt-8"
          >
            {/* Name Reveal */}
            <motion.h1
              variants={nameVariants}
              initial="hidden"
              animate="visible"
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3"
            >
              Progress Ayere
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={subtitleVariants}
              initial="hidden"
              animate="visible"
              className="text-lg md:text-xl font-medium"
              style={{ color: "#00D4FF" }}
            >
              Frontend Developer
            </motion.p>

            {/* Progress Bar */}
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/10">
              <motion.div
                variants={progressBarVariants}
                initial="hidden"
                animate="visible"
                className="h-full origin-left"
                style={{
                  backgroundColor: "#00D4FF",
                  transformOrigin: "left",
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

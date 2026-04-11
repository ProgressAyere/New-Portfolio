"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  const headline = "I Build Fast, Interactive & Conversion-Focused Web Experiences.";
  const words = headline.split(" ");

  // Parent container orchestrates all child animations
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08, // Stagger word animations
        delayChildren: 0.3, // Start after component mounts
      },
    },
  };

  // Word-by-word clip-mask animation
  const wordVariants = {
    hidden: {
      clipPath: "inset(100% 0 0 0)",
      opacity: 0,
    },
    visible: {
      clipPath: "inset(0% 0 0 0)",
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  // Subheadline fade-in
  const subheadlineVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 0.8,
      },
    },
  };

  // CTA button spring animation
  const buttonVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: (i) => ({
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
        delay: i * 0.15,
      },
    }),
  };

  // Browser mockup slide-in from right
  const browserVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: 0.5,
      },
    },
  };

  // Continuous floating animation for browser mockup
  const floatingVariants = {
    animate: {
      y: [0, -12, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 md:px-12 lg:px-20 pt-24 md:pt-32"
    >
      {/* Animated gradient mesh background */}
      <motion.div
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 50%), radial-gradient(circle at 20% 20%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
      />

      {/* Content Grid */}
      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Column: Text Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-2"
          >
            <p className="text-lg md:text-xl text-slate-400" style={{ fontFamily: 'SF Mono, Monaco, Consolas, monospace' }}>
              Hi, my name is
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white whitespace-nowrap">
              Progress Ayere.
            </h2>
          </motion.div>

          {/* Headline with word-by-word animation and color styling */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
            {words.map((word, i) => {
              // Define which words get the gradient treatment
              const gradientWords = ['Interactive', '&', 'Conversion-Focused', 'Web'];
              const isGradient = gradientWords.includes(word);
              
              return (
                <motion.span
                  key={i}
                  variants={wordVariants}
                  className={`inline-block mr-2 md:mr-3 ${
                    isGradient
                      ? 'bg-gradient-to-r from-emerald-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent'
                      : 'text-slate-400'
                  }`}
                >
                  {word}
                </motion.span>
              );
            })}
          </h1>

          {/* Subheadline */}
          <motion.p
            variants={subheadlineVariants}
            className="text-lg md:text-xl text-slate-300 font-light"
          >
            Frontend Developer
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={containerVariants}
            className="flex flex-wrap gap-4"
          >
            <motion.a
              href="#projects"
              custom={0}
              variants={buttonVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition-colors"
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              custom={1}
              variants={buttonVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-slate-900 text-white font-semibold rounded-lg transition-all"
            >
              Let's Talk
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Column: Browser Mockup with Video */}
        <motion.div
          variants={browserVariants}
          initial="hidden"
          animate="visible"
          className="relative"
        >
          <motion.div
            variants={floatingVariants}
            animate="animate"
            className="relative"
          >
            {/* Browser Chrome Frame */}
            <div className="bg-slate-800 rounded-lg shadow-2xl overflow-hidden border border-slate-700">
              {/* Browser Top Bar */}
              <div className="bg-slate-900 px-4 py-3 flex items-center gap-2 border-b border-slate-700">
                {/* Traffic light dots */}
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                {/* URL bar placeholder */}
                <div className="flex-1 ml-4 bg-slate-800 rounded px-3 py-1 text-xs text-slate-500">
                  project-showcase.dev
                </div>
              </div>

              {/* Video Content */}
              <div className="relative aspect-video bg-slate-950">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                >
                  {/* Replace with actual project recording */}
                  <source src="/bcc-landscape video-mockup.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            {/* Glow effect behind browser */}
            <div className="absolute inset-0 -z-10 blur-3xl opacity-30 bg-gradient-to-r from-blue-600 to-purple-600" />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2"
        >
          <motion.div className="w-1.5 h-1.5 bg-white rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}

"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, ArrowUp, Send } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faTelegram, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { gsap, ScrollTrigger } from "../lib/gsap";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });
  const [focusedField, setFocusedField] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const lineRef = useRef(null);
  const checkmarkRef = useRef(null);
  const clockRef = useRef(null);

  const heading = "Let's Build Something";
  const words = heading.split(" ");

  const subheadline = "Whether it's a Web3 platform, a high-converting landing page, or an interactive experience, I'm one message away";
  const subLines = subheadline.split(", ");

  const socialLinks = [
    { name: "Twitter", icon: faTwitter, href: "https://x.com/MichaelAyere", color: "#1DA1F2" },
    { name: "Telegram", icon: faTelegram, href: "https://t.me/Progress_Ayere", color: "#0088cc" },
    { name: "LinkedIn", icon: faLinkedin, href: "http://linkedin.com/in/progress-ayere-2b2a19271", color: "#0A66C2" },
    { name: "GitHub", icon: faGithub, href: "https://github.com/ProgressAyere", color: "#ffffff" },
  ];

  // GSAP animations
  useEffect(() => {
    // Animated line beneath heading
    if (lineRef.current) {
      gsap.set(lineRef.current, { scaleX: 0, transformOrigin: "left" });
      
      gsap.to(lineRef.current, {
        scaleX: 1,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: lineRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }

    // Clock tick animation
    if (clockRef.current) {
      gsap.to(clockRef.current, {
        rotation: 360,
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: clockRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // Checkmark draw animation on submit
  useEffect(() => {
    if (isSubmitted && checkmarkRef.current) {
      const path = checkmarkRef.current.querySelector("path");
      if (path) {
        const length = path.getTotalLength();
        gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
        gsap.to(path, {
          strokeDashoffset: 0,
          duration: 0.8,
          ease: "power2.out",
        });
      }
    }
  }, [isSubmitted]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
    }, 500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Animation variants
  const wordVariants = {
    hidden: { clipPath: "inset(100% 0 0 0)", opacity: 0 },
    visible: (i) => ({
      clipPath: "inset(0% 0 0 0)",
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: i * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  };

  const subLineVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.8 + i * 0.2,
        ease: "easeOut",
      },
    }),
  };

  const formFieldVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: i * 0.12,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  };

  const availabilityCardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        delay: 0.5,
      },
    },
  };

  const socialIconVariants = {
    hidden: { opacity: 0, y: 30, scale: 0 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15,
        delay: i * 0.04,
      },
    }),
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-slate-950 via-black to-slate-900 overflow-hidden"
    >
      {/* Ambient mesh gradient background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 100, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -80, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          {/* Heading with word-by-word reveal */}
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
          >
            {words.map((word, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={wordVariants}
                className="inline-block mr-4"
              >
                {word}
              </motion.span>
            ))}
          </motion.h2>

          {/* Animated line */}
          <div className="flex justify-center mb-8">
            <div
              ref={lineRef}
              className="h-1 w-32 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
            />
          </div>

          {/* Subheadline */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-3xl mx-auto space-y-2"
          >
            {subLines.map((line, i) => (
              <motion.p
                key={i}
                custom={i}
                variants={subLineVariants}
                className="text-lg md:text-xl text-slate-400"
              >
                {line}
                {i < subLines.length - 1 && ","}
              </motion.p>
            ))}
          </motion.div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-20">
          {/* Left Column: Contact Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  exit={{ opacity: 0, scale: 0.95 }}
                >
                  {/* Name Field */}
                  <motion.div custom={0} variants={formFieldVariants}>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                      Name
                    </label>
                    <motion.input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("name")}
                      onBlur={() => setFocusedField(null)}
                      animate={{
                        borderColor: focusedField === "name" ? "#3B82F6" : "rgba(255,255,255,0.1)",
                        boxShadow: focusedField === "name" ? "0 0 0 3px rgba(59, 130, 246, 0.1)" : "none",
                      }}
                      transition={{ duration: 0.2 }}
                      className="w-full px-4 py-3 bg-slate-900/50 border-2 rounded-xl text-white placeholder-slate-500 focus:outline-none"
                      placeholder="Your name"
                    />
                  </motion.div>

                  {/* Email Field */}
                  <motion.div custom={1} variants={formFieldVariants}>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                      Email
                    </label>
                    <motion.input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField(null)}
                      animate={{
                        borderColor: focusedField === "email" ? "#3B82F6" : "rgba(255,255,255,0.1)",
                        boxShadow: focusedField === "email" ? "0 0 0 3px rgba(59, 130, 246, 0.1)" : "none",
                      }}
                      transition={{ duration: 0.2 }}
                      className="w-full px-4 py-3 bg-slate-900/50 border-2 rounded-xl text-white placeholder-slate-500 focus:outline-none"
                      placeholder="your@email.com"
                    />
                  </motion.div>

                  {/* Project Type Dropdown */}
                  <motion.div custom={2} variants={formFieldVariants}>
                    <label htmlFor="projectType" className="block text-sm font-medium text-slate-300 mb-2">
                      Project Type
                    </label>
                    <motion.select
                      id="projectType"
                      name="projectType"
                      required
                      value={formData.projectType}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("projectType")}
                      onBlur={() => setFocusedField(null)}
                      animate={{
                        borderColor: focusedField === "projectType" ? "#3B82F6" : "rgba(255,255,255,0.1)",
                        boxShadow: focusedField === "projectType" ? "0 0 0 3px rgba(59, 130, 246, 0.1)" : "none",
                      }}
                      transition={{ duration: 0.2 }}
                      className="w-full px-4 py-3 bg-slate-900/50 border-2 rounded-xl text-white focus:outline-none"
                    >
                      <option value="">Select a project type</option>
                      <option value="web3">Web3 Frontend Build</option>
                      <option value="landing">Landing Page</option>
                      <option value="interactive">Interactive Experience</option>
                    </motion.select>
                  </motion.div>

                  {/* Message Field */}
                  <motion.div custom={3} variants={formFieldVariants}>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                      Message
                    </label>
                    <motion.textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("message")}
                      onBlur={() => setFocusedField(null)}
                      animate={{
                        borderColor: focusedField === "message" ? "#3B82F6" : "rgba(255,255,255,0.1)",
                        boxShadow: focusedField === "message" ? "0 0 0 3px rgba(59, 130, 246, 0.1)" : "none",
                      }}
                      transition={{ duration: 0.2 }}
                      className="w-full px-4 py-3 bg-slate-900/50 border-2 rounded-xl text-white placeholder-slate-500 focus:outline-none resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </motion.div>

                  {/* Submit Button */}
                  <motion.div custom={4} variants={formFieldVariants}>
                    <motion.button
                      type="submit"
                      whileHover="hover"
                      whileTap={{ scale: 0.95 }}
                      className="relative w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl text-white font-bold text-lg shadow-2xl overflow-hidden group"
                    >
                      {/* Liquid fill effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-blue-700 to-cyan-700"
                        initial={{ x: "-100%" }}
                        variants={{
                          hover: { x: 0 },
                        }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                      />
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        Send Message
                        <Send className="w-5 h-5" />
                      </span>
                    </motion.button>
                  </motion.div>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-20"
                >
                  {/* Checkmark */}
                  <svg
                    ref={checkmarkRef}
                    width="80"
                    height="80"
                    viewBox="0 0 80 80"
                    className="mb-6"
                  >
                    <circle
                      cx="40"
                      cy="40"
                      r="35"
                      fill="none"
                      stroke="#10B981"
                      strokeWidth="3"
                    />
                    <path
                      d="M25 40 L35 50 L55 30"
                      fill="none"
                      stroke="#10B981"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="text-2xl font-bold text-white mb-2"
                  >
                    Message received!
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="text-slate-400"
                  >
                    I'll be in touch soon.
                  </motion.p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Right Column: Availability & Social */}
          <div className="space-y-8">
            {/* Availability Card */}
            <motion.div
              variants={availabilityCardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative p-8 bg-slate-900/50 backdrop-blur-xl rounded-2xl border border-white/10"
            >
              <div className="flex items-start gap-4 mb-6">
                {/* Pulsing dot */}
                <motion.div
                  animate={{
                    scale: [1, 1.4, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="w-3 h-3 bg-green-500 rounded-full mt-1"
                />
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Currently Available
                  </h3>
                  <p className="text-slate-400">
                    Open for projects
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-slate-300">
                <motion.div ref={clockRef}>
                  <Clock className="w-5 h-5" />
                </motion.div>
                <p>Avg. response time: under 24 hours</p>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex justify-center gap-6"
            >
              {socialLinks.map((social, i) => (
                <motion.div key={i} custom={i} variants={socialIconVariants} className="relative group">
                  <motion.a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      scale: 1.2,
                      rotate: 15,
                    }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    className="flex items-center justify-center w-14 h-14 bg-slate-800 rounded-full border border-white/10 hover:border-white/30 transition-colors"
                    style={{
                      boxShadow: `0 0 20px ${social.color}20`,
                    }}
                  >
                    <FontAwesomeIcon
                      icon={social.icon}
                      className="w-6 h-6"
                      style={{ color: social.color }}
                    />
                  </motion.a>

                  {/* Tooltip */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-slate-800 rounded text-xs text-white whitespace-nowrap pointer-events-none"
                  >
                    {social.name}
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Footer Strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6 pt-12 border-t border-white/10"
        >
          {/* Back to Top Button */}
          <motion.button
            onClick={scrollToTop}
            whileHover="hover"
            className="relative px-6 py-3 bg-slate-800 rounded-xl text-white font-medium overflow-hidden group"
          >
            <motion.div
              className="absolute inset-0 bg-slate-700"
              initial={{ y: "100%" }}
              variants={{
                hover: { y: 0 },
              }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10 flex items-center gap-2">
              Back to Top
              <motion.div
                variants={{
                  hover: { y: -3 },
                }}
              >
                <ArrowUp className="w-4 h-4" />
              </motion.div>
            </span>
          </motion.button>

          {/* Copyright */}
          <p className="text-slate-400 text-center">
            &copy; 2026 Built by Progress Ayere.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

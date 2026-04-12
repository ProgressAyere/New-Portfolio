"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { gsap } from "../lib/gsap";
import {
  SiHtml5,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiFramer,
  SiNodedotjs,
  SiSolidity,
  SiMysql,
} from "react-icons/si";

export default function AboutSection() {
  const photoRef = useRef(null);
  const [photoAnimated, setPhotoAnimated] = useState(false);

  const bioText =
    "I am a FrontEnd Developer focused on building web experiences that are fast & interactive by design. My background in web3 gives me an edge, which means I don't just build what looks good, I build what works for the people using it. My goal: write code that performs, design systems that scale, and ship products that make an impression the moment they load.";

  const bioLines = bioText.split(". ").map((line, i, arr) => 
    i < arr.length - 1 ? line + "." : line
  );

  const techStack = [
    { name: "HTML", icon: SiHtml5, color: "#E34F26" },
    { name: "CSS", icon: SiHtml5, color: "#1572B6" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs, color: "#F5F5F5" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "Framer Motion", icon: SiFramer, color: "#0055FF" },
    { name: "GSAP", icon: SiFramer, color: "#88CE02" },
    { name: "Solidity", icon: SiSolidity, color: "#363636" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "SQL", icon: SiMysql, color: "#4479A1" },
    { name: "Community Mgmt", icon: SiReact, color: "#8B5CF6" },
  ];

  // Photo glow animation
  useEffect(() => {
    if (!photoRef.current || photoAnimated) return;

    const photo = photoRef.current;

    gsap.to(photo, {
      boxShadow: "0 0 60px rgba(52, 211, 153, 0.6)",
      duration: 1,
      ease: "power2.inOut",
      yoyo: true,
      repeat: 1,
      onComplete: () => {
        gsap.set(photo, {
          boxShadow: "0 0 30px rgba(52, 211, 153, 0.3)",
        });
        setPhotoAnimated(true);
      },
    });
  }, [photoAnimated]);

  // Animation variants
  const photoVariants = {
    hidden: {
      scale: 0.85,
      opacity: 0,
      filter: "blur(10px)",
    },
    visible: {
      scale: 1,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const bioLineVariants = {
    hidden: {
      y: 20,
      opacity: 0,
      clipPath: "inset(100% 0 0 0)",
    },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      clipPath: "inset(0% 0 0 0)",
      transition: {
        duration: 0.6,
        delay: i * 0.08,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  };

  const techCardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: i * 0.04,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  };

  const buttonVariants = {
    rest: { scale: 1 },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="about"
      className="relative min-h-screen py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-slate-900 via-black to-slate-950 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
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
            // About
          </motion.span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            The Developer Behind The Code
          </h2>
        </motion.div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          {/* Developer Photo */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={photoVariants}
            className="flex justify-center mb-16"
          >
            <div className="relative">
              {/* Radial gradient bloom */}
              <div className="absolute inset-0 bg-gradient-radial from-emerald-500/20 to-transparent blur-2xl scale-150" />

              {/* Photo */}
              <motion.div
                ref={photoRef}
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-emerald-400/30"
              >
                <img
                  src="/profile-image.png"
                  alt="Developer"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Bio Copy */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-4 mb-12"
          >
            {bioLines.map((line, i) => (
              <motion.p
                key={i}
                custom={i}
                variants={bioLineVariants}
                className="text-lg md:text-xl leading-relaxed bg-gradient-to-r from-emerald-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent"
              >
                {line}
              </motion.p>
            ))}
          </motion.div>

          {/* Tech Stack Grid */}
          <div className="mb-12">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-2xl font-bold text-white mb-6 text-center"
            >
              Tech Stack & Skills
            </motion.h3>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="grid grid-cols-3 md:grid-cols-4 gap-4"
            >
              {techStack.map((tech, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={techCardVariants}
                  whileHover={{
                    scale: 1.05,
                    y: -5,
                    boxShadow: `0 10px 30px ${tech.color}40`,
                    borderColor: tech.color,
                  }}
                  transition={{ duration: 0.2 }}
                  className="relative p-4 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-white/10 flex flex-col items-center gap-2 cursor-pointer group"
                >
                  <tech.icon
                    className="w-8 h-8 md:w-10 md:h-10"
                    style={{ color: tech.color }}
                  />
                  <span className="text-xs md:text-sm text-slate-300 text-center font-medium">
                    {tech.name}
                  </span>

                  {/* Glow effect */}
                  <div
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl -z-10"
                    style={{
                      background: `radial-gradient(circle, ${tech.color}30 0%, transparent 70%)`,
                    }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Download CV Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center"
          >
            <motion.a
              href="https://docs.google.com/viewer?url=https://progress-dev.vercel.app/Progress-Ayere-CV.docx&embedded=true"
              target="_blank"
              rel="noopener noreferrer"
              variants={buttonVariants}
              initial="rest"
              whileHover="hover"
              whileTap={{ scale: 0.95 }}
              className="relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-xl text-white font-bold text-lg shadow-2xl overflow-hidden group"
            >
              {/* Liquid fill effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-cyan-600"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              />

              <span className="relative z-10">View CV</span>
              <motion.div
                className="relative z-10"
                animate={{ y: [0, 3, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Download className="w-5 h-5" />
              </motion.div>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

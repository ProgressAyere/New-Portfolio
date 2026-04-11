"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faTelegram, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function SocialLinks() {
  const socialLinks = [
    {
      name: "Twitter",
      icon: faTwitter,
      href: "https://x.com/MichaelAyere",
      color: "#1DA1F2",
    },
    {
      name: "Telegram",
      icon: faTelegram,
      href: "https://t.me/Progress_Ayere",
      color: "#0088cc",
    },
    {
      name: "LinkedIn",
      icon: faLinkedin,
      href: "http://linkedin.com/in/progress-ayere-2b2a19271",
      color: "#0A66C2",
    },
    {
      name: "GitHub",
      icon: faGithub,
      href: "https://github.com/ProgressAyere",
      color: "#ffffff",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const iconVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 12,
        bounce: 0.6,
      },
    },
  };

  return (
    <div className="mb-20">
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="text-2xl md:text-3xl font-bold text-white mb-8 text-center"
      >
        Connect With Me
      </motion.h3>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        className="flex justify-center gap-6"
      >
        {socialLinks.map((social, index) => (
          <motion.a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            variants={iconVariants}
            whileHover={{
              scale: 1.2,
              rotate: [0, -10, 10, 0],
              transition: {
                duration: 0.3,
              },
            }}
            whileTap={{ scale: 0.9 }}
            className="relative group"
            data-cursor-hover
            data-cursor-text="VISIT"
          >
            {/* Icon container */}
            <div
              className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center group-hover:border-white/30 transition-colors"
              style={{
                boxShadow: `0 0 20px ${social.color}20`,
              }}
            >
              <FontAwesomeIcon
                icon={social.icon}
                className="w-6 h-6 md:w-7 md:h-7"
                style={{ color: social.color }}
              />
            </div>

            {/* Hover glow */}
            <motion.div
              className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 blur-xl transition-opacity"
              style={{
                background: `radial-gradient(circle, ${social.color}40 0%, transparent 70%)`,
              }}
            />

            {/* Label on hover */}
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileHover={{ opacity: 1, y: 0 }}
              className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-slate-400 whitespace-nowrap"
            >
              {social.name}
            </motion.span>
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
}

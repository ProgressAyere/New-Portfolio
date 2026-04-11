"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "What I Do", number: "01.", href: "#what-i-do" },
    { name: "Projects", number: "02.", href: "#projects" },
    { name: "Why Work With Me", number: "03.", href: "#why-work-with-me" },
    { name: "Services", number: "04.", href: "#services" },
    { name: "About", number: "05.", href: "#about" },
    { name: "Contact", number: "06.", href: "#contact" },
  ];

  // Overlay animation variants
  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  // Menu panel animation variants
  const menuVariants = {
    hidden: { x: "100%" },
    visible: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    exit: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  };

  // Staggered link animation
  const linkVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <>
      {/* Fixed Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 md:px-12 md:py-6">
        <div className="flex items-center justify-between">
          {/* Logo/Name */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-xl md:text-2xl font-bold bg-gradient-to-r from-emerald-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent"
          >
            Progress.Dev
          </motion.div>

          {/* Hamburger Icon */}
          <motion.button
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            onClick={() => setIsOpen(!isOpen)}
            className="relative w-10 h-10 flex flex-col items-end justify-center gap-1.5 group z-50"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={isOpen ? { rotate: 45, y: 8, width: "24px" } : { rotate: 0, y: 0, width: "24px" }}
              className="h-0.5 bg-gradient-to-r from-emerald-400 via-cyan-400 to-teal-400 rounded-full"
            />
            <motion.span
              animate={isOpen ? { opacity: 0, width: "18px" } : { opacity: 1, width: "18px" }}
              className="h-0.5 bg-gradient-to-r from-emerald-400 via-cyan-400 to-teal-400 rounded-full"
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: -8, width: "24px" } : { rotate: 0, y: 0, width: "14px" }}
              className="h-0.5 bg-gradient-to-r from-emerald-400 via-cyan-400 to-teal-400 rounded-full"
            />
          </motion.button>
        </div>
      </nav>

      {/* Full-screen Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            />

            {/* Slide-out Menu Panel */}
            <motion.div
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-0 right-0 bottom-0 w-[75%] md:w-[50%] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 z-50 shadow-2xl"
            >
              {/* Close button inside menu */}
              <div className="absolute top-6 right-6">
                <motion.button
                  onClick={() => setIsOpen(false)}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <X className="w-6 h-6 text-white" />
                </motion.button>
              </div>

              <div className="flex flex-col items-center justify-center h-full px-12 mt-10">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    custom={i}
                    variants={linkVariants}
                    initial="hidden"
                    animate="visible"
                    onClick={() => {
                      setIsOpen(false);
                      // Smooth scroll to section
                      const element = document.querySelector(link.href);
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth", block: "start" });
                      }
                    }}
                    className="text-center cursor-pointer group mt-[20px]"
                  >
                    <div className="text-lg md:text-xl font-bold bg-gradient-to-r from-emerald-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent mb-1 transition-all">
                      {link.number}
                    </div>
                    <div className="text-xl md:text-2xl font-light text-slate-300 group-hover:bg-gradient-to-r group-hover:from-emerald-400 group-hover:via-cyan-400 group-hover:to-teal-400 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                      {link.name}
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

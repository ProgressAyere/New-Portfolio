"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function CTABlock() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6 }}
      className="text-center max-w-3xl mx-auto"
    >
      {/* Headline */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-2xl md:text-3xl text-slate-300 mb-10 leading-relaxed"
      >
        Got a project or want to talk Web3 + frontend?{" "}
        <span className="text-white font-semibold">
          I'm one message away.
        </span>
      </motion.p>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-xl text-white font-bold text-lg shadow-2xl overflow-hidden group"
          data-cursor-hover
          data-cursor-text="CLICK"
        >
          {/* Animated gradient background */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              backgroundSize: "200% 200%",
            }}
          />

          {/* Button content */}
          <span className="relative z-10">Send a Message</span>
          <Send className="relative z-10 w-5 h-5" />

          {/* Glow effect */}
          <motion.div
            className="absolute inset-0 rounded-xl blur-xl opacity-50"
            animate={{
              boxShadow: [
                "0 0 20px rgba(6, 182, 212, 0.5)",
                "0 0 40px rgba(168, 85, 247, 0.7)",
                "0 0 20px rgba(236, 72, 153, 0.5)",
                "0 0 40px rgba(6, 182, 212, 0.7)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.a>
      </motion.div>

      {/* Decorative elements */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.6 }}
        className="mt-12 flex justify-center gap-2"
      >
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.3,
            }}
            className="w-2 h-2 rounded-full bg-cyan-400"
          />
        ))}
      </motion.div>
    </motion.div>
  );
}

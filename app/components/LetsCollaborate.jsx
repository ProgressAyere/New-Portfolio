"use client";

import { motion } from "framer-motion";
import CommunityGrid from "./CommunityGrid";
import TestimonialsCarousel from "./TestimonialsCarousel";
import SocialLinks from "./SocialLinks";
import CTABlock from "./CTABlock";

export default function LetsCollaborate() {
  return (
    <section
      id="collaborate"
      className="relative min-h-screen py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-slate-900 via-slate-950 to-black overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.03, 0.06, 0.03],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 -left-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.03, 0.06, 0.03],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl"
        />
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
            className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-gradient-to-r from-cyan-400/10 via-purple-400/10 to-pink-400/10 border border-cyan-400/20 rounded-full text-cyan-400"
          >
            // Let's Collaborate
          </motion.span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Building Together
          </h2>
          <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto">
            I believe in community-first development. Here's where I've been
            showing up, learning, and contributing.
          </p>
        </motion.div>

        {/* Community Moments Grid */}
        <CommunityGrid />

        {/* Testimonials Carousel */}
        <TestimonialsCarousel />

        {/* Social Links */}
        <SocialLinks />

        {/* CTA Block */}
        <CTABlock />
      </div>
    </section>
  );
}

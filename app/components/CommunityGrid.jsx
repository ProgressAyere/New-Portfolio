"use client";

import { motion } from "framer-motion";

export default function CommunityGrid() {
  const communityMoments = [
    {
      type: "image",
      src: "/profile-image.png",
      alt: "Speaking at Crypto Bootcamp",
      label: "Crypto Bootcamp",
      rotation: -8,
    },
    {
      type: "image",
      src: "/ghonsi-home-mockup.png",
      alt: "FiL Lagos 2024",
      label: "FiL Lagos 2024",
      rotation: 5,
    },
    {
      type: "image",
      src: "/bcc-home.png",
      alt: "Stellar Network Event",
      label: "Stellar Network",
      rotation: -3,
    },
    {
      type: "image",
      src: "/ghonsi-about-mockup.png",
      alt: "Hedera Africa Hackathon",
      label: "Hedera Hackathon",
      rotation: 7,
    },
  ];

  // Container orchestrates staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  // Individual card spring-physics entrance
  const cardVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      rotate: 0,
      y: 50,
    },
    visible: (rotation) => ({
      opacity: 1,
      scale: 1,
      rotate: rotation,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        mass: 0.8,
      },
    }),
  };

  return (
    <div className="mb-20">
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
      >
        Community Moments
      </motion.h3>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto"
      >
        {communityMoments.map((moment, index) => (
          <motion.div
            key={index}
            custom={moment.rotation}
            variants={cardVariants}
            whileHover={{
              scale: 1.1,
              rotate: 0,
              y: -10,
              zIndex: 10,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 20,
              },
            }}
            className="relative group cursor-pointer"
            style={{ transformOrigin: "center center" }}
          >
            <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-slate-800 border-4 border-white shadow-2xl">
              <img
                src={moment.src}
                alt={moment.alt}
                className="w-full h-full object-cover"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-white font-semibold text-sm md:text-base">
                  {moment.label}
                </p>
              </div>

              {/* Hover glow */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity"
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

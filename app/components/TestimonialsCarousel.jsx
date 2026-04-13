"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useMotionValue } from "framer-motion";

export default function TestimonialsCarousel() {
  const constraintsRef = useRef(null);
  const [dragStarted, setDragStarted] = useState(false);
  const x = useMotionValue(0);

  const testimonials = [
    {
      avatar: "/prosper-ayere.png",
      name: "Prosper Ayere",
      role: "CEO of Ghonsi Proof",
      quote:
        "I am really glad to have progress join my team in executing his tasks as one of our Frontend devs. He delivers great work, has a good working ethic and collaborates with other key players in the team.",
    },
    {
      avatar: "/eunice-apetu.jpeg",
      name: "Eunice Apetu",
      role: "Co-founder & Communications Lead at BCC",
      quote:
        "Progress is a developer that doesn't just code, he knows what he does, he makes sure to do thorough research before going into anything, he is very zealous about his work, making sure everything is smooth and running. So far, one thing I'm very sure of is; Progress is the man for the job.",
    },
    {
      avatar: "/preslyn-ayere.jpeg",
      name: "Preslyn Ayere",
      role: "CEO of PCC",
      quote:
        "At PCC, we hold everything we commission to the same standard as our buildings: precision, intentionality, and craft. Progress delivered exactly that. From the first view, the interface felt architectural, deliberate, purposeful & hierarchy guiding the eye like a well-designed floor plan.",
    },
    {
      avatar: "/osaboh-nie.jpg",
      name: "Osaboh Nie",
      role: "Ui/Ux Designer",
      quote:
        "Working with Progress Ayere has been one of the smoothest creative collaborations I've experienced. His designs are consistently high quality, thoughtful, polished, and always on point with the brief. If you're looking for a frontend designer who delivers great work and is genuinely great to work with; Progress Ayere is absolutely the one",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: i * 0.1,
      },
    }),
  };

  return (
    <div className="mt-[65px] mb-20 overflow-hidden">
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-white mb-8 text-center"
      >
        What People Say
      </motion.h3>

      {/* Drag hint */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: dragStarted ? 0 : 1 }}
        transition={{ duration: 0.3 }}
        className="text-center mb-6"
      >
        <p className="text-slate-400 text-sm flex items-center justify-center gap-2">
          <span>Drag to explore</span>
          <motion.span
            animate={{ x: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            →
          </motion.span>
        </p>
      </motion.div>

      {/* Carousel container */}
      <div ref={constraintsRef} className="relative">
        <motion.div
          drag="x"
          dragConstraints={constraintsRef}
          dragElastic={0.1}
          dragMomentum={true}
          onDragStart={() => setDragStarted(true)}
          style={{ x }}
          className="flex gap-6 cursor-grab active:cursor-grabbing px-6 md:px-12"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="flex-shrink-0 w-[320px] md:w-[400px] p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl"
            >
              {/* Avatar and info */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full overflow-hidden bg-slate-700 border-2 border-cyan-400/50">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">
                    {testimonial.name}
                  </h4>
                  <p className="text-slate-400 text-sm">{testimonial.role}</p>
                </div>
              </div>

              {/* Quote */}
              <blockquote className="text-slate-300 text-base leading-relaxed">
                "{testimonial.quote}"
              </blockquote>

              {/* Decorative quote mark */}
              <div className="mt-6 text-6xl text-cyan-400/20 font-serif leading-none">
                "
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

export default function InfiniteReelStrip() {
  const stripRef = useRef(null);
  const timelineRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Media items for the reel
  const mediaItems = [
    { type: "video", src: "/bcc-landscape video-mockup.mp4", label: "BCC Platform" },
    { type: "image", src: "/phone-fix.png", label: "PhoneFix Home" },
    { type: "image", src: "/ghonsi-home-mockup.png", label: "Ghonsi Home" },
    { type: "video", src: "/bcc-nav-video1-mockup.mp4", label: "BCC Navigation" },
    { type: "image", src: "/bcc-projects.png", label: "BCC Projects" },
    { type: "video", src: "/ghonsi-landscape video.mp4", label: "Ghonsi Proof" },
    { type: "video", src: "/bcc-nav-video2-mockup.mp4", label: "BCC Features" },
    { type: "image", src: "/bcc-about-mockup.png", label: "BCC About" },
    { type: "image", src: "/ghonsi-about-mockup.png", label: "Ghonsi About" },
    { type: "image", src: "/bcc-mobile-view-mockup.png", label: "BCC Mobile" },
    { type: "image", src: "/bcc-footer.png", label: "BCC Footer" },
  ];

  useEffect(() => {
    if (!stripRef.current) return;

    const items = gsap.utils.toArray(".reel-item");
    
    // Calculate total width of all items
    let totalWidth = 0;
    items.forEach((item) => {
      totalWidth += item.offsetWidth;
    });

    // Clone items for seamless loop
    const stripContainer = stripRef.current;
    const originalItems = Array.from(stripContainer.children);
    
    // Clone enough times to ensure seamless loop
    originalItems.forEach((item) => {
      const clone = item.cloneNode(true);
      stripContainer.appendChild(clone);
    });

    // GSAP infinite horizontal loop animation
    // Uses modifiers to create seamless wrap-around effect
    const allItems = gsap.utils.toArray(".reel-item");
    
    gsap.set(allItems, {
      x: (i) => i * (allItems[0].offsetWidth + 16), // 16px gap
    });

    const animation = gsap.to(allItems, {
      x: `-=${totalWidth + 16 * items.length}`, // Move by total width including gaps
      duration: 40, // Adjust speed here
      ease: "none",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => {
          // Wrap around logic for seamless infinite scroll
          const distance = totalWidth + 16 * items.length;
          return (parseFloat(x) % distance);
        }),
      },
    });

    timelineRef.current = animation;

    return () => {
      animation.kill();
    };
  }, []);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
    // Pause the entire strip animation
    if (timelineRef.current) {
      timelineRef.current.pause();
    }
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
    // Resume the strip animation
    if (timelineRef.current) {
      timelineRef.current.resume();
    }
  };

  const handleVideoMouseEnter = (e) => {
    if (e.target.tagName === "VIDEO") {
      e.target.play();
    }
  };

  const handleVideoMouseLeave = (e) => {
    if (e.target.tagName === "VIDEO") {
      e.target.pause();
      e.target.currentTime = 0;
    }
  };

  return (
    <section className="relative py-16 md:py-24 bg-black overflow-hidden">
      {/* Scroll-triggered section header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 px-6"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold text-white tracking-tight"
        >
          Real Work. Shipped.
        </motion.h2>
      </motion.div>

      {/* Infinite reel strip with entrance animation */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative"
      >
        {/* Left fade vignette */}
        <div className="absolute left-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        
        {/* Right fade vignette */}
        <div className="absolute right-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

        {/* Scrolling strip container */}
        <div className="relative overflow-hidden py-4">
          <div ref={stripRef} className="flex gap-4 will-change-transform">
            {mediaItems.map((item, index) => (
              <div
                key={index}
                className="reel-item relative flex-shrink-0 group"
                data-cursor-hover
                data-cursor-text="VIEW"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <motion.div
                  animate={{
                    scale: hoveredIndex === index ? 1.08 : 1,
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="relative h-56 md:h-64 w-auto rounded-xl overflow-hidden bg-slate-900 border border-white/10"
                  style={{ aspectRatio: "16/9" }}
                >
                  {item.type === "video" ? (
                    <video
                      src={item.src}
                      muted
                      loop
                      playsInline
                      onMouseEnter={handleVideoMouseEnter}
                      onMouseLeave={handleVideoMouseLeave}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <img
                      src={item.src}
                      alt={item.label}
                      className="w-full h-full object-cover"
                    />
                  )}

                  {/* Project label overlay on hover */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{
                      opacity: hoveredIndex === index ? 1 : 0,
                      y: hoveredIndex === index ? 0 : 10,
                    }}
                    transition={{ duration: 0.2 }}
                    className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4"
                  >
                    <p className="text-white font-semibold text-sm">{item.label}</p>
                  </motion.div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

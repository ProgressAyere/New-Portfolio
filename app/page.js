"use client";

import { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import WhatIDo from "./components/WhatIDo";
import ProjectsShowcase from "./components/ProjectsShowcase";
import InfiniteReelStrip from "./components/InfiniteReelStrip";
import WhyWorkWithMe from "./components/WhyWorkWithMe";
import ServicesSection from "./components/ServicesSection";

import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import TestimonialsCarousel from "./components/TestimonialsCarousel";
import CustomCursor from "./components/CustomCursor";
import SplashScreen from "./components/SplashScreen";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      <CustomCursor />
      
      {/* Splash Screen */}
      <AnimatePresence mode="wait">
        {showSplash && (
          <SplashScreen onComplete={() => setShowSplash(false)} />
        )}
      </AnimatePresence>

      {/* Main Portfolio Content */}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: showSplash ? 0 : 1 }}
        transition={{ duration: 0.5, delay: showSplash ? 0 : 0.3 }}
        className="relative"
      >
        <Navbar />
        <HeroSection />
        <WhatIDo />
        <ProjectsShowcase />
        <InfiniteReelStrip />
        <WhyWorkWithMe />
        <ServicesSection />
        <TestimonialsCarousel />
        <AboutSection />
        <ContactSection />
      </motion.main>
    </>
  );
}

'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface Pillar {
  id: number;
  title: string;
  titleHighlight: { word: string; color: string };
  description: string;
  imageUrl: string;
}

const pillars: Pillar[] = [
  {
    id: 1,
    title: "Empowering Tomorrow's Innovators",
    titleHighlight: { word: "Innovators", color: "#4F6C8A" },
    description:
      'Advancing women and youth in STEM through mentorship, training, and pathways to innovation leadership.',
    imageUrl:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop',
  },
  {
    id: 2,
    title: 'Innovation & Sustainable Infrastructure',
    titleHighlight: { word: "Infrastructure", color: "#D5AA72" },
    description:
      'Building renewable energy solutions and smart city infrastructure for a resilient future.',
    imageUrl:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=600&fit=crop',
  },
  {
    id: 3,
    title: 'Social Impact & Community Development',
    titleHighlight: { word: "Development", color: "#98A48B" },
    description:
      'Creating transformative local projects that drive meaningful change in underserved communities.',
    imageUrl:
      'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1200&h=600&fit=crop',
  },
  {
    id: 4,
    title: 'Partnerships & Collaboration',
    titleHighlight: { word: "Collaboration", color: "#4F6C8A" },
    description:
      'Uniting academia, industry, and government to amplify impact through strategic alliances.',
    imageUrl:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop',
  },
  {
    id: 5,
    title: 'Skills Development & Education',
    titleHighlight: { word: "Education", color: "#D5AA72" },
    description:
      'Delivering training programs and scholarships to unlock potential and create opportunity.',
    imageUrl:
      'https://images.unsplash.com/photo-1522202176988-696ce0213ce0?w=1200&h=600&fit=crop',
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const imageGalleryRef = useRef<HTMLDivElement>(null);
  const isMobileRef = useRef(false);

  // Auto-advance on mobile
  useEffect(() => {
    const checkMobile = () => {
      isMobileRef.current = window.innerWidth < 1024;
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Auto-advance carousel on mobile every 5 seconds
    let interval: NodeJS.Timeout;
    if (isMobileRef.current) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % pillars.length);
      }, 5000);
    }

    return () => {
      window.removeEventListener('resize', checkMobile);
      if (interval) clearInterval(interval);
    };
  }, []);

  // Handle scroll within image gallery only (desktop)
  useEffect(() => {
    const handleScroll = (e: WheelEvent) => {
      if (isMobileRef.current) return; // Disable on mobile
      if (!imageGalleryRef.current) return;

      // Check if cursor is over the image gallery
      const rect = imageGalleryRef.current.getBoundingClientRect();
      const isOverImageGallery =
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;

      if (!isOverImageGallery) return;

      // Prevent default scroll
      e.preventDefault();

      // Move to next or previous slide based on scroll direction
      if (e.deltaY > 0) {
        // Scroll down
        setCurrentSlide((prev) => Math.min(prev + 1, pillars.length - 1));
      } else {
        // Scroll up
        setCurrentSlide((prev) => Math.max(prev - 1, 0));
      }
    };

    window.addEventListener('wheel', handleScroll, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, []);

  const renderTitleWithHighlight = (pillar: Pillar) => {
    const { title, titleHighlight } = pillar;
    const parts = title.split(titleHighlight.word);

    return (
      <>
        {parts[0]}
        <span style={{ color: titleHighlight.color }}>{titleHighlight.word}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <section
      className="relative w-full min-h-[130vh] pt-20 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #FCFCFE 0%, #FCFCFE 35%, rgba(79, 108, 138, 0.15) 100%)',
      }}
    >
      <div className="relative h-full flex flex-col lg:flex-row items-center max-w-7xl mx-auto px-4 sm:px-6 py-20 lg:py-20 gap-8 lg:gap-12">
        {/* Left Side: Text Content */}
        <motion.div
          key={`content-${pillars[currentSlide].id}`}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/2 flex flex-col justify-center mt-8 lg:mt-0"
        >
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-forge-dark mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {renderTitleWithHighlight(pillars[currentSlide])}
          </motion.h2>

          <motion.p
            className="text-base sm:text-lg md:text-xl text-forge-gray mb-8 max-w-md leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {pillars[currentSlide].description}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.button
              className="px-8 py-3 border-2 border-forge-dark text-forge-dark rounded-lg font-semibold text-sm sm:text-base cursor-pointer"
              whileHover={{
                backgroundColor: '#4F6C8A',
                color: '#FCFCFE',
                borderColor: '#4F6C8A',
              }}
              transition={{ duration: 0.3 }}
            >
              Learn More
            </motion.button>
          </motion.div>

          {/* Scroll Indicator - Desktop only */}
          <motion.div
            className="mt-12 flex items-center gap-2 hidden lg:flex"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <div className="w-8 h-12 border-2 border-forge-dark rounded-full flex items-center justify-center flex-shrink-0">
              <motion.div
                className="w-1 h-2 bg-forge-dark rounded-full"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </div>
            <span className="text-sm text-forge-gray">Scroll over images</span>
          </motion.div>
        </motion.div>

        {/* Right Side: Image Gallery */}
        <div
          ref={imageGalleryRef}
          className="w-full lg:w-1/2 relative h-[500px] sm:h-[600px] lg:h-screen lg:sticky lg:top-20 cursor-grab active:cursor-grabbing px-4 sm:px-0"
        >
          {/* Container for scroll-based animation with padding to prevent cutoff */}
          <div className="relative w-full h-full flex items-center justify-center lg:block">
            {/* Large Center Image - Index 0 */}
            <motion.div
              className="absolute w-64 sm:w-80 h-80 sm:h-[420px] rounded-2xl overflow-hidden shadow-2xl hidden lg:block"
              style={{ bottom: '5%', right: '10%' }}
              animate={{
                scale: currentSlide === 0 ? 1.25 : 0.85,
                opacity: currentSlide === 0 ? 1 : 0.4,
                zIndex: currentSlide === 0 ? 50 : 10,
              }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              <img
                src={pillars[0].imageUrl}
                alt={pillars[0].title}
                className="w-full h-full object-cover"
              />
              {currentSlide !== 0 && (
                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
              )}
            </motion.div>

            {/* Top Left Image - Index 1 */}
            <motion.div
              className="absolute w-56 sm:w-64 h-72 sm:h-80 rounded-2xl overflow-hidden shadow-lg hidden lg:block"
              style={{ top: '10%', left: '5%' }}
              animate={{
                scale: currentSlide === 1 ? 1.25 : 0.85,
                opacity: currentSlide === 1 ? 1 : 0.4,
                zIndex: currentSlide === 1 ? 50 : 10,
              }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              <img
                src={pillars[1].imageUrl}
                alt={pillars[1].title}
                className="w-full h-full object-cover"
              />
              {currentSlide !== 1 && (
                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
              )}
            </motion.div>

            {/* Middle Right Image - Index 2 */}
            <motion.div
              className="absolute w-64 sm:w-72 h-80 sm:h-96 rounded-2xl overflow-hidden shadow-lg hidden lg:block"
              style={{ top: '35%', right: '15%' }}
              animate={{
                scale: currentSlide === 2 ? 1.25 : 0.85,
                opacity: currentSlide === 2 ? 1 : 0.4,
                zIndex: currentSlide === 2 ? 50 : 10,
              }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              <img
                src={pillars[2].imageUrl}
                alt={pillars[2].title}
                className="w-full h-full object-cover"
              />
              {currentSlide !== 2 && (
                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
              )}
            </motion.div>

            {/* Top Right Image - Index 3 */}
            <motion.div
              className="absolute w-52 sm:w-60 h-64 sm:h-72 rounded-2xl overflow-hidden shadow-lg hidden lg:block"
              style={{ top: '15%', right: '8%' }}
              animate={{
                scale: currentSlide === 3 ? 1.25 : 0.85,
                opacity: currentSlide === 3 ? 1 : 0.4,
                zIndex: currentSlide === 3 ? 50 : 10,
              }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              <img
                src={pillars[3].imageUrl}
                alt={pillars[3].title}
                className="w-full h-full object-cover"
              />
              {currentSlide !== 3 && (
                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
              )}
            </motion.div>

            {/* Bottom Right Image - Index 4 */}
            <motion.div
              className="absolute w-56 sm:w-64 h-72 sm:h-80 rounded-2xl overflow-hidden shadow-lg hidden lg:block"
              style={{ bottom: '8%', right: '25%' }}
              animate={{
                scale: currentSlide === 4 ? 1.25 : 0.85,
                opacity: currentSlide === 4 ? 1 : 0.4,
                zIndex: currentSlide === 4 ? 50 : 10,
              }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              <img
                src={pillars[4].imageUrl}
                alt={pillars[4].title}
                className="w-full h-full object-cover"
              />
              {currentSlide !== 4 && (
                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
              )}
            </motion.div>

            {/* Mobile: Full-width Image */}
            <motion.div
              className="w-full h-full rounded-2xl overflow-hidden shadow-2xl lg:hidden"
              key={`mobile-${currentSlide}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={pillars[currentSlide].imageUrl}
                alt={pillars[currentSlide].title}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const heroSlides = [
  {
    id: 1,
    src: '/hero/onsite-experience.webp',
    alt: 'Sustainable infrastructure',
    objectPosition: '50% 8%',
    headline: 'Building resilient communities',
    subline: 'with',
    highlight: 'climate-adaptive design',
    highlightColor: '#5086c0ff',
  },
  {
    id: 2,
    src: '/hero/students.webp',
    alt: 'Team collaboration',
    objectPosition: '65% 22%',
    headline: 'Empowering women & youth',
    subline: 'to lead the future of STEM through',
    highlight: 'sustainable engineering',
    highlightColor: '#9cb681ff',
  },
  {
    id: 3,
    src: '/hero/community-action.webp',
    alt: 'Community development',
    objectPosition: '70% center',
    headline: 'Driving global impact',
    subline: 'through',
    highlight: 'rigorous project management execution',
    highlightColor: '#D5AA72',
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [navHeight, setNavHeight] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  }, []);

 
  useEffect(() => {
    const interval = setInterval(nextSlide, 7000);
    return () => clearInterval(interval);
  }, [nextSlide]);

 
  useEffect(() => {
    const measure = () => {
      const nav = document.querySelector('nav');
      if (nav) setNavHeight(nav.offsetHeight);
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  const slide = heroSlides[currentSlide];

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ paddingTop: navHeight }}
    >
      <div className="relative w-full h-[55dvh] sm:h-[60dvh] md:h-[65dvh] lg:h-[80dvh]">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-cover"
              style={{ objectPosition: slide.objectPosition }}
              priority={currentSlide === 0}
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>

        {/* Dark overlay — stronger on the left where text sits, lighter on the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/10 sm:from-black/65 sm:via-black/35 sm:to-transparent" />

        {/* Bottom gradient for indicators */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

        {/* Text Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.id + '-text'}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
                className="max-w-2xl"
              >
                <h1
                  className="text-white font-bold leading-tight"
                  style={{
                    fontFamily: '"DM Sans", sans-serif',
                    fontSize: 'clamp(1.75rem, 4.5vw, 3.5rem)',
                    letterSpacing: '-0.02em',
                    textShadow: '0 2px 20px rgba(0,0,0,0.3)',
                  }}
                >
                  {slide.headline}
                </h1>

                <p
                  className="mt-3 sm:mt-4 text-white/90 font-medium"
                  style={{
                    fontFamily: '"DM Sans", sans-serif',
                    fontWeight: 'bold',
                    fontSize: 'clamp(1rem, 2.2vw, 1.5rem)',
                    lineHeight: 1.2,
                    textShadow: '0 1px 10px rgba(0,0,0,0.3)',
                  }}
                >
                  {slide.subline}{' '}
                  <span
                    style={{
                      color: slide.highlightColor,
                      fontStyle: 'italic',
                      fontWeight: 'bold',
                      textShadow: '0 1px 10px rgba(0,0,0,0.4)',
                    }}
                  >
                    {slide.highlight}
                  </span>
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Slide Progress Indicators */}
        <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 lg:left-12 xl:left-16 flex items-center gap-3 z-20">
          <span
            className="text-white/80 font-mono text-sm tracking-wider"
            style={{ fontFamily: '"DM Sans", sans-serif' }}
          >
          </span>

          <div className="flex items-center gap-2">
            {heroSlides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className="relative h-0.5 rounded-full overflow-hidden transition-all duration-500"
                style={{
                  width: idx === currentSlide ? '2.5rem' : '1.25rem',
                  background:
                    idx === currentSlide
                      ? 'rgba(255,255,255,0.9)'
                      : 'rgba(255,255,255,0.3)',
                }}
              >
                {idx === currentSlide && (
                  <motion.div
                    className="absolute inset-0 bg-white origin-left"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 7, ease: 'linear' }}
                    key={currentSlide}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
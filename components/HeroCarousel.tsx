'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const heroSlides = [
  {
    id: 1,
    src: '/hero/onsite-experience.webp',
    alt: 'Sustainable infrastructure',
    objectPosition: '50% 8%',
    headline: 'Driving Global Impact',
    subline: '“Transforming ideas into progress through',
    highlight: 'project leadership”',
    highlightColor: '#5086c0ff',
  },
  {
    id: 2,
    src: '/hero/students.webp',
    alt: 'Team collaboration',
    objectPosition: '65% 22%',
    headline: 'Empowering Women & Youth',
    subline: '“To lead the future of STEM through',
    highlight: 'sustainable engineering”',
    highlightColor: '#9cb681ff',
  },
  {
    id: 3,
    src: '/wind-turbine.webp',
    alt: 'Community development',
    objectPosition: '70% 75%',
    headline: 'Resilience by design',
    subline: '“Shaping communities for a',
    highlight: 'changing climate”',
    highlightColor: '#D5AA72',
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [navHeight, setNavHeight] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progressKey, setProgressKey] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    setProgressKey((k) => k + 1);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    setProgressKey((k) => k + 1);
  }, []);

  useEffect(() => {
    if (isPaused) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }
    intervalRef.current = setInterval(nextSlide, 10000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused, nextSlide]);

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

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/10 sm:from-black/65 sm:via-black/35 sm:to-transparent" />

        {/* Bottom gradient for indicators */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

        {/* LEFT ARROW */}
        <button
          onClick={prevSlide}
          aria-label="Previous slide"
          className="absolute left-3 lg:left-6 top-1/2 -translate-y-1/2 z-30 hidden lg:flex w-10 h-10 lg:w-12 lg:h-12 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white/80 hover:text-white transition-all duration-300 border border-white/10 hover:border-white/30 cursor-pointer"
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        {/* RIGHT ARROW */}
        <button
          onClick={nextSlide}
          aria-label="Next slide"
          className="absolute right-3 lg:right-6 top-1/2 -translate-y-1/2 z-30 hidden lg:flex w-10 h-10 lg:w-12 lg:h-12 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white/80 hover:text-white transition-all duration-300 border border-white/10 hover:border-white/30 cursor-pointer"
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>

        {/* Text Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-8 lg:pl-24 lg:pr-12 xl:pl-28 xl:pr-16">
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

        {/* Bottom controls */}
        <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 lg:left-12 xl:left-16 flex items-center gap-4 z-20">
          <span
            className="text-white/80 font-mono text-sm tracking-wider min-w-[1.5rem]"
            style={{ fontFamily: '"DM Sans", sans-serif' }}
          >
            {String(currentSlide + 1).padStart(2, '0')}
          </span>

          {/* Pause button */}
          <button
            onClick={() => setIsPaused((p) => !p)}
            aria-label={isPaused ? 'Play auto-scroll' : 'Pause auto-scroll'}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white/80 hover:text-white transition-all duration-300 border border-white/10 hover:border-white/30"
          >
            {isPaused ? (
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            ) : (
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
              </svg>
            )}
          </button>

          <div className="flex items-center gap-2">
            {heroSlides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setCurrentSlide(idx);
                  setProgressKey((k) => k + 1);
                }}
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
                {idx === currentSlide && !isPaused && (
                  <motion.div
                    className="absolute inset-0 bg-white origin-left"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 7, ease: 'linear' }}
                    key={`${currentSlide}-${progressKey}`}
                  />
                )}
                {idx === currentSlide && isPaused && (
                  <div
                    className="absolute inset-0 bg-white"
                    style={{ transform: 'scaleX(1)' }}
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
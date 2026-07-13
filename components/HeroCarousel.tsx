'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const heroImages = [
  {
    id: 1,
    src: '/hero/civil-students.webp',
    alt: 'Team collaboration',
    objectPosition: '25% 0%',
  },
  {
    id: 2,
    src: '/hero/sanitation.webp',
    alt: 'Sustainable infrastructure',
    objectPosition: '25% center',
  },
  {
    id: 3,
    src: '/hero/community-impact.webp',
    alt: 'Community development',
    objectPosition: 'center center',
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  }, []);

  // Auto-advance every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 7000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '95vh',
        display: 'flex',
        alignItems: 'stretch',
        overflow: 'hidden',
        backgroundColor: '#FCFCFE',
        paddingTop: '176px',
      }}
    >
      {/* Left: Descriptor Text */}
      <div
        style={{
          flex: '0 0 50%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: '2rem 5rem 2rem',
          position: 'relative',
          zIndex: 10,
          background: 'linear-gradient(135deg, rgba(213, 170, 114, 0.09) 0%, rgba(213, 170, 114, 0.03) 40%, #FCFCFE 70%)',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              fontFamily: '"DM Sans", sans-serif',
              fontWeight: 700,
              lineHeight: 1.15,
              color: '#110f0fd8',
              margin: 0,
              letterSpacing: '-0.02em',
            }}
          >
            <span style={{ color: '#4F6C8A', fontStyle: 'italic' }}>
              "Empowering women
            </span>{' '}
            and youth to lead the future of STEM through{' '}
            <span style={{ color: '#D5AA72', fontStyle: 'italic' }}>
              sustainable engineering
            </span>
            ,{' '}
            <span style={{ color: '#9cb681ff', fontStyle: 'italic' }}>
              climate-adaptive design
            </span>
            , and{' '}
            <span style={{ color: '#4F6C8A', fontStyle: 'italic' }}>
              excellent project management
            </span>{' '}
            to build a more resilient, equitable world."
          </h1>
        </motion.div>
      </div>

      {/* ─── Right: Image Carousel ─── */}
      <div
        style={{
          flex: '0 0 50%',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={heroImages[currentSlide].id}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.9, ease: 'easeInOut' }}
            style={{
              position: 'absolute',
              inset: 0,
            }}
          >
            <Image
              src={heroImages[currentSlide].src}
              alt={heroImages[currentSlide].alt}
              fill
              className="object-cover"
              style={{ objectPosition: heroImages[currentSlide].objectPosition }}
              priority={currentSlide === 0}
            />
            {/* Soft left-edge gradient — much lighter, only for text readability */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background:
                  'linear-gradient(to right, rgba(10,10,10,0.15) 0%, transparent 40%)',
                pointerEvents: 'none',
              }}
            />
            {/* Very subtle bottom gradient for indicators readability */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background:
                  'linear-gradient(to top, rgba(10,10,10,0.2) 0%, transparent 30%)',
                pointerEvents: 'none',
              }}
            />
          </motion.div>
        </AnimatePresence>

        {/* Slide progress indicators */}
        <div
          style={{
            position: 'absolute',
            bottom: '2rem',
            right: '2rem',
            display: 'flex',
            gap: '0.75rem',
            zIndex: 20,
            alignItems: 'center',
          }}
        >
          {heroImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              style={{
                width: idx === currentSlide ? '2.5rem' : '0.5rem',
                height: '0.25rem',
                borderRadius: '9999px',
                border: 'none',
                background:
                  idx === currentSlide
                    ? '#ffffff'
                    : 'rgba(255,255,255,0.3)',
                cursor: 'pointer',
                transition: 'all 0.4s ease',
                padding: 0,
              }}
            />
          ))}
        </div>
      </div>

      {/* ─── Mobile & Tablet override: stacked layout ─── */}
      <style jsx>{`
        @media (max-width: 1024px) {
          section {
            flex-direction: column !important;
            padding-top: 64px !important; // Smaller navbar offset for tablet
          }
          section > div:first-child {
            flex: 0 0 auto !important;
            padding: 2rem 2rem 2.5rem !important;
            min-height: auto;
          }
          section > div:nth-child(2) {
            flex: 1 1 auto !important;
            min-height: 50vh;
          }
        }
        @media (max-width: 768px) {
          section {
            padding-top: 56px !important; // Even smaller for mobile
          }
          section > div:first-child {
            padding: 2rem 1.5rem 2.5rem !important;
          }
          section > div:nth-child(2) {
            min-height: 45vh;
          }
        }
      `}</style>
    </section>
  );
}
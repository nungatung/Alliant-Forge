'use client';

import React, { useState } from 'react';
import Image from 'next/image';

// Add your logos here — adjust 'scale' to make any logo bigger or smaller
const partnerLogos = [
  { name: 'African Union', src: '/partners/au-logo.png', scale: 1 },
  { name: 'APS Canada', src: '/partners/aps-canada.png', scale: 1 },
  { name: 'APS Africa', src: '/partners/aps-africa-1.png', scale: 1 },
  { name: 'Solcare', src: '/partners/solcare-2.png', scale: 1.5 },
];

export default function PartnersMarquee() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="py-16 md:py-20 bg-[#FFFAFA] border-t border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-12">
          Better Together With
        </h3>

        <div
          className="overflow-hidden w-full relative max-w-5xl mx-auto select-none"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Left fade */}
          <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-[#FCFCFE] to-transparent" />

          {/* Marquee track */}
          <div
            className="flex will-change-transform"
            style={{
              width: 'max-content',
              animation: 'marqueeScroll 30s linear infinite',
              animationPlayState: isPaused ? 'paused' : 'running',
            }}
          >
            {/* Repeat 3 times for seamless loop */}
            {[0, 1, 2].map((setIdx) => (
              <div key={setIdx} className="flex items-center shrink-0">
                {partnerLogos.map((logo, idx) => (
                  <div
                    key={`${setIdx}-${logo.name}-${idx}`}
                    className="shrink-0 flex items-center justify-center"
                    style={{
                      width: `${220 * logo.scale}px`,
                      height: `${120 * logo.scale}px`,
                      position: 'relative',
                      marginLeft: '80px',
                      marginRight: '80px',
                    }}
                  >
                    <Image
                      src={logo.src}
                      alt={logo.name}
                      fill
                      className="object-contain"
                      draggable={false}
                      sizes="(max-width: 768px) 200px, 280px"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Right fade */}
          <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-[#FCFCFE] to-transparent" />
        </div>
      </div>

      <style jsx>{`
        @keyframes marqueeScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>
    </section>
  );
}
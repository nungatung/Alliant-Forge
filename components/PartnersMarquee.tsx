'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const partners = [
  { id: 1, name: 'Tech Innovators' },
  { id: 2, name: 'Green Future' },
  { id: 3, name: 'Community First' },
  { id: 4, name: 'Education Now' },
  { id: 5, name: 'Global Partners' },
  { id: 6, name: 'Sustainable Dev' },
];

export default function PartnersMarquee() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-20 bg-white border-t border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-2xl md:text-3xl font-bold text-af-muted-blue text-center mb-12">
          Our Partners & Affiliates
        </h3>

        {/* Marquee Container */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-8"
            animate={{ x: [0, -50 * partners.length * 4] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {/* Original set + duplicate for seamless loop */}
            {[...partners, ...partners].map((partner, idx) => (
              <motion.div
                key={idx}
                className="flex-shrink-0 w-48 h-32 bg-gray-200 rounded-lg flex items-center justify-center cursor-pointer relative group overflow-hidden"
                onMouseEnter={() => setHoveredId(partner.id)}
                onMouseLeave={() => setHoveredId(null)}
                whileHover={{ scale: 1.05 }}
              >
                {/* Grayscale by default */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400 transition-all duration-300 ${
                    hoveredId === partner.id ? 'opacity-0' : 'opacity-100'
                  }`}
                />

                {/* Colored overlay on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br from-af-muted-blue to-af-golden-brown transition-all duration-300 ${
                    hoveredId === partner.id ? 'opacity-100' : 'opacity-0'
                  }`}
                />

                {/* Text */}
                <p className="relative z-10 font-semibold text-gray-700 text-center px-4 group-hover:text-white transition-colors duration-300">
                  {partner.name}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
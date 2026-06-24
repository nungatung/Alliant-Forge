'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface WorkItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const workItems: WorkItem[] = [
  {
    icon: (
      <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C6.5 6.253 2 10.753 2 16.5S6.5 26.5 12 26.5s10-4.5 10-10S17.5 6.253 12 6.253z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2v4m0 12v4M4.22 4.22l2.83 2.83m0 12.72l-2.83 2.83m15.56-15.56l2.83 2.83m0 12.72l-2.83 2.83" />
      </svg>
    ),
    title: 'Empower Innovation',
    description: 'Building pathways for women and youth to lead sustainable solutions through mentorship, training, and technology access.',
  },
  {
    icon: (
      <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: 'Build Partnerships',
    description: 'Connecting academia, industry, government, and communities to create systemic change and close STEM gaps across sectors.',
  },
  {
    icon: (
      <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Drive Impact',
    description: 'Delivering green jobs, clean infrastructure, and sustainable economic opportunities that transform communities.',
  },
];

export default function HowWeWorkBanner() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image with Parallax */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/cape-town.jpg)',
          backgroundAttachment: 'fixed',
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Side: Title + Description + Button */}
            <motion.div
              className="text-white"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl sm:text-6xl lg:text-6xl font-bold mb-6 leading-tight">
                How Alliant Forge Works
              </h2>

              <p className="text-lg sm:text-xl mb-8 max-w-lg leading-relaxed opacity-95">
                We empower women and youth across Africa through innovation, sustainable infrastructure, and strategic partnerships. Creating pathways for inclusive growth and lasting impact.
              </p>

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

            {/* Right Side: Work Items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
              {workItems.map((item, idx) => (
                <motion.div
                  key={item.title}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-6 sm:p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Icon */}
                  <div className="mb-4 flex items-center justify-center w-14 h-14 rounded-full bg-white/20">
                    {item.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close on resize to desktop so stale open state doesn't carry over
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) setIsMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '#about' },
    { label: 'Our Work', href: '#work' },
    { label: 'SDG Alignment', href: '#sdg' },
    { label: 'Partner With Us', href: '#partnerships' },
    { label: 'Get In Touch', href: '#contact' },
  ];

  const closeMenu = () => setIsMenuOpen(false);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/30 backdrop-blur-md shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">

          {/* Logo
            ─────────────────────────────────────────────────────────
            FIX: `relative` is REQUIRED on the parent of any <Image fill>.
            Without it, Next.js positions the image absolutely within the
            nearest positioned ancestor (the fixed <nav>), stretching it
            across the full navbar and silently swallowing all click/touch
            events — including the hamburger button.
            ───────────────────────────────────────────────────────── */}
          <Link href="/" className="flex items-center hover:opacity-80 transition-opacity flex-shrink-0">
            <div className="relative w-[150px] sm:w-[180px] md:w-[300px] h-[40px] sm:h-[50px] md:h-[90px]">
              <Image
                src="/logo-1-2.png"
                alt="Alliant Forge"
                width={300}
                height={90}
                className="object-contain object-left "
                priority
              />
            </div>
          </Link>

          {/* Right side */}
          <div className="flex items-center gap-2 sm:gap-4 md:gap-6 ml-auto">

            {/* Desktop: Menu dropdown */}
            <div className="relative hidden sm:block">
              <button
                onClick={toggleMenu}
                className="flex items-center gap-2 px-3 sm:px-4 py-2 text-af-muted-blue hover:text-af-golden-brown transition-colors font-semibold text-sm md:text-base cursor-pointer"
              >
                Menu
                <motion.svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{ rotate: isMenuOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </motion.svg>
              </button>

              <AnimatePresence>
                {isMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden z-50"
                  >
                    <div className="py-2">
                      {menuItems.map((item, idx) => (
                        <motion.a
                          key={item.label}
                          href={item.href}
                          onClick={closeMenu}
                          className="block px-6 py-3 text-af-muted-blue text-sm font-medium"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          whileHover={{ scale: 1.05, x: 8 }}
                        >
                          {item.label}
                        </motion.a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Desktop: Donate button */}
            <div className="hidden sm:block">
              <div className="donate-btn-wrapper hover:scale-105 transition-all duration-300 active:scale-100 ">
                <button className="text-sm md:text-base cursor-pointer">Donate Now</button>
              </div>
            </div>

            {/* Mobile: Hamburger / Close toggle
              ───────────────────────────────────────────────────────
              No stopPropagation needed — the button sits above the
              overlay in z-index (z-50 nav > z-30 overlay), so clicks
              always reach the button first.
              ─────────────────────────────────────────────────────── */}
            <button
              onClick={toggleMenu}
              className="sm:hidden flex items-center justify-center w-10 h-10 text-af-muted-blue hover:text-af-golden-brown transition-colors flex-shrink-0"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
            >
              <AnimatePresence mode="wait" initial={false}>
                {isMenuOpen ? (
                  /* X icon */
                  <motion.svg
                    key="close"
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.18 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </motion.svg>
                ) : (
                  /* Hamburger icon */
                  <motion.svg
                    key="open"
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                    transition={{ duration: 0.18 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </motion.svg>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu panel + backdrop */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            
            <motion.div
              key="mobile-backdrop"
              className="fixed inset-0 z-30 bg-black/10 backdrop-blur-sm sm:hidden"
              onClick={closeMenu}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            />

            {/* Slide-down panel */}
            <motion.div
              key="mobile-panel"
              className="fixed top-[73px] left-0 right-0 z-40 bg-white rounded-b-lg shadow-lg sm:hidden"
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
            >
              <div className="py-4 px-4 max-w-7xl mx-auto">
                <div className="space-y-1 mb-4">
                  {menuItems.map((item, idx) => (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      onClick={closeMenu}
                      className="block px-4 py-3 text-af-muted-blue text-sm font-medium hover:bg-af-background rounded-lg transition-colors"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      whileHover={{ x: 8 }}
                    >
                      {item.label}
                    </motion.a>
                  ))}
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <div className="donate-btn-wrapper hover:scale-105 transition-all duration-300 active:scale-100 w-full">
                    <button onClick={closeMenu} className="w-full text-sm">Donate Now</button>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Desktop overlay*/}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="desktop-overlay"
            className="fixed inset-0 z-30 hidden sm:block"
            onClick={closeMenu}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
      </AnimatePresence>
    </>
  );
}
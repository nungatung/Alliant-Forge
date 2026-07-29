'use client';

import Image from 'next/image';
import { DottedMap } from '@/components/ui/dotted-map';
import type { Marker } from '@/components/ui/dotted-map';

const linkColors: Record<string, string> = {
  Home: '#4F6C8A',
  'Who We Are': '#4F6C8A',
  'Our Work': '#4F6C8A',
  'Strategic Pillars': '#4F6C8A',
  'Make An Impact': '#4F6C8A',
};

const markers: Marker[] = [
  {
    lat: -33.9249,
    lng: 18.4241, // Cape Town, South Africa
    size: 0.3,
  },
  {
    lat: 53.5461,
    lng: -113.4938, // Edmonton, Alberta, Canada
    size: 0.3,
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const orgLinks = [
    { title: 'Home', href: '/' },
    { title: 'Our Work', href: '/' },
    { title: 'Who We Are', href: '#about' },
    { title: 'Strategic Pillars', href: '#strategic-pillars' },
    { title: 'Make An Impact', href: '/donate' },
  ];

  const contactLinks = [
    {
      title: '+1 (555) 123-4567',
      href: 'tel:+15551234567',
      icon: '/icons/mobile-phone.png',
      alt: 'Phone',
    },
    {
      title: 'info@alliantforge.org',
      href: 'mailto:info@alliantforge.org',
      icon: '/icons/email.png',
      alt: 'Email',
    },
  ];

  return (
    <footer className="relative w-full bg-[#FCFCFE]">
      {/* Top border */}
      <div className="absolute inset-x-0 top-0 h-px w-full bg-gray-200" />

      {/* Centered container */}
      <div className="mx-auto max-w-5xl md:max-w-6xl lg:max-w-7xl md:border-x md:border-gray-200">
        <div className="grid grid-cols-6 gap-6 md:gap-8 p-4 sm:p-6 md:p-10 lg:p-12">
          {/* Left: Dotted Map + Tagline */}
          <div className="col-span-6 flex flex-col gap-4 md:col-span-2 lg:col-span-4">
            {/* Map container — narrower on desktop, aligned left */}
            <div className="relative w-full lg:w-[70%] lg:self-start h-36 sm:h-44 md:h-40 lg:h-48 overflow-hidden rounded-lg">
              {/* Fade edges so it blends into footer background */}
              <div className="absolute inset-0 bg-radial from-transparent to-[#FCFCFE] to-150% z-10 pointer-events-none" />
              <DottedMap
                markers={markers}
                pulse
                className="w-full h-full"
              />
            </div>
            {/* Tagline — centered under the map, same width as map on desktop */}
            <p className="w-full lg:w-[70%] lg:self-start text-center text-lg sm:text-xl text-zinc-800/95 italic leading-relaxed">
              "United for a Sustainable Tomorrow"
            </p>
          </div>

          {/* Right: Organization links */}
          <div className="col-span-3 md:col-span-2 lg:col-span-1">
            <span className="mb-1 block text-sm text-gray-500 uppercase tracking-wider">
              Organization
            </span>
            <div className="flex flex-col gap-1">
              {orgLinks.map(({ href, title }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-max py-1 text-sm transition-colors duration-200"
                  style={{ color: '#084898' }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLElement).style.color = linkColors[title] || '#084898';
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLElement).style.color = '#084898';
                  }}
                >
                  {title}
                </a>
              ))}
            </div>
          </div>

          {/* Right: Get in Touch links with icons */}
          <div id="contact-us" className="col-span-3 md:col-span-2 lg:col-span-1">
            <span className="mb-1 block text-sm text-gray-500 uppercase tracking-wider">
              Get in Touch
            </span>
            <div className="flex flex-col gap-2">
              {contactLinks.map(({ href, title, icon, alt }, i) => (
                <a
                  key={i}
                  href={href}
                  className="flex items-center gap-2 py-1 text-sm transition-colors duration-200"
                  style={{ color: '#084898' }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = linkColors[title] || '#4F6C8A';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = '#084898';
                  }}
                >
                  <span className="relative w-7 h-7 flex-shrink-0">
                    <Image
                      src={icon}
                      alt={alt}
                      fill
                      sizes="28px"
                      className="object-contain"
                    />
                  </span>
                  <span className="break-words">{title}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom border */}
        <div className="absolute inset-x-0 h-px w-full bg-gray-200" />

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 px-4 pt-2 pb-5 text-xs text-gray-400 text-center">
          <span>Copyright {currentYear} © Alliant Forge. All Rights Reserved.</span>
          <span className="hidden sm:inline">|</span>
          <a href="#" className="hover:text-[#084898] transition-colors duration-300">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
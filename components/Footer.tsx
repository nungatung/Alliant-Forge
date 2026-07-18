'use client';

import Image from 'next/image';

const linkColors: Record<string, string> = {
  Home: '#4F6C8A',
  'Who We Are': '#D5AA72',
  'Our Work': '#9cb681ff',
  'Strategic Pillars': '#4F6C8A',
  'Make An Impact': '#9cb681ff',
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const orgLinks = [
    { title: 'Home', href: '#' },
    { title: 'Our Work', href: '#' },
    { title: 'Who We Are', href: '#' },
    { title: 'Strategic Pillars', href: '#' },
    { title: 'Make An Impact', href: '#' },
  ];

  const contactLinks = [
    { title: '+1 (555) 123-4567', href: 'tel:+15551234567' },
    { title: 'info@alliantforge.org', href: 'mailto:info@alliantforge.org' },
  ];

  return (
    <footer className="relative w-full bg-[#FCFCFE]">
      {/* Top border */}
      <div className="absolute inset-x-0 top-0 h-px w-full bg-gray-200" />

      {/* Centered container: wider on md+ and lg+ */}
      <div className="mx-auto max-w-5xl md:max-w-6xl lg:max-w-7xl md:border-x md:border-gray-200">
        <div className="grid grid-cols-6 gap-6 md:gap-8 p-4 sm:p-6 md:p-10 lg:p-12">

          {/* Left: Logo + Tagline */}
          <div className="col-span-6 flex flex-col gap-3 md:col-span-4">
            <div className="relative h-40 w-40">
              <Image
                src="/AF logo-image.png"
                alt="Alliant Forge"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
            <p className="max-w-sm text-md text-gray-500 italic -mt-8 leading-relaxed">
              "Forging Alliances for Sustainable Futures"
            </p>
          </div>

          {/* Right: Organization links */}
          <div className="col-span-3 w-full md:col-span-1">
            <span className="mb-1 text-sm text-gray-400 uppercase tracking-wider">
              Organization
            </span>
            <div className="flex flex-col gap-1">
              {orgLinks.map(({ href, title }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-max py-1 text-sm transition-colors duration-200"
                  style={{ color: '#6B7280' }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLElement).style.color = linkColors[title] || '#6B7280';
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLElement).style.color = '#6B7280';
                  }}
                >
                  {title}
                </a>
              ))}
            </div>
          </div>

          {/* Right: Get in Touch links */}
          <div className="col-span-3 w-full md:col-span-1">
            <span className="mb-1 text-sm text-gray-400 uppercase tracking-wider">
              Get in Touch
            </span>
            <div className="flex flex-col gap-1">
              {contactLinks.map(({ href, title }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-max py-1 text-sm transition-colors duration-200"
                  style={{ color: '#6B7280' }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLElement).style.color = linkColors[title] || '#D5AA72';
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLElement).style.color = '#6B7280';
                  }}
                >
                  {title}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom border */}
        <div className="absolute inset-x-0 h-px w-full bg-gray-200" />

        {/* Copyright: stacks on mobile, inline on sm+ */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 px-4 pt-2 pb-5 text-xs text-gray-400 text-center">
          <span>Copyright {currentYear} © Alliant Forge. All Rights Reserved.</span>
          <span className="hidden sm:inline">|</span>
          <a href="#" className="hover:text-[#D5AA72] transition-colors duration-300">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
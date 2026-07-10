'use client';

import Image from 'next/image';

// Hover colors assigned to each link
const linkColors: Record<string, string> = {
  Home: '#4F6C8A',
  'Who We Are': '#D5AA72',
  'Our Work': '#98A48B',
  'SDG Alignment': '#4F6C8A',
  'Partner With Us': '#D5AA72',
  'Make An Impact': '#98A48B',
  'Get In Touch': '#4F6C8A',
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const orgLinks = ['Home', 'Who We Are', 'Our Work', 'SDG Alignment', 'Make An Impact'];
  const contactLinks = [
    { label: '+1 (555) 123-4567', href: 'tel:+15551234567' },
    { label: 'info@alliantforge.org', href: 'mailto:[EMAIL_ADDRESS]' },
  ];

  return (
    <footer className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 pt-12 w-full bg-[#FCFCFE] text-gray-700 border-t border-gray-200">
      <div className="flex flex-col md:flex-row justify-between w-full gap-12 md:gap-10 lg:gap-16 border-b border-gray-200 pb-12 md:pb-10">
        {/* Left: Logo */}
        <div className="w-full md:w-auto md:flex-shrink-0 flex justify-center md:justify-start">
          <div className="relative w-[270px] sm:w-[330px] md:w-[310px] lg:w-[650px] h-[90px] sm:h-[120px] md:h-[110px] lg:h-[230px]">
            <Image
              src="/AF_logo.png"
              alt="Alliant Forge"
              fill
              className="object-contain object-center md:object-left"
              priority
            />
          </div>
        </div>

        {/* Right: Links + Contact — 2 columns on mobile, not stacked */}
        <div className="w-full md:flex-1 flex flex-row items-start justify-center md:justify-end gap-8 sm:gap-12 md:gap-16 lg:gap-20">
          {/* Organization Links */}
          <div className="w-1/2 sm:w-auto">
            <h2 className="font-semibold mb-4 md:mb-5 text-gray-900 text-sm sm:text-base tracking-wider uppercase">
              Organization
            </h2>
            <ul className="text-sm sm:text-base space-y-2 md:space-y-3">
              {orgLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="transition-colors duration-300"
                    style={{ color: '#6B7280' }}
                    onMouseEnter={(e) => {
                      (e.target as HTMLElement).style.color = linkColors[link] || '#6B7280';
                    }}
                    onMouseLeave={(e) => {
                      (e.target as HTMLElement).style.color = '#6B7280';
                    }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in Touch */}
          <section id="#contact">
          <div className="w-1/2 sm:w-auto">
            <h2 className="font-semibold mb-4 md:mb-5 text-gray-900 text-sm sm:text-base tracking-wider uppercase">
              Get in Touch
            </h2>
            <div className="text-sm sm:text-base space-y-2 md:space-y-3">
              {contactLinks.map((link) => (
                <p key={link.label}>
                  <a
                    href={link.href}
                    className="transition-colors duration-300 break-all"
                    style={{ color: '#6B7280' }}
                    onMouseEnter={(e) => {
                      (e.target as HTMLElement).style.color = linkColors[link.label] || '#D5AA72';
                    }}
                    onMouseLeave={(e) => {
                      (e.target as HTMLElement).style.color = '#6B7280';
                    }}
                  >
                    {link.label}
                  </a>
                </p>
              ))}
            </div>
          </div>
          </section>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="pt-6 pb-8 flex flex-col sm:flex-row items-center justify-center gap-2 text-xs sm:text-sm text-gray-500">
        <span>Copyright {currentYear} © Alliant Forge. All Rights Reserved.</span>
        <span className="hidden sm:inline">|</span>
        <a href="#" className="hover:text-forge-gold transition-colors duration-300">
          Privacy Policy
        </a>
      </div>
    </footer>
  );
}
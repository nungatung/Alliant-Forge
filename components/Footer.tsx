'use client';

import { px } from 'framer-motion';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 pt-12 w-full bg-[#FCFCFE] text-gray-700 border-t border-gray-200">
      <div className="flex flex-col md:flex-row justify-between w-full gap-12 md:gap-10 lg:gap-16 border-b border-gray-200 pb-12 md:pb-10">
        {/* Left: Logo + Description */}
        <div className="w-full md:w-auto md:flex-shrink-0">
          {/* Alliant Forge Logo PNG */}
          <div className="relative w-[270px] sm:w-[330px] md:w-[310px] lg:w-[650px] h-[90px] sm:h-[120px] md:h-[110px] lg:h-[230px]">
            <Image
              src="/alliant-logo-1.png"
              alt="Alliant Forge"
              fill
              className="object-contain object-left"
              priority
            />
          </div>

          {/* <p className="mt-6 text-xs sm:text-sm leading-relaxed text-gray-600">
            Alliant Forge is a global NGO dedicated to empowering communities through
            innovation, sustainable infrastructure, and strategic partnerships worldwide.
            We believe lasting change is built through empowering communities and
            investing in the next generation of leaders.
          </p> */}
        </div>

        {/* Right: Links + Contact */}
        <div className="w-full md:flex-1 flex flex-col sm:flex-row items-start md:justify-end gap-8 sm:gap-12 md:gap-16 lg:gap-20">
          {/* Organization Links */}
          <div className="w-full sm:w-auto">
            <h2 className="font-semibold mb-4 md:mb-5 text-gray-900 text-xs sm:text-sm tracking-wider uppercase">
              Organization
            </h2>
            <ul className="text-xs sm:text-sm space-y-2 md:space-y-3">
              {['Home', 'About Us', 'Our Work', 'SDG Alignment', 'Partner With Us'].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-forge-gold transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in Touch */}
          <div className="w-full sm:w-auto">
            <h2 className="font-semibold mb-4 md:mb-5 text-gray-900 text-xs sm:text-md tracking-wider uppercase">
              Get in Touch
            </h2>
            <div className="text-xs sm:text-sm space-y-2 md:space-y-3 text-gray-600">
              <p>
                <a
                  href="tel:+15551234567"
                  className="hover:text-forge-gold transition-colors duration-300 break-all"
                >
                  +1 (555) 123-4567
                </a>
              </p>
              <p>
                <a
                  href="mailto:info@alliantforge.org"
                  className="hover:text-forge-gold transition-colors duration-300 break-all"
                >
                  info@alliantforge.org
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <p className="pt-6 pb-8 text-center text-xs text-gray-500">
        Copyright {currentYear} © Alliant Forge. All Rights Reserved.
      </p>
    </footer>
  );
}
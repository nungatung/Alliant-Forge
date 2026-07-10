'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface Pillar {
  title: string;
  accentColor: string;
  bulletPoints: string[];
  imageSrc: string;
  sectionId: string;
}

const pillars: Pillar[] = [
  {
    title: 'Empowerment & Education',
    accentColor: '#D5AA72',
    bulletPoints: [
      'STEM Education and Skills Training',
      'Gender Equality and Leadership',
      'Youth Empowerment',
    ],
    imageSrc: '/pillars/empowerment.webp',
    sectionId: '#empowerment-and-education',
  },
  {
    title: 'Innovation & Accelerating Infrastructure Stewardship',
    accentColor: '#4F6C8A',
    bulletPoints: [
      'Renewable Energy Solutions',
      'Eco-Friendly Infrastructure',
      'Water and Nature-Based Systems',
    ],
    imageSrc: '/pillars/innovation.webp',
    sectionId: '#innovation-and-accelerating-infrastructure-stewardship',
  },
  {
    title: 'Collaboration & Community Impact',
    accentColor: '#98A48B',
    bulletPoints: [
      'Local Empowerment Initiatives',
      'Cross-Sector Partnerships',
      'Global Expertise and Support',
    ],
    imageSrc: '/pillars/collaboration.webp',
    sectionId: '#collaboration-and-community-impact',
  },
];

// Custom refined arrow SVG
const ArrowIcon = ({ color }: { color: string }) => (
  <svg
    width="18"
    height="12"
    viewBox="0 0 18 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="transition-transform duration-300 group-hover:translate-x-1"
  >
    <path
      d="M1 6H16M16 6L11.5 1.5M16 6L11.5 10.5"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function StrategicPillars() {
  return (
    <section className="py-20 lg:py-28 bg-[#FFFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Alliant&apos;s Strategic Pillars
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Driving Transformative Change for people, planet &amp; Progress
          </p>
        </motion.div>

        {/* Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
            >
              {/* Accent top border */}
              <div
                className="h-1 w-full"
                style={{ backgroundColor: pillar.accentColor }}
              />

              <div className="p-6 sm:p-8">
                {/* Title */}
                <h3
                  className="text-xl sm:text-2xl font-bold mb-5 leading-snug"
                  style={{ color: pillar.accentColor }}
                >
                  {pillar.title}
                </h3>

                {/* Image Placeholder */}
                <div className="relative w-full aspect-[4/3] rounded-xl bg-gray-50 mb-6 overflow-hidden">
                  <Image
                    src={pillar.imageSrc}
                    alt={pillar.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Bullet Points */}
                <ul className="space-y-3 mb-8">
                  {pillar.bulletPoints.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-3">
                      <span
                        className="w-2 h-2 rounded-full mt-2 shrink-0"
                        style={{ backgroundColor: pillar.accentColor }}
                      />
                      <span className="text-gray-600 text-sm sm:text-base leading-relaxed">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA — links to pillar page section */}
                <a
                  href={`/strategicpillars${pillar.sectionId}`}
                  className="inline-flex items-center gap-2.5 text-sm font-semibold transition-colors duration-300 group/link"
                  style={{ color: pillar.accentColor }}
                >
                  Step Inside
                  <ArrowIcon color={pillar.accentColor} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Subheading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-center mt-16 lg:mt-24"
        >
          <div className="w-24 h-px bg-af-golden-brown/30 mx-auto -mb-12" />
          <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#4F6C8A] leading-snug italic">
            "United for a Sustainable Tomorrow"
          </p>
        </motion.div>

        {/* ─── Strategic Framework Write-up ─── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="mt-24 lg:mt-32 max-w-4xl mx-auto"
        >
          {/* Main Header */}
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 text-center">
            The Alliant Forge Three-Pillar Strategic Framework
          </h3>

          {/* Intro Paragraph */}
          <div className="space-y-6 text-gray-600 text-base sm:text-lg leading-relaxed mb-16">
            <p>
              At Alliant Forge, we turn ambition into measurable impact. Our strategic framework drives sustainable transformation by merging technical expertise with social empowerment. We pioneer <span className="font-semibold text-[#4F6C8A]">sustainable engineering</span> and <span className="font-semibold text-[#98A48B]">climate-adaptive design</span> to put women and youth at the center of STEM-driven development.
            </p>
            <p>
              We deliver these initiatives through excellence in <span className="font-semibold text-[#D5AA72]">project and program management</span>, ensuring every alliance we forge contributes directly to a more inclusive, resilient, and sustainable world.
            </p>
          </div>

          {/* Core Pillars & SDG Alignment Header */}
          <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-10 text-center">
            Our Core Pillars & SDG Alignment
          </h4>

          {/* Pillar Descriptions */}
          <div className="space-y-10 mb-16">
            {/* Empowerment */}
            <div className="border-l-4 border-[#D5AA72] pl-6">
              <h5 className="text-lg sm:text-xl font-bold text-[#D5AA72] mb-3">
                Empowerment & Education
              </h5>
              <p className="text-gray-600 text-base leading-relaxed">
                We close the skills gap by equipping women and youth with critical engineering competencies and building the diverse leadership that tomorrow demands.
              </p>
            </div>

            {/* Innovation */}
            <div className="border-l-4 border-[#4F6C8A] pl-6">
              <h5 className="text-lg sm:text-xl font-bold text-[#4F6C8A] mb-3">
                Innovation & Sustainable Growth
              </h5>
              <p className="text-gray-600 text-base leading-relaxed">
                We combine advanced technical expertise with climate-adaptive design solutions. Our projects safeguard clean water systems, drive industrial innovation, and implement scalable climate action.
              </p>
            </div>

            {/* Collaboration */}
            <div className="border-l-4 border-[#98A48B] pl-6">
              <h5 className="text-lg sm:text-xl font-bold text-[#98A48B] mb-3">
                Collaboration & Community Impact
              </h5>
              <p className="text-gray-600 text-base leading-relaxed">
                We leverage structured program management to unite local communities and global partners, transforming systemic urban and rural challenges into safe, shared success.
              </p>
            </div>

            {/* Global Alignment */}
            <div className="border-l-4 border-gray-300 pl-6">
              <h5 className="text-lg sm:text-xl font-bold text-gray-800 mb-3">
                Global Alignment, Local Impact
              </h5>
              <p className="text-gray-600 text-base leading-relaxed mb-4">
                Our work acts as a catalyst to bridge local action with global mandates, advancing:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4F6C8A] mt-2 shrink-0" />
                  <span><span className="font-semibold text-gray-800">South Africa's NDP 2030</span> - Driving domestic socioeconomic growth.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D5AA72] mt-2 shrink-0" />
                  <span><span className="font-semibold text-gray-800">African Union's Agenda 2063</span> - Supporting a unified, prosperous continent.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#98A48B] mt-2 shrink-0" />
                  <span><span className="font-semibold text-gray-800">European Union's Green Deal</span> - Connecting local actions to global climate goals.</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
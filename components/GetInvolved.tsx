"use client";

import { motion } from "framer-motion";

interface EngagementPath {
  title: string;
  description: string;
  cta: string;
  href: string;
  accentColor: string;
  bgPattern: string;
}

const paths: EngagementPath[] = [
  {
    title: "Make an Impact",
    description:
      "Your investment drives scholarships, infrastructure upgrades, and community development initiatives across the Global South. Each contribution generates tangible returns,  from advancing STEM education for young women and equipping youth with future-ready skills, to expanding renewable energy microgrids and strengthening local economies. Beyond physical infrastructure, your support also advances Nature-Based Solutions, restoring ecosystems, strengthening climate resilience, and creating sustainable livelihoods. Whether you choose a one-time investment or ongoing support, you are building enduring value and driving sustainable progress for communities. Building lasting change where it matters most.",
    cta: "Partner with Us",
    href: "#",
    accentColor: "#D5AA72",
    bgPattern: "radial-gradient(circle at 0% 100%, rgba(213,170,114,0.1) 0%, transparent 50%)",
  },
];

export default function GetInvolved() {
  return (
    <section id="contact" className="py-20 lg:py-32 bg-forge-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >

          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-[#4F6C8A]">
            Get Involved
          </h2>
          <p className="mt-4 text-lg text-forge-gray max-w-2xl mx-auto">
            Your generosity builds lasting change where it matters most.
          </p>
        </motion.div>

        {/* Single Card - Full Width */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="group relative rounded-2xl border border-forge-tan/20 overflow-hidden hover:shadow-xl transition-shadow duration-500"
          style={{ background: paths[0].bgPattern }}
        >
          <div className="p-8 lg:p-16">
            <div className="max-w-4xl mx-auto text-center">
              {/* Accent top bar */}
              <div
                className="w-12 h-1 rounded-full mb-8 mx-auto"
                style={{ backgroundColor: paths[0].accentColor }}
              />

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                {paths[0].title}
              </h3>

              <p className="text-forge-gray leading-relaxed mb-8 text-base sm:text-lg max-w-3xl mx-auto">
                {paths[0].description}
              </p>

              <a
                href={paths[0].href}
                className="inline-flex items-center gap-1 px-8 py-4 rounded-full text-white font-semibold text-base transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={{ backgroundColor: paths[0].accentColor }}
              >
                {paths[0].cta}
                <span className="transition-transform duration-300 group-hover:translate-x-2 ">
                  →
                </span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Commented out Partner With Us - uncomment when ready */}
        {/*
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="group relative rounded-2xl border border-forge-tan/20 overflow-hidden hover:shadow-xl transition-shadow duration-500"
            style={{ background: "radial-gradient(circle at 100% 0%, rgba(152,164,139,0.1) 0%, transparent 50%)" }}
          >
            <div className="p-8 lg:p-10">
              <div
                className="w-12 h-1 rounded-full mb-8"
                style={{ backgroundColor: "#98A48B" }}
              />
              <h3 className="text-2xl font-bold text-forge-dark mb-4">
                Partner With Us
              </h3>
              <p className="text-forge-gray leading-relaxed mb-8">
                Join our network of academic, industry, and government collaborators. Together, we can amplify impact and scale solutions across borders.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={{ backgroundColor: "#98A48B" }}
              >
                Explore Partnerships
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </motion.div>
        </div>
        */}
      </div>
    </section>
  );
}
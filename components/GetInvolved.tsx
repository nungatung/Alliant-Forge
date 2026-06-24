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
    title: "Volunteer",
    description:
      "Share your expertise with communities worldwide. From mentorship programs to on-the-ground project support, your skills can drive real change.",
    cta: "Apply to Volunteer",
    href: "#",
    accentColor: "#4F6C8A",
    bgPattern: "radial-gradient(circle at 100% 100%, rgba(79,108,138,0.1) 0%, transparent 50%)",
  },
  {
    title: "Donate",
    description:
      "Your contribution directly funds scholarships, infrastructure projects, and community development initiatives. Every dollar creates measurable impact.",
    cta: "Make a Donation",
    href: "#",
    accentColor: "#D5AA72",
    bgPattern: "radial-gradient(circle at 0% 100%, rgba(213,170,114,0.1) 0%, transparent 50%)",
  },
  {
    title: "Partner With Us",
    description:
      "Join our network of academic, industry, and government collaborators. Together, we can amplify impact and scale solutions across borders.",
    cta: "Explore Partnerships",
    href: "#",
    accentColor: "#98A48B",
    bgPattern: "radial-gradient(circle at 100% 0%, rgba(152,164,139,0.1) 0%, transparent 50%)",
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
          <span className="text-sm font-semibold tracking-widest uppercase text-forge-gold">
            Get Involved
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-forge-dark">
            Three Ways to Make an Impact
          </h2>
          <p className="mt-4 text-lg text-forge-gray max-w-2xl mx-auto">
            Whether you give time, funding, or expertise, there is a place for you 
            in the Alliant Forge community.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {paths.map((path, idx) => (
            <motion.div
              key={path.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="group relative rounded-2xl border border-forge-tan/20 overflow-hidden hover:shadow-xl transition-shadow duration-500"
              style={{ background: path.bgPattern }}
            >
              <div className="p-8 lg:p-10">
                {/* Accent top bar */}
                <div
                  className="w-12 h-1 rounded-full mb-8"
                  style={{ backgroundColor: path.accentColor }}
                />

                <h3 className="text-2xl font-bold text-forge-dark mb-4">
                  {path.title}
                </h3>

                <p className="text-forge-gray leading-relaxed mb-8">
                  {path.description}
                </p>

                <a
                  href={path.href}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  style={{ backgroundColor: path.accentColor }}
                >
                  {path.cta}
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
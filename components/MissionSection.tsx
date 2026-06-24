'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function MissionSection() {
  return (
    <section className="py-16 md:py-24 bg-af-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-af-muted-blue mb-6">
              What We Do
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Alliant Forge catalyzes sustainable development through innovation,
              collaboration, and empowerment. We bridge the gap between aspiration
              and action by connecting diverse stakeholders in pursuit of shared
              goals.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our work spans women and youth in STEM, renewable energy infrastructure,
              community development, strategic partnerships, and skills training—all
              rooted in the belief that lasting change emerges from collective effort
              and intentional innovation.
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
              alt="Our Mission"
              className="w-full h-auto rounded-2xl shadow-lg"
            />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-af-light-beige rounded-2xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
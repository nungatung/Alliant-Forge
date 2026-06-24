'use client';

import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

interface Stat {
  label: string;
  value: number;
  suffix: string;
  icon: string;
}

const stats: Stat[] = [
  {
    label: 'Communities Reached',
    value: 250,
    suffix: '+',
    icon: '🌍',
  },
  {
    label: 'Projects Completed',
    value: 45,
    suffix: '',
    icon: '✓',
  },
  {
    label: 'Lives Impacted',
    value: 50000,
    suffix: '+',
    icon: '👥',
  },
  {
    label: 'Partners Engaged',
    value: 120,
    suffix: '',
    icon: '🤝',
  },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [displayValue, setDisplayValue] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2;
    const interval = (duration * 1000) / value;
    let current = 0;

    const timer = setInterval(() => {
      current += 1;
      setDisplayValue(current);
      if (current >= value) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      onViewportEnter={() => setIsVisible(true)}
      viewport={{ once: true }}
      className="text-4xl md:text-5xl font-bold text-af-golden-brown"
    >
      {displayValue.toLocaleString()}
      {suffix}
    </motion.div>
  );
}

export default function ImpactStatsSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-af-muted-blue/5 to-af-muted-green/5">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-af-muted-blue mb-4">
            Our Impact By The Numbers
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Measurable change across communities, guided by data and driven by
            purpose.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow text-center"
            >
              <div className="text-5xl mb-4">{stat.icon}</div>
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <p className="text-gray-600 font-semibold mt-4">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface BlogPost {
  id: number;
  category: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  accentColor: string;
}

const posts: BlogPost[] = [
  {
    id: 1,
    category: 'STEM Education',
    title: 'Closing the Gender Gap in Engineering: A 2025 Progress Report',
    excerpt:
      'Our latest initiative has supported over 2,000 young women across Sub-Saharan Africa in pursuing engineering degrees.',
    imageUrl:
      'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=600&q=80',
    accentColor: '#4F6C8A',
  },
  {
    id: 2,
    category: 'Sustainable Infrastructure',
    title: 'Solar Microgrids Transforming Rural Communities',
    excerpt:
      'How decentralized renewable energy is creating resilient power networks in regions previously left in the dark.',
    imageUrl:
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80',
    accentColor: '#D5AA72',
  },
  {
    id: 3,
    category: 'Community Impact',
    title: 'From Local Projects to Global Movements',
    excerpt:
      'Three community-led initiatives that started small and are now reshaping policy at the national level.',
    imageUrl:
      'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&q=80',
    accentColor: '#98A48B',
  },
];

export default function BlogSection() {
  return (
    <section className="py-20 lg:py-32 bg-forge-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-forge-gold" />
            <span className="text-sm font-semibold tracking-widest uppercase text-forge-gold">
              Latest Insights
            </span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-forge-dark">
              From Our Blog
            </h2>
            <a
              href="#"
              className="text-sm font-semibold text-forge-blue hover:text-forge-dark transition-colors inline-flex items-center gap-2"
            >
              View All Articles
              <span>→</span>
            </a>
          </div>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="group"
            >
              <a href="#" className="block">
                {/* Image Container */}
                <div className="relative rounded-xl overflow-hidden mb-5 aspect-[16/10]">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${post.imageUrl})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forge-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Content Container */}
                <div className="space-y-3">
                  {/* Category Tag */}
                  <span
                    className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-white"
                    style={{ backgroundColor: post.accentColor }}
                  >
                    {post.category}
                  </span>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-forge-dark leading-snug group-hover:text-forge-blue transition-colors duration-300">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-sm text-forge-gray leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Arrow CTA */}
                  <div className="pt-2 flex items-center gap-2 text-sm font-semibold text-forge-blue group-hover:gap-3 transition-all duration-300">
                    <span>Read More</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </div>
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
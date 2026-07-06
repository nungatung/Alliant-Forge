'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface WorkItem {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const workItems: WorkItem[] = [
    {
        icon: (
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C6.5 6.253 2 10.753 2 16.5S6.5 26.5 12 26.5s10-4.5 10-10S17.5 6.253 12 6.253z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2v4m0 12v4M4.22 4.22l2.83 2.83m0 12.72l-2.83 2.83m15.56-15.56l2.83 2.83m0 12.72l-2.83 2.83" />
            </svg>
        ),
        title: 'Empower Innovation',
        description: 'Building pathways for women and youth to lead sustainable solutions through mentorship, training, and technology access.',
    },
    {
        icon: (
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
        ),
        title: 'Build Partnerships',
        description: 'Connecting academia, industry, government, and communities to create systemic change and close STEM gaps across sectors.',
    },
    {
        icon: (
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
        title: 'Drive Impact',
        description: 'Delivering green jobs, clean infrastructure, and sustainable economic opportunities that transform communities.',
    },
];

export default function HowWeWorkBanner() {
    return (
        <section className="relative w-full min-h-screen overflow-hidden">
            {/* Background Image with Parallax */}
            <div
                className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: 'url(/cape-town.jpg)',
                    backgroundAttachment: 'fixed',
                }}
            >
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/50" />
            </div>

            {/* Content */}
            <div className="relative z-10 min-h-screen flex items-center">
                <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
                    {/* Mission: What We Do */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16 sm:mb-24">
                        {/* Text Content */}
                        <motion.div
                            className="text-white"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                What We Do
                            </h2>
                            <p className="text-lg text-white/90 mb-4 leading-relaxed">
                                Alliant Forge catalyzes sustainable development through innovation,
                                collaboration, and empowerment. We bridge the gap between aspiration
                                and action by connecting diverse stakeholders in pursuit of shared
                                goals.
                            </p>
                            <p className="text-lg text-white/80 leading-relaxed">
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

                    {/* How We Work */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center">
                        {/* Left Side: Title + Description + Button */}
                        <motion.div
                            className="text-white"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                                How Alliant Forge Works
                            </h2>

                            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-lg leading-relaxed opacity-95">
                                We empower women and youth across Africa through innovation, sustainable infrastructure, and strategic partnerships. Creating pathways for inclusive growth and lasting impact.
                            </p>

                            <motion.button
                                className="px-6 sm:px-8 py-2.5 sm:py-3 border-2 border-white text-white rounded-lg font-semibold text-sm sm:text-base cursor-pointer"
                                whileHover={{
                                    backgroundColor: '#4F6C8A',
                                    color: '#FCFCFE',
                                    borderColor: '#4F6C8A',
                                }}
                                transition={{ duration: 0.3 }}
                            >
                                Learn More
                            </motion.button>
                        </motion.div>

                        {/* Right Side: Work Items */}
                        <div className="grid grid-cols-1 gap-4 sm:gap-6">
                            {workItems.map((item, idx) => (
                                <motion.div
                                    key={item.title}
                                    className="bg-white/10 backdrop-blur-sm rounded-lg p-5 sm:p-6 lg:p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    {/* Icon */}
                                    <div className="mb-3 sm:mb-4 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20">
                                        {item.icon}
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">{item.title}</h3>

                                    {/* Description */}
                                    <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                                        {item.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// app/contact/page.tsx
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        message: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // TODO: wire up your actual form handler (Resend, Formspree, etc.)
        await new Promise((resolve) => setTimeout(resolve, 1200));

        setIsSubmitting(false);
        setSubmitted(true);
        setFormData({ fullName: '', email: '', message: '' });
    };

    return (
        <main className="min-h-screen bg-[#FFFAFA] text-gray-900">
            <Navbar />

            {/* Spacer to clear the fixed navbar */}
            <div className="h-20 sm:h-24" />

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

                    {/* ─── Left Column ─── */}
                    <div className="flex flex-col gap-8">
                        {/* Icon */}
                        <div className="w-12 h-12 rounded-xl bg-white border border-gray-200 shadow-sm flex items-center justify-center mt-12 -mb-4">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="text-[#084898]"
                            >
                                <rect width="20" height="16" x="2" y="4" rx="2" />
                                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                            </svg>
                        </div>

                        {/* Heading */}
                        <div>
                            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900">
                                Contact us
                            </h1>
                            <p className="mt-4 text-lg text-gray-600 leading-relaxed max-w-md">
                                We are always looking for ways to improve our impact and forge new
                                alliances. Reach out and let us know how we can work together.
                            </p>
                        </div>

                        

                        {/* Together Image */}
                        <div className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
                            <Image
                                src="/together.webp"
                                alt="Diverse hands coming together in unity"
                                fill
                                sizes="(max-width: 1024px) 100vw, 400px"
                                className="object-cover"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                        </div>
                    </div>

                    {/* ─── Right Column: Form ─── */}
                    <div className="relative">
                        {/* Grid background pattern */}
                        <div
                            className="absolute inset-0 opacity-[0.06] pointer-events-none rounded-2xl"
                            style={{
                                backgroundImage:
                                    'linear-gradient(rgba(0,0,0,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.15) 1px, transparent 1px)',
                                backgroundSize: '32px 32px',
                            }}
                        />

                        <div className="relative bg-[#111111]/95 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 lg:p-10 mt-30">
                            {submitted ? (
                                <div className="flex flex-col items-center justify-center py-16 text-center">
                                    <div className="w-16 h-16 rounded-full bg-[#084898]/20 flex items-center justify-center mb-6">
                                        <svg
                                            width="32"
                                            height="32"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="#084898"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M20 6 9 17l-5-5" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-semibold text-white mb-2">
                                        Message sent!
                                    </h3>
                                    <p className="text-gray-400">
                                        We&apos;ll get back to you as soon as possible.
                                    </p>
                                    <button
                                        onClick={() => setSubmitted(false)}
                                        className="mt-6 text-sm text-[#084898] hover:text-white transition-colors"
                                    >
                                        Send another message
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                                    {/* Full name */}
                                    <div className="flex flex-col gap-2">
                                        <label
                                            htmlFor="fullName"
                                            className="text-sm font-medium text-gray-300"
                                        >
                                            Full name
                                        </label>
                                        <input
                                            id="fullName"
                                            name="fullName"
                                            type="text"
                                            required
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            placeholder="Your name"
                                            className="w-full rounded-lg bg-[#1a1a1a] border border-white/10 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#084898]/50 focus:border-[#084898]/50 transition-all"
                                        />
                                    </div>

                                    {/* Email */}
                                    <div className="flex flex-col gap-2">
                                        <label
                                            htmlFor="email"
                                            className="text-sm font-medium text-gray-300"
                                        >
                                            Email Address
                                        </label>
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="you@example.com"
                                            className="w-full rounded-lg bg-[#1a1a1a] border border-white/10 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#084898]/50 focus:border-[#084898]/50 transition-all"
                                        />
                                    </div>

                                    {/* Message */}
                                    <div className="flex flex-col gap-2">
                                        <label
                                            htmlFor="message"
                                            className="text-sm font-medium text-gray-300"
                                        >
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            required
                                            rows={5}
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="How can we work together?"
                                            className="w-full rounded-lg bg-[#1a1a1a] border border-white/10 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#084898]/50 focus:border-[#084898]/50 transition-all resize-none"
                                        />
                                    </div>

                                    {/* Submit */}
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="self-start inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white text-black text-sm font-semibold hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 cursor-pointer"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <svg
                                                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-black"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <circle
                                                        className="opacity-25"
                                                        cx="12"
                                                        cy="12"
                                                        r="10"
                                                        stroke="currentColor"
                                                        strokeWidth="4"
                                                    />
                                                    <path
                                                        className="opacity-75"
                                                        fill="currentColor"
                                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                    />
                                                </svg>
                                                Sending...
                                            </>
                                        ) : (
                                            'Submit'
                                        )}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
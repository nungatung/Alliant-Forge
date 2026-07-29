// app/donate/page.tsx
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

type Tab = 'funds' | 'inkind';

const presetAmounts = [25, 50, 100, 150];

export default function DonatePage() {
    const currentYear = new Date().getFullYear();
    const [activeTab, setActiveTab] = useState<Tab>('funds');
    const [fundStep, setFundStep] = useState<1 | 2>(1);
    const [frequency, setFrequency] = useState<'once' | 'monthly'>('once');
    const [selectedAmount, setSelectedAmount] = useState<number | null>(25);
    const [customAmount, setCustomAmount] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const [donorInfo, setDonorInfo] = useState({
        firstName: '',
        lastName: '',
        email: '',
        cardNumber: '',
        expiry: '',
        cvc: '',
    });

    const [partnerInfo, setPartnerInfo] = useState({
        companyName: '',
        contactName: '',
        email: '',
        phone: '',
        serviceType: '',
        description: '',
    });

    const getAmount = () => {
        if (selectedAmount === null) {
            const parsed = parseFloat(customAmount);
            return isNaN(parsed) ? 0 : parsed;
        }
        return selectedAmount;
    };

    const handleDonorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDonorInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handlePartnerChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setPartnerInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const canProceedToStep2 = () => {
        return (
            getAmount() > 0 &&
            donorInfo.firstName.trim() !== '' &&
            donorInfo.lastName.trim() !== '' &&
            donorInfo.email.trim() !== ''
        );
    };

    const handleNext = (e: React.FormEvent) => {
        e.preventDefault();
        if (canProceedToStep2()) {
            setFundStep(2);
        }
    };

    const handleConfirmDonation = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        await new Promise((resolve) => setTimeout(resolve, 1200));
        setIsSubmitting(false);
        setSubmitted(true);
    };

    const handleInKindSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        await new Promise((resolve) => setTimeout(resolve, 1200));
        setIsSubmitting(false);
        setSubmitted(true);
    };

    const reset = () => {
        setSubmitted(false);
        setFundStep(1);
        setSelectedAmount(25);
        setCustomAmount('');
        setDonorInfo({
            firstName: '',
            lastName: '',
            email: '',
            cardNumber: '',
            expiry: '',
            cvc: '',
        });
        setPartnerInfo({
            companyName: '',
            contactName: '',
            email: '',
            phone: '',
            serviceType: '',
            description: '',
        });
    };

    return (
        <main className="min-h-screen relative">
            {/* Full-page background image */}
            <div className="fixed inset-0 z-0">
                <Image
                    src="/cpt-backdrop.webp"
                    alt="Sustainable infrastructure and natural landscape"
                    fill
                    className="object-cover"
                    sizes="100vw"
                    priority
                />
                <div className="absolute inset-0 bg-black/50" />
            </div>

            {/* ─── Top Left: Logo + Home ─── */}
            <div className="absolute top-4 left-4 sm:top-6 sm:left-8 z-20">
                <Link href="/" className="group inline-flex flex-col gap-1">
                    <div
                        className="relative"
                        style={{ width: 'clamp(240px, 32vw, 420px)', height: 'clamp(100px, 20vw, 180px)' }}
                    >
                        <Image
                            src="/AF logo-2.png"
                            alt="Alliant Forge"
                            fill
                            className="object-contain object-left"
                            priority
                        />
                    </div>
                </Link>
            </div>

            <div className="relative z-10">
                {/* Spacer for logo */}
                <div className="h-36 sm:h-44" />

                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">

                        {/* ─── Left: Form Card ─── */}
                        <div className="relative">
                            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">

                                {/* Tabs */}
                                <div className="flex border-b border-gray-100">
                                    <button
                                        onClick={() => { setActiveTab('funds'); reset(); }}
                                        className={`flex-1 py-4 text-sm font-semibold text-center transition-colors duration-200 cursor-pointer ${activeTab === 'funds'
                                            ? 'text-[#084898] border-b-2 border-[#084898] bg-[#084898]/5'
                                            : 'text-gray-500 hover:text-gray-700'
                                            }`}
                                    >
                                        Donate Funds
                                    </button>
                                    <button
                                        onClick={() => { setActiveTab('inkind'); reset(); }}
                                        className={`flex-1 py-4 text-sm font-semibold text-center transition-colors duration-200 cursor-pointer ${activeTab === 'inkind'
                                            ? 'text-[#084898] border-b-2 border-[#084898] bg-[#084898]/5'
                                            : 'text-gray-500 hover:text-gray-700'
                                            }`}
                                    >
                                        Partner In-Kind
                                    </button>
                                </div>

                                <div className="p-6 sm:p-8">
                                    {submitted ? (
                                        <div className="flex flex-col items-center justify-center py-12 text-center">
                                            <div className="w-16 h-16 rounded-full bg-[#084898]/10 flex items-center justify-center mb-6">
                                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#084898" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M20 6 9 17l-5-5" />
                                                </svg>
                                            </div>
                                            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                                                {activeTab === 'funds' ? 'Thank you!' : 'Interest received!'}
                                            </h3>
                                            <p className="text-gray-500 max-w-sm">
                                                {activeTab === 'funds'
                                                    ? 'Your generosity helps us forge sustainable alliances worldwide. We will redirect you to payment processing shortly.'
                                                    : 'We appreciate your willingness to partner with us. Our team will reach out to discuss how we can collaborate.'}
                                            </p>
                                            <button
                                                onClick={reset}
                                                className="mt-6 text-sm text-[#084898] hover:underline font-medium"
                                            >
                                                {activeTab === 'funds' ? 'Make another donation' : 'Submit another inquiry'}
                                            </button>
                                        </div>
                                    ) : activeTab === 'funds' ? (
                                        <form onSubmit={fundStep === 1 ? handleNext : handleConfirmDonation} className="flex flex-col gap-6">
                                            {fundStep === 1 ? (
                                                <>
                                                    {/* Frequency toggle */}
                                                    <div className="flex rounded-lg bg-gray-100 p-1">
                                                        <button
                                                            type="button"
                                                            onClick={() => setFrequency('once')}
                                                            className={`flex-1 py-2 text-sm font-medium rounded-md transition-all cursor-pointer ${frequency === 'once'
                                                                ? 'bg-white text-gray-900 shadow-sm'
                                                                : 'text-gray-500 hover:text-gray-700'
                                                                }`}
                                                        >
                                                            Give once
                                                        </button>
                                                        <button
                                                            type="button"
                                                            onClick={() => setFrequency('monthly')}
                                                            className={`flex-1 py-2 text-sm font-medium rounded-md transition-all cursor-pointer ${frequency === 'monthly'
                                                                ? 'bg-white text-gray-900 shadow-sm'
                                                                : 'text-gray-500 hover:text-gray-700'
                                                                }`}
                                                        >
                                                            Give monthly
                                                        </button>
                                                    </div>

                                                    {/* Amount grid */}
                                                    <div className="grid grid-cols-4 gap-3">
                                                        {presetAmounts.map((amt) => (
                                                            <button
                                                                key={amt}
                                                                type="button"
                                                                onClick={() => { setSelectedAmount(amt); setCustomAmount(''); }}
                                                                className={`py-3 rounded-lg text-sm font-semibold border transition-all cursor-pointer ${selectedAmount === amt
                                                                    ? 'bg-[#084898] text-white border-[#084898]'
                                                                    : 'bg-white text-gray-700 border-gray-200 hover:border-[#084898]/50'
                                                                    }`}
                                                            >
                                                                ${amt}
                                                            </button>
                                                        ))}
                                                    </div>

                                                    {/* Custom amount */}
                                                    <div className="relative">
                                                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm">$</span>
                                                        <input
                                                            type="number"
                                                            min="1"
                                                            placeholder="Other amount"
                                                            value={customAmount}
                                                            onChange={(e) => { setCustomAmount(e.target.value); setSelectedAmount(null); }}
                                                            className="w-full rounded-lg border border-gray-200 bg-white pl-8 pr-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#084898]/30 focus:border-[#084898] transition-all"
                                                        />
                                                    </div>

                                                    {/* Divider */}
                                                    <div className="h-px bg-gray-100" />

                                                    {/* Donor info */}
                                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                        <input
                                                            type="text"
                                                            name="firstName"
                                                            required
                                                            placeholder="First name"
                                                            value={donorInfo.firstName}
                                                            onChange={handleDonorChange}
                                                            className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#084898]/30 focus:border-[#084898] transition-all"
                                                        />
                                                        <input
                                                            type="text"
                                                            name="lastName"
                                                            required
                                                            placeholder="Last name"
                                                            value={donorInfo.lastName}
                                                            onChange={handleDonorChange}
                                                            className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#084898]/30 focus:border-[#084898] transition-all"
                                                        />
                                                    </div>
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        required
                                                        placeholder="Email address"
                                                        value={donorInfo.email}
                                                        onChange={handleDonorChange}
                                                        className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#084898]/30 focus:border-[#084898] transition-all"
                                                    />

                                                    {/* Next CTA */}
                                                    <button
                                                        type="submit"
                                                        disabled={!canProceedToStep2()}
                                                        className="w-full py-3.5 rounded-lg bg-[#084898] text-white text-sm font-semibold hover:bg-[#063a7a] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 cursor-pointer"
                                                    >
                                                        Next
                                                    </button>
                                                </>
                                            ) : (
                                                <>
                                                    {/* Back button */}
                                                    <button
                                                        type="button"
                                                        onClick={() => setFundStep(1)}
                                                        className="self-start flex items-center gap-1.5 text-sm text-gray-500 hover:text-[#084898] transition-colors cursor-pointer"
                                                    >
                                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                            <path d="M19 12H5M12 19l-7-7 7-7" />
                                                        </svg>
                                                        Back
                                                    </button>

                                                    {/* Summary */}
                                                    <div className="rounded-lg bg-gray-50 border border-gray-100 p-4 space-y-2">
                                                        <div className="flex justify-between text-sm">
                                                            <span className="text-gray-500">Amount</span>
                                                            <span className="font-semibold text-gray-900">${getAmount()} {frequency === 'monthly' ? '/ month' : ''}</span>
                                                        </div>
                                                        <div className="flex justify-between text-sm">
                                                            <span className="text-gray-500">Donor</span>
                                                            <span className="font-semibold text-gray-900">{donorInfo.firstName} {donorInfo.lastName}</span>
                                                        </div>
                                                        <div className="flex justify-between text-sm">
                                                            <span className="text-gray-500">Email</span>
                                                            <span className="font-semibold text-gray-900">{donorInfo.email}</span>
                                                        </div>
                                                    </div>

                                                    {/* Divider */}
                                                    <div className="h-px bg-gray-100" />

                                                    {/* Card info */}
                                                    <div className="space-y-4">
                                                        <input
                                                            type="text"
                                                            name="cardNumber"
                                                            required
                                                            placeholder="Card number"
                                                            value={donorInfo.cardNumber}
                                                            onChange={handleDonorChange}
                                                            className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#084898]/30 focus:border-[#084898] transition-all"
                                                        />
                                                        <div className="grid grid-cols-2 gap-4">
                                                            <input
                                                                type="text"
                                                                name="expiry"
                                                                required
                                                                placeholder="MM / YY"
                                                                value={donorInfo.expiry}
                                                                onChange={handleDonorChange}
                                                                className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#084898]/30 focus:border-[#084898] transition-all"
                                                            />
                                                            <input
                                                                type="text"
                                                                name="cvc"
                                                                required
                                                                placeholder="CVC"
                                                                value={donorInfo.cvc}
                                                                onChange={handleDonorChange}
                                                                className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#084898]/30 focus:border-[#084898] transition-all"
                                                            />
                                                        </div>
                                                    </div>

                                                    <p className="text-xs text-gray-400 text-center">
                                                        Your payment information is secure. All transactions are encrypted.
                                                    </p>

                                                    {/* Confirm CTA */}
                                                    <button
                                                        type="submit"
                                                        disabled={isSubmitting}
                                                        className="w-full py-3.5 rounded-lg bg-[#084898] text-white text-sm font-semibold hover:bg-[#063a7a] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 cursor-pointer"
                                                    >
                                                        {isSubmitting ? 'Processing...' : `Confirm Donation $${getAmount()}`}
                                                    </button>
                                                </>
                                            )}
                                        </form>
                                    ) : (
                                        <form onSubmit={handleInKindSubmit} className="flex flex-col gap-6">
                                            <input
                                                type="text"
                                                name="companyName"
                                                required
                                                placeholder="Company / Organization name"
                                                value={partnerInfo.companyName}
                                                onChange={handlePartnerChange}
                                                className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#084898]/30 focus:border-[#084898] transition-all"
                                            />

                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                <input
                                                    type="text"
                                                    name="contactName"
                                                    required
                                                    placeholder="Contact person"
                                                    value={partnerInfo.contactName}
                                                    onChange={handlePartnerChange}
                                                    className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#084898]/30 focus:border-[#084898] transition-all"
                                                />
                                                <input
                                                    type="email"
                                                    name="email"
                                                    required
                                                    placeholder="Email address"
                                                    value={partnerInfo.email}
                                                    onChange={handlePartnerChange}
                                                    className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#084898]/30 focus:border-[#084898] transition-all"
                                                />
                                            </div>

                                            <input
                                                type="tel"
                                                name="phone"
                                                placeholder="Phone number"
                                                value={partnerInfo.phone}
                                                onChange={handlePartnerChange}
                                                className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#084898]/30 focus:border-[#084898] transition-all"
                                            />

                                            <input
                                                type="text"
                                                name="serviceType"
                                                placeholder="Service / expertise offered (e.g. Engineering, Legal, Logistics)"
                                                value={partnerInfo.serviceType}
                                                onChange={handlePartnerChange}
                                                className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#084898]/30 focus:border-[#084898] transition-all"
                                            />

                                            <textarea
                                                name="description"
                                                required
                                                rows={4}
                                                placeholder="Tell us more about how your organization can partner with Alliant Forge..."
                                                value={partnerInfo.description}
                                                onChange={handlePartnerChange}
                                                className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#084898]/30 focus:border-[#084898] transition-all resize-none"
                                            />

                                            <button
                                                type="submit"
                                                disabled={isSubmitting}
                                                className="w-full py-3.5 rounded-lg bg-[#084898] text-white text-sm font-semibold hover:bg-[#063a7a] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 cursor-pointer"
                                            >
                                                {isSubmitting ? 'Sending...' : 'Submit Inquiry'}
                                            </button>
                                        </form>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* ─── Right: Text over background ─── */}
                        <div className="hidden lg:flex flex-col justify-center h-full py-12">
                            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
                                Forge a sustainable future with us.
                            </h2>
                            <p className="text-gray-200 text-lg leading-relaxed mb-8">
                                Your support whether financial or through expert services continue to fuel the alliances that contribute to resilient communities and a healthier planet.
                            </p>
                            <div className="flex flex-col gap-4 text-base text-gray-300">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#9cb681]">
                                            <path d="M12 2v20M2 12h20" />
                                        </svg>
                                    </div>
                                    <span>Direct impact on community infrastructure</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#D5AA72]">
                                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                            <circle cx="9" cy="7" r="4" />
                                            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                                            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                        </svg>
                                    </div>
                                    <span>Cross-sector partnerships that last</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#FCFCFE]">
                                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                        </svg>
                                    </div>
                                    <span>Transparent, accountable stewardship</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ─── Bottom Info Section ─── */}
                <div className="bg-[#FCFCFE] border-t border-gray-200 mt-30">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">

                            {/* Questions? */}
                            <div className="space-y-4">
                                <h4 className="text-sm font-bold uppercase tracking-wider text-gray-500">
                                    Questions?
                                </h4>
                                <div className="flex flex-col gap-2 text-md text-[#084898]">
                                    <a href="#" className="hover:text-[#4F6C8A] transition-colors w-fit">
                                        Donation FAQ
                                    </a>
                                    <p>
                                        <a href="mailto:info@alliantforge.org" className="hover:text-[#4F6C8A] transition-colors">
                                            info@alliantforge.org
                                        </a>
                                    </p>
                                    <p>
                                        <a href="tel:+15551234567" className="hover:text-[#4F6C8A] transition-colors">
                                            +1 (555) 123-4567
                                        </a>
                                    </p>
                                </div>
                            </div>

                            {/* Other ways to donate */}
                            <div className="space-y-4">
                                <h4 className="text-sm font-bold uppercase tracking-wider text-gray-500">
                                    Other ways to donate
                                </h4>
                                <div className="flex flex-col gap-2 text-md text-[#084898]">
                                    <a href="#" className="hover:text-[#4F6C8A] transition-colors w-fit">
                                        Donate by bank transfer
                                    </a>
                                </div>
                            </div>

                            <div className="hidden md:block" />
                        </div>

                        {/* Bottom bar */}
                        <div className="border-t border-gray-200 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
                            <span>Copyright {currentYear} © Alliant Forge. All Rights Reserved.</span>
                            <a href="#" className="hover:text-[#084898] transition-colors duration-300">
                                Privacy Policy
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
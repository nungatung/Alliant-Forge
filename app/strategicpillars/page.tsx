'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// ─── Reusable Manifesto Card ───
interface ManifestoCardProps {
    icon: React.ReactNode;
    tagline: string;
    description: string;
    accentColor: string;
    delay?: number;
}

function ManifestoCard({ icon, tagline, description, accentColor, delay = 0 }: ManifestoCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            className="group relative"
        >
            <div
                className="relative h-full rounded-xl overflow-hidden transition-all duration-400 group-hover:-translate-y-1 group-hover:shadow-lg"
                style={{ backgroundColor: '#F7F6F3' }}
            >
                {/* Layout: accent bar + content */}
                <div className="flex h-full">
                    {/* Left accent bar */}
                    <div
                        className="w-1 shrink-0 transition-all duration-300 group-hover:w-1.5"
                        style={{ backgroundColor: accentColor }}
                    />

                    {/* Content */}
                    <div className="p-5 sm:p-6 flex flex-col">
                        {/* Icon */}
                        <div
                            className="w-11 h-11 rounded-lg flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-105"
                            style={{ backgroundColor: `${accentColor}15` }}
                        >
                            {icon}
                        </div>

                        {/* Tagline */}
                        <h3
                            className="text-sm sm:text-base font-bold mb-2 leading-snug"
                            style={{ color: accentColor }}
                        >
                            {tagline}
                        </h3>

                        {/* Description */}
                        <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

// ─── Innovation & Infrastructure Icons ───
// Leaf — "Green technologies for a thriving planet"
const GreenTechIcon = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#98A48B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 8C8 10 5.9 16.17 3.82 21.34" />
        <path d="M2 12s4.5-2 8.5-2c6 0 9.5-5 9.5-5s-1.5 10-9.5 10c-4 0-8.5-3-8.5-3z" />
    </svg>
);

// Gear/Cog — "Empowering smart, sustainable industries"
const SmartIndustryIcon = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4F6C8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
);

// Lightbulb — "Innovating with purpose and impact"
const InnovationIcon = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#D5AA72" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18h6" />
        <path d="M10 22h4" />
        <path d="M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2z" />
    </svg>
);

// Handshake — "Global partnerships for shared prosperity"
const PartnershipIcon = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#98A48B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 17a4 4 0 0 0 8 0c0-2-2-3.5-4-5" />
        <path d="M13 17a4 4 0 0 1-8 0c0-2 2-3.5 4-5" />
        <path d="M7 7l4-4 4 4" />
        <path d="M17 7l-4-4" />
        <path d="M3 11l4-4" />
        <path d="M21 11l-4-4" />
    </svg>
);

// ─── Collaboration Card (off-white with accent stripe) ───
interface CollaborationCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    accentColor: string;
    delay?: number;
}

function CollaborationCard({ icon, title, description, accentColor, delay = 0 }: CollaborationCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            className="group relative flex-1 min-w-[200px]"
        >
            <div
                className="relative h-full rounded-xl overflow-hidden transition-all duration-400 group-hover:-translate-y-1 group-hover:shadow-lg"
                style={{ backgroundColor: '#F7F6F3' }}
            >
                {/* Top accent stripe */}
                <div
                    className="h-1 w-full transition-all duration-300"
                    style={{ backgroundColor: accentColor }}
                />

                <div className="p-5 sm:p-6 text-center">
                    {/* Centered Icon */}
                    <div
                        className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-5 transition-all duration-300 group-hover:scale-105 group-hover:shadow-md"
                        style={{ backgroundColor: `${accentColor}14`, border: `1.5px solid ${accentColor}25` }}
                    >
                        {icon}
                    </div>

                    {/* Title */}
                    <h3
                        className="text-sm sm:text-base font-bold mb-2 leading-snug"
                        style={{ color: accentColor }}
                    >
                        {title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm leading-relaxed text-gray-500">
                        {description}
                    </p>
                </div>
            </div>
        </motion.div>
    );
}

// ─── Collaboration & Community Impact Icons ───
// Seedling/Heart-in-hand — "Local Empowerment for Lasting Change"
const LocalEmpowermentIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D5AA72" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22V12" />
        <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
        <path d="M6 16a6 6 0 0 1 12 0" />
    </svg>
);

// Linked circle/community — "Uniting for Common Goals"
const UnitingIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#A85D6A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="8" cy="8" r="5" />
        <circle cx="16" cy="16" r="5" />
        <path d="M12.5 3.5l-1 1" />
    </svg>
);

// Puzzle piece — "Bridging Sectors, Creating Solutions"
const BridgingIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6B8F6B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 7h3a1 1 0 0 0 1-1V4" />
        <path d="M20 7h-3a1 1 0 0 1-1-1V4" />
        <path d="M4 17h3a1 1 0 0 1 1 1v2" />
        <path d="M20 17h-3a1 1 0 0 0-1 1v2" />
        <rect x="2" y="7" width="20" height="10" rx="2" />
    </svg>
);

// Globe with connection nodes — "Global Knowledge, Local Progress"
const GlobalKnowledgeIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4F6C8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        <circle cx="12" cy="5" r="1" fill="#4F6C8A" />
        <circle cx="18" cy="12" r="1" fill="#4F6C8A" />
        <circle cx="7" cy="17" r="1" fill="#4F6C8A" />
    </svg>
);

// ─── Main Page Component ───
export default function PillarsPage() {
    return (
        <main className="bg-[#FCFCFE]">

            <Navbar />

            {/* ═══════════════════════════════════════
          PILLAR 2: Empowerment & Education (FIRST)
          ═══════════════════════════════════════ */}
            <section id="empowerment-and-education" className="relative">

                {/* ─── Section Header ─── */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-52 lg:pt-52 pb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                            Empowerment & Education
                        </h1>
                        <div className="w-20 h-1 mt-4 rounded-full" style={{ backgroundColor: '#D5AA72' }} />
                    </motion.div>
                </div>

                {/* ─── Content with text wrapping around floated images ─── */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 lg:pb-28">
                    <div className="relative">

                        {/* Images — floated left, overlapping layout */}
                        <div className="float-left mr-8 mb-8 w-full sm:w-[380px] lg:w-[500px]">
                            <div className="relative">
                                {/* Top image — offset right */}
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6 }}
                                    className="relative z-10 ml-16 sm:ml-20"
                                >
                                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                                        <Image
                                            src="/pillars/empowerment-1.webp"
                                            alt="Empowerment initiative"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </motion.div>

                                {/* Bottom image — offset left, overlapping */}
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.15 }}
                                    className="relative z-20 -mt-4 sm:-mt-4 mr-16 sm:mr-20"
                                >
                                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                                        <Image
                                            src="/pillars/empowerment-2.webp"
                                            alt="Education program"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                        {/* Text content — flows around images */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-gray-600 leading-relaxed space-y-6"
                        >
                            <p className="text-lg sm:text-xl font-medium text-gray-800 leading-relaxed">
                                In every community, sparks of brilliance wait to be <span className="text-[#CC7303] italic">ignited</span>. A young woman dreams of designing bridges that connect people. A youth learns to repair machines, turning raw skill into a livelihood. These stories are not isolated; they are the <span className="text-[#094AA0] font-bold">heartbeat of progress.</span>

                            </p>

                            <p className="text-gray-600">
                                <span className="text-gray-600 font-bold">Empowerment and Education</span> nurture those sparks by opening doors to classrooms where women and youth engage in science and engineering, and to workshops where they master trades like plumbing, welding, carpentry, and electrical installation. It blends theory with practice, guided by mentorship, so that academic excellence and technical craftsmanship stand side by side.

                            </p>

                            <p className="text-gray-600">
                                <span className="font-bold text-gray-600">Alliant Forge</span> understands that inclusive education is the foundation of empowerment. We build on this foundation by partnering with community leaders, trade schools, colleges/universities to support and facilitate the establishment of community learning opportunities and hubs. By establishing community learning channels, we make science and technology accessible to all.
                            </p>

                            <p className="text-gray-600">
                                Future efforts for <span className="font-bold text-gray-600">Alliant Forge</span> include offering scholarships and bursaries targeting disadvantaged youth with the aim of removing financial barriers.

                            </p>

                            <p className="text-gray-600">
                                Our partnership with industry specialists and support services focuses on applied learning through projects, apprenticeships, and internships, ensuring that theory is always connected to practice. Mentorship programs embedded in schools and universities connect learners with professional firms, offering on-the-job mentoring, learning, guidance and inspiration that sustain a demonstrated path of lifelong learning.

                            </p>

                            <p className="text-gray-600">
                                We stand for equality that promotes a future of opportunity for women and youth. This is achieved by challenging stereotypes and encouraging participation in STEM and trades. Focused leadership incubators prepare women and youth for entrepreneurial and managerial roles, while strong anti-discrimination policies guarantee fairness in training centers and workplaces. Visibility campaigns highlight successful women engineers, artisans, and innovators, inspiring others to pursue similar paths and reinforcing the message that equal voices lead to equal opportunities.

                            </p>
                            <p className="text-gray-600">
                                We recognize that collaborative initiatives between universities, industry, and local communities foster vital knowledge exchange and practical problem-solving. By expanding digital literacy and advanced STEM training, we prepare women and youth for emerging technologies like artificial intelligence, robotics, and renewable energy. Furthermore, supportive policy frameworks that prioritize these groups within industrial development ensure empowerment is deeply embedded into the fabric of industry and infrastructure growth.


                            </p>
                            <p className="text-gray-600">
                                At the heart of the collaborative work between <span className="font-bold text-gray-600">Alliant Forge</span> and its partners, we embrace the vision and implementation of the United Nations Sustainable Development Goals (SDGs).


                            </p>
                        </motion.div>

                        {/* Clear float */}
                        <div className="clear-both" />
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════
          PILLAR 1: Innovation & Infrastructure
          ═══════════════════════════════════════ */}
            <section id="innovation-and-accelerating-infrastructure-stewardship" className="relative border-t border-gray-100 bg-[#FAFAFA] scroll-mt-24 mt-20">

                {/* ─── Section Header ─── */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 lg:pt-28 pb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                            Innovation & Accelerating Infrastructure Stewardship
                        </h1>
                        <div className="w-20 h-1 mt-4 rounded-full" style={{ backgroundColor: '#4F6C8A' }} />
                    </motion.div>
                </div>

                {/* ─── Content with text wrapping around cards ─── */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 lg:pb-28">
                    <div className="relative">

                        {/* Cards — floated right */}
                        <div className="float-right ml-8 mb-8 w-full sm:w-[340px] lg:w-[520px]">
                            <div className="grid grid-cols-2 gap-4">
                                <ManifestoCard
                                    icon={<GreenTechIcon />}
                                    tagline="Green technologies for a thriving planet."
                                    description="Developing renewable energy solutions and eco-friendly innovations that protect our environment."
                                    accentColor="#98A48B"
                                    delay={0}
                                />
                                <ManifestoCard
                                    icon={<SmartIndustryIcon />}
                                    tagline="Empowering smart, sustainable industries."
                                    description="Sustainable growth reaches economies that use efficient safer advantaging of an estimable economy."
                                    accentColor="#4F6C8A"
                                    delay={0.1}
                                />
                                <ManifestoCard
                                    icon={<InnovationIcon />}
                                    tagline="Innovating with purpose and impact."
                                    description="Creating circular solutions that reduce waste and drive sustainable practices."
                                    accentColor="#D5AA72"
                                    delay={0.2}
                                />
                                <ManifestoCard
                                    icon={<PartnershipIcon />}
                                    tagline="Global partnerships for shared prosperity."
                                    description="Collaborating across borders to drive inclusive and equitable progress."
                                    accentColor="#98A48B"
                                    delay={0.3}
                                />
                            </div>
                        </div>

                        {/* Text content — flows around cards */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-gray-600 leading-relaxed space-y-6"
                        >
                            <p className="text-lg sm:text-xl font-medium text-gray-800 leading-relaxed">
                                Building a future where technology and sustainability go hand in hand. Innovation is the spark that transforms ideas into impact, and sustainable growth ensures that progress endures for generations. Together, they form the blueprint for <span className="text-[#094AA0] font-bold">resilient communities,</span> <span className="text-[#CC7303] font-bold">thriving industries,</span> <span className="text-[#537D1E] font-bold">and a planet that prospers without compromise.</span>
                            </p>

                            <p className="text-gray-600">
                                Innovation begins with clean energy and responsible engineering. Through solar integration, energy-efficient design, and green construction practices, we reduce carbon footprints and create infrastructure that harmonizes with nature. We partner with solar innovators and engineers to embed renewable energy systems into schools, clinics, and public facilities, ensuring clean energy reaches those who need it most. To guarantee affordability and reliability, we support blended financing models that combine donor funding, government subsidies, and private investment. Community energy cooperatives and local technician training programs ensure long-term maintenance, creating jobs while sustaining resilience.
                            </p>

                            <p className="text-gray-600">
                                Sustainable growth depends on intelligent design and efficient resource use. By advancing smart civil engineering practices, such as modular construction, digital modeling, and low-impact materials, we create infrastructure that endures environmental and economic challenges.
                            </p>

                            <p className="text-gray-600">
                                By aligning with construction firms and technology providers to pilot projects that demonstrate lifecycle assessment and green certification. To build capacity, we facilitate technical training programs with universities and vocational colleges, embedding BIM and modular construction into curricula. Apprenticeships with industry partners give young engineers and artisans hands-on experience, while certification pathways ensure credibility and encourage widespread adoption of sustainable practices.
                            </p>

                            <p className="text-gray-600">
                                Innovation must serve both people and the planet. Wastewater treatment and recycling systems exemplify how engineering can transform waste into opportunity. <span className="font-bold">Nature-based solutions (NBS)</span> like constructed wetlands, green roofs, and permeable pavements restore ecosystems while managing urban challenges.
                            </p>

                            <p className="text-gray-600">
                                We collaborate with municipalities and environmental scientists to integrate circular water management into infrastructure projects. Community stewardship models involve local residents in the design and upkeep of NBS systems, fostering ownership and accountability. Awareness campaigns highlight the health and environmental benefits of wastewater recycling, while municipal integration ensures that NBS is embedded into urban planning codes, with budgets allocated for long-term maintenance.
                            </p>
                        </motion.div>

                        {/* Clear float */}
                        <div className="clear-both" />
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════
          PILLAR 3: Collaboration & Community Impact
          ═══════════════════════════════════════ */}
            <section id="collaboration-and-community-impact" className="relative border-t border-gray-100 bg-[#FCFCFE] scroll-mt-24 mt-20">

                {/* ─── Section Header ─── */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 lg:pt-28 pb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
                            Collaboration & Community Impact
                        </h1>
                        <div className="w-20 h-1 mt-4 rounded-full" style={{ backgroundColor: '#98A48B' }} />
                    </motion.div>
                </div>

                {/* ─── 4 Collaboration Cards in a Row ─── */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
                    <div className="flex flex-col sm:flex-row gap-3 lg:gap-4">
                        <CollaborationCard
                            icon={<LocalEmpowermentIcon />}
                            title="Local Empowerment for Lasting Change."
                            description="Strengthening communities through skills development, resources, and local leadership for self-sustaining progress."
                            accentColor="#D5AA72"
                            delay={0}
                        />
                        <CollaborationCard
                            icon={<UnitingIcon />}
                            title="Uniting for Common Goals."
                            description="Building alliances that promote inclusive development and shared success across communities."
                            accentColor="#A85D6A"
                            delay={0.1}
                        />
                        <CollaborationCard
                            icon={<BridgingIcon />}
                            title="Bridging Sectors, Creating Solutions."
                            description="Connecting NGOs, businesses, and government to design practical solutions that drive measurable impact."
                            accentColor="#6B8F6B"
                            delay={0.2}
                        />
                        <CollaborationCard
                            icon={<GlobalKnowledgeIcon />}
                            title="Global Knowledge, Local Progress."
                            description="Bringing world-class expertise to grassroots initiatives, transforming innovation into local opportunity."
                            accentColor="#4F6C8A"
                            delay={0.3}
                        />
                    </div>
                </div>

                {/* ─── Write-up Content ─── */}
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 lg:pb-28">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-gray-600 leading-relaxed space-y-6"
                    >
                        <p className="text-gray-600">
                            As a non-profit organization, <span className="font-bold text-gray-600">Alliant Forge</span>'s strength lies in collaboration. We align with industry experts, local leaders, and global networks to co-create solutions that drive inclusive development. By connecting knowledge with grassroots action, we ensure that progress is not only achieved but sustained.
                        </p>

                        <p className="text-gray-600">
                            Communities thrive when they are gently equipped with the skills, resources, and leadership needed to shape their own futures. We focus on nurturing local capacity by supporting heartfelt training programs, leadership development, and resource mobilization. By embedding vital skills within these spaces—from entrepreneurship to technical trades—we pave the way for lasting resilience and true independence. Every local empowerment initiative is thoughtfully co-designed alongside residents, ensuring that solutions naturally reflect their unique priorities and cultural context.
                        </p>

                        <p className="text-gray-600">
                            Complex challenges demand cross-sector collaboration. At <span className="font-bold text-gray-600">Alliant Forge</span>, we are proud to bring together NGOs, businesses, and government agencies to co-design projects that blend technical expertise with deep local knowledge. By fostering collaborative initiatives—ranging from essential infrastructure upgrades to vital social programs—we ensure every solution is practical, scalable, and sustainable. As a non-profit organization, our role is to serve as the bridge, making sure that shared expertise truly translates into a meaningful impact on the ground.
                        </p>

                        <p className="text-gray-600">
                            <span className="font-bold text-gray-600">Alliant Forge</span> harnesses global expertise to meet local needs by integrating world-class knowledge into grassroots initiatives. We partner with universities, research institutions, and international organizations to adapt this expertise to local contexts through training, pilot projects, and mentorship. By combining global innovation with local wisdom, we ensure that communities benefit from cutting-edge solutions while retaining full ownership of their development journey.
                        </p>
                    </motion.div>
                </div>
            </section>

            <Footer />

        </main>
    );
}
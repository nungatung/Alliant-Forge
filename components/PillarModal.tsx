'use client';

import React, { useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';



const GreenTechIcon = () => (
    <Image
        src="/icons/green-tech.png"
        alt="Green technologies"
        width={56}
        height={56}
        className="object-contain"
    />
);

const SmartIndustryIcon = () => (
    <Image
        src="/icons/eco-growth.png"
        alt="Smart sustainable industries"
        width={70}
        height={48}
        className="object-contain"
    />
);

const InnovationIcon = () => (
    <Image
        src="/icons/innovation.png"
        alt="Innovation with purpose"
        width={70}
        height={48}
        className="object-contain"
    />
);

const PartnershipIcon = () => (
    <Image
        src="/icons/global-partnerships.png"
        alt="Global partnerships"
        width={70}
        height={48}
        className="object-contain"
    />
);


const LocalEmpowermentIcon = () => (
    <Image
        src="/icons/local-empowerment.png"
        alt="Local empowerment"
        width={70}
        height={48}
        className="object-contain"
    />
);

const UnitingIcon = () => (
    <Image
        src="/icons/common-goals.png"
        alt="Uniting for common goals"
        width={70}
        height={48}
        className="object-contain"
    />
);

const BridgingIcon = () => (
    <Image
        src="/icons/bridging-sectors.png"
        alt="Bridging sectors"
        width={70}
        height={48}
        className="object-contain"
    />
);

const GlobalKnowledgeIcon = () => (
    <Image
        src="/icons/global-expertise.png"
        alt="Global knowledge"
        width={70}
        height={48}
        className="object-contain"
    />
);


interface CookieCardProps {
    icon: React.ReactNode;
    tagline: string;
    description: string;
    accentColor: string;
    delay?: number;
}

function CookieCard({ icon, tagline, description, accentColor, delay = 0 }: CookieCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay }}
            className="group relative"
        >
            <div
                className="relative h-full rounded-2xl bg-white overflow-hidden transition-all duration-400 group-hover:-translate-y-1 group-hover:shadow-lg"
                style={{
                    boxShadow: 'rgba(60,64,67,0.3) 0 1px 2px 0, rgba(60,64,67,0.15) 0 2px 6px 2px',
                }}
            >
                {/* Top-left accent border — goes along top and down left side */}
                <div
                    className="absolute top-0 left-0 w-full h-half pointer-events-none"
                    style={{
                        background: `linear-gradient(to right, ${accentColor} 0%, ${accentColor} 3px, transparent 3px)`,
                    }}
                />
                <div
                    className="absolute top-0 left-0 w-half h-full pointer-events-none"
                    style={{
                        background: `linear-gradient(to bottom, ${accentColor} 0%, ${accentColor} 3px, transparent 3px)`,
                    }}
                />
                {/* Rounded corner for top-left */}
                <div
                    className="absolute top-0 left-0 w-22 h-22 pointer-events-none"
                    style={{
                        borderTop: `3px solid ${accentColor}`,
                        borderLeft: `3px solid ${accentColor}`,
                        borderTopLeftRadius: '16px',
                    }}
                />

                {/* Bottom-right accent border — goes along bottom and up right side */}
                <div
                    className="absolute bottom-0 right-0 w-full h-half pointer-events-none"
                    style={{
                        background: `linear-gradient(to left, ${accentColor} 0%, ${accentColor} 3px, transparent 3px)`,
                    }}
                />
                <div
                    className="absolute bottom-0 right-0 w-half h-full pointer-events-none"
                    style={{
                        background: `linear-gradient(to top, ${accentColor} 0%, ${accentColor} 3px, transparent 3px)`,
                    }}
                />
                {/* Rounded corner for bottom-right */}
                <div
                    className="absolute bottom-0 right-0 w-22 h-22 pointer-events-none"
                    style={{
                        borderBottom: `3px solid ${accentColor}`,
                        borderRight: `3px solid ${accentColor}`,
                        borderBottomRightRadius: '16px',
                    }}
                />

                <div className="flex flex-col items-center justify-between pt-10 px-6 pb-6 relative">
                    {/* Icon at top, centered */}
                    <span className="relative mx-auto -mt-6 mb-4 w-16 h-16 flex items-center justify-center">
                        {icon}
                    </span>

                    {/* Tagline */}
                    <h5
                        className="text-sm font-semibold mb-3 text-center leading-snug"
                        style={{ color: accentColor }}
                    >
                        {tagline}
                    </h5>

                    {/* Description */}
                    <p className="w-full mb-2 text-sm text-justify text-gray-500 leading-relaxed">
                        {description}
                    </p>
                </div>
            </div>
        </motion.div>
    );
}



const pillarContent: Record<string, {
    title: string;
    accentColor: string;
    headerBg: string;
    content: React.ReactNode;
}> = {
    'innovation-and-accelerating-infrastructure-stewardship': {
        title: 'Innovation & Accelerating Infrastructure Stewardship',
        accentColor: '#4F6C8A',
        headerBg: '#FAFAFA',
        content: (
            <div className="relative">
                {/* Cards floated right */}
                <div className="float-right ml-8 mb-8 w-full sm:w-[430px] lg:w-[500px]">
                    <div className="grid grid-cols-2 gap-6">
                        <CookieCard
                            icon={<GreenTechIcon />}
                            tagline="Green technologies for a thriving planet."
                            description="Developing renewable energy solutions and eco-friendly innovations that protect our environment."
                            accentColor="#9cb681"
                            delay={0}
                        />
                        <CookieCard
                            icon={<SmartIndustryIcon />}
                            tagline="Empowering smart, sustainable industries."
                            description="Sustainable growth reaches economies that use efficient safer advantaging of an estimable economy."
                            accentColor="#4F6C8A"
                            delay={0.1}
                        />
                        <CookieCard
                            icon={<InnovationIcon />}
                            tagline="Innovating with purpose and impact."
                            description="Creating circular solutions that reduce waste and drive sustainable practices."
                            accentColor="#D5AA72"
                            delay={0.2}
                        />
                        <CookieCard
                            icon={<PartnershipIcon />}
                            tagline="Global partnerships for shared prosperity."
                            description="Collaborating across borders to drive inclusive and equitable progress."
                            accentColor="#9cb681"
                            delay={0.3}
                        />
                    </div>
                </div>

                {/* Text content */}
                <div className="text-gray-600 leading-relaxed space-y-6">
                    <p className="text-lg sm:text-xl font-medium text-gray-700 leading-relaxed">
                        At <span className='font-semibold text-[#4F6C8A]'>Alliant Forge</span>, we strive to build a future where technology and sustainability go hand in hand. Innovation sparks ideas into impact, while sustainable growth ensures progress endures for generations. By aligning technological breakthroughs with environmental responsibility, we transform forward-thinking ideas into measurable community impact. Together, these principles form our blueprint for resilient communities, thriving industries, and a planet that prospers without compromise.
                    </p>

                    <h2 className="text-xl sm:text-2xl font-medium text-[#4F6C8A] mt-10 mb-5 leading-relaxed"> Green and Sustainable Energy Transition </h2>
                    <p className="text-gray-600">
                        At Alliant Forge, we believe innovation begins with clean energy and responsible engineering. Through solar integration, energy-efficient design, and green construction practices, we reduce our carbon footprint and create infrastructure that harmonizes with nature.
                        We partner with leading solar innovators and engineers to embed renewable energy systems into affordable housing, schools, clinics, and public facilities, ensuring clean power reaches those who need it most.
                        To guarantee affordability and reliability, we leverage blended financing models that combine:
                        <p><span className='font-semibold text-[#4F6C8A]'>• Donor Funding</span> </p>
                        <p><span className='font-semibold text-[#4F6C8A]'>• Government Subsidies</span> </p>
                        <p><span className='font-semibold text-[#4F6C8A]'>• Private Investment</span></p>
                        Community energy cooperatives and local technician training programs ensure long-term maintenance, create jobs, and sustain resilience for generations.
                    </p>


                    <h2 className="text-xl sm:text-2xl font-medium text-[#4F6C8A] mt-10 mb-5 leading-relaxed">Smart & Sustainable Construction Services</h2>
                    <p className="text-gray-600">
                        At Alliant Forge, we believe sustainable growth depends on intelligent design and efficient resource use. By advancing smart civil engineering practices, such as modular construction, digital modeling, and low-impact materials, we create infrastructure that endures environmental and economic challenges while working in harmony with nature.
                        To drive sustainable development, we combine visionary partnerships with practical capacity-building through:
                        <p><span className='font-semibold text-[#4F6C8A]'>• Strategic Pilots:</span> Collaborating with construction firms and technology providers to launch projects that demonstrate lifecycle assessments and achieve green certifications.</p>
                        <p><span className='font-semibold text-[#4F6C8A]'>• Academic Integrations:</span> Partnering with universities and vocational colleges to embed Building Information Modelling (BIM) and modular construction into curricula.</p>
                        <p><span className='font-semibold text-[#4F6C8A]'>• Workforce Development:</span> Offering apprenticeships with industry partners that give young engineers and artisans hands-on experience in sustainable practices.</p>
                        <p><span className='font-semibold text-[#4F6C8A]'>• Credential Pathways:</span> Establishing certification tracks that build professional credibility and accelerate widespread adoption of sustainable building methods.</p>
                    </p>


                    <h2 className="text-xl sm:text-2xl font-medium text-[#4F6C8A] mt-10 mb-5 leading-relaxed">Infrastructure Stewardship and Advisory Services</h2>
                    <p className="text-gray-600">
                        At Alliant Forge, we believe that Innovation must serve both people and the planet. Wastewater treatment and recycling systems show how engineering can transform waste into opportunity, while nature-based solutions (NBS), such as constructed wetlands, green roofs, and permeable pavements, restore ecosystems and address urban challenges. By collaborating with municipalities, environmental scientists, and community stakeholders, we embed circular water management into infrastructure projects, ensuring resilience and shared stewardship.

                        <h2 className="text-lg sm:text-xl font-medium text-[#4F6C8A] mt-10 mb-2 leading-relaxed">Through this dedicated approach, we deliver:</h2>
                        <p className="text-gray-600"><span className='font-semibold text-[#4F6C8A]'>• Technical Advisory & Infrastructure Upgrades:</span> Integrating wastewater recycling and NBS into urban planning, while managing essential facility repairs and upgrades to support long-term system reliability.</p>
                        <p className="text-gray-600"><span className='font-semibold text-[#4F6C8A]'>• Community Stewardship & Awareness:</span> Engaging residents in the design and upkeep of NBS systems, fostering ownership, accountability, and public awareness of health and environmental benefits.</p>
                        <p className="text-gray-600"><span className='font-semibold text-[#4F6C8A]'>• Resilient Funding Models:</span> Structuring blended financing combining donor support, municipal budgets, and private investment, to guarantee affordability and sustainability.</p>
                        <p className="text-gray-600"><span className='font-semibold text-[#4F6C8A]'>• Capacity Building:</span> Partnering with universities, vocational colleges, and local cooperatives to train technicians, embed NBS into curricula, and create jobs through apprenticeships and certification pathways.</p>
                    </p>
                </div>

                <div className="clear-both" />
            </div>
        ),
    },

    'empowerment-and-education': {
        title: 'Empowerment & Education',
        accentColor: '#D5AA72',
        headerBg: '#FAFAFA',
        content: (
            <div className="relative">
                {/* Images floated left */}
                <div className="float-left mr-8 mb-8 w-full sm:w-[380px] lg:w-[460px]">
                    <div className="relative">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
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

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
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

                {/* Text content */}
                <div className="text-gray-600 leading-relaxed space-y-6">
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
                </div>

                <div className="clear-both" />
            </div>
        ),
    },

    'collaboration-and-community-impact': {
        title: 'Collaboration & Community Impact',
        accentColor: '#9cb681',
        headerBg: '#FCFCFE',
        content: (
            <div className="relative">
                {/* Cards floated LEFT */}
                <div className="float-left mr-8 mb-8 w-full sm:w-[430px] lg:w-[500px]">
                    <div className="grid grid-cols-2 gap-6">
                        <CookieCard
                            icon={<LocalEmpowermentIcon />}
                            tagline="Local Empowerment for Lasting Change."
                            description="Strengthening communities through skills development, resources, and local leadership for self-sustaining progress."
                            accentColor="#D5AA72"
                            delay={0}
                        />
                        <CookieCard
                            icon={<UnitingIcon />}
                            tagline="Uniting for Common Goals."
                            description="Building alliances that promote inclusive development and shared success across communities."
                            accentColor="#A85D6A"
                            delay={0.1}
                        />
                        <CookieCard
                            icon={<BridgingIcon />}
                            tagline="Bridging Sectors, Creating Solutions."
                            description="Connecting NGOs, businesses, and government to design practical solutions that drive measurable impact."
                            accentColor="#9cb681"
                            delay={0.2}
                        />
                        <CookieCard
                            icon={<GlobalKnowledgeIcon />}
                            tagline="Global Knowledge, Local Progress."
                            description="Bringing world-class expertise to grassroots initiatives, transforming innovation into local opportunity."
                            accentColor="#4F6C8A"
                            delay={0.3}
                        />
                    </div>
                </div>

                {/* Text content */}
                <div className="text-gray-600 leading-relaxed space-y-6">
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
                </div>

                <div className="clear-both" />
            </div>
        ),
    },
};



interface PillarModalProps {
    isOpen: boolean;
    onClose: () => void;
    pillarId: string | null;
}

export default function PillarModal({ isOpen, onClose, pillarId }: PillarModalProps) {
    const overlayRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    const handleOverlayClick = (e: React.MouseEvent) => {
        if (e.target === overlayRef.current) {
            onClose();
        }
    };

    useEffect(() => {
        if (isOpen && contentRef.current) {
            contentRef.current.focus();
        }
    }, [isOpen]);

    const pillar = pillarId ? pillarContent[pillarId] : null;
    if (!pillar) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    ref={overlayRef}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 z-[100] flex items-start justify-center bg-black/60 backdrop-blur-sm p-4 sm:p-6 lg:p-8"
                    onClick={handleOverlayClick}
                >
                    <motion.div
                        ref={contentRef}
                        tabIndex={-1}
                        initial={{ opacity: 0, y: 40, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 40, scale: 0.96 }}
                        transition={{ duration: 0.4, ease: 'easeOut' }}
                        className="relative w-full max-w-5xl max-h-[85vh] flex flex-col bg-white rounded-2xl shadow-2xl my-8 overflow-hidden outline-none"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header — always visible, never scrolls */}
                        <div
                            className="relative flex-shrink-0 px-6 sm:px-8 lg:px-10 py-6 sm:py-8 border-b border-gray-100"
                            style={{ backgroundColor: pillar.headerBg }}
                        >
                            <div className="w-20 h-1 rounded-full mb-4" style={{ backgroundColor: pillar.accentColor }} />
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight pr-12">
                                {pillar.title}
                            </h2>

                            {/* Close X Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 flex items-center justify-center rounded-full bg-white/80 hover:bg-white text-gray-500 hover:text-gray-800 transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer"
                                aria-label="Close modal"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M18 6L6 18M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Content Body — scrolls independently with its own scrollbar */}
                        <div className="flex-1 overflow-y-auto overscroll-contain px-6 sm:px-8 lg:px-10 py-8 sm:py-10 lg:py-12">
                            {pillar.content}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
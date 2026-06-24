import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";
import MissionSection from "@/components/MissionSection";
import PartnersMarquee from "@/components/PartnersMarquee";
import BlogSection from "@/components/BlogSection";
import ImpactStats from "@/components/ImpactStats";
import GetInvolved from "@/components/GetInvolved";
import Footer from "@/components/Footer";
import HowWeWorkBanner from "@/components/HowWeWorkBanner";

// ─── Pillar Data ────────────────────────────────────────────────────
// Structured as typed prop array for easy content updates

const pillars = [
  {
    id: 1,
    title: "Empowering Tomorrow's Innovators",
    subtitle: "Women & Youth in STEM",
    description:
      "We dismantle barriers to STEM education for women and young people through targeted scholarships, mentorship networks, and hands-on innovation labs in underserved communities.",
    accentColor: "#4F6C8A",
    imageUrl:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80",
    details: [
      {
        label: "Scholarship Programs",
        content:
          "Our flagship STEM scholarship fund has supported over 3,200 students across 12 countries, with 68% of recipients being the first in their families to attend university.",
      },
      {
        label: "Mentorship Networks",
        content:
          "We pair emerging talent with industry professionals through a structured 12-month mentorship program, resulting in 85% of mentees securing employment or advanced study placements.",
      },
      {
        label: "Innovation Labs",
        content:
          "Community-based maker spaces equipped with 3D printers, robotics kits, and coding stations serve as creative hubs where young innovators prototype solutions to local challenges.",
      },
    ],
  },
  {
    id: 2,
    title: "Innovation & Sustainable Infrastructure",
    subtitle: "Renewable Energy & Smart Cities",
    description:
      "From solar microgrids to smart urban planning, we deploy cutting-edge infrastructure solutions that reduce environmental impact while expanding economic opportunity.",
    accentColor: "#D5AA72",
    imageUrl:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&q=80",
    details: [
      {
        label: "Solar Microgrids",
        content:
          "Decentralized solar power systems now serve 47 rural communities across three continents, providing reliable electricity to schools, clinics, and small businesses previously off the grid.",
      },
      {
        label: "Smart City Pilots",
        content:
          "Our urban innovation program partners with municipal governments to implement IoT-enabled waste management, traffic optimization, and air quality monitoring in rapidly growing cities.",
      },
      {
        label: "Green Building Standards",
        content:
          "We advocate for and implement passive design principles and sustainable materials in public infrastructure, reducing lifetime carbon emissions by an average of 40% per project.",
      },
    ],
  },
  {
    id: 3,
    title: "Social Impact & Community Development",
    subtitle: "Local Projects for Change",
    description:
      "True impact begins at the community level. We fund and co-design locally led initiatives that address education gaps, health access, and economic resilience from the ground up.",
    accentColor: "#98A48B",
    imageUrl:
      "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1200&q=80",
    details: [
      {
        label: "Community Grants",
        content:
          "Our participatory grant-making program puts funding decisions in the hands of community committees, ensuring resources flow to the priorities identified by residents themselves.",
      },
      {
        label: "Health Access Initiatives",
        content:
          "Mobile clinic partnerships and telemedicine networks have expanded primary healthcare access to 89 remote villages, serving over 45,000 patients annually.",
      },
      {
        label: "Economic Resilience",
        content:
          "Microenterprise development programs combine seed funding with business training, helping local entrepreneurs launch sustainable ventures that create jobs within their communities.",
      },
    ],
  },
  {
    id: 4,
    title: "Partnerships & Collaboration",
    subtitle: "Academia, Industry & Government",
    description:
      "We bridge sectors to create powerful coalitions. By aligning academic research, private sector resources, and public policy, we amplify impact far beyond what any single organization could achieve alone.",
    accentColor: "#CEC8AE",
    imageUrl:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&q=80",
    details: [
      {
        label: "Academic Alliances",
        content:
          "Research partnerships with 23 universities generate evidence-based insights that inform our program design and contribute to peer-reviewed publications on sustainable development.",
      },
      {
        label: "Industry Engagement",
        content:
          "Corporate partners provide technology, expertise, and funding while gaining access to emerging markets and talent pipelines — creating shared value for business and society.",
      },
      {
        label: "Policy Advocacy",
        content:
          "We work with government stakeholders to shape enabling policy environments, from STEM education curricula to renewable energy feed-in tariffs that accelerate clean technology adoption.",
      },
    ],
  },
  {
    id: 5,
    title: "Skills Development & Education",
    subtitle: "Training & Scholarships",
    description:
      "Knowledge is the foundation of self-determination. We deliver vocational training, digital literacy programs, and professional development pathways that equip individuals to thrive in a changing economy.",
    accentColor: "#7A6E5F",
    imageUrl:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&q=80",
    details: [
      {
        label: "Vocational Training",
        content:
          "Demand-driven skills programs in renewable energy installation, agricultural technology, and digital trades have graduated over 8,500 students with industry-recognized certifications.",
      },
      {
        label: "Digital Literacy",
        content:
          "Foundational computing and internet skills training reaches populations often excluded from the digital economy, including older workers and rural women entrepreneurs.",
      },
      {
        label: "Professional Development",
        content:
          "Executive education and leadership programs for mid-career professionals in the NGO and public sectors build management capacity and strategic thinking skills.",
      },
    ],
  },
];

// ─── Home Page ──────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <main className="min-h-screen bg-forge-bg">
      <Navbar />

      <HeroCarousel />

      <MissionSection />

      <HowWeWorkBanner />

      <GetInvolved />
      
      <PartnersMarquee />
      
      <BlogSection />

      {/* <ImpactStats />  */}

      <Footer />
    </main>
  );
}
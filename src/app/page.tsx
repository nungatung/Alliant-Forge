import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";
import PartnersMarquee from "@/components/PartnersMarquee";
import BlogSection from "@/components/BlogSection";
import ImpactStats from "@/components/ImpactStats";
import GetInvolved from "@/components/GetInvolved";
import Footer from "@/components/Footer";
import HowWeWorkBanner from "@/components/HowWeWorkBanner";
import StrategicPillars from "@/components/StrategicPillars";


export default function HomePage() {
  return (
    <main className="min-h-screen bg-forge-bg">
      <Navbar />

      <HeroCarousel />

      <StrategicPillars />    

      <HowWeWorkBanner />

      <GetInvolved />
      
      <PartnersMarquee />
      
      {/* <BlogSection /> */}

      {/* <ImpactStats />  */}

      <Footer />
    </main>
  );
}
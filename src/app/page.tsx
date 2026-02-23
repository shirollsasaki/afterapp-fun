import Navigation from '@/components/Navigation';
import HeroSection from '@/components/sections/HeroSection';
import EvidenceSection from '@/components/sections/EvidenceSection';
import IndiaSection from '@/components/sections/IndiaSection';
import BYOASection from '@/components/sections/BYOASection';
import CounterSection from '@/components/sections/CounterSection';
import OpportunitySection from '@/components/sections/OpportunitySection';
import CTASection from '@/components/sections/CTASection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <EvidenceSection />
        <IndiaSection />
        <BYOASection />
        <CounterSection />
        <OpportunitySection />
        <CTASection />
      </main>
      <Footer />

      {/* Global grain overlay */}
      <div className="grain-overlay" />
    </>
  );
}

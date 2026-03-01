import Navigation from '@/components/Navigation';
import HeroSection from '@/components/sections/HeroSection';
import EvidenceSection from '@/components/sections/EvidenceSection';
import IndiaSection from '@/components/sections/IndiaSection';
import BYOASection from '@/components/sections/BYOASection';
import CounterSection from '@/components/sections/CounterSection';
import OpportunitySection from '@/components/sections/OpportunitySection';
import CTASection from '@/components/sections/CTASection';
import Footer from '@/components/Footer';
import BioCanvas from '@/components/BioCanvas';
import CursorFollower from '@/components/CursorFollower';

export default function Home() {
  return (
    <>
      {/* Bio-organic particle canvas — fixed behind everything */}
      <BioCanvas />

      {/* Noise overlay */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 3,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.08'/%3E%3C/svg%3E")`,
          mixBlendMode: 'overlay',
        }}
      />

      {/* Main content — sits above canvas */}
      <div style={{ position: 'relative', zIndex: 4 }}>
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
      </div>

      {/* Global grain overlay */}
      <div className="grain-overlay" />

      {/* Status HUD — bottom right */}
      <div
        style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          fontFamily: "'Courier Prime', monospace",
          fontSize: '0.7rem',
          color: '#444',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          gap: '0.5rem',
          pointerEvents: 'none',
          zIndex: 10,
        }}
      >
        <span>SUBSTRATE ANALYSIS: ACTIVE</span>
        <span>
          SEMANTIC DENSITY: 0.84{' '}
          <span className="status-dot" />
        </span>
      </div>

      {/* Custom cursor */}
      <CursorFollower />
    </>
  );
}

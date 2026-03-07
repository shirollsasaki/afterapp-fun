import type { Metadata } from 'next';
import Taskbar from '@/components/Taskbar';
import HeroSection from '@/components/sections/HeroSection';
import EvidenceSection from '@/components/sections/EvidenceSection';
import IndiaSection from '@/components/sections/IndiaSection';
import BYOASection from '@/components/sections/BYOASection';
import CounterSection from '@/components/sections/CounterSection';
import OpportunitySection from '@/components/sections/OpportunitySection';
import CTASection from '@/components/sections/CTASection';

export const metadata: Metadata = {
  title: 'The App Is Dying — Thesis | Pied Piper',
  description:
    '32% of users have already replaced at least one app with AI. The single-purpose app era is ending. This is the thesis.',
  alternates: { canonical: '/thesis' },
  openGraph: {
    title: 'The App Is Dying — Thesis',
    description:
      '32% of users have already replaced at least one app with AI. The single-purpose app era is ending.',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The App Is Dying — Thesis',
    description: '32% of users have already replaced at least one app with AI.',
  },
};

export default function ThesisPage() {
  return (
    <div className="bsod-page">
      <div className="page-window">
        <div className="title-bar" style={{ cursor: 'default' }}>
          <span>THESIS.txt — The App Is Dying</span>
          <div className="window-controls">
            <span>_</span>
            <span>X</span>
          </div>
        </div>
        <div style={{ overflow: 'visible' }}>
          <HeroSection />
          <EvidenceSection />
          <IndiaSection />
          <BYOASection />
          <CounterSection />
          <OpportunitySection />
          <CTASection />
        </div>
      </div>
      <Taskbar />
    </div>
  );
}

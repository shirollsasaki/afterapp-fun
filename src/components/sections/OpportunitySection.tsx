'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ScrollReveal from '@/components/ui/ScrollReveal';

import SectionDivider from '@/components/ui/SectionDivider';

const categories = [
  { name: 'Education', size: '$7.5–10.4B', icon: '📚' },
  { name: 'Financial Advisory', size: 'Multi-billion', icon: '💰' },
  { name: 'Health Coaching', size: 'Emerging', icon: '🏥' },
  { name: 'Travel Planning', size: 'Emerging', icon: '✈️' },
  { name: 'Productivity', size: 'Growing', icon: '⚡' },
];

function GrowthBar() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div ref={ref} className="mt-12 lg:mt-16">
      <div className="flex items-end gap-4 lg:gap-8">
        {/* 2025 bar */}
        <div className="flex flex-col items-center">
          <motion.div
            className="flex w-16 items-end justify-center rounded-t-sm bg-[var(--color-warm-gray)] sm:w-20 lg:w-28"
            initial={{ height: 0 }}
            animate={isInView ? { height: 48 } : { height: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          >
            <span className="font-typewriter pb-2 text-xs font-bold text-ink/70">
              $5.1B
            </span>
          </motion.div>
          <span className="font-typewriter mt-2 text-xs text-muted">2025</span>
        </div>

        {/* Arrow + CAGR */}
        <div className="flex flex-col items-center gap-1 pb-6">
          <span className="font-typewriter rounded-full bg-[var(--color-mustard)] px-3 py-1 text-[10px] font-bold text-ink">
            39% CAGR
          </span>
          <svg width="60" height="12" viewBox="0 0 60 12" fill="none" className="text-muted" aria-hidden="true">
            <line x1="0" y1="6" x2="50" y2="6" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 3" />
            <polyline points="48,2 54,6 48,10" fill="none" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </div>

        {/* 2032 bar */}
        <div className="flex flex-col items-center">
          <motion.div
            className="flex w-16 items-end justify-center rounded-t-sm bg-[var(--color-terracotta)] sm:w-20 lg:w-28"
            initial={{ height: 0 }}
            animate={isInView ? { height: 192 } : { height: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut', delay: 0.5 }}
          >
            <span className="font-typewriter pb-2 text-xs font-bold text-white">
              $130B
            </span>
          </motion.div>
          <span className="font-typewriter mt-2 text-xs text-muted">2032</span>
        </div>
      </div>
      <p className="font-typewriter mt-4 text-[10px] uppercase tracking-widest text-muted">
        India AI Market Size
      </p>
    </div>
  );
}

export default function OpportunitySection() {
  return (
    <section id="opportunity" className="relative overflow-hidden px-6 py-24 lg:py-32">
      {/* Watermark */}
      <div
        className="pointer-events-none absolute inset-0 flex select-none items-center justify-center"
        aria-hidden="true"
      >
        <span className="font-typewriter text-[20rem] font-bold leading-none text-ink/[0.03] sm:text-[28rem]">
          2032
        </span>
      </div>

      <div className="relative mx-auto max-w-5xl">
        {/* Massive opening stat */}
        <ScrollReveal>
          <div className="text-center">
            <span className="font-typewriter text-7xl font-bold text-[var(--color-mustard)] sm:text-8xl lg:text-9xl">
              $200B+
            </span>
            <p className="mt-4 text-xl text-ink/70 lg:text-2xl">
              in AI-related investment commitments
            </p>
            <p className="font-typewriter mt-2 text-[10px] uppercase tracking-widest text-muted">
              AI captured 50% of all venture funding in 2025 ($202.3B)
            </p>
          </div>
        </ScrollReveal>

        {/* Growth visualization */}
        <ScrollReveal delay={0.15}>
          <div className="flex justify-center">
            <GrowthBar />
          </div>
        </ScrollReveal>

        <SectionDivider />

        {/* Two-column layout */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Voice-First India */}
          <ScrollReveal direction="left" delay={0.1}>
            <div>
              <h3 className="text-3xl font-bold leading-snug text-ink">
                Voice-First India
              </h3>
              <div className="mt-6 space-y-4">
                <p className="text-base leading-relaxed text-ink/80 lg:text-lg">
                  With <strong>22 official languages</strong> and{' '}
                  <strong>19,000+ dialects</strong>, India is inherently multilingual.
                  Hindi is the 2nd most-used language on Google Assistant globally.
                </p>
                <p className="text-base leading-relaxed text-ink/80 lg:text-lg">
                  <strong>65% of Indian users</strong> already use voice search — growing
                  270% annually. 56% prefer regional-language digital content.
                </p>
                <p className="text-base leading-relaxed text-ink/80 lg:text-lg">
                  <strong>Sarvam AI</strong> (22 Indian languages, $41M raised, government-backed)
                  and <strong>CoRover&apos;s BharatGPT</strong> (1B+ users, 20B+ interactions)
                  are building the infrastructure.
                </p>
              </div>

              {/* Mini stat */}
              <div className="mt-6 inline-block rounded-sm border border-warm-gray/30 px-5 py-3">
                <span className="font-typewriter text-2xl font-bold text-[var(--color-terracotta)]">
                  $153M → ~$1B
                </span>
                <p className="mt-1 text-xs text-muted">
                  India voice AI market, 2024 → 2030
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: WhatsApp = Killer Distribution */}
          <ScrollReveal direction="right" delay={0.1}>
            <div>
              <h3 className="text-3xl font-bold leading-snug text-ink">
                WhatsApp = Killer Distribution
              </h3>
              <div className="mt-6 space-y-4">
                <p className="text-base leading-relaxed text-ink/80 lg:text-lg">
                  <strong>400M+ Indian WhatsApp users</strong>. No app store. No download.
                  No onboarding friction. AI inside WhatsApp = near-zero adoption barrier.
                </p>
                <p className="text-base leading-relaxed text-ink/80 lg:text-lg">
                  <strong>Max Life Insurance</strong> achieved 5x ROI from a 7-language
                  WhatsApp AI assistant. <strong>IRCTC AskDISHA 2.0</strong> enables voice
                  train ticket booking + UPI payments in Hindi, English, and Gujarati.
                </p>
                <p className="text-base leading-relaxed text-ink/80 lg:text-lg">
                  WhatsApp bypasses app stores entirely — the most powerful
                  distribution channel in India, already AI-enabled.
                </p>
              </div>

              {/* Mini stat */}
              <div className="mt-6 inline-block rounded-sm border border-warm-gray/30 px-5 py-3">
                <span className="font-typewriter text-2xl font-bold text-[var(--color-mustard)]">
                  400M+
                </span>
                <p className="mt-1 text-xs text-muted">
                  Indian WhatsApp users — bypasses app stores
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <SectionDivider />

        {/* Addressable categories */}
        <ScrollReveal delay={0.1}>
          <h3 className="mb-8 text-center text-2xl font-bold text-ink">
            Addressable Categories
          </h3>
        </ScrollReveal>

        <div className="overflow-x-auto pb-4 scrollbar-none">
          <div className="flex gap-4 lg:justify-center">
            {categories.map((cat, idx) => (
              <ScrollReveal key={cat.name} delay={0.08 * idx}>
                <div className="paper-texture flex w-44 flex-shrink-0 flex-col items-center rounded-sm border border-warm-gray/30 px-5 py-6 text-center lg:w-48">
                  <span className="text-3xl" role="img" aria-label={cat.name}>
                    {cat.icon}
                  </span>
                  <h4 className="mt-3 text-sm font-bold uppercase tracking-wide text-ink">
                    {cat.name}
                  </h4>
                  <p className="font-typewriter mt-2 text-xs font-bold text-[var(--color-terracotta)]">
                    {cat.size}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <p className="font-typewriter mt-6 text-center text-[10px] uppercase tracking-widest text-muted">
          Combined: tens of billions in addressable market value
        </p>
      </div>
    </section>
  );
}

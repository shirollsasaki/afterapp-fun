'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ScrollReveal from '@/components/ui/ScrollReveal';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import PullQuote from '@/components/ui/PullQuote';
import SectionDivider from '@/components/ui/SectionDivider';

const categories = [
  {
    name: 'Health',
    stat: '8.3M downloads',
    description:
      'Cal AI hit 8.3M downloads, aiming to overtake MyFitnessPal\u2019s 270M users. AI mental health market projected from $1.8B (2025) to $11.8B by 2034. Woebot earned FDA Breakthrough Device designation.',
    companies: 'Cal AI \u00b7 Woebot \u00b7 MyFitnessPal',
  },
  {
    name: 'Finance',
    stat: '15\u201320% more savings',
    description:
      'Cleo users save 15\u201320% more than traditional budgeting app users. Over 10M Indians have adopted AI-powered financial planners.',
    companies: 'Cleo \u00b7 ET Money \u00b7 Zerodha Varsity',
  },
  {
    name: 'Travel',
    stat: 'Full AI travel agent',
    description:
      'Layla.ai handles flights, hotels, and activities entirely via conversation. MakeMyTrip partnered with OpenAI in February 2026.',
    companies: 'Layla.ai \u00b7 MakeMyTrip \u00b7 Ixigo',
  },
  {
    name: 'Mental Health',
    stat: 'Non-inferior to clinicians',
    description:
      'A randomized controlled trial showed AI therapy non-inferior to clinician-led treatment for teens. Woebot holds FDA Breakthrough Device designation.',
    companies: 'Woebot \u00b7 AI therapy platforms',
  },
];

const switchReasons = [
  { label: 'Convenience', percentage: 62 },
  { label: 'Faster Results', percentage: 54 },
  { label: 'Superior UX', percentage: 53 },
];

export default function EvidenceSection() {
  const barsRef = useRef<HTMLDivElement>(null);
  const barsInView = useInView(barsRef, { once: true, amount: 0.3 });

  return (
    <section id="evidence" className="py-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* ── Section Title ── */}
        <ScrollReveal>
          <h2 className="mb-20 text-4xl font-bold leading-tight text-ink md:text-5xl lg:text-6xl">
            One Conversation is{' '}
            <em>Replacing Ten Apps</em>
          </h2>
        </ScrollReveal>

        {/* ── Three-Stat Hero Row ── */}
        <div className="mb-24 grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* 2.5B queries/day — static display (AnimatedCounter can't handle decimals) */}
          <ScrollReveal delay={0}>
            <div className="paper-texture -rotate-1 rounded-sm border border-warm-gray/30 px-6 py-10 text-center shadow-[2px_3px_12px_rgba(0,0,0,0.06)]">
              <div className="text-5xl font-bold text-[var(--color-terracotta)] lg:text-6xl">
                <span className="font-typewriter">2.5B</span>
              </div>
              <p className="mt-3 text-lg leading-relaxed text-ink">
                queries processed daily
              </p>
              <p className="font-typewriter mt-2 text-[10px] uppercase tracking-widest text-muted">
                OpenAI, 2025
              </p>
            </div>
          </ScrollReveal>

          {/* 800M weekly users */}
          <ScrollReveal delay={0.15}>
            <div className="paper-texture rounded-sm border border-warm-gray/30 px-6 py-10 text-center shadow-[2px_3px_12px_rgba(0,0,0,0.06)]">
              <div className="text-5xl font-bold text-[var(--color-terracotta)] lg:text-6xl">
                <AnimatedCounter
                  target={800}
                  suffix="M"
                  className="text-[var(--color-terracotta)]"
                />
              </div>
              <p className="mt-3 text-lg leading-relaxed text-ink">
                weekly active users
              </p>
              <p className="font-typewriter mt-2 text-[10px] uppercase tracking-widest text-muted">
                OpenAI, 2025
              </p>
            </div>
          </ScrollReveal>

          {/* 61% mobile */}
          <ScrollReveal delay={0.3}>
            <div className="paper-texture rotate-1 rounded-sm border border-warm-gray/30 px-6 py-10 text-center shadow-[2px_3px_12px_rgba(0,0,0,0.06)]">
              <div className="text-5xl font-bold text-[var(--color-terracotta)] lg:text-6xl">
                <AnimatedCounter
                  target={61}
                  suffix="%"
                  className="text-[var(--color-terracotta)]"
                />
              </div>
              <p className="mt-3 text-lg leading-relaxed text-ink">
                usage on mobile devices
              </p>
              <p className="font-typewriter mt-2 text-[10px] uppercase tracking-widest text-muted">
                OpenAI + Harvard, 2025
              </p>
            </div>
          </ScrollReveal>
        </div>

        <SectionDivider />

        {/* ── Category Disruption Grid ── */}
        <ScrollReveal>
          <h3 className="font-typewriter mb-12 mt-12 text-xs uppercase tracking-[0.3em] text-muted">
            Categories Under Disruption
          </h3>
        </ScrollReveal>

        <div className="mb-24 grid grid-cols-1 gap-6 md:grid-cols-2">
          {categories.map((cat, i) => (
            <ScrollReveal key={cat.name} delay={i * 0.1}>
              <div className="rounded-r-sm border-l-[3px] border-[var(--color-terracotta)] bg-white/40 p-6">
                <span className="font-typewriter block text-[11px] uppercase tracking-[0.25em] text-muted">
                  {cat.name}
                </span>
                <p className="font-typewriter mt-2 text-2xl text-ink">
                  {cat.stat}
                </p>
                <p className="mt-3 text-base leading-relaxed text-ink-light">
                  {cat.description}
                </p>
                <p className="font-typewriter mt-3 text-[10px] tracking-wide text-muted">
                  {cat.companies}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* ── Pull Quote ── */}
        <ScrollReveal>
          <div className="mx-auto mb-24 max-w-3xl">
            <PullQuote
              quote="52% of US adults now use AI large language models"
              attribution="Pew Research, 2025"
            />
          </div>
        </ScrollReveal>

        <SectionDivider />

        {/* ── Why They Switch — Horizontal Bars ── */}
        <ScrollReveal>
          <h3 className="font-typewriter mb-12 mt-12 text-xs uppercase tracking-[0.3em] text-muted">
            Why They Switch
          </h3>
        </ScrollReveal>

        <div ref={barsRef} className="max-w-3xl space-y-6">
          {switchReasons.map((reason, i) => (
            <div
              key={reason.label}
              className="flex items-center gap-4 md:gap-6"
            >
              <span className="w-28 shrink-0 text-right text-base italic text-ink md:w-36 md:text-lg">
                {reason.label}
              </span>

              <div className="relative h-10 flex-1 overflow-hidden rounded-sm bg-warm-gray/20">
                <motion.div
                  className="absolute inset-y-0 left-0 rounded-sm bg-[var(--color-terracotta)]"
                  initial={{ width: 0 }}
                  animate={
                    barsInView
                      ? { width: `${reason.percentage}%` }
                      : { width: 0 }
                  }
                  transition={{
                    duration: 1,
                    delay: i * 0.2,
                    ease: 'easeOut',
                  }}
                />
              </div>

              <span className="font-typewriter w-12 shrink-0 text-right text-base text-ink md:w-14 md:text-lg">
                {reason.percentage}%
              </span>
            </div>
          ))}
        </div>

        <p className="font-typewriter mt-6 max-w-3xl text-[10px] uppercase tracking-widest text-muted">
          Source: TELUS Digital survey of 1,000 US adults, 2025
        </p>
      </div>
    </section>
  );
}

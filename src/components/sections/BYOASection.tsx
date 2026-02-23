'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ScrollReveal from '@/components/ui/ScrollReveal';
import PullQuote from '@/components/ui/PullQuote';
import SectionDivider from '@/components/ui/SectionDivider';

const timelineSteps = [
  { name: 'Assembly', era: '1950s', highlight: false },
  { name: 'C', era: '1970s', highlight: false },
  { name: 'Python', era: '1990s', highlight: false },
  { name: 'SQL', era: '1970s', highlight: false },
  { name: 'Plain English', era: '2024', highlight: true },
];

const platforms = [
  {
    name: 'OpenAI GPT Store',
    stats: ['500K+ custom GPTs', '3M created in 2 months'],
    bg: 'bg-[var(--color-mustard)]',
    text: 'text-ink',
    rotation: '-rotate-3',
    zIndex: 'z-10',
  },
  {
    name: 'Google Gems',
    stats: ['Build AI apps, a new kind of Gem', '1M-token context window'],
    bg: 'bg-[var(--color-terracotta)]',
    text: 'text-white',
    rotation: 'rotate-0',
    zIndex: 'z-20',
  },
  {
    name: 'Claude Projects',
    stats: ['200K-token document libraries', 'Modular, reusable task components'],
    bg: 'bg-warm-gray',
    text: 'text-ink',
    rotation: 'rotate-3',
    zIndex: 'z-10',
  },
];

const nocodeTools = [
  { name: 'Lindy', stat: '$19/mo', description: 'Natural language agent building' },
  { name: 'MindStudio', stat: '15-min build', description: '100+ templates, rapid deployment' },
  { name: 'Dify', stat: 'Open-source', description: 'Self-hostable AI app framework' },
  { name: 'Botpress', stat: '190+ integrations', description: 'Shell, Electronic Arts use it' },
  { name: 'Ollama', stat: '180% YoY growth', description: 'Local LLM deployment' },
  { name: 'LM Studio', stat: 'No cloud required', description: 'Desktop GUI for local models' },
];

export default function BYOASection() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const timelineInView = useInView(timelineRef, { once: true, amount: 0.3 });

  return (
    <section id="byoa" className="py-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* ── Section Opening ── */}
        <ScrollReveal>
          <p className="font-typewriter mb-4 text-xs uppercase tracking-[0.3em] text-muted">
            Section IV
          </p>
          <h2 className="mb-6 text-4xl font-bold italic leading-tight text-ink md:text-5xl lg:text-6xl">
            The Prompt is the Product
          </h2>
          <p className="mb-24 max-w-2xl text-xl leading-relaxed text-ink-light">
            Software creation is being democratized. The abstraction ladder that
            began with Assembly now ends with plain English — and anyone who can
            describe a workflow can build an app.
          </p>
        </ScrollReveal>

        {/* ── Abstraction Timeline ── */}
        <ScrollReveal>
          <h3 className="font-typewriter mb-12 text-xs uppercase tracking-[0.3em] text-muted">
            The Abstraction Ladder
          </h3>
        </ScrollReveal>

        <div ref={timelineRef} className="relative mb-24">
          {/* Connecting line — horizontal (desktop) */}
          <div className="absolute left-0 right-0 top-1/2 hidden h-px -translate-y-1/2 bg-warm-gray/40 md:block" />
          {/* Connecting line — vertical (mobile) */}
          <div className="absolute bottom-0 left-1/2 top-0 w-px -translate-x-1/2 bg-warm-gray/40 md:hidden" />

          <div className="relative z-10 flex flex-col items-center gap-6 md:flex-row md:justify-between">
            {timelineSteps.map((step, i) => (
              <motion.div
                key={step.name}
                className={`flex flex-col items-center rounded-sm border px-5 py-4 text-center ${
                  step.highlight
                    ? 'border-[var(--color-mustard)] bg-[var(--color-mustard)] shadow-[0_0_24px_rgba(255,194,51,0.25)]'
                    : 'border-warm-gray/40 bg-paper'
                } ${step.highlight ? 'px-7 py-5' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  timelineInView
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 20 }
                }
                transition={{
                  duration: 0.5,
                  delay: i * 0.12,
                  ease: 'easeOut',
                }}
              >
                <span
                  className={`font-typewriter text-sm font-bold ${
                    step.highlight ? 'text-ink' : 'text-ink'
                  } ${step.highlight ? 'text-base' : ''}`}
                >
                  {step.name}
                </span>
                <span className="font-typewriter mt-1 text-[10px] uppercase tracking-widest text-muted">
                  {step.era}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        <SectionDivider />

        {/* ── Platform Showcase: Overlapping Cards ── */}
        <ScrollReveal>
          <h3 className="font-typewriter mb-12 mt-12 text-xs uppercase tracking-[0.3em] text-muted">
            The New App Stores
          </h3>
        </ScrollReveal>

        <div className="mb-24 flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-center md:gap-0">
          {platforms.map((p, i) => (
            <ScrollReveal key={p.name} delay={i * 0.15}>
              <div
                className={`w-full max-w-[300px] rounded-sm ${p.bg} ${p.text} ${p.rotation} ${p.zIndex} p-6 shadow-[3px_4px_16px_rgba(0,0,0,0.1)] md:w-[280px] ${
                  i > 0 ? 'md:-ml-16' : ''
                }`}
              >
                <h4 className="text-lg font-bold">{p.name}</h4>
                <div className="mt-3 space-y-2">
                  {p.stats.map((stat) => (
                    <p
                      key={stat}
                      className={`font-typewriter text-sm ${
                        p.text === 'text-white'
                          ? 'text-white/80'
                          : 'text-ink-light'
                      }`}
                    >
                      {stat}
                    </p>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* ── Pull Quote ── */}
        <ScrollReveal>
          <div className="mx-auto mb-24 max-w-3xl">
            <PullQuote
              quote="English and other languages have become new programming languages&hellip; you can think of the prompt as a program"
              attribution="Prof. Greg Benson, University of San Francisco"
            />
          </div>
        </ScrollReveal>

        <SectionDivider />

        {/* ── No-Code Ecosystem Grid ── */}
        <ScrollReveal>
          <h3 className="font-typewriter mb-12 mt-12 text-xs uppercase tracking-[0.3em] text-muted">
            The No-Code Agent Ecosystem
          </h3>
        </ScrollReveal>

        <div className="mb-24 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {nocodeTools.map((tool, i) => (
            <ScrollReveal key={tool.name} delay={i * 0.08}>
              <div className="rounded-sm border border-warm-gray/30 bg-white/60 p-5">
                <h4 className="text-lg font-bold text-ink">
                  {tool.name}
                </h4>
                <p className="font-typewriter mt-2 text-sm text-[var(--color-terracotta)]">
                  {tool.stat}
                </p>
                <p className="mt-1 text-sm text-muted">
                  {tool.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* ── IBM Quote Badge / Stamp ── */}
        <ScrollReveal>
          <div className="flex justify-center">
            <div className="inline-block -rotate-[4deg] border-2 border-[var(--color-terracotta)] px-8 py-5">
              <p className="font-typewriter text-center text-sm font-bold uppercase tracking-[0.15em] text-[var(--color-terracotta)]">
                &ldquo;Prompt engineering is the new coding&rdquo;
              </p>
              <p className="font-typewriter mt-2 text-center text-[10px] uppercase tracking-widest text-muted">
                &mdash; IBM, 2026
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

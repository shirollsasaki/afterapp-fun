'use client';

import { motion } from 'framer-motion';
import ScrollReveal from '@/components/ui/ScrollReveal';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import SectionDivider from '@/components/ui/SectionDivider';

const vulnerabilities = [
  {
    sector: 'Education',
    level: 'high' as const,
    headline: 'Ground Zero',
    stat: '$22B \u2192 Insolvency',
    description:
      'Byju\u2019s collapsed from a $22B valuation to insolvency. App delisted from Google Play over unpaid AWS bills (May 2025). Unacademy revenue down 7%, teacher exodus accelerating. Antler calls education the \u201cmost promising sector for AI disruption in India in 2026.\u201d',
    companies: 'Byju\u2019s \u00b7 Unacademy',
    large: true,
  },
  {
    sector: 'Financial Advisory',
    level: 'high' as const,
    headline: 'AI-Deliverable Knowledge',
    stat: '10M+ adopted AI planners',
    description:
      'Zerodha Varsity courses are AI-deliverable knowledge. ET Money recommendations are easily replicable. Over 10M Indians already use AI financial planners.',
    companies: 'Zerodha Varsity \u00b7 ET Money',
    large: false,
  },
  {
    sector: 'Small Business',
    level: 'high' as const,
    headline: 'Paper-Thin Revenue',
    stat: '$187M raised, \u20b91.39cr revenue',
    description:
      'Khatabook raised $187M in funding but generates just \u20b91.39 crore in annual revenue. A WhatsApp AI bookkeeper speaking Hindi could replace it overnight.',
    companies: 'Khatabook',
    large: false,
  },
  {
    sector: 'Health Coaching',
    level: 'medium' as const,
    headline: 'Pivoting Hard',
    stat: '80% queries without humans',
    description:
      'HealthifyMe\u2019s AI nutritionist Ria handles 80% of queries without a human, powered by OpenAI realtime APIs across 50+ languages including 14 Indian languages. Moat: 10,000+ regional Indian foods database.',
    companies: 'HealthifyMe \u00b7 GOQii',
    large: false,
  },
  {
    sector: 'Travel',
    level: 'medium' as const,
    headline: 'Discovery Vulnerable',
    stat: '50K+ daily AI conversations',
    description:
      'MakeMyTrip\u2019s Myra chatbot handles 50K+ daily conversations. Ixigo is betting on \u201cagentic AI.\u201d Discovery phase is vulnerable, but the transaction layer remains protected.',
    companies: 'MakeMyTrip \u00b7 Ixigo',
    large: false,
  },
];

const protectedMoats = [
  { name: 'Cult.fit', moat: 'Physical gym network' },
  { name: 'Zerodha', moat: 'Trading license & infra' },
  { name: 'PharmEasy', moat: 'Medicine delivery logistics' },
  { name: 'PhonePe', moat: 'Payment processing layer' },
];

export default function IndiaSection() {
  return (
    <section id="india" className="py-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* ── Opening: Two Massive Opposing Stats ── */}
        <ScrollReveal>
          <div className="mb-24 flex flex-col items-center justify-center gap-8 md:flex-row md:gap-16">
            {/* Left: 602M downloads */}
            <div className="text-center">
              <div className="font-typewriter text-7xl font-bold text-[var(--color-mustard)] md:text-8xl lg:text-9xl">
                <AnimatedCounter
                  target={602}
                  suffix="M"
                  className="text-[var(--color-mustard)]"
                />
              </div>
              <p className="mt-4 text-lg text-muted">
                GenAI downloads in 2025
              </p>
              <p className="font-typewriter mt-1 text-[10px] uppercase tracking-widest text-muted">
                Up 204% year-over-year
              </p>
            </div>

            {/* Vertical divider (desktop) / horizontal (mobile) */}
            <div className="hidden h-32 w-px bg-warm-gray/50 md:block" />
            <div className="h-px w-32 bg-warm-gray/50 md:hidden" />

            {/* Right: $5 per user */}
            <div className="text-center">
              <div className="font-typewriter text-7xl font-bold text-[var(--color-terracotta)] md:text-8xl lg:text-9xl">
                <AnimatedCounter
                  target={5}
                  prefix="$"
                  className="text-[var(--color-terracotta)]"
                />
              </div>
              <p className="mt-4 text-lg text-muted">
                per user, annually
              </p>
              <p className="font-typewriter mt-1 text-[10px] uppercase tracking-widest text-muted">
                vs $140 in the United States
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* ── The Paradox Callout ── */}
        <ScrollReveal>
          <div className="mb-24 rounded-sm bg-warm-gray/30 p-8 md:p-12">
            <h3 className="font-typewriter mb-2 text-xs uppercase tracking-[0.3em] text-muted">
              The Paradox
            </h3>
            <p className="mb-8 text-xl leading-relaxed text-ink md:text-2xl">
              India is <strong>#1 for app downloads globally</strong> but has
              the <em>thinnest revenue moats</em>. Massive adoption, minimal
              monetization — and 92% of Indian office workers already use AI
              regularly.
            </p>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="border-l-2 border-[var(--color-mustard)] pl-4">
                <span className="font-typewriter text-3xl font-bold text-ink">
                  25.5B
                </span>
                <p className="text-sm text-muted">
                  total app downloads in 2025
                </p>
              </div>
              <div className="border-l-2 border-[var(--color-terracotta)] pl-4">
                <span className="font-typewriter text-3xl font-bold text-[var(--color-terracotta)]">
                  $5<span className="text-lg">/year</span>
                </span>
                <p className="text-sm text-muted">
                  revenue per user (India)
                </p>
              </div>
              <div className="border-l-2 border-ink/30 pl-4">
                <span className="font-typewriter text-3xl font-bold text-ink">
                  $140<span className="text-lg">/year</span>
                </span>
                <p className="text-sm text-muted">
                  revenue per user (US)
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* ── 100M Standalone Stat ── */}
        <ScrollReveal>
          <div className="mb-24 text-center">
            <div className="font-typewriter text-7xl font-bold text-[var(--color-terracotta)] md:text-8xl">
              <AnimatedCounter
                target={100}
                suffix="M"
                className="text-[var(--color-terracotta)]"
              />
            </div>
            <p className="mt-4 text-xl text-ink">
              weekly active ChatGPT users in India
            </p>
            <p className="font-typewriter mt-2 text-[10px] uppercase tracking-widest text-muted">
              Confirmed by Sam Altman, 2025
            </p>
          </div>
        </ScrollReveal>

        <SectionDivider />

        {/* ── Vulnerability Map ── */}
        <ScrollReveal>
          <h3 className="font-typewriter mb-12 mt-12 text-xs uppercase tracking-[0.3em] text-muted">
            Vulnerability Map
          </h3>
        </ScrollReveal>

        <div className="mb-24 grid grid-cols-1 gap-6 md:grid-cols-3">
          {vulnerabilities.map((v, i) => {
            /* stagger offsets for visual asymmetry */
            const offsets = ['', 'md:translate-y-4', '', 'md:-translate-y-2', 'md:translate-y-6'];
            return (
              <ScrollReveal
                key={v.sector}
                delay={i * 0.1}
                className={`${v.large ? 'md:col-span-2' : ''} ${offsets[i] ?? ''}`}
              >
                <div
                  className={`paper-texture h-full rounded-sm border border-warm-gray/30 ${
                    v.large ? 'p-6 md:p-8' : 'p-6'
                  }`}
                >
                  {/* Vulnerability indicator */}
                  <div className="mb-3 flex items-center gap-2">
                    <span
                      className={`inline-block h-2.5 w-2.5 rounded-full ${
                        v.level === 'high'
                          ? 'bg-[var(--color-terracotta)]'
                          : 'bg-[var(--color-mustard)]'
                      }`}
                    />
                    <span className="font-typewriter text-[10px] uppercase tracking-[0.25em] text-muted">
                      {v.level} vulnerability
                    </span>
                  </div>

                  <span className="font-typewriter block text-[11px] uppercase tracking-[0.25em] text-muted">
                    {v.sector}
                  </span>
                  <p className="mt-1 text-sm italic text-ink-light">
                    {v.headline}
                  </p>
                  <p
                    className={`font-typewriter mt-3 font-bold text-ink ${
                      v.large ? 'text-2xl' : 'text-xl'
                    }`}
                  >
                    {v.stat}
                  </p>
                  <p className="mt-3 text-base leading-relaxed text-ink-light">
                    {v.description}
                  </p>
                  <p className="font-typewriter mt-4 text-[10px] tracking-wide text-muted">
                    {v.companies}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <SectionDivider />

        {/* ── Protected by Infrastructure ── */}
        <ScrollReveal>
          <h3 className="font-typewriter mb-8 mt-12 text-xs uppercase tracking-[0.3em] text-muted">
            Protected by Infrastructure
          </h3>
        </ScrollReveal>

        <div className="mb-16 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
          {protectedMoats.map((m, i) => (
            <ScrollReveal key={m.name} delay={i * 0.08}>
              <div className="border-l-2 border-warm-gray bg-white/30 py-3 pl-4 pr-3">
                <span className="text-lg font-bold text-ink">{m.name}</span>
                <p className="mt-1 text-sm italic text-muted">
                  {m.moat}
                </p>
                <p className="font-typewriter mt-1 text-[9px] italic tracking-wide text-muted/70">
                  infrastructure moat
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* ── Decorative Stamp Circle ── */}
        <div className="flex justify-end">
          <motion.svg
            className="h-24 w-24 text-muted opacity-40"
            viewBox="0 0 100 100"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          >
            <defs>
              <path
                id="indiaStampPath"
                d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                fill="none"
              />
            </defs>
            <circle
              cx="50"
              cy="50"
              r="42"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
            />
            <circle
              cx="50"
              cy="50"
              r="33"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
            />
            <text
              fill="currentColor"
              fontSize="7"
              fontFamily="'Courier Prime', monospace"
              letterSpacing="2.5"
            >
              <textPath href="#indiaStampPath">
                INDIA &#x2022; 2025 &#x2022; INDIA &#x2022; 2025 &#x2022;
              </textPath>
            </text>
          </motion.svg>
        </div>
      </div>
    </section>
  );
}

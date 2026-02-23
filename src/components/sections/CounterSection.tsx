'use client';

import { motion } from 'framer-motion';
import ScrollReveal from '@/components/ui/ScrollReveal';

import SectionDivider from '@/components/ui/SectionDivider';

const counterArguments = [
  {
    number: '01',
    title: 'The Information vs. Action Gap',
    points: [
      'AI can suggest a budget — it cannot move money between accounts.',
      'AI can recommend a restaurant — it cannot process a reservation through a POS system.',
      'It cannot interact with banking APIs, deliver physical goods, or read hardware sensors. The gap between knowing and doing remains wide.',
    ],
    stat: { value: '~0', label: 'APIs AI can access without human-built integrations' },
  },
  {
    number: '02',
    title: 'Hallucination',
    points: [
      '8–20% hallucination rates in clinical decision support. GPT-4 fabricated 28.6% of citations in a Stanford study.',
      'In finance, 27% of earnings predictions beyond 2 quarters are fabricated. A hospital CEO turned off AI sepsis detection — "wrong 50% of the time."',
      'Consumers find AI errors less forgivable than human mistakes.',
    ],
    stat: { value: '28.6%', label: 'fabricated citations — Stanford' },
  },
  {
    number: '03',
    title: 'The UX Reality',
    points: [
      '"Graphical interfaces support exploration, conversational interfaces support completion." — Nielsen Norman Group',
      'Most app usage is browsing, comparing, and visualizing — GUI strengths that chat cannot replicate.',
      'The Rabbit R1 was a market failure. Voice-dependent devices cannot replace touch. 58% of users reported no change in app usage; 24% actually increased it.',
    ],
    stat: { value: '58%', label: 'reported NO change in app usage' },
  },
  {
    number: '04',
    title: "Gartner's Own Data",
    points: [
      'Only 12% of IT leaders strongly agree AI agents will replace apps within 2–4 years.',
      'Only 19% trust current hallucination protection measures.',
      '40%+ of agentic AI projects are expected to be cancelled by end of 2027.',
    ],
    stat: { value: '12%', label: 'strongly agree on app replacement' },
  },
];

export default function CounterSection() {
  return (
    <section id="counter" className="relative px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-5xl">
        {/* Section header */}
        <ScrollReveal>
          <h2 className="text-4xl font-light leading-tight tracking-tight text-ink sm:text-5xl">
            Why Apps{' '}
            <em className="italic">Won&apos;t Vanish</em>{' '}
            Overnight
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <p className="mt-4 max-w-xl text-lg text-muted sm:text-xl">
            The counter-arguments deserve serious engagement
          </p>
        </ScrollReveal>

        <SectionDivider />

        {/* Argument blocks */}
        <div className="space-y-16 lg:space-y-20">
          {counterArguments.map((arg, idx) => (
            <ScrollReveal key={arg.number} delay={idx * 0.08}>
              <div className="grid gap-6 lg:grid-cols-[auto_1fr_auto] lg:gap-10">
                {/* Number */}
                <div className="flex-shrink-0">
                  <span className="font-typewriter text-3xl font-bold text-[var(--color-terracotta)] lg:text-4xl">
                    {arg.number}
                  </span>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-2xl font-bold leading-snug text-ink">
                    {arg.title}
                  </h3>
                  <div className="mt-4 space-y-3">
                    {arg.points.map((point) => (
                      <p
                        key={point.slice(0, 40)}
                        className="text-base leading-relaxed text-ink/80 lg:text-lg"
                      >
                        {point}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Stat card */}
                <div className="flex items-start lg:w-48">
                  <div className="paper-texture w-full rounded-sm border border-warm-gray/30 px-5 py-4">
                    <p className="font-typewriter text-2xl font-bold text-[var(--color-terracotta)]">
                      {arg.stat.value}
                    </p>
                    <p className="mt-1 text-xs leading-snug text-muted">
                      {arg.stat.label}
                    </p>
                  </div>
                </div>
              </div>

              {/* Divider between blocks */}
              {idx < counterArguments.length - 1 && (
                <div className="mt-16 h-px w-full bg-warm-gray/30 lg:mt-20" />
              )}
            </ScrollReveal>
          ))}
        </div>

        {/* Concluding pull quote */}
        <ScrollReveal delay={0.2}>
          <motion.div
            className="mt-20 border-l-4 border-[var(--color-mustard)] bg-[var(--color-paper-dark)]/50 px-8 py-8 lg:mt-24 lg:px-12 lg:py-10"
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -20 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xl italic leading-relaxed text-ink lg:text-2xl">
              &ldquo;The most honest framing is not &lsquo;apps are dead&rsquo; but{' '}
              <span className="font-semibold not-italic text-[var(--color-terracotta)]">
                &lsquo;the app as the default interface for information and advice is dead.&rsquo;
              </span>
              &rdquo;
            </p>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}

'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionDivider from '@/components/ui/SectionDivider';

const agents = [
  { name: 'Richard', role: 'CEO / Strategist', color: '#22c55e' },
  { name: 'Jared', role: 'CMO', color: '#3b82f6' },
  { name: 'Monica', role: 'Content Lead', color: '#a855f7' },
  { name: 'Gilfoyle', role: 'CTO', color: '#ef4444' },
  { name: 'Erlich', role: 'Biz Dev', color: '#f97316' },
  { name: 'Dinesh', role: 'Researcher', color: '#06b6d4' },
  { name: 'Big Head', role: 'Support', color: '#94a3b8' },
];

const valueProps = [
  {
    stat: '7',
    label: 'AI Agents',
    description: 'Pre-wired collaboration. They strategize, write, research, and ship — together.',
  },
  {
    stat: '60',
    label: 'Seconds',
    description: 'Deploy your entire AI team to Discord. No infrastructure, no DevOps.',
  },
  {
    stat: '∞',
    label: 'Open Source',
    description: 'Built on OpenClaw. Inspect, fork, extend. Your agents, your rules.',
  },
];

const credibilityCompanies = ['Coinbase', 'Base', 'Udaan', 'Healthplix', 'Farmley'];

export default function CTASection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    // Store in localStorage
    try {
      const existing = JSON.parse(localStorage.getItem('waitlist_emails') || '[]');
      existing.push({ email, timestamp: new Date().toISOString() });
      localStorage.setItem('waitlist_emails', JSON.stringify(existing));
    } catch {
      // Silently handle storage errors
    }

    setSubmitted(true);
    setEmail('');
  };

  return (
    <section id="cta" className="relative px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-5xl">
        {/* Transition text */}
        <ScrollReveal>
          <p className="mx-auto max-w-2xl text-center text-xl leading-relaxed text-ink lg:text-2xl">
            The thesis proves AI agents are replacing apps.
            The question isn&apos;t <em className="italic">if</em> — it&apos;s{' '}
            <strong>how</strong> you deploy them.
          </p>
        </ScrollReveal>

        <SectionDivider />

        {/* Product reveal */}
        <ScrollReveal delay={0.1}>
          <div className="text-center">
            <h2 className="font-typewriter text-5xl font-bold tracking-tight text-ink sm:text-6xl">
              ClawDeploy
            </h2>
            <p className="mt-3 text-xl italic text-ink/70 lg:text-2xl">
              Your AI Team, Ready to Work
            </p>
          </div>
        </ScrollReveal>

        {/* Value prop cards */}
        <div className="mt-16 grid gap-6 sm:grid-cols-3 lg:mt-20">
          {valueProps.map((prop, idx) => (
            <ScrollReveal key={prop.label} delay={0.1 + idx * 0.1}>
              <div className="paper-texture rounded-sm border border-warm-gray/30 px-6 py-8 text-center">
                <span className="font-typewriter text-4xl font-bold text-[var(--color-terracotta)] lg:text-5xl">
                  {prop.stat}
                </span>
                <p className="mt-2 text-sm font-bold uppercase tracking-wide text-ink">
                  {prop.label}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">
                  {prop.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <SectionDivider />

        {/* The 7 agents */}
        <ScrollReveal delay={0.1}>
          <h3 className="mb-8 text-center text-2xl font-bold text-ink">
            The Team
          </h3>
        </ScrollReveal>

        <div className="overflow-x-auto pb-4 scrollbar-none">
          <div className="flex gap-5 lg:justify-center">
            {agents.map((agent, idx) => (
              <ScrollReveal key={agent.name} delay={0.05 * idx}>
                <motion.div
                  className="flex w-24 flex-shrink-0 flex-col items-center text-center lg:w-28"
                  whileHover={{ y: -4 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {/* Avatar circle */}
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-full lg:h-16 lg:w-16"
                    style={{ backgroundColor: agent.color }}
                  >
                    <span className="font-typewriter text-sm font-bold text-white">
                      {agent.name.charAt(0)}
                    </span>
                  </div>
                  <p className="mt-2 text-xs font-bold text-ink">
                    {agent.name}
                  </p>
                  <p className="text-[10px] leading-snug text-muted">
                    {agent.role}
                  </p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <SectionDivider />

        {/* CTA block */}
        <ScrollReveal delay={0.1}>
          <div className="mx-auto max-w-md text-center">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@email.com"
                  required
                  className="flex-1 rounded-lg border-2 border-ink bg-transparent px-4 py-3 font-typewriter text-sm text-ink placeholder:text-muted focus:border-[var(--color-terracotta)] focus:outline-none"
                />
                <button
                  type="submit"
                  className="rounded-lg border-2 border-ink bg-ink px-6 py-3 text-sm font-semibold text-[var(--color-paper)] transition-colors hover:bg-transparent hover:text-ink"
                >
                  Join the Waitlist
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="rounded-lg border-2 border-[var(--color-mustard)] bg-[var(--color-mustard)]/10 px-6 py-4"
              >
                <p className="text-lg font-semibold text-ink">
                  You&apos;re on the list.
                </p>
                <p className="mt-1 text-sm text-muted">
                  We&apos;ll be in touch soon.
                </p>
              </motion.div>
            )}

            {/* Secondary links */}
            <div className="mt-4 flex items-center justify-center gap-6">
              <a
                href="https://discord.gg/openclaw"
                target="_blank"
                rel="noopener noreferrer"
                className="font-typewriter text-xs text-muted underline-offset-4 transition-colors hover:text-ink hover:underline"
              >
                Join our Discord
              </a>
              <span className="text-warm-gray">·</span>
              <a
                href="https://github.com/openclaw"
                target="_blank"
                rel="noopener noreferrer"
                className="font-typewriter text-xs text-muted underline-offset-4 transition-colors hover:text-ink hover:underline"
              >
                View on GitHub
              </a>
            </div>

            {/* Price */}
            <p className="font-typewriter mt-4 text-sm text-ink/60">
              From <strong className="text-ink">$9/month</strong>
            </p>
          </div>
        </ScrollReveal>

        <SectionDivider />

        {/* Credibility strip */}
        <ScrollReveal delay={0.15}>
          <div className="text-center">
            <p className="text-xs text-muted">Built by operators from</p>
            <div className="mt-3 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              {credibilityCompanies.map((company) => (
                <span
                  key={company}
                  className="font-typewriter text-xs uppercase tracking-widest text-ink/50"
                >
                  {company}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';
import AnimatedCounter from '../ui/AnimatedCounter';

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
    >
      {/* Decorative stamp — top right */}
      <div className="absolute right-8 top-12 hidden h-20 w-20 items-center justify-center lg:flex">
        <div className="absolute inset-0 rounded-full border border-[var(--color-terracotta)]/40" />
        <div className="absolute inset-1 rounded-full border border-[var(--color-terracotta)]/20" />
        <svg
          aria-hidden="true"
          className="absolute inset-0 h-full w-full animate-[spin_20s_linear_infinite]"
          viewBox="0 0 100 100"
        >
          <defs>
            <path
              id="stampCircle"
              d="M 50,50 m -35,0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
            />
          </defs>
          <text
            className="fill-[var(--color-terracotta)] font-typewriter"
            fontSize="9"
            letterSpacing="4"
          >
            <textPath href="#stampCircle">
              THESIS • 2026 • THESIS • 2026 •
            </textPath>
          </text>
        </svg>
      </div>

      {/* Vertical text — left edge */}
      <div className="absolute bottom-32 left-6 hidden lg:block">
        <span className="font-typewriter text-vertical text-xs uppercase tracking-[0.25em] text-ink opacity-40">
          Scroll to explore
        </span>
      </div>

      {/* Main content */}
      <div className="max-w-3xl text-center">
        {/* Headline */}
        <h1 className="text-7xl font-light leading-[0.95] tracking-tight text-ink sm:text-8xl lg:text-9xl">
          <motion.span
            className="block"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          >
            The App
          </motion.span>
          <motion.span
            className="block italic"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.45 }}
          >
            is Dying.
          </motion.span>
        </h1>

        {/* Subline */}
        <motion.p
          className="mt-6 text-xl text-muted sm:text-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.7 }}
        >
          And AI is the replacement
        </motion.p>

        {/* Anchoring stat */}
        <motion.div
          className="mt-14"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 1.0 }}
        >
          <div className="text-7xl font-bold text-[var(--color-terracotta)]">
            <AnimatedCounter
              target={32}
              suffix="%"
              duration={2200}
              className="text-7xl font-bold text-[var(--color-terracotta)]"
            />
          </div>
          <p className="mt-3 text-lg leading-relaxed text-ink lg:text-xl">
            have already replaced at least one app with AI
          </p>
          <p className="font-typewriter mt-2 text-[10px] uppercase tracking-[0.2em] text-muted">
            TELUS Digital, 2025
          </p>
        </motion.div>
      </div>

      {/* Bottom bouncing chevron */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <motion.div
          className="flex flex-col items-center gap-1 text-muted"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg
            aria-hidden="true"
            width="20"
            height="10"
            viewBox="0 0 20 10"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="2,2 10,8 18,2" />
          </svg>
          <svg
            aria-hidden="true"
            width="20"
            height="10"
            viewBox="0 0 20 10"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="opacity-40"
          >
            <polyline points="2,2 10,8 18,2" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}

import Link from 'next/link';
import Navigation from '@/components/Navigation';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Folio — After App',
  description: 'Your portfolio, built by AI in 60 seconds. Drop in your work history, agents write the copy and ship a live site.',
  alternates: { canonical: '/folio' },
};

export default function FolioPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="mx-auto max-w-3xl px-6 pb-24 pt-32">
        <div className="mb-6 flex items-center gap-3">
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-ink)]" />
            <span className="font-typewriter text-[10px] uppercase tracking-wider text-[var(--color-muted)]">Live</span>
          </span>
          <span className="text-[var(--color-warm-gray)]/40">·</span>
          <Link
            href="/apps"
            className="font-typewriter text-[10px] uppercase tracking-wider text-[var(--color-muted)] transition-colors hover:text-[var(--color-ink)]"
          >
            ← All apps
          </Link>
        </div>

        <h1 className="text-6xl font-light leading-[0.95] text-[var(--color-ink)] lg:text-7xl">
          Folio
        </h1>
        <p className="mt-4 text-2xl italic leading-relaxed text-[var(--color-muted)]">
          Your portfolio, built by AI in 60 seconds.
        </p>

        <div className="my-12 flex items-center gap-4">
          <div className="h-px flex-1 bg-[var(--color-warm-gray)]/30" />
          <div className="h-1.5 w-1.5 rotate-45 border border-[var(--color-warm-gray)]/50" />
          <div className="h-px flex-1 bg-[var(--color-warm-gray)]/30" />
        </div>

        <p className="text-lg leading-relaxed text-[var(--color-muted)]">
          Drop in your LinkedIn URL or paste your work history. Folio&apos;s agent team writes
          the copy, picks the layout, and ships a live portfolio — no templates, no drag-and-drop,
          no design skills needed.
        </p>

        <div className="mt-10 space-y-4">
          {[
            'Monica writes your bio, case studies, and project descriptions',
            'Gilfoyle picks the stack and deploys it instantly',
            'Richard positions you for the roles you actually want',
          ].map((line) => (
            <div key={line} className="flex items-start gap-3">
              <div className="mt-2 h-1 w-4 shrink-0 bg-[var(--color-warm-gray)]/40" />
              <p className="text-base leading-relaxed text-[var(--color-muted)]">{line}</p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <input
            type="text"
            placeholder="Paste your LinkedIn URL or describe your work..."
            className="w-full border-b border-[var(--color-warm-gray)]/40 bg-transparent pb-3 text-lg text-[var(--color-ink)] placeholder:text-[var(--color-warm-gray)]/40 focus:border-[var(--color-ink)]/60 focus:outline-none"
            readOnly
          />
          <p className="font-typewriter mt-3 text-xs text-[var(--color-warm-gray)]/40">
            Coming soon — agents are being briefed
          </p>
        </div>

        <div className="mt-20 flex items-center gap-4 border-t border-[var(--color-warm-gray)]/20 pt-8">
          <span className="font-typewriter text-[10px] uppercase tracking-wider text-[var(--color-warm-gray)]/40">
            Built by
          </span>
          {['Monica', 'Gilfoyle', 'Richard'].map((agent) => (
            <span
              key={agent}
              className="font-typewriter rounded-sm border border-[var(--color-warm-gray)]/20 px-2 py-0.5 text-[10px] uppercase tracking-wider text-[var(--color-muted)]"
            >
              {agent}
            </span>
          ))}
        </div>
      </main>
    </div>
  );
}

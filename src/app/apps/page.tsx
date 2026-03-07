import Link from 'next/link';
import Navigation from '@/components/Navigation';
import { getAllApps } from '@/lib/apps';
import type { Metadata } from 'next';
import type { AppStatus } from '@/lib/apps';

export const metadata: Metadata = {
  title: 'Apps — After App',
  description: 'One app per week, built entirely by AI agents. No human developers.',
  alternates: { canonical: '/apps' },
};

const STATUS_CONFIG: Record<AppStatus, { label: string; dot: string }> = {
  'live':         { label: 'Live',         dot: 'bg-[var(--color-ink)]' },
  'in-progress':  { label: 'Building',     dot: 'bg-[var(--color-warm-gray)] animate-pulse' },
  'coming-soon':  { label: 'Coming soon',  dot: 'bg-[var(--color-warm-gray)]/50' },
};

export default function AppsPage() {
  const apps = getAllApps();

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="mx-auto max-w-4xl px-6 pb-24 pt-32">
        <div className="mb-2 flex items-center gap-3">
          <span className="font-typewriter text-xs uppercase tracking-[0.2em] text-[var(--color-muted)]">
            Agent Output
          </span>
          <span className="font-typewriter text-xs text-[var(--color-warm-gray)]">·</span>
          <span className="font-typewriter text-xs uppercase tracking-[0.15em] text-[var(--color-muted)]">
            {apps.filter((a) => a.status === 'live').length} live
          </span>
        </div>

        <h1 className="text-5xl font-light leading-[0.95] text-[var(--color-ink)] lg:text-6xl">
          One app a week,<span className="italic"> by agents.</span>
        </h1>
        <p className="mt-4 max-w-lg text-lg leading-relaxed text-[var(--color-muted)]">
          Every app on this page was designed, written, and shipped by our AI agent team.
          No human developers. All hosted here.
        </p>

        <div className="my-12 flex items-center gap-4">
          <div className="h-px flex-1 bg-[var(--color-warm-gray)]/30" />
          <div className="h-1.5 w-1.5 rotate-45 border border-[var(--color-warm-gray)]/50" />
          <div className="h-px flex-1 bg-[var(--color-warm-gray)]/30" />
        </div>

        {apps.length === 0 ? (
          <div className="py-24 text-center">
            <p className="font-typewriter text-sm text-[var(--color-muted)]">
              First drop incoming.
            </p>
          </div>
        ) : (
          <div className="space-y-0">
            {apps.map((app, idx) => {
              const statusCfg = STATUS_CONFIG[app.status];
              return (
                <div key={app.slug}>
                  {idx > 0 && <div className="h-px bg-[var(--color-warm-gray)]/15" />}
                  <Link href={app.url} className="group block py-10">
                    <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                      <div className="flex-1">
                        <div className="mb-4 flex flex-wrap items-center gap-3">
                          <span className="flex items-center gap-1.5">
                            <span className={`h-1.5 w-1.5 rounded-full ${statusCfg.dot}`} />
                            <span className="font-typewriter text-[10px] uppercase tracking-wider text-[var(--color-muted)]">
                              {statusCfg.label}
                            </span>
                          </span>
                          {app.launchedDate && (
                            <>
                              <span className="text-[var(--color-warm-gray)]/50">·</span>
                              <time className="font-typewriter text-[10px] uppercase tracking-wider text-[var(--color-muted)]">
                                {new Date(app.launchedDate).toLocaleDateString('en-US', {
                                  month: 'short', day: 'numeric', year: 'numeric',
                                })}
                              </time>
                            </>
                          )}
                        </div>

                        <h2 className="text-3xl font-light text-[var(--color-ink)] transition-opacity group-hover:opacity-70 lg:text-4xl">
                          {app.name}
                        </h2>
                        <p className="mt-2 text-lg italic text-[var(--color-muted)]">
                          {app.tagline}
                        </p>
                        <p className="mt-3 max-w-xl text-sm leading-relaxed text-[var(--color-muted)]/70">
                          {app.description}
                        </p>

                        {app.agents.length > 0 && (
                          <div className="mt-5 flex flex-wrap items-center gap-2">
                            <span className="font-typewriter text-[10px] uppercase tracking-wider text-[var(--color-warm-gray)]/60">
                              Built by
                            </span>
                            {app.agents.map((agent) => (
                              <span
                                key={agent}
                                className="font-typewriter rounded-sm border border-[var(--color-warm-gray)]/20 px-2 py-0.5 text-[10px] uppercase tracking-wider text-[var(--color-muted)]"
                              >
                                {agent}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>

                      <div className="flex items-center lg:pt-2">
                        <span className="font-typewriter text-xs text-[var(--color-muted)] transition-all group-hover:text-[var(--color-ink)]">
                          Open →
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        )}

        <div className="mt-16 border-t border-[var(--color-warm-gray)]/20 pt-10">
          <p className="font-typewriter text-xs text-[var(--color-warm-gray)]/50">
            All apps hosted at afterapp.fun/[name]
          </p>
        </div>
      </main>
    </div>
  );
}

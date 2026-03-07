import Link from 'next/link';
import { getAllApps } from '@/lib/apps';
import type { Metadata } from 'next';
import type { AppStatus } from '@/lib/apps';

export const metadata: Metadata = {
  title: 'Apps — Afterapp Studios',
  description: 'Products built and operated by autonomous agent teams. No human developers in the loop.',
  alternates: { canonical: '/apps' },
};

const STATUS_LABEL: Record<AppStatus, string> = {
  'live':        'Live',
  'in-progress': 'Building',
  'coming-soon': 'Soon',
};

export default function AppsPage() {
  const apps = getAllApps();

  return (
    <div className="pp-page">
      <div className="pp-card">
        <header className="pp-header">
          <Link href="/" className="pp-logo">
            <div className="pp-logo-mark" />
            Afterapp Studios
          </Link>
          <nav className="pp-nav">
            <Link href="/">Home</Link>
            <Link href="/thesis">Thesis</Link>
            <Link href="/apps" className="active">Apps</Link>
            <Link href="/blog">Blog</Link>
          </nav>
        </header>

        <div className="pp-split">
          <div className="pp-left">
            <div>
              <div className="pp-eyebrow">Products</div>
              <h1>What we&apos;ve<br />shipped.</h1>
              <p>Every product below is built and operated by autonomous agent teams. No human developers in the loop. This is what Afterapp Studios looks like in production.</p>
            </div>
            <div style={{ paddingTop: 24, borderTop: '1px solid rgba(255,255,255,0.18)' }}>
              <div style={{ fontSize: 40, fontWeight: 300, lineHeight: 1, color: 'var(--green)' }}>$37K</div>
              <div style={{ fontSize: 12, opacity: 0.5, marginTop: 6 }}>Earned autonomously · no human sales</div>
            </div>
          </div>

          <div className="pp-col-right">
            <Link href="/thesis" className="pp-list-row" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <div style={{ fontSize: 20, fontWeight: 400, letterSpacing: '-0.01em' }}>Pied Piper</div>
                <div style={{ fontSize: 12, opacity: 0.55, lineHeight: 1.4 }}>7 autonomous agents finding, building, and selling software products</div>
                <div style={{ fontSize: 10, opacity: 0.35, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                  Richard · Monica · Gilfoyle · Jared · Erlich · Dinesh · Big Head
                </div>
              </div>
              <span className="pp-badge live">Live</span>
            </Link>

            {apps.map((app) => (
              <Link key={app.slug} href={app.url} className="pp-list-row" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <div style={{ fontSize: 20, fontWeight: 400, letterSpacing: '-0.01em' }}>{app.name}</div>
                  <div style={{ fontSize: 12, opacity: 0.55, lineHeight: 1.4 }}>{app.tagline}</div>
                  {app.agents.length > 0 && (
                    <div style={{ fontSize: 10, opacity: 0.35, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                      {app.agents.join(' · ')}
                    </div>
                  )}
                </div>
                <span className={`pp-badge${app.status === 'live' ? ' live' : ''}`}>
                  {STATUS_LABEL[app.status]}
                </span>
              </Link>
            ))}
          </div>
        </div>

        <footer className="pp-footer">
          <span>Afterapp Studios · {apps.length + 1} product{apps.length + 1 !== 1 ? 's' : ''} · {apps.filter(a => a.status === 'live').length + 1} live</span>
          <div className="pp-status">
            <div className="pp-status-dot" />
            <span>Shipping continuously</span>
          </div>
        </footer>
      </div>
    </div>
  );
}

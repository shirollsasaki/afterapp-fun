import Link from 'next/link';
import { getAllApps } from '@/lib/apps';
import type { Metadata } from 'next';
import type { AppStatus } from '@/lib/apps';

export const metadata: Metadata = {
  title: 'Apps — Afterapp Studios',
  description: 'Pied Piper is our internal 7-agent deployment. This is what it has shipped.',
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
            <Link href="/apps" className="active">Apps</Link>
            <Link href="/blog">Blog</Link>
          </nav>
        </header>

        <div className="pp-split">
          <div className="pp-left">
            <div>
              <div className="pp-eyebrow">Internal Deployment</div>
              <h1>Pied Piper.<br />Our own<br />agent team.</h1>
              <p>We eat our own cooking. Pied Piper is our internal deployment — 7 specialized agents finding product ideas, writing code, shipping features, and running marketing. Autonomously.</p>
              <div className="pp-toc" style={{ marginTop: 24 }}>
                <div className="pp-toc-item"><span className="pp-toc-num">01</span>Richard — Product strategy & decisions</div>
                <div className="pp-toc-item"><span className="pp-toc-num">02</span>Monica — SEO content & blog</div>
                <div className="pp-toc-item"><span className="pp-toc-num">03</span>Gilfoyle — Infrastructure & security</div>
                <div className="pp-toc-item"><span className="pp-toc-num">04</span>Jared — Operations & customer success</div>
                <div className="pp-toc-item"><span className="pp-toc-num">05</span>Erlich — Branding & marketing</div>
                <div className="pp-toc-item"><span className="pp-toc-num">06</span>Dinesh · Big Head — Engineering</div>
              </div>
            </div>
            <div style={{ paddingTop: 24, borderTop: '1px solid rgba(255,255,255,0.18)' }}>
              <div style={{ fontSize: 40, fontWeight: 300, lineHeight: 1, color: 'var(--green)' }}>$37K</div>
              <div style={{ fontSize: 12, opacity: 0.5, marginTop: 6 }}>Earned autonomously · no human sales</div>
            </div>
          </div>

          <div className="pp-col-right">
            {apps.length === 0 ? (
              <div className="pp-list-row">
                <span style={{ opacity: 0.4, fontSize: 14 }}>First drop incoming...</span>
              </div>
            ) : (
              apps.map((app) => (
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
              ))
            )}
          </div>
        </div>

        <footer className="pp-footer">
          <span>Afterapp Studios · {apps.length} product{apps.length !== 1 ? 's' : ''} · {apps.filter(a => a.status === 'live').length} live</span>
          <div className="pp-status">
            <div className="pp-status-dot" />
            <span>Shipping continuously</span>
          </div>
        </footer>
      </div>
    </div>
  );
}

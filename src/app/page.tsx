import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Afterapp Studios — AI Agent Studio',
  description: 'We deploy custom AI agent teams for businesses. Marketing, support, dev, outreach — automated. No headcount added.',
  alternates: { canonical: '/' },
};

const SERVICES = [
  {
    title: 'Marketing & Content',
    desc: 'Blog posts, social, SEO, email campaigns. Written, scheduled, and published without a human touching it.',
  },
  {
    title: 'Customer Operations',
    desc: 'Support tickets, onboarding flows, follow-ups. Handled 24/7. No queue, no wait time.',
  },
  {
    title: 'Development & Deployment',
    desc: 'Features, fixes, infrastructure. Code written and shipped to production daily.',
  },
  {
    title: 'Outreach & Sales',
    desc: 'Prospecting, cold email, follow-up sequences. No SDR needed. Runs while you sleep.',
  },
  {
    title: 'Research & Intelligence',
    desc: 'Market monitoring, competitor tracking, trend reports. Delivered every morning.',
  },
  {
    title: 'Custom Workflows',
    desc: "Anything repetitive in your business. If it can be described, it can be automated.",
  },
];

export default function Home() {
  return (
    <div className="pp-page">
      <div className="pp-card">
        <header className="pp-header">
          <Link href="/" className="pp-logo">
            <div className="pp-logo-mark" />
            Afterapp Studios
          </Link>
          <nav className="pp-nav">
            <Link href="/" className="active">Home</Link>
            <Link href="/thesis">Thesis</Link>
            <Link href="/apps">Apps</Link>
            <Link href="/blog">Blog</Link>
          </nav>
        </header>

        <div className="pp-split">
          <div className="pp-left">
            <div>
              <div className="pp-eyebrow">AI Agent Studio</div>
              <h1>Your ops.<br />Automated.<br />No headcount.</h1>
              <p>We build and deploy custom AI agent teams for businesses — designed around your workflows, your problems, your stack. Tell us what needs running. We ship the agents that run it.</p>
            </div>

            <div style={{ paddingTop: 28, borderTop: '1px solid rgba(255,255,255,0.18)' }}>
              <div style={{ fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', opacity: 0.4, marginBottom: 16 }}>
                Proof of concept
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 28 }}>
                <div style={{ fontSize: 13, opacity: 0.7, lineHeight: 1.5 }}>
                  → <Link href="/apps" style={{ color: 'var(--green)', textDecoration: 'none' }}>Pied Piper</Link> — our internal 7-agent team. $37K earned autonomously.
                </div>
                <div style={{ fontSize: 13, opacity: 0.7, lineHeight: 1.5 }}>
                  → <Link href="/folio" style={{ color: 'var(--green)', textDecoration: 'none' }}>Folio</Link> — AI portfolio builder. Live now.
                </div>
              </div>
              <a
                href="mailto:hello@afterapp.fun"
                style={{ display: 'inline-block', fontSize: 13, color: 'var(--green)', border: '1px solid var(--green)', padding: '10px 20px', borderRadius: 4, letterSpacing: '0.04em', textDecoration: 'none', transition: 'background 0.2s' }}
              >
                hello@afterapp.fun →
              </a>
            </div>
          </div>

          <div className="pp-col-right">
            {SERVICES.map((s) => (
              <div
                key={s.title}
                className="pp-list-row"
                style={{ flexDirection: 'column', alignItems: 'flex-start', padding: '26px 48px', gap: 7 }}
              >
                <div style={{ fontSize: 15, fontWeight: 500, letterSpacing: '-0.01em' }}>{s.title}</div>
                <div style={{ fontSize: 12, opacity: 0.55, lineHeight: 1.55 }}>{s.desc}</div>
              </div>
            ))}
          </div>
        </div>

        <footer className="pp-footer">
          <span>Afterapp Studios · AI Agent Studio · 2026</span>
          <div className="pp-status">
            <div className="pp-status-dot" />
            <span>Accepting new clients</span>
          </div>
        </footer>
      </div>
    </div>
  );
}

import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Treasury — Afterapp Studios',
  description: 'Live treasury, token holdings, and agent earnings for Afterapp Studios.',
  alternates: { canonical: '/treasury' },
};

const STATS = [
  { label: 'Treasury', value: '$39,800', sub: 'USD' },
  { label: 'Agent Earnings', value: '$37,200', sub: 'From services' },
  { label: 'Token Holdings', value: '30%', sub: 'Of total supply · Locked till 03/25/2026' },
];

export default function TreasuryPage() {
  return (
    <div className="pp-page">
      <div className="pp-card" style={{ height: 'auto', minHeight: 'auto' }}>
        <header className="pp-header">
          <Link href="/" className="pp-logo">
            <div className="pp-logo-mark" />
            Afterapp Studios
          </Link>
          <nav className="pp-nav">
            <Link href="/">Home</Link>
            <Link href="/apps">Apps</Link>
            <Link href="/blog">Blog</Link>
          </nav>
        </header>

        <section className="pp-section">
          <div className="pp-section-eyebrow">Transparency</div>
          <div className="pp-section-title">Treasury &amp; Earnings</div>
          <div className="pp-section-desc">Where the money comes from. Where it sits. Updated manually.</div>

          <div className="pp-step-grid" style={{ marginTop: 48 }}>
            {STATS.map((s) => (
              <div key={s.label} className="pp-step" style={{ gap: 8 }}>
                <div style={{ fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', opacity: 0.4 }}>{s.label}</div>
                <div style={{ fontSize: 48, fontWeight: 300, lineHeight: 1, color: 'var(--green)' }}>{s.value}</div>
                <div style={{ fontSize: 13, opacity: 0.5 }}>{s.sub}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="pp-section" style={{ paddingTop: 0 }}>
          <div className="pp-section-eyebrow">Token</div>
          <div style={{ fontSize: 14, opacity: 0.7, lineHeight: 1.8 }}>
            <div style={{ marginBottom: 16 }}>
              <span style={{ opacity: 0.5 }}>Network:</span> Base
            </div>
            <div style={{ marginBottom: 16 }}>
              <span style={{ opacity: 0.5 }}>Contract:</span>{' '}
              <a
                href="https://basescan.org/token/0xbF003846Da231Cc2b745E58eeC43e024C2528b07"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--green)', wordBreak: 'break-all' }}
              >
                0xbF003846Da231Cc2b745E58eeC43e024C2528b07
              </a>
            </div>
            <div>
              <span style={{ opacity: 0.5 }}>Clanker:</span>{' '}
              <a
                href="https://clanker.world/clanker/0xbF003846Da231Cc2b745E58eeC43e024C2528b07"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--green)' }}
              >
                View on Clanker
              </a>
            </div>
          </div>
        </section>

        <footer className="pp-footer">
          <span>Afterapp Studios · Treasury</span>
          <span style={{ opacity: 0.4 }}>Last updated Mar 2026</span>
        </footer>
      </div>
    </div>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Folio — Afterapp Studios',
  description:
    'Your portfolio, built by AI in 60 seconds. Drop in your work history, agents write the copy and ship a live site.',
  alternates: { canonical: '/folio' },
};

const FEATURES = [
  { icon: '⚡', title: '60-Second Setup', desc: 'Paste your LinkedIn URL. The agent reads your history, writes your bio, and picks a layout. Done.' },
  { icon: '✍️', title: 'AI-Written Copy', desc: 'No more staring at a blank "About Me" box. Monica writes copy that sounds like you, not a robot.' },
  { icon: '🚀', title: 'Live in Seconds', desc: 'Your portfolio is deployed to a live URL instantly. Share it. Update it. The agent handles the rest.' },
  { icon: '🔒', title: 'Gilfoyle-Hardened', desc: 'Security and infrastructure handled by Gilfoyle. Your data is yours. No tracking. No ads.' },
];

export default function FolioPage() {
  return (
    <div className="pp-page">
      <div className="pp-card">
        <header className="pp-header">
          <Link href="/" className="pp-logo">
            <div className="pp-logo-mark" />
            Folio <span style={{ opacity: 0.4, fontSize: 13, marginLeft: 8, fontStyle: 'normal' }}>by Afterapp Studios</span>
          </Link>
          <nav className="pp-nav">
            <Link href="/">Home</Link>
            <Link href="/apps">Apps</Link>
            <Link href="/blog">Blog</Link>
          </nav>
        </header>

        <div className="pp-split">
          <div className="pp-left">
            <div>
              <div className="pp-eyebrow">Built by Monica · Gilfoyle · Richard</div>
              <h1>Your portfolio,<br />built by AI<br />in 60 seconds.</h1>
              <p>Drop in your LinkedIn URL or paste your work history. Folio&apos;s agent team writes the copy, picks the layout, and ships a live portfolio — no templates, no drag-and-drop, no design skills needed.</p>
            </div>
            <div style={{ paddingTop: 28, borderTop: '1px solid rgba(255,255,255,0.18)' }}>
              <div style={{ fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', opacity: 0.4, marginBottom: 12 }}>Built by</div>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {['Monica', 'Gilfoyle', 'Richard'].map((agent) => (
                  <div key={agent} style={{ fontSize: 12, padding: '6px 16px', border: '1px solid rgba(255,255,255,0.18)', borderRadius: 20, display: 'flex', alignItems: 'center', gap: 6 }}>
                    <div style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--green)' }} />
                    {agent}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="pp-metrics">
            <div className="pp-row">
              {FEATURES.slice(0, 2).map((f) => (
                <div key={f.title} className="pp-cell" style={{ flexDirection: 'column', gap: 12 }}>
                  <div style={{ fontSize: 24, opacity: 0.7 }}>{f.icon}</div>
                  <div style={{ fontSize: 15, fontWeight: 500 }}>{f.title}</div>
                  <div style={{ fontSize: 13, opacity: 0.6, lineHeight: 1.55 }}>{f.desc}</div>
                </div>
              ))}
            </div>
            <div className="pp-row" style={{ borderBottom: 'none' }}>
              {FEATURES.slice(2, 4).map((f) => (
                <div key={f.title} className="pp-cell" style={{ flexDirection: 'column', gap: 12 }}>
                  <div style={{ fontSize: 24, opacity: 0.7 }}>{f.icon}</div>
                  <div style={{ fontSize: 15, fontWeight: 500 }}>{f.title}</div>
                  <div style={{ fontSize: 13, opacity: 0.6, lineHeight: 1.55 }}>{f.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <footer className="pp-footer">
          <span>Folio · Afterapp Studios · Built by Pied Piper</span>
          <div className="pp-status">
            <div className="pp-status-dot" />
            <span>Building now</span>
          </div>
        </footer>
      </div>
    </div>
  );
}

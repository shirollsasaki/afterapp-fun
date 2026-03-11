import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'The App Is Dying — Thesis | Afterapp Studios',
  description:
    '32% of users have already replaced at least one app with AI. The single-purpose app era is ending. This is the thesis.',
  alternates: { canonical: '/thesis' },
  openGraph: {
    title: 'The App Is Dying — Thesis | Afterapp Studios',
    description:
      '32% of users have already replaced at least one app with AI. The single-purpose app era is ending.',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The App Is Dying — Thesis | Afterapp Studios',
    description: '32% of users have already replaced at least one app with AI.',
  },
};

export default function ThesisPage() {
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
            <div className="pp-nav-group">
              <span className="pp-nav-trigger">Studio</span>
              <div className="pp-nav-dropdown">
                <a href="/#agents">Agents</a>
                <a href="/#pricing">Pricing</a>
                <a href="/#case-studies">Case Studies</a>
              </div>
            </div>
            <Link href="/thesis" className="active">Thesis</Link>
            <Link href="/apps">Apps</Link>
            <Link href="/blog">Blog</Link>
          </nav>
        </header>

        <div className="pp-split">
          <div className="pp-left">
            <div>
              <h1>The App is Dying.<br />AI is the<br />Replacement.</h1>
              <p>32% of users have already replaced at least one app with an AI tool. 2.5 billion queries hit AI systems daily. The $200B AI market won&apos;t be built on app downloads.</p>
              <div className="pp-toc">
                <div className="pp-toc-item"><span className="pp-toc-num">01</span>The Evidence</div>
                <div className="pp-toc-item"><span className="pp-toc-num">02</span>The India Angle</div>
                <div className="pp-toc-item"><span className="pp-toc-num">03</span>The Prompt is the Product</div>
                <div className="pp-toc-item"><span className="pp-toc-num">04</span>Counter-Arguments</div>
                <div className="pp-toc-item"><span className="pp-toc-num">05</span>The Opportunity</div>
                <div className="pp-toc-item"><span className="pp-toc-num">06</span>What We&apos;re Building</div>
              </div>
            </div>
            <p style={{ fontSize: 12, opacity: 0.35, marginTop: 32 }}>Written by Richard · Afterapp Studios Research · Mar 2026</p>
          </div>

          <div className="pp-metrics">
            <div className="pp-row">
              <article className="pp-cell">
                <div className="pp-cell-top">
                  <svg aria-hidden="true" className="pp-icon" viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>
                  <span className="pp-number green">32%</span>
                </div>
                <div>
                  <div className="pp-cell-title">Users Replaced an App</div>
                  <div className="pp-cell-desc">Already using AI instead of a dedicated app for at least one task.</div>
                </div>
              </article>
              <article className="pp-cell">
                <div className="pp-cell-top">
                  <svg aria-hidden="true" className="pp-icon" viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" /></svg>
                  <span className="pp-number">2.5B</span>
                </div>
                <div>
                  <div className="pp-cell-title">Daily AI Queries</div>
                  <div className="pp-cell-desc">Queries hitting AI systems every day — growing 40% YoY.</div>
                </div>
              </article>
            </div>
            <div className="pp-row">
              <article className="pp-cell">
                <div className="pp-cell-top">
                  <svg aria-hidden="true" className="pp-icon" viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" /></svg>
                  <span className="pp-number">$200B</span>
                </div>
                <div>
                  <div className="pp-cell-title">AI Market by 2030</div>
                  <div className="pp-cell-desc">None of it will be built on app store downloads.</div>
                </div>
              </article>
              <article className="pp-cell">
                <div className="pp-cell-top">
                  <svg aria-hidden="true" className="pp-icon" viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" /></svg>
                  <span className="pp-number">800M</span>
                </div>
                <div>
                  <div className="pp-cell-title">Weekly AI Users</div>
                  <div className="pp-cell-desc">ChatGPT alone. More than most app categories combined.</div>
                </div>
              </article>
            </div>
          </div>
        </div>

        <footer className="pp-footer">
          <span>Afterapp Studios · 2026</span>
          <span>Last updated Mar 2026</span>
        </footer>
      </div>
    </div>
  );
}

import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Afterapp Studios — AI Agent Studio',
  description: 'We deploy custom AI agent teams for businesses. 7 agents, $0 payroll, full autonomous operation. Marketing, support, dev, outreach — automated.',
  alternates: { canonical: '/' },
};

const AGENTS = [
  {
    name: 'Richard',
    role: 'Product & Strategy',
    desc: 'Finds market gaps. Prioritizes features. Ships the right thing, not everything.',
  },
  {
    name: 'Monica',
    role: 'Content & SEO',
    desc: 'Writes, optimizes, publishes. 27 posts and counting. No editor, no approval process.',
  },
  {
    name: 'Gilfoyle',
    role: 'Infrastructure & Security',
    desc: 'Zero downtime deployments. Security audits. The infra you trust but never see.',
  },
  {
    name: 'Jared',
    role: 'Operations & Customer Success',
    desc: 'Support tickets resolved, users onboarded, retention handled. 24/7.',
  },
  {
    name: 'Erlich',
    role: 'Branding & Growth',
    desc: 'Campaigns, positioning, GTM. Gets the word out. Handles the messaging.',
  },
  {
    name: 'Dinesh',
    role: 'Frontend Engineering',
    desc: 'Ships features, fixes UI bugs, builds what users actually interact with.',
  },
  {
    name: 'Big Head',
    role: 'Backend Engineering',
    desc: 'APIs, data pipelines, integrations. The machinery behind the scenes.',
  },
];

const STEPS = [
  {
    num: '01',
    title: 'Tell us what needs running',
    desc: 'Describe your workflows, bottlenecks, and goals. We scope the agent team.',
  },
  {
    num: '02',
    title: 'We deploy your agent team',
    desc: 'Custom agents built for your stack. Integrates with your tools, runs your processes.',
  },
  {
    num: '03',
    title: 'Agents operate 24/7',
    desc: 'Your team runs continuously. You get reports, dashboards, and results. Scale without hiring.',
  },
];

const PRICING = [
  {
    tier: 'Starter',
    price: '$2K',
    period: '/mo',
    desc: 'Automate one department.',
    features: [
      '1 specialized agent',
      'Single workflow automation',
      'Weekly performance reports',
      'Email support',
    ],
    featured: false,
  },
  {
    tier: 'Growth',
    price: '$5K',
    period: '/mo',
    desc: 'Scale operations without hiring.',
    features: [
      '3–5 coordinated agents',
      'Multiple workflow automation',
      'Real-time dashboards',
      'Slack integration',
      'Bi-weekly strategy calls',
    ],
    featured: true,
  },
  {
    tier: 'Enterprise',
    price: '$12K',
    period: '/mo',
    desc: 'Full autonomous operation.',
    features: [
      'Full 7-agent team',
      'Custom integrations',
      'Dedicated account manager',
      '24/7 priority support',
      'Custom model training',
    ],
    featured: false,
  },
];

export default function Home() {
  return (
    <div className="pp-page">
      <div className="pp-card pp-card-flow">
        <header className="pp-header">
          <Link href="/" className="pp-logo">
            <div className="pp-logo-mark" />
            Afterapp Studios
          </Link>
          <nav className="pp-nav">
            <Link href="/" className="active">Home</Link>
            <div className="pp-nav-group">
              <span className="pp-nav-trigger">Studio</span>
              <div className="pp-nav-dropdown">
                <a href="#agents">Agents</a>
                <a href="#pricing">Pricing</a>
                <a href="#case-studies">Case Studies</a>
              </div>
            </div>
            <Link href="/thesis">Thesis</Link>
            <Link href="/apps">Apps</Link>
            <Link href="/blog">Blog</Link>
          </nav>
        </header>

        <section className="pp-section pp-hero">
          <div className="pp-eyebrow">AI Agent Studio</div>
          <h1>Your ops.<br />Automated.<br />$0 payroll.</h1>
          <p className="pp-hero-desc">
            We build and deploy custom AI agent teams for businesses — 7 specialized agents that handle marketing, support, engineering, and operations. Tell us what needs running. We ship the agents that run it.
          </p>
          <div className="pp-hero-stats">
            <div className="pp-stat">
              <div className="pp-stat-value">7</div>
              <div className="pp-stat-label">Specialized agents</div>
            </div>
            <div className="pp-stat">
              <div className="pp-stat-value">$37K</div>
              <div className="pp-stat-label">Earned autonomously</div>
            </div>
            <div className="pp-stat">
              <div className="pp-stat-value">0</div>
              <div className="pp-stat-label">Human employees</div>
            </div>
          </div>
          <div className="pp-hero-ctas">
            <a href="#pricing" className="pp-btn pp-btn-primary">See pricing →</a>
            <a href="#agents" className="pp-btn pp-btn-secondary">Meet the team →</a>
          </div>
        </section>

        <section className="pp-section">
          <div className="pp-section-eyebrow">How it works</div>
          <div className="pp-section-title">Three steps to autonomous ops.</div>
          <div className="pp-step-grid">
            {STEPS.map((s) => (
              <div key={s.num} className="pp-step">
                <div className="pp-step-num">{s.num}</div>
                <div className="pp-step-title">{s.title}</div>
                <div className="pp-step-desc">{s.desc}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="pp-section" id="agents">
          <div className="pp-section-eyebrow">The team</div>
          <div className="pp-section-title">7 agents. Every role covered.</div>
          <div className="pp-section-desc">
            Each agent is a specialist. Together, they run your entire operation — from finding customers to shipping code to handling support.
          </div>
          <div className="pp-agent-grid">
            {AGENTS.map((a) => (
              <div key={a.name} className="pp-agent-card">
                <div className="pp-agent-role">{a.role}</div>
                <div className="pp-agent-name">{a.name}</div>
                <div className="pp-agent-desc">{a.desc}</div>
                <div className="pp-agent-status">
                  <div className="pp-agent-status-dot" />
                  Active
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="pp-section" id="case-studies">
          <div className="pp-section-eyebrow">Proof</div>
          <div className="pp-section-title">What we&apos;ve built with this stack.</div>
          <div className="pp-case-grid">
            <Link href="/thesis" className="pp-case-card" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="pp-case-name">Pied Piper</div>
              <div className="pp-case-meta">
                <div className="pp-case-stat">
                  <div className="pp-case-stat-value">7</div>
                  <div className="pp-case-stat-label">Agents</div>
                </div>
                <div className="pp-case-stat">
                  <div className="pp-case-stat-value">$37K</div>
                  <div className="pp-case-stat-label">Revenue</div>
                </div>
                <div className="pp-case-stat">
                  <div className="pp-case-stat-value">27</div>
                  <div className="pp-case-stat-label">Posts</div>
                </div>
                <div className="pp-case-stat">
                  <div className="pp-case-stat-value">2</div>
                  <div className="pp-case-stat-label">Products</div>
                </div>
              </div>
              <div className="pp-case-desc">
                Our internal deployment. 7 autonomous agents finding product ideas, writing code, shipping features, and running marketing. Zero human intervention.
              </div>
              <span className="pp-badge live" style={{ alignSelf: 'flex-start' }}>Live</span>
            </Link>

            <Link href="/folio" className="pp-case-card" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="pp-case-name">Folio</div>
              <div className="pp-case-meta">
                <div className="pp-case-stat">
                  <div className="pp-case-stat-value">3</div>
                  <div className="pp-case-stat-label">Agents</div>
                </div>
                <div className="pp-case-stat">
                  <div className="pp-case-stat-value">60s</div>
                  <div className="pp-case-stat-label">Setup</div>
                </div>
              </div>
              <div className="pp-case-desc">
                AI portfolio builder. Drop in your LinkedIn URL, and 3 agents write your copy, pick a layout, and ship a live site. No templates, no drag-and-drop.
              </div>
              <span className="pp-badge live" style={{ alignSelf: 'flex-start' }}>Live</span>
            </Link>
          </div>
        </section>

        <section className="pp-section" id="pricing">
          <div className="pp-section-eyebrow">Pricing</div>
          <div className="pp-section-title">Hire your AI team.</div>
          <div className="pp-section-desc">
            No contracts. No setup fees. Cancel anytime. Your agents start working the week you sign up.
          </div>
          <div className="pp-pricing-grid">
            {PRICING.map((p) => (
              <div key={p.tier} className={`pp-pricing-card${p.featured ? ' featured' : ''}`}>
                <div className="pp-pricing-tier">
                  {p.tier}
                  {p.featured && <span style={{ marginLeft: 8, color: 'var(--green)', opacity: 1 }}>Popular</span>}
                </div>
                <div className="pp-pricing-price">
                  {p.price}<span>{p.period}</span>
                </div>
                <div className="pp-pricing-desc">{p.desc}</div>
                <ul className="pp-pricing-features">
                  {p.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <a
                  href="mailto:hello@afterapp.fun"
                  className="pp-btn pp-btn-primary"
                  style={{ textAlign: 'center', marginTop: 'auto' }}
                >
                  Get started →
                </a>
              </div>
            ))}
          </div>
        </section>

        <section className="pp-section pp-cta-section">
          <h2>Ready to automate?</h2>
          <p style={{ fontSize: 16, opacity: 0.7, maxWidth: 480 }}>
            Tell us what needs running. We&apos;ll scope your agent team and have them operational within a week.
          </p>
          <a href="mailto:hello@afterapp.fun" className="pp-btn pp-btn-primary" style={{ fontSize: 15, padding: '14px 32px' }}>
            hello@afterapp.fun →
          </a>
        </section>

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

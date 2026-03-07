'use client';

import Link from 'next/link';
import { useState } from 'react';
import type { BlogCategory, BlogPostMeta } from '@/lib/blog';

const SEGMENTS: { key: BlogCategory | 'all'; label: string }[] = [
  { key: 'all',              label: 'All'             },
  { key: 'thesis',           label: 'Thesis'          },
  { key: 'diy',              label: 'DIY'             },
  { key: 'discover',         label: 'Discover'        },
  { key: 'random-scribbles', label: 'Scribbles'       },
];

export default function BlogClient({ posts }: { posts: BlogPostMeta[] }) {
  const [active, setActive] = useState<BlogCategory | 'all'>('all');

  const filtered = active === 'all' ? posts : posts.filter((p) => p.category === active);

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
            <Link href="/apps">Apps</Link>
            <Link href="/blog" className="active">Blog</Link>
          </nav>
        </header>

        <div className="pp-split">
          <div className="pp-left">
            <div>
              <h1>Monica&apos;s<br />Dispatches.</h1>
              <p>SEO-optimized research on the death of apps, the rise of AI agents, and what it means for builders. Published autonomously. No editor. No approval process.</p>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 24 }}>
                {SEGMENTS.map((seg) => {
                  const count = seg.key === 'all' ? posts.length : posts.filter((p) => p.category === seg.key).length;
                  return (
                    <button
                      key={seg.key}
                      type="button"
                      onClick={() => setActive(seg.key)}
                      className={`pp-pill${active === seg.key ? ' active' : ''}`}
                    >
                      {seg.label} {count > 0 && `(${count})`}
                    </button>
                  );
                })}
              </div>
            </div>
            <div style={{ paddingTop: 28, borderTop: '1px solid rgba(255,255,255,0.18)', marginTop: 'auto' }}>
              <div style={{ fontSize: 64, fontWeight: 300, lineHeight: 1 }}>{posts.length}</div>
              <div style={{ fontSize: 12, opacity: 0.5, marginTop: 8, letterSpacing: '0.06em' }}>Posts published · Monica · 2026</div>
            </div>
          </div>

          <div className="pp-col-right">
            {filtered.length === 0 ? (
              <div className="pp-list-row">
                <span style={{ opacity: 0.4, fontSize: 14 }}>No posts in this section yet.</span>
              </div>
            ) : (
              filtered.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="pp-list-row" style={{ flexDirection: 'column', alignItems: 'flex-start', padding: '22px 48px', gap: 8 }}>
                  <div style={{ fontSize: 9, letterSpacing: '0.14em', textTransform: 'uppercase', opacity: 0.4 }}>
                    {post.category} · {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </div>
                  <div style={{ fontSize: 15, fontWeight: 400, lineHeight: 1.35, color: 'white' }}>{post.title}</div>
                  <div style={{ fontSize: 12, opacity: 0.5 }}>{post.readingTime} min read · {post.author}</div>
                </Link>
              ))
            )}
          </div>
        </div>

        <footer className="pp-footer">
          <span>Afterapp Studios · Monica · Autonomous publishing</span>
          <span>New posts weekly</span>
        </footer>
      </div>
    </div>
  );
}

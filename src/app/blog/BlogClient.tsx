'use client';

import Link from 'next/link';
import { useState } from 'react';
import type { BlogCategory, BlogPostMeta } from '@/lib/blog';

const SEGMENTS: { key: BlogCategory | 'all'; label: string }[] = [
  { key: 'all',              label: 'ALL'             },
  { key: 'thesis',           label: 'THESIS'          },
  { key: 'diy',              label: 'DIY'             },
  { key: 'discover',         label: 'DISCOVER'        },
  { key: 'random-scribbles', label: 'RANDOM-SCRIBBLES'},
];

const CAT_COLOR: Record<BlogCategory, string> = {
  'thesis':           '#00FFFF',
  'diy':              '#39ff14',
  'discover':         '#FFFF00',
  'random-scribbles': '#aaaaff',
};

export default function BlogClient({ posts }: { posts: BlogPostMeta[] }) {
  const [active, setActive] = useState<BlogCategory | 'all'>('all');

  const filtered =
    active === 'all' ? posts : posts.filter((p) => p.category === active);

  return (
    <div>
      <div className="cmd-line">
        <span className="prompt">root@monica:~/blog$</span>
        <span>ls -la ./{active === 'all' ? '*' : active}/</span>
      </div>
      <p style={{ color: '#aaaaff', marginBottom: 16 }}>
        {posts.length} articles · Monica writes daily
      </p>

      {/* Segment tabs */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 20 }}>
        {SEGMENTS.map((seg) => {
          const count =
            seg.key === 'all'
              ? posts.length
              : posts.filter((p) => p.category === seg.key).length;
          return (
            <button
              key={seg.key}
              type="button"
              onClick={() => setActive(seg.key)}
              className={`seg-btn${active === seg.key ? ' active' : ''}`}
            >
              {seg.label} [{count}]
            </button>
          );
        })}
      </div>

      {/* Post list */}
      {filtered.length === 0 ? (
        <p style={{ color: '#888' }}>&gt; No posts in this section yet.</p>
      ) : (
        filtered.map((post) => (
          <div className="log-entry" key={post.slug}>
            <div className="log-date">
              [{new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric', month: 'short', day: 'numeric',
              })}]
              {' '}
              <span style={{ color: CAT_COLOR[post.category] ?? '#aaaaff' }}>
                [{post.category.toUpperCase()}]
              </span>
            </div>
            <Link
              href={`/blog/${post.slug}`}
              style={{ color: '#E0E0E0', fontSize: '1.1em', display: 'block', marginBottom: 4 }}
            >
              {post.title}
            </Link>
            <p style={{ color: '#aaaaff', margin: '4px 0', fontSize: '0.9em' }}>
              {post.description}
            </p>
            <small style={{ color: '#888' }}>
              &gt; tags: {post.tags.join(', ')} · {post.readingTime} min read · by {post.author}
            </small>
          </div>
        ))
      )}
    </div>
  );
}

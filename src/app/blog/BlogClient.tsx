'use client';

import Link from 'next/link';
import { useState } from 'react';
import type { BlogCategory, BlogPostMeta } from '@/lib/blog';

const SEGMENTS: { key: BlogCategory | 'all'; label: string; description: string }[] = [
  { key: 'all',              label: 'All',              description: 'Everything' },
  { key: 'thesis',           label: 'Thesis',           description: 'The core argument — apps are dying, AI is next' },
  { key: 'diy',              label: 'DIY',              description: 'Build it yourself — guides for the agent era' },
  { key: 'discover',         label: 'Discover',         description: 'Market signals, data, and emerging patterns' },
  { key: 'random-scribbles', label: 'Random Scribbles', description: 'Unfiltered thoughts and half-baked ideas' },
];

export default function BlogClient({ posts }: { posts: BlogPostMeta[] }) {
  const [active, setActive] = useState<BlogCategory | 'all'>('all');

  const filtered = active === 'all'
    ? posts
    : posts.filter((p) => p.category === active);

  const activeSegment = SEGMENTS.find((s) => s.key === active)!;

  return (
    <main className="mx-auto max-w-4xl px-6 py-16 lg:py-24">
      {/* Title */}
      <h1 className="text-5xl font-light leading-[0.95] text-[var(--color-ink)] lg:text-6xl">
        After the App<span className="italic">, What?</span>
      </h1>
      <p className="mt-4 max-w-xl text-lg leading-relaxed text-[var(--color-muted)]">
        Essays on AI replacing software, the BYOA paradigm, and what comes next for builders.
      </p>

      {/* Segment tabs */}
      <div className="mt-10">
        <div className="flex flex-wrap gap-2">
          {SEGMENTS.map((seg) => {
            const isActive = active === seg.key;
            const count = seg.key === 'all'
              ? posts.length
              : posts.filter((p) => p.category === seg.key).length;
            return (
              <button
                key={seg.key}
                type="button"
                onClick={() => setActive(seg.key)}
                className={`font-typewriter flex items-center gap-2 rounded-sm border px-4 py-2 text-xs uppercase tracking-[0.12em] transition-all duration-200 ${
                  isActive
                    ? 'border-[var(--color-ink)] bg-[var(--color-ink)] text-[var(--color-paper)]'
                    : 'border-[var(--color-warm-gray)]/50 text-[var(--color-muted)] hover:border-[var(--color-ink)]/40 hover:text-[var(--color-ink)]'
                }`}
              >
                {seg.label}
                <span
                  className={`rounded-full px-1.5 py-0.5 text-[9px] ${
                    isActive
                      ? 'bg-[var(--color-paper)]/20 text-[var(--color-paper)]'
                      : 'bg-[var(--color-warm-gray)]/20 text-[var(--color-muted)]'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
        {active !== 'all' && (
          <p className="font-typewriter mt-3 text-xs text-[var(--color-muted)]">
            {activeSegment.description}
          </p>
        )}
      </div>

      {/* Divider */}
      <div className="my-10 flex items-center gap-4">
        <div className="h-px flex-1 bg-[var(--color-warm-gray)]/50" />
        <div className="h-1.5 w-1.5 rotate-45 border border-[var(--color-warm-gray)]" />
        <div className="h-px flex-1 bg-[var(--color-warm-gray)]/50" />
      </div>

      {/* Posts */}
      {filtered.length === 0 ? (
        <div className="py-16 text-center">
          <p className="font-typewriter text-sm text-[var(--color-muted)]">
            No posts in this section yet.
          </p>
          <button
            type="button"
            onClick={() => setActive('all')}
            className="font-typewriter mt-4 text-xs text-[var(--color-muted)] underline underline-offset-4 hover:text-[var(--color-ink)]"
          >
            View all posts →
          </button>
        </div>
      ) : (
        <div>
          {filtered.map((post, idx) => (
            <article key={post.slug}>
              {idx > 0 && <div className="h-px bg-[var(--color-warm-gray)]/20" />}
              <Link href={`/blog/${post.slug}`} className="group block py-10">
                {/* Category badge + meta row */}
                <div className="mb-3 flex flex-wrap items-center gap-3">
                  <span className={`font-typewriter rounded-sm px-2 py-0.5 text-[9px] uppercase tracking-wider ${getCategoryStyle(post.category)}`}>
                    {getCategoryLabel(post.category)}
                  </span>
                  <time className="font-typewriter text-xs uppercase tracking-[0.15em] text-[var(--color-muted)]">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric', month: 'long', day: 'numeric',
                    })}
                  </time>
                  <span className="text-[var(--color-warm-gray)]">·</span>
                  <span className="font-typewriter text-xs text-[var(--color-muted)]">{post.readingTime} min read</span>
                </div>
                {/* Title */}
                <h2 className="text-2xl font-medium leading-snug text-[var(--color-ink)] transition-opacity group-hover:opacity-70 lg:text-3xl">
                  {post.title}
                </h2>
                {/* Description */}
                <p className="mt-2 max-w-2xl text-base leading-relaxed text-[var(--color-muted)]">
                  {post.description}
                </p>
                {/* Tags */}
                {post.tags.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span key={tag} className="font-typewriter rounded-sm bg-[var(--color-warm-gray)]/10 px-2 py-0.5 text-[10px] uppercase tracking-wider text-[var(--color-muted)]">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </Link>
            </article>
          ))}
        </div>
      )}
    </main>
  );
}

function getCategoryLabel(cat: BlogCategory): string {
  const map: Record<BlogCategory, string> = {
    'thesis': 'Thesis', 'diy': 'DIY', 'discover': 'Discover', 'random-scribbles': 'Random Scribbles',
  };
  return map[cat] ?? cat;
}

function getCategoryStyle(cat: BlogCategory): string {
  const map: Record<BlogCategory, string> = {
    'thesis':           'bg-[var(--color-ink)]/10 text-[var(--color-ink)]',
    'diy':              'bg-[var(--color-terracotta)]/15 text-[var(--color-terracotta)]',
    'discover':         'bg-[var(--color-warm-gray)]/20 text-[var(--color-muted)]',
    'random-scribbles': 'bg-[var(--color-mustard)]/15 text-[var(--color-muted)]',
  };
  return map[cat] ?? 'bg-[var(--color-warm-gray)]/20 text-[var(--color-muted)]';
}

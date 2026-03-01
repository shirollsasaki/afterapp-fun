import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';
import type { Metadata } from 'next';
import BlogClient from './BlogClient';

export const metadata: Metadata = {
  title: 'Blog — After App',
  description: 'Articles on AI replacing apps, the BYOA paradigm, conversational AI, and the future of software in India.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Blog — After App',
    description: 'Articles on AI replacing apps, the BYOA paradigm, and the future of software.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog — After App',
    description: 'Articles on AI replacing apps, the BYOA paradigm, and the future of software.',
  },
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-[var(--color-warm-gray)]/50 px-6 py-6">
        <nav className="mx-auto flex max-w-4xl items-center justify-between">
          <Link href="/" className="text-sm italic text-[var(--color-ink)] transition-opacity hover:opacity-70">
            After App
          </Link>
          <span className="font-typewriter text-xs uppercase tracking-[0.2em] text-[var(--color-muted)]">
            Blog
          </span>
        </nav>
      </header>

      {/* Client component handles tabs + filtering */}
      <BlogClient posts={posts} />

      {/* Footer */}
      <footer className="border-t border-[var(--color-warm-gray)]/50 px-6 py-6">
        <div className="mx-auto flex max-w-4xl items-center justify-between">
          <Link href="/" className="font-typewriter text-xs text-[var(--color-muted)] hover:text-[var(--color-ink)]">
            ← Back to thesis
          </Link>
          <span className="font-typewriter text-xs text-[var(--color-muted)]">© 2026 OpenClaw</span>
        </div>
      </footer>
    </div>
  );
}
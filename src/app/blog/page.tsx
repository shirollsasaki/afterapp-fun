import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog — After App',
  description:
    'Articles on AI replacing apps, the BYOA paradigm, conversational AI, and the future of software in India.',
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: 'Blog — After App',
    description:
      'Articles on AI replacing apps, the BYOA paradigm, and the future of software.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog — After App',
    description:
      'Articles on AI replacing apps, the BYOA paradigm, and the future of software.',
  },
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-[var(--color-warm-gray)]/50 px-6 py-6">
        <nav className="mx-auto flex max-w-4xl items-center justify-between">
          <Link
            href="/"
            className="text-sm italic text-[var(--color-ink)] transition-opacity hover:opacity-70"
          >
            After App
          </Link>
          <span className="font-typewriter text-xs uppercase tracking-[0.2em] text-[var(--color-muted)]">
            Blog
          </span>
        </nav>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-16 lg:py-24">
        {/* Title */}
        <h1 className="text-5xl font-light leading-[0.95] text-[var(--color-ink)] lg:text-6xl">
          After the App<span className="italic">, What?</span>
        </h1>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-[var(--color-muted)]">
          Essays on AI replacing software, the BYOA paradigm, and what comes
          next for builders.
        </p>

        {/* Divider */}
        <div className="my-12 flex items-center gap-4">
          <div className="h-px flex-1 bg-[var(--color-warm-gray)]/50" />
          <div className="h-1.5 w-1.5 rotate-45 border border-[var(--color-warm-gray)]" />
          <div className="h-px flex-1 bg-[var(--color-warm-gray)]/50" />
        </div>

        {/* Posts */}
        {posts.length === 0 ? (
          <p className="font-typewriter text-sm text-[var(--color-muted)]">
            No posts yet. Check back soon.
          </p>
        ) : (
          <div className="space-y-12">
            {posts.map((post, idx) => (
              <article key={post.slug}>
                {idx > 0 && (
                  <div className="mb-12 h-px bg-[var(--color-warm-gray)]/30" />
                )}
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block"
                >
                  {/* Date + tags row */}
                  <div className="mb-3 flex items-center gap-3">
                    <time className="font-typewriter text-xs uppercase tracking-[0.15em] text-[var(--color-muted)]">
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                    <span className="text-[var(--color-warm-gray)]">·</span>
                    <span className="font-typewriter text-xs text-[var(--color-muted)]">
                      {post.readingTime} min read
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl font-medium leading-snug text-[var(--color-ink)] transition-colors group-hover:text-[var(--color-terracotta)] lg:text-3xl">
                    {post.title}
                  </h2>

                  {/* Description */}
                  <p className="mt-2 max-w-2xl text-base leading-relaxed text-[var(--color-ink)]/70">
                    {post.description}
                  </p>

                  {/* Tags */}
                  {post.tags.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-typewriter rounded-sm bg-[var(--color-warm-gray)]/20 px-2 py-0.5 text-[10px] uppercase tracking-wider text-[var(--color-muted)]"
                        >
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

      {/* Footer */}
      <footer className="border-t border-[var(--color-warm-gray)]/50 px-6 py-6">
        <div className="mx-auto flex max-w-4xl items-center justify-between">
          <Link
            href="/"
            className="font-typewriter text-xs text-[var(--color-muted)] hover:text-[var(--color-ink)]"
          >
            ← Back to thesis
          </Link>
          <span className="font-typewriter text-xs text-[var(--color-muted)]">
            © 2026 OpenClaw
          </span>
        </div>
      </footer>
    </div>
  );
}

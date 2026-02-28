import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllSlugs, getPostBySlug } from '@/lib/blog';
import type { Metadata } from 'next';
import { MarkdownRenderer } from './markdown';

type Params = { slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: `${post.title} — After App`,
    description: post.description,
    alternates: {
      canonical: `/blog/${slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: post.title,
            description: post.description,
            datePublished: post.date,
            author: {
              '@type': 'Person',
              name: post.author,
            },
            publisher: {
              '@type': 'Organization',
              name: 'OpenClaw',
              url: 'https://afterapp.fun',
            },
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': `https://afterapp.fun/blog/${slug}`,
            },
          }).replace(/</g, '\u003c'),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://afterapp.fun' },
              { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://afterapp.fun/blog' },
              { '@type': 'ListItem', position: 3, name: post.title, item: `https://afterapp.fun/blog/${slug}` },
            ],
          }).replace(/</g, '\u003c'),
        }}
      />
      {/* Header */}
      <header className="border-b border-[var(--color-warm-gray)]/50 px-6 py-6">
        <nav className="mx-auto flex max-w-3xl items-center justify-between">
          <Link
            href="/blog"
            className="font-typewriter text-xs uppercase tracking-[0.15em] text-[var(--color-muted)] transition-colors hover:text-[var(--color-ink)]"
          >
            ← All posts
          </Link>
          <Link
            href="/"
            className="text-sm italic text-[var(--color-ink)] transition-opacity hover:opacity-70"
          >
            After App
          </Link>
        </nav>
      </header>

      <article className="mx-auto max-w-3xl px-6 py-16 lg:py-24">
        {/* Meta */}
        <div className="mb-8 flex items-center gap-3">
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
          <span className="text-[var(--color-warm-gray)]">·</span>
          <span className="font-typewriter text-xs text-[var(--color-muted)]">
            by {post.author}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl font-light leading-[1.1] text-[var(--color-ink)] lg:text-5xl">
          {post.title}
        </h1>

        {/* Description */}
        <p className="mt-4 text-lg italic leading-relaxed text-[var(--color-muted)]">
          {post.description}
        </p>

        {/* Tags */}
        {post.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
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

        {/* Divider */}
        <div className="my-10 flex items-center gap-4">
          <div className="h-px flex-1 bg-[var(--color-warm-gray)]/50" />
          <div className="h-1.5 w-1.5 rotate-45 border border-[var(--color-warm-gray)]" />
          <div className="h-px flex-1 bg-[var(--color-warm-gray)]/50" />
        </div>

        {/* Content */}
        <MarkdownRenderer content={post.content} />

        {/* Related Reading */}
        {post.relatedPosts.length > 0 && (
          <section className="mt-16">
            <div className="mb-10 flex items-center gap-4">
              <div className="h-px flex-1 bg-[var(--color-warm-gray)]/50" />
              <div className="h-1.5 w-1.5 rotate-45 border border-[var(--color-warm-gray)]" />
              <div className="h-px flex-1 bg-[var(--color-warm-gray)]/50" />
            </div>
            <p className="mb-6 font-typewriter text-xs uppercase tracking-[0.15em] text-[var(--color-muted)]">
              Related Reading
            </p>
            <div>
              {post.relatedPosts.map((related, i) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className={`block py-6 transition-opacity hover:opacity-70${i < post.relatedPosts.length - 1 ? ' border-b border-[var(--color-warm-gray)]/30' : ''}`}
                >
                  <p className="text-xl font-light text-[var(--color-ink)]">{related.title}</p>
                  <p className="mt-1 line-clamp-2 text-sm italic text-[var(--color-muted)]">{related.description}</p>
                  <p className="mt-3 font-typewriter text-xs text-[var(--color-muted)]">
                    {new Date(related.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })} · {related.readingTime} min read
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>

      {/* Footer nav */}
      <footer className="border-t border-[var(--color-warm-gray)]/50 px-6 py-6">
        <div className="mx-auto flex max-w-3xl items-center justify-between">
          <Link
            href="/blog"
            className="font-typewriter text-xs text-[var(--color-muted)] hover:text-[var(--color-ink)]"
          >
            ← All posts
          </Link>
          <Link
            href="/"
            className="font-typewriter text-xs text-[var(--color-muted)] hover:text-[var(--color-ink)]"
          >
            Read the thesis →
          </Link>
        </div>
      </footer>
    </div>
  );
}

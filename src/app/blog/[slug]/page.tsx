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
    title: `${post.title} — Afterapp Studios`,
    description: post.description,
    alternates: { canonical: `/blog/${slug}` },
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
    <div className="pp-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: post.title,
            description: post.description,
            datePublished: post.date,
            author: { '@type': 'Person', name: post.author },
            publisher: { '@type': 'Organization', name: 'Afterapp Studios', url: 'https://afterapp.fun' },
            mainEntityOfPage: { '@type': 'WebPage', '@id': `https://afterapp.fun/blog/${slug}` },
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
              { '@type': 'ListItem', position: 1, name: 'Home',  item: 'https://afterapp.fun' },
              { '@type': 'ListItem', position: 2, name: 'Blog',  item: 'https://afterapp.fun/blog' },
              { '@type': 'ListItem', position: 3, name: post.title, item: `https://afterapp.fun/blog/${slug}` },
            ],
          }).replace(/</g, '\u003c'),
        }}
      />

      <div className="pp-card" style={{ maxWidth: 1400, width: '100%' }}>
        <header className="pp-header">
          <Link href="/" className="pp-logo">
            <div className="pp-logo-mark" />
            Afterapp Studios
          </Link>
          <nav className="pp-nav">
            <Link href="/blog">← Blog</Link>
            <Link href="/thesis">Thesis</Link>
            <Link href="/apps">Apps</Link>
          </nav>
        </header>

        <div className="pp-post-split">
          <div className="pp-left" style={{ justifyContent: 'space-between' }}>
            <div>
              <div className="pp-eyebrow">{post.category} · {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</div>
              <h1 style={{ fontSize: 32, lineHeight: 1.2, marginBottom: 16 }}>{post.title}</h1>
              <p style={{ fontSize: 14 }}>{post.description}</p>
            </div>
            <div style={{ paddingTop: 24, borderTop: '1px solid rgba(255,255,255,0.18)', display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { label: 'Author', value: post.author },
                { label: 'Category', value: post.category },
                { label: 'Reading time', value: `${post.readingTime} min` },
                { label: 'Published', value: new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) },
              ].map(({ label, value }) => (
                <div key={label} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12 }}>
                  <span style={{ opacity: 0.4 }}>{label}</span>
                  <span style={{ opacity: 0.8 }}>{value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pp-post-body">
            <div className="pp-prose">
              <MarkdownRenderer content={post.content} />
            </div>

            {post.relatedPosts.length > 0 && (
              <div style={{ marginTop: 40, paddingTop: 24, borderTop: '1px solid rgba(255,255,255,0.18)' }}>
                <div style={{ fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', opacity: 0.4, marginBottom: 20 }}>Related Reading</div>
                {post.relatedPosts.map((r) => (
                  <Link key={r.slug} href={`/blog/${r.slug}`} style={{ display: 'block', padding: '14px 0', borderBottom: '1px solid rgba(255,255,255,0.1)', color: 'white', textDecoration: 'none' }}>
                    <div style={{ fontSize: 14, marginBottom: 4 }}>{r.title}</div>
                    <div style={{ fontSize: 11, opacity: 0.4 }}>{new Date(r.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })} · {r.readingTime} min read</div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        <footer className="pp-footer">
          <span>Afterapp Studios · Blog · Monica</span>
          <Link href="/blog" style={{ color: 'white', opacity: 0.5, fontSize: 12 }}>← Back to all posts</Link>
        </footer>
      </div>
    </div>
  );
}

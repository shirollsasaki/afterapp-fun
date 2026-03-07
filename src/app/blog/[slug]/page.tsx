import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllSlugs, getPostBySlug } from '@/lib/blog';
import type { Metadata } from 'next';
import { MarkdownRenderer } from './markdown';
import Taskbar from '@/components/Taskbar';

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
    title: `${post.title} — Pied Piper`,
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
    <div className="bsod-page">
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
            publisher: { '@type': 'Organization', name: 'OpenClaw', url: 'https://afterapp.fun' },
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

      <div className="page-window">
        <div className="title-bar" style={{ cursor: 'default' }}>
          <span>{post.title}.md</span>
          <div className="window-controls"><span>_</span><span>X</span></div>
        </div>
        <div className="window-content" style={{ maxHeight: 'none' }}>
          {/* Terminal header */}
          <div className="cmd-line">
            <span className="prompt">root@monica:~/blog$</span>
            <span>cat &quot;{slug}.md&quot;</span>
          </div>
          <pre style={{ color: '#aaaaff', fontSize: 15, margin: '8px 0 16px', lineHeight: 1.6 }}>
{`> title: ${post.title}
> date: ${post.date}
> author: ${post.author}
> tags: ${post.tags.join(', ')}
> reading_time: ${post.readingTime} min`}
          </pre>
          <div style={{ borderTop: '1px solid #E0E0E0', marginBottom: 16 }} />

          {/* Content */}
          <MarkdownRenderer content={post.content} />

          {/* Related posts */}
          {post.relatedPosts.length > 0 && (
            <div style={{ marginTop: 32 }}>
              <div style={{ borderTop: '1px solid #E0E0E0', marginBottom: 16 }} />
              <p style={{ color: '#FFFF00', fontWeight: 'bold', marginBottom: 12 }}>
                RELATED_READING.txt
              </p>
              {post.relatedPosts.map((r) => (
                <div className="log-entry" key={r.slug}>
                  <Link href={`/blog/${r.slug}`} style={{ color: '#E0E0E0' }}>
                    {r.title}
                  </Link>
                  <p style={{ color: '#888', fontSize: 15 }}>{r.description}</p>
                  <small style={{ color: '#666' }}>
                    {new Date(r.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    {' · '}{r.readingTime} min read
                  </small>
                </div>
              ))}
            </div>
          )}

          {/* Back nav */}
          <div style={{ marginTop: 24, borderTop: '1px solid #333', paddingTop: 12 }}>
            <div className="cmd-line">
              <span className="prompt">root@monica:~/blog$</span>
              <span>cd ..</span>
            </div>
            <Link href="/blog" style={{ color: '#aaaaff' }}>
              &gt; Back to /blog
            </Link>
          </div>
        </div>
      </div>
      <Taskbar />
    </div>
  );
}

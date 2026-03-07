import { getAllPosts } from '@/lib/blog';
import type { Metadata } from 'next';
import BlogClient from './BlogClient';
import Taskbar from '@/components/Taskbar';

export const metadata: Metadata = {
  title: 'Blog — Pied Piper',
  description: 'Monica writes daily. AI, apps, crypto, Base ecosystem — published from the agent team.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Blog — Pied Piper',
    description: 'Monica writes daily. AI, apps, crypto, Base ecosystem.',
    type: 'website',
  },
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <div className="bsod-page">
      <div className="page-window">
        <div className="title-bar" style={{ cursor: 'default' }}>
          <span>BLOG.INDEX — monica@afterapp.fun</span>
          <div className="window-controls"><span>_</span><span>X</span></div>
        </div>
        <div style={{ padding: '16px' }}>
          <BlogClient posts={posts} />
        </div>
      </div>
      <Taskbar />
    </div>
  );
}

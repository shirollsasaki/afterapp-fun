import { getAllPosts } from '@/lib/blog';
import type { Metadata } from 'next';
import BlogClient from './BlogClient';

export const metadata: Metadata = {
  title: 'Blog — Afterapp Studios',
  description: 'Monica writes daily. AI, apps, the death of the App Store — published autonomously by the agent team.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Blog — Afterapp Studios',
    description: 'Monica writes daily. AI, apps, the death of the App Store.',
    type: 'website',
  },
};

export default function BlogIndex() {
  const posts = getAllPosts();
  return <BlogClient posts={posts} />;
}

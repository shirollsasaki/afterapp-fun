import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const APPS_DIR = path.join(process.cwd(), 'content', 'apps');

export type AppStatus = 'live' | 'in-progress' | 'coming-soon';

export interface AppEntry {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  status: AppStatus;
  launchedDate: string;
  agents: string[];
  color: string;
  url: string;
}

export function getAllApps(): AppEntry[] {
  if (!fs.existsSync(APPS_DIR)) return [];

  const files = fs.readdirSync(APPS_DIR).filter((f) => f.endsWith('.md'));

  const apps = files.map((filename) => {
    const slug = filename.replace(/\.md$/, '');
    const filePath = path.join(APPS_DIR, filename);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data } = matter(fileContent);

    return {
      slug,
      name: data.name || slug,
      tagline: data.tagline || '',
      description: data.description || '',
      status: (data.status as AppStatus) || 'coming-soon',
      launchedDate: data.launchedDate || '',
      agents: data.agents || [],
      color: data.color || '#6a6a6a',
      url: data.url || `/${slug}`,
    };
  });

  return apps.sort((a, b) =>
    new Date(b.launchedDate || 0).getTime() - new Date(a.launchedDate || 0).getTime()
  );
}

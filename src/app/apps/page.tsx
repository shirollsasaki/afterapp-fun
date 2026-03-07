import Link from 'next/link';
import Taskbar from '@/components/Taskbar';
import { getAllApps } from '@/lib/apps';
import type { Metadata } from 'next';
import type { AppStatus } from '@/lib/apps';

export const metadata: Metadata = {
  title: 'Apps — Pied Piper',
  description: 'One app per week, built entirely by AI agents. No human developers.',
  alternates: { canonical: '/apps' },
};

const STATUS_ICON: Record<AppStatus, { icon: string; cls: string; label: string }> = {
  'live':         { icon: '[LIVE]', cls: 'status-active',  label: '● LIVE'         },
  'in-progress':  { icon: '[WIP]',  cls: 'status-standby', label: '● BUILDING'     },
  'coming-soon':  { icon: '[SOON]', cls: 'status-soon',    label: '○ COMING SOON'  },
};

export default function AppsPage() {
  const apps = getAllApps();

  return (
    <div className="bsod-page">
      <div className="page-window">
        <div className="title-bar" style={{ cursor: 'default' }}>
          <span>./APPS/DIRECTORY — Agent Output</span>
          <div className="window-controls"><span>_</span><span>X</span></div>
        </div>
        <div className="window-content" style={{ maxHeight: 'none' }}>
          <div className="cmd-line">
            <span className="prompt">root@gilfoyle:~/apps$</span>
            <span>ls -la ./deployed/</span>
          </div>
          <p style={{ color: '#aaaaff', marginBottom: 16 }}>
            {apps.filter((a) => a.status === 'live').length} app(s) live · All hosted at afterapp.fun/[name]
          </p>

          {apps.length === 0 ? (
            <p style={{ color: '#888' }}>&gt; First drop incoming...</p>
          ) : (
            <div className="file-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))' }}>
              {apps.map((app) => {
                const s = STATUS_ICON[app.status];
                return (
                  <Link key={app.slug} href={app.url} className="file-item">
                    <span className="file-icon">{s.icon}</span>
                    <span style={{ fontWeight: 'bold', color: '#E0E0E0' }}>{app.name}</span>
                    <span className={s.cls} style={{ fontSize: 14 }}>{s.label}</span>
                    <span style={{ color: '#aaaaff', fontSize: 14, lineHeight: 1.3 }}>{app.tagline}</span>
                    {app.agents.length > 0 && (
                      <span style={{ color: '#888', fontSize: 12 }}>
                        by {app.agents.join(' · ')}
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </div>
      <Taskbar />
    </div>
  );
}

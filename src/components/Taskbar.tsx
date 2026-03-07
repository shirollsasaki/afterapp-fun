'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const TABS = [
  { label: 'TERM',   href: '/' },
  { label: 'THESIS', href: '/thesis' },
  { label: 'APPS',   href: '/apps' },
  { label: 'BLOG',   href: '/blog' },
];

export default function Taskbar() {
  const [time, setTime] = useState('');
  const pathname = usePathname();

  useEffect(() => {
    const update = () => setTime(new Date().toLocaleTimeString());
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  const activeTab =
    pathname === '/'              ? 'TERM'   :
    pathname.startsWith('/thesis') ? 'THESIS' :
    pathname.startsWith('/apps')   ? 'APPS'   :
    pathname.startsWith('/blog')   ? 'BLOG'   : null;

  return (
    <div className="taskbar">
      {TABS.map((tab) => (
        <Link
          key={tab.href}
          href={tab.href}
          className={`task-btn${activeTab === tab.label ? ' active' : ''}`}
        >
          {tab.label}
        </Link>
      ))}
      <div style={{ flexGrow: 1 }} />
      <div className="clock">{time}</div>
    </div>
  );
}

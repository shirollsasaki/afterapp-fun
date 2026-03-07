'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const SECTIONS = [
  { id: 'hero', label: 'Hero' },
  { id: 'evidence', label: 'Evidence' },
  { id: 'india', label: 'India' },
  { id: 'byoa', label: 'BYOA' },
  { id: 'counter', label: 'Counter' },
  { id: 'opportunity', label: 'Opportunity' },
  { id: 'cta', label: 'CTA' },
];

const NAV_TABS = [
  { label: 'Thesis', href: '/' },
  { label: 'Apps',   href: '/apps' },
  { label: 'Blog',   href: '/blog' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState(0);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Section dot tracking — only active on homepage
  useEffect(() => {
    if (!isHome) return;
    const observers: IntersectionObserver[] = [];

    SECTIONS.forEach((section, index) => {
      const el = document.getElementById(section.id);
      if (!el) return;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) setActiveSection(index);
          });
        },
        { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => { o.disconnect(); });
  }, [isHome]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // Determine active tab
  const activeTab =
    pathname === '/' ? 'Thesis' :
    pathname.startsWith('/apps') ? 'Apps' :
    pathname.startsWith('/blog') ? 'Blog' : null;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 transition-all duration-500 lg:px-10 ${
        scrolled
          ? 'bg-[var(--color-paper)]/95 shadow-sm backdrop-blur-md border-b border-[var(--color-warm-gray)]/20'
          : 'bg-transparent'
      }`}
    >
      {/* Logo / wordmark */}
      <Link
        href="/"
        className="text-sm italic text-[var(--color-ink)] transition-opacity hover:opacity-70"
      >
        After App
      </Link>

      {/* Right side: tabs + section dots (home only) */}
      <div className="flex items-center gap-6">
        {/* Section scroll dots — only on homepage */}
        {isHome && (
          <div className="hidden items-center gap-3 lg:flex">
            {SECTIONS.map((section, index) => (
              <button
                type="button"
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className="group relative flex h-5 w-5 items-center justify-center"
                aria-label={`Go to ${section.label}`}
              >
                <span
                  className={`block rounded-full transition-all duration-300 ${
                    index === activeSection
                      ? 'h-2 w-2 bg-[var(--color-ink)]'
                      : 'h-1.5 w-1.5 bg-[var(--color-warm-gray)] group-hover:bg-[var(--color-ink-light)]'
                  }`}
                />
                <span className="font-typewriter pointer-events-none absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-[9px] uppercase tracking-wider text-[var(--color-muted)] opacity-0 transition-opacity group-hover:opacity-100">
                  {section.label}
                </span>
              </button>
            ))}
            <div className="h-3 w-px bg-[var(--color-warm-gray)]/40" />
          </div>
        )}

        {/* Main nav tabs */}
        <div className="flex items-center gap-1">
          {NAV_TABS.map((tab) => {
            const isActive = activeTab === tab.label;
            return (
              <Link
                key={tab.href}
                href={tab.href}
                className={`font-typewriter rounded-sm px-3 py-1.5 text-[10px] uppercase tracking-[0.12em] transition-all duration-200 ${
                  isActive
                    ? 'bg-[var(--color-ink)] text-[var(--color-paper)]'
                    : 'text-[var(--color-muted)] hover:text-[var(--color-ink)]'
                }`}
              >
                {tab.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

'use client';

import { useState, useEffect } from 'react';

const SECTIONS = [
  { id: 'hero', label: 'Hero' },
  { id: 'evidence', label: 'Evidence' },
  { id: 'india', label: 'India' },
  { id: 'byoa', label: 'BYOA' },
  { id: 'counter', label: 'Counter' },
  { id: 'opportunity', label: 'Opportunity' },
  { id: 'cta', label: 'CTA' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    SECTIONS.forEach((section, index) => {
      const el = document.getElementById(section.id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(index);
            }
          });
        },
        { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => { o.disconnect(); });
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 transition-all duration-500 lg:px-10 ${
        scrolled
          ? 'bg-[var(--color-paper)]/95 shadow-sm backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      {/* Title */}
      <button
        type="button"
        onClick={() => scrollToSection('hero')}
        className="text-sm italic text-ink transition-opacity hover:opacity-70"
      >
        The App is Dying
      </button>

      {/* Section dots */}
      <div className="flex items-center gap-2.5">
        {SECTIONS.map((section, index) => (
          <button
            type="button"
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className="group relative flex h-5 w-5 items-center justify-center"
            aria-label={`Navigate to ${section.label}`}
          >
            <span
              className={`block rounded-full transition-all duration-300 ${
                index === activeSection
                  ? 'h-2.5 w-2.5 bg-[var(--color-terracotta)]'
                  : 'h-1.5 w-1.5 bg-warm-gray group-hover:bg-[var(--color-ink-light)]'
              }`}
            />
            {/* Tooltip */}
            <span className="font-typewriter pointer-events-none absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-[9px] uppercase tracking-wider text-muted opacity-0 transition-opacity group-hover:opacity-100">
              {section.label}
            </span>
          </button>
        ))}
      </div>
    </nav>
  );
}

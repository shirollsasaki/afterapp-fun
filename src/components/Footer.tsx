'use client';

import Link from 'next/link';

const footerLinks = [
  { label: 'GitHub', href: 'https://github.com/openclaw' },
  { label: 'Discord', href: '#' },
  { label: 'Twitter', href: '#' },
];

export default function Footer() {
  return (
    <footer className="border-t border-warm-gray/40 px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 py-8 sm:flex-row">
        <p className="font-typewriter text-sm text-muted">
          &copy; 2026 OpenClaw
        </p>
        <div className="flex flex-col items-center gap-6 sm:flex-row">
          {/* Internal navigation */}
          <nav className="flex gap-6">
            <Link href="/" className="font-typewriter text-sm text-muted transition-colors hover:text-ink">
              Home
            </Link>
            <Link href="/blog" className="font-typewriter text-sm text-muted transition-colors hover:text-ink">
              Blog
            </Link>
          </nav>
          {/* External links */}
          <nav className="flex gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-typewriter text-sm text-muted transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}

'use client';

const footerLinks = [
  { label: 'GitHub', href: 'https://github.com/openclaw' },
  { label: 'Discord', href: '#' },
  { label: 'Twitter', href: '#' },
];

export default function Footer() {
  return (
    <footer className="border-t border-warm-gray/40 px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 py-8 sm:flex-row">
        <p className="font-typewriter text-sm text-muted">
          &copy; 2026 OpenClaw
        </p>
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
    </footer>
  );
}

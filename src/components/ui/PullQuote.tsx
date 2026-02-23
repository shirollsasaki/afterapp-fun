interface PullQuoteProps {
  quote: string;
  attribution?: string;
  className?: string;
}

export default function PullQuote({
  quote,
  attribution,
  className = '',
}: PullQuoteProps) {
  return (
    <blockquote className={`relative px-8 py-6 ${className}`}>
      {/* Decorative opening quote */}
      <span
        className="absolute -top-4 left-0 select-none text-8xl leading-none text-[var(--color-terracotta)] opacity-20"
        aria-hidden="true"
      >
        &ldquo;
      </span>

      <p className="relative text-2xl italic leading-relaxed text-ink lg:text-3xl">
        {quote}
      </p>

      {attribution && (
        <footer className="font-typewriter mt-4 text-xs uppercase tracking-widest text-muted">
          — {attribution}
        </footer>
      )}
    </blockquote>
  );
}

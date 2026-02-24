'use client';

import ReactMarkdown from 'react-markdown';

export function MarkdownRenderer({ content }: { content: string }) {
  return (
    <div className="prose-article">
      <ReactMarkdown
        components={{
          h1: ({ children }) => (
            <h1 className="mb-6 mt-12 text-3xl font-light text-[var(--color-ink)] lg:text-4xl">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="mb-4 mt-10 text-2xl font-medium text-[var(--color-ink)] lg:text-3xl">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="mb-3 mt-8 text-xl font-medium text-[var(--color-ink)]">
              {children}
            </h3>
          ),
          p: ({ children }) => (
            <p className="mb-5 text-lg leading-[1.8] text-[var(--color-ink)]/85">
              {children}
            </p>
          ),
          ul: ({ children }) => (
            <ul className="mb-5 ml-6 list-disc space-y-2 text-lg leading-[1.7] text-[var(--color-ink)]/85">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="mb-5 ml-6 list-decimal space-y-2 text-lg leading-[1.7] text-[var(--color-ink)]/85">
              {children}
            </ol>
          ),
          blockquote: ({ children }) => (
            <blockquote className="my-8 border-l-2 border-[var(--color-terracotta)] py-1 pl-6 italic text-[var(--color-ink)]/70">
              {children}
            </blockquote>
          ),
          strong: ({ children }) => (
            <strong className="font-semibold text-[var(--color-ink)]">
              {children}
            </strong>
          ),
          em: ({ children }) => <em className="italic">{children}</em>,
          a: ({ href, children }) => (
            <a
              href={href}
              className="text-[var(--color-terracotta)] underline underline-offset-4 transition-colors hover:text-[var(--color-ink)]"
              target="_blank"
              rel="noopener noreferrer"
            >
              {children}
            </a>
          ),
          code: ({ children }) => (
            <code className="font-typewriter rounded bg-[var(--color-warm-gray)]/20 px-1.5 py-0.5 text-[0.9em] text-[var(--color-terracotta)]">
              {children}
            </code>
          ),
          pre: ({ children }) => (
            <pre className="font-typewriter my-6 overflow-x-auto rounded-sm bg-[var(--color-ink)] p-4 text-sm leading-relaxed text-[var(--color-paper)]">
              {children}
            </pre>
          ),
          hr: () => (
            <div className="my-10 flex items-center gap-4">
              <div className="h-px flex-1 bg-[var(--color-warm-gray)]/50" />
              <div className="h-1.5 w-1.5 rotate-45 border border-[var(--color-warm-gray)]" />
              <div className="h-px flex-1 bg-[var(--color-warm-gray)]/50" />
            </div>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}

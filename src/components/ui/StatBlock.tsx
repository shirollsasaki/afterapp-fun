import AnimatedCounter from './AnimatedCounter';

interface StatBlockProps {
  number: number;
  suffix?: string;
  prefix?: string;
  label: string;
  source: string;
  accentColor?: 'mustard' | 'terracotta';
}

export default function StatBlock({
  number,
  suffix = '',
  prefix = '',
  label,
  source,
  accentColor = 'terracotta',
}: StatBlockProps) {
  const colorClass =
    accentColor === 'mustard'
      ? 'text-[var(--color-mustard)]'
      : 'text-[var(--color-terracotta)]';

  return (
    <div className="paper-texture rounded-sm border border-warm-gray/30 px-6 py-8 text-center">
      <div className={`text-5xl lg:text-6xl font-bold ${colorClass}`}>
        <AnimatedCounter
          target={number}
          suffix={suffix}
          prefix={prefix}
          className={colorClass}
        />
      </div>
      <p className="mt-3 text-lg leading-relaxed text-ink">
        {label}
      </p>
      <p className="font-typewriter mt-2 text-[10px] uppercase tracking-widest text-muted">
        {source}
      </p>
    </div>
  );
}

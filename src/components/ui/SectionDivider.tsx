export default function SectionDivider() {
  return (
    <div className="mx-auto flex max-w-xs items-center gap-4 py-12" aria-hidden="true">
      <div className="h-px flex-1 bg-warm-gray/50" />
      <div className="relative flex h-3 w-3 items-center justify-center">
        <div className="absolute h-3 w-3 rotate-45 border border-warm-gray/60" />
        <div className="h-1 w-1 rounded-full bg-warm-gray" />
      </div>
      <div className="h-px flex-1 bg-warm-gray/50" />
    </div>
  );
}

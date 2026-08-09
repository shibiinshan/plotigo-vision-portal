export function Logo({ className = "", inverted = false }: { className?: string; inverted?: boolean }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span
        className={`relative grid h-8 w-8 shrink-0 place-items-center rounded-[6px] ${
          inverted ? "bg-background" : "bg-ink"
        }`}
        aria-hidden="true"
      >
        <span
          className={`h-3 w-3 rounded-[2px] border-2 ${
            inverted ? "border-ink" : "border-background"
          }`}
        />
        <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-[2px] bg-gold" />
      </span>
      <span
        className={`font-display text-lg font-extrabold tracking-tight ${
          inverted ? "text-background" : "text-ink"
        }`}
      >
        Plotigo
      </span>
    </span>
  );
}
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

export function CategoryCard({
  title,
  count,
  description,
  icon,
  to,
}: {
  title: string;
  count: string;
  description: string;
  icon: ReactNode;
  to: "/plots" | "/flats" | "/villas" | "/properties";
}) {
  return (
    <Link
      to={to}
      className="group relative flex flex-col justify-between overflow-hidden rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-ink"
    >
      <span className="pointer-events-none absolute inset-0 blueprint-grid opacity-60" aria-hidden="true" />
      <span className="relative grid h-12 w-12 place-items-center rounded-md bg-secondary text-foreground transition-colors group-hover:bg-lime">
        {icon}
      </span>
      <div className="relative mt-10">
        <p className="eyebrow text-muted-foreground">{count}</p>
        <h3 className="mt-1 font-display text-2xl font-extrabold">{title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{description}</p>
      </div>
      <span className="relative mt-6 inline-flex items-center gap-1.5 text-sm font-bold">
        Browse
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </Link>
  );
}
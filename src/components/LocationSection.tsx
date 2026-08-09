import { MapPin } from "lucide-react";
import { Link } from "@tanstack/react-router";

const markers = [
  { name: "Kochi", top: "48%", left: "40%", count: "24 properties" },
  { name: "Edappally", top: "30%", left: "56%", count: "11 properties" },
  { name: "Elamakkara", top: "58%", left: "62%", count: "8 properties" },
  { name: "Kakkanad", top: "24%", left: "78%", count: "14 properties" },
  { name: "Aluva", top: "70%", left: "24%", count: "9 properties" },
  { name: "Thrippunithura", top: "78%", left: "70%", count: "6 properties" },
];

export function LocationSection() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.25fr] lg:items-center lg:gap-16">
        <div>
          <p className="eyebrow text-muted-foreground">Featured Locations</p>
          <h2 className="mt-4 font-display text-4xl font-extrabold leading-[1.05] sm:text-5xl">
            Prime Locations.
            <br />
            <span className="text-muted-foreground">Better Opportunities.</span>
          </h2>
          <p className="mt-5 max-w-md text-muted-foreground">
            We work where growth is already happening — along Kochi's metro, IT and highway corridors.
          </p>
          <ul className="mt-8 flex flex-wrap gap-2">
            {markers.map((m) => (
              <li key={m.name}>
                <Link
                  to="/properties"
                  search={{ location: m.name, type: undefined, budget: undefined, status: undefined }}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold transition-colors hover:border-lime hover:bg-lime"
                >
                  <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                  {m.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border bg-card blueprint-grid">
          <svg
            className="absolute inset-0 h-full w-full text-muted-foreground/25"
            viewBox="0 0 400 300"
            fill="none"
            aria-hidden="true"
          >
            <path d="M20 210 L110 160 L170 190 L250 90 L330 120 L390 70" stroke="currentColor" strokeWidth="1.5" />
            <path d="M60 20 L120 120 L200 140 L260 250 L360 270" stroke="currentColor" strokeWidth="1.5" />
            <path d="M0 120 L400 150" stroke="currentColor" strokeWidth="1" strokeDasharray="6 8" />
          </svg>
          {markers.map((m) => (
            <div key={m.name} className="absolute -translate-x-1/2 -translate-y-1/2" style={{ top: m.top, left: m.left }}>
              <div className="group relative flex flex-col items-center">
                <span className="grid h-7 w-7 place-items-center rounded-full bg-ink ring-4 ring-lime/30">
                  <MapPin className="h-3.5 w-3.5 text-lime" aria-hidden="true" />
                </span>
                <span className="mt-1.5 whitespace-nowrap rounded-sm bg-background/90 px-2 py-0.5 text-[11px] font-bold shadow-[var(--shadow-card)]">
                  {m.name}
                </span>
                <span className="mt-0.5 whitespace-nowrap text-[10px] text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100">
                  {m.count}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
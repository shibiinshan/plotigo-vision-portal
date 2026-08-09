import { BadgeCheck, MapPin, FileCheck2, HeartHandshake } from "lucide-react";
import { motion } from "motion/react";

const reasons = [
  {
    icon: BadgeCheck,
    title: "Verified Properties",
    body: "Every listing is checked for documents, ownership and ground reality before it reaches you.",
  },
  {
    icon: MapPin,
    title: "Prime Locations",
    body: "We focus on corridors with real demand — connectivity, infrastructure and resale strength.",
  },
  {
    icon: FileCheck2,
    title: "Transparent Process",
    body: "Clear pricing, honest comparisons and no hidden charges from first call to registration.",
  },
  {
    icon: HeartHandshake,
    title: "Personal Assistance",
    body: "One point of contact who understands your budget, timeline and family's needs.",
  },
];

export function WhyPlotigo() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,#111827_0%,#1b2a3d_100%)] py-20 text-background lg:py-28">
      <div className="pointer-events-none absolute inset-0 blueprint-grid-dark" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <div>
            <p className="eyebrow text-lime">Why Plotigo</p>
            <h2 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] sm:text-5xl">
              Finding your perfect plot
              <br />
              shouldn't be a puzzle.
            </h2>
            <p className="mt-5 max-w-md text-lg text-background/60">
              Let <span className="font-semibold text-lime">Plotigo</span> connect the dots — between what
              you want, what you can spend, and what's actually available.
            </p>

            <div
              className="mt-10 grid w-fit grid-cols-3 gap-1.5 rounded-md border border-background/15 p-3"
              aria-hidden="true"
            >
              {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <span
                  key={i}
                  className={`h-8 w-8 rounded-[3px] ${
                    i === 4 ? "bg-lime" : i === 2 || i === 6 ? "bg-gold/70" : "bg-background/10"
                  }`}
                />
              ))}
            </div>
          </div>

          <ul className="grid gap-px overflow-hidden rounded-lg bg-background/10 sm:grid-cols-2">
            {reasons.map((r, i) => (
              <motion.li
                key={r.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="bg-ink p-7"
              >
                <r.icon className="h-6 w-6 text-lime" aria-hidden="true" />
                <h3 className="mt-5 font-display text-lg font-bold">{r.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-background/60">{r.body}</p>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
import { Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle, MapPin } from "lucide-react";
import { motion } from "motion/react";
import heroImg from "@/assets/hero-property.jpg";
import { generalWhatsapp } from "@/lib/plotigo";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,rgba(253,251,244,0.96),rgba(243,248,241,0.96))]">
      <div className="pointer-events-none absolute inset-0 blueprint-grid" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full border border-lime/30"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-5 pb-24 pt-14 lg:px-8 lg:pb-32 lg:pt-20">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="eyebrow inline-flex items-center gap-2 rounded-full border border-lime/30 bg-card/80 px-3.5 py-1.5 text-muted-foreground backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-lime" aria-hidden="true" />
              Kerala Property Experts
            </p>

            <h1 className="mt-6 font-display text-[2.6rem] font-extrabold leading-[1.02] text-foreground sm:text-6xl lg:text-[4.2rem]">
              Your Right Property
              <br />
              Starts With The{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Right Choice.</span>
                <span
                  className="absolute inset-x-0 bottom-1 z-0 h-3 bg-lime/70 sm:bottom-2 sm:h-4"
                  aria-hidden="true"
                />
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
              Discover carefully selected plots, flats, villas and investment properties in prime
              locations.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/properties"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-bold text-background shadow-[0_18px_45px_-20px_rgba(12,24,31,0.5)] transition-transform hover:scale-[1.02]"
              >
                Explore Properties
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <a
                href={generalWhatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/15 bg-background/70 px-7 py-3.5 text-sm font-bold text-foreground transition-colors hover:border-lime hover:bg-lime hover:text-lime-foreground"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Talk to an Expert
              </a>
            </div>

            <p className="mt-8 text-sm font-medium text-muted-foreground">
              Verified Properties <span className="text-lime">•</span> Expert Assistance{" "}
              <span className="text-lime">•</span> Transparent Deals
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[1.6rem] border border-border/80 bg-card shadow-[var(--shadow-float)] ring-1 ring-black/5">
              <img
                src={heroImg}
                alt="Premium residential tower in Kochi, Kerala"
                width={1200}
                height={1504}
                fetchPriority="high"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>

            <div className="absolute -bottom-6 left-4 w-[16.5rem] rounded-2xl border border-border/80 bg-background/95 p-4 shadow-[var(--shadow-float)] backdrop-blur sm:left-auto sm:-left-8">
              <p className="eyebrow text-muted-foreground">Featured Property</p>
              <p className="mt-2 font-display text-lg font-extrabold leading-tight">RDS Echo, Elamakkara</p>
              <p className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
                <MapPin className="h-3.5 w-3.5 text-lime" aria-hidden="true" /> Kochi, Kerala
              </p>
              <div className="mt-3 flex items-end justify-between border-t border-border pt-3">
                <span className="font-display text-xl font-extrabold">₹1.40 Cr</span>
                <span className="text-sm text-muted-foreground">1,960 sq.ft</span>
              </div>
            </div>

            <span
              className="absolute -right-3 -top-3 h-16 w-16 rounded-[6px] border-2 border-gold"
              aria-hidden="true"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
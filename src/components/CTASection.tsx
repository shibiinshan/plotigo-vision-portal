import { MessageCircle, PhoneCall } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { generalWhatsapp } from "@/lib/plotigo";

export function CTASection() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
      <div className="relative overflow-hidden rounded-[1.75rem] bg-[linear-gradient(135deg,#101827_0%,#18302b_100%)] px-6 py-16 text-background shadow-[var(--shadow-float)] sm:px-12 lg:px-20 lg:py-24">
        <div className="pointer-events-none absolute inset-0 blueprint-grid-dark" aria-hidden="true" />
        <span
          className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-lime/15 blur-2xl"
          aria-hidden="true"
        />
        <div className="relative max-w-3xl">
          <h2 className="font-display text-4xl font-extrabold leading-[1.05] sm:text-5xl">
            Your next property could be
            <span className="text-lime"> closer than you think.</span>
          </h2>
          <p className="mt-5 max-w-xl text-lg text-background/60">
            Tell us what you're looking for. We'll help you find the right choice.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={generalWhatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-lime px-7 py-3.5 text-sm font-bold text-lime-foreground transition-transform hover:scale-[1.02]"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              WhatsApp Plotigo
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-background/30 px-7 py-3.5 text-sm font-bold transition-colors hover:border-lime hover:text-lime"
            >
              <PhoneCall className="h-4 w-4" aria-hidden="true" />
              Request a Callback
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
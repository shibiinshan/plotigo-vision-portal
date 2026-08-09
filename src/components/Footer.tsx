import { Link } from "@tanstack/react-router";
import { Instagram, MessageCircle, Mail, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { PLOTIGO, generalWhatsapp } from "@/lib/plotigo";

export function Footer() {
  const [year, setYear] = useState("—");

  useEffect(() => {
    setYear(new Date().getFullYear().toString());
  }, []);

  return (
    <footer className="relative overflow-hidden bg-ink text-background">
      <div className="pointer-events-none absolute inset-0 blueprint-grid-dark" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo inverted />
            <p className="mt-5 max-w-xs font-display text-2xl font-bold leading-tight">
              Your right choice <span className="text-lime">is here.</span>
            </p>
            <p className="mt-4 max-w-sm text-sm text-background/60">
              Plots, flats, villas and commercial property across Kochi and Kerala — selected,
              verified and explained honestly.
            </p>
          </div>

          <nav aria-label="Quick links">
            <h2 className="eyebrow text-background/50">Quick Links</h2>
            <ul className="mt-5 space-y-3 text-sm">
              {[
                { to: "/properties", label: "Properties" },
                { to: "/plots", label: "Plots" },
                { to: "/flats", label: "Flats" },
                { to: "/villas", label: "Villas" },
                { to: "/about", label: "About" },
                { to: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-background/70 transition-colors hover:text-lime">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="eyebrow text-background/50">Get in touch</h2>
            <ul className="mt-5 space-y-3 text-sm text-background/70">
              <li>
                <a href={`tel:${PLOTIGO.phone}`} className="inline-flex items-center gap-2 hover:text-lime">
                  <Phone className="h-4 w-4" aria-hidden="true" /> {PLOTIGO.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${PLOTIGO.email}`} className="inline-flex items-center gap-2 hover:text-lime">
                  <Mail className="h-4 w-4" aria-hidden="true" /> {PLOTIGO.email}
                </a>
              </li>
              <li>{PLOTIGO.address}</li>
            </ul>
            <div className="mt-6 flex gap-3">
              <a
                href={PLOTIGO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Plotigo on Instagram"
                className="grid h-10 w-10 place-items-center rounded-full border border-background/20 transition-colors hover:border-lime hover:text-lime"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href={generalWhatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with Plotigo on WhatsApp"
                className="grid h-10 w-10 place-items-center rounded-full border border-background/20 transition-colors hover:border-lime hover:text-lime"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-background/10 pt-6 text-xs text-background/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Plotigo.in — All rights reserved.</p>
          <p>Listings shown are indicative samples pending verification.</p>
        </div>
      </div>
    </footer>
  );
}
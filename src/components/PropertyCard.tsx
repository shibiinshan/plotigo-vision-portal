import { Link } from "@tanstack/react-router";
import { Heart, MapPin, Maximize2, BedDouble, MessageCircle } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";
import type { Property } from "@/data/properties";
import { whatsappLink } from "@/lib/plotigo";

export function PropertyCard({ property, showWhatsapp = true }: { property: Property; showWhatsapp?: boolean }) {
  const [saved, setSaved] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:border-lime"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={property.images[0]}
          alt={`${property.title} in ${property.locality}, ${property.city}`}
          loading="lazy"
          width={1200}
          height={900}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-ink px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-background">
          {property.status}
        </span>
        <button
          type="button"
          onClick={() => setSaved((v) => !v)}
          aria-pressed={saved}
          aria-label={saved ? `Remove ${property.title} from saved` : `Save ${property.title}`}
          className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-background/90 backdrop-blur transition-colors hover:bg-lime"
        >
          <Heart className={`h-4 w-4 ${saved ? "fill-gold text-gold" : "text-foreground"}`} />
        </button>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="min-w-0 font-display text-lg font-bold leading-snug">{property.title}</h3>
          <span className="shrink-0 rounded-sm bg-secondary px-2 py-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
            {property.type}
          </span>
        </div>

        <p className="mt-2 flex items-center gap-1.5 text-sm text-muted-foreground">
          <MapPin className="h-3.5 w-3.5 shrink-0 text-lime" aria-hidden="true" />
          <span className="truncate">
            {property.locality}, {property.city}
          </span>
        </p>

        <p className="mt-4 font-display text-2xl font-extrabold">{property.priceLabel}</p>

        <ul className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-border pt-3 text-sm text-muted-foreground">
          <li className="flex items-center gap-1.5">
            <Maximize2 className="h-3.5 w-3.5" aria-hidden="true" /> {property.area}
          </li>
          {property.bedrooms ? (
            <li className="flex items-center gap-1.5">
              <BedDouble className="h-3.5 w-3.5" aria-hidden="true" /> {property.bedrooms} BHK
            </li>
          ) : null}
        </ul>

        <div className="mt-5 flex items-center gap-2 pt-1">
          <Link
            to="/properties/$id"
            params={{ id: property.id }}
            className="flex-1 rounded-full bg-ink px-4 py-2.5 text-center text-sm font-bold text-background transition-colors hover:bg-lime hover:text-lime-foreground"
          >
            View Details
          </Link>
          {showWhatsapp && (
            <a
              href={whatsappLink(
                `Hi Plotigo, I'm interested in ${property.title} (${property.locality}, ${property.city}) listed at ${property.priceLabel}.`,
              )}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Enquire about ${property.title} on WhatsApp`}
              className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border transition-colors hover:border-lime hover:bg-lime"
            >
              <MessageCircle className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
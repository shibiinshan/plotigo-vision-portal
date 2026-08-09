import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Maximize2, BedDouble, Bath, Building2, Check, MessageCircle, PhoneCall, ArrowLeft } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { EnquiryForm } from "@/components/EnquiryForm";
import { CTASection } from "@/components/CTASection";
import { getPropertyById } from "@/data/properties";
import { PLOTIGO, whatsappLink } from "@/lib/plotigo";

export const Route = createFileRoute("/properties/$id")({
  loader: ({ params }) => {
    const property = getPropertyById(params.id);
    if (!property) throw notFound();
    return { property };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Property unavailable | Plotigo" }, { name: "robots", content: "noindex" }] };
    }
    const p = loaderData.property;
    const title = `${p.title}, ${p.locality} — ${p.priceLabel} | Plotigo`;
    const description = `${p.type} for sale in ${p.locality}, ${p.city}. ${p.area} at ${p.priceLabel}. Enquire with Plotigo on WhatsApp.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
  component: PropertyDetail,
});

function PropertyDetail() {
  const { property } = Route.useLoaderData();
  const [active, setActive] = useState(0);

  const enquiryMessage = `Hi Plotigo, I'm interested in ${property.title} (${property.locality}, ${property.city}) at ${property.priceLabel}. Please share more details.`;

  const facts = [
    { icon: Building2, label: "Type", value: property.type },
    { icon: Maximize2, label: "Area", value: property.area },
    { icon: BedDouble, label: "Bedrooms", value: property.bedrooms ? `${property.bedrooms} BHK` : "—" },
    { icon: Bath, label: "Bathrooms", value: property.bathrooms ? String(property.bathrooms) : "—" },
  ];

  return (
    <SiteLayout>
      <div className="mx-auto max-w-7xl px-5 pt-8 lg:px-8">
        <Link
          to="/properties"
          search={{ location: undefined, type: undefined, budget: undefined, status: undefined }}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" /> All properties
        </Link>
      </div>

      <article className="mx-auto max-w-7xl px-5 py-8 lg:px-8 lg:py-10">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.65fr)_minmax(0,1fr)] lg:gap-12">
          <div>
            <div className="overflow-hidden rounded-xl border border-border bg-card">
              <img
                src={property.images[active]}
                alt={`${property.title} — view ${active + 1}`}
                width={1200}
                height={900}
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            {property.images.length > 1 && (
              <div className="mt-3 flex gap-3">
                {property.images.map((img, i) => (
                  <button
                    key={img}
                    type="button"
                    onClick={() => setActive(i)}
                    aria-label={`Show image ${i + 1}`}
                    aria-current={i === active}
                    className={`overflow-hidden rounded-md border-2 transition-colors ${
                      i === active ? "border-lime" : "border-transparent"
                    }`}
                  >
                    <img
                      src={img}
                      alt=""
                      loading="lazy"
                      width={1200}
                      height={900}
                      className="h-20 w-28 object-cover"
                    />
                  </button>
                ))}
              </div>
            )}

            <header className="mt-10">
              <span className="rounded-full bg-ink px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-background">
                {property.status}
              </span>
              <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.05] sm:text-5xl">
                {property.title}
              </h1>
              <p className="mt-3 flex items-center gap-1.5 text-muted-foreground">
                <MapPin className="h-4 w-4 text-lime" aria-hidden="true" />
                {property.locality}, {property.city}
              </p>
              <p className="mt-5 font-display text-3xl font-extrabold">{property.priceLabel}</p>
            </header>

            <dl className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-4">
              {facts.map((f) => (
                <div key={f.label} className="bg-card p-5">
                  <f.icon className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                  <dt className="eyebrow mt-3 text-muted-foreground">{f.label}</dt>
                  <dd className="mt-1 font-display text-lg font-bold">{f.value}</dd>
                </div>
              ))}
            </dl>

            <section className="mt-12">
              <h2 className="font-display text-2xl font-extrabold">Description</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">{property.description}</p>
            </section>

            <section className="mt-12">
              <h2 className="font-display text-2xl font-extrabold">Property Highlights</h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {property.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-lime" aria-hidden="true" />
                    {h}
                  </li>
                ))}
              </ul>
            </section>

            <section className="mt-12">
              <h2 className="font-display text-2xl font-extrabold">Amenities</h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {property.amenities.map((a) => (
                  <li
                    key={a}
                    className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium"
                  >
                    {a}
                  </li>
                ))}
              </ul>
            </section>

            <section className="mt-12">
              <h2 className="font-display text-2xl font-extrabold">Location</h2>
              <div className="relative mt-4 aspect-[16/9] overflow-hidden rounded-xl border border-border bg-card blueprint-grid">
                <svg
                  className="absolute inset-0 h-full w-full text-muted-foreground/25"
                  viewBox="0 0 400 225"
                  fill="none"
                  aria-hidden="true"
                >
                  <path d="M0 160 L120 120 L210 150 L300 70 L400 100" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M80 0 L140 90 L200 110 L250 225" stroke="currentColor" strokeWidth="1.5" />
                </svg>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                  <span className="mx-auto grid h-10 w-10 place-items-center rounded-full bg-ink ring-4 ring-lime/30">
                    <MapPin className="h-5 w-5 text-lime" aria-hidden="true" />
                  </span>
                  <p className="mt-2 font-display text-sm font-bold">
                    {property.locality}, {property.city}
                  </p>
                </div>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                Exact location and site visit details are shared on enquiry.
              </p>
            </section>
          </div>

          <aside>
            <div className="lg:sticky lg:top-24">
              <div className="rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
                <p className="eyebrow text-muted-foreground">Interested in this property?</p>
                <div className="mt-5">
                  <EnquiryForm
                    compact
                    title="Request a callback"
                    contextLabel={`${property.title}, ${property.locality}`}
                    submitLabel="Request Callback"
                  />
                </div>
                <div className="mt-5 grid gap-2 border-t border-border pt-5 sm:grid-cols-2">
                  <a
                    href={whatsappLink(enquiryMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-lime px-4 py-3 text-sm font-bold text-lime-foreground"
                  >
                    <MessageCircle className="h-4 w-4" aria-hidden="true" /> WhatsApp Now
                  </a>
                  <a
                    href={`tel:${PLOTIGO.phone}`}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-ink px-4 py-3 text-sm font-bold"
                  >
                    <PhoneCall className="h-4 w-4" aria-hidden="true" /> Call Now
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </article>

      <CTASection />
    </SiteLayout>
  );
}
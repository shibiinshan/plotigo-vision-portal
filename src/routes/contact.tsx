import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, Phone, Mail, MapPin } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { EnquiryForm } from "@/components/EnquiryForm";
import { PLOTIGO, generalWhatsapp } from "@/lib/plotigo";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Plotigo — Talk to a Kerala Property Expert" },
      {
        name: "description",
        content:
          "Tell Plotigo what you're looking for. Share your budget and preference, and get a WhatsApp reply from a property expert in Kochi.",
      },
      { property: "og:title", content: "Contact Plotigo — Talk to a Kerala Property Expert" },
      { property: "og:description", content: "Send an enquiry or message us on WhatsApp. We usually reply within hours." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <div>
            <p className="eyebrow text-muted-foreground">Contact</p>
            <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.05] sm:text-5xl">
              Tell us what you're looking for.
            </h1>
            <p className="mt-5 max-w-md text-lg text-muted-foreground">
              Share your budget and preference — we'll come back with options that actually fit, not a
              list of everything on the market.
            </p>

            <ul className="mt-10 space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-secondary">
                  <Phone className="h-4 w-4" aria-hidden="true" />
                </span>
                <a href={`tel:${PLOTIGO.phone}`} className="font-semibold hover:text-lime">
                  {PLOTIGO.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-secondary">
                  <Mail className="h-4 w-4" aria-hidden="true" />
                </span>
                <a href={`mailto:${PLOTIGO.email}`} className="font-semibold hover:text-lime">
                  {PLOTIGO.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-secondary">
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                </span>
                <span className="font-semibold">{PLOTIGO.address}</span>
              </li>
            </ul>

            <a
              href={generalWhatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-lime px-7 py-3.5 text-sm font-bold text-lime-foreground transition-transform hover:scale-[1.02]"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Chat on WhatsApp
            </a>
          </div>

          <div className="rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-card)] sm:p-8">
            <EnquiryForm title="Send an enquiry" />
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
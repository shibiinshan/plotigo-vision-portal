import { MessageCircle, PhoneCall } from "lucide-react";
import { PLOTIGO, generalWhatsapp } from "@/lib/plotigo";

export function StickyWhatsApp() {
  return (
    <>
      {/* Mobile sticky bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-border bg-background/95 p-3 backdrop-blur lg:hidden">
        <a
          href={generalWhatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-lime py-3 text-sm font-bold text-lime-foreground"
        >
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
          WhatsApp Us
        </a>
        <a
          href={`tel:${PLOTIGO.phone}`}
          aria-label="Call Plotigo"
          className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-ink text-background"
        >
          <PhoneCall className="h-4 w-4" />
        </a>
      </div>

      {/* Desktop floating enquiry CTA */}
      <a
        href={generalWhatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-40 hidden items-center gap-2 rounded-full bg-lime px-6 py-4 text-sm font-bold text-lime-foreground shadow-[var(--shadow-float)] transition-transform hover:scale-105 lg:inline-flex"
      >
        <MessageCircle className="h-5 w-5" aria-hidden="true" />
        Enquire on WhatsApp
      </a>
    </>
  );
}
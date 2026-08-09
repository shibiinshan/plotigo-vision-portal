import { useState } from "react";
import { toast } from "sonner";
import { Send } from "lucide-react";
import { propertyTypes, budgetOptions } from "@/data/properties";
import { whatsappLink } from "@/lib/plotigo";

const fieldClass =
  "h-12 w-full rounded-md border border-border bg-background px-3 text-sm outline-none transition-colors focus:border-lime focus:ring-2 focus:ring-lime/30";

export interface EnquiryFormProps {
  compact?: boolean;
  title?: string;
  contextLabel?: string;
  submitLabel?: string;
}

export function EnquiryForm({
  compact = false,
  title = "Send us an enquiry",
  contextLabel,
  submitLabel = "Send Enquiry",
}: EnquiryFormProps) {
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setSubmitting(true);

    const summary = [
      `Hi Plotigo, this is ${data.get("name")}.`,
      contextLabel ? `Enquiry about: ${contextLabel}` : null,
      data.get("preference") ? `Looking for: ${data.get("preference")}` : null,
      data.get("budget") ? `Budget: ${data.get("budget")}` : null,
      data.get("message") ? `Message: ${data.get("message")}` : null,
      `Phone: ${data.get("phone")}`,
    ]
      .filter(Boolean)
      .join("\n");

    // TODO: connect to Plotigo's CRM / backend. For now the enquiry is handed
    // over to WhatsApp so no lead is lost.
    window.open(whatsappLink(summary), "_blank", "noopener,noreferrer");
    toast.success("Enquiry ready", {
      description: "We've opened WhatsApp so our team can reply right away.",
    });
    form.reset();
    setSubmitting(false);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="font-display text-xl font-extrabold">{title}</h2>

      <div className={compact ? "space-y-4" : "grid gap-4 sm:grid-cols-2"}>
        <div>
          <label htmlFor="e-name" className="eyebrow mb-1.5 block text-muted-foreground">
            Name
          </label>
          <input id="e-name" name="name" required autoComplete="name" className={fieldClass} placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="e-phone" className="eyebrow mb-1.5 block text-muted-foreground">
            Phone
          </label>
          <input
            id="e-phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            className={fieldClass}
            placeholder="+91 XXXXX XXXXX"
          />
        </div>

        {!compact && (
          <>
            <div>
              <label htmlFor="e-email" className="eyebrow mb-1.5 block text-muted-foreground">
                Email
              </label>
              <input
                id="e-email"
                name="email"
                type="email"
                autoComplete="email"
                className={fieldClass}
                placeholder="you@email.com"
              />
            </div>
            <div>
              <label htmlFor="e-pref" className="eyebrow mb-1.5 block text-muted-foreground">
                Property Preference
              </label>
              <select id="e-pref" name="preference" className={fieldClass} defaultValue="">
                <option value="">Select type</option>
                {propertyTypes.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="e-budget" className="eyebrow mb-1.5 block text-muted-foreground">
                Budget
              </label>
              <select id="e-budget" name="budget" className={fieldClass} defaultValue="">
                <option value="">Select budget</option>
                {budgetOptions.map((b) => (
                  <option key={b.label} value={b.label}>
                    {b.label}
                  </option>
                ))}
              </select>
            </div>
          </>
        )}

        <div className={compact ? "" : "sm:col-span-2"}>
          <label htmlFor="e-message" className="eyebrow mb-1.5 block text-muted-foreground">
            Message
          </label>
          <textarea
            id="e-message"
            name="message"
            rows={compact ? 3 : 4}
            className="w-full rounded-md border border-border bg-background p-3 text-sm outline-none transition-colors focus:border-lime focus:ring-2 focus:ring-lime/30"
            placeholder={contextLabel ? "I'd like to know more about this property." : "Tell us what you're looking for."}
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-bold text-background transition-colors hover:bg-lime hover:text-lime-foreground disabled:opacity-60"
      >
        <Send className="h-4 w-4" aria-hidden="true" />
        {submitLabel}
      </button>
      <p className="text-center text-xs text-muted-foreground">
        We usually reply within a few hours on WhatsApp.
      </p>
    </form>
  );
}
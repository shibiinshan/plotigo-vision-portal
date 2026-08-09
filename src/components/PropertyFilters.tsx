import { SlidersHorizontal, X } from "lucide-react";
import { useState } from "react";
import { locations, propertyTypes, budgetOptions } from "@/data/properties";

export interface FilterState {
  location: string;
  type: string;
  budget: string;
  status: string;
  minArea: string;
  bedrooms: string;
}

export const emptyFilters: FilterState = {
  location: "",
  type: "",
  budget: "",
  status: "",
  minArea: "",
  bedrooms: "",
};

const fieldClass =
  "h-11 w-full rounded-md border border-border bg-background px-3 text-sm outline-none transition-colors focus:border-lime focus:ring-2 focus:ring-lime/30";

function Fields({
  filters,
  onChange,
}: {
  filters: FilterState;
  onChange: (next: FilterState) => void;
}) {
  const set = (key: keyof FilterState) => (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) =>
    onChange({ ...filters, [key]: e.target.value });

  return (
    <div className="space-y-5">
      <div>
        <label htmlFor="f-location" className="eyebrow mb-1.5 block text-muted-foreground">
          Location
        </label>
        <select id="f-location" className={fieldClass} value={filters.location} onChange={set("location")}>
          <option value="">Any location</option>
          {locations.map((l) => (
            <option key={l} value={l}>
              {l}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="f-type" className="eyebrow mb-1.5 block text-muted-foreground">
          Property Type
        </label>
        <select id="f-type" className={fieldClass} value={filters.type} onChange={set("type")}>
          <option value="">Any type</option>
          {propertyTypes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="f-budget" className="eyebrow mb-1.5 block text-muted-foreground">
          Price Range
        </label>
        <select id="f-budget" className={fieldClass} value={filters.budget} onChange={set("budget")}>
          <option value="">Any price</option>
          {budgetOptions.map((b) => (
            <option key={b.label} value={b.label}>
              {b.label}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="f-area" className="eyebrow mb-1.5 block text-muted-foreground">
          Minimum Area (sq.ft)
        </label>
        <input
          id="f-area"
          type="number"
          min={0}
          step={100}
          placeholder="e.g. 1200"
          className={fieldClass}
          value={filters.minArea}
          onChange={set("minArea")}
        />
      </div>
      <div>
        <label htmlFor="f-beds" className="eyebrow mb-1.5 block text-muted-foreground">
          Bedrooms
        </label>
        <select id="f-beds" className={fieldClass} value={filters.bedrooms} onChange={set("bedrooms")}>
          <option value="">Any</option>
          <option value="2">2+ BHK</option>
          <option value="3">3+ BHK</option>
          <option value="4">4+ BHK</option>
        </select>
      </div>
      <div>
        <label htmlFor="f-status" className="eyebrow mb-1.5 block text-muted-foreground">
          Property Status
        </label>
        <select id="f-status" className={fieldClass} value={filters.status} onChange={set("status")}>
          <option value="">Any status</option>
          <option value="For Sale">For Sale</option>
          <option value="For Rent">For Rent</option>
        </select>
      </div>
      <button
        type="button"
        onClick={() => onChange(emptyFilters)}
        className="text-sm font-semibold text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground"
      >
        Clear all filters
      </button>
    </div>
  );
}

export function PropertyFilters({
  filters,
  onChange,
}: {
  filters: FilterState;
  onChange: (next: FilterState) => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <aside className="hidden lg:block">
        <div className="sticky top-24 rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
          <h2 className="font-display text-base font-extrabold">Filters</h2>
          <div className="mt-6">
            <Fields filters={filters} onChange={onChange} />
          </div>
        </div>
      </aside>

      <div className="lg:hidden">
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2.5 text-sm font-semibold"
        >
          <SlidersHorizontal className="h-4 w-4" aria-hidden="true" />
          Filters
        </button>

        {open && (
          <div className="fixed inset-0 z-60 flex" role="dialog" aria-modal="true" aria-label="Property filters">
            <button
              type="button"
              aria-label="Close filters"
              className="flex-1 bg-ink/50"
              onClick={() => setOpen(false)}
            />
            <div className="h-full w-[86%] max-w-sm overflow-y-auto bg-background p-6">
              <div className="flex items-center justify-between">
                <h2 className="font-display text-lg font-extrabold">Filters</h2>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close filters"
                  className="grid h-9 w-9 place-items-center rounded-md border border-border"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <div className="mt-6">
                <Fields filters={filters} onChange={onChange} />
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="mt-8 w-full rounded-full bg-ink py-3 text-sm font-bold text-background"
              >
                Show results
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
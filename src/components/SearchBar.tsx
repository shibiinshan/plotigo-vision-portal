import { useNavigate } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { useState } from "react";
import { locations, propertyTypes, budgetOptions } from "@/data/properties";

const fieldClass =
  "h-12 w-full rounded-md border border-border bg-background px-3 text-sm text-foreground outline-none transition-colors focus:border-lime focus:ring-2 focus:ring-lime/30";

export function SearchBar({ floating = false }: { floating?: boolean }) {
  const navigate = useNavigate();
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [budget, setBudget] = useState("");
  const [status, setStatus] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        navigate({
          to: "/properties",
          search: {
            location: location || undefined,
            type: type || undefined,
            budget: budget || undefined,
            status: status || undefined,
          },
        });
      }}
      className={`rounded-[1.35rem] border border-border/80 bg-card/90 p-4 shadow-[var(--shadow-card)] sm:p-5 ${
        floating ? "shadow-[var(--shadow-float)]" : "shadow-[var(--shadow-card)]"
      }`}
    >
      <div className="grid gap-3 lg:grid-cols-[repeat(4,minmax(0,1fr))_auto]">
        <div>
          <label htmlFor="s-location" className="eyebrow mb-1.5 block text-muted-foreground">
            Location
          </label>
          <select id="s-location" className={fieldClass} value={location} onChange={(e) => setLocation(e.target.value)}>
            <option value="">Any location</option>
            {locations.map((l) => (
              <option key={l} value={l}>
                {l}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="s-type" className="eyebrow mb-1.5 block text-muted-foreground">
            Property Type
          </label>
          <select id="s-type" className={fieldClass} value={type} onChange={(e) => setType(e.target.value)}>
            <option value="">Any type</option>
            {propertyTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="s-budget" className="eyebrow mb-1.5 block text-muted-foreground">
            Budget
          </label>
          <select id="s-budget" className={fieldClass} value={budget} onChange={(e) => setBudget(e.target.value)}>
            <option value="">Any budget</option>
            {budgetOptions.map((b) => (
              <option key={b.label} value={b.label}>
                {b.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="s-status" className="eyebrow mb-1.5 block text-muted-foreground">
            Property Status
          </label>
          <select id="s-status" className={fieldClass} value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="">Any status</option>
            <option value="For Sale">For Sale</option>
            <option value="For Rent">For Rent</option>
          </select>
        </div>
        <div className="flex items-end">
          <button
            type="submit"
            className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-md bg-ink px-6 text-sm font-bold text-background transition-colors hover:bg-lime hover:text-lime-foreground lg:w-auto"
          >
            <Search className="h-4 w-4" aria-hidden="true" />
            Search Properties
          </button>
        </div>
      </div>
    </form>
  );
}
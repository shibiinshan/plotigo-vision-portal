import { useMemo, useState } from "react";
import { SearchBar } from "./SearchBar";
import { PropertyFilters, emptyFilters, type FilterState } from "./PropertyFilters";
import { PropertyGrid } from "./PropertyGrid";
import { properties, budgetOptions } from "@/data/properties";

type SortKey = "newest" | "price-asc" | "price-desc";

export function PropertyListing({
  heading,
  intro,
  initial,
  lockType = false,
}: {
  heading: string;
  intro: string;
  initial?: Partial<FilterState>;
  lockType?: boolean;
}) {
  const [filters, setFilters] = useState<FilterState>({ ...emptyFilters, ...initial });
  const [sort, setSort] = useState<SortKey>("newest");

  const results = useMemo(() => {
    const budget = budgetOptions.find((b) => b.label === filters.budget);
    const list = properties.filter((p) => {
      if (filters.location && p.locality !== filters.location && p.city !== filters.location) return false;
      if (filters.type && p.type !== filters.type) return false;
      if (filters.status && p.status !== filters.status) return false;
      if (budget && (p.price < budget.min || p.price > budget.max)) return false;
      if (filters.minArea && p.areaSqft < Number(filters.minArea)) return false;
      if (filters.bedrooms && (p.bedrooms ?? 0) < Number(filters.bedrooms)) return false;
      return true;
    });

    return [...list].sort((a, b) => {
      if (sort === "price-asc") return a.price - b.price;
      if (sort === "price-desc") return b.price - a.price;
      return b.listedOn.localeCompare(a.listedOn);
    });
  }, [filters, sort]);

  return (
    <>
      <section className="border-b border-border blueprint-grid">
        <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8 lg:py-16">
          <p className="eyebrow text-muted-foreground">Plotigo Listings</p>
          <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.05] sm:text-5xl">{heading}</h1>
          <p className="mt-4 max-w-xl text-muted-foreground">{intro}</p>
          <div className="mt-8">
            <SearchBar />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 lg:px-8 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[280px_minmax(0,1fr)]">
          <PropertyFilters
            filters={filters}
            onChange={(next) => setFilters(lockType ? { ...next, type: filters.type } : next)}
          />

          <div>
            <div className="mb-6 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
              <p className="min-w-0 text-sm text-muted-foreground">
                <span className="font-bold text-foreground">{results.length}</span>{" "}
                {results.length === 1 ? "property" : "properties"} found
              </p>
              <div className="flex shrink-0 items-center gap-2">
                <label htmlFor="sort" className="sr-only">
                  Sort properties
                </label>
                <select
                  id="sort"
                  value={sort}
                  onChange={(e) => setSort(e.target.value as SortKey)}
                  className="h-11 rounded-md border border-border bg-card px-3 text-sm outline-none focus:border-lime"
                >
                  <option value="newest">Newest</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                </select>
              </div>
            </div>
            <PropertyGrid properties={results} />
          </div>
        </div>
      </section>
    </>
  );
}
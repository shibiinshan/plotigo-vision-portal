import { createFileRoute, Link } from "@tanstack/react-router";
import { LandPlot, Building2, Home, Store, ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { Hero } from "@/components/Hero";
import { SearchBar } from "@/components/SearchBar";
import { PropertyGrid } from "@/components/PropertyGrid";
import { CategoryCard } from "@/components/CategoryCard";
import { WhyPlotigo } from "@/components/WhyPlotigo";
import { LocationSection } from "@/components/LocationSection";
import { CTASection } from "@/components/CTASection";
import { featuredProperties } from "@/data/properties";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Plotigo — Plots, Flats & Villas in Kochi, Kerala" },
      {
        name: "description",
        content:
          "Plotigo helps you find verified plots, flats, villas and investment properties in Kochi and across Kerala. Transparent deals, expert assistance.",
      },
      { property: "og:title", content: "Plotigo — Plots, Flats & Villas in Kochi, Kerala" },
      {
        property: "og:description",
        content: "Your right property starts with the right choice. Verified listings across Kerala's prime locations.",
      },
    ],
  }),
  component: Index,
});

const categories = [
  {
    title: "Plots",
    count: "Land & sites",
    description: "Title-clear residential land ready to build on.",
    icon: <LandPlot className="h-5 w-5" />,
    to: "/plots" as const,
  },
  {
    title: "Flats",
    count: "Apartments",
    description: "2 and 3 BHK homes in connected neighbourhoods.",
    icon: <Building2 className="h-5 w-5" />,
    to: "/flats" as const,
  },
  {
    title: "Villas",
    count: "Independent homes",
    description: "Private, spacious houses with their own compound.",
    icon: <Home className="h-5 w-5" />,
    to: "/villas" as const,
  },
  {
    title: "Commercial",
    count: "Business spaces",
    description: "Showrooms and offices on high-visibility frontage.",
    icon: <Store className="h-5 w-5" />,
    to: "/properties" as const,
  },
];

function Index() {
  return (
    <SiteLayout>
      <Hero />

      <div className="relative z-10 mx-auto -mt-12 max-w-7xl px-5 lg:-mt-14 lg:px-8">
        <SearchBar floating />
      </div>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="grid gap-4 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
          <div className="min-w-0">
            <p className="eyebrow text-muted-foreground">Featured</p>
            <h2 className="mt-4 font-display text-4xl font-extrabold leading-[1.05] sm:text-5xl">
              Find Your Next Property
            </h2>
            <p className="mt-3 text-muted-foreground">Handpicked properties in locations that matter.</p>
          </div>
          <Link
            to="/properties"
            className="inline-flex shrink-0 items-center gap-1.5 text-sm font-bold underline-offset-4 hover:underline"
          >
            View all properties <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-10">
          <PropertyGrid properties={featuredProperties} />
        </div>
      </section>

      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24">
          <p className="eyebrow text-muted-foreground">Browse by category</p>
          <h2 className="mt-4 max-w-xl font-display text-4xl font-extrabold leading-[1.05] sm:text-5xl">
            Every kind of property, one standard of checking.
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((c) => (
              <CategoryCard key={c.title} {...c} />
            ))}
          </div>
        </div>
      </section>

      <WhyPlotigo />
      <LocationSection />
      <CTASection />
    </SiteLayout>
  );
}

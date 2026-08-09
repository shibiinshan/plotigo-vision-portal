import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PropertyListing } from "@/components/PropertyListing";
import { CTASection } from "@/components/CTASection";

type PropertySearch = {
  location: string | undefined;
  type: string | undefined;
  budget: string | undefined;
  status: string | undefined;
};

const str = (v: unknown) => (typeof v === "string" && v.length > 0 ? v : undefined);

export const Route = createFileRoute("/properties/")({
  validateSearch: (search: Record<string, unknown>): PropertySearch => ({
    location: str(search["location"]),
    type: str(search["type"]),
    budget: str(search["budget"]),
    status: str(search["status"]),
  }),
  head: () => ({
    meta: [
      { title: "Explore Properties in Kochi & Kerala | Plotigo" },
      {
        name: "description",
        content:
          "Browse verified plots, flats, villas and commercial properties across Kochi, Edappally, Kakkanad and Aluva with Plotigo.",
      },
      { property: "og:title", content: "Explore Properties in Kochi & Kerala | Plotigo" },
      {
        property: "og:description",
        content: "Filter plots, flats and villas by location, budget and area. Enquire on WhatsApp instantly.",
      },
    ],
  }),
  component: PropertiesPage,
});

function PropertiesPage() {
  const search = Route.useSearch();
  return (
    <SiteLayout>
      <PropertyListing
        heading="Explore Properties"
        intro="Filter by location, budget, area and type — then talk to us directly about anything that fits."
        initial={{
          location: search.location ?? "",
          type: search.type ?? "",
          budget: search.budget ?? "",
          status: search.status ?? "",
        }}
      />
      <CTASection />
    </SiteLayout>
  );
}
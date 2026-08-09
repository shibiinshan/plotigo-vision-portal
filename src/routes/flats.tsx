import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PropertyListing } from "@/components/PropertyListing";
import { CTASection } from "@/components/CTASection";

export const Route = createFileRoute("/flats")({
  head: () => ({
    meta: [
      { title: "Flats & Apartments for Sale in Kochi | Plotigo" },
      {
        name: "description",
        content:
          "2 and 3 BHK flats in Elamakkara, Edappally and Aluva. Ready-to-move apartments with transparent pricing from Plotigo.",
      },
      { property: "og:title", content: "Flats & Apartments for Sale in Kochi | Plotigo" },
      { property: "og:description", content: "Ready-to-move apartments in Kochi's best-connected neighbourhoods." },
    ],
  }),
  component: FlatsPage,
});

function FlatsPage() {
  return (
    <SiteLayout>
      <PropertyListing
        heading="Flats in Kochi"
        intro="Apartments chosen for layout efficiency, connectivity and resale strength."
        initial={{ type: "Flat" }}
        lockType
      />
      <CTASection />
    </SiteLayout>
  );
}
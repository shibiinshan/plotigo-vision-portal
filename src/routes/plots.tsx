import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PropertyListing } from "@/components/PropertyListing";
import { CTASection } from "@/components/CTASection";

export const Route = createFileRoute("/plots")({
  head: () => ({
    meta: [
      { title: "Residential Plots for Sale in Kochi | Plotigo" },
      {
        name: "description",
        content:
          "Verified residential plots in Edappally, Thrippunithura and across Kochi. Clear titles, road frontage and honest pricing.",
      },
      { property: "og:title", content: "Residential Plots for Sale in Kochi | Plotigo" },
      { property: "og:description", content: "Buildable, title-clear plots in Kerala's strongest corridors." },
    ],
  }),
  component: PlotsPage,
});

function PlotsPage() {
  return (
    <SiteLayout>
      <PropertyListing
        heading="Plots in Kerala"
        intro="Buildable, title-clear land in locations with real long-term demand."
        initial={{ type: "Plot" }}
        lockType
      />
      <CTASection />
    </SiteLayout>
  );
}
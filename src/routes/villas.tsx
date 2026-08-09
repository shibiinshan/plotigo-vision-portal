import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PropertyListing } from "@/components/PropertyListing";
import { CTASection } from "@/components/CTASection";

export const Route = createFileRoute("/villas")({
  head: () => ({
    meta: [
      { title: "Luxury Villas for Sale in Kochi | Plotigo" },
      {
        name: "description",
        content:
          "Independent and gated-community villas in Kakkanad and around Kochi. Private, spacious homes curated by Plotigo.",
      },
      { property: "og:title", content: "Luxury Villas for Sale in Kochi | Plotigo" },
      { property: "og:description", content: "Independent villas with private gardens near Infopark and SmartCity." },
    ],
  }),
  component: VillasPage,
});

function VillasPage() {
  return (
    <SiteLayout>
      <PropertyListing
        heading="Villas in Kochi"
        intro="Independent homes with space, privacy and a serious address."
        initial={{ type: "Villa" }}
        lockType
      />
      <CTASection />
    </SiteLayout>
  );
}
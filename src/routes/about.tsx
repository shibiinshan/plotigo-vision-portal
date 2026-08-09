import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { WhyPlotigo } from "@/components/WhyPlotigo";
import { CTASection } from "@/components/CTASection";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Plotigo — Kerala Property Experts" },
      {
        name: "description",
        content:
          "Plotigo helps buyers in Kerala find the right plot, flat or villa with verified listings, honest pricing and one-to-one guidance.",
      },
      { property: "og:title", content: "About Plotigo — Kerala Property Experts" },
      {
        property: "og:description",
        content: "A property brand built on verification, transparency and personal assistance.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <section className="border-b border-border blueprint-grid">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
          <p className="eyebrow text-muted-foreground">About Plotigo</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-extrabold leading-[1.05] sm:text-6xl">
            We help people make the <span className="text-lime">right choice</span>, not just a purchase.
          </h1>
          <div className="mt-8 grid max-w-4xl gap-6 text-lg leading-relaxed text-muted-foreground md:grid-cols-2">
            <p>
              Plotigo is a Kerala-based property platform working across Kochi and its growth corridors.
              We look at land and homes the way a buyer should — documents first, location second, price
              third.
            </p>
            <p>
              Every property we present is checked on the ground and explained plainly, including what's
              not perfect about it. That's the whole reason people come back to us and send their family
              our way.
            </p>
          </div>

          <dl className="mt-14 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-3">
            {[
              { k: "Properties curated", v: "60+" },
              { k: "Locations covered", v: "6" },
              { k: "Average reply time", v: "< 2 hrs" },
            ].map((s) => (
              <div key={s.k} className="bg-card p-8">
                <dt className="eyebrow text-muted-foreground">{s.k}</dt>
                <dd className="mt-2 font-display text-4xl font-extrabold">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <WhyPlotigo />
      <CTASection />
    </SiteLayout>
  );
}
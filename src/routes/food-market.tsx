import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import fanDanceImg from "@/assets/fan-dance.png";
import { ArrowRight, Utensils, Truck, Beer, Store } from "lucide-react";

export const Route = createFileRoute("/food-market")({
  head: () => ({
    meta: [
      { title: "Food & Market · CCSA Festival 2026" },
      { name: "description", content: "20+ food vendors and trucks, a licensed beer garden, and a 100+ booth marketplace across Swangard Stadium." },
      { property: "og:title", content: "Food & Market · CCSA 2026" },
      { property: "og:description", content: "Regional Chinese, pan-Asian and Vancouver-local kitchens." },
      { property: "og:url", content: "/food-market" },
    ],
    links: [{ rel: "canonical", href: "/food-market" }],
  }),
  component: FoodPage,
});

const zones = [
  { icon: Utensils, title: "Asian Food Festival", body: "Regional Chinese kitchens, Taiwanese street food, Korean BBQ, Japanese izakaya bites, Southeast Asian classics." },
  { icon: Truck, title: "Food Truck Midway", body: "Vancouver's best food trucks lined along the festival midway with premium drive-in slots." },
  { icon: Beer, title: "Beer Garden", body: "Licensed bar with local craft beer, wine and Asian-inspired cocktails — soundtracked by live DJs." },
  { icon: Store, title: "Vendor Marketplace", body: "100+ booths of artisans, makers, lifestyle brands and community organizations." },
];

function FoodPage() {
  return (
    <>
      <PageHero
        eyebrow="Food & Market"
        title="A 4-zone outdoor food festival, built for a Vancouver summer."
        description="From dumplings to craft beer to handmade ceramics — eat, drink and shop your way across one of the year's largest outdoor multicultural markets."
        image={fanDanceImg}
      />
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {zones.map((z, i) => (
            <Reveal key={z.title} delay={i * 70}>
              <div className="h-full rounded-2xl border border-brand-teal/10 bg-white p-7 hover-lift">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-teal-deep text-brand-gold">
                  <z.icon size={20} />
                </div>
                <h3 className="mt-5 font-display text-xl text-brand-teal-deep">{z.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{z.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mx-auto max-w-3xl px-5 lg:px-8 mt-20 text-center">
          <h2 className="font-display text-3xl lg:text-4xl text-brand-teal-deep text-balance">Want to serve, sell, or pour at the festival?</h2>
          <p className="mt-4 text-muted-foreground">Vendor applications close 6 weeks before the event. Early-bird pricing closes June 26.</p>
          <Link to="/become-a-vendor" className="mt-6 inline-flex items-center gap-2 rounded-full gradient-red px-7 py-3.5 text-sm font-semibold text-white shadow-glow">
            Apply As Vendor <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import paradeImg from "@/assets/parade-ccrac.png";
import logoCcsa from "@/assets/logo-ccsa.png";
import logoCcrac from "@/assets/logo-ccrac.jpg";
import logoBurnaby from "@/assets/logo-burnaby.png";
import logoHospital from "@/assets/logo-burnaby-hospital.png";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/sponsors")({
  head: () => ({
    meta: [
      { title: "Sponsors & Partners · CCSA Festival 2026" },
      { name: "description", content: "The civic, cultural and corporate partners powering the 2026 Chinese Cultural Heritage & Vancouver Water Splashing Festival." },
      { property: "og:title", content: "Sponsors & Partners · CCSA 2026" },
      { property: "og:description", content: "A trusted ecosystem of partners." },
      { property: "og:url", content: "/sponsors" },
    ],
    links: [{ rel: "canonical", href: "/sponsors" }],
  }),
  component: SponsorsPage,
});

const tiers = [
  { label: "Title Sponsor", size: "h-32", logos: [{ src: logoCcsa, name: "CCSA" }] },
  { label: "Diamond Sponsors", size: "h-24", logos: [{ src: logoCcrac, name: "CCRAC" }, { src: logoHospital, name: "Burnaby Hospital Foundation" }] },
  { label: "Gold Sponsors", size: "h-20", logos: [{ src: logoBurnaby, name: "City of Burnaby" }, { src: logoCcrac, name: "CCRAC" }, { src: logoHospital, name: "Burnaby Hospital" }] },
  { label: "Community Partners", size: "h-16", logos: Array.from({ length: 6 }).map((_, i) => ({ src: [logoBurnaby, logoCcrac, logoHospital, logoCcsa][i % 4], name: "Partner" })) },
];

function SponsorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Sponsors & Partners"
        title="Built on partnership. Trusted by community."
        description="Sponsoring this festival is not a marketing transaction — it's an entry point into Vancouver's Chinese-Canadian community network."
        image={paradeImg}
      />
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-6xl px-5 lg:px-8 space-y-12">
          {tiers.map((t, i) => (
            <Reveal key={t.label} delay={i * 60}>
              <div className="rounded-2xl border border-brand-teal/10 bg-brand-cream/60 p-8 lg:p-10">
                <div className="flex flex-wrap items-end justify-between gap-2">
                  <div className="text-[11px] uppercase tracking-[0.22em] text-brand-red">{t.label}</div>
                  <Link to="/become-a-sponsor" className="text-xs underline-offset-4 hover:underline text-brand-teal-deep">Join this tier →</Link>
                </div>
                <div className={`mt-6 grid items-center gap-6 ${t.logos.length === 1 ? "grid-cols-1" : "grid-cols-2 sm:grid-cols-3 lg:grid-cols-6"}`}>
                  {t.logos.map((l, ix) => (
                    <div key={ix} className={`flex items-center justify-center rounded-xl bg-white p-5 ${t.size} ring-gold`}>
                      <img src={l.src} alt={l.name} className="max-h-full max-w-full object-contain" />
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-20 text-center px-5">
          <Link to="/become-a-sponsor" className="inline-flex items-center gap-2 rounded-full gradient-red px-7 py-4 text-sm font-semibold text-white shadow-glow">
            Request Sponsorship Package <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}

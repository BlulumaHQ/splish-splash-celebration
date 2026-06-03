import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import openingImg from "@/assets/stadium-opening.png";
import { useState } from "react";
import { toast } from "sonner";
import { Award, ArrowRight, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/become-a-sponsor")({
  head: () => ({
    meta: [
      { title: "Become A Sponsor · CCSA Festival 2026" },
      { name: "description", content: "Sponsorship tiers from $1,000 Community to $30,000 Title. Reach 5,000–10,000 Vancouver-area families with real ESG impact." },
      { property: "og:title", content: "Become A Sponsor · CCSA 2026" },
      { property: "og:description", content: "Sponsorship tiers from $1,000 to $30,000." },
      { property: "og:url", content: "/become-a-sponsor" },
    ],
    links: [{ rel: "canonical", href: "/become-a-sponsor" }],
  }),
  component: SponsorPage,
});

const tiers = [
  { name: "Title Sponsor", price: "$30,000", featured: true, perks: ["Official naming rights", "Largest logo placement on main stage", "Press conference speaking opportunity", "Two premium 10×10 booths", "Featured in all media releases", "Top-tier digital & social activation"] },
  { name: "Diamond Sponsor", price: "$15,000", perks: ["Premium stage backdrop logo", "Press conference speaking", "Premium 10×10 booth", "Photo wall logo", "Social media features"] },
  { name: "Gold Sponsor", price: "$10,000", perks: ["Stage backdrop logo", "On-stage acknowledgement", "Premium 10×10 booth", "Photo wall logo", "Social media mentions"] },
  { name: "Silver Sponsor", price: "$5,000", perks: ["Stage logo placement", "10×10 booth", "Photo wall logo", "Social media mentions"] },
  { name: "Bronze Sponsor", price: "$2,000", perks: ["10×10 booth", "Poster logo placement", "Social media mention"] },
  { name: "Community Sponsor", price: "$1,000", perks: ["10×10 booth", "Poster logo placement"] },
];

const benefits = [
  "Reach 5,000–10,000 attendees",
  "Family decision makers",
  "Chinese consumer market",
  "Multicultural community",
  "High engagement event",
  "Direct brand activation",
  "ESG community impact",
];

function SponsorPage() {
  return (
    <>
      <PageHero
        eyebrow="Become A Sponsor"
        title="A real ESG activation. Not symbolic branding."
        description="Six tailored sponsorship tiers — from local Community partner to city-level Title Sponsor — built around measurable reach and long-term brand integration."
        image={openingImg}
      />

      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 grid gap-10 lg:grid-cols-7">
          <Reveal className="lg:col-span-2">
            <div className="text-[11px] uppercase tracking-[0.22em] text-brand-red">Why Sponsor</div>
            <h2 className="mt-3 font-display text-3xl text-brand-teal-deep">The value of your sponsorship.</h2>
            <ul className="mt-6 space-y-3">
              {benefits.map((b) => (
                <li key={b} className="flex gap-3 text-sm text-brand-teal-deep">
                  <CheckCircle2 size={18} className="text-brand-red flex-shrink-0" />{b}
                </li>
              ))}
            </ul>
          </Reveal>
          <div className="lg:col-span-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
            {tiers.map((t, i) => (
              <Reveal key={t.name} delay={i * 60}>
                <div className={`group relative h-full rounded-2xl border p-7 hover-lift ${t.featured ? "bg-brand-teal-deep text-white border-brand-gold/50 shadow-elegant sm:col-span-2" : "bg-white border-brand-teal/10"}`}>
                  {t.featured && (
                    <div className="absolute -top-3 left-7 rounded-full gradient-gold px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-teal-deep">
                      Title Tier · Most Visible
                    </div>
                  )}
                  <div className="flex items-start justify-between">
                    <div>
                      <div className={`text-[10px] uppercase tracking-[0.22em] ${t.featured ? "text-brand-gold-soft" : "text-brand-red"}`}>Tier</div>
                      <div className="mt-2 font-display text-2xl">{t.name}</div>
                    </div>
                    <Award size={22} className={t.featured ? "text-brand-gold" : "text-brand-red"} />
                  </div>
                  <div className={`mt-4 font-display text-4xl ${t.featured ? "text-gradient-gold" : "text-brand-teal-deep"}`}>{t.price}</div>
                  <div className={`mt-4 h-px ${t.featured ? "bg-white/15" : "bg-brand-teal/10"}`} />
                  <ul className={`mt-5 space-y-2 text-sm ${t.featured ? "text-white/85" : "text-muted-foreground"}`}>
                    {t.perks.map((p) => <li key={p} className="flex gap-2"><span className="text-brand-gold">✦</span>{p}</li>)}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <SponsorForm />
    </>
  );
}

function SponsorForm() {
  const [submitted, setSubmitted] = useState(false);
  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success("Thank you — we'll send your sponsorship package within 2 business days.");
    (e.target as HTMLFormElement).reset();
  };
  return (
    <section id="form" className="bg-brand-cream py-24">
      <div className="mx-auto max-w-3xl px-5 lg:px-8">
        <Reveal>
          <div className="text-[11px] uppercase tracking-[0.22em] text-brand-red text-center">Request Package</div>
          <h2 className="mt-3 font-display text-3xl lg:text-5xl text-brand-teal-deep text-center text-balance">Send us a note. We'll send back the full deck.</h2>
        </Reveal>

        <form onSubmit={submit} className="mt-12 grid gap-4 rounded-2xl border border-brand-teal/10 bg-white p-8 lg:p-10">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Full name" name="name" required />
            <Field label="Company / organization" name="company" required />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Email" name="email" type="email" required />
            <Field label="Phone" name="phone" />
          </div>
          <label className="block">
            <span className="text-[11px] uppercase tracking-[0.18em] text-brand-teal-deep/70">Tier of interest</span>
            <select name="tier" className="mt-1 w-full rounded-lg border border-brand-teal/15 bg-white px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-red/40">
              {tiers.map((t) => <option key={t.name}>{t.name} — {t.price}</option>)}
              <option>Custom partnership</option>
            </select>
          </label>
          <label className="block">
            <span className="text-[11px] uppercase tracking-[0.18em] text-brand-teal-deep/70">Message</span>
            <textarea name="msg" rows={4} className="mt-1 w-full rounded-lg border border-brand-teal/15 bg-white px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-red/40" placeholder="Tell us about your brand goals…" />
          </label>
          <button type="submit" className="mt-2 inline-flex items-center justify-center gap-2 rounded-full gradient-red px-7 py-3.5 text-sm font-semibold text-white shadow-glow">
            {submitted ? "Submitted — Thank you" : <>Request Sponsorship Package <ArrowRight size={16} /></>}
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({ label, ...rest }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="text-[11px] uppercase tracking-[0.18em] text-brand-teal-deep/70">{label}</span>
      <input {...rest} className="mt-1 w-full rounded-lg border border-brand-teal/15 bg-white px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-red/40" />
    </label>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import paradeImg from "@/assets/parade-ccrac.png";
import { useState } from "react";
import { toast } from "sonner";
import { ArrowRight, Store, Utensils, Truck, Beer } from "lucide-react";

export const Route = createFileRoute("/become-a-vendor")({
  head: () => ({
    meta: [
      { title: "Become A Vendor · CCSA Festival 2026" },
      { name: "description", content: "Apply for a vendor booth, food vendor slot, food truck spot, or beer garden activation at the 2026 Cultural Heritage Festival." },
      { property: "og:title", content: "Become A Vendor · CCSA 2026" },
      { property: "og:description", content: "Standard, Food, Food Truck and Beer Garden categories." },
      { property: "og:url", content: "/become-a-vendor" },
    ],
    links: [{ rel: "canonical", href: "/become-a-vendor" }],
  }),
  component: VendorPage,
});

const cats = [
  { icon: Store, name: "Standard Vendor", price: "$350", early: "$300 early bird (by Jun 26)", body: "One 10×10 booth in the marketplace zone. Includes poster logo and social mention." },
  { icon: Utensils, name: "Food Vendor", price: "Inquire", early: "Limited spots", body: "10×10 prepared-food booth in the Asian food festival area. Includes utilities access." },
  { icon: Truck, name: "Food Truck", price: "Inquire", early: "Premium midway", body: "Premium drive-in slot along the festival midway, full-day exposure to all attendees." },
  { icon: Beer, name: "Beer Garden Vendor", price: "Inquire", early: "Licensed only", body: "Licensed beverage activation inside the dedicated beer garden experience." },
];

function VendorPage() {
  return (
    <>
      <PageHero
        eyebrow="Become A Vendor"
        title="Sell to 10,000 people in a single Vancouver summer day."
        description="Four vendor tracks designed for retail brands, kitchens, food trucks and licensed beverage operators."
        image={paradeImg}
      />

      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 grid gap-5 sm:grid-cols-2">
          {cats.map((c, i) => (
            <Reveal key={c.name} delay={i * 60}>
              <div className="h-full rounded-2xl border border-brand-teal/10 bg-white p-8 hover-lift">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-teal-deep text-brand-gold">
                    <c.icon size={22} />
                  </div>
                  <div className="text-right">
                    <div className="font-display text-2xl text-brand-teal-deep">{c.price}</div>
                    <div className="text-xs text-muted-foreground">{c.early}</div>
                  </div>
                </div>
                <h3 className="mt-6 font-display text-2xl text-brand-teal-deep">{c.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <VendorForm />
    </>
  );
}

function VendorForm() {
  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Application received. We'll review and get back to you within 5 business days.");
    (e.target as HTMLFormElement).reset();
  };
  return (
    <section className="bg-brand-cream py-24">
      <div className="mx-auto max-w-3xl px-5 lg:px-8">
        <Reveal>
          <div className="text-[11px] uppercase tracking-[0.22em] text-brand-red text-center">Vendor Application</div>
          <h2 className="mt-3 font-display text-3xl lg:text-5xl text-brand-teal-deep text-center text-balance">Apply for your booth.</h2>
        </Reveal>
        <form onSubmit={submit} className="mt-12 grid gap-4 rounded-2xl border border-brand-teal/10 bg-white p-8 lg:p-10">
          <div className="grid gap-4 sm:grid-cols-2">
            <Input label="Business name" name="business" required />
            <Input label="Contact name" name="name" required />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Input label="Email" name="email" type="email" required />
            <Input label="Phone" name="phone" />
          </div>
          <label className="block">
            <span className="text-[11px] uppercase tracking-[0.18em] text-brand-teal-deep/70">Category</span>
            <select name="cat" className="mt-1 w-full rounded-lg border border-brand-teal/15 bg-white px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-red/40">
              {cats.map((c) => <option key={c.name}>{c.name}</option>)}
            </select>
          </label>
          <label className="block">
            <span className="text-[11px] uppercase tracking-[0.18em] text-brand-teal-deep/70">What will you sell / serve?</span>
            <textarea name="desc" rows={4} className="mt-1 w-full rounded-lg border border-brand-teal/15 bg-white px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-red/40" />
          </label>
          <button type="submit" className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-brand-teal-deep px-7 py-3.5 text-sm font-semibold text-white hover:bg-brand-teal">
            Apply As Vendor <ArrowRight size={16} />
          </button>
        </form>
      </div>
    </section>
  );
}

function Input({ label, ...rest }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="text-[11px] uppercase tracking-[0.18em] text-brand-teal-deep/70">{label}</span>
      <input {...rest} className="mt-1 w-full rounded-lg border border-brand-teal/15 bg-white px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-red/40" />
    </label>
  );
}

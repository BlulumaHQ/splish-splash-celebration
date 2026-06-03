import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight, Calendar, MapPin, Sparkles, Users, Music2, Utensils, Droplets,
  Baby, Beer, Store, Mic2, Heart, Award, Quote,
} from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";
import { FESTIVAL } from "@/lib/festival";

import stadiumImg from "@/assets/swangard-stadium.png";
import splashKidsImg from "@/assets/splash-kids.png";
import splashPoolImg from "@/assets/splash-pool.png";
import kidsPerfImg from "@/assets/kids-performance.jpg";
import openingImg from "@/assets/stadium-opening.png";
import crowdImg from "@/assets/stadium-crowd.png";
import fanDanceImg from "@/assets/fan-dance.png";
import paradeImg from "@/assets/parade-ccrac.png";
import logoCcsa from "@/assets/logo-ccsa.png";
import logoCcrac from "@/assets/logo-ccrac.jpg";
import logoBurnaby from "@/assets/logo-burnaby.png";
import logoHospital from "@/assets/logo-burnaby-hospital.png";
import venueMap from "@/assets/venue-map.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "2026 Chinese Cultural Heritage & Vancouver Water Splashing Festival" },
      { name: "description", content: "July 26, 2026 · Swangard Stadium, Burnaby BC. Eighteen years of cultural performance, community, food, and water splashing carnival. Become a sponsor or vendor." },
      { property: "og:title", content: "2026 Chinese Cultural Heritage Festival · Vancouver" },
      { property: "og:description", content: "Celebrate Culture. Splash Into Summer. Connect Communities." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <Marquee />
      <WhyMatters />
      <Highlights />
      <Impact />
      <VenueMap />
      <SponsorShowcase />
      <SponsorCTA />
      <VendorTeaser />
      <Testimonial />
      <FinalCTA />
    </>
  );
}

/* ---------------- Hero ---------------- */
function Hero() {
  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden bg-brand-teal-deep text-white">
      <img
        src={openingImg}
        alt="Opening ceremony at Swangard Stadium"
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-55"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-teal-deep/70 via-brand-teal-deep/55 to-brand-teal-deep" />
      <div className="absolute inset-0 -z-10 gradient-hero opacity-65" />

      <div className="mx-auto max-w-7xl px-5 lg:px-8 pt-36 lg:pt-44 pb-20 flex flex-col min-h-[100svh] justify-center">
        <Reveal>
          <div className="inline-flex items-center gap-2 self-start rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-[11px] uppercase tracking-[0.22em] text-brand-gold-soft backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-gold animate-pulse" />
            18th Edition · A City-Level Festival
          </div>
        </Reveal>

        <Reveal delay={120}>
          <h1 className="mt-6 font-display text-[44px] leading-[1.02] sm:text-6xl lg:text-[88px] font-medium text-balance max-w-5xl">
            2026 Chinese Cultural Heritage<span className="text-gradient-gold"> &</span> <br className="hidden sm:block" />
            18th Annual Vancouver <em className="not-italic text-gradient-gold">Water Splashing</em> Festival
          </h1>
        </Reveal>

        <Reveal delay={240}>
          <p className="mt-7 max-w-2xl text-lg sm:text-xl text-white/85 font-light leading-relaxed">
            Celebrate Culture. Splash Into Summer. Connect Communities.
          </p>
        </Reveal>

        <Reveal delay={340}>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm">
            <div className="flex items-center gap-3 text-white/90">
              <Calendar size={18} className="text-brand-gold" />
              <div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-white/55">Date</div>
                <div className="font-medium">{FESTIVAL.date}</div>
              </div>
            </div>
            <div className="h-8 w-px bg-white/15 hidden sm:block" />
            <div className="flex items-center gap-3 text-white/90">
              <MapPin size={18} className="text-brand-gold" />
              <div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-white/55">Venue</div>
                <div className="font-medium">{FESTIVAL.venue}, {FESTIVAL.city}</div>
              </div>
            </div>
            <div className="h-8 w-px bg-white/15 hidden sm:block" />
            <div className="flex items-center gap-3 text-white/90">
              <Sparkles size={18} className="text-brand-gold" />
              <div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-white/55">Attendance</div>
                <div className="font-medium">5,000 – 10,000 expected</div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={460}>
          <div className="mt-12 flex flex-wrap gap-3">
            <Link
              to="/become-a-sponsor"
              className="group inline-flex items-center gap-2 rounded-full gradient-red px-7 py-4 text-sm font-semibold text-white shadow-glow transition hover:opacity-95"
            >
              Become A Sponsor
              <ArrowRight size={16} className="transition group-hover:translate-x-1" />
            </Link>
            <Link
              to="/become-a-vendor"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 backdrop-blur px-7 py-4 text-sm font-semibold text-white transition hover:bg-white/15"
            >
              Become A Vendor
            </Link>
          </div>
        </Reveal>

        <div className="mt-auto pt-16 flex items-center justify-between text-[11px] uppercase tracking-[0.22em] text-white/45">
          <div className="font-zh">中華傳統文化節暨第18屆溫哥華潑水節</div>
          <div className="hidden sm:block">Scroll ↓</div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Marquee ---------------- */
function Marquee() {
  const items = [
    "Cultural Performances",
    "Water Splash Carnival",
    "Asian Food Festival",
    "Family Programs",
    "Beer Garden",
    "Vendor Marketplace",
    "Live Entertainment",
    "Community Showcase",
  ];
  const loop = [...items, ...items];
  return (
    <div className="border-y border-brand-teal/10 bg-brand-cream overflow-hidden">
      <div className="marquee-track flex gap-12 py-5 whitespace-nowrap">
        {loop.map((t, i) => (
          <div key={i} className="flex items-center gap-12 text-brand-teal-deep/80">
            <span className="font-display text-xl sm:text-2xl">{t}</span>
            <span className="text-brand-gold">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------------- Why Matters ---------------- */
function WhyMatters() {
  const features = [
    { icon: Heart, title: "Cultural Heritage", body: "A living stage for traditional Chinese performance, craft, and intangible heritage — reimagined for the next generation." },
    { icon: Users, title: "Multicultural Community", body: "An open, family-friendly gathering that connects Chinese-Canadian heritage with Vancouver's wider multicultural community." },
    { icon: Baby, title: "Family Entertainment", body: "Designed for 4–6 hours of dwell time: performances, interactive games, kid zones, and creative workshops." },
    { icon: Droplets, title: "Water Splashing Carnival", body: "Our signature summer ritual — a full-scale splash arena built for joyful, soaking, community celebration." },
  ];
  return (
    <Section id="why" eyebrow="Why This Festival Matters" title="A signature city-level festival, eighteen years in the making.">
      <div className="grid gap-px bg-brand-teal/10 rounded-2xl overflow-hidden lg:grid-cols-4 sm:grid-cols-2 border border-brand-teal/10">
        {features.map((f, i) => (
          <Reveal key={f.title} delay={i * 80}>
            <div className="group h-full bg-white p-7 lg:p-9 transition-colors hover:bg-brand-cream">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-teal-deep text-brand-gold transition-transform group-hover:scale-110">
                <f.icon size={22} />
              </div>
              <h3 className="mt-6 font-display text-2xl font-medium text-brand-teal-deep">{f.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- Highlights ---------------- */
function Highlights() {
  const cards = [
    { title: "Cultural Performances", icon: Music2, img: kidsPerfImg, span: "lg:col-span-2 lg:row-span-2" },
    { title: "Water Splash Zone", icon: Droplets, img: splashKidsImg, span: "" },
    { title: "Asian Food Festival", icon: Utensils, img: fanDanceImg, span: "" },
    { title: "Kids Activities", icon: Baby, img: splashPoolImg, span: "" },
    { title: "Beer Garden", icon: Beer, img: crowdImg, span: "" },
    { title: "Vendor Marketplace", icon: Store, img: paradeImg, span: "lg:col-span-2" },
    { title: "Community Showcase", icon: Users, img: openingImg, span: "" },
    { title: "Live Entertainment", icon: Mic2, img: kidsPerfImg, span: "" },
  ];
  return (
    <section id="highlights" className="bg-brand-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader eyebrow="Festival Highlights" title="Eight experiences across one stadium." />
        <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[220px]">
          {cards.map((c, i) => (
            <Reveal key={c.title + i} delay={i * 60} className={c.span}>
              <div className="group relative h-full min-h-[220px] overflow-hidden rounded-2xl hover-lift">
                <img src={c.img} alt={c.title} className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.06]" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-teal-deep via-brand-teal-deep/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <div className="flex items-center gap-2">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 backdrop-blur">
                      <c.icon size={14} className="text-brand-gold" />
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-white/70">Experience</span>
                  </div>
                  <h3 className="mt-3 font-display text-2xl">{c.title}</h3>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Impact stats ---------------- */
function Impact() {
  const stats = [
    { v: 18, suffix: "+", label: "Years of community impact" },
    { v: 10000, suffix: "+", label: "Visitors expected" },
    { v: 100, suffix: "+", label: "Booths & vendors" },
    { v: 30, suffix: "+", label: "Stage performances" },
    { v: 20, suffix: "+", label: "Food vendors & trucks" },
    { v: 1, suffix: "", label: "Signature city festival" },
  ];
  return (
    <section id="impact" className="relative isolate bg-brand-teal-deep text-white py-28">
      <div className="absolute inset-0 -z-10 gradient-hero opacity-95" />
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          inverse
          eyebrow="18 Years of Community Impact"
          title="A trusted Vancouver tradition — measured in moments, not just numbers."
        />
        <div className="mt-16 grid gap-px bg-white/10 rounded-2xl overflow-hidden sm:grid-cols-2 lg:grid-cols-3 border border-white/10">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 70}>
              <div className="bg-brand-teal-deep p-10">
                <div className="font-display text-5xl lg:text-6xl text-gradient-gold">
                  <Counter to={s.v} suffix={s.suffix} />
                </div>
                <div className="mt-3 text-sm uppercase tracking-[0.18em] text-white/65">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Venue map ---------------- */
function VenueMap() {
  const zones = [
    { name: "Main Stage", color: "bg-brand-red" },
    { name: "Splash Zone", color: "bg-sky-500" },
    { name: "Food Area", color: "bg-amber-500" },
    { name: "Beer Garden", color: "bg-amber-700" },
    { name: "Sponsor Zone", color: "bg-brand-gold" },
    { name: "Vendor Zone", color: "bg-emerald-600" },
    { name: "Kids Area", color: "bg-fuchsia-500" },
  ];
  return (
    <Section id="map" eyebrow="Event Floor Plan" title="Swangard Stadium · seven activated zones across the venue.">
      <div className="mt-12 grid gap-10 lg:grid-cols-5 items-start">
        <Reveal className="lg:col-span-3">
          <div className="relative overflow-hidden rounded-2xl border border-brand-teal/10 shadow-elegant">
            <img src={venueMap} alt="Swangard Stadium aerial map" className="w-full" />
            <div className="absolute left-4 top-4 rounded-full bg-brand-red px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white">
              Live Map · Burnaby
            </div>
          </div>
        </Reveal>
        <Reveal delay={150} className="lg:col-span-2">
          <div className="rounded-2xl border border-brand-teal/10 bg-white p-8 shadow-elegant">
            <div className="text-[11px] uppercase tracking-[0.22em] text-brand-red">Legend</div>
            <ul className="mt-5 space-y-3">
              {zones.map((z) => (
                <li key={z.name} className="flex items-center gap-3 text-sm text-brand-teal-deep">
                  <span className={`h-3 w-3 rounded-full ${z.color}`} />
                  <span className="font-medium">{z.name}</span>
                </li>
              ))}
            </ul>
            <div className="ink-divider my-6" />
            <div className="text-sm text-muted-foreground">
              <div className="font-semibold text-brand-teal-deep">{FESTIVAL.venue}</div>
              <div>{FESTIVAL.address}</div>
              <div className="mt-2">{FESTIVAL.date} · {FESTIVAL.time}</div>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

/* ---------------- Sponsor showcase ---------------- */
function SponsorShowcase() {
  const tiers: { label: string; logos: { src: string; name: string }[] }[] = [
    { label: "Title Sponsor", logos: [{ src: logoCcsa, name: "CCSA" }] },
    { label: "Diamond Sponsors", logos: [{ src: logoCcrac, name: "CCRAC" }, { src: logoHospital, name: "Burnaby Hospital Foundation" }] },
    { label: "Gold Sponsors", logos: [{ src: logoBurnaby, name: "City of Burnaby" }] },
    { label: "Community Partners", logos: [{ src: logoCcrac, name: "CCRAC" }, { src: logoBurnaby, name: "City of Burnaby" }, { src: logoHospital, name: "Burnaby Hospital" }] },
  ];
  return (
    <section id="sponsors" className="py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader eyebrow="Sponsor Showcase" title="A trusted ecosystem of civic, cultural and community partners." />
        <div className="mt-14 space-y-10">
          {tiers.map((t) => (
            <Reveal key={t.label}>
              <div className="rounded-2xl border border-brand-teal/10 bg-brand-cream/60 p-8 lg:p-10">
                <div className="flex flex-wrap items-end justify-between gap-2">
                  <div className="text-[11px] uppercase tracking-[0.22em] text-brand-red">{t.label}</div>
                  <Link to="/become-a-sponsor" className="text-xs text-brand-teal-deep underline-offset-4 hover:underline">Become one →</Link>
                </div>
                <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
                  {t.logos.map((l, i) => (
                    <div key={l.name + i} className="flex items-center justify-center rounded-xl bg-white p-5 h-24 ring-gold">
                      <img src={l.src} alt={l.name} className="max-h-14 max-w-full object-contain" />
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Sponsor CTA ---------------- */
function SponsorCTA() {
  const benefits = [
    "Reach 5,000–10,000 attendees",
    "Family decision makers",
    "Chinese consumer market",
    "Multicultural community",
    "High engagement, long dwell time",
    "Direct brand activation on-site",
    "ESG community impact",
  ];
  const tiers = [
    { name: "Title Sponsor", price: "$30,000", featured: true, perks: ["Official naming rights", "Largest logo on main stage", "Press conference speaking", "Premium 10×10 booth"] },
    { name: "Diamond Sponsor", price: "$15,000", perks: ["Stage backdrop logo", "Press conference role", "Premium booth", "Photo wall logo"] },
    { name: "Gold Sponsor", price: "$10,000", perks: ["Stage backdrop logo", "On-stage acknowledgement", "Premium booth", "Social media mentions"] },
    { name: "Silver Sponsor", price: "$5,000", perks: ["Stage logo", "Booth space", "Photo wall logo", "Social mentions"] },
    { name: "Bronze Sponsor", price: "$2,000", perks: ["Booth space", "Poster logo", "Social mention"] },
    { name: "Community Sponsor", price: "$1,000", perks: ["Booth space", "Poster logo"] },
  ];
  return (
    <section id="sponsorship" className="relative bg-brand-cream py-24 lg:py-32 overflow-hidden">
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-brand-gold/20 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-brand-red/15 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-5 items-start">
          <Reveal className="lg:col-span-2 lg:sticky lg:top-28">
            <div className="text-[11px] uppercase tracking-[0.22em] text-brand-red">Become A Sponsor</div>
            <h2 className="mt-4 font-display text-4xl lg:text-5xl font-medium text-brand-teal-deep text-balance">
              Not a banner. An entry point into Vancouver's Chinese community.
            </h2>
            <p className="mt-5 text-base text-muted-foreground leading-relaxed">
              Sponsoring the Cultural Heritage Festival is a strategic relationship investment —
              real ESG activation, measurable reach, and long-term brand integration into a trusted
              cultural ecosystem.
            </p>
            <ul className="mt-7 grid grid-cols-1 gap-2.5">
              {benefits.map((b) => (
                <li key={b} className="flex items-center gap-3 text-sm text-brand-teal-deep">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-red/10 text-brand-red">
                    <Award size={12} />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
            <Link
              to="/become-a-sponsor"
              className="mt-8 inline-flex items-center gap-2 rounded-full gradient-red px-7 py-3.5 text-sm font-semibold text-white shadow-glow"
            >
              Request Sponsorship Package <ArrowRight size={16} />
            </Link>
          </Reveal>

          <div className="lg:col-span-3 grid gap-4 sm:grid-cols-2">
            {tiers.map((t, i) => (
              <Reveal key={t.name} delay={i * 60}>
                <div className={`group relative h-full rounded-2xl border p-7 transition-all hover-lift
                  ${t.featured
                    ? "bg-brand-teal-deep text-white border-brand-gold/50 shadow-elegant"
                    : "bg-white border-brand-teal/10"}`}
                >
                  {t.featured && (
                    <div className="absolute -top-3 left-7 rounded-full gradient-gold px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-teal-deep">
                      Most Visible
                    </div>
                  )}
                  <div className={`text-[10px] uppercase tracking-[0.22em] ${t.featured ? "text-brand-gold-soft" : "text-brand-red"}`}>Tier</div>
                  <div className="mt-2 font-display text-2xl font-medium">{t.name}</div>
                  <div className={`mt-4 font-display text-4xl ${t.featured ? "text-gradient-gold" : "text-brand-teal-deep"}`}>{t.price}</div>
                  <div className={`mt-4 h-px ${t.featured ? "bg-white/15" : "bg-brand-teal/10"}`} />
                  <ul className={`mt-5 space-y-2 text-sm ${t.featured ? "text-white/85" : "text-muted-foreground"}`}>
                    {t.perks.map((p) => (
                      <li key={p} className="flex gap-2"><span className="text-brand-gold">✦</span>{p}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Vendor teaser ---------------- */
function VendorTeaser() {
  const cats = [
    { name: "Standard Vendor", desc: "10×10 retail / craft booth in the marketplace zone." },
    { name: "Food Vendor", desc: "10×10 prepared-food booth in the Asian food festival area." },
    { name: "Food Truck", desc: "Premium drive-in slot with utilities on the festival midway." },
    { name: "Beer Garden Vendor", desc: "Licensed beverage activation in the dedicated beer garden." },
  ];
  return (
    <Section id="vendors" eyebrow="Vendor Opportunities" title="Bring your brand, your craft, your kitchen — meet 10,000 guests in one day.">
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cats.map((c, i) => (
          <Reveal key={c.name} delay={i * 70}>
            <div className="h-full rounded-2xl border border-brand-teal/10 bg-white p-7 hover-lift">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-red/10 text-brand-red font-display text-lg">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="mt-5 font-display text-xl text-brand-teal-deep">{c.name}</div>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <div className="mt-10 flex justify-center">
        <Link to="/become-a-vendor" className="inline-flex items-center gap-2 rounded-full bg-brand-teal-deep px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-brand-teal">
          Apply As Vendor <ArrowRight size={16} />
        </Link>
      </div>
    </Section>
  );
}

/* ---------------- Testimonial ---------------- */
function Testimonial() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-4xl px-5 lg:px-8 text-center">
        <Reveal>
          <Quote className="mx-auto text-brand-gold" size={36} />
          <p className="mt-6 font-display text-2xl sm:text-3xl lg:text-4xl text-brand-teal-deep leading-snug text-balance">
            “The power of culture lies not in preserving the past,
            but in connecting the future.”
          </p>
          <div className="mt-6 text-sm uppercase tracking-[0.22em] text-muted-foreground">
            Linda Liu · Festival & Artistic Director
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Final CTA ---------------- */
function FinalCTA() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-teal-deep text-white">
      <img src={stadiumImg} alt="Swangard Stadium" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-40" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-brand-teal-deep via-brand-teal-deep/85 to-brand-teal-deep/60" />
      <div className="mx-auto max-w-7xl px-5 lg:px-8 py-28 text-center">
        <Reveal>
          <div className="text-[11px] uppercase tracking-[0.22em] text-brand-gold-soft">July 26, 2026 · Swangard Stadium</div>
          <h2 className="mt-4 font-display text-4xl lg:text-6xl font-medium text-balance">
            Build culture, community<br className="hidden sm:block" /> and brand value — together.
          </h2>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link to="/become-a-sponsor" className="inline-flex items-center gap-2 rounded-full gradient-red px-7 py-4 text-sm font-semibold shadow-glow">
              Become A Sponsor <ArrowRight size={16} />
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 backdrop-blur px-7 py-4 text-sm font-semibold hover:bg-white/15">
              Contact The Team
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Shared section helpers ---------------- */
export function SectionHeader({
  eyebrow, title, inverse = false,
}: { eyebrow: string; title: string; inverse?: boolean }) {
  return (
    <Reveal>
      <div className={`max-w-3xl ${inverse ? "text-white" : ""}`}>
        <div className={`text-[11px] uppercase tracking-[0.22em] ${inverse ? "text-brand-gold-soft" : "text-brand-red"}`}>{eyebrow}</div>
        <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-medium text-balance leading-[1.05]">
          {title}
        </h2>
        <div className={`mt-6 h-px w-16 ${inverse ? "bg-brand-gold" : "bg-brand-red"}`} />
      </div>
    </Reveal>
  );
}

function Section({ id, eyebrow, title, children }: { id?: string; eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader eyebrow={eyebrow} title={title} />
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}

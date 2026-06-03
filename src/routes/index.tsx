import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, Calendar, MapPin, Sun, Droplets, Music2, Utensils,
  Baby, Beer, Store, Mic2, Sparkles,
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
      { title: "Vancouver Water Splashing Festival 2026 · July 26 · Swangard Stadium" },
      { name: "description", content: "Vancouver's biggest water splashing celebration returns July 26, 2026. A multicultural summer festival of culture, family, food and community at Swangard Stadium, Burnaby." },
      { property: "og:title", content: "Vancouver Water Splashing Festival 2026" },
      { property: "og:description", content: "A multicultural summer festival celebrating culture, family, food, and community." },
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
      <Story />
      <Experiences />
      <Gallery />
      <ByTheNumbers />
      <Venue />
      <Partners />
      <FinalCTA />
    </>
  );
}

/* -------------------- 1. Hero -------------------- */
function Hero() {
  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden text-white">
      <img
        src={splashKidsImg}
        alt="Kids splashing water at the Vancouver Water Splashing Festival"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-ocean/55 via-brand-ocean/25 to-brand-ocean-deep/75" />

      <div className="mx-auto max-w-7xl px-5 lg:px-8 pt-36 lg:pt-48 pb-20 flex flex-col min-h-[100svh] justify-center">
        <Reveal>
          <div className="inline-flex items-center gap-2 self-start rounded-full bg-white/15 border border-white/30 px-4 py-1.5 text-[11px] uppercase tracking-[0.22em] text-white backdrop-blur">
            <Sun size={13} className="text-brand-sun" />
            Sunday · July 26, 2026 · Swangard Stadium
          </div>
        </Reveal>

        <Reveal delay={120}>
          <h1 className="mt-7 font-display text-[44px] leading-[1.02] sm:text-6xl lg:text-[92px] font-semibold text-balance max-w-5xl drop-shadow-[0_2px_24px_rgba(0,0,0,0.25)]">
            Vancouver's biggest
            <span className="text-gradient-gold"> water splashing </span>
            celebration returns.
          </h1>
        </Reveal>

        <Reveal delay={240}>
          <p className="mt-7 max-w-2xl text-lg sm:text-xl text-white/90 font-light leading-relaxed">
            A multicultural summer festival celebrating culture, family, food, and community —
            18 years strong, under the West Coast sun.
          </p>
        </Reveal>

        <Reveal delay={360}>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#updates"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-semibold text-brand-ocean-deep shadow-glow transition hover:bg-brand-sun"
            >
              Get Festival Updates
              <ArrowRight size={16} className="transition group-hover:translate-x-1" />
            </a>
            <Link
              to="/become-a-sponsor"
              className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/10 backdrop-blur px-7 py-4 text-sm font-semibold text-white transition hover:bg-white/20"
            >
              Become a Sponsor
            </Link>
          </div>
        </Reveal>

        <div className="mt-auto pt-16 flex flex-wrap items-center gap-x-8 gap-y-3 text-[11px] uppercase tracking-[0.22em] text-white/75">
          <span className="flex items-center gap-2"><Calendar size={13} className="text-brand-sun" /> 11 AM – 7 PM</span>
          <span className="flex items-center gap-2"><MapPin size={13} className="text-brand-sun" /> Burnaby, BC</span>
          <span className="font-zh tracking-normal text-white/60">中華傳統文化節暨第18屆溫哥華潑水節</span>
        </div>
      </div>
    </section>
  );
}

/* -------------------- 2. 18 Years editorial -------------------- */
function Story() {
  return (
    <section className="bg-white py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 grid gap-14 lg:grid-cols-12 items-center">
        <Reveal className="lg:col-span-7">
          <div className="relative overflow-hidden rounded-3xl">
            <img
              src={crowdImg}
              alt="Festival crowd at Swangard Stadium"
              className="w-full aspect-[5/4] object-cover"
            />
            <div className="absolute bottom-5 left-5 rounded-full bg-white/95 px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-brand-ocean-deep">
              Since 2008 · Greater Vancouver
            </div>
          </div>
        </Reveal>

        <Reveal delay={120} className="lg:col-span-5">
          <div className="text-[11px] uppercase tracking-[0.24em] text-brand-coral">Eighteen years of memories</div>
          <h2 className="mt-4 font-display text-4xl lg:text-5xl font-semibold text-brand-ocean-deep leading-[1.05] text-balance">
            Eighteen years in the making.
          </h2>
          <p className="mt-6 text-base lg:text-lg leading-relaxed text-brand-ink/75">
            What began as a small community gathering has grown into one of Greater Vancouver's
            most-loved summer traditions — a single day where neighbours become friends, languages
            blend in laughter, and an entire stadium gets gloriously, joyfully soaked.
          </p>
          <p className="mt-4 text-base lg:text-lg leading-relaxed text-brand-ink/75">
            Every July, thousands of families return to share food, dance, music and the simple
            magic of splashing water together. That's why we keep doing this.
          </p>
          <div className="mt-8">
            <Link to="/about" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-ocean-deep group">
              Read our story
              <ArrowRight size={16} className="transition group-hover:translate-x-1 text-brand-coral" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* -------------------- 3. Festival Experiences -------------------- */
function Experiences() {
  const cards = [
    { title: "Water Splash Zone", icon: Droplets, img: splashKidsImg, copy: "Cool down in our signature full-scale splash arena." },
    { title: "Live Performances", icon: Music2, img: kidsPerfImg, copy: "Dance, song and theatre across two outdoor stages." },
    { title: "Asian Food Festival", icon: Utensils, img: fanDanceImg, copy: "20+ kitchens, street eats and family-table favourites." },
    { title: "Kids Activities", icon: Baby, img: splashPoolImg, copy: "Crafts, games and an all-day kids zone built for play." },
    { title: "Community Marketplace", icon: Store, img: paradeImg, copy: "Discover 100+ local makers, artisans and brands." },
    { title: "Beer Garden", icon: Beer, img: crowdImg, copy: "A shaded licensed lounge with BC craft on tap." },
    { title: "Cultural Parade", icon: Sparkles, img: paradeImg, copy: "A vibrant procession through the festival grounds." },
    { title: "Cultural Showcase", icon: Mic2, img: openingImg, copy: "Traditional craft, calligraphy and heritage demos." },
  ];
  return (
    <section id="experiences" className="bg-brand-sand py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <div className="text-[11px] uppercase tracking-[0.24em] text-brand-coral">Festival Experiences</div>
          <h2 className="mt-3 font-display text-4xl lg:text-6xl font-semibold text-brand-ocean-deep max-w-3xl text-balance">
            Eight ways to spend a perfect summer Sunday.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 60}>
              <div className="group relative h-full overflow-hidden rounded-3xl bg-white hover-lift">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img src={c.img} alt={c.title} className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.06]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-ocean-deep/70 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-brand-coral shadow">
                    <c.icon size={18} />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-xl font-semibold text-brand-ocean-deep">{c.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-brand-ink/65">{c.copy}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/experiences" className="inline-flex items-center gap-2 rounded-full bg-brand-ocean-deep px-6 py-3 text-sm font-semibold text-white hover:bg-brand-ocean transition">
            See all experiences <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* -------------------- 4. Gallery (masonry) -------------------- */
function Gallery() {
  const photos = [
    { src: openingImg, span: "row-span-2" },
    { src: splashKidsImg, span: "" },
    { src: fanDanceImg, span: "" },
    { src: paradeImg, span: "row-span-2" },
    { src: kidsPerfImg, span: "" },
    { src: splashPoolImg, span: "" },
    { src: crowdImg, span: "" },
    { src: stadiumImg, span: "row-span-2 col-span-2" },
  ];
  return (
    <section id="gallery" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <div className="text-[11px] uppercase tracking-[0.24em] text-brand-coral">Photo Gallery</div>
              <h2 className="mt-3 font-display text-4xl lg:text-6xl font-semibold text-brand-ocean-deep max-w-3xl text-balance">
                See why thousands return every summer.
              </h2>
            </div>
            <Link to="/gallery" className="text-sm font-semibold text-brand-ocean-deep group inline-flex items-center gap-2">
              View full gallery
              <ArrowRight size={16} className="text-brand-coral transition group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 auto-rows-[160px] sm:auto-rows-[200px] gap-3">
          {photos.map((p, i) => (
            <Reveal key={i} delay={i * 40} className={p.span}>
              <div className="group relative h-full w-full overflow-hidden rounded-2xl">
                <img
                  src={p.src}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-105"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- 5. By the Numbers -------------------- */
function ByTheNumbers() {
  const stats = [
    { v: 18, suffix: "", label: "Years" },
    { v: 10000, suffix: "+", label: "Visitors" },
    { v: 100, suffix: "+", label: "Vendors" },
    { v: 30, suffix: "+", label: "Performances" },
    { v: 20, suffix: "+", label: "Food Vendors" },
    { v: 1, suffix: "", label: "Amazing Summer Festival" },
  ];
  return (
    <section className="relative isolate overflow-hidden py-28 text-white">
      <div className="absolute inset-0 -z-10 gradient-sky" />
      <div className="absolute inset-0 -z-10 opacity-30 mix-blend-overlay">
        <img src={splashPoolImg} alt="" className="h-full w-full object-cover" />
      </div>
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <div className="text-[11px] uppercase tracking-[0.24em] text-white/85">Event by the Numbers</div>
          <h2 className="mt-3 font-display text-4xl lg:text-6xl font-semibold text-white max-w-3xl text-balance">
            One summer Sunday. One unforgettable scale.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-px bg-white/20 rounded-3xl overflow-hidden sm:grid-cols-2 lg:grid-cols-3 border border-white/20">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 70}>
              <div className="bg-brand-ocean/40 backdrop-blur-sm p-10">
                <div className="font-display text-5xl lg:text-7xl font-semibold text-white">
                  <Counter to={s.v} suffix={s.suffix} />
                </div>
                <div className="mt-3 text-sm uppercase tracking-[0.18em] text-white/85">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- 6. Venue Experience -------------------- */
function Venue() {
  const zones = [
    { name: "Main Stage", color: "bg-brand-coral" },
    { name: "Splash Zone", color: "bg-brand-sky" },
    { name: "Food Vendors", color: "bg-brand-sun" },
    { name: "Beer Garden", color: "bg-amber-600" },
    { name: "Kids Area", color: "bg-fuchsia-500" },
    { name: "Sponsor Zone", color: "bg-brand-ocean" },
    { name: "Marketplace", color: "bg-brand-teal-bright" },
  ];
  return (
    <section id="venue" className="bg-brand-sand py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <div className="text-[11px] uppercase tracking-[0.24em] text-brand-coral">Venue Experience</div>
          <h2 className="mt-3 font-display text-4xl lg:text-6xl font-semibold text-brand-ocean-deep max-w-3xl text-balance">
            Swangard Stadium · seven zones, one festival.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-5 items-start">
          <Reveal className="lg:col-span-3">
            <div className="relative overflow-hidden rounded-3xl shadow-elegant">
              <img src={venueMap} alt="Swangard Stadium aerial map" className="w-full" />
              <div className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand-ocean-deep">
                Live Map · Burnaby
              </div>
            </div>
          </Reveal>
          <Reveal delay={150} className="lg:col-span-2">
            <div className="rounded-3xl bg-white p-8 shadow-elegant">
              <div className="text-[11px] uppercase tracking-[0.22em] text-brand-coral">Festival Zones</div>
              <ul className="mt-5 space-y-3">
                {zones.map((z) => (
                  <li key={z.name} className="flex items-center gap-3 text-sm text-brand-ocean-deep">
                    <span className={`h-3 w-3 rounded-full ${z.color}`} />
                    <span className="font-medium">{z.name}</span>
                  </li>
                ))}
              </ul>
              <div className="ink-divider my-6" />
              <div className="text-sm text-brand-ink/70">
                <div className="font-semibold text-brand-ocean-deep">{FESTIVAL.venue}</div>
                <div>{FESTIVAL.address}</div>
                <div className="mt-2">{FESTIVAL.date} · {FESTIVAL.time}</div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* -------------------- 7. Community Partners -------------------- */
function Partners() {
  const logos = [
    { src: logoCcsa, name: "CCSA" },
    { src: logoCcrac, name: "CCRAC" },
    { src: logoBurnaby, name: "City of Burnaby" },
    { src: logoHospital, name: "Burnaby Hospital Foundation" },
    { src: logoCcsa, name: "Partner" },
    { src: logoCcrac, name: "Partner" },
  ];
  return (
    <section className="bg-white py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 text-center">
        <Reveal>
          <div className="text-[11px] uppercase tracking-[0.24em] text-brand-coral">Community Partners</div>
          <h2 className="mt-3 font-display text-3xl lg:text-5xl font-semibold text-brand-ocean-deep max-w-3xl mx-auto text-balance">
            Made possible by Vancouver's most generous neighbours.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 items-center gap-8">
          {logos.map((l, i) => (
            <Reveal key={l.name + i} delay={i * 50}>
              <div className="flex items-center justify-center h-20 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition">
                <img src={l.src} alt={l.name} className="max-h-14 max-w-full object-contain" />
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12">
          <Link to="/sponsors" className="text-sm font-semibold text-brand-ocean-deep inline-flex items-center gap-2 group">
            See all partners
            <ArrowRight size={16} className="text-brand-coral transition group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* -------------------- 8. Final CTA -------------------- */
function FinalCTA() {
  return (
    <section id="updates" className="relative isolate overflow-hidden py-32 text-white">
      <img src={paradeImg} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-coral/85 via-brand-coral/60 to-brand-ocean/85" />
      <div className="mx-auto max-w-5xl px-5 lg:px-8 text-center">
        <Reveal>
          <h2 className="font-display text-5xl sm:text-6xl lg:text-8xl font-semibold leading-[1.02] text-balance drop-shadow-[0_4px_30px_rgba(0,0,0,0.25)]">
            Build Culture.<br />Create Community.<br />Make Memories.
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="mt-8 text-lg text-white/90 max-w-2xl mx-auto">
            Join us at Swangard Stadium on July 26, 2026 — and be part of Vancouver's biggest
            multicultural summer celebration.
          </p>
        </Reveal>
        <Reveal delay={220}>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            <Link
              to="/become-a-sponsor"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-semibold text-brand-ocean-deep shadow-glow transition hover:bg-brand-sun"
            >
              Become a Sponsor <ArrowRight size={16} />
            </Link>
            <Link
              to="/become-a-vendor"
              className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/10 px-7 py-4 text-sm font-semibold text-white backdrop-blur hover:bg-white/20"
            >
              Vendor Application
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
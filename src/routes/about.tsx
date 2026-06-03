import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { FESTIVAL } from "@/lib/festival";
import { ArrowRight } from "lucide-react";
import openingImg from "@/assets/stadium-opening.png";
import fanDanceImg from "@/assets/fan-dance.png";
import paradeImg from "@/assets/parade-ccrac.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About the Festival · CCSA 2026" },
      { name: "description", content: "Eighteen years of multicultural celebration in Greater Vancouver — organized by the Canadian Community Service Association (CCSA)." },
      { property: "og:title", content: "About the Festival · CCSA 2026" },
      { property: "og:description", content: "Eighteen years of multicultural celebration in Greater Vancouver." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About The Festival"
        title="A signature multicultural festival, 18 years in the making."
        description="A city-level celebration of Chinese cultural heritage and the joyful summer ritual of the Water Splashing Festival — open to all of Vancouver."
        image={openingImg}
      />
      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-5xl px-5 lg:px-8 grid gap-14 lg:grid-cols-5 items-start">
          <Reveal className="lg:col-span-3">
            <div className="text-[11px] uppercase tracking-[0.22em] text-brand-red">Our Story</div>
            <h2 className="mt-3 font-display text-3xl lg:text-4xl font-medium text-brand-teal-deep">From a community gathering to a Vancouver tradition.</h2>
            <div className="mt-6 space-y-5 text-[15px] leading-relaxed text-muted-foreground">
              <p>The Canadian Community Service Association (CCSA) was founded in 2002. For more than two decades, CCSA has served the Chinese community in Canada — strengthening cooperation across diverse ethnic groups, supporting social integration, and advancing multicultural harmony.</p>
              <p>Now in its 18th edition, the Chinese Cultural Heritage & Vancouver Water Splashing Festival has grown into a recognized city-level multicultural festival. Stage performances, interactive water programming, family activities, food markets and charity initiatives draw between 5,000 and 10,000 attendees each year.</p>
              <p>The festival is more than a summer event. It is a platform for cultural exchange, community connection, and inclusive engagement — and a strategic opportunity for partners to demonstrate community leadership and corporate social responsibility.</p>
            </div>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-2">
            <div className="rounded-2xl border border-brand-teal/10 bg-brand-cream p-8">
              <div className="text-[11px] uppercase tracking-[0.22em] text-brand-red">At A Glance</div>
              <dl className="mt-5 space-y-4 text-sm">
                <Row label="Edition">18th Annual</Row>
                <Row label="Date">{FESTIVAL.date}</Row>
                <Row label="Time">{FESTIVAL.time}</Row>
                <Row label="Venue">{FESTIVAL.venue}</Row>
                <Row label="City">{FESTIVAL.city}</Row>
                <Row label="Audience">5,000 – 10,000</Row>
                <Row label="Average dwell">4 – 6 hours</Row>
                <Row label="Organizer">CCSA</Row>
              </dl>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-brand-cream py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <div className="text-[11px] uppercase tracking-[0.24em] text-brand-coral">Leadership</div>
            <h2 className="mt-3 font-display text-3xl lg:text-5xl font-semibold text-brand-ocean-deep max-w-3xl text-balance">
              The voices behind the festival.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { name: "Hua Niu", role: "President, CCSA", quote: "We invite you to support and participate in this 2026 celebration of culture and community." },
              { name: "Peter Fu", role: "Committee President · CEO, Frobisher Group", quote: "More than a festive occasion — a platform for cultural exchange and inclusive engagement." },
              { name: "Emily Lin", role: "Director of Event Planning, CCSA", quote: "A meaningful platform where culture, community and multicultural experiences come together." },
            ].map((p) => (
              <Reveal key={p.name}>
                <div className="h-full rounded-2xl bg-white p-8 border border-brand-teal/10">
                  <div className="font-display text-xl text-brand-teal-deep">{p.name}</div>
                  <div className="text-xs uppercase tracking-[0.18em] text-brand-red mt-1">{p.role}</div>
                  <p className="mt-5 text-sm leading-relaxed text-muted-foreground">“{p.quote}”</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-brand-teal-deep text-white">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 grid gap-10 md:grid-cols-2 items-center">
          <Reveal><img src={fanDanceImg} alt="Fan dance performance" className="rounded-2xl object-cover w-full h-80" /></Reveal>
          <Reveal delay={120}>
            <img src={paradeImg} alt="Community parade" className="rounded-2xl object-cover w-full h-80" />
          </Reveal>
        </div>
        <div className="mt-16 text-center">
          <Link to="/become-a-sponsor" className="inline-flex items-center gap-2 rounded-full gradient-red px-7 py-4 text-sm font-semibold text-white shadow-glow">
            Partner With Us <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-brand-teal/10 pb-3 last:border-none">
      <dt className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{label}</dt>
      <dd className="text-brand-teal-deep font-medium">{children}</dd>
    </div>
  );
}

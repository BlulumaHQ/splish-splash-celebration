import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import openingImg from "@/assets/stadium-opening.png";

export const Route = createFileRoute("/schedule")({
  head: () => ({
    meta: [
      { title: "Festival Schedule · CCSA 2026" },
      { name: "description", content: "Full schedule for July 26, 2026 — gates, main stage performances, splash zone, food, and closing ceremony at Swangard Stadium." },
      { property: "og:title", content: "Festival Schedule · CCSA 2026" },
      { property: "og:description", content: "11 AM – 7 PM · Swangard Stadium, Burnaby." },
      { property: "og:url", content: "/schedule" },
    ],
    links: [{ rel: "canonical", href: "/schedule" }],
  }),
  component: SchedulePage,
});

const blocks = [
  { time: "11:00 AM", title: "Gates Open", body: "Doors open at Swangard Stadium. Welcome program at the main entrance plaza." },
  { time: "11:30 AM", title: "Opening Ceremony", body: "Official welcome by CCSA leadership, City of Burnaby, and event partners. Lion dance procession." },
  { time: "12:00 PM", title: "Main Stage · Cultural Performances", body: "Traditional dance, music, fashion showcase, and intergenerational performances." },
  { time: "12:30 PM", title: "Splash Zone Opens", body: "Family splash arena, inflatable pools, water cannons. Bring a towel." },
  { time: "1:00 PM", title: "Asian Food Festival in Full Swing", body: "20+ vendors and food trucks across the food court and midway." },
  { time: "2:00 PM", title: "Kids Activities Hour", body: "Crafts, calligraphy, dragon painting, traditional games. Free for all children." },
  { time: "3:00 PM", title: "Beer Garden Open", body: "Licensed bar with local craft beer, wine and Asian-inspired cocktails." },
  { time: "4:00 PM", title: "Community Showcase", body: "Intangible cultural heritage demonstrations, TCM health booths, vendor highlights." },
  { time: "5:30 PM", title: "Headline Performance", body: "Main stage finale with guest performers and special collaborations." },
  { time: "6:30 PM", title: "Closing & Prize Draw", body: "Sponsor recognition, raffle prizes, and closing remarks from the committee." },
  { time: "7:00 PM", title: "Festival Ends", body: "Thank you for celebrating with us — see you in 2027." },
];

function SchedulePage() {
  return (
    <>
      <PageHero
        eyebrow="Saturday, July 26, 2026"
        title="A full day of culture, splash and community — 11 AM to 7 PM."
        description="Programming runs simultaneously across the main stage, splash zone, food court, beer garden and kids area. Schedule subject to minor changes."
        image={openingImg}
      />
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <ol className="relative border-l-2 border-brand-gold/40 space-y-10 pl-8">
            {blocks.map((b, i) => (
              <Reveal key={b.time} delay={i * 50}>
                <li className="relative">
                  <span className="absolute -left-[42px] top-1 flex h-6 w-6 items-center justify-center rounded-full bg-brand-red text-[10px] font-bold text-white shadow-glow">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="text-[11px] uppercase tracking-[0.22em] text-brand-red">{b.time}</div>
                  <h3 className="mt-2 font-display text-2xl text-brand-teal-deep">{b.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{b.body}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}

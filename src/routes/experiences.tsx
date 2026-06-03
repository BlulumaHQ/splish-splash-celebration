import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import kidsPerfImg from "@/assets/kids-performance.jpg";
import splashKidsImg from "@/assets/splash-kids.png";
import splashPoolImg from "@/assets/splash-pool.png";
import fanDanceImg from "@/assets/fan-dance.png";
import paradeImg from "@/assets/parade-ccrac.png";
import openingImg from "@/assets/stadium-opening.png";
import crowdImg from "@/assets/stadium-crowd.png";

export const Route = createFileRoute("/experiences")({
  head: () => ({
    meta: [
      { title: "Festival Experiences · CCSA 2026" },
      { name: "description", content: "Performances, splash zones, food, beer garden, kids programming and more — across one Vancouver summer day." },
      { property: "og:title", content: "Festival Experiences · CCSA 2026" },
      { property: "og:description", content: "Eight experiences across Swangard Stadium." },
      { property: "og:url", content: "/experiences" },
    ],
    links: [{ rel: "canonical", href: "/experiences" }],
  }),
  component: ExperiencesPage,
});

const items = [
  { title: "Cultural Performances", body: "30+ stage performances spanning traditional dance, music, fashion and contemporary diaspora artists.", img: kidsPerfImg },
  { title: "Water Splash Carnival", body: "Our signature, family-scale splash arena — slides, inflatable pools, water cannons and ceremonial splashing.", img: splashKidsImg },
  { title: "Asian Food Festival", body: "20+ food vendors and trucks serving regional Chinese, pan-Asian and Vancouver-local kitchens.", img: fanDanceImg },
  { title: "Kids Activities", body: "Crafts, calligraphy, dragon-painting, traditional games and dedicated splash play zones.", img: splashPoolImg },
  { title: "Beer Garden", body: "Licensed bar with local craft beer, wine and Asian-inspired cocktails, soundtracked by live DJs.", img: crowdImg },
  { title: "Vendor Marketplace", body: "100+ booths featuring artisans, makers, brands, community organizations and lifestyle partners.", img: paradeImg },
  { title: "Community Showcase", body: "12 sponsored booths dedicated to intangible cultural heritage, crafts and TCM public health.", img: openingImg },
  { title: "Live Entertainment", body: "Main stage emceeing, prize draws, special guest appearances and a closing ceremony.", img: kidsPerfImg },
];

function ExperiencesPage() {
  return (
    <>
      <PageHero
        eyebrow="Festival Experiences"
        title="Eight worlds. One stadium. One unforgettable day."
        description="From the cultural main stage to the splash carnival and beer garden — every corner of Swangard is programmed to keep families dwelling 4–6 hours."
        image={splashKidsImg}
      />
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 space-y-24">
          {items.map((item, i) => (
            <Reveal key={item.title}>
              <div className={`grid items-center gap-10 md:grid-cols-2 ${i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""}`}>
                <div className="relative overflow-hidden rounded-2xl shadow-elegant aspect-[4/3]">
                  <img src={item.img} alt={item.title} className="absolute inset-0 h-full w-full object-cover" />
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-[0.22em] text-brand-red">Experience {String(i + 1).padStart(2, "0")}</div>
                  <h2 className="mt-3 font-display text-3xl lg:text-4xl text-brand-teal-deep">{item.title}</h2>
                  <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">{item.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}

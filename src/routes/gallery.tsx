import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";

import openingImg from "@/assets/stadium-opening.png";
import crowdImg from "@/assets/stadium-crowd.png";
import kidsPerfImg from "@/assets/kids-performance.jpg";
import splashKidsImg from "@/assets/splash-kids.png";
import splashPoolImg from "@/assets/splash-pool.png";
import fanDanceImg from "@/assets/fan-dance.png";
import paradeImg from "@/assets/parade-ccrac.png";
import stadiumImg from "@/assets/swangard-stadium.png";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery · CCSA Festival 2026" },
      { name: "description", content: "Photos from past editions of the Chinese Cultural Heritage & Vancouver Water Splashing Festival." },
      { property: "og:title", content: "Gallery · CCSA Festival 2026" },
      { property: "og:description", content: "Photos from past editions." },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

const photos = [
  { src: openingImg, caption: "Opening ceremony", year: "2023" },
  { src: splashKidsImg, caption: "Splash zone play", year: "2024" },
  { src: kidsPerfImg, caption: "Youth dance ensemble", year: "2024" },
  { src: fanDanceImg, caption: "Traditional fan dance", year: "2025" },
  { src: paradeImg, caption: "Community parade", year: "2024" },
  { src: crowdImg, caption: "Stadium grandstand", year: "2023" },
  { src: splashPoolImg, caption: "Splash pool carnival", year: "2025" },
  { src: stadiumImg, caption: "Swangard Stadium aerial", year: "2025" },
];

function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Eighteen years of culture, community and splash."
        description="A look back at the moments that built this festival into a Vancouver tradition."
        image={paradeImg}
      />
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {photos.map((p, i) => (
            <Reveal key={i} delay={i * 50}>
              <figure className="group relative overflow-hidden rounded-2xl bg-brand-cream aspect-[4/5] hover-lift">
                <img src={p.src} alt={p.caption} className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-teal-deep/95 to-transparent p-5 text-white">
                  <div className="text-[10px] uppercase tracking-[0.22em] text-brand-gold-soft">{p.year}</div>
                  <div className="font-display text-lg">{p.caption}</div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}

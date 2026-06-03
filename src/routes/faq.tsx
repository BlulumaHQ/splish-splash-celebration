import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import openingImg from "@/assets/stadium-opening.png";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ · CCSA Festival 2026" },
      { name: "description", content: "Answers about tickets, parking, accessibility, sponsorship, vendors, and the water splashing experience." },
      { property: "og:title", content: "FAQ · CCSA Festival 2026" },
      { property: "og:description", content: "Frequently asked questions." },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map(f => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }),
    }],
  }),
  component: FAQPage,
});

const faqs = [
  { q: "When and where is the festival?", a: "Sunday, July 26, 2026, 11:00 AM – 7:00 PM, at Swangard Stadium in Burnaby, BC." },
  { q: "How much does admission cost?", a: "General admission is free. Some experiences inside the festival (e.g. licensed beer garden, food) are paid." },
  { q: "Is the festival family friendly?", a: "Yes — programming is designed for families. There is a dedicated kids zone, splash carnival, and cultural performances." },
  { q: "Will there be parking?", a: "On-site and surrounding lot parking is available. We recommend public transit (Patterson SkyTrain station is a short walk away)." },
  { q: "Is the venue accessible?", a: "Yes. Swangard Stadium is wheelchair accessible, with accessible washrooms and dedicated viewing areas." },
  { q: "What should I bring to the splash zone?", a: "A towel, change of clothes, and swimsuit-friendly attire. Splash areas are supervised and family-safe." },
  { q: "How do I sponsor the festival?", a: "Visit the Become A Sponsor page to request our sponsorship package. Tiers range from $1,000 Community to $30,000 Title." },
  { q: "How do I apply as a vendor?", a: "Use the Become A Vendor page. Early-bird vendor pricing closes June 26, 2026." },
  { q: "Is the event held rain or shine?", a: "Yes, the festival runs rain or shine. Stage programming may be adjusted in case of extreme weather." },
  { q: "Who organizes the festival?", a: "The festival is organized by the Canadian Community Service Association (CCSA), founded in 2002." },
];

function FAQPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Everything you need to know."
        description="Quick answers for guests, sponsors and vendors. Can't find what you need? Send us a note via the Contact page."
        image={openingImg}
      />
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <Reveal>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((f, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-brand-teal/10">
                  <AccordionTrigger className="font-display text-lg text-left text-brand-teal-deep hover:text-brand-red">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-[15px] leading-relaxed text-muted-foreground">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>
    </>
  );
}

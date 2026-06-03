import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import paradeImg from "@/assets/parade-ccrac.png";
import { FESTIVAL } from "@/lib/festival";
import { Mail, MapPin, Phone, Calendar } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact · CCSA Festival 2026" },
      { name: "description", content: "Get in touch with the CCSA Festival team for sponsorship, vendor, media or general inquiries." },
      { property: "og:title", content: "Contact · CCSA Festival 2026" },
      { property: "og:description", content: "Contact the CCSA Festival team." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Message sent. We'll respond within 2 business days.");
    (e.target as HTMLFormElement).reset();
  };
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's build culture, community and brand value — together."
        description="Sponsorship, vendor, media, partnership or general inquiries — the CCSA Festival team is happy to chat."
        image={paradeImg}
      />
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-6xl px-5 lg:px-8 grid gap-10 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <div className="rounded-2xl border border-brand-teal/10 bg-brand-cream p-8">
              <div className="text-[11px] uppercase tracking-[0.22em] text-brand-red">Festival Office</div>
              <h2 className="mt-3 font-display text-3xl text-brand-teal-deep">{FESTIVAL.contactName}</h2>
              <div className="mt-1 text-sm text-muted-foreground">{FESTIVAL.contactRole}</div>
              <ul className="mt-7 space-y-4 text-sm">
                <Item icon={Mail} label="Email">{FESTIVAL.email}</Item>
                <Item icon={Phone} label="Phone">+1 (604) 000-0000</Item>
                <Item icon={MapPin} label="Venue">{FESTIVAL.venue}, {FESTIVAL.address}</Item>
                <Item icon={Calendar} label="Festival Date">{FESTIVAL.date} · {FESTIVAL.time}</Item>
              </ul>
            </div>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-3">
            <form onSubmit={submit} className="grid gap-4 rounded-2xl border border-brand-teal/10 bg-white p-8 lg:p-10">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Name" name="name" required />
                <Field label="Email" name="email" type="email" required />
              </div>
              <Field label="Subject" name="subject" />
              <label className="block">
                <span className="text-[11px] uppercase tracking-[0.18em] text-brand-teal-deep/70">Message</span>
                <textarea rows={6} name="msg" required className="mt-1 w-full rounded-lg border border-brand-teal/15 bg-white px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-red/40" />
              </label>
              <button type="submit" className="mt-2 inline-flex items-center justify-center rounded-full gradient-red px-7 py-3.5 text-sm font-semibold text-white shadow-glow">
                Send Message
              </button>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Item({ icon: Icon, label, children }: { icon: any; label: string; children: React.ReactNode }) {
  return (
    <li className="flex gap-3">
      <Icon size={18} className="text-brand-red mt-0.5" />
      <div>
        <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{label}</div>
        <div className="text-brand-teal-deep font-medium">{children}</div>
      </div>
    </li>
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

import { Link } from "@tanstack/react-router";
import { FESTIVAL, FOOTER_NAV } from "@/lib/festival";
import { MapPin, Mail, Calendar, Globe } from "lucide-react";
import logoAsset from "@/assets/vancouver-water-festival-logo.png.asset.json";

export function Footer() {
  const explore = FOOTER_NAV.slice(0, 6);
  const involve = FOOTER_NAV.slice(6);
  return (
    <footer className="bg-brand-sand text-brand-ocean-deep">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 grid gap-12 lg:grid-cols-4">
        <div className="lg:col-span-2 max-w-md">
          <div className="inline-flex items-center rounded-2xl bg-white px-4 py-3 shadow-[0_8px_24px_-16px_rgba(15,42,63,0.2)]">
            <img
              src={logoAsset.url}
              alt="Vancouver Water Splashing Festival · Chinese Cultural Heritage 2026"
              className="h-12 w-auto"
              loading="lazy"
            />
          </div>
          <p className="mt-5 text-sm leading-relaxed text-brand-ink/70">
            A city-level multicultural celebration in Greater Vancouver. Eighteen years of
            sunshine, splashes, food, music and family memories.
          </p>
          <div className="mt-6 space-y-2 text-sm text-brand-ink/80">
            <div className="flex items-center gap-2"><Calendar size={16} className="text-brand-coral" /> {FESTIVAL.date} · {FESTIVAL.time}</div>
            <div className="flex items-center gap-2"><MapPin size={16} className="text-brand-coral" /> {FESTIVAL.venue}, {FESTIVAL.city}</div>
            <div className="flex items-center gap-2"><Mail size={16} className="text-brand-coral" /> {FESTIVAL.email}</div>
            <div className="flex items-center gap-2"><Globe size={16} className="text-brand-coral" /> canadaccsa.com</div>
          </div>
        </div>

        <div>
          <div className="text-[11px] uppercase tracking-[0.22em] text-brand-coral mb-4">Explore</div>
          <ul className="space-y-2 text-sm">
            {explore.map((n) => (
              <li key={n.to}><Link to={n.to} className="text-brand-ink/75 hover:text-brand-ocean-deep transition-colors">{n.label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-[11px] uppercase tracking-[0.22em] text-brand-coral mb-4">Get Involved</div>
          <ul className="space-y-2 text-sm">
            {involve.map((n) => (
              <li key={n.to}><Link to={n.to} className="text-brand-ink/75 hover:text-brand-ocean-deep transition-colors">{n.label}</Link></li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-brand-ocean/10">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-5 text-xs text-brand-ink/55 flex flex-col sm:flex-row gap-2 justify-between">
          <div>© 2026 Canadian Community Service Association (CCSA). All rights reserved.</div>
          <div className="font-zh">加拿大华人联合总会 · 中華傳統文化節暨第18屆溫哥華潑水節</div>
        </div>
      </div>
    </footer>
  );
}

import { Link } from "@tanstack/react-router";
import { FESTIVAL, NAV } from "@/lib/festival";
import { MapPin, Mail, Calendar, Globe } from "lucide-react";
import logoCcsa from "@/assets/logo-ccsa.png";

export function Footer() {
  return (
    <footer className="bg-brand-teal-deep text-white">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 grid gap-12 lg:grid-cols-4">
        <div className="lg:col-span-2 max-w-md">
          <div className="flex items-center gap-3">
            <img src={logoCcsa} alt="CCSA" className="h-12 w-12 rounded-full bg-white/95 p-1" />
            <div>
              <div className="text-[10px] uppercase tracking-[0.22em] text-brand-gold-soft">CCSA</div>
              <div className="font-display text-lg">Cultural Heritage Festival 2026</div>
            </div>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-white/70">
            A city-level multicultural celebration in Greater Vancouver. Eighteen years of
            cultural performance, community connection, and the signature water splashing carnival.
          </p>
          <div className="mt-6 space-y-2 text-sm text-white/80">
            <div className="flex items-center gap-2"><Calendar size={16} className="text-brand-gold" /> {FESTIVAL.date} · {FESTIVAL.time}</div>
            <div className="flex items-center gap-2"><MapPin size={16} className="text-brand-gold" /> {FESTIVAL.venue}, {FESTIVAL.city}</div>
            <div className="flex items-center gap-2"><Mail size={16} className="text-brand-gold" /> {FESTIVAL.email}</div>
            <div className="flex items-center gap-2"><Globe size={16} className="text-brand-gold" /> canadaccsa.com</div>
          </div>
        </div>

        <div>
          <div className="text-[11px] uppercase tracking-[0.22em] text-brand-gold-soft mb-4">Explore</div>
          <ul className="space-y-2 text-sm">
            {NAV.slice(0, 6).map((n) => (
              <li key={n.to}><Link to={n.to} className="text-white/80 hover:text-white transition-colors">{n.label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-[11px] uppercase tracking-[0.22em] text-brand-gold-soft mb-4">Get Involved</div>
          <ul className="space-y-2 text-sm">
            {NAV.slice(6).map((n) => (
              <li key={n.to}><Link to={n.to} className="text-white/80 hover:text-white transition-colors">{n.label}</Link></li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-5 text-xs text-white/50 flex flex-col sm:flex-row gap-2 justify-between">
          <div>© 2026 Canadian Community Service Association (CCSA). All rights reserved.</div>
          <div className="font-zh">加拿大华人联合总会 · 中華傳統文化節暨第18屆溫哥華潑水節</div>
        </div>
      </div>
    </footer>
  );
}

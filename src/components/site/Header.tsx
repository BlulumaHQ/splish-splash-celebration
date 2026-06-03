import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV } from "@/lib/festival";
import logoCcsa from "@/assets/logo-ccsa.png";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[color-mix(in_oklab,var(--brand-teal-deep)_92%,transparent)] backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8">
        <Link to="/" className="flex items-center gap-3 text-white">
          <img src={logoCcsa} alt="CCSA" className="h-10 w-10 rounded-full bg-white/95 object-contain p-1" />
          <div className="leading-tight">
            <div className="text-[10px] uppercase tracking-[0.22em] text-brand-gold-soft/90">CCSA · 2026</div>
            <div className="font-display text-base font-medium">Cultural Heritage Festival</div>
          </div>
        </Link>

        <nav className="hidden xl:flex items-center gap-1">
          {NAV.slice(0, 9).map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-full px-3 py-2 text-[13px] font-medium text-white/85 transition-colors hover:text-white hover:bg-white/10"
              activeOptions={{ exact: true }}
              activeProps={{ className: "text-white bg-white/15" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden xl:flex items-center gap-2">
          <Link
            to="/become-a-vendor"
            className="rounded-full border border-white/30 px-4 py-2 text-[13px] font-semibold text-white transition hover:bg-white/10"
          >
            Vendor
          </Link>
          <Link
            to="/become-a-sponsor"
            className="rounded-full gradient-red px-4 py-2 text-[13px] font-semibold text-white transition hover:opacity-90 shadow-glow"
          >
            Sponsor
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          className="xl:hidden rounded-full border border-white/20 p-2 text-white"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="xl:hidden border-t border-white/10 bg-brand-teal-deep">
          <div className="mx-auto max-w-7xl px-5 py-4 lg:px-8 grid grid-cols-2 gap-1">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm text-white/90 hover:bg-white/10"
                activeProps={{ className: "bg-white/10 text-white" }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV } from "@/lib/festival";

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
          ? "bg-white/85 backdrop-blur-xl border-b border-black/5 shadow-[0_4px_24px_-12px_rgba(15,42,63,0.15)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Link
          to="/"
          className={`flex flex-col leading-tight transition-colors ${
            scrolled ? "text-brand-ocean-deep" : "text-white"
          }`}
        >
          <span className="font-display text-base sm:text-lg font-semibold tracking-tight">
            Vancouver Water Splashing Festival
          </span>
          <span
            className={`text-[10px] uppercase tracking-[0.24em] mt-0.5 ${
              scrolled ? "text-brand-ocean/80" : "text-white/70"
            }`}
          >
            Chinese Cultural Heritage · 2026
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`rounded-full px-4 py-2 text-[13px] font-medium transition-colors ${
                scrolled
                  ? "text-brand-ocean-deep/80 hover:text-brand-ocean-deep hover:bg-brand-sand"
                  : "text-white/90 hover:text-white hover:bg-white/15"
              }`}
              activeProps={{
                className: scrolled
                  ? "text-brand-ocean-deep bg-brand-sand"
                  : "text-white bg-white/20",
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <Link
            to="/become-a-vendor"
            className={`rounded-full border px-4 py-2 text-[13px] font-semibold transition ${
              scrolled
                ? "border-brand-ocean-deep/20 text-brand-ocean-deep hover:bg-brand-sand"
                : "border-white/60 text-white hover:bg-white/10"
            }`}
          >
            Vendor Application
          </Link>
          <Link
            to="/become-a-sponsor"
            className="rounded-full gradient-coral px-5 py-2 text-[13px] font-semibold text-white transition hover:opacity-95 shadow-glow"
          >
            Become a Sponsor
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          className={`lg:hidden rounded-full border p-2 ${
            scrolled
              ? "border-brand-ocean-deep/20 text-brand-ocean-deep"
              : "border-white/30 text-white"
          }`}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-black/5 bg-white">
          <div className="mx-auto max-w-7xl px-5 py-4 lg:px-8 grid gap-1">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-brand-ocean-deep hover:bg-brand-sand"
                activeProps={{ className: "bg-brand-sand text-brand-ocean-deep" }}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-2 grid grid-cols-2 gap-2">
              <Link
                to="/become-a-vendor"
                onClick={() => setOpen(false)}
                className="rounded-full border border-brand-ocean-deep/20 px-4 py-2.5 text-center text-sm font-semibold text-brand-ocean-deep"
              >
                Vendor
              </Link>
              <Link
                to="/become-a-sponsor"
                onClick={() => setOpen(false)}
                className="rounded-full gradient-coral px-4 py-2.5 text-center text-sm font-semibold text-white"
              >
                Sponsor
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

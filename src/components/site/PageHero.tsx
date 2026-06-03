import { Reveal } from "./Reveal";

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  image: string;
  align?: "left" | "center";
}) {
  return (
    <section className="relative isolate overflow-hidden bg-brand-ocean text-white pt-32 pb-20 lg:pt-44 lg:pb-28">
      <img
        src={image}
        alt=""
        aria-hidden
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-45"
      />
      <div className="absolute inset-0 -z-10 gradient-hero opacity-80" />
      <div className={`mx-auto max-w-7xl px-5 lg:px-8 ${align === "center" ? "text-center" : ""}`}>
        <Reveal>
          {eyebrow && (
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-[11px] uppercase tracking-[0.22em] text-white backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-sun" />
              {eyebrow}
            </div>
          )}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-semibold text-balance max-w-4xl">
            {title}
          </h1>
          {description && (
            <p className="mt-6 max-w-2xl text-base sm:text-lg text-white/85 leading-relaxed">
              {description}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}

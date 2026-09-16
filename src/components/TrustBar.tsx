"use client";

const brands = [
  "Summit Realty",
  "Nova Labs",
  "Harbor Grill",
  "Pulse Wellness",
  "Apex Fitness",
  "Hale Construction",
  "CityFest",
  "BrightPath",
];

export default function TrustBar() {
  const loop = [...brands, ...brands];

  return (
    <section className="py-12 bg-soft border-y border-navy/5 overflow-hidden">
      <p className="text-center text-xs font-bold uppercase tracking-[0.25em] text-navy/40 mb-6">
        Trusted by local businesses
      </p>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-soft to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-soft to-transparent z-10" />
        <div className="flex animate-marquee whitespace-nowrap">
          {loop.map((b, i) => (
            <span
              key={`${b}-${i}`}
              className="mx-8 text-xl font-bold text-navy/20 hover:text-orange transition-colors"
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

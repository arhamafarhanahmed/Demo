"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const items = [
  {
    quote:
      "Itech turned our outdated site into a conversion machine. Speed, HTTPS, and a look that finally matches our work.",
    name: "Marcus Hale",
    role: "Owner, Hale Construction",
  },
  {
    quote:
      "Their video team captured our launch better than we imagined. The 3D alone paid for itself in client meetings.",
    name: "Priya Santos",
    role: "Marketing Director, Nova Labs",
  },
  {
    quote:
      "From store signage to social that actually performs — one team, zero headaches.",
    name: "Derek Coleman",
    role: "VP Retail, Harbor Grill",
  },
  {
    quote:
      "Stunning site, SEO foundation, and a brand film in one coordinated push.",
    name: "Elena Vargas",
    role: "Founder, Pulse Wellness",
  },
];

export default function Testimonials() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % items.length), 5200);
    return () => clearInterval(t);
  }, []);

  const cur = items[i];

  return (
    <section className="section-pad bg-white">
      <div className="wrap max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="text-orange text-sm font-bold uppercase tracking-[0.2em] mb-3">
            Testimonials
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy">
            Brands that trusted the leap
          </h2>
        </motion.div>

        <div className="relative rounded-3xl bg-soft p-8 sm:p-12 min-h-[280px] flex flex-col justify-center shadow-card">
          <Quote className="absolute top-8 left-8 h-10 w-10 text-orange/20" />
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4 }}
              className="text-center"
            >
              <div className="flex justify-center gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="h-4 w-4 fill-orange text-orange" />
                ))}
              </div>
              <p className="text-xl sm:text-2xl font-semibold text-navy leading-relaxed">
                &ldquo;{cur.quote}&rdquo;
              </p>
              <p className="mt-6 font-bold text-navy">{cur.name}</p>
              <p className="text-sm text-navy/45 mt-1">{cur.role}</p>
            </motion.div>
          </AnimatePresence>

          <div className="absolute bottom-6 right-6 flex gap-2">
            <button
              type="button"
              aria-label="Previous"
              data-cursor="Prev"
              onClick={() => setI((v) => (v - 1 + items.length) % items.length)}
              className="h-10 w-10 rounded-full bg-white border border-navy/10 flex items-center justify-center hover:bg-orange hover:text-white hover:border-orange transition-colors"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Next"
              data-cursor="Next"
              onClick={() => setI((v) => (v + 1) % items.length)}
              className="h-10 w-10 rounded-full bg-white border border-navy/10 flex items-center justify-center hover:bg-orange hover:text-white hover:border-orange transition-colors"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

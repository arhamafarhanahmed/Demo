"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Cloud, CheckCircle2 } from "lucide-react";

export default function WhyUs() {
  return (
    <section id="about" className="relative bg-white py-20 md:py-28 overflow-hidden">
      {/* Large faint gear watermark */}
      <svg
        className="pointer-events-none absolute right-[-80px] top-1/2 -translate-y-1/2 w-[520px] h-[520px] text-[#0A0E27]/[0.04]"
        viewBox="0 0 200 200"
        fill="currentColor"
        aria-hidden
      >
        <path d="M85 10h30l6 22a60 60 0 0 1 18 10l22-8 15 26-18 14a60 60 0 0 1 0 20l18 14-15 26-22-8a60 60 0 0 1-18 10l-6 22H85l-6-22a60 60 0 0 1-18-10l-22 8-15-26 18-14a60 60 0 0 1 0-20l-18-14 15-26 22 8a60 60 0 0 1 18-10L85 10zm15 55a35 35 0 1 0 0 70 35 35 0 0 0 0-70z" />
      </svg>

      <div className="relative mx-auto max-w-[1200px] px-5 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-16 items-center">
          {/* Overlapping images */}
          <motion.div
            initial={{ opacity: 0, x: -36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative mx-auto w-full max-w-[480px] h-[460px] sm:h-[520px]"
          >
            {/* Orange dotted decorative block */}
            <div
              className="absolute left-0 top-8 h-48 w-40 sm:h-56 sm:w-48 rounded-2xl bg-orange"
              style={{
                backgroundImage:
                  "radial-gradient(circle, rgba(255,255,255,0.35) 1.5px, transparent 1.5px)",
                backgroundSize: "12px 12px",
              }}
            />

            {/* Top-left image */}
            <div className="absolute left-6 sm:left-10 top-0 w-[55%] aspect-[3/4] rounded-2xl overflow-hidden shadow-card z-10">
              <Image
                src="https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=600&q=80"
                alt="Creative director reviewing a project"
                fill
                className="object-cover"
                sizes="260px"
              />
            </div>

            {/* Bottom-right image */}
            <div className="absolute right-0 bottom-0 w-[58%] aspect-[3/4] rounded-2xl overflow-hidden shadow-card-hover z-20 border-4 border-white">
              <Image
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80"
                alt="Producer reviewing content on tablet"
                fill
                className="object-cover"
                sizes="280px"
              />
            </div>

            {/* Small floating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity }}
              className="absolute right-4 top-16 z-30 bg-white rounded-xl px-4 py-3 shadow-card"
            >
              <p className="text-2xl font-extrabold text-orange">15+</p>
              <p className="text-[11px] text-[#0A0E27]/50 font-medium">Years Experience</p>
            </motion.div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="h-[2px] w-8 bg-orange" />
              <span className="text-orange text-sm font-bold uppercase tracking-[0.18em]">
                Itech Design Company
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-[#0A0E27] leading-[1.2] tracking-tight">
              Essential Creative Solutions For Modern{" "}
              <span className="text-orange">Businesses.</span>
            </h2>

            <p className="mt-5 text-[#0A0E27]/55 leading-relaxed max-w-lg">
              From pixel-perfect websites to cinematic video and 3D animation,
              our in-house team delivers work that looks premium, loads fast, and
              converts — built for brands that refuse to look outdated.
            </p>

            <div className="mt-8 flex gap-4 items-start">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange/10 text-orange">
                <Cloud className="h-6 w-6" />
              </span>
              <div>
                <h3 className="font-bold text-[#0A0E27] text-lg">
                  Secure Modern Websites
                </h3>
                <p className="mt-1 text-sm text-[#0A0E27]/50 leading-relaxed">
                  HTTPS, speed optimization, and SEO foundations — so your site
                  feels as safe as it looks polished.
                </p>
              </div>
            </div>

            <ul className="mt-6 space-y-2.5">
              {[
                "In-house HD / 4K video & 3D production",
                "Fast turnaround without cutting craft",
                "Marketing, SEO & social under one roof",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm text-[#0A0E27]/65">
                  <CheckCircle2 className="h-4 w-4 text-orange shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              data-cursor="Explore"
              className="mt-8 inline-flex items-center justify-center rounded-md bg-orange px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-orange hover:bg-orange-soft hover:scale-[1.03] transition-all"
            >
              Explore More
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

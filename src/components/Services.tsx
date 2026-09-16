"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Monitor,
  Video,
  Megaphone,
  Smartphone,
  Plus,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Web Development",
    description:
      "Fast, secure, mobile-first websites built to convert — with modern performance and SEO from day one.",
  },
  {
    icon: Video,
    title: "Video Production",
    description:
      "HD/SD brand films, marketing videos, and event coverage from concept through final delivery.",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description:
      "SEO, social media, and campaigns that grow visibility and turn attention into real leads.",
  },
  {
    icon: Smartphone,
    title: "3D & Signage",
    description:
      "3D animation, PreVis, and digital signage that make your brand pop on every screen.",
  },
];

export default function Services() {
  const [active, setActive] = useState(2);

  return (
    <section id="services" className="relative bg-[#F4F6FA] py-20 md:py-28 overflow-hidden">
      {/* Decorative curved orange line left */}
      <svg
        className="pointer-events-none absolute left-0 top-20 w-24 h-64 text-orange/40 hidden md:block"
        viewBox="0 0 60 200"
        fill="none"
        aria-hidden
      >
        <path
          d="M50 0 C10 40, 10 80, 40 110 C70 140, 20 170, 5 200"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>

      <div className="relative mx-auto max-w-[1200px] px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-[#0A0E27] tracking-tight leading-tight">
            How Professional Creative Services Can Drive{" "}
            <span className="text-orange">Success.</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => {
            const Icon = s.icon;
            const isActive = active === i;
            return (
              <motion.article
                key={s.title}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                onMouseEnter={() => setActive(i)}
                data-cursor="Open"
                className={`relative rounded-2xl p-8 min-h-[320px] flex flex-col transition-all duration-300 cursor-pointer shadow-[0_10px_35px_rgba(10,14,39,0.06)] ${
                  isActive
                    ? "bg-orange text-white scale-[1.02] shadow-orange"
                    : "bg-white text-[#0A0E27] hover:-translate-y-1"
                }`}
              >
                <div
                  className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl ${
                    isActive ? "bg-white/20 text-white" : "bg-orange/10 text-orange"
                  }`}
                >
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                <p
                  className={`text-sm leading-relaxed flex-1 ${
                    isActive ? "text-white/85" : "text-[#0A0E27]/50"
                  }`}
                >
                  {s.description}
                </p>

                {isActive ? (
                  <a
                    href="#contact"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide"
                  >
                    Read More
                    <ArrowRight className="h-4 w-4" />
                  </a>
                ) : (
                  <span className="mt-6 inline-flex h-9 w-9 items-center justify-center rounded-full bg-orange/10 text-orange">
                    <Plus className="h-4 w-4" />
                  </span>
                )}
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

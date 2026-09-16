"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

const projects = [
  { title: "Summit Realty Film", cat: "Video", video: true },
  { title: "Apex Fitness Platform", cat: "Web", video: false },
  { title: "Nova 3D Launch", cat: "3D Animation", video: true },
  { title: "Harbor Grill Signage", cat: "Digital Signage", video: false },
  { title: "CityFest Event Recap", cat: "Events", video: true },
  { title: "Pulse SEO Campaign", cat: "SEO & Social", video: false },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="section-pad bg-navy text-white relative overflow-hidden">
      <div className="pointer-events-none absolute -left-20 top-20 h-72 w-72 rotate-45 border-[28px] border-orange/15" />
      <div className="wrap relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12"
        >
          <div>
            <p className="text-orange text-sm font-bold uppercase tracking-[0.2em] mb-3">
              Selected Work
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Work that <span className="text-orange">moves</span> the needle
            </h2>
          </div>
          <p className="text-white/50 max-w-xs sm:text-right text-sm">
            Brand films, digital builds, and motion crafted for ambitious clients.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              whileHover={{ y: -8, scale: 1.02 }}
              data-cursor={p.video ? "Play" : "View"}
              className="group relative rounded-2xl overflow-hidden min-h-[260px] cursor-pointer"
            >
              <div
                className="absolute inset-0"
                style={{
                  background:
                    i % 2 === 0
                      ? "linear-gradient(145deg, #1A2438 0%, #0B1220 50%, #FF5C00 160%)"
                      : "linear-gradient(200deg, #121A2B 0%, #0B1220 55%, #FF7A33 170%)",
                }}
              />
              <div className="absolute inset-0 bg-navy/20 group-hover:bg-navy/40 transition-colors" />
              <div className="absolute top-4 right-4 text-xs font-bold uppercase tracking-wider text-orange bg-white/10 backdrop-blur px-3 py-1 rounded-full">
                {p.cat}
              </div>
              {p.video && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="h-14 w-14 rounded-full bg-orange flex items-center justify-center shadow-orange opacity-90 group-hover:scale-110 transition-transform">
                    <Play className="h-5 w-5 fill-white text-white ml-0.5" />
                  </span>
                </div>
              )}
              <div className="absolute bottom-0 inset-x-0 p-5">
                <h3 className="text-xl font-bold">{p.title}</h3>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

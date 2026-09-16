"use client";

import { motion } from "framer-motion";

const steps = [
  { n: "01", title: "Discover", description: "Brand, audience, and goals distilled into a sharp brief." },
  { n: "02", title: "Design", description: "Wireframes, storyboards, and systems before production." },
  { n: "03", title: "Produce", description: "In-house build, shoot, and animate with precision." },
  { n: "04", title: "Launch", description: "Secure deploy and polished delivery that feels effortless." },
  { n: "05", title: "Grow", description: "SEO, content, and campaigns so momentum never stops." },
];

export default function Process() {
  return (
    <section id="process" className="section-pad bg-soft">
      <div className="wrap">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <p className="text-orange text-sm font-bold uppercase tracking-[0.2em] mb-3">
            How We Work
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy tracking-tight">
            A clear path from idea to{" "}
            <span className="text-orange">impact</span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-0.5 bg-navy/10" />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative text-center lg:text-left"
              >
                <div className="relative z-10 mx-auto lg:mx-0 mb-5 flex h-20 w-20 items-center justify-center rounded-2xl bg-white shadow-card border border-navy/5">
                  <span className="text-2xl font-extrabold text-orange">{s.n}</span>
                </div>
                <h3 className="text-xl font-bold text-navy mb-2">{s.title}</h3>
                <p className="text-sm text-navy/55 leading-relaxed">{s.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

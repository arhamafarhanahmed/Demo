"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="section-pad bg-white">
      <div className="wrap">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl bg-navy px-8 py-16 sm:px-16 sm:py-20 text-center"
        >
          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rotate-45 border-[28px] border-orange/30" />
          <div className="pointer-events-none absolute -left-10 -bottom-10 h-48 w-48 rotate-45 bg-orange/80" />

          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight max-w-2xl mx-auto">
              Ready to See Your Brand{" "}
              <span className="text-orange">Come Alive?</span>
            </h2>
            <p className="mt-5 text-white/60 text-lg max-w-lg mx-auto">
              Book a free demo and see what modern web, video, and motion can do
              for your business.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a href="#contact" className="btn-orange" data-cursor="Book">
                Book Free Demo
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="tel:8062824671" className="btn-outline-white" data-cursor="Call">
                806.282.4671
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

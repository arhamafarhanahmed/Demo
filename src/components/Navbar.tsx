"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

const links = [
  { label: "Home", href: "#hero" },
  { label: "Company", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#hero");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-[#0A0E27]/95 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-[1200px] flex items-center justify-between h-[80px] px-5 lg:px-8">
          <a href="#hero" className="flex items-center gap-2.5 shrink-0" data-cursor="Home">
            <span className="relative flex h-10 w-10 items-center justify-center">
              <span className="absolute inset-0 rounded-full bg-orange/20" />
              <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-orange text-white font-extrabold text-lg">
                I
              </span>
            </span>
            <span className="text-white font-bold text-[22px] tracking-tight">
              Itech<span className="font-extrabold">Design</span>
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setActive(l.href)}
                data-cursor="Go"
                className={`px-3.5 py-2 text-[15px] font-medium transition-colors ${
                  active === l.href ? "text-orange" : "text-white/85 hover:text-orange"
                }`}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            data-cursor="Quote"
            className="hidden lg:inline-flex items-center gap-1.5 text-orange text-sm font-bold uppercase tracking-wide hover:gap-2.5 transition-all"
          >
            Get A Quote Now
            <ArrowRight className="h-4 w-4" />
          </a>

          <button
            type="button"
            aria-label="Menu"
            className="lg:hidden text-white p-2"
            onClick={() => setOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-[#0A0E27] lg:hidden"
          >
            <div className="flex justify-between items-center h-[80px] px-5">
              <span className="text-white font-bold text-xl">ItechDesign</span>
              <button type="button" aria-label="Close" onClick={() => setOpen(false)} className="text-white">
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="px-5 pt-6 flex flex-col gap-1">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => {
                    setOpen(false);
                    setActive(l.href);
                  }}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className="text-2xl font-semibold text-white py-3 border-b border-white/10 hover:text-orange"
                >
                  {l.label}
                </motion.a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="btn-orange mt-8 text-center">
                Get A Quote Now
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

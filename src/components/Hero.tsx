"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Play,
  Shield,
  Megaphone,
  Settings,
  Cloud,
  Cpu,
} from "lucide-react";

const featureCards = [
  {
    icon: Shield,
    title: "Data Security",
    text: "Protect your brand with secure HTTPS sites, hardened builds, and modern web standards.",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    text: "SEO, social, and campaigns that put your business in front of the right customers.",
  },
  {
    icon: Settings,
    title: "IT Consultation",
    text: "Strategy sessions that map web, video, and motion into one clear growth plan.",
  },
  {
    icon: Cloud,
    title: "Cloud Services",
    text: "Fast hosting, reliable delivery, and cloud-ready platforms built to scale with you.",
  },
  {
    icon: Cpu,
    title: "Technology",
    text: "HD video, 3D animation, and digital signage powered by modern creative tech.",
  },
];

export default function Hero() {
  const [activeCard, setActiveCard] = useState(2);

  return (
    <section id="hero" className="relative bg-[#0A0C1B] text-white">
      {/* Circuit board pattern — stronger on left like reference */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.22]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%235B7CBA' stroke-width='0.9'%3E%3Cpath d='M15 15h28v28H15zm62 0h28v28H77zM15 77h28v28H15zm62 0h28v28H77z'/%3E%3Cpath d='M43 29h34M29 43v34M91 43v34M43 91h34M0 60h15M105 60h15M60 0v15M60 105v15'/%3E%3Ccircle cx='43' cy='29' r='2.5' fill='%235B7CBA'/%3E%3Ccircle cx='77' cy='29' r='2.5' fill='%235B7CBA'/%3E%3Ccircle cx='29' cy='43' r='2.5' fill='%235B7CBA'/%3E%3Ccircle cx='29' cy='77' r='2.5' fill='%235B7CBA'/%3E%3Ccircle cx='91' cy='43' r='2.5' fill='%235B7CBA'/%3E%3Ccircle cx='91' cy='77' r='2.5' fill='%235B7CBA'/%3E%3Ccircle cx='43' cy='91' r='2.5' fill='%235B7CBA'/%3E%3Ccircle cx='77' cy='91' r='2.5' fill='%235B7CBA'/%3E%3Ccircle cx='60' cy='60' r='3' fill='%23FF5C00' fill-opacity='0.5'/%3E%3C/g%3E%3C/svg%3E")`,
          maskImage:
            "linear-gradient(90deg, black 0%, black 45%, transparent 75%)",
          WebkitMaskImage:
            "linear-gradient(90deg, black 0%, black 45%, transparent 75%)",
        }}
      />

      <div className="relative mx-auto max-w-[1200px] px-5 lg:px-8 pt-[120px] lg:pt-[140px] pb-[180px] lg:pb-[200px]">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-8 lg:gap-6 items-center">
          {/* Left */}
          <div className="relative z-10 max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="h-[3px] w-9 bg-[#FF5C00] rounded-full" />
              <span className="text-[#FF5C00] text-[13px] font-bold uppercase tracking-[0.2em]">
                Itech Design IT Services
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08, duration: 0.65 }}
              className="text-[2.6rem] sm:text-[3.25rem] lg:text-[3.6rem] font-extrabold leading-[1.12] tracking-tight text-white"
            >
              The Beauty Behind
              <br />
              IT Services.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-[15px] sm:text-base text-white/50 max-w-[420px] leading-[1.75]"
            >
              Where your brand, audience, and screens meet — custom websites,
              video, 3D, and marketing built for real business value.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.32 }}
              className="mt-9 flex flex-wrap items-center gap-6"
            >
              <a
                href="#services"
                data-cursor="Explore"
                className="inline-flex items-center justify-center rounded-md bg-[#FF5C00] px-9 py-[15px] text-[13px] font-bold uppercase tracking-wider text-white shadow-[0_12px_28px_rgba(255,92,0,0.4)] hover:bg-[#ff7033] hover:scale-[1.03] active:scale-[0.98] transition-all"
              >
                Explore Now
              </a>

              <a
                href="#portfolio"
                data-cursor="Watch"
                className="inline-flex items-center gap-3.5 text-[14px] font-semibold text-white hover:text-[#FF5C00] transition-colors group"
              >
                <span className="relative flex h-[52px] w-[52px] items-center justify-center">
                  <span className="absolute inset-0 rounded-full border-[3px] border-[#FF5C00]/35 group-hover:border-[#FF5C00]/60 transition-colors" />
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#FF5C00] text-white shadow-[0_8px_20px_rgba(255,92,0,0.45)] group-hover:scale-105 transition-transform">
                    <Play className="h-4 w-4 fill-white ml-0.5" />
                  </span>
                </span>
                Watch Video
              </a>
            </motion.div>
          </div>

          {/* Right — person + gear silhouette */}
          <motion.div
            initial={{ opacity: 0, x: 36 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative hidden lg:flex justify-end items-end min-h-[480px]"
          >
            {/* Scalloped / gear shape behind */}
            <svg
              className="absolute right-[-20px] top-[5%] w-[460px] h-[460px] text-white/[0.07]"
              viewBox="0 0 200 200"
              fill="currentColor"
              aria-hidden
            >
              <path d="M100 8c6 0 10 2 14 8l8-3 10 18-6 7c4 5 6 10 7 16l10 2v20l-10 2c-1 6-3 11-7 16l6 7-10 18-8-3c-4 6-8 8-14 8s-10-2-14-8l-8 3-10-18 6-7c-4-5-6-10-7-16l-10-2V56l10-2c1-6 3-11 7-16l-6-7 10-18 8 3c4-6 8-8 14-8zm0 52a40 40 0 1 0 0 80 40 40 0 0 0 0-80z" />
            </svg>

            <div className="relative z-10 w-[400px] h-[500px]">
              <Image
                src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=900&q=85"
                alt="IT professional with glasses and tablet"
                fill
                priority
                className="object-cover object-[center_20%] rounded-none"
                sizes="400px"
                style={{
                  maskImage:
                    "linear-gradient(to top, transparent 0%, black 12%, black 100%)",
                  WebkitMaskImage:
                    "linear-gradient(to top, transparent 0%, black 12%, black 100%)",
                }}
              />
              {/* Soft side blend into navy */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#0A0C1B]/25 via-transparent to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0A0C1B] to-transparent pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Soft curve into white */}
      <div className="absolute bottom-0 left-0 right-0 h-[42%] bg-gradient-to-b from-transparent via-transparent to-white pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 leading-[0]">
        <svg
          viewBox="0 0 1440 100"
          className="w-full h-[60px] sm:h-[80px]"
          preserveAspectRatio="none"
          aria-hidden
        >
          <path
            d="M0,60 C360,120 720,10 1080,55 C1260,80 1380,40 1440,50 L1440,100 L0,100 Z"
            fill="#ffffff"
          />
        </svg>
      </div>

      {/* 5 overlapping service cards — exact reference layout */}
      <div className="relative z-20 mx-auto max-w-[1200px] px-5 lg:px-8 -mt-2 pb-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-[18px]">
          {featureCards.map((card, i) => {
            const Icon = card.icon;
            const isActive = activeCard === i;
            return (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.45 }}
                onMouseEnter={() => setActiveCard(i)}
                data-cursor="Open"
                className={`rounded-[14px] px-5 py-6 min-h-[200px] flex flex-col items-start transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-[#FF5C00] text-white shadow-[0_18px_40px_rgba(255,92,0,0.35)] -translate-y-2"
                    : "bg-white text-[#0A0C1B] shadow-[0_14px_40px_rgba(10,12,27,0.1)] hover:-translate-y-1"
                }`}
              >
                <div
                  className={`mb-4 flex h-12 w-12 items-center justify-center rounded-full transition-colors ${
                    isActive
                      ? "bg-[#0A0C1B] text-[#FF5C00]"
                      : "bg-transparent text-[#FF5C00]"
                  }`}
                >
                  <Icon className="h-6 w-6" strokeWidth={1.75} />
                </div>
                <h3 className="text-[16px] font-bold mb-2.5 leading-snug">
                  {card.title}
                </h3>
                <p
                  className={`text-[12.5px] leading-[1.65] ${
                    isActive ? "text-white/90" : "text-[#0A0C1B]/45"
                  }`}
                >
                  {card.text}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

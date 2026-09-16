"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Send,
  CheckCircle2,
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
  Mail,
} from "lucide-react";

interface FormState {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface Errors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

const socials = [
  { icon: Facebook, label: "Facebook" },
  { icon: Instagram, label: "Instagram" },
  { icon: Youtube, label: "YouTube" },
  { icon: Linkedin, label: "LinkedIn" },
];

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [done, setDone] = useState(false);
  const [sending, setSending] = useState(false);

  const validate = () => {
    const e: Errors = {};
    if (form.name.trim().length < 2) e.name = "Please enter your name";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email";
    if (form.phone && !/^[\d\s.()+-]{7,}$/.test(form.phone)) e.phone = "Enter a valid phone";
    if (form.message.trim().length < 10) e.message = "Tell us a bit more (10+ characters)";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setSending(true);
    await new Promise((r) => setTimeout(r, 800));
    setSending(false);
    setDone(true);
  };

  const field =
    "w-full rounded-xl border border-navy/10 bg-soft px-4 py-3.5 text-navy placeholder:text-navy/35 focus:outline-none focus:border-orange focus:ring-2 focus:ring-orange/20 transition-all";

  return (
    <section id="contact" className="section-pad bg-soft">
      <div className="wrap grid lg:grid-cols-2 gap-12 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-orange text-sm font-bold uppercase tracking-[0.2em] mb-3">
            Contact
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy tracking-tight">
            Let&apos;s build something{" "}
            <span className="text-orange">unforgettable</span>
          </h2>
          <p className="mt-4 text-navy/55 text-lg max-w-md">
            Website, video, 3D, signage, or a full brand push — tell us what
            you need.
          </p>

          <a
            href="tel:8062824671"
            data-cursor="Call"
            className="mt-10 inline-flex items-center gap-4 group"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange text-white shadow-orange group-hover:scale-105 transition-transform">
              <Phone className="h-6 w-6" />
            </span>
            <div>
              <p className="text-xs uppercase tracking-wider text-navy/40">Call us</p>
              <p className="text-2xl sm:text-3xl font-extrabold text-navy group-hover:text-orange transition-colors">
                806.282.4671
              </p>
            </div>
          </a>

          <div className="mt-6 flex items-center gap-2 text-navy/50">
            <Mail className="h-4 w-4 text-orange" />
            hello@itechdesign.studio
          </div>

          <div className="mt-8 flex gap-2">
            {socials.map(({ icon: Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                data-cursor={label}
                className="h-11 w-11 rounded-full bg-white border border-navy/10 flex items-center justify-center text-navy/50 hover:bg-orange hover:text-white hover:border-orange transition-colors"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          {done ? (
            <div className="bg-white rounded-3xl p-10 shadow-card text-center min-h-[400px] flex flex-col items-center justify-center">
              <CheckCircle2 className="h-14 w-14 text-orange mb-4" />
              <h3 className="text-2xl font-bold text-navy mb-2">Message sent!</h3>
              <p className="text-navy/50 max-w-sm">
                We&apos;ll be in touch shortly to schedule your free demo.
              </p>
              <button
                type="button"
                className="btn-orange mt-8"
                onClick={() => {
                  setDone(false);
                  setForm({ name: "", email: "", phone: "", message: "" });
                }}
              >
                Send another
              </button>
            </div>
          ) : (
            <form
              onSubmit={onSubmit}
              noValidate
              className="bg-white rounded-3xl p-7 sm:p-9 shadow-card space-y-5"
            >
              <div>
                <label htmlFor="name" className="text-sm font-medium text-navy/70 mb-1.5 block">
                  Name *
                </label>
                <input
                  id="name"
                  className={field}
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
                {errors.name && <p className="text-xs text-orange mt-1">{errors.name}</p>}
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="email" className="text-sm font-medium text-navy/70 mb-1.5 block">
                    Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    className={field}
                    placeholder="you@company.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                  {errors.email && <p className="text-xs text-orange mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="phone" className="text-sm font-medium text-navy/70 mb-1.5 block">
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    className={field}
                    placeholder="806.555.0100"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  />
                  {errors.phone && <p className="text-xs text-orange mt-1">{errors.phone}</p>}
                </div>
              </div>
              <div>
                <label htmlFor="message" className="text-sm font-medium text-navy/70 mb-1.5 block">
                  Message *
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className={`${field} resize-none`}
                  placeholder="Tell us about your project..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
                {errors.message && <p className="text-xs text-orange mt-1">{errors.message}</p>}
              </div>
              <button
                type="submit"
                disabled={sending}
                data-cursor="Send"
                className="btn-orange w-full disabled:opacity-60"
              >
                {sending ? "Sending..." : (
                  <>
                    Send Message <Send className="h-4 w-4" />
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}

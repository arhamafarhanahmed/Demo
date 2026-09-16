import { Facebook, Instagram, Youtube, Linkedin, Phone } from "lucide-react";

const links = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#portfolio" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { icon: Facebook, label: "Facebook" },
  { icon: Instagram, label: "Instagram" },
  { icon: Youtube, label: "YouTube" },
  { icon: Linkedin, label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="wrap px-5 sm:px-8 lg:px-14 xl:px-20 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <a href="#hero" className="flex items-center gap-2.5 mb-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange font-extrabold text-xl">
                I
              </span>
              <span className="font-bold text-lg">
                Itech <span className="text-orange">Design</span>
              </span>
            </a>
            <p className="text-sm text-white/45 leading-relaxed max-w-xs">
              Advanced Digital Studio — web, video, 3D, and signage that turn
              brands into experiences.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-white/65 hover:text-orange transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm text-white/65">
              <li>Web Design</li>
              <li>Video Production</li>
              <li>3D Animation</li>
              <li>Digital Signage</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-4">
              Call
            </h4>
            <a
              href="tel:8062824671"
              className="inline-flex items-center gap-2 font-bold text-lg hover:text-orange transition-colors"
            >
              <Phone className="h-4 w-4 text-orange" />
              806.282.4671
            </a>
            <div className="mt-5 flex gap-2">
              {socials.map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="h-9 w-9 rounded-full border border-white/15 flex items-center justify-center text-white/50 hover:bg-orange hover:border-orange hover:text-white transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-3 text-xs text-white/35">
          <p>© {new Date().getFullYear()} Itech Design. All rights reserved.</p>
          <p>Marketing · Web · Video · 3D · Signage</p>
        </div>
      </div>
    </footer>
  );
}

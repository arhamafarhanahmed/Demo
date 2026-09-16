"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);
  const [label, setLabel] = useState("");
  const [trail, setTrail] = useState<{ x: number; y: number; id: number }[]>([]);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 28, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 500, damping: 28, mass: 0.4 });
  const rx = useSpring(x, { stiffness: 120, damping: 20, mass: 0.6 });
  const ry = useSpring(y, { stiffness: 120, damping: 20, mass: 0.6 });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!fine) return;

    document.body.classList.add("has-custom-cursor");
    setVisible(true);

    let tid = 0;
    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      tid += 1;
      const id = tid;
      setTrail((prev) => [...prev.slice(-10), { x: e.clientX, y: e.clientY, id }]);
    };

    const onDown = () => setClicking(true);
    const onUp = () => setClicking(false);

    const onOver = (e: MouseEvent) => {
      const t = (e.target as HTMLElement)?.closest?.(
        "a, button, [data-cursor], input, textarea"
      ) as HTMLElement | null;
      if (t) {
        setHovering(true);
        setLabel(t.getAttribute("data-cursor") || "");
      } else {
        setHovering(false);
        setLabel("");
      }
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.addEventListener("mouseover", onOver);

    return () => {
      document.body.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseover", onOver);
    };
  }, [x, y]);

  if (!visible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] hidden md:block">
      {/* Trail dots */}
      {trail.map((p, i) => (
        <motion.span
          key={p.id}
          initial={{ opacity: 0.5, scale: 1 }}
          animate={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.55 }}
          className="absolute h-2 w-2 -ml-1 -mt-1 rounded-full bg-orange"
          style={{ left: p.x, top: p.y, opacity: (i + 1) / trail.length * 0.4 }}
        />
      ))}

      {/* Soft glow ring (lags behind) */}
      <motion.div
        style={{ left: rx, top: ry, x: "-50%", y: "-50%" }}
        animate={{
          width: hovering ? 64 : 40,
          height: hovering ? 64 : 40,
          opacity: clicking ? 0.35 : 0.2,
        }}
        className="absolute rounded-full bg-orange blur-md"
      />

      {/* Outer ring */}
      <motion.div
        style={{ left: rx, top: ry, x: "-50%", y: "-50%" }}
        animate={{
          width: hovering ? 72 : 36,
          height: hovering ? 72 : 36,
          borderColor: hovering ? "#FF5C00" : "rgba(255,92,0,0.55)",
        }}
        className="absolute rounded-full border-2 border-orange mix-blend-difference"
      />

      {/* Core dot */}
      <motion.div
        style={{ left: sx, top: sy, x: "-50%", y: "-50%" }}
        animate={{
          scale: clicking ? 0.6 : hovering ? 0.35 : 1,
          backgroundColor: hovering ? "#FF5C00" : "#0B1220",
        }}
        className="absolute h-3 w-3 rounded-full bg-navy"
      />

      {/* Hover label */}
      {label && (
        <motion.div
          style={{ left: sx, top: sy, x: "-50%", y: "24px" }}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute whitespace-nowrap rounded-full bg-orange px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white"
        >
          {label}
        </motion.div>
      )}
    </div>
  );
}

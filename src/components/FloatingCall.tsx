"use client";

import { motion, useReducedMotion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { LUXE } from "@/components/motion";

export function FloatingCall({ href, label }: { href: string; label: string }) {
  const [visible, setVisible] = useState(false);
  const { scrollY } = useScroll();
  const reduce = useReducedMotion();

  useMotionValueEvent(scrollY, "change", (v) => setVisible(v > 620));

  return (
    <motion.a
      href={href}
      aria-label={label}
      className="fixed bottom-5 right-5 z-[130] grid h-14 w-14 place-items-center rounded-full bg-crimson text-white shadow-[0_18px_40px_-14px_rgba(129,0,12,0.85)] sm:hidden"
      initial={{ opacity: 0, scale: 0.6, y: 20 }}
      animate={visible ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.6, y: 20 }}
      transition={{ duration: reduce ? 0.2 : 0.6, ease: LUXE }}
      style={{ pointerEvents: visible ? "auto" : "none" }}
    >
      <span className="pulse-ring absolute inset-0 text-crimson-300/50" aria-hidden="true" />
      <svg viewBox="0 0 24 24" className="relative h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path
          d="M4 5c0-.6.4-1 1-1h2.6c.5 0 .9.3 1 .8l.7 2.8c.1.4 0 .9-.4 1.1L7.6 10a12 12 0 0 0 6.4 6.4l1.3-1.3c.3-.3.7-.4 1.1-.3l2.8.7c.5.1.8.5.8 1V19c0 .6-.4 1-1 1A16 16 0 0 1 4 5Z"
          strokeLinejoin="round"
        />
      </svg>
    </motion.a>
  );
}

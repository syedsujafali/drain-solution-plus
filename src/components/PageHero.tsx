"use client";

import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { LUXE } from "@/components/motion";

export function PageHero({
  eyebrow,
  lines,
  intro,
  image = "/images/dsp/internal-banner.webp",
  children,
}: {
  eyebrow: string;
  lines: string[];
  intro?: ReactNode;
  image?: string;
  children?: ReactNode;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : ["-4%", "14%"]);
  const fade = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section ref={ref} className="relative isolate overflow-hidden bg-navy-950 pt-32 pb-16 sm:pt-40 sm:pb-20">
      <motion.div className="absolute inset-0 -z-20" style={{ y }}>
        <img src={image} alt="" aria-hidden="true" className="h-[118%] w-full object-cover" />
      </motion.div>
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(98deg,rgba(1,15,24,0.97)_0%,rgba(1,32,47,0.9)_44%,rgba(1,73,116,0.5)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_top,rgba(1,15,24,0.9),transparent_55%)]" />
      <div className="grain absolute inset-0 -z-10 opacity-25" aria-hidden="true" />

      <motion.div style={{ opacity: fade }} className="shell relative">
        <motion.p
          initial={{ opacity: 0, y: reduce ? 0 : 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduce ? 0.4 : 0.9, ease: LUXE }}
          className="eyebrow flex flex-wrap items-center gap-3 text-crimson-300"
        >
          <Link href="/" className="text-white/45 transition-colors hover:text-white">
            Home
          </Link>
          <span className="h-px w-8 bg-crimson-300/60" />
          {eyebrow}
        </motion.p>

        <h1 className="mt-6">
          {lines.map((line, i) => (
            <span key={line} className="block overflow-hidden">
              <motion.span
                className="block font-display text-[clamp(2.4rem,7vw,6rem)] font-extrabold leading-[0.9] tracking-[-0.045em] text-white"
                initial={{ y: reduce ? 0 : "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: reduce ? 0.5 : 1.15, delay: reduce ? 0 : 0.1 + i * 0.1, ease: LUXE }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        {intro && (
          <motion.div
            initial={{ opacity: 0, y: reduce ? 0 : 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduce ? 0.4 : 1, delay: reduce ? 0 : 0.4, ease: LUXE }}
            className="mt-7 max-w-xl text-[14.5px] leading-relaxed text-white/70"
          >
            {intro}
          </motion.div>
        )}

        {children && (
          <motion.div
            initial={{ opacity: 0, y: reduce ? 0 : 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduce ? 0.4 : 1, delay: reduce ? 0 : 0.52, ease: LUXE }}
            className="mt-9"
          >
            {children}
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}

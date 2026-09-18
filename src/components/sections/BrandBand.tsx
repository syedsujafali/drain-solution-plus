"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { heroBadges } from "@/lib/site";
import { Marquee } from "@/components/motion";

/**
 * Full-bleed brand band built on the site's own internal page banner artwork.
 */
export function BrandBand() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : ["-14%", "14%"]);

  return (
    <section ref={ref} className="relative isolate overflow-hidden bg-navy-900">
      <motion.div className="absolute inset-0 -z-20" style={{ y }}>
        <img
          src="/images/dsp/internal-banner.webp"
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="h-[132%] w-full object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(1,32,47,0.94),rgba(1,73,116,0.62))]" />
      <div className="grain absolute inset-0 -z-10 opacity-25" aria-hidden="true" />

      <div className="shell relative py-16 sm:py-20">
        <h2 className="max-w-4xl font-display text-[clamp(1.6rem,4.2vw,3.4rem)] font-extrabold leading-[0.96] tracking-[-0.04em] text-white">
          An Extended Team Of
          <br />
          <span className="text-stroke-light">Dedicated Professionals</span>
        </h2>
        <p className="mt-5 max-w-md text-[13.5px] leading-relaxed text-white/60">
          Over 30 years of combined experience. 100&rsquo;s of satisfied customers. Five stars rated company.
        </p>
      </div>

      <div className="relative border-y border-white/12 bg-navy-950/45 py-3.5 backdrop-blur-sm">
        <Marquee>
          {heroBadges.map((b) => (
            <span key={b} className="flex items-center gap-5 whitespace-nowrap px-5">
              <span className="text-[10px] font-bold tracking-[0.28em] text-white/65 uppercase">{b}</span>
              <span className="h-1 w-1 rotate-45 bg-crimson-300" />
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}

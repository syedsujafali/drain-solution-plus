"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { segments } from "@/lib/site";
import { LUXE, MaskLines, Reveal } from "@/components/motion";

const PANELS = [
  { ...segments.residential, href: "/residential", cta: "Residential Services" },
  { ...segments.commercial, href: "/commercial", cta: "Commercial Services" },
];

export function Segments() {
  const reduce = useReducedMotion();
  const [hover, setHover] = useState<number | null>(null);

  return (
    <section className="relative bg-paper py-24 sm:py-32">
      <div className="shell">
        <div className="max-w-3xl">
          <Reveal>
            <p className="eyebrow flex items-center gap-3 text-crimson">
              <span className="h-px w-8 bg-crimson/50" />
              Two property types
            </p>
          </Reveal>
          <MaskLines as="h2" className="display-md mt-6 text-navy" lines={segments.title.split(", ")} />
        </div>

        <div className="mt-14 flex flex-col gap-4 md:h-[560px] md:flex-row">
          {PANELS.map((p, i) => {
            const active = hover === i;
            const dim = hover !== null && hover !== i;
            return (
              <motion.div
                key={p.id}
                id={p.id}
                onHoverStart={() => !reduce && setHover(i)}
                onHoverEnd={() => setHover(null)}
                className="group relative flex-1 overflow-hidden rounded-[3px] bg-navy-900"
                animate={{ flexGrow: reduce || hover === null ? 1 : active ? 1.5 : 0.78 }}
                transition={{ duration: 0.9, ease: LUXE }}
              >
                <div className="absolute inset-0 aspect-auto h-full w-full md:h-[560px]">
                  <motion.img
                    src={p.image}
                    alt={`${p.label} drain and sewer services in Northern NJ`}
                    loading="lazy"
                    className="h-full w-full object-cover"
                    animate={{ scale: dim ? 1.06 : active ? 1.09 : 1.02 }}
                    transition={{ duration: reduce ? 0.4 : 1.6, ease: LUXE }}
                  />
                </div>
                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(1,15,24,0.96)_2%,rgba(1,32,47,0.6)_44%,rgba(1,73,116,0.18)_100%)]" />
                <div className="grain absolute inset-0 opacity-15" aria-hidden="true" />

                <div className="relative flex h-full min-h-[380px] flex-col justify-end p-7 sm:p-9 md:min-h-[560px]">
                  <span className="mb-auto font-display text-[11px] font-bold tracking-[0.28em] text-white/45 uppercase">
                    0{i + 1}
                  </span>
                  <h3 className="font-display text-[clamp(1.9rem,3.4vw,2.9rem)] font-extrabold tracking-[-0.04em] text-white">
                    {p.label}
                  </h3>
                  <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:grid-rows-[1fr] md:grid-rows-[1fr]">
                    <div className="overflow-hidden">
                      <p className="max-w-md pt-4 text-[13.5px] leading-relaxed text-white/70 md:max-w-sm">
                        {p.text}
                      </p>
                    </div>
                  </div>
                  <Link
                    href={p.href}
                    className="mt-6 inline-flex items-center gap-3 self-start text-[10px] font-bold tracking-[0.2em] text-white uppercase"
                  >
                    <span className="h-px w-8 bg-crimson-300 transition-all duration-500 group-hover:w-14" />
                    {p.cta}
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

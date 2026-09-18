"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { services } from "@/lib/site";
import { LUXE, Reveal } from "@/components/motion";

const SPAN = [
  "md:col-span-7",
  "md:col-span-5",
  "md:col-span-5",
  "md:col-span-7",
  "md:col-span-6",
  "md:col-span-6",
  "md:col-span-7",
  "md:col-span-5",
];

const RATIO = ["aspect-[16/11]", "aspect-[4/5]", "aspect-[4/5]", "aspect-[16/11]", "aspect-[16/10]", "aspect-[16/10]", "aspect-[16/11]", "aspect-[4/5]"];

export function ServicesGrid() {
  const reduce = useReducedMotion();

  return (
    <div className="grid gap-4 md:grid-cols-12">
      {services.map((s, i) => (
        <Reveal key={s.slug} delay={(i % 4) * 0.08} y={44} className={SPAN[i]}>
          <Link href={`/services/${s.slug}`} className="group relative block h-full overflow-hidden rounded-[3px] bg-navy-900">
            <div className={`relative overflow-hidden ${RATIO[i]}`}>
              <motion.img
                src={s.image}
                alt={s.name}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
                initial={{ scale: 1.02 }}
                whileHover={{ scale: reduce ? 1.02 : 1.11 }}
                transition={{ duration: reduce ? 0.3 : 1.4, ease: LUXE }}
              />
              <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(1,15,24,0.97)_2%,rgba(1,32,47,0.55)_44%,rgba(1,73,116,0.14)_100%)]" />
              <div className="grain absolute inset-0 opacity-15" aria-hidden="true" />

              <span className="absolute left-6 top-6 font-display text-[11px] font-bold tracking-[0.26em] text-white/45">
                {s.index}
              </span>
              <span className="absolute right-6 top-6 grid h-9 w-9 place-items-center rounded-full border border-white/25 text-white transition-all duration-500 group-hover:-rotate-45 group-hover:border-crimson-300 group-hover:bg-crimson">
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                </svg>
              </span>

              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                <p className="eyebrow text-crimson-300">{s.kicker}</p>
                <h3 className="mt-3 max-w-md font-display text-[clamp(1.3rem,2.3vw,2rem)] font-extrabold tracking-[-0.035em] text-white">
                  {s.name}
                </h3>
                <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-[750ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:grid-rows-[1fr]">
                  <div className="overflow-hidden">
                    <p className="max-w-md pt-3 text-[13px] leading-relaxed text-white/70">{s.summary}</p>
                  </div>
                </div>
                <span className="mt-5 flex items-center gap-3 text-[10px] font-bold tracking-[0.2em] text-white/55 uppercase">
                  <span className="h-px w-7 bg-crimson-300 transition-all duration-500 group-hover:w-14" />
                  View service
                </span>
              </div>
            </div>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}

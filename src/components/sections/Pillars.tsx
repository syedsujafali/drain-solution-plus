"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { pillars } from "@/lib/site";
import { LUXE, MaskLines, Reveal } from "@/components/motion";

export function Pillars() {
  const reduce = useReducedMotion();

  return (
    <section className="relative bg-paper py-24 sm:py-28">
      <div className="shell">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <Reveal>
              <p className="eyebrow flex items-center gap-3 text-crimson">
                <span className="h-px w-8 bg-crimson/50" />
                What we handle every day
              </p>
            </Reveal>
            <MaskLines as="h2" className="display-md mt-5 text-navy" lines={["Drain & Sewer,", "Done Right."]} />
          </div>
          <Reveal delay={0.12}>
            <Link href="/services" className="group inline-flex items-center gap-3 text-[11px] font-bold tracking-[0.2em] text-navy uppercase">
              <span className="h-px w-10 bg-navy/40 transition-all duration-500 group-hover:w-16 group-hover:bg-crimson" />
              All eight services
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1} y={44}>
              <motion.article
                whileHover={reduce ? undefined : { y: -8 }}
                transition={{ duration: 0.6, ease: LUXE }}
                className="group relative h-full overflow-hidden rounded-[3px] bg-navy-900"
              >
                <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[3/4] md:aspect-[4/5]">
                  <motion.img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover"
                    initial={{ scale: 1.02 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: reduce ? 0.3 : 1.3, ease: LUXE }}
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(1,15,24,0.96)_4%,rgba(1,32,47,0.55)_46%,rgba(1,73,116,0.12)_100%)]" />
                  <div className="grain absolute inset-0 opacity-15" aria-hidden="true" />

                  <span className="absolute left-6 top-6 font-display text-[11px] font-bold tracking-[0.24em] text-white/45">
                    0{i + 1}
                  </span>

                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <span className="mb-4 block h-px w-full bg-white/15">
                      <motion.span
                        className="block h-px origin-left bg-crimson-300"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: reduce ? 0.3 : 1.1, delay: 0.2 + i * 0.1, ease: LUXE }}
                      />
                    </span>
                    <h3 className="font-display text-[22px] font-extrabold tracking-[-0.03em] text-white">{p.title}</h3>
                    <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:grid-rows-[1fr]">
                      <div className="overflow-hidden">
                        <p className="pt-3 text-[13px] leading-relaxed text-white/70">{p.text}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

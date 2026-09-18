"use client";

import { motion, useReducedMotion } from "framer-motion";
import { heroBadges, whyChoose } from "@/lib/site";
import { LUXE, MaskLines, Parallax, Reveal } from "@/components/motion";

const CHECK = (
  <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="3">
    <path d="M4 12.5 9.5 18 20 6.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export function Why() {
  const reduce = useReducedMotion();

  return (
    <>
      {/* ---- Why choosing ---- */}
      <section className="relative overflow-hidden bg-cream py-24 sm:py-32">
        <div className="shell grid items-center gap-16 lg:grid-cols-12 lg:gap-12">
          {/* Overlapping editorial image composition */}
          <div className="relative lg:col-span-6">
            <Reveal y={50}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-[3px] sm:aspect-[5/5]">
                <Parallax distance={reduce ? 0 : 40} className="h-full w-full">
                  <img
                    src={whyChoose.images[0]}
                    alt="Drain Solutions Plus technician on a Northern NJ drain and sewer job"
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </Parallax>
                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(1,32,47,0.45),transparent_55%)]" />
              </div>
            </Reveal>

            <motion.div
              initial={{ opacity: 0, x: reduce ? 0 : 60, y: reduce ? 0 : 40 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: reduce ? 0.4 : 1.15, delay: 0.18, ease: LUXE }}
              className="absolute -bottom-10 -right-2 hidden w-[46%] overflow-hidden rounded-[3px] border-[6px] border-crimson shadow-[0_34px_70px_-30px_rgba(1,32,47,0.75)] sm:block lg:-right-8 lg:w-[42%]"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={whyChoose.images[1]}
                  alt="Drain and sewer cleaning equipment in use"
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-105"
                />
              </div>
            </motion.div>

            <Reveal delay={0.3} className="absolute -left-4 -top-6 hidden lg:block">
              <span className="font-display text-[7rem] font-extrabold leading-none tracking-[-0.06em] text-stroke">
                DSP
              </span>
            </Reveal>
          </div>

          {/* Copy */}
          <div className="lg:col-span-6 lg:pl-10">
            <Reveal>
              <p className="eyebrow flex items-center gap-3 text-crimson">
                <span className="h-px w-8 bg-crimson/50" />
                Trusted Professionals
              </p>
            </Reveal>

            <MaskLines as="h2" className="display-md mt-6 text-navy" lines={["Why Choosing", "Drain Solutions Plus"]} />

            <Reveal delay={0.1} className="mt-7 max-w-lg space-y-4">
              <p className="lede">{whyChoose.lead}</p>
              <p className="lede">{whyChoose.body}</p>
            </Reveal>

            <ul className="mt-10 grid gap-x-6 gap-y-4 sm:grid-cols-2">
              {heroBadges.map((b, i) => (
                <Reveal key={b} as="li" delay={0.12 + i * 0.06} y={20}>
                  <span className="group flex items-center gap-3 border-b border-navy/10 pb-3">
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-navy text-white transition-colors duration-500 group-hover:bg-crimson">
                      {CHECK}
                    </span>
                    <span className="text-[13px] font-bold tracking-[0.01em] text-ink/80">{b}</span>
                  </span>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

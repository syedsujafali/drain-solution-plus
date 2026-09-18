"use client";

import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { services } from "@/lib/site";
import { LUXE, MaskLines, Reveal } from "@/components/motion";

export function ServicesSection({ compact = false }: { compact?: boolean }) {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState<number | null>(null);
  const current = services[active];

  return (
    <section id="services" className="relative isolate overflow-hidden bg-cream py-24 sm:py-32">
      <div
        className="pointer-events-none absolute -right-40 top-10 hidden h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(1,73,116,0.09),transparent_66%)] lg:block"
        aria-hidden="true"
      />

      <div className="shell relative">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <Reveal>
              <p className="eyebrow flex items-center gap-3 text-crimson">
                <span className="h-px w-8 bg-crimson/50" />
                {compact ? "What We Do" : "Only The Best For Our Customers"}
              </p>
            </Reveal>
            <MaskLines
              as="h2"
              className="display-lg mt-6 text-navy"
              lines={["Top Notch Drain", "And Sewer Services"]}
            />
          </div>
          <Reveal delay={0.15} className="shrink-0">
            <p className="max-w-xs text-sm leading-relaxed text-steel">
              Eight focused services across Northern New Jersey — residential and commercial, same day and 24/7.
            </p>
            <Link href="/services" className="btn btn-ghost mt-6">
              All Services
            </Link>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-12 lg:gap-14">
          {/* -------- Service rows -------- */}
          <div className="lg:col-span-7">
            <ul className="border-t border-navy/12">
              {services.map((s, i) => {
                const isActive = active === i;
                const isOpen = open === i;
                return (
                  <li key={s.slug} className="border-b border-navy/12">
                    <Reveal delay={i * 0.045} y={26}>
                      <div
                        onMouseEnter={() => setActive(i)}
                        onFocus={() => setActive(i)}
                        className="group relative"
                      >
                        <span
                          aria-hidden="true"
                          className={`absolute inset-x-[-1.25rem] inset-y-0 hidden origin-left bg-navy transition-transform duration-[650ms] ease-[cubic-bezier(0.16,1,0.3,1)] lg:block xl:inset-x-[-2.5rem] ${
                            isActive ? "scale-x-100" : "scale-x-0"
                          }`}
                          style={{ zIndex: -1 }}
                        />
                        <button
                          type="button"
                          onClick={() => setOpen(isOpen ? null : i)}
                          aria-expanded={isOpen}
                          aria-controls={`svc-panel-${s.slug}`}
                          className="flex w-full items-center gap-4 py-5 text-left sm:gap-7 sm:py-6"
                        >
                          <span
                            className={`font-sans text-[10px] font-bold tracking-[0.2em] tabular-nums transition-colors duration-500 ${
                              isActive ? "text-crimson lg:text-white/50" : "text-navy/35"
                            }`}
                          >
                            {s.index}
                          </span>

                          <span className="min-w-0 flex-1">
                            <span
                              className={`block font-display text-[clamp(1.15rem,2.6vw,1.85rem)] font-extrabold tracking-[-0.035em] transition-[color,transform] duration-[650ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                                isActive ? "text-navy lg:text-white lg:translate-x-2" : "text-navy"
                              }`}
                            >
                              {s.name}
                            </span>
                            <span
                              className={`mt-1.5 block overflow-hidden text-[10px] font-bold tracking-[0.2em] uppercase transition-colors duration-500 ${
                                isActive ? "text-crimson lg:text-white/50" : "text-steel/70"
                              }`}
                            >
                              {s.kicker}
                            </span>
                          </span>

                          <span
                            className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border transition-all duration-500 ${
                              isOpen
                                ? "rotate-45 border-crimson bg-crimson text-white"
                                : isActive
                                ? "border-crimson/50 text-crimson lg:border-white/40 lg:text-white"
                                : "border-navy/20 text-navy"
                            }`}
                          >
                            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                            </svg>
                          </span>
                        </button>

                        {/* Mobile / tablet expansion */}
                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              id={`svc-panel-${s.slug}`}
                              key="panel"
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: reduce ? 0.25 : 0.6, ease: LUXE }}
                              className="overflow-hidden lg:hidden"
                            >
                              <div className="pb-7">
                                <div className="relative mb-5 aspect-[16/11] overflow-hidden rounded-[3px]">
                                  <img src={s.image} alt={s.name} loading="lazy" className="h-full w-full object-cover" />
                                </div>
                                <p className="text-[14px] leading-relaxed text-steel">{s.summary}</p>
                                <ul className="mt-4 space-y-2">
                                  {s.points.map((p) => (
                                    <li key={p} className="flex items-start gap-2.5 text-[13px] text-ink/75">
                                      <span className="mt-[7px] h-1 w-1 shrink-0 rotate-45 bg-crimson" />
                                      {p}
                                    </li>
                                  ))}
                                </ul>
                                <Link href={`/services/${s.slug}`} className="btn btn-navy mt-6 !py-3 !text-[10px]">
                                  View Service
                                </Link>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </Reveal>
                  </li>
                );
              })}
            </ul>

            <p className="mt-6 text-[11px] font-bold tracking-[0.18em] text-steel/70 uppercase lg:hidden">
              Tap a service to expand
            </p>
          </div>

          {/* -------- Sticky desktop image panel -------- */}
          <div className="hidden lg:col-span-5 lg:block">
            <div className="sticky top-[110px]">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[3px] bg-navy-900">
                <AnimatePresence mode="popLayout" initial={false}>
                  <motion.img
                    key={current.slug}
                    src={current.image}
                    alt={current.name}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover"
                    initial={{ opacity: 0, scale: reduce ? 1 : 1.14, clipPath: "inset(0 0 100% 0)" }}
                    animate={{ opacity: 1, scale: 1, clipPath: "inset(0 0 0% 0)" }}
                    exit={{ opacity: 0, scale: reduce ? 1 : 1.04 }}
                    transition={{ duration: reduce ? 0.3 : 0.95, ease: LUXE }}
                  />
                </AnimatePresence>

                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(1,15,24,0.94)_0%,rgba(1,15,24,0.25)_48%,transparent_75%)]" />
                <div className="grain absolute inset-0 opacity-20" aria-hidden="true" />

                <div className="absolute inset-x-0 bottom-0 p-7">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={current.slug}
                      initial={{ opacity: 0, y: reduce ? 0 : 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: reduce ? 0 : -10 }}
                      transition={{ duration: reduce ? 0.25 : 0.55, ease: LUXE }}
                    >
                      <p className="eyebrow text-crimson-300">
                        {current.index} — {current.kicker}
                      </p>
                      <p className="mt-3 max-w-sm text-[13.5px] leading-relaxed text-white/75">{current.summary}</p>
                      <Link
                        href={`/services/${current.slug}`}
                        className="mt-5 inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] text-white uppercase"
                      >
                        <span className="h-px w-8 bg-crimson-300" />
                        View Service
                      </Link>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-3">
                {services.map((s, i) => (
                  <button
                    key={s.slug}
                    type="button"
                    aria-label={`Preview ${s.name}`}
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    className="group relative h-[3px] flex-1 overflow-hidden bg-navy/12"
                  >
                    <motion.span
                      className="absolute inset-0 origin-left bg-crimson"
                      initial={false}
                      animate={{ scaleX: active === i ? 1 : 0 }}
                      transition={{ duration: 0.55, ease: LUXE }}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

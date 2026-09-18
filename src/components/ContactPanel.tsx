"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { business, contactPage, counties, serviceArea } from "@/lib/site";
import { EstimateForm } from "@/components/EstimateForm";
import { LUXE, MaskLines, Reveal } from "@/components/motion";

export function ContactPanel() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-cream py-20 sm:py-28">
      <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-10">
        {/* Left — contact detail */}
        <div className="lg:col-span-5">
          <Reveal>
            <p className="eyebrow flex items-center gap-3 text-crimson">
              <span className="h-px w-8 bg-crimson/50" />
              Contact for services
            </p>
          </Reveal>

          <MaskLines as="h2" className="display-md mt-6 text-navy" lines={["24/7 Drain &", "Sewer Service"]} />

          <div className="mt-9 grid gap-px overflow-hidden rounded-[3px] border border-navy/12 bg-navy/12">
            {contactPage.cards.map((c, i) => (
              <Reveal key={c.label} delay={0.08 + i * 0.06} y={22}>
                <motion.a
                  href={c.href}
                  whileHover={reduce ? undefined : { x: 4 }}
                  transition={{ duration: 0.5, ease: LUXE }}
                  className="group flex items-center gap-5 bg-cream p-5 transition-colors duration-500 hover:bg-navy"
                  {...(c.href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
                >
                  <span className="eyebrow w-16 shrink-0 text-steel transition-colors duration-500 group-hover:text-crimson-300">
                    {c.label}
                  </span>
                  <span className="min-w-0 flex-1 break-words font-display text-[15px] font-extrabold tracking-[-0.02em] text-navy transition-colors duration-500 group-hover:text-white">
                    {c.value}
                  </span>
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4 shrink-0 text-navy/40 transition-all duration-500 group-hover:translate-x-1 group-hover:text-crimson-300"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path d="M5 12h14m0 0-6-6m6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </motion.a>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3} className="mt-8">
            <p className="eyebrow text-steel">{serviceArea.countiesHeading}</p>
            <ul className="mt-4 grid grid-cols-2 gap-2">
              {counties.map((c, i) => (
                <Reveal key={c.slug} as="li" delay={0.32 + i * 0.05} y={16}>
                  <Link
                    href={`/services`}
                    className="block rounded-[2px] border border-navy/12 px-4 py-3 text-[11px] font-bold tracking-[0.12em] text-ink/75 uppercase transition-colors duration-500 hover:border-crimson hover:bg-crimson hover:text-white"
                  >
                    {c.name}
                  </Link>
                </Reveal>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.4} className="mt-10 overflow-hidden rounded-[3px] bg-paper p-6">
            <div className="flex flex-col items-center gap-6 sm:flex-row">
              <img
                src={serviceArea.map}
                alt="Northern New Jersey service area map"
                loading="lazy"
                className="h-auto w-[130px] shrink-0"
              />
              <div>
                <p className="eyebrow text-crimson">{business.availability}</p>
                <p className="mt-3 text-[13.5px] leading-relaxed text-steel">
                  {serviceArea.lines[2]}
                </p>
              </div>
            </div>
            <img
              src={serviceArea.car}
              alt="Drain Solutions Plus service van"
              loading="lazy"
              className="mx-auto mt-6 h-auto w-[260px] max-w-full"
            />
          </Reveal>
        </div>

        {/* Right — dark form panel */}
        <div className="lg:col-span-7">
          <Reveal y={44}>
            <div className="relative overflow-hidden rounded-[3px] bg-navy-950 p-6 sm:p-10">
              <img
                src="/images/dsp/footer-bg.jpg"
                alt=""
                aria-hidden="true"
                loading="lazy"
                className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.13]"
              />
              <div className="grain absolute inset-0 opacity-20" aria-hidden="true" />
              <div className="relative">
                <p className="eyebrow text-white/40">{business.promise}</p>
                <h3 className="mt-4 font-display text-[clamp(1.7rem,3.2vw,2.6rem)] font-extrabold tracking-[-0.035em] text-white">
                  {business.scheduleLabel}
                </h3>
                <p className="mt-4 max-w-md text-[13.5px] leading-relaxed text-white/55">
                  {business.tagline} Tell us what&rsquo;s happening and we&rsquo;ll get back to you — emergency calls
                  answered within the hour.
                </p>
                <div className="mt-8">
                  <EstimateForm tone="dark" />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

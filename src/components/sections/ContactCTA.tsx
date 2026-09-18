"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { business, contactPage } from "@/lib/site";
import { EstimateForm } from "@/components/EstimateForm";
import { LUXE, MaskLines, Reveal } from "@/components/motion";

export function ContactCTA({ withForm = true }: { withForm?: boolean }) {
  const reduce = useReducedMotion();

  return (
    <section id="estimate" className="relative overflow-hidden bg-paper py-24 sm:py-32">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(1,73,116,0.35),transparent)]"
        aria-hidden="true"
      />
      <div className="shell grid gap-14 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-6">
          <Reveal>
            <p className="eyebrow flex items-center gap-3 text-crimson">
              <span className="h-px w-8 bg-crimson/50" />
              {contactPage.eyebrow}
            </p>
          </Reveal>

          <MaskLines
            as="h2"
            className="display-lg mt-6 text-navy"
            lines={["Need Service?", "Give Us A Call", "Today."]}
          />

          <Reveal delay={0.12} className="mt-7 max-w-md">
            <p className="lede">{contactPage.text}</p>
          </Reveal>

          <div className="mt-10 grid gap-px overflow-hidden rounded-[3px] border border-navy/12 bg-navy/12 sm:grid-cols-2">
            {contactPage.cards.map((c, i) => (
              <Reveal key={c.label} delay={0.14 + i * 0.07} y={22}>
                <motion.a
                  href={c.href}
                  whileHover={reduce ? undefined : { y: -3 }}
                  transition={{ duration: 0.5, ease: LUXE }}
                  className="group flex h-full flex-col gap-2 bg-cream p-6 transition-colors duration-500 hover:bg-navy"
                  {...(c.href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
                >
                  <span className="eyebrow text-steel transition-colors duration-500 group-hover:text-crimson-300">
                    {c.label}
                  </span>
                  <span className="font-display text-[clamp(1rem,1.6vw,1.25rem)] font-extrabold tracking-[-0.025em] text-navy transition-colors duration-500 group-hover:text-white">
                    {c.value}
                  </span>
                  <span className="mt-1 flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] text-steel uppercase transition-colors duration-500 group-hover:text-white/60">
                    <span className="h-px w-5 bg-current transition-all duration-500 group-hover:w-9" />
                    Open
                  </span>
                </motion.a>
              </Reveal>
            ))}
          </div>


        </div>

        <div className="lg:col-span-6">
          {withForm ? (
            <Reveal delay={0.1} y={40}>
              <EstimateForm />
            </Reveal>
          ) : (
            <Reveal delay={0.1} y={40} className="rounded-[3px] border border-navy/12 bg-white p-9">
              <p className="eyebrow text-crimson">{business.estimateLabel}</p>
              <h3 className="mt-4 font-display text-[28px] font-extrabold tracking-[-0.03em] text-navy">
                {business.scheduleLabel}
              </h3>
              <div className="mt-8 flex flex-col gap-3">
                <a href={business.phoneHref} className="btn btn-crimson w-full">
                  Call Today! {business.phone}
                </a>
                <Link href="/contact" className="btn btn-navy w-full">
                  {business.scheduleLabel}
                </Link>
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}

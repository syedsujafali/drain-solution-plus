"use client";

import Link from "next/link";
import { business, counties, serviceArea } from "@/lib/site";
import { MaskLines, Reveal } from "@/components/motion";

/**
 * The 24/7 service band that closes every page on drainsolutionplus.com.
 */
export function FooterCTA() {
  return (
    <section className="relative">
      <div className="shell relative py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-6">
            <Reveal>
              <p className="eyebrow flex items-center gap-3 text-crimson-300">
                <span className="h-px w-8 bg-crimson-300/60" />
                {business.availability}
              </p>
            </Reveal>

            <MaskLines
              as="h2"
              className="mt-5 font-display text-[clamp(2rem,4.4vw,3.6rem)] font-extrabold tracking-[-0.04em] leading-[0.92] text-white"
              lines={["24/7 Drain & Sewer", "Service Northern NJ"]}
            />

            <div className="mt-7 grid gap-3 border-l border-white/15 pl-5 sm:max-w-xl">
              {serviceArea.lines.map((l, i) => (
                <Reveal key={i} delay={0.1 + i * 0.08}>
                  <p className="text-[13.5px] leading-relaxed text-white/60">{l}</p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.2} className="mt-8">
              <p className="eyebrow text-white/40">{serviceArea.countiesHeading}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {counties.map((c, i) => (
                  <Reveal key={c.slug} delay={0.24 + i * 0.06} as="li">
                    <Link
                      href="/contact"
                      className="group inline-flex items-center gap-2 rounded-[2px] border border-white/15 px-4 py-2.5 text-[11px] font-bold tracking-[0.14em] text-white/75 uppercase transition-colors duration-500 hover:border-crimson-300 hover:bg-crimson hover:text-white"
                    >
                      <span className="h-1 w-1 rounded-full bg-crimson-300 transition-colors group-hover:bg-white" />
                      {c.name}
                    </Link>
                  </Reveal>
                ))}
              </ul>
            </Reveal>

            {/* Buttons moved to the left side */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Reveal delay={0.3}>
                <a href={business.phoneHref} className="btn btn-crimson !px-7 !py-4 text-center">
                  Call Today!
                  <span className="ml-1.5 font-display text-[13px] tracking-[-0.01em] normal-case">{business.phone}</span>
                </a>
              </Reveal>
              <Reveal delay={0.36}>
                <Link href="/contact" className="btn btn-ghost-light !px-7 !py-4 text-center">
                  {business.scheduleLabel}
                </Link>
              </Reveal>
            </div>
          </div>

          {/* Map on the left, Van beside the map */}
          <div className="flex items-center justify-center lg:col-span-6 lg:justify-end">
            <div className="flex flex-row items-end justify-center gap-3 sm:gap-6 xl:gap-8 w-full max-w-lg">
              <div className="shrink-0">
                <img
                  src={serviceArea.map}
                  alt="Map of the Northern New Jersey counties serviced by Drain Solutions Plus"
                  className="h-auto w-[110px] xs:w-[130px] sm:w-[180px] xl:w-[220px] object-contain drop-shadow-[0_28px_50px_rgba(0,0,0,0.55)]"
                />
              </div>

              <div className="shrink-0">
                <img
                  src={serviceArea.car}
                  alt="Drain Solutions Plus service van"
                  className="h-auto w-[170px] xs:w-[200px] sm:w-[270px] xl:w-[340px] max-w-full object-contain drop-shadow-[0_24px_40px_rgba(0,0,0,0.5)]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

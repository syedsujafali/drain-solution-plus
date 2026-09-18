import type { Metadata } from "next";
import Link from "next/link";
import { PageTransition } from "@/components/PageTransition";
import { PageHero } from "@/components/PageHero";
import { SplitEditorial } from "@/components/sections/SplitEditorial";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { Reveal } from "@/components/motion";
import { business, counties } from "@/lib/site";

export const metadata: Metadata = {
  title: "Commercial Drain & Sewer Service North NJ",
  description:
    "Expert commercial sewer cleaning and drain services across Northern New Jersey. Guaranteed drain solutions for business owners, 24/7 emergency response.",
};

export default function CommercialPage() {
  return (
    <PageTransition>
      <PageHero
        eyebrow="Commercial"
        lines={["Commercial Drain", "& Sewer Service"]}
        intro="We are dedicated to providing expert sewer cleaning services for commercial properties across Northern New Jersey."
        image="/images/dsp/drainage-commercial.jpg"
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <a href={business.phoneHref} className="btn btn-crimson !px-7">
            Call Today! {business.phone}
          </a>
          <Link href="/contact" className="btn btn-ghost-light !px-7">
            {business.scheduleLabel}
          </Link>
        </div>
      </PageHero>

      <SplitEditorial
        id="drain"
        eyebrow="Commercial Drain Cleaning"
        titleLines={["Guaranteed Drain", "Solutions"]}
        paragraphs={[
          "Keeping the drains clean in your commercial property is vital to the successful operation of your business. Without clean drains, your business will suffer and you will notice increased problems in your commercial building.",
          "At Drain Solutions Plus, we work with business owners to provide guaranteed drain solutions.",
        ]}
        image="/images/dsp/drainage-commercial.jpg"
        alt="Commercial drain cleaning in Northern New Jersey"
        points={[
          "High volumes of usage handled",
          "Complex commercial systems",
          "Operational continuity protected",
          "Same day service",
        ]}
      />

      <SplitEditorial
        id="sewer"
        tone="paper"
        reverse
        eyebrow="Commercial Sewer & Repairs"
        titleLines={["Back Up And", "Running Fast"]}
        paragraphs={[
          "Experiencing a drain problem on your commercial property causes serious headaches for business owners. Drain problems pose serious safety and health risks, and can lead to loss of business and income if part of your building needs to be shut down during the repair.",
          "In a commercial setting, a properly functioning sewer system is vital for maintaining cleanliness, health and operational efficiency.",
        ]}
        image="/images/dsp/proj-13.jpg"
        alt="Commercial sewer repair and cleaning crew"
        points={[
          "Emergency fast response",
          "Main line video sewer inspection",
          "Drain lines & clog cleaning",
          "Water removal for flooded spaces",
        ]}
      />

      <section className="relative overflow-hidden bg-navy-950 py-20">
        <div className="grain absolute inset-0 opacity-20" aria-hidden="true" />
        <div className="shell relative grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow flex items-center gap-3 text-crimson-300">
                <span className="h-px w-8 bg-crimson-300/60" />
                On call for your business
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="display-md mt-5 text-white">
                Out within the hour, back up and running the same visit.
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <blockquote className="mt-7 border-l border-white/15 pl-6">
                <p className="text-[14px] leading-relaxed text-white/70">
                  &ldquo;We had a nasty main line clog at our surgical center in Clifton. Dennis and his crew were right
                  out within 90 minutes and had us back up and running within 45 mins.&rdquo;
                </p>
                <footer className="mt-4 text-[10px] font-bold tracking-[0.2em] text-white/45 uppercase">
                  Dr. Shah · Google Customer
                </footer>
              </blockquote>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2">
              {counties.map((c, i) => (
                <Reveal key={c.slug} delay={i * 0.08} y={26}>
                  <div className="group h-full rounded-[3px] border border-white/12 bg-white/[0.04] p-6 transition-colors duration-500 hover:border-crimson-300/50 hover:bg-crimson">
                    <span className="font-display text-[11px] font-bold tracking-[0.24em] text-crimson-300 transition-colors group-hover:text-white/70">
                      0{i + 1}
                    </span>
                    <p className="mt-3 font-display text-[17px] font-extrabold tracking-[-0.02em] text-white">
                      {c.name}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </PageTransition>
  );
}

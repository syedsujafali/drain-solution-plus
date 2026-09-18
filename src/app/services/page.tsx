import type { Metadata } from "next";
import { PageTransition } from "@/components/PageTransition";
import { PageHero } from "@/components/PageHero";
import { ServicesGrid } from "@/components/ServicesGrid";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { Reveal } from "@/components/motion";
import { business, servicesPage } from "@/lib/site";

export const metadata: Metadata = {
  title: "Drain & Sewer Services In Northern NJ",
  description:
    "Top notch drain and sewer services in Northern NJ — More Sewer, Draining, Faucet and Leak Repairs, Clog Cleaning, Drain Lines, Toilet Repairs, Main Line Video Sewer Inspection, and Residential Drain Repairs and Cleaning.",
};

export default function ServicesPage() {
  return (
    <PageTransition>
      <PageHero
        eyebrow="Services"
        lines={["Top Notch Drain", "And Sewer Services"]}
        intro={
          <>
            <span className="block text-[10px] font-bold tracking-[0.24em] text-crimson-300 uppercase">
              {servicesPage.eyebrow}
            </span>
            <span className="mt-3 block">
              Eight focused services for residential and commercial properties across Northern New Jersey.
            </span>
          </>
        }
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <a href={business.phoneHref} className="btn btn-crimson !px-7">
            Call Today! {business.phone}
          </a>
          <a href="/contact" className="btn btn-ghost-light !px-7">
            {business.scheduleLabel}
          </a>
        </div>
      </PageHero>

      <section className="relative bg-cream py-20 sm:py-28">
        <div className="shell">
          <Reveal className="mb-12 flex flex-wrap items-end justify-between gap-6 border-b border-navy/12 pb-8">
            <p className="max-w-md text-sm leading-relaxed text-steel">
              {business.tagline} <span className="font-bold text-navy">{business.promise}</span>
            </p>
            <p className="eyebrow text-steel">08 Services</p>
          </Reveal>

          <ServicesGrid />
        </div>
      </section>

      <ContactCTA />
    </PageTransition>
  );
}

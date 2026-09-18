import type { Metadata } from "next";
import Link from "next/link";
import { PageTransition } from "@/components/PageTransition";
import { PageHero } from "@/components/PageHero";
import { SplitEditorial } from "@/components/sections/SplitEditorial";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { Reveal } from "@/components/motion";
import { business, services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Residential Drain & Sewer Service North NJ",
  description:
    "Residential drain cleaning and drain repairs across Northern New Jersey. Video inspection of your main line, clog cleaning, toilet repairs, faucet and leak repairs — same day service.",
};

export default function ResidentialPage() {
  return (
    <PageTransition>
      <PageHero
        eyebrow="Residential"
        lines={["Residential Drain", "& Sewer Service"]}
        intro="Our drain cleaning services for residential properties in Northern New Jersey are designed to address a wide range of issues that homeowners may encounter."
        image="/images/dsp/proj-1.jpg"
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
        eyebrow="Residential Drain Cleaning"
        titleLines={["Clean & Spotless", "Drains At Home"]}
        paragraphs={[
          "Keeping the drains in your home clean and spotless is vital to preventing burst pipes, overflowing sinks and toilets, and foul odors from permeating your home.",
          "At Drain Solutions Plus, we help homeowners overcome their drain issues with a series of comprehensive, safe and efficient drain cleaning services.",
        ]}
        image="/images/dsp/proj-5.jpg"
        alt="Residential drain cleaning in Northern New Jersey"
        points={[
          "We unclog 99.9% of the drains we work on",
          "A variety of snake cable sizes",
          "Different machines and methods",
          "Power Snake service",
        ]}
      />

      <SplitEditorial
        id="sewer"
        tone="paper"
        reverse
        eyebrow="Residential Drain Repairs"
        titleLines={["An Expert You", "Can Trust"]}
        paragraphs={[
          "Drain and sewer problems are a headache for any homeowner. Not only do they cause issues with your home, but they also disrupt your routine.",
          "We specialize in video inspecting sewer lines with our state of the art camera technology — locating where your problem is and coming up with a variety of solutions so you won't have to experience a sewer problem again.",
        ]}
        image="/images/services/residential-drain-cleaning.jpg"
        alt="Residential drain and sewer repair work"
        points={[
          "State of the art camera technology",
          "Main line video sewer inspection",
          "Toilet repairs & blocked toilets",
          "Faucet and leak repairs",
        ]}
      />

      <section className="relative bg-cream py-20 sm:py-24">
        <div className="shell">
          <Reveal>
            <p className="eyebrow text-crimson">For your home</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="display-md mt-5 max-w-2xl text-navy">Every service we offer at home</h2>
          </Reveal>
          <ul className="mt-10 grid gap-px overflow-hidden rounded-[3px] border border-navy/12 bg-navy/12 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="group flex h-full flex-col gap-2 bg-cream p-6 transition-colors duration-500 hover:bg-navy"
                >
                  <span className="font-display text-[11px] font-bold tracking-[0.24em] text-crimson transition-colors group-hover:text-crimson-300">
                    {s.index}
                  </span>
                  <span className="font-display text-[15px] font-extrabold tracking-[-0.02em] text-navy transition-colors group-hover:text-white">
                    {s.name}
                  </span>
                  <span className="text-[11px] font-bold tracking-[0.14em] text-steel uppercase transition-colors group-hover:text-white/50">
                    {s.kicker}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ContactCTA />
    </PageTransition>
  );
}

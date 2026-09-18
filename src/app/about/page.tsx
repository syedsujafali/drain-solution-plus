import type { Metadata } from "next";
import Link from "next/link";
import { PageTransition } from "@/components/PageTransition";
import { PageHero } from "@/components/PageHero";
import { SplitEditorial } from "@/components/sections/SplitEditorial";
import { Why } from "@/components/sections/Why";
import { Reviews, Satisfaction } from "@/components/sections/Social";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { business } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us — Drain & Sewer Cleaning Services In Hawthorne, NJ",
  description:
    "The team at Drain Solutions Plus is committed to solving your toughest clogged drain problems using safe yet highly effective methods. Over 30 years of combined experience.",
};

export default function AboutPage() {
  return (
    <PageTransition>
      <PageHero
        eyebrow="About Us"
        lines={["We Specialize In", "Sewer And Drain", "Cleaning"]}
        intro="An extended team of dedicated professionals — over 30 years of combined experience and 100's of satisfied customers."
        image="/images/dsp/intro-80.jpg"
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <a href={business.phoneHref} className="btn btn-crimson !px-7">
            Call Today! {business.phone}
          </a>
          <Link href="/services" className="btn btn-ghost-light !px-7">
            Our Services
          </Link>
        </div>
      </PageHero>

      <SplitEditorial
        eyebrow="Who we are"
        titleLines={["Committed To Solving", "Your Toughest Clogs"]}
        paragraphs={[
          "The team at Drain Solutions Plus is committed to solving your toughest clogged drain problems using safe yet highly effective methods.",
          "Whether you need help with a stopped drain, a blocked toilet, or clearing out years of grime and sludge from your sewer line — we have you covered. Our team offers a range of drain cleaning options to fit your specific needs, from our Power Snake service.",
        ]}
        image="/images/dsp/intro-80.jpg"
        alt="The Drain Solutions Plus team"
        points={[
          "Residential drain cleaning",
          "Commercial drain cleaning",
          "Commercial drain repairs",
          "Sewer repair & cleaning",
        ]}
      />

      <Why />

      <SplitEditorial
        tone="paper"
        reverse
        eyebrow="Your Happiness Is Our Priority"
        titleLines={["Customer Satisfaction", "Is Our Motto"]}
        paragraphs={[
          "The experts you've trusted over years. By focusing on meeting the needs and expectations of our customers, we can build strong and profitable relationships that benefit both parties.",
          "Our dedicated technicians are committed to service our neighborhoods and communities around North Jersey around the clock.",
        ]}
        image="/images/dsp/proj-16.jpg"
        alt="Drain Solutions Plus technician completing a service call"
        points={["Video Inspection", "Upfront Pricing", "Insured & Bonded", "Trusted Professionals"]}
      />

      <Reviews />
      <Satisfaction />
      <ContactCTA />
    </PageTransition>
  );
}

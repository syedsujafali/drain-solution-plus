import type { Metadata } from "next";
import Link from "next/link";
import { PageTransition } from "@/components/PageTransition";
import { PageHero } from "@/components/PageHero";
import { Reviews } from "@/components/sections/Social";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { business } from "@/lib/site";

export const metadata: Metadata = {
  title: "Client Reviews",
  description:
    "Our clients' five-star reviews across North Jersey speak volumes about our commitment to quality, reliability and trust.",
};

export default function ReviewsPage() {
  return (
    <PageTransition>
      <PageHero
        eyebrow="Client Reviews"
        lines={["Five Stars Rated", "Company"]}
        intro="At Drain Solutions Plus, customer satisfaction is our top priority on every job — whether it's a routine drain cleaning or an emergency sewer repair."
        image="/images/dsp/proj-14.jpg"
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

      <Reviews />

      <ContactCTA />
    </PageTransition>
  );
}

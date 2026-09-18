import type { Metadata } from "next";
import Link from "next/link";
import { PageTransition } from "@/components/PageTransition";
import { PageHero } from "@/components/PageHero";
import { ProjectsMasonry } from "@/components/ProjectsMasonry";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { business, projectsPage } from "@/lib/site";

export const metadata: Metadata = {
  title: "Successful Drain & Sewer Projects North NJ",
  description:
    "A look at the drain and sewer work Drain Solutions Plus completes across Bergen, Essex, Hudson and Passaic County in Northern New Jersey.",
};

export default function ProjectsPage() {
  return (
    <PageTransition>
      <PageHero
        eyebrow={projectsPage.eyebrow}
        lines={["Successful Drain", "& Sewer Projects"]}
        intro={projectsPage.text}
        image="/images/dsp/proj-8.jpg"
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

      <section className="relative bg-cream py-20 sm:py-24">
        <div className="shell">
          <ProjectsMasonry />
        </div>
      </section>

      <ContactCTA withForm={false} />
    </PageTransition>
  );
}

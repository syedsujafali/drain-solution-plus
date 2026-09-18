import { Hero } from "@/components/Hero";
import { StatsStrip } from "@/components/sections/StatsStrip";
import { PageTransition } from "@/components/PageTransition";
import { ServicesSection } from "@/components/ServicesSection";
import { Why } from "@/components/sections/Why";
import { Inspection } from "@/components/sections/Inspection";
import { Segments } from "@/components/sections/Segments";
import { ProjectsRail } from "@/components/sections/ProjectsRail";
import { Reviews, Satisfaction } from "@/components/sections/Social";
import { ContactCTA } from "@/components/sections/ContactCTA";

export default function HomePage() {
  return (
    <PageTransition>
      <Hero />
      <StatsStrip />
      <ServicesSection />
      <Why />
      <Inspection />
      <Segments />
      <ProjectsRail />
      <Reviews />
      <Satisfaction />
      <ContactCTA />
    </PageTransition>
  );
}

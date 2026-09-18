import type { Metadata } from "next";
import { PageTransition } from "@/components/PageTransition";
import { PageHero } from "@/components/PageHero";
import { ContactPanel } from "@/components/ContactPanel";
import { ContactCTA } from "@/components/sections/ContactCTA";

export const metadata: Metadata = {
  title: "Contact — Drain & Sewer Cleaning Services In Hawthorne, NJ",
  description:
    "Call (201) 881-9622 or text (973) 866-8122. Drain Solutions Plus — P.O. Box 353 Hawthorne, New Jersey 07507. Same day service, 24/7 emergency response.",
};

export default function ContactPage() {
  return (
    <PageTransition>
      <PageHero
        eyebrow="Contact"
        lines={["Need Service?", "Give Us A Call", "Today."]}
        intro="Same day service. We're committed to respond to all emergency calls within the hour."
        image="/images/dsp/proj-16.jpg"
      />

      <ContactPanel />
      <ContactCTA withForm={false} />
    </PageTransition>
  );
}

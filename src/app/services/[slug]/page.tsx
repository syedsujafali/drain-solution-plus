import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageTransition } from "@/components/PageTransition";
import { PageHero } from "@/components/PageHero";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { ImageReveal, MaskLines, Reveal } from "@/components/motion";
import { business, serviceByName, services } from "@/lib/site";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceByName(slug);
  if (!service) return { title: "Service Not Found" };
  return {
    title: service.name,
    description: service.summary,
    openGraph: {
      title: `${service.name} | Drain Solutions Plus`,
      description: service.summary,
      images: [{ url: service.image, width: 768, height: 1024, alt: service.name }],
    },
  };
}

function splitLines(name: string) {
  const words = name.split(" ");
  if (words.length <= 2) return [name];
  const mid = Math.ceil(words.length / 2);
  return [words.slice(0, mid).join(" "), words.slice(mid).join(" ")];
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = serviceByName(slug);
  if (!service) notFound();

  const index = services.findIndex((s) => s.slug === slug);
  const next = services[(index + 1) % services.length];

  return (
    <PageTransition>
      <PageHero
        eyebrow={`${service.index} — ${service.kicker}`}
        lines={splitLines(service.name)}
        intro={service.summary}
        image={service.image}
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

      <section className="relative bg-cream py-20 sm:py-28">
        <div className="shell grid gap-14 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-[110px]">
              <ImageReveal
                src={service.image}
                alt={service.name}
                ratio="aspect-[4/5]"
                className="rounded-[3px]"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
              <Reveal delay={0.2} className="mt-4 flex items-center justify-between border-t border-navy/12 pt-4">
                <span className="eyebrow text-steel">Northern New Jersey</span>
                <span className="eyebrow text-crimson">24/7 · Same Day</span>
              </Reveal>
            </div>
          </div>

          <div className="lg:col-span-7">
            <Reveal>
              <p className="eyebrow flex items-center gap-3 text-crimson">
                <span className="h-px w-8 bg-crimson/50" />
                {service.kicker}
              </p>
            </Reveal>

            <MaskLines as="h2" className="display-md mt-6 text-navy" lines={splitLines(service.name)} />

            <Reveal delay={0.1} className="mt-8 max-w-2xl">
              <p className="lede text-[16px]">{service.detail}</p>
            </Reveal>

            <div className="mt-12 grid gap-px overflow-hidden rounded-[3px] border border-navy/12 bg-navy/12 sm:grid-cols-3">
              {service.points.map((p, i) => (
                <Reveal key={p} delay={0.12 + i * 0.07} y={24}>
                  <div className="h-full bg-cream p-6">
                    <span className="font-display text-[11px] font-bold tracking-[0.24em] text-crimson">
                      0{i + 1}
                    </span>
                    <p className="mt-3 text-[13.5px] font-bold leading-snug text-navy">{p}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.2} className="mt-12">
              <p className="eyebrow text-steel">From this service</p>
              <div className="mt-5 grid grid-cols-3 gap-3">
                {service.gallery.map((g, i) => (
                  <ImageReveal
                    key={`${g}-${i}`}
                    src={g}
                    alt={`${service.name} work in Northern NJ`}
                    ratio="aspect-[4/5]"
                    delay={i * 0.09}
                    className="rounded-[3px]"
                    sizes="(max-width: 1024px) 33vw, 22vw"
                  />
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.16} className="mt-12">
              <div className="rounded-[3px] border border-navy/12 bg-paper p-7">
                <p className="eyebrow text-crimson">Upfront Pricing</p>
                <p className="mt-3 max-w-xl text-[14px] leading-relaxed text-steel">
                  Whether it&rsquo;s an emergency or a less-urgent repair, you can count on Drain Solutions Plus for
                  drain repair pricing that respects your wallet.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Next service rail */}
      <section className="relative overflow-hidden bg-navy-950 py-16">
        <div className="grain absolute inset-0 opacity-20" aria-hidden="true" />
        <div className="shell relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="eyebrow text-white/40">Next service</p>
            <Link
              href={`/services/${next.slug}`}
              className="group mt-3 inline-flex items-center gap-4 font-display text-[clamp(1.4rem,3vw,2.3rem)] font-extrabold tracking-[-0.04em] text-white"
            >
              <span className="text-crimson-300">{next.index}</span>
              <span className="transition-colors duration-500 group-hover:text-crimson-300">{next.name}</span>
              <span className="h-px w-10 bg-white/30 transition-all duration-500 group-hover:w-20 group-hover:bg-crimson-300" />
            </Link>
          </div>
          <Link href="/services" className="btn btn-ghost-light">
            All Services
          </Link>
        </div>
      </section>

      <section className="bg-paper py-16">
        <div className="shell">
          <Reveal>
            <p className="eyebrow text-steel">All eight services</p>
          </Reveal>
          <ul className="mt-6 grid gap-px overflow-hidden rounded-[3px] border border-navy/12 bg-navy/12 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className={`flex h-full items-baseline gap-3 p-5 text-[13px] font-bold transition-colors duration-500 ${
                    s.slug === slug ? "bg-navy text-white" : "bg-cream text-ink/75 hover:bg-navy hover:text-white"
                  }`}
                >
                  <span className={s.slug === slug ? "text-crimson-300" : "text-crimson"}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {s.name}
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

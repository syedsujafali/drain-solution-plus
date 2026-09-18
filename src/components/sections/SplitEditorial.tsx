"use client";

import Link from "next/link";
import { business } from "@/lib/site";
import { ImageReveal, MaskLines, Reveal } from "@/components/motion";

export type SplitEditorialProps = {
  id?: string;
  eyebrow: string;
  titleLines: string[];
  paragraphs: string[];
  image: string;
  alt: string;
  points?: string[];
  reverse?: boolean;
  tone?: "cream" | "paper" | "navy";
};

export function SplitEditorial({
  id,
  eyebrow,
  titleLines,
  paragraphs,
  image,
  alt,
  points,
  reverse = false,
  tone = "cream",
}: SplitEditorialProps) {
  const dark = tone === "navy";

  return (
    <section
      id={id}
      className={`relative overflow-hidden py-20 sm:py-28 ${
        dark ? "bg-navy-950" : tone === "paper" ? "bg-paper" : "bg-cream"
      }`}
    >
      {dark && <div className="grain absolute inset-0 opacity-20" aria-hidden="true" />}
      <div className="shell relative grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
        <Reveal className={`lg:col-span-6 ${reverse ? "lg:order-2" : ""}`} y={44}>
          <div className="relative">
            <ImageReveal
              src={image}
              alt={alt}
              ratio="aspect-[5/4] sm:aspect-[4/3]"
              className="rounded-[3px]"
              sizes="(max-width: 1024px) 100vw, 48vw"
            />
            <span
              className={`absolute -bottom-5 -left-5 hidden h-24 w-24 border-b border-l sm:block ${
                dark ? "border-crimson-300/50" : "border-crimson/40"
              }`}
              aria-hidden="true"
            />
          </div>
        </Reveal>

        <div className={`lg:col-span-6 ${reverse ? "lg:order-1" : ""}`}>
          <Reveal>
            <p className={`eyebrow flex items-center gap-3 ${dark ? "text-crimson-300" : "text-crimson"}`}>
              <span className={`h-px w-8 ${dark ? "bg-crimson-300/60" : "bg-crimson/50"}`} />
              {eyebrow}
            </p>
          </Reveal>

          <MaskLines
            as="h2"
            className={`display-md mt-6 ${dark ? "text-white" : "text-navy"}`}
            lines={titleLines}
          />

          <div className={`mt-7 max-w-xl space-y-4 ${dark ? "" : ""}`}>
            {paragraphs.map((p, i) => (
              <Reveal key={i} delay={0.1 + i * 0.08}>
                <p className={`text-[14.5px] leading-relaxed ${dark ? "text-white/65" : "text-steel"}`}>{p}</p>
              </Reveal>
            ))}
          </div>

          {points && points.length > 0 && (
            <ul className="mt-9 grid gap-3 sm:grid-cols-2">
              {points.map((p, i) => (
                <Reveal key={p} as="li" delay={0.14 + i * 0.06} y={20}>
                  <span
                    className={`flex items-start gap-3 border-b pb-3 text-[13px] font-bold ${
                      dark ? "border-white/12 text-white/75" : "border-navy/10 text-ink/80"
                    }`}
                  >
                    <span className={`mt-[7px] h-1.5 w-1.5 shrink-0 rotate-45 ${dark ? "bg-crimson-300" : "bg-crimson"}`} />
                    {p}
                  </span>
                </Reveal>
              ))}
            </ul>
          )}

          <Reveal delay={0.3} className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a href={business.phoneHref} className="btn btn-crimson !px-7">
              Call {business.phone}
            </a>
            <Link href="/services" className={`btn !px-7 ${dark ? "btn-ghost-light" : "btn-ghost"}`}>
              View Services
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

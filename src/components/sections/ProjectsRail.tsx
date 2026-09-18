"use client";

import Link from "next/link";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { projectImages, projectsPage } from "@/lib/site";
import { LUXE, MaskLines, Reveal } from "@/components/motion";

export function ProjectsRail() {
  const reduce = useReducedMotion();
  const railRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const { scrollXProgress } = useScroll({ container: railRef });
  const barX = useSpring(scrollXProgress, { stiffness: 140, damping: 30, mass: 0.25 });
  const titleX = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : ["2%", "-8%"]);

  const nudge = (dir: 1 | -1) => {
    const el = railRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.min(el.clientWidth * 0.72, 620), behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-navy-950 py-24 sm:py-28">
      <div className="grain absolute inset-0 opacity-20" aria-hidden="true" />

      <div className="shell relative flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <Reveal>
            <p className="eyebrow flex items-center gap-3 text-crimson-300">
              <span className="h-px w-8 bg-crimson-300/60" />
              {projectsPage.eyebrow}
            </p>
          </Reveal>
          <MaskLines as="h2" className="display-md mt-6 text-white" lines={["Successful Drain &", "Sewer Projects"]} />
          <Reveal delay={0.14}>
            <p className="mt-5 max-w-md text-[13.5px] leading-relaxed text-white/55">{projectsPage.text}</p>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => nudge(-1)}
            aria-label="Scroll projects left"
            className="grid h-12 w-12 place-items-center rounded-full border border-white/20 text-white transition-colors duration-500 hover:border-crimson-300 hover:bg-crimson"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M15 5l-7 7 7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => nudge(1)}
            aria-label="Scroll projects right"
            className="grid h-12 w-12 place-items-center rounded-full border border-white/20 text-white transition-colors duration-500 hover:border-crimson-300 hover:bg-crimson"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <Link href="/projects" className="btn btn-ghost-light ml-2 !px-6">
            All Projects
          </Link>
        </Reveal>
      </div>

      <motion.div style={{ x: titleX }} className="pointer-events-none relative mt-14 select-none" aria-hidden="true">
        <p className="whitespace-nowrap font-display text-[clamp(3rem,11vw,10rem)] font-extrabold leading-none tracking-[-0.05em] text-white/[0.045]">
          NORTH NJ · DRAIN &amp; SEWER · NORTH NJ · DRAIN &amp; SEWER ·
        </p>
      </motion.div>

      <div
        ref={railRef}
        className="no-bar -mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-6 md:px-16"
        tabIndex={0}
        role="region"
        aria-label="Project gallery"
      >
        {projectImages.map((src, i) => (
          <motion.figure
            key={src}
            initial={{ opacity: 0, y: reduce ? 0 : 46 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: reduce ? 0.4 : 0.95, delay: reduce ? 0 : (i % 6) * 0.07, ease: LUXE }}
            className={`group relative w-[68vw] shrink-0 snap-start overflow-hidden rounded-[3px] bg-navy-900 sm:w-[38vw] md:w-[26vw] lg:w-[20vw] ${i % 3 === 1 ? "md:mt-10" : i % 3 === 2 ? "md:mt-4" : ""
              }`}
          >
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src={src}
                alt={`Drain and sewer project ${i + 1} in Northern New Jersey`}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.09]"
              />
            </div>
            <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(1,15,24,0.85),transparent_52%)] opacity-70 transition-opacity duration-700 group-hover:opacity-95" />

          </motion.figure>
        ))}
      </div>

      <div className="shell relative mt-2">
        <span className="block h-px w-full bg-white/10">
          <motion.span className="block h-px origin-left bg-crimson-300" style={{ scaleX: barX }} />
        </span>
      </div>
    </section>
  );
}

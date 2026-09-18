"use client";

import { motion, useReducedMotion } from "framer-motion";
import { projectImages } from "@/lib/site";
import { LUXE } from "@/components/motion";

const HEIGHTS = ["aspect-[3/4]", "aspect-[4/5]", "aspect-[3/4]", "aspect-[4/5]"];

export function ProjectsMasonry() {
  const reduce = useReducedMotion();

  return (
    <div className="columns-2 gap-3 md:columns-3 lg:columns-4 [&>*]:mb-3">
      {projectImages.map((src, i) => (
        <motion.figure
          key={src}
          initial={{ opacity: 0, y: reduce ? 0 : 40, clipPath: reduce ? "none" : "inset(0 0 100% 0)" }}
          whileInView={{ opacity: 1, y: 0, clipPath: reduce ? "none" : "inset(0 0 0% 0)" }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: reduce ? 0.4 : 1.05, delay: reduce ? 0 : (i % 4) * 0.07, ease: LUXE }}
          className="group relative break-inside-avoid overflow-hidden rounded-[3px] bg-navy-900"
        >
          <div className={`overflow-hidden ${HEIGHTS[i % HEIGHTS.length]}`}>
            <img
              src={src}
              alt={`Drain and sewer project ${i + 1} completed in Northern New Jersey`}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-[1500ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.09]"
            />
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(1,15,24,0.9),transparent_55%)] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
          <figcaption className="absolute inset-x-0 bottom-0 flex translate-y-3 items-center justify-between gap-3 p-4 opacity-0 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0 group-hover:opacity-100">
            <span className="font-display text-[10px] font-bold tracking-[0.24em] text-white/70">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="text-[9px] font-bold tracking-[0.2em] text-crimson-300 uppercase">North NJ</span>
          </figcaption>
        </motion.figure>
      ))}
    </div>
  );
}

"use client";

import { motion, useReducedMotion } from "framer-motion";
import { stats } from "@/lib/site";
import { LUXE } from "@/components/motion";

export function StatsStrip() {
  const reduce = useReducedMotion();

  return (
    <section className="relative z-20 w-full bg-[#014485] border-y border-white/10 select-none shadow-md">
      <div className="shell py-8 sm:py-10 lg:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/15">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: reduce ? 0 : 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: reduce ? 0.3 : 0.65, delay: i * 0.08, ease: LUXE }}
              className="flex flex-col items-center justify-center py-4 px-3 sm:px-6 text-center"
            >
              {/* Number and Unit */}
              <div className="flex items-start justify-center leading-none">
                <span className="font-display text-4xl sm:text-5xl lg:text-[56px] font-black tracking-tight text-white drop-shadow-sm">
                  {stat.value}
                </span>
                {stat.unit ? (
                  <span className="ml-1 text-sm sm:text-base lg:text-[17px] font-bold text-[#c02f2d] drop-shadow-xs pt-1">
                    {stat.unit}
                  </span>
                ) : null}
              </div>

              {/* Subtitle / Description */}
              <p className="mt-2 sm:mt-3 text-[9.5px] sm:text-[11px] font-extrabold uppercase tracking-[0.22em] text-white/85">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

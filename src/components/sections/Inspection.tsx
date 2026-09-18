"use client";

import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { videoInspection } from "@/lib/site";
import { LUXE, MaskLines, Reveal } from "@/components/motion";

export function Inspection() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : ["-12%", "12%"]);
  const hud = useTransform(scrollYProgress, [0.15, 0.6], reduce ? [1, 1] : [0, 1]);

  return (
    <section ref={ref} className="relative isolate overflow-hidden bg-navy-950 py-28 sm:py-36">
      <motion.div className="absolute inset-0 -z-20" style={{ y }}>
        <img
          src={videoInspection.image}
          alt="Main line video sewer inspection camera equipment"
          loading="lazy"
          className="h-[124%] w-full object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(96deg,rgba(1,15,24,0.97)_0%,rgba(1,32,47,0.9)_46%,rgba(1,73,116,0.45)_100%)]" />
      <div className="grain absolute inset-0 -z-10 opacity-25" aria-hidden="true" />

      <div className="shell relative grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <Reveal>
            <p className="eyebrow flex items-center gap-3 text-crimson-300">
              <span className="relative flex h-2 w-2">
                <span className="pulse-ring absolute inset-0 rounded-full" />
                <span className="relative h-2 w-2 rounded-full bg-crimson-300" />
              </span>
              {videoInspection.eyebrow}
            </p>
          </Reveal>

          <MaskLines
            as="h2"
            className="display-lg mt-6 text-white"
            lines={["Main Line Video", "Sewer Inspection"]}
          />

          <Reveal delay={0.12} className="mt-8 max-w-xl space-y-5 border-l border-white/15 pl-6">
            <p className="text-[15px] leading-relaxed text-white/75">{videoInspection.text}</p>
            <p className="text-[13.5px] leading-relaxed text-white/50">{videoInspection.extra}</p>
          </Reveal>

          <Reveal delay={0.2} className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link href="/services/main-line-video-sewer-inspection" className="btn btn-crimson !px-7">
              View Service
            </Link>
            <Link href="/contact" className="btn btn-ghost-light !px-7">
              Book An Inspection
            </Link>
          </Reveal>
        </div>

        {/* Camera HUD */}
        <motion.div
          style={{ opacity: hud }}
          className="relative hidden lg:col-span-5 lg:block"
          aria-hidden="true"
        >
          <div className="relative ml-auto aspect-[4/3] w-full max-w-md overflow-hidden rounded-[3px] border border-white/15 bg-navy-950/60 backdrop-blur-sm">
            <div className="absolute inset-3 rounded-[2px] border border-white/12" />
            <div className="absolute left-6 top-6 flex items-center gap-2 text-[9px] font-bold tracking-[0.24em] text-crimson-300 uppercase">
              <span className="h-2 w-2 rounded-full bg-crimson-300" /> Rec
            </div>
            <div className="absolute right-6 top-6 text-[9px] font-bold tracking-[0.24em] text-white/50 uppercase">
              CAM 01
            </div>
            <div className="absolute inset-x-6 bottom-6 space-y-2">
              <div className="flex items-end justify-between text-[9px] font-bold tracking-[0.2em] text-white/45 uppercase">
                <span>Main Line → Street</span>
                <span>Line 04</span>
              </div>
              <span className="block h-px w-full bg-white/15" />
              <div className="grid grid-cols-4 gap-2">
                {["Push Rod", "Sonde", "LED Head", "Footage"].map((l) => (
                  <span key={l} className="block text-center text-[8px] font-bold tracking-[0.16em] text-white/35 uppercase">
                    {l}
                  </span>
                ))}
              </div>
            </div>
            {/* scanline */}
            {!reduce && (
              <motion.span
                className="absolute inset-x-0 h-16 bg-[linear-gradient(to_bottom,transparent,rgba(47,90,208,0.22),transparent)]"
                animate={{ top: ["-16%", "110%"] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "linear" }}
              />
            )}
            <span className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(to_bottom,rgba(255,255,255,0.045)_0px,rgba(255,255,255,0.045)_1px,transparent_1px,transparent_4px)]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

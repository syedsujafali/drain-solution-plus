"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { business, heroBadges } from "@/lib/site";
import { LUXE, Marquee } from "@/components/motion";

const HEADLINE = ["Drain & Sewer", "Cleaning & Repair"];

const HERO_IMAGES = [
  {
    src: "/images/dsp/proj-2.jpg",
    alt: "Drain Solutions Plus main sewer replacement and trench service project",
  },
  {
    src: "/images/dsp/proj-1.jpg",
    alt: "Expert drain snaking auger and mainline clearing project",
  },
  {
    src: "/images/dsp/proj-3.jpg",
    alt: "Professional sewer line pipe installation and cleanout service",
  },
  {
    src: "/images/dsp/proj-7.jpg",
    alt: "Commercial drainage diagnostics and expert technician work",
  },
  {
    src: "/images/dsp/proj-4.jpg",
    alt: "Heavy duty drain pipe repair and mainline inspection project",
  },
];

export function Hero() {
  const reduce = useReducedMotion();
  const [currentIdx, setCurrentIdx] = useState(0);
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : ["-6%", "12%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], reduce ? [1, 1] : [1.06, 1.16]);
  const contentY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, 110]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  const enter = (delay: number) => ({
    initial: { opacity: 0, y: reduce ? 0 : 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: reduce ? 0.5 : 1.1, delay: reduce ? 0 : delay, ease: LUXE },
  });

  return (
    <section ref={ref} className="relative isolate flex min-h-[100svh] flex-col justify-between overflow-hidden bg-navy-950">
      {/* Animated cinematic background slider */}
      <motion.div className="absolute inset-0 -z-20" style={{ y: bgY, scale: bgScale }}>
        <AnimatePresence initial={false}>
          <motion.div
            key={currentIdx}
            initial={{ opacity: 0, scale: 1.12, filter: "brightness(1.1)" }}
            animate={{ opacity: 1, scale: 1.02, filter: "brightness(1)" }}
            exit={{ opacity: 0, scale: 0.98, filter: "brightness(0.9)" }}
            transition={{
              duration: 1.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute inset-0"
          >
            <Image
              src={HERO_IMAGES[currentIdx].src}
              alt={HERO_IMAGES[currentIdx].alt}
              fill
              priority={currentIdx === 0}
              sizes="100vw"
              className="object-cover object-center"
            />
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Balanced opacity gradient: gives just the right touch of contrast while keeping background imagery vivid */}
      <div className="absolute inset-0 -z-10 bg-navy-950/20" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(95deg,rgba(1,15,24,0.78)_0%,rgba(1,20,30,0.52)_46%,rgba(1,40,70,0.22)_75%,rgba(0,0,0,0.18)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_top,rgba(1,15,24,0.78)_0%,transparent_36%)]" />
      <div className="grain absolute inset-0 -z-10 opacity-15" aria-hidden="true" />

      {/* Vertical region rail */}
      <motion.div
        {...enter(1.15)}
        className="absolute right-6 top-1/2 hidden -translate-y-1/2 xl:block"
        aria-hidden="true"
      >
        <div className="flex flex-col items-center gap-5">
          <span className="h-16 w-px bg-gradient-to-b from-transparent to-white/40" />
          <span className="rotate-90 whitespace-nowrap text-[10px] font-bold tracking-[0.42em] text-white/55 uppercase">
            Bergen · Essex · Hudson · Passaic
          </span>
          <span className="h-16 w-px bg-gradient-to-t from-transparent to-white/40" />
        </div>
      </motion.div>

      <div className="shell relative flex flex-1 flex-col justify-center pt-40 pb-4 sm:pt-44 sm:pb-6 lg:pt-40">
        <motion.div style={{ y: contentY, opacity: contentOpacity }} className="max-w-5xl xl:max-w-6xl 2xl:max-w-7xl">
          <motion.p
            {...enter(0.15)}
            className="eyebrow flex flex-wrap items-center gap-x-3 gap-y-1.5 text-crimson-300"
          >
            <span className="h-px w-10 bg-crimson-300/70" />
            Residential &amp; Commercial
            <span className="hidden h-3 w-px bg-white/25 sm:block" />
            <span className="text-white/55">Northern New Jersey</span>
          </motion.p>

          <h1 className="mt-4 sm:mt-5 space-y-1.5 sm:space-y-2">
            <span className="sr-only">Drain And Sewer Cleaning &amp; Repair Service Company, North NJ</span>
            {HEADLINE.map((line, i) => (
              <span key={line} className="block overflow-hidden py-0.5">
                <motion.span
                  className="block font-display font-extrabold tracking-[-0.035em] leading-[1.12] text-white text-[clamp(1.95rem,4.4vw,4.4rem)] 2xl:text-[clamp(2.5rem,4.8vw,5.2rem)]"
                  initial={{ y: reduce ? 0 : "112%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: reduce ? 0.5 : 1.25, delay: reduce ? 0 : 0.24 + i * 0.11, ease: LUXE }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
            <span className="block overflow-hidden py-0.5">
              <motion.span
                className="block font-display font-extrabold tracking-[-0.035em] leading-[1.12] text-stroke-light text-[clamp(1.95rem,4.4vw,4.4rem)] 2xl:text-[clamp(2.5rem,4.8vw,5.2rem)]"
                initial={{ y: reduce ? 0 : "112%" }}
                animate={{ y: 0 }}
                transition={{ duration: reduce ? 0.5 : 1.25, delay: reduce ? 0 : 0.46, ease: LUXE }}
              >
                Northern NJ
              </motion.span>
            </span>
          </h1>

          <motion.div {...enter(0.72)} className="mt-6 sm:mt-7 flex max-w-3xl flex-col gap-3 border-l-2 border-white/20 pl-4 sm:pl-5 sm:flex-row sm:items-center sm:gap-6">
            <p className="text-[13.5px] sm:text-[15px] leading-[1.65] text-white/80">
              {business.tagline}
            </p>
            <p className="font-display text-[13.5px] sm:text-[15px] font-bold tracking-[-0.01em] text-crimson-300 sm:whitespace-nowrap">
              {business.promise}
            </p>
          </motion.div>

          <motion.div {...enter(0.86)} className="mt-6 sm:mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href={business.phoneHref} className="btn btn-crimson !px-7 sm:!px-8 !py-3 sm:!py-3.5 !text-[11px] sm:!text-[12px]">
              <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 5c0-.6.4-1 1-1h2.6c.5 0 .9.3 1 .8l.7 2.8c.1.4 0 .9-.4 1.1L7.6 10a12 12 0 0 0 6.4 6.4l1.3-1.3c.3-.3.7-.4 1.1-.3l2.8.7c.5.1.8.5.8 1V19c0 .6-.4 1-1 1A16 16 0 0 1 4 5Z" strokeLinejoin="round" />
              </svg>
              Call Today! {business.phone}
            </a>
            <Link href="/services" className="btn btn-ghost-light !px-7 sm:!px-8 !py-3 sm:!py-3.5 !text-[11px] sm:!text-[12px]">
              Explore Services
            </Link>
          </motion.div>

          {/* Interactive slider progress bar & slide indicators */}
          <motion.div {...enter(0.95)} className="mt-6 flex items-center gap-2">
            {HERO_IMAGES.map((img, idx) => (
              <button
                key={img.src}
                type="button"
                onClick={() => setCurrentIdx(idx)}
                aria-label={`Show slide ${idx + 1}`}
                className="group relative h-1.5 overflow-hidden rounded-full transition-all duration-400 cursor-pointer"
                style={{ width: currentIdx === idx ? 36 : 12 }}
              >
                <span
                  className={`absolute inset-0 rounded-full transition-colors duration-400 ${
                    currentIdx === idx ? "bg-crimson" : "bg-white/35 group-hover:bg-white/60"
                  }`}
                />
                {currentIdx === idx && (
                  <motion.span
                    key={`hero-timer-${currentIdx}`}
                    initial={{ x: "-100%" }}
                    animate={{ x: "0%" }}
                    transition={{ duration: 2.5, ease: "linear" }}
                    className="absolute inset-0 bg-white/70 rounded-full"
                  />
                )}
              </button>
            ))}
            <span className="ml-2 font-mono text-[10px] font-bold tracking-widest text-white/50 uppercase">
              0{currentIdx + 1} / 0{HERO_IMAGES.length}
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Badge marquee band */}
      <motion.div
        initial={{ opacity: 0, y: reduce ? 0 : 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: reduce ? 0.5 : 1, delay: reduce ? 0 : 1.05, ease: LUXE }}
        className="shrink-0 relative border-t border-white/12 bg-navy-950/80 backdrop-blur-md"
      >
        <div className="flex items-stretch">
          <div className="hidden shrink-0 items-center gap-3 border-r border-white/12 px-5 py-3 md:flex">
            <Image src="/images/dsp/five-star.png" alt="Five star rated company" width={92} height={26} className="h-4 w-auto" priority />
            <span className="text-[9px] font-bold tracking-[0.24em] text-white/60 uppercase">
              {business.ratingLabel}
            </span>
          </div>
          <Marquee className="flex-1 py-3" slow>
            {heroBadges.map((b) => (
              <span key={b} className="flex items-center gap-6 whitespace-nowrap px-6">
                <span className="text-[11px] font-bold tracking-[0.24em] text-white/70 uppercase">{b}</span>
                <span className="h-1 w-1 rotate-45 bg-crimson-300" />
              </span>
            ))}
          </Marquee>
          <a
            href="#services"
            aria-label="Scroll to services"
            className="hidden shrink-0 items-center gap-3 border-l border-white/12 px-6 py-3 text-[10px] font-bold tracking-[0.24em] text-white/60 uppercase transition-colors hover:text-white lg:flex"
          >
            Scroll
            <motion.span
              animate={reduce ? {} : { y: [0, 5, 0] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
              className="inline-block"
            >
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 4v16m0 0 6-6m-6 6-6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}

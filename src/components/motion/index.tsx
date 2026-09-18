"use client";

import { motion, useReducedMotion, useScroll, useTransform, useSpring, type MotionProps } from "framer-motion";
import { useRef, type ElementType, type ReactNode } from "react";

export const LUXE = [0.16, 1, 0.3, 1] as const;

/** Fade + rise on scroll into view. */
export function Reveal({
  children,
  delay = 0,
  y = 34,
  x = 0,
  className,
  as = "div",
  once = true,
  amount = 0.25,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  x?: number;
  className?: string;
  as?: ElementType;
  once?: boolean;
  amount?: number;
}) {
  const reduce = useReducedMotion();
  const Comp = motion[as as keyof typeof motion] as typeof motion.div;
  return (
    <Comp
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once, amount, margin: "0px 0px -8% 0px" }}
      transition={{ duration: reduce ? 0.4 : 1.05, delay: reduce ? 0 : delay, ease: LUXE }}
    >
      {children}
    </Comp>
  );
}

/** Line-mask reveal: each line slides up from behind an overflow clip. */
export function MaskLines({
  lines,
  className,
  lineClassName,
  delay = 0,
  stagger = 0.085,
  as = "h2",
}: {
  lines: ReactNode[];
  className?: string;
  lineClassName?: string;
  delay?: number;
  stagger?: number;
  as?: ElementType;
}) {
  const reduce = useReducedMotion();
  const Comp = motion[as as keyof typeof motion] as typeof motion.h2;
  return (
    <Comp className={className} initial="hide" whileInView="show" viewport={{ once: true, amount: 0.4 }}>
      {lines.map((line, i) => (
        <span key={i} className={`block overflow-hidden ${lineClassName ?? ""}`}>
          <motion.span
            className="block will-change-transform"
            variants={{
              hide: { y: reduce ? 0 : "108%", opacity: reduce ? 0 : 1 },
              show: {
                y: 0,
                opacity: 1,
                transition: { duration: reduce ? 0.4 : 1.05, delay: reduce ? 0 : delay + i * stagger, ease: LUXE },
              },
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Comp>
  );
}

/** Clip-path image reveal with a slow Ken-Burns settle. */
export function ImageReveal({
  src,
  alt,
  className,
  imgClassName,
  delay = 0,
  ratio = "aspect-[4/5]",
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  delay?: number;
  ratio?: string;
  priority?: boolean;
  sizes?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <div className={`relative overflow-hidden ${ratio} ${className ?? ""}`}>
      <motion.div
        className="absolute inset-0"
        initial={reduce ? { opacity: 0 } : { clipPath: "inset(0 0 100% 0)" }}
        whileInView={reduce ? { opacity: 1 } : { clipPath: "inset(0 0 0% 0)" }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: reduce ? 0.5 : 1.25, delay: reduce ? 0 : delay, ease: LUXE }}
      >
        <motion.img
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          sizes={sizes}
          className={`h-full w-full object-cover ${imgClassName ?? ""}`}
          initial={reduce ? undefined : { scale: 1.22 }}
          whileInView={reduce ? undefined : { scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: reduce ? 0 : 1.9, delay: reduce ? 0 : delay, ease: LUXE }}
        />
      </motion.div>
    </div>
  );
}

/** Scroll-linked parallax on the Y axis with a subtle scale. */
export function Parallax({
  children,
  distance = 90,
  className,
  scale,
}: {
  children: ReactNode;
  distance?: number;
  className?: string;
  scale?: [number, number];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [distance, -distance]);
  const s = useTransform(scrollYProgress, [0, 1], scale ?? (reduce ? [1, 1] : [1.12, 1.02]));
  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y, scale: s }} className="h-full w-full will-change-transform">
        {children}
      </motion.div>
    </div>
  );
}

/** Smoothed global scroll progress bar (0 → 1). */
export function useSmoothProgress() {
  const { scrollYProgress } = useScroll();
  return useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.35 });
}

export function Fade({
  children,
  className,
  ...rest
}: { children: ReactNode; className?: string } & MotionProps) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: reduce ? 0.3 : 0.9, ease: LUXE }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

/** Infinite horizontal marquee. Items are duplicated for a seamless loop. */
export function Marquee({
  children,
  slow = false,
  className,
  reverse = false,
}: {
  children: ReactNode;
  slow?: boolean;
  className?: string;
  reverse?: boolean;
}) {
  return (
    <div className={`relative flex overflow-hidden ${className ?? ""}`}>
      <div
        className={`flex w-max shrink-0 ${slow ? "marquee-track-slow" : "marquee-track"}`}
        style={reverse ? { animationDirection: "reverse" } : undefined}
      >
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}

"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useRef, type ReactNode } from "react";
import { LUXE } from "@/components/motion";

/**
 * Fast, continuous route transition: a thin navy curtain wipes down while the
 * new page fades up. Kept deliberately short so navigation never feels blocked.
 */
export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const first = useRef(true);

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);

  const d = reduce ? 0.15 : 0.42;

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div key={pathname} className="relative">
        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: reduce ? 0 : -10 }}
          transition={{ duration: d, ease: LUXE }}
        >
          {children}
        </motion.div>
        <motion.span
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-[180] origin-top bg-navy-950"
          initial={{ scaleY: reduce ? 0 : 1 }}
          animate={{ scaleY: 0 }}
          transition={{ duration: reduce ? 0.1 : 0.62, ease: LUXE }}
        />
      </motion.div>
    </AnimatePresence>
  );
}

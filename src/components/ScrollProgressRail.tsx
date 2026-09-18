"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useSmoothProgress } from "@/components/motion";

export function ScrollProgressRail() {
  const progress = useSmoothProgress();
  const reduce = useReducedMotion();
  if (reduce) return null;
  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[200] h-[2px] origin-left bg-gradient-to-r from-crimson via-navy to-azure"
      style={{ scaleX: progress }}
    />
  );
}

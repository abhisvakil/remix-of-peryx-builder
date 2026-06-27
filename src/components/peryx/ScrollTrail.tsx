import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";

/**
 * Fixed gold trail line that tracks scroll progress — the "falcon's dive path."
 * Subtle, premium, hidden on small viewports to avoid jank.
 */
export function ScrollTrail() {
  const { scrollYProgress } = useScroll();
  const reduce = useReducedMotion();
  const top = useTransform(scrollYProgress, [0, 1], ["10vh", "92vh"]);
  const opacity = useTransform(scrollYProgress, [0, 0.05, 0.95, 1], [0, 1, 1, 0]);

  if (reduce) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-1/2 z-30 hidden h-24 w-px -translate-x-1/2 md:block"
      style={{
        top,
        opacity,
        background: "linear-gradient(180deg, transparent, var(--gold), transparent)",
        boxShadow: "0 0 8px var(--gold), 0 0 16px var(--gold)",
      }}
    />
  );
}

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { PeryxLogo } from "./PeryxLogo";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const goldY = useTransform(scrollYProgress, [0, 1], [0, 220]);
  const goldOpacity = useTransform(scrollYProgress, [0, 0.6, 1], [1, 0.4, 0]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-24"
    >
      {/* ambient gradient */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse at 50% 30%, color-mix(in oklab, var(--gold) 12%, transparent), transparent 60%)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center"
      >
        <PeryxLogo size={140} goldY={goldY} goldOpacity={goldOpacity} />
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="eyebrow relative z-10 mt-12 text-[color:var(--gold)]"
      >
        Operations Intelligence
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="relative z-10 mt-6 max-w-3xl text-center text-5xl font-bold tracking-tight md:text-7xl"
      >
        See exactly where your energy goes.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="relative z-10 mt-6 max-w-2xl text-center text-base text-muted-foreground md:text-lg"
      >
        Peryx.ai fuses physics-based modeling with machine learning to catch what dashboards miss
        — soiling, mismatch, drift, and failure, before they cost you generation.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="relative z-10 mt-10 flex flex-col items-center gap-5"
      >
        <a
          href="#contact"
          className="inline-flex items-center justify-center rounded-md bg-[color:var(--gold)] px-7 py-3 text-sm font-medium text-[color:var(--gold-foreground)] shadow-lg shadow-[color:color-mix(in_oklab,var(--gold)_25%,transparent)] transition-transform hover:scale-[1.02]"
        >
          Get Started
        </a>
        <a href="#platform" className="eyebrow text-muted-foreground transition-colors hover:text-foreground">
          See it in action ↓
        </a>
      </motion.div>
    </section>
  );
}

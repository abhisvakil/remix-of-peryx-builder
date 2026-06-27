export function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-border/60 px-6 py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, color-mix(in oklab, var(--gold) 14%, transparent), transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-3xl text-center">
        <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
          Ready to see what your fleet is losing?
        </h2>
        <p className="mt-6 text-muted-foreground md:text-lg">
          Talk to us about a pilot deployment for your plants.
        </p>
        <a
          href="mailto:hello@peryx.ai"
          className="mt-10 inline-flex items-center justify-center rounded-md bg-[color:var(--gold)] px-8 py-3.5 text-sm font-medium text-[color:var(--gold-foreground)] shadow-lg shadow-[color:color-mix(in_oklab,var(--gold)_25%,transparent)] transition-transform hover:scale-[1.02]"
        >
          Get Started
        </a>
      </div>
    </section>
  );
}

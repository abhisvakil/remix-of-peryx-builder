export function Partners() {
  return (
    <section className="border-t border-border/60 px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <p className="eyebrow text-[color:var(--gold)]">Who We Work With</p>
        <h2 className="mt-4 max-w-2xl text-4xl font-bold tracking-tight md:text-5xl">
          Built for enterprise energy operators
        </h2>
        <p className="mt-5 max-w-2xl text-muted-foreground">
          Peryx is engineered for the operational and engineering standards of large-scale solar
          fleet operators and independent power producers.
        </p>

        <div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-5">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="flex h-20 items-center justify-center rounded-md border border-border/60 bg-card/50"
            >
              <span className="eyebrow text-muted-foreground/60">Logo</span>
            </div>
          ))}
        </div>

        <p className="mt-8 max-w-2xl text-xs text-muted-foreground">
          Currently in active deployment discussions with leading Indian energy enterprises.
        </p>
      </div>
    </section>
  );
}

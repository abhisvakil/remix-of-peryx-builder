const FEATURES = [
  {
    title: "Physics-First Modeling",
    body: "Every plant is modeled against its own PAN/OND configuration — irradiance, temperature, and conversion losses calculated deterministically before any machine learning touches the data. No black boxes guessing at fundamentals.",
  },
  {
    title: "Soiling & Degradation Tracking",
    body: "Continuously estimated soiling state and year-over-year degradation rate, derived directly from operating data — not assumptions baked in at commissioning.",
  },
  {
    title: "Multi-Level Anomaly Detection",
    body: "String, MPPT, and inverter-level anomaly detection running on every 5-minute interval, catching developing faults long before they show up as lost revenue.",
  },
  {
    title: "Automated Fault Classification",
    body: "Fault events are automatically classified — not just flagged — using labeled historical patterns across your fleet, so your team knows what to fix, not just that something's wrong.",
  },
  {
    title: "Energy Forecast & Bias Correction",
    body: "Site-calibrated irradiance and generation forecasts that improve over time as the platform learns each site's specific behavior.",
  },
  {
    title: "Fleet-Wide, Multi-Client Architecture",
    body: "Built from day one to serve multiple operators and fleets on shared infrastructure — not a one-off internal tool. Every model transfers and adapts across your portfolio.",
  },
];

export function Features() {
  return (
    <section id="features" className="border-t border-border/60 px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <p className="eyebrow text-[color:var(--gold)]">Capabilities</p>
        <h2 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight md:text-5xl">
          One platform. Every loss, accounted for.
        </h2>
        <p className="mt-5 max-w-2xl text-muted-foreground">
          Peryx runs a physics-first backbone with machine learning layered on to catch what physics
          alone can't explain — built for fleets, not single sites.
        </p>

        <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-border/60 bg-border/60 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <div key={f.title} className="group relative bg-background p-7 transition-colors hover:bg-card">
              <div className="flex items-center gap-3">
                <span className="eyebrow text-[color:var(--gold)]">{String(i + 1).padStart(2, "0")}</span>
                <div className="h-px flex-1 bg-border/60" />
              </div>
              <h3 className="mt-5 text-lg font-semibold tracking-tight">{f.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { DashboardMock } from "./DashboardMock";

const CARDS = [
  { label: "Fleet Health Overview", variant: "fleet" as const },
  { label: "Soiling & Degradation Tracking", variant: "soiling" as const },
  { label: "Fault Detection Timeline", variant: "fault" as const },
];

export function LiveInsights() {
  return (
    <section id="platform" className="border-t border-border/60 px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <p className="eyebrow text-[color:var(--gold)]">The Platform</p>
        <h2 className="mt-4 max-w-2xl text-4xl font-bold tracking-tight md:text-5xl">
          See your fleet the way we see it
        </h2>
        <p className="mt-5 max-w-2xl text-muted-foreground">
          A live look at how Peryx turns raw inverter and weather-station telemetry into plant-level
          answers — what's losing you energy, where, and why.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {CARDS.map((c) => (
            <div
              key={c.label}
              className="group rounded-lg border border-border/60 bg-card p-5 transition-colors hover:border-[color:color-mix(in_oklab,var(--gold)_40%,var(--border))]"
            >
              <DashboardMock variant={c.variant} />
              <div className="mt-4 flex items-center justify-between">
                <p className="text-sm font-medium">{c.label}</p>
                <span className="eyebrow text-muted-foreground">Live</span>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-xs text-muted-foreground">
          Screenshots shown are illustrative. Live fleet dashboards available on request.
        </p>
      </div>
    </section>
  );
}

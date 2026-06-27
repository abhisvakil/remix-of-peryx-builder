type Variant = "fleet" | "soiling" | "fault";

export function DashboardMock({ variant }: { variant: Variant }) {
  return (
    <div className="relative h-44 w-full overflow-hidden rounded-md border border-border/60 bg-[color:color-mix(in_oklab,var(--background)_60%,var(--muted))]">
      {/* faint grid */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(to right, color-mix(in oklab, var(--foreground) 6%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in oklab, var(--foreground) 6%, transparent) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      {variant === "fleet" && <FleetMock />}
      {variant === "soiling" && <SoilingMock />}
      {variant === "fault" && <FaultMock />}
    </div>
  );
}

function FleetMock() {
  const cells = Array.from({ length: 32 });
  return (
    <div className="absolute inset-4 grid grid-cols-8 gap-1.5">
      {cells.map((_, i) => {
        const tone = i % 11 === 0 ? "var(--gold)" : i % 7 === 0 ? "oklch(0.55 0.12 30)" : "oklch(0.42 0.04 160)";
        return <div key={i} className="rounded-sm" style={{ background: tone, opacity: 0.7 }} />;
      })}
    </div>
  );
}

function SoilingMock() {
  const points = Array.from({ length: 24 }).map((_, i) => {
    const y = 70 - Math.sin(i / 3) * 14 - i * 0.6;
    return `${i * (100 / 23)},${y}`;
  });
  return (
    <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full p-3">
      <polyline points={points.join(" ")} fill="none" stroke="var(--gold)" strokeWidth="0.8" opacity="0.9" />
      <polyline
        points={Array.from({ length: 24 }).map((_, i) => `${i * (100 / 23)},${50 - i * 0.4}`).join(" ")}
        fill="none"
        stroke="oklch(0.6 0.02 90)"
        strokeWidth="0.4"
        strokeDasharray="2 2"
      />
    </svg>
  );
}

function FaultMock() {
  return (
    <div className="absolute inset-4 flex flex-col justify-end gap-2">
      {[0.4, 0.7, 0.55, 0.85, 0.3, 0.6].map((v, i) => (
        <div key={i} className="flex items-center gap-2">
          <div className="h-1.5 flex-1 rounded-full bg-border/70">
            <div
              className="h-full rounded-full"
              style={{
                width: `${v * 100}%`,
                background: i % 3 === 0 ? "var(--gold)" : "oklch(0.55 0.04 160)",
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

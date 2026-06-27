// TODO: Replace with real team names, titles, photos, and bios before launch.
const TEAM = [
  { name: "[NAME PLACEHOLDER]", role: "[ROLE PLACEHOLDER]", bio: "One-line bio placeholder.", initials: "PX" },
  { name: "[NAME PLACEHOLDER]", role: "[ROLE PLACEHOLDER]", bio: "One-line bio placeholder.", initials: "PX" },
  { name: "[NAME PLACEHOLDER]", role: "[ROLE PLACEHOLDER]", bio: "One-line bio placeholder.", initials: "PX" },
  { name: "[NAME PLACEHOLDER]", role: "[ROLE PLACEHOLDER]", bio: "One-line bio placeholder.", initials: "PX" },
];

export function Team() {
  return (
    <section id="team" className="border-t border-border/60 px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <p className="eyebrow text-[color:var(--gold)]">The Team</p>
        <h2 className="mt-4 max-w-2xl text-4xl font-bold tracking-tight md:text-5xl">
          Built by people who've run the numbers
        </h2>
        <p className="mt-5 max-w-2xl text-muted-foreground">
          A small team of engineers and energy domain specialists building the monitoring layer we
          wished existed.
        </p>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((m, i) => (
            <div key={i} className="rounded-lg border border-border/60 bg-card p-6">
              <div
                className="flex h-16 w-16 items-center justify-center rounded-full border border-border/60 text-sm font-medium text-muted-foreground"
                style={{ background: "color-mix(in oklab, var(--gold) 8%, var(--muted))" }}
              >
                {m.initials}
              </div>
              <h3 className="mt-5 font-display text-base font-semibold">{m.name}</h3>
              <p className="eyebrow mt-1 text-[color:var(--gold)]">{m.role}</p>
              <p className="mt-3 text-sm text-muted-foreground">{m.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

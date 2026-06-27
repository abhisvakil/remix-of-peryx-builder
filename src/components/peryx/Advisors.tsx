// TODO: Replace with real advisor names, affiliations, and photos before launch.
const ADVISORS = [
  { name: "[NAME PLACEHOLDER]", role: "[AFFILIATION PLACEHOLDER]", initials: "AD" },
  { name: "[NAME PLACEHOLDER]", role: "[AFFILIATION PLACEHOLDER]", initials: "AD" },
  { name: "[NAME PLACEHOLDER]", role: "[AFFILIATION PLACEHOLDER]", initials: "AD" },
];

export function Advisors() {
  return (
    <section className="border-t border-border/60 px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <p className="eyebrow text-[color:var(--gold)]">Advisors</p>
        <h2 className="mt-4 max-w-2xl text-4xl font-bold tracking-tight md:text-5xl">
          Guided by industry experience
        </h2>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {ADVISORS.map((m, i) => (
            <div key={i} className="rounded-lg border border-border/60 bg-card p-6">
              <div
                className="flex h-14 w-14 items-center justify-center rounded-full border border-border/60 text-sm font-medium text-muted-foreground"
                style={{ background: "color-mix(in oklab, var(--gold) 8%, var(--muted))" }}
              >
                {m.initials}
              </div>
              <h3 className="mt-5 font-display text-base font-semibold">{m.name}</h3>
              <p className="eyebrow mt-1 text-muted-foreground">{m.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const QA = [
  {
    q: "What exactly does Peryx monitor?",
    a: "Peryx ingests telemetry from solar inverters and weather monitoring stations across your fleet, then runs a hybrid physics and machine learning model stack to detect soiling, mismatch, degradation, and equipment faults — surfaced through a single dashboard.",
  },
  {
    q: "How is this different from the monitoring tools that come with my inverters?",
    a: "Most built-in monitoring tools report raw numbers without context. Peryx runs a deterministic physics model of each plant's expected performance, then uses machine learning to explain the gap between expected and actual output — turning raw telemetry into root-cause answers.",
  },
  {
    q: "Does this work across multiple plants and inverter brands?",
    a: "Yes. Peryx is architected as a multi-client, fleet-scale platform from the ground up — not a single-site tool. Models transfer across plants and adapt to local conditions.",
  },
  {
    q: "How is our data handled?",
    a: "Your telemetry stays within a dedicated, access-controlled cloud environment. We don't share data across client accounts. Full data handling details are covered under NDA during onboarding.",
  },
  {
    q: "What's the typical onboarding timeline?",
    a: "Initial integration and baseline modeling typically takes a few weeks once telemetry access is confirmed, depending on fleet size and data quality.",
  },
  {
    q: "Do you offer a pilot or trial engagement?",
    a: "Yes — reach out via the Get Started section below and we'll scope a pilot suited to your fleet.",
  },
];

export function FAQ() {
  return (
    <section className="border-t border-border/60 px-6 py-28">
      <div className="mx-auto max-w-3xl">
        <p className="eyebrow text-[color:var(--gold)]">Questions</p>
        <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
          Frequently asked questions
        </h2>

        <Accordion type="single" collapsible className="mt-12">
          {QA.map((item, i) => (
            <AccordionItem key={i} value={`q-${i}`} className="border-border/60">
              <AccordionTrigger className="text-left text-base font-medium hover:no-underline">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

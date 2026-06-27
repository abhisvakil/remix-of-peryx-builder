import { createFileRoute } from "@tanstack/react-router";
import { ThemeProvider } from "@/components/peryx/theme-provider";
import { Header } from "@/components/peryx/Header";
import { ScrollTrail } from "@/components/peryx/ScrollTrail";
import { Hero } from "@/components/peryx/Hero";
import { LiveInsights } from "@/components/peryx/LiveInsights";
import { Features } from "@/components/peryx/Features";
import { Partners } from "@/components/peryx/Partners";
import { Team } from "@/components/peryx/Team";
import { Advisors } from "@/components/peryx/Advisors";
import { FAQ } from "@/components/peryx/FAQ";
import { CTA } from "@/components/peryx/CTA";
import { Footer } from "@/components/peryx/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Peryx.ai — Operations Intelligence for Solar Fleets" },
      {
        name: "description",
        content:
          "Peryx.ai fuses physics-based modeling with machine learning to catch what dashboards miss — soiling, mismatch, drift, and failure, before they cost you generation.",
      },
      { property: "og:title", content: "Peryx.ai — Operations Intelligence for Solar Fleets" },
      {
        property: "og:description",
        content:
          "Physics-first solar plant performance monitoring and fault detection for enterprise energy operators.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground antialiased">
        <Header />
        <ScrollTrail />
        <main>
          <Hero />
          <LiveInsights />
          <Features />
          <Partners />
          <Team />
          <Advisors />
          <FAQ />
          <CTA />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

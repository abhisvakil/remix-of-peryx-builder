import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { PeryxMark } from "./PeryxLogo";
import { useTheme } from "./theme-provider";

const NAV = [
  { label: "Features", href: "#features" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        scrolled ? "border-b border-border/60 bg-background/70 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2.5">
          <PeryxMark size={20} />
          <span className="font-display text-base font-semibold tracking-tight">Peryx<span className="text-[color:var(--gold)]">.</span>ai</span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="eyebrow text-muted-foreground transition-colors hover:text-foreground"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <button
          onClick={toggle}
          aria-label="Toggle theme"
          className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border/60 text-muted-foreground transition-colors hover:text-foreground"
        >
          {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </button>
      </div>
    </header>
  );
}

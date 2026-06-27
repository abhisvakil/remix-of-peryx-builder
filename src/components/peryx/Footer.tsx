import { PeryxMark } from "./PeryxLogo";

export function Footer() {
  return (
    <footer className="border-t border-border/60 px-6 py-14">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div>
          <a href="#top" className="flex items-center gap-2.5">
            <PeryxMark size={20} />
            <span className="font-display text-base font-semibold tracking-tight">
              Peryx<span className="text-[color:var(--gold)]">.</span>ai
            </span>
          </a>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            Operations Intelligence for Solar Fleets
          </p>
        </div>

        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
          <div>
            <p className="eyebrow text-muted-foreground">Navigate</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#features" className="text-foreground/80 hover:text-foreground">Features</a></li>
              <li><a href="#team" className="text-foreground/80 hover:text-foreground">Team</a></li>
              <li><a href="#contact" className="text-foreground/80 hover:text-foreground">Contact</a></li>
            </ul>
          </div>
          <div>
            <p className="eyebrow text-muted-foreground">Contact</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li className="text-foreground/80">[EMAIL PLACEHOLDER]</li>
              <li className="text-muted-foreground">Ahmedabad, India</li>
            </ul>
          </div>
          <div>
            <p className="eyebrow text-muted-foreground">Social</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#" className="text-foreground/80 hover:text-foreground">LinkedIn</a></li>
              <li><a href="#" className="text-foreground/80 hover:text-foreground">Twitter / X</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-6xl border-t border-border/60 pt-6">
        <p className="text-xs text-muted-foreground">© 2026 Peryx.ai. All rights reserved.</p>
      </div>
    </footer>
  );
}

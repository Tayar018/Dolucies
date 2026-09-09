import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { PHONE_PRIMARY_HREF, PHONE_PRIMARY_LABEL } from "./site-data";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-border/70 bg-background/90 shadow-soft backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-3 sm:px-6">
        <a href="#topo" className="flex min-w-0 items-center gap-2">
          <span className="grid size-10 shrink-0 place-items-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
            D
          </span>
          <span className="min-w-0">
            <span className="block truncate font-display text-xl leading-none font-semibold text-foreground">
              Dolucies
            </span>
            <span className="block truncate text-[11px] tracking-[0.18em] text-muted-foreground uppercase">
              Confeitaria artesanal
            </span>
          </span>
        </a>

        <a
          href={PHONE_PRIMARY_HREF}
          className="inline-flex h-11 shrink-0 items-center gap-2 rounded-full bg-accent px-4 text-sm font-semibold text-accent-foreground shadow-soft transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98]"
        >
          <Phone className="size-4 shrink-0" />
          <span className="hidden sm:inline">{PHONE_PRIMARY_LABEL}</span>
          <span className="sm:hidden">Ligar</span>
        </a>
      </div>
    </header>
  );
}

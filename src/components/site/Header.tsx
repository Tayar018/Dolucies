import { useEffect, useState } from "react";
import { Phone, Instagram } from "lucide-react";
import { INSTAGRAM_HREF, PHONE_PRIMARY_HREF, PHONE_PRIMARY_LABEL } from "./site-data";
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
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <a href="#topo" className="flex min-w-0 items-center gap-2.5">
          <div className="relative size-10 shrink-0 overflow-hidden rounded-full border border-primary/20 bg-primary/10 shadow-sm">
            <img
              src="/instagram/profile-avatar.jpg"
              alt="Logo Dolucie's"
              width={40}
              height={40}
              className="size-full object-cover"
              onError={(e) => {
                (e.target as HTMLElement).style.display = "none";
              }}
            />
            <span className="absolute inset-0 grid place-items-center font-display text-lg font-bold text-primary">
              D
            </span>
          </div>
          <span className="min-w-0">
            <span className="block truncate font-display text-xl leading-none font-semibold text-foreground">
              Dolucies
            </span>
            <span className="block truncate text-[11px] tracking-[0.18em] text-muted-foreground uppercase">
              Confeitaria artesanal
            </span>
          </span>
        </a>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="#galeria"
            className="hidden text-sm font-medium text-muted-foreground transition-colors hover:text-foreground md:inline-block"
          >
            Fotos
          </a>

          <a
            href={INSTAGRAM_HREF}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram da Dolucies @doluciies"
            className="grid size-11 shrink-0 place-items-center rounded-full border border-border/80 bg-card text-foreground shadow-soft transition-all duration-200 hover:border-primary/40 hover:bg-primary/5 hover:text-primary active:scale-95"
          >
            <Instagram className="size-5" />
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
      </div>
    </header>
  );
}

import { Instagram } from "lucide-react";
import { CITIES, HOURS, INSTAGRAM_HANDLE, INSTAGRAM_HREF, PHONE_PRIMARY_HREF, PHONE_PRIMARY_LABEL } from "./site-data";

const LINKS = [
  { href: "#servicos", label: "Serviços" },
  { href: "#galeria", label: "Fotos no Instagram" },
  { href: "#sobre", label: "Por que a Dolucies" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#orcamento", label: "Orçamento" },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl font-semibold">Dolucies</p>
          <p className="mt-2 text-sm text-primary-foreground/70">
            Confeitaria artesanal em {CITIES}.
          </p>
          <a
            href={INSTAGRAM_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-3.5 py-1.5 text-xs font-semibold text-primary-foreground transition-all hover:border-primary-foreground/40 hover:bg-primary-foreground/20"
          >
            <Instagram className="size-3.5" />
            <span>Siga {INSTAGRAM_HANDLE}</span>
          </a>
        </div>

        <nav aria-label="Links rápidos">
          <p className="text-sm font-semibold">Links rápidos</p>
          <ul className="mt-3 space-y-2 text-sm text-primary-foreground/75">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors hover:text-accent">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="text-sm text-primary-foreground/75">
          <p className="font-semibold text-primary-foreground">Contato</p>
          <a href={PHONE_PRIMARY_HREF} className="mt-3 block transition-colors hover:text-accent">
            {PHONE_PRIMARY_LABEL}
          </a>
          <p className="mt-2">{HOURS}</p>
          <a
            href={INSTAGRAM_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-1.5 transition-colors hover:text-accent"
          >
            <Instagram className="size-3.5" />
            <span>{INSTAGRAM_HANDLE} no Instagram</span>
          </a>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <p className="mx-auto w-full max-w-6xl px-4 py-5 text-xs text-primary-foreground/60 sm:px-6">
          © {new Date().getFullYear()} Dolucies Confeitaria Artesanal. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}

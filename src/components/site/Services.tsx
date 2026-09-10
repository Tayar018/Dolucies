import { Sparkles, Cookie, ChefHat, Gift } from "lucide-react";
import { SERVICES } from "./site-data";

const ICONS = {
  sparkles: Sparkles,
  cookie: Cookie,
  chef: ChefHat,
  gift: Gift,
};

export function Services() {
  return (
    <section id="servicos" className="bg-background py-16 sm:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
              O que fazemos
            </span>
            <h2 className="mt-3 font-display text-3xl font-semibold text-foreground sm:text-4xl">
              Doces artesanais feitos com carinho
            </h2>
            <p className="mt-3 text-muted-foreground">
              Escolha as suas delícias favoritas — cuidamos de tudo, dos melhores ingredientes ao acabamento.
            </p>
          </div>
          <a
            href="#galeria"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
          >
            <span>Ver fotos do feed</span>
            <span aria-hidden="true">↓</span>
          </a>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) => {
            const Icon = ICONS[service.icon];
            return (
              <article
                key={service.title}
                className="group rounded-3xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/30"
              >
                <span className="grid size-12 place-items-center rounded-2xl bg-secondary text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="size-6" />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

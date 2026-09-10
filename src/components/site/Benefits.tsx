import { Check, Phone } from "lucide-react";
import { BENEFITS, PHONE_PRIMARY_HREF } from "./site-data";

export function Benefits() {
  return (
    <section id="sobre" className="bg-cream py-16 sm:py-20">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
        <div>
          <span className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
            Por que escolher a Dolucies
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-foreground sm:text-4xl">
            Confeitaria de verdade, feita por gente daqui
          </h2>

          <ul className="mt-8 space-y-5">
            {BENEFITS.map((benefit) => (
              <li key={benefit.title} className="flex min-w-0 gap-4">
                <span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                  <Check className="size-4" />
                </span>
                <div className="min-w-0">
                  <h3 className="font-semibold text-foreground">{benefit.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl border border-border bg-card p-7 text-center shadow-soft lg:w-80">
          <p className="font-display text-2xl font-semibold text-foreground">
            Vamos adoçar o seu dia?
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Fale agora com a nossa equipe e receba um orçamento sem compromisso.
          </p>
          <a
            href={PHONE_PRIMARY_HREF}
            className="mt-6 inline-flex h-13 w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-4 text-base font-semibold text-accent-foreground shadow-soft transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            <Phone className="size-5" />
            Ligar agora
          </a>
        </div>
      </div>
    </section>
  );
}

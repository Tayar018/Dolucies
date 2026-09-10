import { Phone, Star, MessageCircle } from "lucide-react";
import heroImg from "@/assets/hero-doces.jpg";
import { CITIES, PHONE_PRIMARY_HREF, WHATSAPP_HREF } from "./site-data";

export function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden bg-cream">
      <div className="pointer-events-none absolute -top-32 -right-24 size-80 rounded-full bg-accent/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-24 size-96 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-6xl gap-10 px-4 pt-10 pb-14 sm:px-6 md:grid-cols-2 md:items-center md:gap-12 md:pt-16 md:pb-20">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold tracking-wide text-primary">
            <Star className="size-3.5 fill-accent text-accent" />
            Artesanal • Feito na hora • Nota 4,9
          </span>

          <h1 className="mt-4 font-display text-4xl leading-[1.08] font-semibold text-foreground sm:text-5xl">
            Doces artesanais que deixam o seu dia mais doce em {CITIES}
          </h1>

          <p className="mt-4 max-w-prose text-base text-muted-foreground sm:text-lg">
            Brigadeiros gourmet, doces caseiros e sobremesas feitas à mão, com
            ingredientes selecionados e entrega no prazo combinado.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href={PHONE_PRIMARY_HREF}
              className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-primary px-7 text-base font-semibold text-primary-foreground shadow-glow transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Phone className="size-5" />
              Ligar agora
            </a>
            <a
              href="#orcamento"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-full border border-primary/25 bg-card px-7 text-base font-semibold text-foreground transition-colors duration-200 hover:bg-secondary"
            >
              <MessageCircle className="size-5" />
              Pedir orçamento
            </a>
          </div>

          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-sm font-medium text-primary underline underline-offset-4 transition-opacity hover:opacity-80"
          >
            Prefere WhatsApp? Fale com a gente
          </a>
        </div>

        <div className="animate-fade-up [animation-delay:120ms]">
          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card shadow-soft">
            <img
              src={heroImg}
              alt="Doces artesanais e brigadeiros gourmet da Dolucies"
              width={1280}
              height={1280}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

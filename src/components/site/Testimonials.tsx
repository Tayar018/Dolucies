import { useRef } from "react";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TESTIMONIALS } from "./site-data";

export function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollBy = (direction: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.9;
    el.scrollBy({ left: amount * direction, behavior: "smooth" });
  };

  return (
    <section id="depoimentos" className="bg-background py-16 sm:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
            Depoimentos
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-foreground sm:text-4xl">
            Quem prova, recomenda
          </h2>
        </div>

        <div
          ref={trackRef}
          className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {TESTIMONIALS.map((item) => (
            <figure
              key={item.name}
              className="flex min-w-[85%] snap-start flex-col rounded-3xl border border-border bg-card p-6 shadow-soft sm:min-w-[48%] lg:min-w-[32%]"
            >
              <div className="flex gap-1">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <Star key={i} className="size-4 fill-accent text-accent" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground">
                “{item.text}”
              </blockquote>
              <figcaption className="mt-5 border-t border-border pt-4">
                <span className="block font-semibold text-foreground">{item.name}</span>
                <span className="block text-xs text-muted-foreground">{item.city}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-6 flex justify-end gap-2">
          <Button
            variant="outline"
            size="icon"
            className="size-11 rounded-full"
            aria-label="Depoimento anterior"
            onClick={() => scrollBy(-1)}
          >
            <ArrowLeft className="size-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="size-11 rounded-full"
            aria-label="Próximo depoimento"
            onClick={() => scrollBy(1)}
          >
            <ArrowRight className="size-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}

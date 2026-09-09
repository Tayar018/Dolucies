import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { TESTIMONIALS } from "./site-data";

export function Testimonials() {
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

        <Carousel opts={{ align: "start", loop: true }} className="mt-10">
          <CarouselContent className="-ml-4">
            {TESTIMONIALS.map((item) => (
              <CarouselItem key={item.name} className="pl-4 sm:basis-1/2 lg:basis-1/3">
                <figure className="flex h-full flex-col rounded-3xl border border-border bg-card p-6 shadow-soft">
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
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="mt-6 flex justify-end gap-2">
            <CarouselPrevious className="static size-11 translate-y-0" />
            <CarouselNext className="static size-11 translate-y-0" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}

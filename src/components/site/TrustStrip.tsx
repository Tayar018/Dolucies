import { Star, MapPin, Heart, Clock } from "lucide-react";
import { CITIES } from "./site-data";

const ITEMS = [
  { icon: Star, label: "4,9 / 5", sub: "avaliação dos clientes" },
  { icon: Heart, label: "+1.200", sub: "encomendas entregues" },
  { icon: MapPin, label: "Atendimento local", sub: CITIES },
  { icon: Clock, label: "Entrega no prazo", sub: "combinada para o seu evento" },
];

export function TrustStrip() {
  return (
    <section className="border-y border-border bg-primary text-primary-foreground">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-2 gap-6 px-4 py-8 sm:px-6 lg:grid-cols-4">
        {ITEMS.map(({ icon: Icon, label, sub }) => (
          <div key={label} className="flex min-w-0 items-start gap-3">
            <Icon className="mt-0.5 size-5 shrink-0 text-accent" />
            <div className="min-w-0">
              <p className="text-sm font-semibold">{label}</p>
              <p className="text-xs text-primary-foreground/70">{sub}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

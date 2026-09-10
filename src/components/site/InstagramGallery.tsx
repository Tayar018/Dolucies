import { Instagram, ExternalLink, Sparkles, Heart } from "lucide-react";
import { INSTAGRAM_HANDLE, INSTAGRAM_HREF, INSTAGRAM_POSTS, WHATSAPP_HREF } from "./site-data";

export function InstagramGallery() {
  return (
    <section id="galeria" className="relative overflow-hidden bg-cream/70 py-16 sm:py-24">
      {/* Soft background accents */}
      <div className="pointer-events-none absolute top-1/4 -left-20 size-72 rounded-full bg-accent/15 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 -right-20 size-80 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6">
        {/* Header section with brand & Instagram profile badge */}
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-[0.2em] text-accent uppercase">
              <Sparkles className="size-3.5" />
              Direto do nosso feed
            </span>
            <h2 className="mt-3 font-display text-3xl font-semibold text-foreground sm:text-4xl">
              Fotos reais dos nossos doces no Instagram
            </h2>
            <p className="mt-3 text-base text-muted-foreground">
              Acompanhe a produção artesanal diária, novidades do cardápio e encomendas saindo do forno
              no perfil{" "}
              <a
                href={INSTAGRAM_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline underline-offset-4 transition-colors hover:text-primary/80"
              >
                {INSTAGRAM_HANDLE}
              </a>
              .
            </p>
          </div>

          {/* Profile mini-card / CTA button */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={INSTAGRAM_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-full border border-border/80 bg-card p-1.5 pr-5 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md"
            >
              <img
                src="/instagram/profile-avatar.jpg"
                alt="Logo Dolucie's Confeitaria Caseira"
                width={40}
                height={40}
                className="size-10 rounded-full object-cover ring-2 ring-primary/20 transition-transform duration-300 group-hover:scale-105"
                onError={(e) => {
                  // Fallback to letter avatar if needed
                  (e.target as HTMLElement).style.display = "none";
                }}
              />
              <div className="text-left">
                <span className="block text-xs font-semibold text-foreground">Dolucie&apos;s</span>
                <span className="block text-[11px] text-muted-foreground">{INSTAGRAM_HANDLE}</span>
              </div>
              <span className="ml-2 grid size-7 place-items-center rounded-full bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                <Instagram className="size-4" />
              </span>
            </a>

            <a
              href={INSTAGRAM_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-soft transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Instagram className="size-4" />
              Seguir no Instagram
            </a>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {INSTAGRAM_POSTS.map((post) => (
            <article
              key={post.id}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-border/80 bg-card shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-lg"
            >
              {/* Image Container with zoom and overlay */}
              <div className="relative aspect-square w-full overflow-hidden bg-muted">
                <img
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                  width={640}
                  height={640}
                  className="size-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />

                {/* Gradient vignette for better readability */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-black/20 opacity-40 transition-opacity duration-300 group-hover:opacity-60" />

                {/* Category tag */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1 rounded-full bg-background/90 px-3 py-1 text-xs font-semibold text-foreground shadow-sm backdrop-blur-md">
                    {post.tag}
                  </span>
                </div>

                {/* Instagram Icon Badge */}
                <a
                  href={post.postUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Ver publicação de ${post.title} no Instagram`}
                  className="absolute top-4 right-4 grid size-9 place-items-center rounded-full bg-black/40 text-white backdrop-blur-md transition-transform duration-300 hover:scale-110 hover:bg-primary"
                >
                  <Instagram className="size-4" />
                </a>

                {/* Hover overlay button */}
                <div className="pointer-events-none absolute inset-x-4 bottom-4 flex translate-y-2 items-center justify-between opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3.5 py-1.5 text-xs font-semibold text-foreground shadow-soft backdrop-blur-md">
                    Ver publicação
                    <ExternalLink className="size-3 text-primary" />
                  </span>
                  <span className="grid size-8 place-items-center rounded-full bg-white/95 text-rose-500 shadow-soft">
                    <Heart className="size-4 fill-rose-500" />
                  </span>
                </div>
              </div>

              {/* Text & Post Content */}
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
                  {post.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {post.description}
                </p>

                <div className="mt-4 flex items-center justify-between border-t border-border/60 pt-3">
                  <a
                    href={post.postUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-primary transition-colors hover:text-primary/80"
                  >
                    <span>Abrir no Instagram</span>
                    <ExternalLink className="size-3" />
                  </a>

                  <a
                    href={`${WHATSAPP_HREF}%20Vi%20a%20foto%20do%20${encodeURIComponent(post.title)}%20e%20gostaria%20de%20encomendar!`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Encomendar este
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom invitation strip */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 rounded-3xl border border-primary/20 bg-card p-6 shadow-soft sm:flex-row sm:p-8">
          <div>
            <h4 className="font-display text-xl font-semibold text-foreground">
              Gostou de algum dos doces do nosso feed?
            </h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Fazemos encomendas personalizadas para festas, cafés da tarde e presentes especiais.
            </p>
          </div>
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-accent px-6 text-sm font-semibold text-accent-foreground shadow-soft transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            Fazer pedido pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

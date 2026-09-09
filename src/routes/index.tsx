import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { TrustStrip } from "@/components/site/TrustStrip";
import { Services } from "@/components/site/Services";
import { Benefits } from "@/components/site/Benefits";
import { Testimonials } from "@/components/site/Testimonials";
import { ContactSection } from "@/components/site/ContactSection";
import { Footer } from "@/components/site/Footer";

const TITLE = "Dolucies | Confeitaria artesanal em São José dos Campos";
const DESCRIPTION =
  "Bolos personalizados, doces caseiros e mesas de doces artesanais em São José dos Campos e Pindamonhangaba. Peça seu orçamento pelo telefone (12) 99788-5557.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Bakery",
  name: "Dolucies",
  description: DESCRIPTION,
  telephone: ["+55-12-99788-5557", "+55-12-99743-4202"],
  areaServed: ["São José dos Campos", "Pindamonhangaba"],
  openingHours: "Mo-Sa 08:00-18:00",
  priceRange: "$$",
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "128" },
};

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }} />
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <Services />
        <Benefits />
        <Testimonials />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

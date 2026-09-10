export const PHONE_PRIMARY_LABEL = "(12) 99788-5557";
export const PHONE_PRIMARY_HREF = "tel:+5512997885557";
export const PHONE_SECONDARY_LABEL = "(12) 99743-4202";
export const PHONE_SECONDARY_HREF = "tel:+5512997434202";
export const WHATSAPP_HREF =
  "https://wa.me/5512997885557?text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20uma%20encomenda%20na%20Dolucies";
export const CITIES = "São José dos Campos e Pindamonhangaba";
export const HOURS = "Segunda a sábado, das 8h às 18h";
export const INSTAGRAM_HREF = "https://www.instagram.com/doluciies/";
export const INSTAGRAM_HANDLE = "@doluciies";

export interface InstagramPost {
  id: string;
  postUrl: string;
  image: string;
  title: string;
  description: string;
  tag: string;
}

export const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: "bolo-alagado",
    postUrl: "https://www.instagram.com/p/C0ehY0Pgz0t/",
    image: "/instagram/bolo-alagado-ninho.jpg",
    title: "Bolo alagado de Leite Ninho com Morango",
    description: "Um dos grandes queridinhos da Dolucies, bem molhadinho, decorado com flores de chantilly e morangos frescos.",
    tag: "Bolos",
  },
  {
    id: "torta-morango",
    postUrl: "https://www.instagram.com/p/CzfYZe6MMLY/",
    image: "/instagram/torta-morango.jpg",
    title: "Torta artesanal de Morango",
    description: "Morangos selecionados, geleia brilhante e base crocante para comemorações e sobremesas especiais.",
    tag: "Tortas",
  },
  {
    id: "brownies",
    postUrl: "https://www.instagram.com/p/C0xZRgFMULg/",
    image: "/instagram/brownies-gourmet.jpg",
    title: "Brownies artesanais com gotas de chocolate",
    description: "Massa fofinha por dentro com casquinha crocante e gotas generosas de puro chocolate.",
    tag: "Brownies",
  },
  {
    id: "doces-artesanais",
    postUrl: "https://www.instagram.com/p/DcHJo0umuoT/",
    image: "/instagram/doces-artesanais-gabi.jpg",
    title: "Doces artesanais feitos com carinho",
    description: "Confeitaria artesanal pensada para acompanhar o seu café, trabalho ou comemoração em família.",
    tag: "Doces",
  },
  {
    id: "bolo-artesanal",
    postUrl: "https://www.instagram.com/reel/C4UKpmLNAWD/",
    image: "/instagram/bolo-artesanal.jpg",
    title: "Bolo confeitado à mão",
    description: "Finalização delicada com morangos frescos e pérolas de açúcar confeitadas na hora.",
    tag: "Confeitaria",
  },
  {
    id: "lanches-especiais",
    postUrl: "https://www.instagram.com/p/C3WUKcQIIal/",
    image: "/instagram/salgados-lanches.jpg",
    title: "Lanches artesanais fresquinhos",
    description: "Opções deliciosas preparadas com ingredientes leves e selecionados para qualquer ocasião.",
    tag: "Especiais",
  },
];

export const SERVICES = [
  {
    icon: "sparkles" as const,
    title: "Brigadeiros gourmet",
    description:
      "Brigadeiros artesanais feitos com chocolate nobre e diversos sabores irresistíveis.",
  },
  {
    icon: "cookie" as const,
    title: "Doces caseiros",
    description:
      "Palhas italianas, trufas, tortas e docinhos preparados com receita de família.",
  },
  {
    icon: "chef" as const,
    title: "Confeitaria artesanal",
    description:
      "Produção 100% artesanal, com ingredientes selecionados e acabamento feito à mão.",
  },
  {
    icon: "gift" as const,
    title: "Caixas e presentes",
    description:
      "Kits especiais e caixinhas de doces para presentear quem você ama ou saborear quando quiser.",
  },
];

export const BENEFITS = [
  {
    title: "Produção artesanal, sempre fresca",
    description:
      "Cada encomenda é preparada perto da data de entrega, sem industrializados e sem congelamento.",
  },
  {
    title: "Atendimento local e próximo",
    description: `Somos daqui: atendemos ${CITIES} com contato direto por telefone e WhatsApp.`,
  },
  {
    title: "Ingredientes selecionados e prazo cumprido",
    description:
      "Chocolate nobre, frutas frescas e compromisso com o horário combinado para a sua entrega.",
  },
];

export const TESTIMONIALS = [
  {
    name: "Ana Paula R.",
    city: "São José dos Campos",
    rating: 5,
    text: "Os doces artesanais são perfeitos, lindos e deliciosos. O brigadeiro de pistache e a palha italiana conquistaram todo mundo aqui em casa!",
  },
  {
    name: "Marcos T.",
    city: "Pindamonhangaba",
    rating: 5,
    text: "Encomendei uma caixa especial de doces para presentear. Chegou super fresco, caprichado e o sabor era de outro mundo. Recomendo demais.",
  },
  {
    name: "Juliana M.",
    city: "São José dos Campos",
    rating: 5,
    text: "Os brigadeiros gourmet são os melhores que já comi na região. Atendimento super atencioso do início ao fim.",
  },
  {
    name: "Rafael S.",
    city: "Pindamonhangaba",
    rating: 5,
    text: "Peço sempre para sobremesas em família e cafés da tarde. Qualidade constante e entrega pontual, nunca tive problema.",
  },
];

export const SERVICE_OPTIONS = [
  "Brigadeiros gourmet",
  "Doces caseiros",
  "Sobremesas e tortas",
  "Kits e caixas para presente",
  "Encomenda personalizada",
  "Outro",
];

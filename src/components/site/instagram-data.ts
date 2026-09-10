// Real photos from @doluciies Instagram
export interface InstagramPost {
  id: string;
  postUrl: string;
  image: string;
  title: string;
  description: string;
  tag: string;
}

export const INSTAGRAM_PROFILE_URL = "https://www.instagram.com/doluciies/";
export const INSTAGRAM_HANDLE = "@doluciies";

export const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: "brownies",
    postUrl: "https://www.instagram.com/p/C0xZRgFMULg/",
    image: "/instagram/brownies-gourmet.jpg",
    title: "Brownies artesanais com gotas de chocolate",
    description: "Produção fresquinha e textura macia com muito chocolate nobre.",
    tag: "Brownies",
  },
  {
    id: "bolo-alagado",
    postUrl: "https://www.instagram.com/p/C0ehY0Pgz0t/",
    image: "/instagram/bolo-alagado-ninho.jpg",
    title: "Bolo alagado de Leite Ninho com Morango",
    description: "Um dos grandes queridinhos da Dolucies, super molhadinho e saboroso.",
    tag: "Bolos",
  },
  {
    id: "torta-morango",
    postUrl: "https://www.instagram.com/p/CzfYZe6MMLY/",
    image: "/instagram/torta-morango.jpg",
    title: "Torta artesanal de Morango",
    description: "Morangos selecionados e creme especial feito à mão para comemorações.",
    tag: "Tortas",
  },
  {
    id: "doces-artesanais",
    postUrl: "https://www.instagram.com/p/DcHJo0umuoT/",
    image: "/instagram/doces-artesanais-gabi.jpg",
    title: "Doces artesanais feitos com amor e carinho",
    description: "Produção artesanal com receitas exclusivas para adoçar momentos especiais.",
    tag: "Doces Artesanais",
  },
  {
    id: "tortas-especiais",
    postUrl: "https://www.instagram.com/p/C1R7K0fAlRR/",
    image: "/instagram/tortas-especiais.jpg",
    title: "Tortas doces para festas e ceias",
    description: "Sobremesas completas preparadas com todo carinho para a sua família.",
    tag: "Sobremesas",
  },
  {
    id: "bolo-artesanal",
    postUrl: "https://www.instagram.com/reel/C4UKpmLNAWD/",
    image: "/instagram/bolo-artesanal.jpg",
    title: "Nossos bolos artesanais exclusivos",
    description: "Sabor inconfundível com decoração delicada e recheio generoso.",
    tag: "Confeitaria",
  },
];

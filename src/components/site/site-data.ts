export const PHONE_PRIMARY_LABEL = "(12) 99788-5557";
export const PHONE_PRIMARY_HREF = "tel:+5512997885557";
export const PHONE_SECONDARY_LABEL = "(12) 99743-4202";
export const PHONE_SECONDARY_HREF = "tel:+5512997434202";
export const WHATSAPP_HREF =
  "https://wa.me/5512997885557?text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20uma%20encomenda%20na%20Dolucies";
export const CITIES = "São José dos Campos e Pindamonhangaba";
export const HOURS = "Segunda a sábado, das 8h às 18h";

export const SERVICES = [
  {
    icon: "cake" as const,
    title: "Bolos personalizados",
    description:
      "Bolos de aniversário, casamento e temáticos, feitos sob medida para a sua data especial.",
  },
  {
    icon: "cookie" as const,
    title: "Doces caseiros",
    description:
      "Brigadeiros gourmet, bem-casados, tortas e docinhos feitos com receita de família.",
  },
  {
    icon: "chef" as const,
    title: "Confeitaria artesanal",
    description:
      "Produção 100% artesanal, com ingredientes selecionados e acabamento feito à mão.",
  },
  {
    icon: "party" as const,
    title: "Festas e eventos",
    description:
      "Mesa de doces completa para festas, formaturas e eventos corporativos na região.",
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
      "Chocolate nobre, frutas frescas e compromisso com o horário combinado para o seu evento.",
  },
];

export const TESTIMONIALS = [
  {
    name: "Ana Paula R.",
    city: "São José dos Campos",
    rating: 5,
    text: "O bolo do aniversário da minha filha ficou perfeito, lindo e delicioso. Todo mundo pediu o contato da Dolucies!",
  },
  {
    name: "Marcos T.",
    city: "Pindamonhangaba",
    rating: 5,
    text: "Encomendei a mesa de doces do meu casamento. Chegou no horário e o sabor era de outro mundo. Recomendo demais.",
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
    text: "Peço sempre para os eventos da empresa. Qualidade constante e entrega pontual, nunca tive problema.",
  },
];

export const SERVICE_OPTIONS = [
  "Bolo personalizado",
  "Doces para festa",
  "Mesa de doces / evento",
  "Encomenda corporativa",
  "Outro",
];

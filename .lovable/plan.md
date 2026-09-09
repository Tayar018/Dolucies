# Dolucies — microsite de uma página (pt-BR)

Site único, rápido e feito primeiro para celular, com um objetivo: fazer o cliente ligar ou enviar o formulário.

## Identidade visual

- Paleta: verde folha/pistache com marrom chocolate, fundo creme claro, detalhes em dourado suave.
- Tipografia: título com serifa elegante, texto em sem-serifa legível.
- Cantos arredondados, sombras suaves, transições discretas ao rolar e ao passar o dedo/mouse.
- Botões grandes (fáceis de tocar), sem rolagem lateral em nenhuma tela.

## Seções da página

1. **Topo fixo** — logo Dolucies à esquerda; botão "Ligar (12) 99788-5557" à direita, que disca direto no celular. Fica grudado no topo ao rolar.
2. **Destaque (hero)** — título voltado para São José dos Campos e Pindamonhangaba, subtítulo curto, botão principal "Ligar agora" e botão secundário "Pedir orçamento" (rola até o formulário). Selo de confiança: "Artesanal • Feito na hora • Nota 4,9".
3. **Faixa de confiança** — avaliação 4,9/5, número de encomendas entregues, atendimento nas duas cidades.
4. **Produtos e serviços** — 4 cartões com ícone e descrição curta: Confeitaria artesanal, Doces caseiros, Bolos personalizados, Encomendas para festas e eventos.
5. **Por que escolher a Dolucies** — 3 vantagens: produção artesanal, atendimento local nas duas cidades, ingredientes selecionados e entrega no prazo.
6. **Depoimentos** — carrossel com nomes, estrelas e comentários, avançando por toque/arraste e por setas.
7. **Contato e orçamento** — formulário simples (Nome, Telefone, Serviço desejado, Mensagem) com validação amigável e mensagem de sucesso; ao lado, horário 8h às 18h, telefones (12) 99743-4202 e (12) 99788-5557, e as cidades atendidas.
8. **Rodapé** — direitos autorais, links rápidos para as seções e informações da doceria.

## Observações

- Os depoimentos, a nota 4,9 e os números da faixa de confiança serão exemplos que escrevi; me envie os textos reais das avaliações para eu substituir.
- Não tenho o endereço físico nem CNPJ/licença — por enquanto vou mostrar apenas as cidades atendidas e os telefones. Se me passar o endereço, incluo com mapa.
- O formulário, por enquanto, apenas valida e mostra confirmação na tela (sem enviar e-mail nem salvar). Se quiser receber os pedidos por e-mail ou guardá-los, dá para ativar depois.

## Detalhes técnicos

- Página única em `src/routes/index.tsx`, componentes separados em `src/components/site/` (Header, Hero, TrustStrip, Services, Benefits, Testimonials, ContactForm, Footer).
- Tokens de cor/tipografia definidos em `src/styles.css` (`@theme inline` + `:root`), em oklch; sem cores fixas nos componentes.
- Formulário com react-hook-form + zod e estado de sucesso; toasts via sonner (`<Toaster />` no `__root.tsx`).
- Carrossel com o componente de carousel do shadcn.
- SEO: `head()` próprio na rota `/` com título e descrição em pt-BR citando São José dos Campos e Pindamonhangaba, JSON-LD de negócio local, um único H1, imagens com texto alternativo e carregamento tardio.

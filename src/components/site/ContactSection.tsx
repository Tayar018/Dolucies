import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, Clock, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  CITIES,
  HOURS,
  PHONE_PRIMARY_HREF,
  PHONE_PRIMARY_LABEL,
  PHONE_SECONDARY_HREF,
  PHONE_SECONDARY_LABEL,
  SERVICE_OPTIONS,
} from "./site-data";

const schema = z.object({
  nome: z.string().trim().min(2, "Informe o seu nome completo.").max(80),
  telefone: z
    .string()
    .trim()
    .min(10, "Informe um telefone com DDD.")
    .max(20)
    .regex(/^[0-9()\-\s+]+$/, "Use apenas números, espaços e parênteses."),
  servico: z.string().min(1, "Selecione o serviço desejado."),
  mensagem: z.string().trim().max(600).optional(),
});

type FormValues = z.infer<typeof schema>;

export function ContactSection() {
  const [enviado, setEnviado] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { nome: "", telefone: "", servico: "", mensagem: "" },
  });

  const onSubmit = (values: FormValues) => {
    setEnviado(true);
    toast.success("Pedido enviado!", {
      description: `Obrigado, ${values.nome.split(" ")[0]}. Entraremos em contato em breve.`,
    });
    form.reset();
  };

  return (
    <section id="orcamento" className="bg-cream py-16 sm:py-20">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
        <div className="rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8">
          <span className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
            Orçamento rápido
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-foreground">
            Peça o seu orçamento
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Preencha os dados e retornamos pelo telefone informado.
          </p>

          {enviado ? (
            <div className="mt-8 flex flex-col items-center gap-3 rounded-2xl border border-primary/20 bg-secondary p-8 text-center">
              <CheckCircle2 className="size-10 text-primary" />
              <p className="font-display text-xl font-semibold text-foreground">
                Pedido enviado com sucesso!
              </p>
              <p className="text-sm text-muted-foreground">
                Vamos entrar em contato em breve. Se preferir, ligue agora mesmo.
              </p>
              <div className="mt-2 flex flex-col gap-2 sm:flex-row">
                <a
                  href={PHONE_PRIMARY_HREF}
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02]"
                >
                  <Phone className="size-4" /> Ligar agora
                </a>
                <button
                  type="button"
                  onClick={() => setEnviado(false)}
                  className="inline-flex h-12 items-center justify-center rounded-full border border-border bg-card px-6 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
                >
                  Enviar outro pedido
                </button>
              </div>
            </div>
          ) : (
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="mt-7 space-y-5">
                <FormField
                  control={form.control}
                  name="nome"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nome</FormLabel>
                      <FormControl>
                        <Input placeholder="Seu nome completo" className="h-12" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="telefone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Telefone / WhatsApp</FormLabel>
                      <FormControl>
                        <Input
                          type="tel"
                          inputMode="tel"
                          placeholder="(12) 99999-9999"
                          className="h-12"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="servico"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Serviço desejado</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger className="h-12 w-full">
                            <SelectValue placeholder="Escolha uma opção" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {SERVICE_OPTIONS.map((option) => (
                            <SelectItem key={option} value={option}>
                              {option}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="mensagem"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mensagem (opcional)</FormLabel>
                      <FormControl>
                        <Textarea
                          rows={4}
                          placeholder="Conte a data, a quantidade e os sabores que deseja"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <button
                  type="submit"
                  className="inline-flex h-14 w-full items-center justify-center rounded-full bg-primary text-base font-semibold text-primary-foreground shadow-glow transition-transform duration-200 hover:scale-[1.01] active:scale-[0.99]"
                >
                  Enviar pedido de orçamento
                </button>
              </form>
            </Form>
          )}
        </div>

        <aside className="space-y-4">
          <div className="rounded-3xl border border-border bg-card p-6 shadow-soft">
            <h3 className="font-display text-xl font-semibold text-foreground">Fale com a gente</h3>
            <div className="mt-4 space-y-3 text-sm">
              <a
                href={PHONE_PRIMARY_HREF}
                className="flex items-center gap-3 font-semibold text-foreground transition-colors hover:text-primary"
              >
                <Phone className="size-4 shrink-0 text-primary" />
                {PHONE_PRIMARY_LABEL}
              </a>
              <a
                href={PHONE_SECONDARY_HREF}
                className="flex items-center gap-3 font-semibold text-foreground transition-colors hover:text-primary"
              >
                <Phone className="size-4 shrink-0 text-primary" />
                {PHONE_SECONDARY_LABEL}
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-card p-6 shadow-soft">
            <h3 className="font-display text-xl font-semibold text-foreground">
              Horário de atendimento
            </h3>
            <p className="mt-3 flex items-start gap-3 text-sm text-muted-foreground">
              <Clock className="mt-0.5 size-4 shrink-0 text-primary" />
              {HOURS}
            </p>
          </div>

          <div className="rounded-3xl border border-border bg-card p-6 shadow-soft">
            <h3 className="font-display text-xl font-semibold text-foreground">
              Onde atendemos
            </h3>
            <p className="mt-3 flex items-start gap-3 text-sm text-muted-foreground">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
              {CITIES} e região do Vale do Paraíba. Encomendas com retirada combinada ou entrega.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}

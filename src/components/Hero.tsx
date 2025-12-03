import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-forest.png";

const highlights = ["Ingredientes puros", "Processos certificados", "Entrega para todo o Brasil"];

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background via-nature-light to-background">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -right-10 h-72 w-72 rounded-full bg-secondary/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div className="space-y-8 max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              Theralife • Produtos naturais
            </div>

            <div className="space-y-6">
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary leading-tight"
                style={{ fontFamily: "Outfit, sans-serif" }}
              >
                Bem-estar natural focado em resultados reais.
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground">
                Fórmulas limpas, estoques sempre frescos e um atendimento consultivo para você escolher o suplemento ideal sem complicação.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              {highlights.map((item) => (
                <span key={item} className="inline-flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                  {item}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <Button
                variant="hero"
                size="lg"
                className="w-full sm:w-auto"
                onClick={() => document.getElementById("produtos")?.scrollIntoView({ behavior: "smooth" })}
              >
                Conhecer produtos
              </Button>
              <Button
                variant="whatsapp"
                size="lg"
                className="w-full sm:w-auto"
                onClick={() => window.open("https://wa.me/91991585004", "_blank")}
              >
                <MessageCircle className="w-4 h-4" />
                Falar no WhatsApp
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden border border-border bg-card/60 shadow-strong">
              <img
                src={heroImage}
                alt="Produtos naturais Theralife"
                className="w-full h-[380px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-forest-dark/30 to-transparent" />
            </div>
            <div className="absolute -bottom-6 left-8 right-8 bg-card border border-border rounded-2xl shadow-soft p-4 flex items-center justify-between text-sm">
              <div>
                <p className="text-xs uppercase tracking-wide text-muted-foreground">Entrega expressa</p>
                <p className="text-lg font-semibold text-primary">Todo Brasil</p>
              </div>
              <div className="h-10 w-px bg-border" />
              <div>
                <p className="text-xs uppercase tracking-wide text-muted-foreground">Satisfação</p>
                <p className="text-lg font-semibold text-primary">Garantida</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import { Button } from "@/components/ui/button";
import { Leaf, MessageCircle } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-mint-soft/30 to-nature-light relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-primary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-up">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-secondary/20 backdrop-blur-sm border-2 border-secondary/30 shadow-glow mb-6 sm:mb-8 animate-float">
            <Leaf className="w-8 h-8 sm:w-10 sm:h-10 text-secondary" />
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4 sm:mb-6 px-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
            Comece hoje a transformar sua saúde com produtos naturais de verdade
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-8 sm:mb-10 max-w-2xl mx-auto px-4">
            Descubra o poder da natureza e sinta a diferença em sua energia, disposição e bem-estar
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center px-4">
            <Button
              variant="hero"
              size="xl"
              className="w-full sm:w-auto"
              onClick={() => window.open('https://wa.me/559891816061', '_blank')}
            >
              <MessageCircle className="w-5 h-5" />
              Quero meus produtos
            </Button>
            <Button
              variant="outline"
              size="xl"
              className="w-full sm:w-auto"
              onClick={() => document.getElementById('catalogo-completo')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Ver catálogo completo
            </Button>
          </div>

          {/* Trust badges */}
          <div className="mt-8 sm:mt-12 flex flex-wrap justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-muted-foreground px-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-secondary rounded-full" />
              <span>Produtos 100% Naturais</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-secondary rounded-full" />
              <span>Entrega Rápida</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-secondary rounded-full" />
              <span>Suporte Humanizado</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;

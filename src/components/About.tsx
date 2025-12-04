import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import womanImg from "@/assets/novas-images/woman.webp";

interface AboutProps {
  whatsappLink?: string;
}

const About = ({ whatsappLink = "https://wa.me/91991585004" }: AboutProps) => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-background to-nature-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* Photo */}
            <div className="flex-shrink-0">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-secondary/20 shadow-strong">
                <img
                  src={womanImg}
                  alt="Proprietária Theralife"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 text-center md:text-left space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground mb-2">
                Sobre quem vende
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-primary" style={{ fontFamily: "Outfit, sans-serif" }}>
                Conheça quem cuida da sua saúde
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Com anos de experiência e dedicação, trabalho para trazer até você os melhores produtos naturais do mercado.
                Cada item é cuidadosamente selecionado pensando no seu bem-estar e resultados reais.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Estou aqui para te ajudar a encontrar o suplemento ideal para suas necessidades.
                Converse comigo e vamos juntos transformar sua saúde!
              </p>
              <Button
                variant="whatsapp"
                size="lg"
                className="mt-4"
                onClick={() => window.open(whatsappLink, "_blank")}
              >
                <MessageCircle className="w-4 h-4" />
                Falar comigo no WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;


import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import desunchaImg from "@/assets/images/desuncha.jpg";
import detox4Img from "@/assets/images/Detox4.jpg";
import extreme3Img from "@/assets/images/extreme3.jpg";
import lipocha2Img from "@/assets/images/Lipochá-2.jpg";
import newQueenImg from "@/assets/images/New-Queen.jpg";
import safiraBeautyImg from "@/assets/images/safira-beauty.jpg";
import saudeImg from "@/assets/images/saude.jpg";
import sejeImg from "@/assets/images/seje.jpg";
import glicoVitaImg from "@/assets/images/glico-vita.jpg";
import chaVerdeNewImg from "@/assets/images/cha-verde.jpg";

const Products = () => {
  const WHATSAPP_LINK = "https://wa.me/559891816061";

  const products = [
    {
      name: "Desunchá",
      images: [desunchaImg],
      whatsappLink: WHATSAPP_LINK,
    },
    {
      name: "Chá Verde",
      images: [chaVerdeNewImg],
      whatsappLink: WHATSAPP_LINK,
    },
    {
      name: "Extreme",
      images: [extreme3Img],
      whatsappLink: WHATSAPP_LINK,
    },
    {
      name: "Detox",
      images: [detox4Img],
      whatsappLink: WHATSAPP_LINK,
    },
    {
      name: "Lipochá",
      images: [lipocha2Img, lipocha2Img],
      whatsappLink: WHATSAPP_LINK,
    },
    {
      name: "Sene - Nutrilife",
      images: [sejeImg],
      whatsappLink: WHATSAPP_LINK,
    },
    {
      name: "Glico Vita",
      images: [glicoVitaImg],
      whatsappLink: WHATSAPP_LINK,
    },
    {
      name: "New Queen Energy",
      images: [newQueenImg],
      whatsappLink: WHATSAPP_LINK,
    },
    {
      name: "Safira Beauty",
      images: [safiraBeautyImg],
      whatsappLink: WHATSAPP_LINK,
    },
    {
      name: "Saúde Essencial",
      images: [saudeImg],
      whatsappLink: WHATSAPP_LINK,
    },
  ];

  const extraMarqueeNames = [
    "Colágeno",
    "Glico Vita",
    "Cartilagem",
    "Mulungu",
    "Morosil",
    "Barbatimão",
    "Detox",
    "Desunchá",
    "Tribulus",
    "Carvão Ativado",
    "Seca Barriga",
    "MagriSbelt",
    "Sene",
    "Black Tribulus",
    "Chá Verde",
    "Pré Treino",
    "Creatina",
    "Safira Beauty",
    "termo.Ox",
    "Glucomannan",
    "Calmante",
    "Ashwagandha",
  ];

  const productNames = products.map((product) => product.name);
  const normalizedProductNames = productNames.map((name) => name.toLowerCase());

  const uniqueExtras = extraMarqueeNames.filter(
    (name) => !normalizedProductNames.includes(name.toLowerCase())
  );

  const marqueeNames = [...productNames, ...uniqueExtras];
  const marqueeItems = [...marqueeNames, ...marqueeNames];

  return (
    <section id="produtos" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-nature-light to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4 px-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
            Nossos Produtos
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Suplementos naturais cuidadosamente selecionados para sua saúde e bem-estar
          </p>
          <div className="w-16 sm:w-20 h-1 bg-gradient-accent rounded-full mx-auto mt-6" />
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
          {products.map((product, index) => (
            <div
              key={product.name}
              className="animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>

        {/* Brand Note */}
        <div className="text-center mt-8 sm:mt-12 p-4 sm:p-6 bg-accent rounded-xl sm:rounded-2xl max-w-3xl mx-auto shadow-soft">
          <p className="text-sm sm:text-base text-muted-foreground">
            Trabalhamos com a linha <span className="font-semibold text-primary">Nutrilife</span>,
            marca reconhecida por sua excelência em produtos naturais e suplementos de alta qualidade.
          </p>
        </div>

        {/* Catalog CTA */}
        <div id="catalogo-completo" className="mt-10 sm:mt-14 text-center">
          <div className="inline-flex flex-col gap-4 sm:gap-5 bg-card border border-border shadow-soft rounded-2xl px-6 py-6 sm:px-10 sm:py-8 max-w-2xl">
            <h3 className="text-2xl font-semibold text-primary" style={{ fontFamily: "Outfit, sans-serif" }}>
              Quer ver o catálogo completo?
            </h3>
            <p className="text-muted-foreground">
              Descubra todos os lançamentos, kits especiais e condições exclusivas falando direto com nossa equipe.
            </p>
            <Button
              size="lg"
              className="w-full sm:w-auto"
              onClick={() => window.open(WHATSAPP_LINK, "_blank")}
            >
              Ver catálogo no WhatsApp
            </Button>
          </div>
        </div>

        {/* Products Marquee */}
        <div className="mt-10 sm:mt-12 overflow-hidden border border-border bg-card rounded-full shadow-soft">
          <div className="marquee-track flex items-center gap-8 sm:gap-10 py-4 px-6">
            {marqueeItems.map((name, index) => (
              <span
                key={`${name}-${index}`}
                className="text-xs sm:text-sm font-semibold uppercase tracking-wide text-primary whitespace-nowrap"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;

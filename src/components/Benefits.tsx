import { Leaf, Pill, Heart, FlaskConical, Truck, MessageCircle } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: Leaf,
      title: "100% Naturais",
      description: "Produtos extraídos da natureza"
    },
    {
      icon: Pill,
      title: "Alta Qualidade",
      description: "Suplementos premium certificados"
    },
    {
      icon: Heart,
      title: "Saúde Completa",
      description: "Digestão, detox e energia"
    },
    {
      icon: FlaskConical,
      title: "Certificados",
      description: "Processos testados e aprovados"
    },
    {
      icon: Truck,
      title: "Envio Rápido",
      description: "Entrega em todo Brasil"
    },
    {
      icon: MessageCircle,
      title: "Suporte Direto",
      description: "Atendimento via WhatsApp"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-background to-accent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4 px-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
            Por Que Escolher a Theralife?
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-accent rounded-full mx-auto mt-6" />
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={benefit.title}
                className="group p-6 sm:p-8 bg-card rounded-xl sm:rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-accent flex items-center justify-center mb-4 sm:mb-6 shadow-soft group-hover:shadow-glow group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-primary mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  {benefit.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;

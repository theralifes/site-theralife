import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      location: "Belém, Pará",
      text: "Os produtos da Theralife transformaram minha rotina. Sinto muito mais energia e disposição no dia a dia!",
      rating: 5
    },
    {
      name: "João Santos",
      location: "Belém, Pará",
      text: "Qualidade excepcional! O Carvão Ativado realmente ajudou com minha digestão. Recomendo muito!",
      rating: 5
    },
    {
      name: "Ana Costa",
      location: "Belém, Pará",
      text: "Produtos naturais de verdade. O atendimento é excelente e a entrega foi super rápida.",
      rating: 5
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-accent to-nature-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4 px-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
            O Que Dizem Nossos Clientes
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Histórias reais de pessoas que transformaram sua saúde com a Theralife
          </p>
          <div className="w-16 sm:w-20 h-1 bg-gradient-accent rounded-full mx-auto mt-6" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="p-6 sm:p-8 bg-card rounded-xl sm:rounded-2xl shadow-medium hover:shadow-strong transition-all duration-300 hover:-translate-y-1 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-secondary text-secondary" />
                ))}
              </div>

              {/* Text */}
              <p className="text-sm sm:text-base text-muted-foreground mb-6 italic leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="pt-4 border-t border-border">
                <p className="text-sm sm:text-base font-semibold text-primary">{testimonial.name}</p>
                <p className="text-xs sm:text-sm text-muted-foreground">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

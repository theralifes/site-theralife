const faqs = [
  {
    question: "Os produtos são 100% naturais?",
    answer:
      "Selecionamos ingredientes de origem natural, livres de corantes artificiais e com processos certificados para preservar os nutrientes.",
  },
  {
    question: "Como funciona a entrega?",
    answer:
      "Enviamos para todo o Brasil com rastreamento em tempo real. O prazo médio é de 3 a 7 dias úteis após a confirmação do pagamento.",
  },
  {
    question: "Posso combinar diferentes suplementos?",
    answer:
      "Nossos produtos são pensados para uso complementar. Mesmo assim, recomendamos orientação de um profissional de saúde para personalizar a rotina.",
  },
];

const FAQ = () => {
  return (
    <section className="py-16 sm:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="text-center mb-12 space-y-4">
          <p className="text-sm font-medium text-secondary uppercase tracking-widest">
            FAQ
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary">
            Perguntas Frequentes
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Respondemos as dúvidas mais comuns para você escolher com segurança
            a linha Theralife.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="p-5 sm:p-6 rounded-2xl border border-border shadow-soft hover:shadow-medium transition-shadow bg-card text-left"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-primary">
                {faq.question}
              </h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;


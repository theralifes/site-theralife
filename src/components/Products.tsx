import { useNavigate } from "react-router-dom";
import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
// Importar novas imagens
import saudeMulherImg from "@/assets/novas-images/Saude-da-mulher.jpg";
import seneImg from "@/assets/novas-images/sene.jpg";
import extremeImg from "@/assets/novas-images/extreme.jpg";
import detoxImg from "@/assets/novas-images/detox.jpg";
import ashwagandhaImg from "@/assets/novas-images/aswaganhda.jpg";
import mulunguImg from "@/assets/novas-images/mulungo.jpg";
import calmanteImg from "@/assets/novas-images/calmante.jpg";
import seca from "@/assets/novas-images/seca.jpg";
import carvao from "@/assets/novas-images/carvao.jpg";
import gl from "@/assets/novas-images/gl.jpg";

const Products = () => {
  const navigate = useNavigate();
  const WHATSAPP_LINK = "https://wa.me/559891816061";

  const products = [
    {
      name: "Saúde da Mulher",
      images: [saudeMulherImg],
      whatsappLink: WHATSAPP_LINK,
      description: `Descrição
 Saúde da Mulher: Suplemento natural composto por Amora Miura, Barbatimão e Uxi Amarelo, inaredientes tradicionais que auxiliam no equilíbrio hormonal, no combate à inflamação e na saúde do sistema reprodutor feminino.
Informações importantes:
• 120 cápsulas
• Envio rápido: em até 24 horas, exceto finais de semana e feriados.
• Uso recomendado: 3 cápsulas ao dia para melhores resultados.`,
    },
    {
      name: "Sene - 120 Cápsulas",
      images: [seneImg],
      whatsappLink: WHATSAPP_LINK,
      description: `Sene - 120 Cápsulas
Envio rápido: postamos em até 24h (exceto finais de semana e feriados
Praticidade: tratamento para 40 dias (3 cápsulas/dia
Benefícios do Sene:
• Auxilia no funcionamento saudável do intestino
• Contribui para alívio da constipação ocasional
• Ajuda na desintoxicação do organismc
• Favorece a sensacão de leveza e bem-estar
Modo de uso:
Tomar 3 cápsulas ao dia, preferencialmente antes de dormir ou conforme orientação de um profissional de saúde.
Não é recomendado o uso prolongado sem supervisão médica`,
    },
    {
      name: "Extreme",
      images: [extremeImg],
      whatsappLink: WHATSAPP_LINK,
      description: `Extreme é inibidor de apetite e controlador da ansiedade, possui fórmula 100% natural. sem contra indicação e sem efeito sanfona
SAFIRA
Composição em cápsulas de 1000 mg, feita a base de spirulina verde, spirulina azul, matcha, citrus aurantium, psylium, folha de oliveira, café verde.
EXTREME é indicado para auxiliar no tratamento da obesidade, diabetes e pressão alta em hipertensos leves. Acelera o metabolismo fazendo com aue o organismo gaste mais energia mesmo que esteja em repouso, termogênico natural, atua na queima acelerada das gorduras, melhora a disposição, a sensacão de bem-estar e reduz a sonolência e o cansaço.
`,
    },
    {
      name: "Detox - 120 Cápsulas",
      images: [detoxImg],
      whatsappLink: WHATSAPP_LINK,
      description: `Detox - 120 Cápsulas Equilíbrio e bem-estar para o seu dia a dia.
○ Detox é formulado com ingredientes selecionados para auxiliar na rotina saudável e no cuidado diário do corpo. Ideal para quem busca mais leveza e equilíbrio
Benefícios:
• Apoia a rotina de cuidado e equilíbrio corpora
• Contribui para o bem-estar geral
• Auxilia na manutencão de hábitos saudáveis
Conteúdo: 120 cápsulas Uso recomendado: 3 cápsulas ao dia Envio rápido: Postagem em até 24h (exceto finais de semana e feriados.`,
    },
    {
      name: "Ashwagandha",
      images: [ashwagandhaImg],
      whatsappLink: WHATSAPP_LINK,
      description: `Para que serve Ashwagandha?
A ashwagandha é conhecida como um adaptógeno natural, auxiliando o corpo a lidar melhor com o estresse do dia a dia. Pode contribuir para:
• Promover sensação de bem-estar e equilíbrio;
• Apoiar a energia e vitalidade;
• Auxiliar na concentracão e foco mental;
• Colaborar para um sono mais tranquilo e restaurador.
Produto dentro das normas Envio em até 24 horas (exceto finais de semana e feriados)
Uso recomendado: conforme indicação do fabricante`,
    },
    {
      name: "Glucomannan",
      images: [gl],
      whatsappLink: WHATSAPP_LINK,
      description: `• Glucomannan auxilia na sensacão de saciedade, ajudando a controlar o apetite;
• Contribui para o equilíbrio do intestino, por ser rico em fibras;
• Pode apoiar em dietas de controle de peso quando associado a uma alimentação equilibrada e prática regular de exercícios;
• Ajuda na digestão saudável.
Importante: sempre deve ser consumido com bastante água e de acordo com a recomendação do fabricante.`,
    },
    {
      name: "Carvão Ativado - 120 Cápsulas",
      images: [carvao],
      whatsappLink: WHATSAPP_LINK,
      description: `Carvão Ativado - 120 Cápsulas Desintoxicacão natural e bem-estar diário
○ Carvão Ativado é conhecido por seu alto poder de absorção de toxinas e impurezas, auxiliando na saúde digestiva e promovendo uma sensacão de leveza. Ideal para quem busca mais equilíbrio no dia a dia.
Benefícios:
• Auxilia na eliminação de toxinas do organismc
• Contribui para reduzir gases e inchaço abdomina
• Apoia a saúde intestinal e digestiva
• Sensação de bem-estar e leveza
Conteúdo: 120 cápsulas Uso recomendado: 3 cápsulas ao dia Envio rápido: Postagem em menos de 24h (exceta finais de semana e feriados dia.`,
    },
    {
      name: "Mulungu - 120 Cápsulas",
      images: [mulunguImg],
      whatsappLink: WHATSAPP_LINK,
      description: `Mulungu - 120 Cápsulas
Equilíbrio e bem-estar de forma natural
○ Mulungu é uma planta tradicionalmente utilizada na fitoterapia brasileira, reconhecida por seus compostos naturais que contribuem para o relaxamento e equilíbrio do organismo. Ideal para quem busca uma rotina mais leve e tranquila
Benefícios:
• Apoia o bem-estar e o equilíbrio diário
• Auxilia em momentos de agitaçãc
• Fonte natural de compostos vegetais
• Pode ser incluído em uma rotina saudáve
Conteúdo: 120 cápsulas Uso recomendado: 3 cápsulas ao dia Envio rápido: Postagem em menos de 24h (exceta finais de semana e feriados.`,
    },
    {
      name: "Composto Natural Calmante - 120 Cápsulas",
      images: [calmanteImg],
      whatsappLink: WHATSAPP_LINK,
      description: `Composto Natural Calmante - 120 Cápsulas Equilíbrio e bem-estar em cada dose.
Formulado com ingredientes naturais cuidadosamente selecionados, o Composto Natural Calmante é ideal para quem busca mais tranquilidade e qualidade no dia a dia.
Benefícios:
• Contribui para momentos de relaxamento
Auxilia na sensacão de bem-estar
• Pode ajudar a reduzir a agitação do dia a dia
• Apoia o equilíbrio do corpo e da mente
Conteúdo: 120 cápsulas Uso recomendado: 3 cápsulas ao dia Envio rápido: Postagem em menos de 24h (exceto finais de semana e feriados.`,
    },
    {
      name: "Nutri Life SECA BARRIGA",
      images: [seca],
      whatsappLink: WHATSAPP_LINK,
      description: `Nutri Life SECA BARRIGA: Seu Aliado para um Corpo Renovado! Principais Benefícios:
• Ação Diurética Potente: Combate o inchacc e a retencão de liquidos.
• Acelera o Metabolismo: Contribui para a queima eficaz de gorduras
Redução de Apetite: Promove sensacão de saciedade, auxiliando no controle da alimentação.
Efeito Desintoxicante: Ajuda a purificar o organismo.
Contém 120 Cápsulas de 500 mg
Recomendacão de Uso: Apenas 3 cápsulas ao dia.`,
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
    <section
      id="produtos"
      className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-nature-light to-background"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-up">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4 px-4"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            Nossos Produtos
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Suplementos naturais cuidadosamente selecionados para sua saúde e
            bem-estar
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
            Trabalhamos com{" "}
            <span className="font-semibold text-primary">diversas linhas</span>,
            reconhecidas por sua excelência em produtos naturais e suplementos
            de alta qualidade.
          </p>
        </div>

        {/* Catalog CTA */}
        <div id="catalogo-completo" className="mt-10 sm:mt-14 text-center">
          <div className="inline-flex flex-col gap-4 sm:gap-5 bg-card border border-border shadow-soft rounded-2xl px-6 py-6 sm:px-10 sm:py-8 max-w-2xl">
            <h3
              className="text-2xl font-semibold text-primary"
              style={{ fontFamily: "Outfit, sans-serif" }}
            >
              Quer ver o catálogo completo?
            </h3>
            <p className="text-muted-foreground">
              Descubra todos os lançamentos, kits especiais e condições
              exclusivas falando direto com nossa equipe.
            </p>
            <Button
              size="lg"
              className="w-full sm:w-auto"
              onClick={() => navigate("/catalogo")}
            >
              Ver catálogo completo
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

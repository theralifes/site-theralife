import { useNavigate } from "react-router-dom";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";

// Importar novas imagens
import saudeMulherImg from "@/assets/novas-images/Saude-da-mulher.jpg";
import seneImg from "@/assets/novas-images/sene.jpg";
import extremeImg from "@/assets/novas-images/extreme.jpg";
import extreme2Img from "@/assets/novas-images/extreme2.jpg";
import detoxImg from "@/assets/novas-images/detox.jpg";
import detox2Img from "@/assets/novas-images/detox2.jpg";
import ashwagandhaImg from "@/assets/novas-images/aswaganhda.jpg";
import glucomannanImg from "@/assets/novas-images/glucomannam.jpg";
import carvaoAtivadoImg from "@/assets/novas-images/carvao-ativado.jpg";
import mulunguImg from "@/assets/novas-images/mulungo.jpg";
import calmanteImg from "@/assets/novas-images/calmante.jpg";
import blackMonsterImg from "@/assets/novas-images/black-monster.jpg";
import colagenoImg from "@/assets/novas-images/Colageno.jpg";

// Importar imagens antigas para produtos adicionais
import desunchaImg from "@/assets/images/desuncha.jpg";
import detox4Img from "@/assets/images/Detox4.jpg";
import extreme3Img from "@/assets/images/extreme3.jpg";
import lipocha2Img from "@/assets/images/Lipochá-2.jpg";
import lipochaImg from "@/assets/images/Lipocha.jpg";
import newQueenImg from "@/assets/images/New-Queen.jpg";
import safiraBeautyImg from "@/assets/images/safira-beauty.jpg";
import safiraBeauty2Img from "@/assets/images/Safira-beauty2.jpg";
import saudeImg from "@/assets/images/saude.jpg";
import sejeImg from "@/assets/images/seje.jpg";
import glicoVitaImg from "@/assets/images/glico-vita.jpg";
import chaVerdeNewImg from "@/assets/images/cha-verde.jpg";

const Catalog = () => {
  const navigate = useNavigate();
  const WHATSAPP_LINK = "https://wa.me/559891816061";

  // Produtos da página inicial (já estão na página inicial)
  const initialProducts = [
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
      images: [glucomannanImg],
      whatsappLink: WHATSAPP_LINK,
      description: `• Glucomannan auxilia na sensacão de saciedade, ajudando a controlar o apetite;
• Contribui para o equilíbrio do intestino, por ser rico em fibras;
• Pode apoiar em dietas de controle de peso quando associado a uma alimentação equilibrada e prática regular de exercícios;
• Ajuda na digestão saudável.
Importante: sempre deve ser consumido com bastante água e de acordo com a recomendação do fabricante.`,
    },
    {
      name: "Carvão Ativado - 120 Cápsulas",
      images: [carvaoAtivadoImg],
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
      name: "Black Monster - 120 Cápsulas",
      images: [blackMonsterImg],
      whatsappLink: WHATSAPP_LINK,
      description: `Black Monster - 120 Cápsulas Energia, disposicão e performance para o seu dia
○ Black Monster é um suplemento desenvolvido para quem busca mais foco, vitalidade e resistência. Sua fórmula contém ingredientes que apoiam a energia física e mental, ajudando no rendimento diário e em treinos intensos.
Benefícios:
• Contribui para mais disposição e energia
Apoia a resistência física
.
Auxilia no foco e concentração
• Ideal para treinos e rotina ativa
Conteúdo: 120 cápsulas Uso recomendado: 3 cápsulas ao dia Envio rápido: Postagem em menos de 24h (exceto finais de semana e feriados.`,
    },
  ];

  // Produtos adicionais para o catálogo completo
  const additionalProducts = [
    {
      name: "Colágeno",
      images: [colagenoImg],
      whatsappLink: WHATSAPP_LINK,
      description: "Contribui para a firmeza e elasticidade da pele, fortalece unhas e cabelos, ajuda na prevenção do envelhecimento precoce, auxilia na regeneração de tecidos, fortalece articulações, ligamentos e ossos. Essencial para a estrutura da pele, músculos e cartilagens. Contém 120 cápsulas.",
    },
    {
      name: "Desinchá",
      images: [desunchaImg],
      whatsappLink: WHATSAPP_LINK,
      description: "Blend natural que auxilia na redução do inchaço e retenção de líquidos. Formulado com ingredientes selecionados para promover o bem-estar digestivo e sensação de leveza.",
    },
    {
      name: "Chá Verde",
      images: [chaVerdeNewImg],
      whatsappLink: WHATSAPP_LINK,
      description: "Rico em antioxidantes e catequinas, o Chá Verde acelera o metabolismo, aumenta a disposição e auxilia no processo de emagrecimento saudável.",
    },
    {
      name: "Extreme (Variação)",
      images: [extreme2Img, extreme3Img],
      whatsappLink: WHATSAPP_LINK,
      description: "Fórmula potente para quem busca resultados intensos. Combina termogênicos naturais que potencializam a queima de gordura e aumentam a energia durante o dia.",
    },
    {
      name: "Detox (Variação)",
      images: [detox2Img, detox4Img],
      whatsappLink: WHATSAPP_LINK,
      description: "Programa de desintoxicação natural que ajuda a eliminar toxinas do organismo, melhora o funcionamento intestinal e promove mais disposição e vitalidade. Composição em cápsulas de 500 mg, feita a base de ESPIRULINA, PSYLLIUM, GUARANÁ, ÁGAR-ÁGAR E PICOLINATO DE CROMO. Proporciona a inibição do apetite por até 08 horas consecutivas, acelera o metabolismo até 03X mais. Emagrecedor 100% natural, sem efeito sanfona, controlador de ansiedade, diurético e laxante leve de ação controlada.",
    },
    {
      name: "Lipochá",
      images: [lipocha2Img, lipochaImg],
      whatsappLink: WHATSAPP_LINK,
      description: "Chá seca barriga 100% natural. Auxilia na redução de medidas, combate a retenção de líquidos e promove a sensação de saciedade de forma saudável.",
    },
    {
      name: "Glico Vita",
      images: [glicoVitaImg],
      whatsappLink: WHATSAPP_LINK,
      description: "Suplemento vitamínico completo que auxilia no controle glicêmico e fornece nutrientes essenciais para o bom funcionamento do organismo.",
    },
    {
      name: "New Queen Energy",
      images: [newQueenImg],
      whatsappLink: WHATSAPP_LINK,
      description: "Desenvolvido especialmente para mulheres, fornece energia, vitalidade e bem-estar. Fórmula exclusiva com vitaminas e minerais essenciais para o dia a dia.",
    },
    {
      name: "Safira Beauty",
      images: [safiraBeautyImg, safiraBeauty2Img],
      whatsappLink: WHATSAPP_LINK,
      description: "Nutricosméticos que promovem beleza de dentro para fora. Auxilia na saúde da pele, cabelos e unhas com ingredientes naturais de alta qualidade. Composição em cápsulas de 1000 mg, feita a base de spirulina verde, spirulina azul, matcha, citrus aurantium, psylium, folha de oliveira, café verde.",
    },
    {
      name: "Saúde Essencial",
      images: [saudeImg],
      whatsappLink: WHATSAPP_LINK,
      description: "Complexo multivitamínico completo para manutenção da saúde geral. Contém vitaminas, minerais e antioxidantes essenciais para o bem-estar diário.",
    },
  ];

  const allProducts = [...initialProducts, ...additionalProducts];

  return (
    <div className="scroll-smooth min-h-screen bg-gradient-to-b from-background to-nature-light">
      {/* Header */}
      <div className="bg-card border-b border-border sticky top-0 z-50 shadow-soft">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              onClick={() => navigate("/")}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar
            </Button>
            <h1 className="text-2xl sm:text-3xl font-bold text-primary" style={{ fontFamily: "Outfit, sans-serif" }}>
              Catálogo Completo
            </h1>
            <div className="w-20" /> {/* Spacer para centralizar */}
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {allProducts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">
                Adicione produtos ao catálogo completo no arquivo <code className="bg-accent px-2 py-1 rounded">src/pages/Catalog.tsx</code>
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {allProducts.map((product, index) => (
                <div
                  key={product.name}
                  className="animate-fade-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <ProductCard {...product} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Catalog;

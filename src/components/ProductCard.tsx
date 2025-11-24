import { useState } from "react";
import { Button } from "@/components/ui/button";

const FALLBACK_IMAGE = "/placeholder.svg";

interface ProductCardProps {
  name: string;
  images: string[];
  whatsappLink: string;
}

const ProductCard = ({ name, images, whatsappLink }: ProductCardProps) => {
  const gallery = images.length ? images : [FALLBACK_IMAGE];
  const [activeImage, setActiveImage] = useState(0);

  return (
    <div className="group bg-card rounded-xl sm:rounded-2xl overflow-hidden shadow-medium hover:shadow-strong transition-all duration-500 hover:-translate-y-2">
      {/* Image */}
      <div className="relative h-56 sm:h-64 overflow-hidden bg-accent">
        <img
          src={gallery[activeImage] ?? gallery[0]}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {gallery.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {gallery.map((_, index) => (
              <button
                key={`${name}-thumb-${index}`}
                className={`h-2.5 w-2.5 rounded-full border border-white/70 transition-all duration-300 ${
                  index === activeImage ? "bg-white" : "bg-white/30"
                }`}
                aria-label={`Mostrar imagem ${index + 1} do produto ${name}`}
                onClick={() => setActiveImage(index)}
              />
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6 space-y-4">
        <h3 className="text-xl sm:text-2xl font-bold text-primary" style={{ fontFamily: 'Outfit, sans-serif' }}>
          {name}
        </h3>

        {/* CTA */}
        <Button
          variant="default"
          className="w-full mt-3 sm:mt-4"
          size="lg"
          onClick={() => window.open(whatsappLink, '_blank')}
        >
          Comprar Agora
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;

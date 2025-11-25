import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const FALLBACK_IMAGE = "/placeholder.svg";

interface ProductCardProps {
  name: string;
  images: string[];
  whatsappLink: string;
  description?: string;
}

const ProductCard = ({ name, images, whatsappLink, description }: ProductCardProps) => {
  const gallery = images.length ? images : [FALLBACK_IMAGE];
  const [activeImage, setActiveImage] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [isClamped, setIsClamped] = useState(false);
  const descRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const el = descRef.current;
    if (el) {
      setIsClamped(el.scrollHeight > el.clientHeight);
    }
  }, [description]);

  return (
    <>
      <div className="group bg-card rounded-xl sm:rounded-2xl overflow-hidden shadow-medium hover:shadow-strong transition-all duration-500 hover:-translate-y-2">
        {/* Image */}
        <div className="relative aspect-square overflow-hidden bg-accent">
          <img
            src={gallery[activeImage] ?? gallery[0]}
            alt={name}
            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
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
        <div className="p-4 sm:p-5 space-y-3">
          <h3 className="text-lg sm:text-xl font-bold text-primary" style={{ fontFamily: 'Outfit, sans-serif' }}>
            {name}
          </h3>

          {description && (
            <div>
              <p
                ref={descRef}
                className="text-sm text-muted-foreground leading-relaxed line-clamp-2"
              >
                {description}
              </p>
              {isClamped && (
                <button
                  onClick={() => setShowModal(true)}
                  className="text-sm text-secondary font-medium mt-1 hover:underline"
                >
                  Ler mais
                </button>
              )}
            </div>
          )}

          {/* CTA */}
          <Button
            variant="default"
            className="w-full"
            size="lg"
            onClick={() => window.open(whatsappLink, '_blank')}
          >
            Comprar Agora
          </Button>
        </div>
      </div>

      {/* Modal */}
      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>{name}</DialogTitle>
            <DialogDescription className="pt-4 text-base leading-relaxed whitespace-pre-line">
              {description}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProductCard;

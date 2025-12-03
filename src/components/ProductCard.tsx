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
  const [showImageModal, setShowImageModal] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState(0);
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
        <div
          className="relative aspect-square overflow-hidden bg-accent cursor-pointer"
          onClick={() => {
            setModalImageIndex(activeImage);
            setShowImageModal(true);
          }}
        >
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
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveImage(index);
                  }}
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

      {/* Modal de Descrição */}
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

      {/* Modal de Imagem */}
      <Dialog open={showImageModal} onOpenChange={setShowImageModal}>
        <DialogContent className="max-w-4xl max-h-[90vh] p-0 border-0 bg-transparent shadow-none [&>button]:hidden">
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Botão X para fechar */}
            <button
              onClick={() => setShowImageModal(false)}
              className="absolute top-4 right-4 z-50 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all duration-300"
              aria-label="Fechar"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Imagem */}
            <img
              src={gallery[modalImageIndex] ?? gallery[0]}
              alt={name}
              className="max-w-full max-h-[90vh] object-contain"
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProductCard;

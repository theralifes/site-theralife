import { Leaf, Instagram, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-forest-dark text-white py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-start sm:items-center">
          {/* Logo and Tagline */}
          <div className="text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2 sm:gap-3 mb-2 sm:mb-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                <Leaf className="w-5 h-5 sm:w-6 sm:h-6 text-secondary" />
              </div>
              <span className="text-xl sm:text-2xl font-bold" style={{ fontFamily: 'Outfit, sans-serif' }}>Theralife</span>
            </div>
            <p className="text-white/70 text-xs sm:text-sm">Saúde e Bem-Estar</p>
          </div>

          {/* Social Links */}
          <div className="text-center">
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>Conecte-se</h3>
            <div className="flex gap-4 justify-center">
              <a
                href="https://instagram.com/__theralife__"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-secondary hover:text-forest-dark flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-soft hover:shadow-glow"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/559891816061"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-[#25D366] hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-soft hover:shadow-glow"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="text-center sm:text-left lg:text-right sm:col-span-2 lg:col-span-1">
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>Contato</h3>
            <a
              href="https://wa.me/559891816061"
              className="text-secondary hover:text-mint-soft transition-colors duration-300 text-xs sm:text-sm block"
            >
              WhatsApp: (98) 9181-6061
            </a>
            <p className="text-white/70 text-xs sm:text-sm mt-2">
              <a href="https://www.instagram.com/__theralife__" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">
                @__theralife__
              </a>
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
          <p className="text-white/50 text-xs sm:text-sm">
            © {new Date().getFullYear()} Theralife Produtos Naturais. Todos os direitos reservados.
          </p>
          <p className="text-white/40 text-[10px] sm:text-xs mt-2">
            Feito com 💚 para sua saúde e bem-estar
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

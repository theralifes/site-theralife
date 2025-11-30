import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="scroll-smooth">
      <Hero />
      <Products />
      <Benefits />
      <About />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;

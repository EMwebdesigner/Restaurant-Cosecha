import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { MenuSection } from '@/components/MenuSection';
import { CombosSection } from '@/components/CombosSection';
import { GallerySection } from '@/components/GallerySection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { HowToOrderSection } from '@/components/HowToOrderSection';
import { PromotionsSection } from '@/components/PromotionsSection';
import { ProcessSection } from '@/components/ProcessSection';
import { FAQSection } from '@/components/FAQSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <MenuSection />
        <CombosSection />
        <GallerySection />
        <TestimonialsSection />
        <HowToOrderSection />
        <PromotionsSection />
        <ProcessSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

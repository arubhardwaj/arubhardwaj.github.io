
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ExpertiseSection from '@/components/sections/ExpertiseSection';
import IndustriesSection from '@/components/sections/IndustriesSection';
import WhyChooseMeSection from '@/components/sections/WhyChooseMeSection';
import ContactSection from '@/components/sections/ContactSection';
import ConsultationSection from '@/components/sections/ConsultationSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ExpertiseSection />
        <IndustriesSection />
        <WhyChooseMeSection />
        <ConsultationSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

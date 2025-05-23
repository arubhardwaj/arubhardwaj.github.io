
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 bg-gradient-to-br from-theme-dark via-theme-blue to-theme-purple overflow-hidden">
      <div className="absolute inset-0 bg-data-pattern opacity-10"></div>
      <div className="container mx-auto px-4 md:px-8 py-16 md:py-24 relative z-10">
        <div className="max-w-4xl">
          <h1 className="heading-xl text-white mb-6 leading-tight">
            Transforming Data Into{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">
              Intelligent Solutions
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl">
            With 6+ years of specialized experience, I deliver advanced AI and machine learning solutions that 
            drive business growth through data-driven insights. As a certified data scientist, I've helped 
            organizations across multiple sectors leverage their data assets to achieve measurable ROI and 
            competitive advantages.
          </p>
          
          <p className="text-lg md:text-xl text-gray-200 mb-12 max-w-2xl">
            Paris-based data scientist specializing in predictive analytics, NLP, forecasting, and machine 
            learning solutions for businesses across Europe.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#expertise">
              <Button className="btn-primary w-full sm:w-auto group">
                Explore My Expertise
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Button>
            </a>
            <a href="#contact">
              <Button variant="outline" className="btn-outline w-full sm:w-auto bg-transparent text-white border-white hover:bg-white hover:text-theme-dark">
                Book a Consultation
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;


import React from "react";
import { ArrowDownCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();
  
  return (
    <section className="py-20 md:py-32 hero-gradient text-primary">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2 text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {t('hero.title')} <span className="text-secondary">{t('hero.titleHighlight')}</span>
            </h1>
            <p className="text-lg md:text-xl mb-10">
              {t('hero.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#expertise"
                className="bg-primary text-white rounded-full px-8 py-3 font-medium hover:bg-opacity-90 transition"
              >
                {t('hero.exploreExpertise')}
              </a>
              <a
                href="#consultation"
                className="bg-secondary text-white rounded-full px-8 py-3 font-medium hover:bg-opacity-90 transition"
              >
                {t('hero.bookConsultation')}
              </a>
            </div>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <div className="relative">
              <img 
                src="lovable-uploads/58cbd9bf-9167-4430-b2f0-c0a1d1080f20.png" 
                alt="Data Science Visualization" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-tr from-primary/10 to-transparent"></div>
            </div>
          </div>
        </div>
        <div className="mt-16 animate-bounce text-center">
          <a href="#expertise" className="inline-block">
            <ArrowDownCircle size={36} className="text-primary hover:text-secondary transition" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

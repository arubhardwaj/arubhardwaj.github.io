import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const HeroSection = () => {
  const { language, translations } = useLanguage();
  
  return (
    <section className="relative min-h-screen flex items-center pt-16 gradient-dark overflow-hidden">
      {/* Tech grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      
      {/* Glow effects */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-8 py-16 md:py-24 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="gradient-text neon-text">{translations.transformingData[language]}</span>{' '}
              <span className="text-accent">
                {translations.intelligentSolutions[language]}
              </span>
              <span className="block mt-4 text-xl md:text-2xl text-gray-300 font-normal">
                Freelance Data Scientist & AI Consultant
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-6 max-w-2xl">
              {translations.heroDescription1[language]}
            </p>
            
            <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl">
              {translations.heroDescription2[language]}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => document.querySelector('[id*="expertise"]')?.scrollIntoView({ behavior: 'smooth' })}
                className="gradient-primary hover:opacity-90 text-white px-8 py-6 text-lg w-full sm:w-auto tech-glow"
              >
                {translations.exploreExpertise[language]}
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Button>
              <Button 
                onClick={() => document.querySelector('[id*="consultation"]')?.scrollIntoView({ behavior: 'smooth' })}
                variant="outline" 
                className="border-2 border-accent text-accent hover:bg-accent hover:text-white px-8 py-6 text-lg w-full sm:w-auto"
              >
                {translations.bookAConsultation[language]}
              </Button>
            </div>
          </div>
          <div className="relative order-first md:order-last mb-8 md:mb-0">
            <div className="relative rounded-2xl overflow-hidden tech-border tech-glow max-w-sm mx-auto md:max-w-none">
              <div className="absolute inset-0 gradient-accent opacity-20"></div>
              <img 
                src="/lovable-uploads/profile-picture.jpg" 
                alt="Aru Bhardwaj - Top Paris Data Scientist and AI Expert specializing in predictive analytics, NLP, and forecasting" 
                className="w-full h-auto relative z-10"
              />
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div className="bg-card/50 backdrop-blur-sm tech-border rounded-xl p-6 card-hover">
            <div className="flex items-center gap-4">
              <div className="text-accent">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-primary mb-1">{translations.email[language]}</h3>
                <p className="text-sm text-foreground">aru.bhardwaj@insightrix.eu</p>
              </div>
            </div>
          </div>
          
          <div className="bg-card/50 backdrop-blur-sm tech-border rounded-xl p-6 card-hover">
            <div className="flex items-center gap-4">
              <div className="text-accent">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-primary mb-1">{translations.phone[language]}</h3>
                <p className="text-sm text-foreground">+33 (0) 766985210</p>
              </div>
            </div>
          </div>
          
          <div className="bg-card/50 backdrop-blur-sm tech-border rounded-xl p-6 card-hover">
            <div className="flex items-center gap-4">
              <div className="text-accent">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-primary mb-1">{translations.location[language]}</h3>
                <p className="text-sm text-foreground">Paris, France & Remote</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

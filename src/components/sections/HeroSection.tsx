
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 bg-hero-lime overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 py-16 md:py-24 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-theme-olive mb-6 leading-tight">
              Transforming Data Into{' '}
              <span className="text-theme-gold">
                Intelligent Solutions
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl">
              With 6+ years of specialized experience, I deliver advanced AI and machine learning solutions that 
              drive business growth through data-driven insights. As a certified data scientist, I've helped 
              organizations across multiple sectors leverage their data assets to achieve measurable ROI and 
              competitive advantages.
            </p>
            
            <p className="text-lg md:text-xl text-gray-700 mb-12 max-w-2xl">
              Paris-based data scientist specializing in <span className="text-theme-gold">predictive analytics</span>, <span className="text-theme-gold">NLP</span>, <span className="text-theme-gold">forecasting</span>, and 
              <span className="text-theme-gold"> machine learning solutions</span> for businesses across Europe.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#expertise">
                <Button className="bg-theme-olive hover:bg-theme-olive/90 text-white px-8 py-6 text-lg w-full sm:w-auto">
                  Explore My Expertise
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </Button>
              </a>
              <a href="#contact">
                <Button variant="outline" className="bg-theme-gold hover:bg-theme-gold/90 text-white border-theme-gold px-8 py-6 text-lg w-full sm:w-auto">
                  Book a Consultation
                </Button>
              </a>
            </div>
          </div>
          <div className="hidden md:block relative">
            <div className="rounded-lg overflow-hidden bg-gray-200 shadow-xl">
              <img 
                src="/lovable-uploads/aa9ec9e1-1fea-42f9-aa4b-832dbe9bcc72.png" 
                alt="Aru Bhardwaj - Top Paris Data Scientist and AI Expert specializing in predictive analytics, NLP, and forecasting" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="flex items-center">
            <div className="bg-white/80 rounded-md p-4 flex items-center flex-col md:flex-row w-full shadow-sm">
              <div className="mr-4 text-theme-gold">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-medium text-theme-olive">Email</h3>
                <p className="text-sm">aru.bhardwaj@insighrix.eu</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center">
            <div className="bg-white/80 rounded-md p-4 flex items-center flex-col md:flex-row w-full shadow-sm">
              <div className="mr-4 text-theme-gold">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-medium text-theme-olive">Phone</h3>
                <p className="text-sm">+33 (0) 766985210</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center">
            <div className="bg-white/80 rounded-md p-4 flex items-center flex-col md:flex-row w-full shadow-sm">
              <div className="mr-4 text-theme-gold">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-medium text-theme-olive">Location</h3>
                <p className="text-sm">Paris, France & Remote</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

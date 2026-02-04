import { CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
const AboutSection = () => {
  const {
    language,
    translations
  } = useLanguage();
  return <section className="py-20 bg-white" id="about">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-theme-olive">
              Aru Bhardwaj
            </h2>
            <p className="text-lg mb-6 text-gray-700">
              {translations.aboutMeDescription[language]}
            </p>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-6 text-theme-gold flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" className="mr-2">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z" />
                </svg>
                {translations.professionalServices[language]}
              </h3>
              
              <Card className="mb-4 shadow-md border-yellow-100 bg-[#fffdf6]">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <h4 className="text-lg font-medium mb-2">
                      {translations.pricing[language]}
                    </h4>
                    <span className="text-2xl font-bold text-theme-gold">
                      {translations.contactForPricing[language]}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle size={20} className="text-green-500 mr-2 shrink-0 mt-0.5" />
                      <span>{translations.customizedSolutions[language]}</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={20} className="text-green-500 mr-2 shrink-0 mt-0.5" />
                      <span>{translations.weeklyMonthlyBilling[language]}</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={20} className="text-green-500 mr-2 shrink-0 mt-0.5" />
                      <span>{translations.projectBasedPricing[language]}</span>
                    </li>
                  </ul>
                  <div className="mt-6 space-y-3">
                    <a href="#consultation" className="inline-block w-full bg-theme-gold hover:bg-theme-gold/90 text-white px-6 py-3 rounded-md font-medium transition-all duration-300 text-center">
                      {translations.scheduleConsultation[language]}
                    </a>
                    <a href="/submit-project" className="inline-block w-full bg-theme-olive hover:bg-theme-olive/90 text-white px-6 py-3 rounded-md font-medium transition-all duration-300 text-center">
                      Submit Your Project
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-xl">
            <div className="border-8 border-theme-gold rounded-full overflow-hidden aspect-square w-64 md:w-80 mx-auto">
              <img alt="Aru Bhardwaj - Freelance Data Scientist & AI Expert" className="w-full h-full object-fill" src="/lovable-uploads/aa05f26c-fc9f-4fc6-9bde-9212daa6295f.png" />
            </div>
            <div className="bg-white p-6 text-center">
              <h3 className="text-xl font-bold mb-1 text-theme-olive">Aru Bhardwaj</h3>
              <p className="text-gray-600">
                {/* Empty paragraph as requested */}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;
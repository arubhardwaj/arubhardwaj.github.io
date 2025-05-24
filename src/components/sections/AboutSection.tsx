
import { CheckCircle, Clock, Euro } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const AboutSection = () => {
  const { language, translations } = useLanguage();

  const features = [
    {
      icon: CheckCircle,
      text: translations.customizedSolutions[language]
    },
    {
      icon: Clock,
      text: translations.weeklyMonthlyBilling[language]
    },
    {
      icon: Euro,
      text: translations.projectBasedPricing[language]
    }
  ];

  return (
    <section className="py-20 bg-white" id="about">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              {translations.professionalServices[language]}
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {translations.aboutMeDescription[language]}
            </p>
            
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <feature.icon className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{feature.text}</span>
                </div>
              ))}
            </div>
            
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white"
              onClick={() => document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {translations.scheduleConsultation[language]}
            </Button>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {translations.hourlyRate[language]}
              </h3>
              <p className="text-gray-600">{translations.standardRate[language]}</p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="text-3xl font-bold text-blue-600 mb-2">€95</div>
                  <div className="text-sm text-gray-600">{translations.perHour[language]}</div>
                  <div className="text-xs text-gray-500 mt-1">{translations.hourly[language]}</div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="text-3xl font-bold text-purple-600 mb-2">€720</div>
                  <div className="text-sm text-gray-600">{translations.perDay[language]}</div>
                  <div className="text-xs text-gray-500 mt-1">{translations.daily[language]}</div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-500">
                ⭐ Special rates available for startups and non-profits
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

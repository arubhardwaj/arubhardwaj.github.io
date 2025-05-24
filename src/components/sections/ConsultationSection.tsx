
import { Calendar, Clock, Euro, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const ConsultationSection = () => {
  const { language, translations } = useLanguage();

  const consultationFeatures = [
    {
      icon: Calendar,
      title: translations.confirmationEmail[language]
    },
    {
      icon: Clock,
      title: translations.personalContact[language]
    },
    {
      icon: CheckCircle,
      title: translations.calendarInvite[language]
    },
    {
      icon: Calendar,
      title: translations.weekendAvailability[language]
    },
    {
      icon: CheckCircle,
      title: translations.preparationMaterials[language]
    },
    {
      icon: Euro,
      title: translations.refundPolicy[language]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50" id="consultation">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            {translations.bookAConsultation[language]}
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            {translations.contactDescription[language]}
          </p>

          <div className="bg-white rounded-2xl p-8 shadow-xl mb-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">€95</div>
              <p className="text-lg text-gray-700">{translations.consultationPackage[language]} 1-hour consultation</p>
            </div>
            
            <Button 
              size="lg" 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 text-lg mb-6"
              onClick={() => window.open('https://calendly.com/aru-bhardwaj', '_blank')}
            >
              {translations.bookConsultation[language]}
            </Button>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">
              {translations.whatHappensNext[language]}
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {consultationFeatures.map((feature, index) => (
                <div key={index} className="bg-white rounded-lg p-4 shadow-sm text-left">
                  <div className="flex items-start gap-3">
                    <feature.icon className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <p className="text-sm text-gray-700">{feature.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationSection;

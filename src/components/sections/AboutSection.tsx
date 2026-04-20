import { useState } from 'react';
import { CheckCircle, Clock, Zap, Handshake } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
const AboutSection = () => {
  const [isDaily, setIsDaily] = useState(false);
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
            <p className="text-lg mb-4 text-gray-700">
              {translations.aboutMeDescription[language]}
            </p>
            <p className="text-lg mb-6 text-gray-700">
              {translations.aboutMeDescription2[language]}
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
                    <h4 className="text-lg font-medium mb-3">
                      {translations.pricing[language]}
                    </h4>
                    <div className="flex items-center gap-1 mb-3 bg-muted rounded-full p-1 w-fit">
                      <button
                        onClick={() => setIsDaily(false)}
                        className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all min-h-[44px] ${!isDaily ? 'bg-theme-gold text-white shadow' : 'text-muted-foreground hover:text-foreground'}`}
                      >
                        {language === 'en' ? 'Hourly' : language === 'it' ? 'Oraria' : language === 'de' ? 'Stündlich' : 'Horaire'}
                      </button>
                      <button
                        onClick={() => setIsDaily(true)}
                        className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all min-h-[44px] ${isDaily ? 'bg-theme-gold text-white shadow' : 'text-muted-foreground hover:text-foreground'}`}
                      >
                        {language === 'en' ? 'Daily' : language === 'it' ? 'Giornaliera' : language === 'de' ? 'Täglich' : 'Journalier'}
                      </button>
                    </div>
                    <span className="text-2xl font-bold text-theme-gold">
                      {isDaily ? translations.dailyRate[language] : translations.hourlyRate[language]}{' '}
                      <span className="text-sm font-normal text-muted-foreground">{translations.vatExtra[language]}</span>
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
                    <a href="/#consultation" className="inline-block w-full bg-theme-gold hover:bg-theme-gold/90 text-white px-6 py-3 rounded-md font-medium transition-all duration-300 text-center">
                      {translations.scheduleConsultation[language]}
                    </a>
                    <a href="/submit-project" className="inline-block w-full bg-theme-olive hover:bg-theme-olive/90 text-white px-6 py-3 rounded-md font-medium transition-all duration-300 text-center">
                      {translations.submitYourProject[language]}
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-xl">
            <div className="border-8 border-theme-gold rounded-full overflow-hidden aspect-square w-64 md:w-80 mx-auto">
              <img alt="Aru Bhardwaj - Fractional CTO, AI Strategist & MVP Builder based in Paris, specializing in sovereign AI infrastructure, RAG systems, and GDPR-compliant LLM deployments across Europe" className="w-full h-full object-fill" src="/lovable-uploads/aa05f26c-fc9f-4fc6-9bde-9212daa6295f.png" />
            </div>
            <div className="bg-white p-6 text-center">
              <h3 className="text-xl font-bold mb-1 text-theme-olive">Aru Bhardwaj</h3>
              <p className="text-gray-600">
                {/* Empty paragraph as requested */}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 md:mt-20">
          <h3 className="text-2xl md:text-3xl font-bold text-theme-olive text-center mb-10">
            {translations.engagementModelsTitle[language]}
          </h3>

          <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-theme-olive/10 flex items-center justify-center mb-4">
                <Clock className="h-5 w-5 text-theme-olive" />
              </div>
              <div className="flex items-baseline justify-between mb-2 gap-2">
                <h4 className="text-lg font-semibold text-theme-olive">{translations.engagementHourlyTag[language]}</h4>
                <span className="text-theme-gold font-bold whitespace-nowrap">
                  €150/hr <span className="text-xs font-normal text-gray-500">{translations.vatExtra[language]}</span>
                </span>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">{translations.engagementHourlyDesc[language]}</p>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-theme-olive/10 flex items-center justify-center mb-4">
                <Zap className="h-5 w-5 text-theme-olive" />
              </div>
              <div className="flex items-baseline justify-between mb-2 gap-2">
                <h4 className="text-lg font-semibold text-theme-olive">{translations.engagementDailyTag[language]}</h4>
                <span className="text-theme-gold font-bold whitespace-nowrap">
                  €700/day <span className="text-xs font-normal text-gray-500">{translations.vatExtra[language]}</span>
                </span>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">{translations.engagementDailyDesc[language]}</p>
            </div>

            <div className="relative bg-gradient-to-br from-theme-gold/10 to-theme-olive/5 rounded-xl border-2 border-theme-gold/40 p-6 shadow-md hover:shadow-lg transition-shadow">
              <span className="absolute -top-3 left-6 bg-theme-gold text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                {translations.engagementPartnershipBadge[language]}
              </span>
              <div className="w-10 h-10 rounded-lg bg-theme-gold/20 flex items-center justify-center mb-4">
                <Handshake className="h-5 w-5 text-theme-gold" />
              </div>
              <div className="flex items-baseline justify-between mb-2">
                <h4 className="text-lg font-semibold text-theme-olive">{translations.engagementPartnershipTag[language]}</h4>
                <span className="text-theme-gold font-bold text-sm">Fee + Equity</span>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">{translations.engagementPartnershipDesc[language]}</p>
              <p className="text-xs text-gray-500 italic mb-4">{translations.engagementPartnershipNote[language]}</p>
              <a
                href="#consultation"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center text-sm font-semibold text-theme-olive hover:text-theme-gold transition-colors"
              >
                {translations.engagementDiscussCta[language]} →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;
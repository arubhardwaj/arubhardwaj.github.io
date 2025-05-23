
import {
  Briefcase,
  Heart,
  Laptop,
  LineChart,
  Home,
  Building,
  Building2,
  Vote,
} from "lucide-react";
import { useLanguage } from '@/contexts/LanguageContext';

const IndustriesSection = () => {
  const { language, translations } = useLanguage();
  
  const industries = [
    {
      name: {
        en: "Management Consulting",
        it: "Consulenza Gestionale",
        fr: "Conseil en Management"
      },
      icon: Briefcase,
      color: "bg-amber-100 text-amber-600",
    },
    {
      name: {
        en: "Healthcare",
        it: "Sanità",
        fr: "Santé"
      },
      icon: Heart,
      color: "bg-red-100 text-red-600",
    },
    {
      name: {
        en: "Technology",
        it: "Tecnologia",
        fr: "Technologie"
      },
      icon: Laptop,
      color: "bg-indigo-100 text-indigo-600",
    },
    {
      name: {
        en: "Marketing",
        it: "Marketing",
        fr: "Marketing"
      },
      icon: LineChart,
      color: "bg-green-100 text-green-600",
    },
    {
      name: {
        en: "Real Estate",
        it: "Immobiliare",
        fr: "Immobilier"
      },
      icon: Home,
      color: "bg-amber-100 text-amber-600",
    },
    {
      name: {
        en: "Government",
        it: "Governo",
        fr: "Gouvernement"
      },
      icon: Building,
      color: "bg-slate-100 text-slate-600",
    },
    {
      name: {
        en: "NGOs",
        it: "ONG",
        fr: "ONG"
      },
      icon: Building2,
      color: "bg-teal-100 text-teal-600",
    },
    {
      name: {
        en: "Political Campaigns",
        it: "Campagne Politiche",
        fr: "Campagnes Politiques"
      },
      icon: Vote,
      color: "bg-violet-100 text-violet-600",
    },
  ];

  return (
    <section className="py-20 bg-gray-50" id="industries">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="heading-lg mb-4 text-theme-olive">{translations.industriesServed[language]} <span className="text-theme-gold">{translations.served[language]}</span></h2>
          <p className="text-lg text-gray-600">
            {translations.industriesDescription[language]}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow bg-white"
            >
              <div
                className={`h-14 w-14 rounded-full ${industry.color} flex items-center justify-center mb-4`}
              >
                <industry.icon className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-medium text-center text-theme-olive">
                {industry.name[language as keyof typeof industry.name]}
              </h3>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg mb-6">
            {translations.industryCallout[language]}
          </p>
          <a
            href="#contact"
            className="inline-block bg-theme-gold hover:bg-theme-gold/90 text-white px-6 py-3 rounded-md font-medium transition-all duration-300"
          >
            {translations.discussIndustryNeeds[language]}
          </a>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;

import { 
  Lightbulb, 
  Rocket, 
  Info, 
  Clock,
  BadgePercent
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const WhyChooseMeSection = () => {
  const { language, translations } = useLanguage();
  
  const advantages = [
    {
      title: {
        en: 'AI Strategy Consulting',
        it: 'Consulenza Strategica AI',
        fr: 'Conseil en Stratégie IA'
      },
      description: {
        en: 'Not just implementation, but strategic guidance on AI adoption to maximize ROI',
        it: 'Non solo implementazione, ma guida strategica sull\'adozione dell\'AI per massimizzare il ROI',
        fr: 'Pas seulement l\'implémentation, mais des conseils stratégiques sur l\'adoption de l\'IA pour maximiser le ROI'
      },
      icon: Lightbulb,
      color: 'bg-amber-100 text-amber-600'
    },
    {
      title: {
        en: 'Rapid Prototyping',
        it: 'Prototipazione Rapida',
        fr: 'Prototypage Rapide'
      },
      description: {
        en: 'Quick proof-of-concept development to validate AI solutions before full investment',
        it: 'Sviluppo rapido di proof-of-concept per validare soluzioni AI prima dell\'investimento completo',
        fr: 'Développement rapide de preuves de concept pour valider les solutions d\'IA avant un investissement complet'
      },
      icon: Rocket,
      color: 'bg-green-100 text-green-600'
    },
    {
      title: {
        en: 'Explainable AI',
        it: 'AI Spiegabile',
        fr: 'IA Explicable'
      },
      description: {
        en: 'Making complex models interpretable for stakeholder buy-in and trust',
        it: 'Rendere i modelli complessi interpretabili per l\'adesione e la fiducia degli stakeholder',
        fr: 'Rendre les modèles complexes interprétables pour l\'adhésion et la confiance des parties prenantes'
      },
      icon: Info,
      color: 'bg-blue-100 text-blue-600'
    },
    {
      title: {
        en: 'Flexible Collaboration',
        it: 'Collaborazione Flessibile',
        fr: 'Collaboration Flexible'
      },
      description: {
        en: 'On-call support and timezone-aligned project updates for seamless communication',
        it: 'Supporto su chiamata e aggiornamenti di progetto allineati al fuso orario per una comunicazione senza interruzioni',
        fr: 'Support sur appel et mises à jour de projet alignées sur le fuseau horaire pour une communication fluide'
      },
      icon: Clock,
      color: 'bg-purple-100 text-purple-600'
    },
    {
      title: {
        en: 'Special Rates',
        it: 'Tariffe Speciali',
        fr: 'Tarifs Spéciaux'
      },
      description: {
        en: 'Discounted services for non-profits and startups to support innovation',
        it: 'Servizi scontati per organizzazioni non-profit e startup per sostenere l\'innovazione',
        fr: 'Services à prix réduit pour les organisations à but non lucratif et les startups pour soutenir l\'innovation'
      },
      icon: BadgePercent,
      color: 'bg-red-100 text-red-600'
    }
  ];

  return (
    <section className="py-20 bg-white" id="why-choose-me">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="heading-lg mb-4 text-theme-olive">
            {translations.whatSetsMeApart[language]} <span className="text-theme-gold">{translations.apart[language]}</span>
          </h2>
          <p className="text-lg text-gray-700">
            {translations.whyChooseMeDescription[language]}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow border border-gray-100">
              <div className={`h-14 w-14 rounded-full ${advantage.color} flex items-center justify-center mb-4`}>
                <advantage.icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-theme-olive">
                {advantage.title[language as keyof typeof advantage.title]}
              </h3>
              <p className="text-gray-600">
                {advantage.description[language as keyof typeof advantage.description]}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-lg mb-6">
            {translations.whyChooseMeCallout[language]}
          </p>
          <button 
            onClick={() => document.querySelector('[id*="contact"]')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-block bg-theme-gold hover:bg-theme-gold/90 text-white px-6 py-3 rounded-md font-medium transition-all duration-300"
          >
            {translations.letsWorkTogether[language]}
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseMeSection;

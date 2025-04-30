
import React from "react";
import { Puzzle, Zap, Search, Handshake, PiggyBank } from "lucide-react";
import { useTranslation } from "react-i18next";

const WhyChooseMe = () => {
  const { t } = useTranslation();
  
  const advantages = [
    {
      icon: <Puzzle className="h-12 w-12 text-secondary" />,
      titleKey: 'whyMe.advantages.strategy.title',
      descriptionKey: 'whyMe.advantages.strategy.description',
    },
    {
      icon: <Zap className="h-12 w-12 text-secondary" />,
      titleKey: 'whyMe.advantages.prototyping.title',
      descriptionKey: 'whyMe.advantages.prototyping.description',
    },
    {
      icon: <Search className="h-12 w-12 text-secondary" />,
      titleKey: 'whyMe.advantages.explainable.title',
      descriptionKey: 'whyMe.advantages.explainable.description',
    },
    {
      icon: <Handshake className="h-12 w-12 text-secondary" />,
      titleKey: 'whyMe.advantages.collaboration.title',
      descriptionKey: 'whyMe.advantages.collaboration.description',
    },
    {
      icon: <PiggyBank className="h-12 w-12 text-secondary" />,
      titleKey: 'whyMe.advantages.rates.title',
      descriptionKey: 'whyMe.advantages.rates.description',
    },
  ];

  return (
    <section id="why-me" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('whyMe.title')} <span className="gradient-text">{t('whyMe.titleHighlight')}</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('whyMe.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-md border border-gray-100 card-hover">
              <div className="mb-4">{advantage.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{t(advantage.titleKey)}</h3>
              <p className="text-gray-600">{t(advantage.descriptionKey)}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('whyMe.bottomText')}
          </p>
          <a
            href="#contact"
            className="mt-6 inline-block bg-primary text-white rounded-full px-8 py-3 font-medium hover:bg-opacity-90 transition"
          >
            {t('whyMe.workTogether')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseMe;

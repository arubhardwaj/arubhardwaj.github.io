
import React from "react";
import { Briefcase, Users, Heart, MonitorSmartphone, PieChart, Building, Globe, Award } from "lucide-react";
import { useTranslation } from "react-i18next";

const IndustriesServed = () => {
  const { t } = useTranslation();
  
  const industries = [
    {
      icon: <Briefcase className="h-10 w-10 text-secondary" />,
      nameKey: 'industries.managementConsulting',
    },
    {
      icon: <Heart className="h-10 w-10 text-secondary" />,
      nameKey: 'industries.healthcare',
    },
    {
      icon: <MonitorSmartphone className="h-10 w-10 text-secondary" />,
      nameKey: 'industries.technology',
    },
    {
      icon: <PieChart className="h-10 w-10 text-secondary" />,
      nameKey: 'industries.marketing',
    },
    {
      icon: <Building className="h-10 w-10 text-secondary" />,
      nameKey: 'industries.realEstate',
    },
    {
      icon: <Users className="h-10 w-10 text-secondary" />,
      nameKey: 'industries.government',
    },
    {
      icon: <Globe className="h-10 w-10 text-secondary" />,
      nameKey: 'industries.ngos',
    },
    {
      icon: <Award className="h-10 w-10 text-secondary" />,
      nameKey: 'industries.politicalCampaigns',
    },
  ];

  return (
    <section id="industries" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('industries.title')} <span className="gradient-text">{t('industries.titleHighlight')}</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('industries.description')}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm text-center card-hover"
            >
              <div className="flex justify-center mb-4">{industry.icon}</div>
              <h3 className="font-medium">{t(industry.nameKey)}</h3>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('industries.bottomText')}
          </p>
          <a
            href="#consultation"
            className="mt-6 inline-block bg-secondary text-white rounded-full px-8 py-3 font-medium hover:bg-opacity-90 transition"
          >
            {t('industries.discussButton')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default IndustriesServed;

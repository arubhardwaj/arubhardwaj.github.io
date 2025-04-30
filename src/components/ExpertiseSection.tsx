
import React from "react";
import { Brain, Code, ChartBar, FileText, Server, LineChart } from "lucide-react";
import { useTranslation } from "react-i18next";

const ExpertiseSection = () => {
  const { t } = useTranslation();
  
  const expertiseAreas = [
    {
      icon: <Brain size={36} className="text-secondary mb-4" />,
      titleKey: 'expertise.areas.aiSolution.title',
      descriptionKey: 'expertise.areas.aiSolution.description',
    },
    {
      icon: <Code size={36} className="text-secondary mb-4" />,
      titleKey: 'expertise.areas.deepLearning.title',
      descriptionKey: 'expertise.areas.deepLearning.description',
    },
    {
      icon: <ChartBar size={36} className="text-secondary mb-4" />,
      titleKey: 'expertise.areas.mlAlgorithms.title',
      descriptionKey: 'expertise.areas.mlAlgorithms.description',
    },
    {
      icon: <FileText size={36} className="text-secondary mb-4" />,
      titleKey: 'expertise.areas.nlpVision.title',
      descriptionKey: 'expertise.areas.nlpVision.description',
    },
    {
      icon: <Server size={36} className="text-secondary mb-4" />,
      titleKey: 'expertise.areas.mlOps.title',
      descriptionKey: 'expertise.areas.mlOps.description',
    },
    {
      icon: <LineChart size={36} className="text-secondary mb-4" />,
      titleKey: 'expertise.areas.statistics.title',
      descriptionKey: 'expertise.areas.statistics.description',
    },
  ];

  const additionalSkills = [
    {
      titleKey: 'expertise.skills.dataViz.title',
      descriptionKey: 'expertise.skills.dataViz.description',
    },
    {
      titleKey: 'expertise.skills.nlp.title',
      descriptionKey: 'expertise.skills.nlp.description',
    },
    {
      titleKey: 'expertise.skills.geoSpatial.title',
      descriptionKey: 'expertise.skills.geoSpatial.description',
    },
    {
      titleKey: 'expertise.skills.aws.title',
      descriptionKey: 'expertise.skills.aws.description',
    },
    {
      titleKey: 'expertise.skills.etl.title',
      descriptionKey: 'expertise.skills.etl.description',
    },
    {
      titleKey: 'expertise.skills.ml.title',
      descriptionKey: 'expertise.skills.ml.description',
    },
  ];

  return (
    <section id="expertise" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('expertise.title')} <span className="gradient-text">{t('expertise.titleHighlight')}</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('expertise.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseAreas.map((area, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-md card-hover border border-gray-100"
            >
              {area.icon}
              <h3 className="text-xl font-semibold mb-2">{t(area.titleKey)}</h3>
              <p className="text-gray-600">{t(area.descriptionKey)}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gray-50 rounded-xl p-8 border border-gray-100">
          <h3 className="text-2xl font-semibold mb-6 text-center">{t('expertise.additionalSkills')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalSkills.map((skill, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold mb-2">{t(skill.titleKey)}</h4>
                <p className="text-gray-600 text-sm">{t(skill.descriptionKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;


import { 
  Brain, 
  BarChart3, 
  MessageSquare, 
  Target, 
  Database, 
  LineChart,
  Zap,
  Shield
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ExpertiseSection = () => {
  const { language, translations } = useLanguage();

  const mainExpertise = [
    {
      title: 'Machine Learning',
      description: 'Advanced ML algorithms, deep learning, and neural networks for predictive analytics and automation',
      icon: Brain,
      color: 'bg-blue-100 text-blue-600'
    },
    {
      title: 'Predictive Analytics',
      description: 'Forecasting models, trend analysis, and statistical modeling for business intelligence',
      icon: BarChart3,
      color: 'bg-green-100 text-green-600'
    },
    {
      title: 'Natural Language Processing',
      description: 'Text analysis, sentiment analysis, chatbots, and language understanding systems',
      icon: MessageSquare,
      color: 'bg-purple-100 text-purple-600'
    },
    {
      title: 'Data Strategy',
      description: 'Data architecture, governance, and strategic implementation of data-driven solutions',
      icon: Target,
      color: 'bg-orange-100 text-orange-600'
    }
  ];

  const additionalSkills = [
    { name: 'Python & R Programming', icon: Database },
    { name: 'TensorFlow & PyTorch', icon: Zap },
    { name: 'Data Visualization', icon: LineChart },
    { name: 'Cloud Platforms (AWS, Azure)', icon: Shield }
  ];

  return (
    <section className="py-20 bg-gray-50" id="expertise">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            {translations.aiAndMachineLearning[language]}
          </h2>
          <p className="text-lg text-gray-600">
            {translations.expertiseDescription[language]}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {mainExpertise.map((item, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className={`w-14 h-14 rounded-full ${item.color} flex items-center justify-center mb-6`}>
                <item.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold mb-6 text-center text-gray-900">
            {translations.additionalKeySkills[language]}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {additionalSkills.map((skill, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <skill.icon className="w-6 h-6 text-gray-600" />
                </div>
                <p className="text-sm font-medium text-gray-700">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;


import { 
  Lightbulb, 
  Rocket, 
  Info, 
  Clock,
  BadgePercent
} from 'lucide-react';

const WhyChooseMeSection = () => {
  const advantages = [
    {
      title: 'AI Strategy Consulting',
      description: 'Not just implementation, but strategic guidance on AI adoption to maximize ROI',
      icon: Lightbulb,
      color: 'bg-amber-100 text-amber-600'
    },
    {
      title: 'Rapid Prototyping',
      description: 'Quick proof-of-concept development to validate AI solutions before full investment',
      icon: Rocket,
      color: 'bg-green-100 text-green-600'
    },
    {
      title: 'Explainable AI',
      description: 'Making complex models interpretable for stakeholder buy-in and trust',
      icon: Info,
      color: 'bg-blue-100 text-blue-600'
    },
    {
      title: 'Flexible Collaboration',
      description: 'On-call support and timezone-aligned project updates for seamless communication',
      icon: Clock,
      color: 'bg-purple-100 text-purple-600'
    },
    {
      title: 'Special Rates',
      description: 'Discounted services for non-profits and startups to support innovation',
      icon: BadgePercent,
      color: 'bg-red-100 text-red-600'
    }
  ];

  return (
    <section className="py-20 bg-white" id="why-choose-me">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="heading-lg mb-4 text-theme-olive">What Sets Me <span className="text-theme-gold">Apart</span></h2>
          <p className="text-lg text-gray-700">
            Beyond technical expertise, I offer a comprehensive approach to ensure your AI projects deliver real business value.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow border border-gray-100">
              <div className={`h-14 w-14 rounded-full ${advantage.color} flex items-center justify-center mb-4`}>
                <advantage.icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-theme-olive">{advantage.title}</h3>
              <p className="text-gray-600">{advantage.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-lg mb-6">
            I'm committed to not just delivering AI solutions, but ensuring they create meaningful impact for your organization.
          </p>
          <a 
            href="#contact" 
            className="inline-block bg-theme-gold hover:bg-theme-gold/90 text-white px-6 py-3 rounded-md font-medium transition-all duration-300"
          >
            Let's Work Together
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseMeSection;

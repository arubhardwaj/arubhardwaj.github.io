
import { CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-theme-olive">
              Aru Bhardwaj
            </h2>
            <p className="text-lg mb-6 text-gray-700">
              As a data scientist and AI consultant with over 6 years of experience, I specialize in turning 
              complex data challenges into strategic business opportunities. My expertise spans machine learning, 
              predictive analytics, and data-driven decision making.
            </p>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-theme-gold">Professional Services</h3>
              
              <Card className="mb-4 shadow-md border-yellow-100">
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="text-lg font-medium">Standard Rate</h4>
                    <div className="w-16 h-8 bg-gray-200 rounded-full p-1 flex items-center">
                      <div className="w-6 h-6 rounded-full bg-white shadow-sm"></div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-theme-gold">450 EUR + VAT</span>
                    <span className="text-gray-500 ml-1">per day</span>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle size={20} className="text-green-500 mr-2 shrink-0 mt-0.5" />
                      <span>Customized solutions tailored to your specific business requirements</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={20} className="text-green-500 mr-2 shrink-0 mt-0.5" />
                      <span>Weekly or monthly billing options available for ongoing projects</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={20} className="text-green-500 mr-2 shrink-0 mt-0.5" />
                      <span>Project-based fixed pricing available upon assessment</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <a 
                href="#contact" 
                className="inline-block bg-theme-olive hover:bg-theme-olive/90 text-white px-6 py-3 rounded-md font-medium transition-all duration-300"
              >
                Schedule a Consultation
              </a>
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-xl">
            <div className="border-8 border-theme-gold rounded-full overflow-hidden aspect-square w-64 md:w-80 mx-auto">
              <img 
                src="/lovable-uploads/3961e730-26c4-4c1e-9142-84c71787419b.png" 
                alt="Aru Bhardwaj" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-white p-6 text-center">
              <h3 className="text-xl font-bold mb-1 text-theme-olive">Aru Bhardwaj</h3>
              <p className="text-gray-600">
                Upwork Top-Rated Data Scientist | Predictive Analytics | NLP | Forecasting | Machine Learning
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

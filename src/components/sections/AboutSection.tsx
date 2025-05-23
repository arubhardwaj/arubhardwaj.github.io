
import { CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="heading-lg mb-6 text-theme-dark">
              Aru Bhardwaj
            </h2>
            <p className="text-lg mb-6 text-gray-700">
              As a data scientist and AI consultant with over 6 years of experience, I specialize in turning 
              complex data challenges into strategic business opportunities. My expertise spans machine learning, 
              predictive analytics, and data-driven decision making.
            </p>
            
            <div className="mb-8">
              <h3 className="heading-sm mb-4 text-theme-blue">Professional Services</h3>
              
              <Card className="mb-4 shadow-md">
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="text-lg font-medium">Hourly Rate</h4>
                    <span className="text-xl font-bold text-theme-blue">Standard Rate</span>
                  </div>
                  <div className="mb-4">
                    <span className="text-2xl font-bold">450 EUR + VAT</span>
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
                className="inline-block bg-theme-blue hover:bg-theme-blue/90 text-white px-6 py-3 rounded-md font-medium transition-all duration-300"
              >
                Schedule a Consultation
              </a>
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-xl">
            <div className="aspect-w-3 aspect-h-4 bg-gradient-to-br from-theme-blue via-theme-purple to-theme-teal p-1 rounded-lg">
              <div className="rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center">
                <div className="text-center p-8 text-gray-500">
                  [Your professional headshot image]
                </div>
              </div>
            </div>
            <div className="bg-white p-6">
              <h3 className="text-xl font-bold mb-1">Aru Bhardwaj</h3>
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

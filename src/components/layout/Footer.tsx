import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-hero-lime text-gray-700 pt-16 pb-6">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4 text-theme-olive">Aru Bhardwaj</h3>
            <p className="mb-4 text-gray-600">Transforming complex data challenges into actionable business intelligence through advanced analytics and custom AI systems.</p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/arub" aria-label="LinkedIn" className="text-theme-olive hover:text-theme-gold">
                <Linkedin size={20} />
              </a>
              <a href="https://www.malt.fr/profile/arubhardwaj" aria-label="Malt" className="text-theme-olive hover:text-theme-gold">
                <div className="w-5 h-5 flex items-center justify-center">
                  <img 
                    src="/lovable-uploads/1fa53f10-66e1-4d3b-b36d-4095f6e3d4bf.png" 
                    alt="Malt" 
                    className="w-4 h-4 object-contain"
                  />
                </div>
              </a>
              <a href="https://upwork.com/fl/arub" aria-label="Upwork" className="text-theme-olive hover:text-theme-gold">
                <div className="w-5 h-5 flex items-center justify-center">
                  <img 
                    src="/lovable-uploads/62d7931a-42c8-4548-97c4-7f582b78beb9.png" 
                    alt="Upwork" 
                    className="w-4 h-4 object-contain"
                  />
                </div>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-theme-olive">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-theme-gold transition-colors">Home</Link>
              </li>
              <li>
                <a href="#expertise" className="text-gray-600 hover:text-theme-gold transition-colors">Expertise</a>
              </li>
              <li>
                <a href="#industries" className="text-gray-600 hover:text-theme-gold transition-colors">Industries</a>
              </li>
              <li>
                <a href="#why-choose-me" className="text-gray-600 hover:text-theme-gold transition-colors">Why Choose Me</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-600 hover:text-theme-gold transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-theme-olive">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail size={20} className="shrink-0 mt-1 text-theme-gold" />
                <span>aru.bhardwaj@insighrix.eu</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={20} className="shrink-0 mt-1 text-theme-gold" />
                <span>+33 (0) 766985210</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={20} className="shrink-0 mt-1 text-theme-gold" />
                <span>Paris, France & Remote</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-theme-olive">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-600">AI & Machine Learning</li>
              <li className="text-gray-600">Predictive Analytics</li>
              <li className="text-gray-600">NLP Solutions</li>
              <li className="text-gray-600">Data Visualization</li>
              <li className="text-gray-600">AI Strategy Consulting</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-300 pt-6 text-center text-gray-600">
          <p>&copy; {currentYear} Aru Bhardwaj. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="gradient-dark text-gray-200 pt-16 pb-6 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4 gradient-text">Aru Bhardwaj</h3>
            <p className="mb-4 text-gray-400">Transforming complex data challenges into actionable business intelligence through advanced analytics and custom AI systems.</p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/arub" aria-label="LinkedIn" className="text-accent hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://www.malt.fr/profile/arubhardwaj" aria-label="Malt" className="text-accent hover:text-primary transition-colors">
                <div className="w-6 h-6 flex items-center justify-center bg-white rounded-full">
                  <img 
                    src="/lovable-uploads/1fa53f10-66e1-4d3b-b36d-4095f6e3d4bf.png" 
                    alt="Malt" 
                    className="w-5 h-5 object-contain"
                  />
                </div>
              </a>
              <a href="https://upwork.com/fl/arub" aria-label="Upwork" className="text-accent hover:text-primary transition-colors">
                <div className="w-6 h-6 flex items-center justify-center bg-white rounded-full">
                  <img 
                    src="/lovable-uploads/62d7931a-42c8-4548-97c4-7f582b78beb9.png" 
                    alt="Upwork" 
                    className="w-5 h-5 object-contain"
                  />
                </div>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-accent transition-colors">Home</Link>
              </li>
              <li>
                <a href="#expertise" className="text-gray-400 hover:text-accent transition-colors">Expertise</a>
              </li>
              <li>
                <a href="#industries" className="text-gray-400 hover:text-accent transition-colors">Industries</a>
              </li>
              <li>
                <a href="#why-choose-me" className="text-gray-400 hover:text-accent transition-colors">Why Choose Me</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-accent transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail size={20} className="shrink-0 mt-1 text-accent" />
                <span className="text-gray-400">aru.bhardwaj@insightrix.eu</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={20} className="shrink-0 mt-1 text-accent" />
                <span className="text-gray-400">+33 (0) 766985210</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={20} className="shrink-0 mt-1 text-accent" />
                <span className="text-gray-400">Paris, France & Remote</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">AI & Machine Learning</li>
              <li className="text-gray-400">Predictive Analytics</li>
              <li className="text-gray-400">NLP Solutions</li>
              <li className="text-gray-400">Data Visualization</li>
              <li className="text-gray-400">AI Strategy Consulting</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-6 text-center text-gray-400">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-2">
            <p>&copy; {currentYear} Aru Bhardwaj. All rights reserved.</p>
            <div className="flex gap-4">
              <Link to="/terms-and-conditions" className="hover:text-accent transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

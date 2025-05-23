
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-theme-dark text-white pt-16 pb-6">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">Aru Bhardwaj</h3>
            <p className="mb-4 text-gray-300">Transforming complex data challenges into actionable business intelligence through advanced analytics and custom AI systems.</p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com" aria-label="LinkedIn" className="text-gray-300 hover:text-white">
                <Linkedin size={20} />
              </a>
              <a href="https://malt.fr" aria-label="Malt" className="text-gray-300 hover:text-white">
                <Twitter size={20} />
              </a>
              <a href="https://upwork.com" aria-label="Upwork" className="text-gray-300 hover:text-white">
                <Github size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <a href="#expertise" className="text-gray-300 hover:text-white transition-colors">Expertise</a>
              </li>
              <li>
                <a href="#industries" className="text-gray-300 hover:text-white transition-colors">Industries</a>
              </li>
              <li>
                <a href="#why-choose-me" className="text-gray-300 hover:text-white transition-colors">Why Choose Me</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail size={20} className="shrink-0 mt-1" />
                <span>aru.bhardwaj@insighrix.eu</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={20} className="shrink-0 mt-1" />
                <span>+33 (0) 766985210</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={20} className="shrink-0 mt-1" />
                <span>Paris, France & Remote</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">AI & Machine Learning</li>
              <li className="text-gray-300">Predictive Analytics</li>
              <li className="text-gray-300">NLP Solutions</li>
              <li className="text-gray-300">Data Visualization</li>
              <li className="text-gray-300">AI Strategy Consulting</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 text-center text-gray-400">
          <p>&copy; {currentYear} Aru Bhardwaj. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const scrollToSection = (sectionId: string) => {
    if (isHomePage) {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/#' + sectionId);
    }
  };

  return (
    <footer className="bg-hero-lime text-gray-700 pt-16 pb-6">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4 text-theme-olive">Aru Bhardwaj</h3>
            <p className="mb-4 text-gray-600">Fractional CTO architecting sovereign AI systems for startups and scale-ups across Europe. Custom ML, agentic RAG, and secure LLM infrastructure — 7+ years turning complex data into production intelligence.</p>
            <div className="flex items-center space-x-4">
              <a href="https://www.linkedin.com/in/arub" aria-label="LinkedIn" className="text-theme-olive hover:text-theme-gold">
                <Linkedin size={20} />
              </a>
              <a href="https://www.malt.fr/profile/arubhardwaj" aria-label="Malt" className="text-theme-olive hover:text-theme-gold">
                <div className="w-6 h-6 flex items-center justify-center bg-white rounded-full">
                  <img 
                    src="/lovable-uploads/1fa53f10-66e1-4d3b-b36d-4095f6e3d4bf.png" 
                    alt="Malt" 
                    className="w-5 h-5 object-contain"
                  />
                </div>
              </a>
              <a href="https://upwork.com/fl/arub" aria-label="Upwork" className="text-theme-olive hover:text-theme-gold">
                <div className="w-6 h-6 flex items-center justify-center bg-white rounded-full">
                  <img 
                    src="/lovable-uploads/62d7931a-42c8-4548-97c4-7f582b78beb9.png" 
                    alt="Upwork" 
                    className="w-5 h-5 object-contain"
                  />
                </div>
              </a>
              {/* Pride Flag Badge */}
              <div 
                className="w-6 h-4 rounded-sm overflow-hidden flex flex-col"
                title="LGBTQ+ Ally"
                aria-label="Pride Flag"
              >
                <div className="flex-1 bg-[#E40303]"></div>
                <div className="flex-1 bg-[#FF8C00]"></div>
                <div className="flex-1 bg-[#FFED00]"></div>
                <div className="flex-1 bg-[#008026]"></div>
                <div className="flex-1 bg-[#24408E]"></div>
                <div className="flex-1 bg-[#732982]"></div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-theme-olive">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-theme-gold transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-theme-gold transition-colors">About</Link>
              </li>
              <li>
                <Link to="/services/fractional-cto" className="text-gray-600 hover:text-theme-gold transition-colors">Fractional CTO</Link>
              </li>
              <li>
                <Link to="/services/mvp-builder" className="text-gray-600 hover:text-theme-gold transition-colors">MVP Builder</Link>
              </li>
              <li>
                <Link to="/services/sovereign-ai" className="text-gray-600 hover:text-theme-gold transition-colors">Sovereign AI</Link>
              </li>
              <li>
                <Link to="/submit-project" className="text-gray-600 hover:text-theme-gold transition-colors">Submit a Project</Link>
              </li>
              <li>
                <button onClick={() => scrollToSection('consultation')} className="text-gray-600 hover:text-theme-gold transition-colors">Contact</button>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-theme-olive">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail size={20} className="shrink-0 mt-1 text-theme-gold" />
                <a href="mailto:aru.bhardwaj@insightrix.eu" className="hover:text-theme-gold transition-colors">aru.bhardwaj@insightrix.eu</a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={20} className="shrink-0 mt-1 text-theme-gold" />
                <a href="tel:+33766985210" className="hover:text-theme-gold transition-colors">+33 (0) 766985210</a>
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
              <li className="text-gray-600">Fractional CTO & AI Strategy</li>
              <li className="text-gray-600">MVP Development & Rapid Prototyping</li>
              <li className="text-gray-600">Sovereign LLM Deployment (OVHcloud, Scaleway)</li>
              <li className="text-gray-600">Multi-Cloud AI (AWS Bedrock, Vertex AI, Azure)</li>
              <li className="text-gray-600">RAG Pipelines & Autonomous Agents</li>
              <li className="text-gray-600">GDPR & EU AI Act Compliance</li>
              <li className="text-gray-600">Generative AI & Prompt Engineering</li>
              <li className="text-gray-600">Machine Learning & Predictive Analytics</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-300 pt-6 text-gray-600">
          <div className="flex flex-col items-center gap-3 text-center">
            <p className="text-sm">
              &copy; {currentYear} <strong>Insightrix SAS</strong>. All rights reserved.
              <span className="block text-xs text-gray-500 mt-1">Aru Bhardwaj — Fractional CTO &amp; AI Strategist</span>
            </p>
            <p className="text-xs text-gray-500">
              60 Rue François Ier, 75008 Paris, France · SIRET 989 236 856 00013 · TVA FR42989236856
            </p>
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-xs">
              <Link to="/legal-notice" className="hover:text-theme-gold transition-colors">
                Legal Notice / Mentions Légales
              </Link>
              <span className="text-gray-300">·</span>
              <Link to="/terms-and-conditions" className="hover:text-theme-gold transition-colors">
                Terms &amp; Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

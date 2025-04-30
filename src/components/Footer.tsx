
import React from "react";
import { Linkedin, Briefcase } from "lucide-react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="gradient-bg py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4 text-primary">Aru Bhardwaj</h3>
            <p className="mb-4 text-gray-700">
              {t('footer.description')}
            </p>
            <p className="text-gray-700">
              {t('footer.copyright', { year: currentYear })}
            </p>
          </div>
          
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-4 text-primary">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-700 hover:text-primary transition">{t('footer.home')}</a>
              </li>
              <li>
                <a href="#expertise" className="text-gray-700 hover:text-primary transition">{t('header.expertise')}</a>
              </li>
              <li>
                <a href="#industries" className="text-gray-700 hover:text-primary transition">{t('header.industries')}</a>
              </li>
              <li>
                <a href="#why-me" className="text-gray-700 hover:text-primary transition">{t('header.whyChooseMe')}</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-700 hover:text-primary transition">{t('header.contact')}</a>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-4 text-primary">{t('footer.connect')}</h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href="https://www.linkedin.com/in/arub" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-700 hover:text-primary transition flex items-center gap-2"
                >
                  <Linkedin size={20} /> LinkedIn
                </a>
              </li>
              <li>
                <a 
                  href="https://www.malt.fr/profile/arubhardwaj" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-700 hover:text-primary transition flex items-center gap-2"
                >
                  <Briefcase size={20} /> Malt
                </a>
              </li>
              <li>
                <a 
                  href="https://upwork.com/fl/arub" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-700 hover:text-primary transition flex items-center gap-2"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="lucide-upwork"
                  >
                    <path d="M18 7.5c-1.4 0-2.6.8-3.2 2.1-.7-1-1.8-1.9-3.3-2.1-1.6-.2-3 .9-3.5 2.5-.6 2 0 4.1 2 5.5 1.3.9 2.8.9 4 .5v-2.7c-.2.1-.5.2-.7.2-.4.1-.9-.1-1.2-.5-.4-.6-.4-1.1-.3-1.6.1-.8.5-1.5 1.3-1.5.9 0 1.2.3 1.2 1.6v4h2v-4c0-1.3.3-1.6 1.2-1.6.8 0 1.2.7 1.3 1.5.1.5.1 1-.3 1.6-.3.4-.8.6-1.2.5-.2 0-.5-.1-.7-.2v2.7c1.2.4 2.7.4 4-.5 2-1.4 2.6-3.5 2-5.5-.5-1.6-1.9-2.7-3.5-2.5z" />
                    <path d="M11 6.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
                  </svg>
                  Upwork
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

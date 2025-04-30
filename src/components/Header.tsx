
import React, { useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import { useTranslation } from "react-i18next";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLangMenu = () => {
    setIsLangMenuOpen(!isLangMenuOpen);
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsLangMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="text-xl font-bold text-primary">
          <span className="gradient-text">Aru Bhardwaj</span>
          <span className="text-sm block text-gray-600">Data Scientist & AI Expert</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex items-center space-x-8">
            <a href="#expertise" className="text-gray-700 hover:text-secondary font-medium">
              {t('header.expertise')}
            </a>
            <a href="#industries" className="text-gray-700 hover:text-secondary font-medium">
              {t('header.industries')}
            </a>
            <a href="#why-me" className="text-gray-700 hover:text-secondary font-medium">
              {t('header.whyChooseMe')}
            </a>
            <a href="#contact" className="text-gray-700 hover:text-secondary font-medium">
              {t('header.contact')}
            </a>
          </nav>
          
          {/* Language Switcher (Desktop) */}
          <div className="relative">
            <button 
              onClick={toggleLangMenu}
              className="flex items-center space-x-1 text-gray-700 hover:text-secondary"
            >
              <Globe size={18} />
              <span className="text-sm">{i18n.language === 'fr' ? 'FR' : 'EN'}</span>
            </button>
            
            {isLangMenuOpen && (
              <div className="absolute right-0 mt-2 py-2 w-36 bg-white rounded-md shadow-lg z-50">
                <button 
                  onClick={() => changeLanguage('en')}
                  className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left ${i18n.language === 'en' ? 'font-medium' : ''}`}
                >
                  {t('languageSwitcher.en')}
                </button>
                <button 
                  onClick={() => changeLanguage('fr')}
                  className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left ${i18n.language === 'fr' ? 'font-medium' : ''}`}
                >
                  {t('languageSwitcher.fr')}
                </button>
              </div>
            )}
          </div>
          
          <a 
            href="#consultation" 
            className="bg-secondary text-white rounded-full px-5 py-2 font-medium hover:bg-opacity-90 transition"
          >
            {t('header.bookConsultation')}
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          {/* Language Switcher (Mobile) */}
          <button 
            onClick={toggleLangMenu}
            className="text-gray-700 focus:outline-none"
          >
            <Globe size={20} />
          </button>
          
          <button 
            className="text-gray-700 focus:outline-none" 
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Language Menu */}
      {isLangMenuOpen && (
        <div className="md:hidden bg-white absolute w-full py-2 shadow-md z-50">
          <div className="container mx-auto px-4 flex flex-col space-y-2">
            <button 
              onClick={() => changeLanguage('en')}
              className={`py-2 text-gray-700 hover:text-secondary text-left ${i18n.language === 'en' ? 'font-medium' : ''}`}
            >
              {t('languageSwitcher.en')}
            </button>
            <button 
              onClick={() => changeLanguage('fr')}
              className={`py-2 text-gray-700 hover:text-secondary text-left ${i18n.language === 'fr' ? 'font-medium' : ''}`}
            >
              {t('languageSwitcher.fr')}
            </button>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute w-full py-4 shadow-md z-40">
          <nav className="container mx-auto px-4 flex flex-col space-y-4">
            <a 
              href="#expertise" 
              className="text-gray-700 hover:text-secondary font-medium"
              onClick={toggleMenu}
            >
              {t('header.expertise')}
            </a>
            <a 
              href="#industries" 
              className="text-gray-700 hover:text-secondary font-medium"
              onClick={toggleMenu}
            >
              {t('header.industries')}
            </a>
            <a 
              href="#why-me" 
              className="text-gray-700 hover:text-secondary font-medium"
              onClick={toggleMenu}
            >
              {t('header.whyChooseMe')}
            </a>
            <a 
              href="#contact" 
              className="text-gray-700 hover:text-secondary font-medium"
              onClick={toggleMenu}
            >
              {t('header.contact')}
            </a>
            <a 
              href="#consultation" 
              className="bg-secondary text-white rounded-full px-5 py-2 font-medium hover:bg-opacity-90 transition text-center"
              onClick={toggleMenu}
            >
              {t('header.bookConsultation')}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

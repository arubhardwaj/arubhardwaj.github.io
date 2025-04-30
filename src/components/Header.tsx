
import React, { useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

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
          <span className="text-sm block text-gray-600">{t("header.title")}</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#expertise" className="text-gray-700 hover:text-secondary font-medium">
            {t("header.expertise")}
          </a>
          <a href="#industries" className="text-gray-700 hover:text-secondary font-medium">
            {t("header.industries")}
          </a>
          <a href="#why-me" className="text-gray-700 hover:text-secondary font-medium">
            {t("header.why")}
          </a>
          <a href="#contact" className="text-gray-700 hover:text-secondary font-medium">
            {t("header.contact")}
          </a>
          
          {/* Language Switcher */}
          <div className="relative">
            <button 
              onClick={toggleLangMenu} 
              className="flex items-center text-gray-700 hover:text-secondary font-medium"
            >
              <Globe size={20} className="mr-1" />
              <span>{i18n.language.toUpperCase()}</span>
            </button>
            
            {isLangMenuOpen && (
              <div className="absolute top-full right-0 mt-2 w-32 bg-white rounded-md shadow-lg py-1 z-50">
                <button
                  onClick={() => changeLanguage('en')}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  English
                </button>
                <button
                  onClick={() => changeLanguage('fr')}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Français
                </button>
                <button
                  onClick={() => changeLanguage('it')}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Italiano
                </button>
              </div>
            )}
          </div>
          
          <a 
            href="#consultation" 
            className="bg-secondary text-white rounded-full px-5 py-2 font-medium hover:bg-opacity-90 transition"
          >
            {t("header.book")}
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          {/* Language Switcher for Mobile */}
          <div className="relative">
            <button 
              onClick={toggleLangMenu} 
              className="flex items-center text-gray-700"
            >
              <Globe size={20} />
            </button>
            
            {isLangMenuOpen && (
              <div className="absolute top-full right-0 mt-2 w-32 bg-white rounded-md shadow-lg py-1 z-50">
                <button
                  onClick={() => changeLanguage('en')}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  English
                </button>
                <button
                  onClick={() => changeLanguage('fr')}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Français
                </button>
                <button
                  onClick={() => changeLanguage('it')}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Italiano
                </button>
              </div>
            )}
          </div>
          
          <button 
            className="text-gray-700 focus:outline-none" 
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute w-full py-4 shadow-md">
          <nav className="container mx-auto px-4 flex flex-col space-y-4">
            <a 
              href="#expertise" 
              className="text-gray-700 hover:text-secondary font-medium"
              onClick={toggleMenu}
            >
              {t("header.expertise")}
            </a>
            <a 
              href="#industries" 
              className="text-gray-700 hover:text-secondary font-medium"
              onClick={toggleMenu}
            >
              {t("header.industries")}
            </a>
            <a 
              href="#why-me" 
              className="text-gray-700 hover:text-secondary font-medium"
              onClick={toggleMenu}
            >
              {t("header.why")}
            </a>
            <a 
              href="#contact" 
              className="text-gray-700 hover:text-secondary font-medium"
              onClick={toggleMenu}
            >
              {t("header.contact")}
            </a>
            <a 
              href="#consultation" 
              className="bg-secondary text-white rounded-full px-5 py-2 font-medium hover:bg-opacity-90 transition text-center"
              onClick={toggleMenu}
            >
              {t("header.book")}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;


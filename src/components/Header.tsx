
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <a href="/" className="text-xl font-bold text-primary">Aru Bhardwaj</a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#expertise" className="text-gray-600 hover:text-primary transition">
              {t('header.expertise')}
            </a>
            <a href="#industries" className="text-gray-600 hover:text-primary transition">
              {t('header.industries')}
            </a>
            <a href="#why-me" className="text-gray-600 hover:text-primary transition">
              {t('header.whyChooseMe')}
            </a>
            <a href="#contact" className="text-gray-600 hover:text-primary transition">
              {t('header.contact')}
            </a>
            <LanguageSwitcher />
            <a
              href="#consultation"
              className="bg-secondary text-white rounded-full px-4 py-2 hover:bg-opacity-90 transition"
            >
              {t('header.bookConsultation')}
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={toggleMenu}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#expertise" 
                className="text-gray-600 hover:text-primary transition"
                onClick={() => setIsOpen(false)}
              >
                {t('header.expertise')}
              </a>
              <a 
                href="#industries" 
                className="text-gray-600 hover:text-primary transition"
                onClick={() => setIsOpen(false)}
              >
                {t('header.industries')}
              </a>
              <a 
                href="#why-me" 
                className="text-gray-600 hover:text-primary transition"
                onClick={() => setIsOpen(false)}
              >
                {t('header.whyChooseMe')}
              </a>
              <a 
                href="#contact" 
                className="text-gray-600 hover:text-primary transition"
                onClick={() => setIsOpen(false)}
              >
                {t('header.contact')}
              </a>
              <LanguageSwitcher />
              <a
                href="#consultation"
                className="bg-secondary text-white rounded-full px-4 py-2 hover:bg-opacity-90 transition inline-block w-fit"
                onClick={() => setIsOpen(false)}
              >
                {t('header.bookConsultation')}
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

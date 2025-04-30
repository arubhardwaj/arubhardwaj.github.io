
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Languages } from 'lucide-react';

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();
  
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex items-center">
      <Languages className="h-4 w-4 mr-2" />
      <div className="flex space-x-2">
        <button 
          className={`text-sm ${i18n.language === 'en' ? 'font-bold text-secondary' : 'text-gray-600 hover:text-primary'}`}
          onClick={() => changeLanguage('en')}
        >
          {t('languageSwitcher.en')}
        </button>
        <span>|</span>
        <button 
          className={`text-sm ${i18n.language === 'fr' ? 'font-bold text-secondary' : 'text-gray-600 hover:text-primary'}`}
          onClick={() => changeLanguage('fr')}
        >
          {t('languageSwitcher.fr')}
        </button>
      </div>
    </div>
  );
};

export default LanguageSwitcher;

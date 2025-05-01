
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe, Flag } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();
  
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    // Update HTML lang attribute for screen readers and SEO
    document.documentElement.lang = lng;
    // Update canonical and alternate language links
    updateLanguageMetaTags(lng);
  };

  // Update language meta tags on component mount
  useEffect(() => {
    updateLanguageMetaTags(i18n.language);
  }, [i18n.language]);

  const updateLanguageMetaTags = (currentLang: string) => {
    // Update canonical link
    let canonicalUrl = window.location.origin;
    if (currentLang !== 'en') {
      canonicalUrl += `?lang=${currentLang}`;
    }
    
    // Find existing canonical link or create a new one
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    // Set hreflang tags for language alternates
    const languages = ['en', 'fr', 'it'];
    
    // Remove any existing alternate links
    document.querySelectorAll('link[rel="alternate"][hreflang]').forEach(el => el.remove());
    
    // Add new alternate links
    languages.forEach(lang => {
      const link = document.createElement('link');
      link.setAttribute('rel', 'alternate');
      link.setAttribute('hreflang', lang);
      link.setAttribute('href', `${window.location.origin}${lang === 'en' ? '' : `?lang=${lang}`}`);
      document.head.appendChild(link);
    });
  };

  // Function to get the flag for each language
  const getLanguageFlag = (language: string) => {
    switch (language) {
      case 'en':
        return <Flag className="h-4 w-4 mr-2" />;
      case 'fr':
        return <Flag className="h-4 w-4 mr-2" />;
      case 'it':
        return <Flag className="h-4 w-4 mr-2" />;
      default:
        return <Globe className="h-4 w-4 mr-2" />;
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="flex items-center gap-2">
          <Globe className="h-4 w-4" />
          <span className="hidden sm:inline-block">{t(`languageSwitcher.${i18n.language}`)}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-white shadow-md">
        <DropdownMenuItem 
          className={i18n.language === 'en' ? 'font-bold text-secondary' : ''}
          onClick={() => changeLanguage('en')}
        >
          {getLanguageFlag('en')}
          {t('languageSwitcher.en')}
        </DropdownMenuItem>
        <DropdownMenuItem 
          className={i18n.language === 'fr' ? 'font-bold text-secondary' : ''}
          onClick={() => changeLanguage('fr')}
        >
          {getLanguageFlag('fr')}
          {t('languageSwitcher.fr')}
        </DropdownMenuItem>
        <DropdownMenuItem 
          className={i18n.language === 'it' ? 'font-bold text-secondary' : ''}
          onClick={() => changeLanguage('it')}
        >
          {getLanguageFlag('it')}
          {t('languageSwitcher.it')}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;

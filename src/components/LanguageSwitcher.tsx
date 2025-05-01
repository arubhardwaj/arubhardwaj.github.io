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

  // Function to get the appropriate flag for each language
  const getLanguageFlag = (language: string) => {
    switch (language) {
      case 'en':
        return (
          <div className="mr-2 flex items-center justify-center">
            <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path fill="#012169" d="M0 0h512v512H0z"/>
              <path fill="#FFF" d="M512 0v64L322 256l190 187v69h-67L254 324 68 512H0v-68l186-187L0 74V0h62l192 188L440 0z"/>
              <path fill="#C8102E" d="M184 324l11 34L42 512H0v-3l184-185zm124-12l54 8 150 147v45L308 312zM512 0L320 196l-4-44L466 0h46zM0 1l193 189-59-8L0 49V1z"/>
              <path fill="#FFF" d="M176 0v512h160V0H176zM0 176v160h512V176H0z"/>
              <path fill="#C8102E" d="M0 208v96h512v-96H0h-96z"/>
            </svg>
          </div>
        );
      case 'fr':
        return (
          <div className="mr-2 flex items-center justify-center">
            <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path fill="#fff" d="M0 0h512v512H0z"/>
              <path fill="#002654" d="M0 0h170.7v512H0z"/>
              <path fill="#CE1126" d="M341.3 0H512v512H341.3z"/>
            </svg>
          </div>
        );
      case 'it':
        return (
          <div className="mr-2 flex items-center justify-center">
            <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path fill="#fff" d="M0 0h512v512H0z"/>
              <path fill="#009246" d="M0 0h170.7v512H0z"/>
              <path fill="#CE2B37" d="M341.3 0H512v512H341.3z"/>
            </svg>
          </div>
        );
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

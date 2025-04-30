
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';
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
          {t('languageSwitcher.en')}
        </DropdownMenuItem>
        <DropdownMenuItem 
          className={i18n.language === 'fr' ? 'font-bold text-secondary' : ''}
          onClick={() => changeLanguage('fr')}
        >
          {t('languageSwitcher.fr')}
        </DropdownMenuItem>
        <DropdownMenuItem 
          className={i18n.language === 'it' ? 'font-bold text-secondary' : ''}
          onClick={() => changeLanguage('it')}
        >
          {t('languageSwitcher.it')}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;

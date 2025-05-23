
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'it' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  translations: Record<string, Record<Language, string>>;
}

const translations = {
  // Navigation links
  home: {
    en: 'Home',
    it: 'Home',
    fr: 'Accueil',
  },
  expertise: {
    en: 'Expertise',
    it: 'Competenze',
    fr: 'Expertise',
  },
  industries: {
    en: 'Industries',
    it: 'Settori',
    fr: 'Industries',
  },
  whyChooseMe: {
    en: 'Why Choose Me',
    it: 'Perché Scegliermi',
    fr: 'Pourquoi Me Choisir',
  },
  contact: {
    en: 'Contact',
    it: 'Contatto',
    fr: 'Contact',
  },
  bookConsultation: {
    en: 'Book Consultation',
    it: 'Prenota Consulenza',
    fr: 'Réserver Consultation',
  },
  // Professional services section
  professionalServices: {
    en: 'Professional Services',
    it: 'Servizi Professionali',
    fr: 'Services Professionnels',
  },
  hourlyRate: {
    en: 'Hourly Rate',
    it: 'Tariffa Oraria',
    fr: 'Taux Horaire',
  },
  standardRate: {
    en: 'Standard Rate',
    it: 'Tariffa Standard',
    fr: 'Taux Standard',
  },
  daily: {
    en: 'Daily',
    it: 'Giornaliero',
    fr: 'Journalier',
  },
  hourly: {
    en: 'Hourly',
    it: 'Orario',
    fr: 'Horaire',
  },
  perHour: {
    en: 'per hour',
    it: 'all\'ora',
    fr: 'par heure',
  },
  perDay: {
    en: 'per day',
    it: 'al giorno',
    fr: 'par jour',
  },
  scheduleConsultation: {
    en: 'Schedule a Consultation',
    it: 'Programma una Consulenza',
    fr: 'Planifier une Consultation',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translations }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

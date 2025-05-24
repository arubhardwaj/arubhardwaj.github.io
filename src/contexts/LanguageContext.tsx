
import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'it' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  translations: {
    [key: string]: {
      en: string;
      it: string;
      fr: string;
    };
  };
}

const translations = {
  // Navigation
  home: {
    en: 'Home',
    it: 'Home',
    fr: 'Accueil'
  },
  expertise: {
    en: 'Expertise',
    it: 'Competenze',
    fr: 'Expertise'
  },
  industries: {
    en: 'Industries',
    it: 'Industrie',
    fr: 'Industries'
  },
  whyChooseMe: {
    en: 'Why Choose Me',
    it: 'Perché Scegliermi',
    fr: 'Pourquoi Me Choisir'
  },
  contact: {
    en: 'Contact',
    it: 'Contatto',
    fr: 'Contact'
  },
  bookConsultation: {
    en: 'Book Consultation',
    it: 'Prenota Consulenza',
    fr: 'Réserver Consultation'
  },

  // Hero Section
  transformingData: {
    en: 'Transforming Data Into',
    it: 'Trasformare i Dati in',
    fr: 'Transformer les Données en'
  },
  intelligentSolutions: {
    en: 'Intelligent Solutions',
    it: 'Soluzioni Intelligenti',
    fr: 'Solutions Intelligentes'
  },
  heroDescription1: {
    en: 'Expert data scientist specializing in predictive analytics, NLP, forecasting, and machine learning solutions for businesses across Europe.',
    it: 'Scienziato dei dati esperto specializzato in analisi predittiva, NLP, previsioni e soluzioni di machine learning per aziende in Europa.',
    fr: 'Expert en science des données spécialisé dans l\'analyse prédictive, le NLP, les prévisions et les solutions d\'apprentissage automatique pour les entreprises en Europe.'
  },
  heroDescription2: {
    en: 'Let me help you unlock the hidden insights in your data and build AI systems that drive real business results.',
    it: 'Lascia che ti aiuti a sbloccare le intuizioni nascoste nei tuoi dati e a costruire sistemi AI che generano risultati commerciali reali.',
    fr: 'Laissez-moi vous aider à déverrouiller les insights cachés dans vos données et à construire des systèmes d\'IA qui génèrent de vrais résultats commerciaux.'
  },
  exploreExpertise: {
    en: 'Explore My Expertise',
    it: 'Esplora le Mie Competenze',
    fr: 'Explorer Mon Expertise'
  },
  bookAConsultation: {
    en: 'Book a Consultation',
    it: 'Prenota una Consulenza',
    fr: 'Réserver une Consultation'
  },

  // Expertise Section
  aiAndMachineLearning: {
    en: 'AI & Machine Learning',
    it: 'AI & Machine Learning',
    fr: 'IA & Apprentissage Automatique'
  },
  expertiseDescription: {
    en: 'Comprehensive AI and data science solutions tailored to transform your business challenges into competitive advantages.',
    it: 'Soluzioni complete di AI e data science su misura per trasformare le sfide aziendali in vantaggi competitivi.',
    fr: 'Solutions complètes d\'IA et de science des données sur mesure pour transformer vos défis commerciaux en avantages concurrentiels.'
  },
  additionalKeySkills: {
    en: 'Additional Key Skills',
    it: 'Competenze Chiave Aggiuntive',
    fr: 'Compétences Clés Supplémentaires'
  },

  // Contact Info
  email: {
    en: 'Email',
    it: 'Email',
    fr: 'Email'
  },
  phone: {
    en: 'Phone',
    it: 'Telefono',
    fr: 'Téléphone'
  },
  location: {
    en: 'Location',
    it: 'Posizione',
    fr: 'Localisation'
  },

  // About Section
  aboutMeDescription: {
    en: 'With over 8 years of experience in data science and AI, I help businesses transform their data into actionable insights. I specialize in building custom machine learning models, implementing NLP solutions, and creating predictive analytics systems that drive real business value.',
    it: 'Con oltre 8 anni di esperienza nella scienza dei dati e nell\'IA, aiuto le aziende a trasformare i loro dati in insights azionabili. Mi specializzo nella costruzione di modelli di machine learning personalizzati, nell\'implementazione di soluzioni NLP e nella creazione di sistemi di analisi predittiva che generano valore commerciale reale.',
    fr: 'Avec plus de 8 ans d\'expérience en science des données et IA, j\'aide les entreprises à transformer leurs données en insights exploitables. Je me spécialise dans la construction de modèles d\'apprentissage automatique personnalisés, l\'implémentation de solutions NLP et la création de systèmes d\'analyse prédictive qui génèrent une vraie valeur commerciale.'
  },
  professionalServices: {
    en: 'Professional Services',
    it: 'Servizi Professionali',
    fr: 'Services Professionnels'
  },
  standardRate: {
    en: 'Standard Daily Rate',
    it: 'Tariffa Giornaliera Standard',
    fr: 'Tarif Journalier Standard'
  },
  hourlyRate: {
    en: 'Hourly Rate',
    it: 'Tariffa Oraria',
    fr: 'Tarif Horaire'
  },
  daily: {
    en: 'Daily',
    it: 'Giornaliero',
    fr: 'Journalier'
  },
  hourly: {
    en: 'Hourly',
    it: 'Orario',
    fr: 'Horaire'
  },
  perHour: {
    en: 'per hour',
    it: 'all\'ora',
    fr: 'par heure'
  },
  perDay: {
    en: 'per day',
    it: 'al giorno',
    fr: 'par jour'
  },
  customizedSolutions: {
    en: 'Customized AI solutions',
    it: 'Soluzioni AI personalizzate',
    fr: 'Solutions IA personnalisées'
  },
  weeklyMonthlyBilling: {
    en: 'Weekly/Monthly billing available',
    it: 'Fatturazione settimanale/mensile disponibile',
    fr: 'Facturation hebdomadaire/mensuelle disponible'
  },
  projectBasedPricing: {
    en: 'Project-based pricing options',
    it: 'Opzioni di prezzo basate su progetto',
    fr: 'Options de tarification basées sur le projet'
  },
  scheduleConsultation: {
    en: 'Schedule Consultation',
    it: 'Programma Consulenza',
    fr: 'Programmer Consultation'
  },

  // Industries Section
  industriesServed: {
    en: 'Industries',
    it: 'Industrie',
    fr: 'Industries'
  },
  served: {
    en: 'Served',
    it: 'Servite',
    fr: 'Servies'
  },
  industriesDescription: {
    en: 'I have successfully delivered AI and data science solutions across diverse industries, helping organizations unlock the power of their data.',
    it: 'Ho fornito con successo soluzioni AI e di scienza dei dati in diverse industrie, aiutando le organizzazioni a sbloccare il potere dei loro dati.',
    fr: 'J\'ai livré avec succès des solutions d\'IA et de science des données dans diverses industries, aidant les organisations à débloquer la puissance de leurs données.'
  },
  industryCallout: {
    en: 'Don\'t see your industry listed? I work with businesses across all sectors.',
    it: 'Non vedi la tua industria elencata? Lavoro con aziende di tutti i settori.',
    fr: 'Vous ne voyez pas votre industrie listée ? Je travaille avec des entreprises de tous les secteurs.'
  },
  discussIndustryNeeds: {
    en: 'Discuss Your Industry Needs',
    it: 'Discuti le Tue Esigenze Industriali',
    fr: 'Discuter de Vos Besoins Industriels'
  },

  // Why Choose Me Section
  whatSetsMeApart: {
    en: 'What Sets Me',
    it: 'Cosa Mi Distingue',
    fr: 'Ce Qui Me Distingue'
  },
  apart: {
    en: 'Apart',
    it: '',
    fr: ''
  },
  whyChooseMeDescription: {
    en: 'Beyond technical expertise, I bring unique value propositions that make me the ideal data science partner for your business.',
    it: 'Oltre all\'expertise tecnica, porto proposte di valore uniche che mi rendono il partner ideale di scienza dei dati per la tua azienda.',
    fr: 'Au-delà de l\'expertise technique, j\'apporte des propositions de valeur uniques qui font de moi le partenaire idéal en science des données pour votre entreprise.'
  },
  whyChooseMeCallout: {
    en: 'Ready to experience the difference? Let\'s discuss how I can help transform your data challenges into opportunities.',
    it: 'Pronto a sperimentare la differenza? Discutiamo come posso aiutare a trasformare le tue sfide dei dati in opportunità.',
    fr: 'Prêt à faire l\'expérience de la différence ? Discutons de la façon dont je peux vous aider à transformer vos défis de données en opportunités.'
  },
  letsWorkTogether: {
    en: 'Let\'s Work Together',
    it: 'Lavoriamo Insieme',
    fr: 'Travaillons Ensemble'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translations }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

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

  // Consultation Section
  getInTouch: {
    en: 'Get In',
    it: 'Mettiti In',
    fr: 'Entrer En'
  },
  touch: {
    en: 'Touch',
    it: 'Contatto',
    fr: 'Contact'
  },
  contactDescription: {
    en: 'Ready to transform your data into actionable insights? Let\'s discuss your project and explore how AI can drive your business forward.',
    it: 'Pronto a trasformare i tuoi dati in insights azionabili? Discutiamo il tuo progetto ed esploriamo come l\'AI può far progredire la tua azienda.',
    fr: 'Prêt à trasformer vos données en insights exploitables ? Discutons de votre projet et explorons comment l\'IA peut faire progresser votre entreprise.'
  },
  contactInformation: {
    en: 'Contact Information',
    it: 'Informazioni di Contatto',
    fr: 'Informations de Contact'
  },
  followMe: {
    en: 'Follow Me',
    it: 'Seguimi',
    fr: 'Suivez-moi'
  },
  sendMessage: {
    en: 'Send Message',
    it: 'Invia Messaggio',
    fr: 'Envoyer Message'
  },
  fullName: {
    en: 'Full Name',
    it: 'Nome Completo',
    fr: 'Nom Complet'
  },
  enterFullName: {
    en: 'Enter your full name',
    it: 'Inserisci il tuo nome completo',
    fr: 'Entrez votre nom complet'
  },
  emailAddress: {
    en: 'Email Address',
    it: 'Indirizzo Email',
    fr: 'Adresse Email'
  },
  enterEmail: {
    en: 'Enter your email',
    it: 'Inserisci la tua email',
    fr: 'Entrez votre email'
  },
  subject: {
    en: 'Subject',
    it: 'Oggetto',
    fr: 'Sujet'
  },
  enterSubject: {
    en: 'Enter subject',
    it: 'Inserisci oggetto',
    fr: 'Entrez le sujet'
  },
  message: {
    en: 'Message',
    it: 'Messaggio',
    fr: 'Message'
  },
  enterMessage: {
    en: 'Enter your message',
    it: 'Inserisci il tuo messaggio',
    fr: 'Entrez votre message'
  },
  sending: {
    en: 'Sending...',
    it: 'Invio...',
    fr: 'Envoi...'
  },
  consultationPackage: {
    en: 'Consultation Package',
    it: 'Pacchetto Consulenza',
    fr: 'Package Consultation'
  },
  whatHappensNext: {
    en: 'What Happens Next?',
    it: 'Cosa Succede Dopo?',
    fr: 'Que Se Passe-t-il Ensuite ?'
  },
  confirmationEmail: {
    en: 'You\'ll receive a confirmation email within 5 minutes',
    it: 'Riceverai un\'email di conferma entro 5 minuti',
    fr: 'Vous recevrez un email de confirmation dans les 5 minutes'
  },
  personalContact: {
    en: 'I\'ll personally contact you within 24 hours to schedule',
    it: 'Ti contatterò personalmente entro 24 ore per programmare',
    fr: 'Je vous contacterai personnellement dans les 24 heures pour programmer'
  },
  calendarInvite: {
    en: 'Calendar invite sent for your preferred time slot',
    it: 'Invito del calendario inviato per la tua fascia oraria preferita',
    fr: 'Invitation de calendrier envoyée pour votre créneau préféré'
  },
  weekendAvailability: {
    en: 'Weekend availability for urgent projects',
    it: 'Disponibilità nei weekend per progetti urgenti',
    fr: 'Disponibilité le week-end pour les projets urgents'
  },
  preparationMaterials: {
    en: 'Preparation materials shared before our call',
    it: 'Materiali di preparazione condivisi prima della nostra chiamata',
    fr: 'Matériaux de préparation partagés avant notre appel'
  },
  refundPolicy: {
    en: 'Refunds will be issued within 48 hours if we could not find time slot that works for both',
    it: 'I rimborsi verranno emessi entro 48 ore se non riusciamo a trovare una fascia oraria che funzioni per entrambi',
    fr: 'Les remboursements seront émis dans les 48 heures si nous ne trouvons pas de créneau qui convient aux deux parties'
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
    en: 'With over 6+ years of experience in data science and AI, I help businesses transform their data into actionable insights. I specialize in building custom machine learning models, implementing NLP solutions, and creating predictive analytics systems that drive real business value.',
    it: 'Con oltre 6+ anni di esperienza nella scienza dei dati e nell\'IA, aiuto le aziende a trasformare i loro dati in insights azionabili. Mi specializzo nella costruzione di modelli di machine learning personalizzati, nell\'implementazione di soluzioni NLP e nella creazione di sistemi di analisi predittiva che generano valore commerciale reale.',
    fr: 'Avec plus de 6+ ans d\'expérience en science des données et IA, j\'aide les entreprises à transformer leurs données en insights exploitables. Je me spécialise dans la construction de modèles d\'apprentissage automatique personnalisés, l\'implémentation de solutions NLP et la création de systèmes d\'analyse prédictive qui génèrent une vraie valeur commerciale.'
  },
  professionalServices: {
    en: 'Professional Services',
    it: 'Servizi Professionali',
    fr: 'Services Professionnels'
  },
  pricing: {
    en: 'Pricing',
    it: 'Prezzi',
    fr: 'Tarification'
  },
  contactForPricing: {
    en: 'Contact for Pricing',
    it: 'Contattami per i Prezzi',
    fr: 'Contactez pour les Tarifs'
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

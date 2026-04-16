import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'it' | 'fr' | 'de';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  translations: {
    [key: string]: {
      en: string;
      it: string;
      fr: string;
      de: string;
    };
  };
}

const translations = {
  // Navigation
  home: {
    en: 'Home',
    it: 'Home',
    fr: 'Accueil',
    de: 'Startseite'
  },
  expertise: {
    en: 'Expertise',
    it: 'Competenze',
    fr: 'Expertise',
    de: 'Fachkompetenz'
  },
  industries: {
    en: 'Industries',
    it: 'Industrie',
    fr: 'Industries',
    de: 'Branchen'
  },
  whyChooseMe: {
    en: 'Why Choose Me',
    it: 'Perché Scegliermi',
    fr: 'Pourquoi Me Choisir',
    de: 'Warum ich'
  },
  contact: {
    en: 'Contact',
    it: 'Contatto',
    fr: 'Contact',
    de: 'Kontakt'
  },
  bookConsultation: {
    en: 'Book Consultation',
    it: 'Prenota Consulenza',
    fr: 'Réserver Consultation',
    de: 'Beratung buchen'
  },

  // Hero Section
  transformingData: {
    en: 'Transforming Data Into',
    it: 'Trasformare i Dati in',
    fr: 'Transformer les Données en',
    de: 'Daten verwandeln in'
  },
  intelligentSolutions: {
    en: 'Intelligent Solutions',
    it: 'Soluzioni Intelligenti',
    fr: 'Solutions Intelligentes',
    de: 'Intelligente Lösungen'
  },
  heroDescription1: {
    en: 'Expert data scientist specializing in predictive analytics, NLP, forecasting, and machine learning solutions for businesses across Europe.',
    it: 'Scienziato dei dati esperto specializzato in analisi predittiva, NLP, previsioni e soluzioni di machine learning per aziende in Europa.',
    fr: 'Expert en science des données spécialisé dans l\'analyse prédictive, le NLP, les prévisions et les solutions d\'apprentissage automatique pour les entreprises en Europe.',
    de: 'Erfahrener Data Scientist spezialisiert auf Predictive Analytics, NLP, Prognosen und Machine-Learning-Lösungen für Unternehmen in ganz Europa.'
  },
  heroDescription2: {
    en: 'Let me help you unlock the hidden insights in your data and build AI systems that drive real business results.',
    it: 'Lascia che ti aiuti a sbloccare le intuizioni nascoste nei tuoi dati e a costruire sistemi AI che generano risultati commerciali reali.',
    fr: 'Laissez-moi vous aider à déverrouiller les insights cachés dans vos données et à construire des systèmes d\'IA qui génèrent de vrais résultats commerciaux.',
    de: 'Lassen Sie mich Ihnen helfen, verborgene Erkenntnisse in Ihren Daten freizulegen und KI-Systeme aufzubauen, die echte Geschäftsergebnisse liefern.'
  },
  exploreExpertise: {
    en: 'Explore My Expertise',
    it: 'Esplora le Mie Competenze',
    fr: 'Explorer Mon Expertise',
    de: 'Meine Expertise entdecken'
  },
  bookAConsultation: {
    en: 'Book a Consultation',
    it: 'Prenota una Consulenza',
    fr: 'Réserver une Consultation',
    de: 'Beratung vereinbaren'
  },

  // Expertise Section
  aiAndMachineLearning: {
    en: 'AI & Machine Learning',
    it: 'AI & Machine Learning',
    fr: 'IA & Apprentissage Automatique',
    de: 'KI & Maschinelles Lernen'
  },
  expertiseDescription: {
    en: 'Comprehensive AI and data science solutions tailored to transform your business challenges into competitive advantages.',
    it: 'Soluzioni complete di AI e data science su misura per trasformare le sfide aziendali in vantaggi competitivi.',
    fr: 'Solutions complètes d\'IA et de science des données sur mesure pour transformer vos défis commerciaux en avantages concurrentiels.',
    de: 'Umfassende KI- und Data-Science-Lösungen, maßgeschneidert um Ihre geschäftlichen Herausforderungen in Wettbewerbsvorteile zu verwandeln.'
  },
  additionalKeySkills: {
    en: 'Additional Key Skills',
    it: 'Competenze Chiave Aggiuntive',
    fr: 'Compétences Clés Supplémentaires',
    de: 'Weitere Schlüsselkompetenzen'
  },

  // Consultation Section
  getInTouch: {
    en: 'Get In',
    it: 'Mettiti In',
    fr: 'Entrer En',
    de: 'Kontakt'
  },
  touch: {
    en: 'Touch',
    it: 'Contatto',
    fr: 'Contact',
    de: 'aufnehmen'
  },
  contactDescription: {
    en: 'Ready to transform your data into actionable insights? Let\'s discuss your project and explore how AI can drive your business forward.',
    it: 'Pronto a trasformare i tuoi dati in insights azionabili? Discutiamo il tuo progetto ed esploriamo come l\'AI può far progredire la tua azienda.',
    fr: 'Prêt à trasformer vos données en insights exploitables ? Discutons de votre projet et explorons comment l\'IA peut faire progresser votre entreprise.',
    de: 'Bereit, Ihre Daten in verwertbare Erkenntnisse umzuwandeln? Lassen Sie uns Ihr Projekt besprechen und erkunden, wie KI Ihr Unternehmen voranbringen kann.'
  },
  contactInformation: {
    en: 'Contact Information',
    it: 'Informazioni di Contatto',
    fr: 'Informations de Contact',
    de: 'Kontaktinformationen'
  },
  followMe: {
    en: 'Follow Me',
    it: 'Seguimi',
    fr: 'Suivez-moi',
    de: 'Folgen Sie mir'
  },
  sendMessage: {
    en: 'Send Message',
    it: 'Invia Messaggio',
    fr: 'Envoyer Message',
    de: 'Nachricht senden'
  },
  fullName: {
    en: 'Full Name',
    it: 'Nome Completo',
    fr: 'Nom Complet',
    de: 'Vollständiger Name'
  },
  enterFullName: {
    en: 'Enter your full name',
    it: 'Inserisci il tuo nome completo',
    fr: 'Entrez votre nom complet',
    de: 'Geben Sie Ihren vollständigen Namen ein'
  },
  emailAddress: {
    en: 'Email Address',
    it: 'Indirizzo Email',
    fr: 'Adresse Email',
    de: 'E-Mail-Adresse'
  },
  enterEmail: {
    en: 'Enter your email',
    it: 'Inserisci la tua email',
    fr: 'Entrez votre email',
    de: 'Geben Sie Ihre E-Mail ein'
  },
  subject: {
    en: 'Subject',
    it: 'Oggetto',
    fr: 'Sujet',
    de: 'Betreff'
  },
  enterSubject: {
    en: 'Enter subject',
    it: 'Inserisci oggetto',
    fr: 'Entrez le sujet',
    de: 'Betreff eingeben'
  },
  message: {
    en: 'Message',
    it: 'Messaggio',
    fr: 'Message',
    de: 'Nachricht'
  },
  enterMessage: {
    en: 'Enter your message',
    it: 'Inserisci il tuo messaggio',
    fr: 'Entrez votre message',
    de: 'Geben Sie Ihre Nachricht ein'
  },
  sending: {
    en: 'Sending...',
    it: 'Invio...',
    fr: 'Envoi...',
    de: 'Wird gesendet...'
  },
  consultationPackage: {
    en: 'Consultation Package',
    it: 'Pacchetto Consulenza',
    fr: 'Package Consultation',
    de: 'Beratungspaket'
  },
  whatHappensNext: {
    en: 'What Happens Next?',
    it: 'Cosa Succede Dopo?',
    fr: 'Que Se Passe-t-il Ensuite ?',
    de: 'Was passiert als Nächstes?'
  },
  confirmationEmail: {
    en: 'You\'ll receive a confirmation email within 5 minutes',
    it: 'Riceverai un\'email di conferma entro 5 minuti',
    fr: 'Vous recevrez un email de confirmation dans les 5 minutes',
    de: 'Sie erhalten innerhalb von 5 Minuten eine Bestätigungs-E-Mail'
  },
  personalContact: {
    en: 'I\'ll personally contact you within 24 hours to schedule',
    it: 'Ti contatterò personalmente entro 24 ore per programmare',
    fr: 'Je vous contacterai personnellement dans les 24 heures pour programmer',
    de: 'Ich werde Sie innerhalb von 24 Stunden persönlich kontaktieren, um einen Termin zu vereinbaren'
  },
  calendarInvite: {
    en: 'Calendar invite sent for your preferred time slot',
    it: 'Invito del calendario inviato per la tua fascia oraria preferita',
    fr: 'Invitation de calendrier envoyée pour votre créneau préféré',
    de: 'Kalendereinladung für Ihren bevorzugten Zeitraum gesendet'
  },
  weekendAvailability: {
    en: 'Weekend availability for urgent projects',
    it: 'Disponibilità nei weekend per progetti urgenti',
    fr: 'Disponibilité le week-end pour les projets urgents',
    de: 'Verfügbarkeit am Wochenende für dringende Projekte'
  },
  preparationMaterials: {
    en: 'Preparation materials shared before our call',
    it: 'Materiali di preparazione condivisi prima della nostra chiamata',
    fr: 'Matériaux de préparation partagés avant notre appel',
    de: 'Vorbereitungsmaterialien werden vor unserem Gespräch geteilt'
  },
  refundPolicy: {
    en: 'Refunds will be issued within 48 hours if we could not find time slot that works for both',
    it: 'I rimborsi verranno emessi entro 48 ore se non riusciamo a trovare una fascia oraria che funzioni per entrambi',
    fr: 'Les remboursements seront émis dans les 48 heures si nous ne trouvons pas de créneau qui convient aux deux parties',
    de: 'Rückerstattungen erfolgen innerhalb von 48 Stunden, wenn kein passender Termin für beide Seiten gefunden wird'
  },

  // Contact Info
  email: {
    en: 'Email',
    it: 'Email',
    fr: 'Email',
    de: 'E-Mail'
  },
  phone: {
    en: 'Phone',
    it: 'Telefono',
    fr: 'Téléphone',
    de: 'Telefon'
  },
  location: {
    en: 'Location',
    it: 'Posizione',
    fr: 'Localisation',
    de: 'Standort'
  },

  // About Section
  aboutMeDescription: {
    en: 'With over 7+ years of experience in data science and AI, I help businesses transform their data into actionable insights. I specialize in building custom machine learning models, implementing NLP solutions, and creating predictive analytics systems that drive real business value.',
    it: 'Con oltre 7+ anni di esperienza nella scienza dei dati e nell\'IA, aiuto le aziende a trasformare i loro dati in insights azionabili. Mi specializzo nella costruzione di modelli di machine learning personalizzati, nell\'implementazione di soluzioni NLP e nella creazione di sistemi di analisi predittiva che generano valore commerciale reale.',
    fr: 'Avec plus de 7+ ans d\'expérience en science des données et IA, j\'aide les entreprises à transformer leurs données en insights exploitables. Je me spécialise dans la construction de modèles d\'apprentissage automatique personnalisés, l\'implémentation de solutions NLP et la création de systèmes d\'analyse prédictive qui génèrent une vraie valeur commerciale.',
    de: 'Mit über 7+ Jahren Erfahrung in Data Science und KI helfe ich Unternehmen, ihre Daten in umsetzbare Erkenntnisse zu verwandeln. Ich bin spezialisiert auf den Aufbau maßgeschneiderter Machine-Learning-Modelle, die Implementierung von NLP-Lösungen und die Erstellung von Predictive-Analytics-Systemen, die echten Geschäftswert schaffen.'
  },
  professionalServices: {
    en: 'Professional Services',
    it: 'Servizi Professionali',
    fr: 'Services Professionnels',
    de: 'Professionelle Dienstleistungen'
  },
  pricing: {
    en: 'Pricing',
    it: 'Prezzi',
    fr: 'Tarification',
    de: 'Preise'
  },
  hourlyRate: {
    en: '€150/hour',
    it: '€150/ora',
    fr: '€150/heure',
    de: '€150/Stunde'
  },
  dailyRate: {
    en: '€700/day',
    it: '€700/giorno',
    fr: '€700/jour',
    de: '€700/Tag'
  },
  vatExtra: {
    en: '+ VAT',
    it: '+ IVA',
    fr: '+ TVA',
    de: '+ MwSt.'
  },
  customizedSolutions: {
    en: 'Customized AI solutions',
    it: 'Soluzioni AI personalizzate',
    fr: 'Solutions IA personnalisées',
    de: 'Maßgeschneiderte KI-Lösungen'
  },
  weeklyMonthlyBilling: {
    en: 'Weekly/Monthly billing available',
    it: 'Fatturazione settimanale/mensile disponibile',
    fr: 'Facturation hebdomadaire/mensuelle disponible',
    de: 'Wöchentliche/monatliche Abrechnung möglich'
  },
  projectBasedPricing: {
    en: 'Project-based pricing options',
    it: 'Opzioni di prezzo basate su progetto',
    fr: 'Options de tarification basées sur le projet',
    de: 'Projektbasierte Preisoptionen'
  },
  scheduleConsultation: {
    en: 'Schedule Consultation',
    it: 'Programma Consulenza',
    fr: 'Programmer Consultation',
    de: 'Beratung vereinbaren'
  },

  // Industries Section
  industriesServed: {
    en: 'Industries',
    it: 'Industrie',
    fr: 'Industries',
    de: 'Branchen'
  },
  served: {
    en: 'Served',
    it: 'Servite',
    fr: 'Servies',
    de: 'betreut'
  },
  industriesDescription: {
    en: 'I have successfully delivered AI and data science solutions across diverse industries, helping organizations unlock the power of their data.',
    it: 'Ho fornito con successo soluzioni AI e di scienza dei dati in diverse industrie, aiutando le organizzazioni a sbloccare il potere dei loro dati.',
    fr: 'J\'ai livré avec succès des solutions d\'IA et de science des données dans diverses industries, aidant les organisations à débloquer la puissance de leurs données.',
    de: 'Ich habe erfolgreich KI- und Data-Science-Lösungen in verschiedenen Branchen geliefert und Organisationen geholfen, das Potenzial ihrer Daten zu erschließen.'
  },
  industryCallout: {
    en: 'Don\'t see your industry listed? I work with businesses across all sectors.',
    it: 'Non vedi la tua industria elencata? Lavoro con aziende di tutti i settori.',
    fr: 'Vous ne voyez pas votre industrie listée ? Je travaille avec des entreprises de tous les secteurs.',
    de: 'Ihre Branche ist nicht aufgeführt? Ich arbeite mit Unternehmen aus allen Bereichen.'
  },
  discussIndustryNeeds: {
    en: 'Discuss Your Industry Needs',
    it: 'Discuti le Tue Esigenze Industriali',
    fr: 'Discuter de Vos Besoins Industriels',
    de: 'Ihre Branchenanforderungen besprechen'
  },

  // Why Choose Me Section
  whatSetsMeApart: {
    en: 'What Sets Me',
    it: 'Cosa Mi Distingue',
    fr: 'Ce Qui Me Distingue',
    de: 'Was mich'
  },
  apart: {
    en: 'Apart',
    it: 'Dagli Altri',
    fr: 'Des Autres',
    de: 'unterscheidet'
  },
  whyChooseMeDescription: {
    en: 'Beyond technical expertise, I bring unique value propositions that make me the ideal data science partner for your business.',
    it: 'Oltre all\'expertise tecnica, porto proposte di valore uniche che mi rendono il partner ideale di scienza dei dati per la tua azienda.',
    fr: 'Au-delà de l\'expertise technique, j\'apporte des propositions de valeur uniques qui font de moi le partenaire idéal en science des données pour votre entreprise.',
    de: 'Über technische Expertise hinaus bringe ich einzigartige Wertversprechen mit, die mich zum idealen Data-Science-Partner für Ihr Unternehmen machen.'
  },
  whyChooseMeCallout: {
    en: 'Ready to experience the difference? Let\'s discuss how I can help transform your data challenges into opportunities.',
    it: 'Pronto a sperimentare la differenza? Discutiamo come posso aiutare a trasformare le tue sfide dei dati in opportunità.',
    fr: 'Prêt à faire l\'expérience de la différence ? Discutons de la façon dont je peux vous aider à transformer vos défis de données en opportunités.',
    de: 'Bereit, den Unterschied zu erleben? Lassen Sie uns besprechen, wie ich Ihre Datenherausforderungen in Chancen verwandeln kann.'
  },
  letsWorkTogether: {
    en: 'Let\'s Work Together',
    it: 'Lavoriamo Insieme',
    fr: 'Travaillons Ensemble',
    de: 'Zusammenarbeiten'
  },
  submitYourProject: {
    en: 'Submit Your Project',
    it: 'Invia il Tuo Progetto',
    fr: 'Soumettez Votre Projet',
    de: 'Projekt Einreichen'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('preferred-language');
    return (saved as Language) || 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('preferred-language', lang);
  };

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


import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'it' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  translations: Record<string, Record<Language, string>>;
}

// All text translations for the site
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
  // Hero section
  transformingData: {
    en: 'Transforming Data Into',
    it: 'Trasformare i Dati in',
    fr: 'Transformer les Données en',
  },
  intelligentSolutions: {
    en: 'Intelligent Solutions',
    it: 'Soluzioni Intelligenti',
    fr: 'Solutions Intelligentes',
  },
  heroDescription1: {
    en: 'With 6+ years of specialized experience, I deliver advanced AI and machine learning solutions that drive business growth through data-driven insights. As a certified data scientist, I\'ve helped organizations across multiple sectors leverage their data assets to achieve measurable ROI and competitive advantages.',
    it: 'Con oltre 6 anni di esperienza specializzata, offro soluzioni avanzate di AI e machine learning che guidano la crescita aziendale attraverso insights basati sui dati. Come data scientist certificato, ho aiutato organizzazioni in diversi settori a sfruttare i loro asset di dati per ottenere ROI misurabili e vantaggi competitivi.',
    fr: 'Avec plus de 6 ans d\'expérience spécialisée, je propose des solutions avancées d\'IA et d\'apprentissage automatique qui favorisent la croissance des entreprises grâce à des insights basés sur les données. En tant que data scientist certifié, j\'ai aidé des organisations de plusieurs secteurs à tirer parti de leurs actifs de données pour obtenir un ROI mesurable et des avantages concurrentiels.',
  },
  heroDescription2: {
    en: 'Paris-based data scientist specializing in predictive analytics, NLP, forecasting, and machine learning solutions for businesses across Europe.',
    it: 'Data scientist con sede a Parigi specializzato in analisi predittive, NLP, previsioni e soluzioni di machine learning per aziende in tutta Europa.',
    fr: 'Data scientist basé à Paris spécialisé dans l\'analyse prédictive, le NLP, la prévision et les solutions de machine learning pour les entreprises à travers l\'Europe.',
  },
  exploreExpertise: {
    en: 'Explore My Expertise',
    it: 'Esplora Le Mie Competenze',
    fr: 'Explorez Mon Expertise',
  },
  bookAConsultation: {
    en: 'Book a Consultation',
    it: 'Prenota una Consulenza',
    fr: 'Réserver une Consultation',
  },
  email: {
    en: 'Email',
    it: 'Email',
    fr: 'Email',
  },
  phone: {
    en: 'Phone',
    it: 'Telefono',
    fr: 'Téléphone',
  },
  location: {
    en: 'Location',
    it: 'Posizione',
    fr: 'Emplacement',
  },
  // About section
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
  aboutMeDescription: {
    en: 'As a data scientist and AI consultant with over 6 years of experience, I specialize in turning complex data challenges into strategic business opportunities. My expertise spans machine learning, predictive analytics, and data-driven decision making.',
    it: 'Come data scientist e consulente AI con oltre 6 anni di esperienza, mi specializzo nel trasformare sfide di dati complesse in opportunità di business strategiche. La mia esperienza abbraccia machine learning, analisi predittive e decisioni basate sui dati.',
    fr: 'En tant que data scientist et consultant en IA avec plus de 6 ans d\'expérience, je me spécialise dans la transformation de défis de données complexes en opportunités commerciales stratégiques. Mon expertise s\'étend au machine learning, à l\'analyse prédictive et à la prise de décision basée sur les données.',
  },
  customizedSolutions: {
    en: 'Customized solutions tailored to your specific business requirements',
    it: 'Soluzioni personalizzate adatte alle tue esigenze aziendali specifiche',
    fr: 'Solutions personnalisées adaptées à vos besoins spécifiques',
  },
  weeklyMonthlyBilling: {
    en: 'Weekly or monthly billing options available for ongoing projects',
    it: 'Opzioni di fatturazione settimanale o mensile disponibili per progetti in corso',
    fr: 'Options de facturation hebdomadaire ou mensuelle disponibles pour les projets en cours',
  },
  projectBasedPricing: {
    en: 'Project-based fixed pricing available upon assessment',
    it: 'Prezzi fissi basati sul progetto disponibili dopo valutazione',
    fr: 'Tarification fixe basée sur le projet disponible après évaluation',
  },
  scheduleConsultation: {
    en: 'Schedule a Consultation',
    it: 'Programma una Consulenza',
    fr: 'Planifier une Consultation',
  },
  // Expertise section
  aiAndMachineLearning: {
    en: 'AI & Machine Learning',
    it: 'AI & Machine Learning',
    fr: 'IA & Apprentissage Automatique',
  },
  expertiseDescription: {
    en: 'Leveraging cutting-edge technologies and methodologies to deliver transformative AI solutions across various domains and use cases.',
    it: 'Utilizzo di tecnologie e metodologie all\'avanguardia per fornire soluzioni AI trasformative in vari domini e casi d\'uso.',
    fr: 'Exploitation de technologies et méthodologies de pointe pour fournir des solutions d\'IA transformatrices dans divers domaines et cas d\'utilisation.',
  },
  additionalKeySkills: {
    en: 'Additional Key Skills',
    it: 'Competenze Chiave Aggiuntive',
    fr: 'Compétences Clés Supplémentaires',
  },
  // Industries section
  industriesServed: {
    en: 'Industries',
    it: 'Settori',
    fr: 'Industries',
  },
  served: {
    en: 'Served',
    it: 'Serviti',
    fr: 'Servies',
  },
  industriesDescription: {
    en: 'I\'ve helped organizations across various sectors leverage the power of data science and AI to achieve their business goals.',
    it: 'Ho aiutato organizzazioni in vari settori a sfruttare la potenza della data science e dell\'AI per raggiungere i loro obiettivi aziendali.',
    fr: 'J\'ai aidé des organisations de différents secteurs à tirer parti de la puissance de la science des données et de l\'IA pour atteindre leurs objectifs commerciaux.',
  },
  industryCallout: {
    en: 'Whatever your industry, I can help you leverage AI and machine learning to gain competitive advantages and unlock new opportunities.',
    it: 'Qualunque sia il tuo settore, posso aiutarti a sfruttare l\'AI e il machine learning per ottenere vantaggi competitivi e sbloccare nuove opportunità.',
    fr: 'Quelle que soit votre industrie, je peux vous aider à tirer parti de l\'IA et de l\'apprentissage automatique pour obtenir des avantages concurrentiels et débloquer de nouvelles opportunités.',
  },
  discussIndustryNeeds: {
    en: 'Discuss Your Industry Needs',
    it: 'Discuti le Esigenze del Tuo Settore',
    fr: 'Discutez de vos Besoins Industriels',
  },
  // Why Choose Me section
  whatSetsMeApart: {
    en: 'What Sets Me',
    it: 'Cosa Mi',
    fr: 'Ce Qui Me',
  },
  apart: {
    en: 'Apart',
    it: 'Distingue',
    fr: 'Distingue',
  },
  whyChooseMeDescription: {
    en: 'Beyond technical expertise, I offer a comprehensive approach to ensure your AI projects deliver real business value.',
    it: 'Oltre all\'esperienza tecnica, offro un approccio completo per garantire che i tuoi progetti AI offrano un vero valore aziendale.',
    fr: 'Au-delà de l\'expertise technique, j\'offre une approche globale pour garantir que vos projets d\'IA apportent une réelle valeur commerciale.',
  },
  whyChooseMeCallout: {
    en: 'I\'m committed to not just delivering AI solutions, but ensuring they create meaningful impact for your organization.',
    it: 'Mi impegno non solo a fornire soluzioni AI, ma a garantire che creino un impatto significativo per la tua organizzazione.',
    fr: 'Je m\'engage non seulement à fournir des solutions d\'IA, mais à garantir qu\'elles créent un impact significatif pour votre organisation.',
  },
  letsWorkTogether: {
    en: 'Let\'s Work Together',
    it: 'Lavoriamo Insieme',
    fr: 'Travaillons Ensemble',
  },
  // Contact section
  getInTouch: {
    en: 'Get In',
    it: 'Mettiti In',
    fr: 'Entrer En',
  },
  touch: {
    en: 'Touch',
    it: 'Contatto',
    fr: 'Contact',
  },
  contactDescription: {
    en: 'Ready to transform your data into actionable insights? Book a consultation or send me a message.',
    it: 'Pronto a trasformare i tuoi dati in insights attuabili? Prenota una consulenza o inviami un messaggio.',
    fr: 'Prêt à transformer vos données en insights exploitables? Réservez une consultation ou envoyez-moi un message.',
  },
  contactInformation: {
    en: 'Contact Information',
    it: 'Informazioni di Contatto',
    fr: 'Informations de Contact',
  },
  followMe: {
    en: 'Follow Me',
    it: 'Seguimi',
    fr: 'Suivez-moi',
  },
  sendMessageTitle: {
    en: 'Send Me a Message',
    it: 'Inviami un Messaggio',
    fr: 'Envoyez-moi un Message',
  },
  fullName: {
    en: 'Full Name',
    it: 'Nome Completo',
    fr: 'Nom Complet',
  },
  enterFullName: {
    en: 'Enter your full name',
    it: 'Inserisci il tuo nome completo',
    fr: 'Entrez votre nom complet',
  },
  emailAddress: {
    en: 'Email Address',
    it: 'Indirizzo Email',
    fr: 'Adresse Email',
  },
  enterEmail: {
    en: 'Enter your email address',
    it: 'Inserisci il tuo indirizzo email',
    fr: 'Entrez votre adresse email',
  },
  subject: {
    en: 'Subject',
    it: 'Oggetto',
    fr: 'Sujet',
  },
  enterSubject: {
    en: 'What is your inquiry about?',
    it: 'Di cosa tratta la tua richiesta?',
    fr: 'Sur quoi porte votre demande?',
  },
  message: {
    en: 'Message',
    it: 'Messaggio',
    fr: 'Message',
  },
  enterMessage: {
    en: 'Please provide details about your project or inquiry',
    it: 'Per favore, fornisci dettagli sul tuo progetto o sulla tua richiesta',
    fr: 'Veuillez fournir des détails sur votre projet ou votre demande',
  },
  sending: {
    en: 'Sending...',
    it: 'Invio in corso...',
    fr: 'Envoi en cours...',
  },
  sendMessage: {
    en: 'Send Message',
    it: 'Invia Messaggio',
    fr: 'Envoyer le Message',
  },
  consultationPackage: {
    en: 'Consultation Package:',
    it: 'Pacchetto di Consulenza:',
    fr: 'Forfait de Consultation:',
  },
  whatHappensNext: {
    en: 'What Happens Next',
    it: 'Cosa Succede Dopo',
    fr: 'Ce Qui Se Passe Ensuite',
  },
  confirmationEmail: {
    en: 'Confirmation Email: You\'ll receive a payment confirmation immediately after checkout',
    it: 'Email di Conferma: Riceverai una conferma di pagamento immediatamente dopo il checkout',
    fr: 'Email de Confirmation: Vous recevrez une confirmation de paiement immédiatement après le paiement',
  },
  personalContact: {
    en: 'Personal Contact: I\'ll email you within 24 hours to discuss your specific requirements',
    it: 'Contatto Personale: Ti invierò un\'email entro 24 ore per discutere dei tuoi requisiti specifici',
    fr: 'Contact Personnel: Je vous enverrai un email dans les 24 heures pour discuter de vos besoins spécifiques',
  },
  calendarInvite: {
    en: 'Calendar Invite: You\'ll receive a scheduling link to book a time that works for you',
    it: 'Invito Calendario: Riceverai un link di programmazione per prenotare un orario che funzioni per te',
    fr: 'Invitation Calendrier: Vous recevrez un lien de planification pour réserver un horaire qui vous convient',
  },
  weekendAvailability: {
    en: 'Weekend Availability: Consultations are available on Saturdays for your convenience',
    it: 'Disponibilità nel Weekend: Le consulenze sono disponibili il sabato per tua comodità',
    fr: 'Disponibilité le Weekend: Les consultations sont disponibles le samedi pour votre commodité',
  },
  preparationMaterials: {
    en: 'Preparation Materials: You\'ll receive guidance on how to prepare for our meeting',
    it: 'Materiali di Preparazione: Riceverai indicazioni su come prepararti per il nostro incontro',
    fr: 'Matériaux de Préparation: Vous recevrez des conseils sur la façon de vous préparer pour notre réunion',
  },
  refundPolicy: {
    en: 'Refund Policy: Refund requests can be made within 24 hours if the call hasn\'t been scheduled',
    it: 'Politica di Rimborso: Le richieste di rimborso possono essere effettuate entro 24 ore se la chiamata non è stata programmata',
    fr: 'Politique de Remboursement: Les demandes de remboursement peuvent être faites dans les 24 heures si l\'appel n\'a pas été programmé',
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

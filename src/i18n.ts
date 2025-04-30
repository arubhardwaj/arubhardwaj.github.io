
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// English translations
const enTranslations = {
  header: {
    title: "Data Scientist & AI Expert",
    expertise: "Expertise",
    industries: "Industries",
    why: "Why Choose Me",
    contact: "Contact",
    book: "Book Consultation"
  },
  hero: {
    title: "Transforming Data Into",
    highlight: "Intelligent Solutions",
    description: "With 6+ years of specialized experience, I deliver advanced AI and machine learning solutions that drive business growth through data-driven insights. As a certified data scientist, I've helped organizations across multiple sectors leverage their data assets to achieve measurable ROI and competitive advantages.",
    exploreExpertise: "Explore My Expertise",
    bookConsultation: "Book a Consultation"
  },
  profile: {
    description: "As a data scientist and AI consultant with over 6 years of experience, I specialize in turning complex data challenges into strategic business opportunities. My expertise spans machine learning, predictive analytics, and data-driven decision making.",
    services: "Professional Services",
    standardRate: "Standard Rate",
    perDay: "per day",
    customSolutions: "Customized solutions tailored to your specific business requirements",
    billingOptions: "Weekly or monthly billing options available for ongoing projects",
    projectPricing: "Project-based fixed pricing available upon assessment",
    scheduleConsultation: "Schedule a Consultation"
  },
  contact: {
    title: "Get In",
    touch: "Touch",
    description: "Ready to transform your data into actionable insights? Let's discuss how I can help your organization leverage AI and machine learning.",
    contactInfo: "Contact Information",
    remoteAvailable: "Available Worldwide (Remote)",
    followMe: "Follow Me",
    bookConsultation: "Book a Consultation",
    consultationPackage: "Consultation Package",
    hour: "Hour",
    consultation: "Consultation",
    dataScience: "Data Science, Machine Learning and AI",
    whatHappensNext: "What Happens Next",
    confirmationEmail: "Confirmation Email",
    receiveConfirmation: "You'll receive a payment confirmation immediately after checkout",
    personalContact: "Personal Contact",
    emailWithin: "I'll email you within 24 hours to discuss your specific requirements",
    calendarInvite: "Calendar Invite",
    schedulingLink: "You'll receive a scheduling link to book a time that works for you",
    weekendAvailability: "Weekend Availability",
    saturdayAvailability: "Consultations are available on Saturdays for your convenience",
    refundPolicy: "Refund Policy",
    refundDescription: "Refunds can be requested within 24 hours of payment if we haven't scheduled the call yet",
    preparation: "Preparation",
    preparationDescription: "Please prepare any specific questions or objectives to maximize our session value",
    important: "Important",
    importantDescription: "After your payment is processed, you'll receive a confirmation email. I'll then contact you within 24 hours to arrange our consultation at a time that works best for you."
  },
  footer: {
    description: "Transforming complex data challenges into actionable business intelligence through advanced analytics and custom AI systems.",
    rightsReserved: "All rights reserved.",
    quickLinks: "Quick Links",
    home: "Home",
    connect: "Connect"
  }
};

// French translations
const frTranslations = {
  header: {
    title: "Data Scientist & Expert IA",
    expertise: "Expertise",
    industries: "Industries",
    why: "Pourquoi Me Choisir",
    contact: "Contact",
    book: "Réserver Consultation"
  },
  hero: {
    title: "Transformer les Données en",
    highlight: "Solutions Intelligentes",
    description: "Avec plus de 6 ans d'expérience spécialisée, je propose des solutions avancées d'IA et de machine learning qui stimulent la croissance des entreprises grâce à des insights basés sur les données. En tant que data scientist certifié, j'ai aidé des organisations dans de nombreux secteurs à tirer profit de leurs actifs de données pour obtenir un ROI mesurable et des avantages concurrentiels.",
    exploreExpertise: "Explorer Mon Expertise",
    bookConsultation: "Réserver une Consultation"
  },
  profile: {
    description: "En tant que data scientist et consultant en IA avec plus de 6 ans d'expérience, je me spécialise dans la transformation de défis de données complexes en opportunités stratégiques pour les entreprises. Mon expertise couvre le machine learning, l'analyse prédictive et la prise de décision basée sur les données.",
    services: "Services Professionnels",
    standardRate: "Tarif Standard",
    perDay: "par jour",
    customSolutions: "Solutions personnalisées adaptées à vos besoins spécifiques",
    billingOptions: "Options de facturation hebdomadaire ou mensuelle disponibles pour les projets continus",
    projectPricing: "Tarification fixe basée sur le projet disponible après évaluation",
    scheduleConsultation: "Planifier une Consultation"
  },
  contact: {
    title: "Entrer en",
    touch: "Contact",
    description: "Prêt à transformer vos données en insights actionnables ? Discutons de la façon dont je peux aider votre organisation à tirer parti de l'IA et du machine learning.",
    contactInfo: "Informations de Contact",
    remoteAvailable: "Disponible dans le Monde Entier (Télétravail)",
    followMe: "Suivez-moi",
    bookConsultation: "Réserver une Consultation",
    consultationPackage: "Forfait de Consultation",
    hour: "Heure",
    consultation: "Consultation",
    dataScience: "Science des Données, Machine Learning et IA",
    whatHappensNext: "Ce qui se passe ensuite",
    confirmationEmail: "Email de Confirmation",
    receiveConfirmation: "Vous recevrez une confirmation de paiement immédiatement après l'achat",
    personalContact: "Contact Personnel",
    emailWithin: "Je vous enverrai un email dans les 24 heures pour discuter de vos besoins spécifiques",
    calendarInvite: "Invitation Calendrier",
    schedulingLink: "Vous recevrez un lien pour planifier un créneau qui vous convient",
    weekendAvailability: "Disponibilité le Week-end",
    saturdayAvailability: "Les consultations sont disponibles le samedi pour votre commodité",
    refundPolicy: "Politique de Remboursement",
    refundDescription: "Les remboursements peuvent être demandés dans les 24 heures suivant le paiement si nous n'avons pas encore planifié l'appel",
    preparation: "Préparation",
    preparationDescription: "Veuillez préparer toutes vos questions ou objectifs spécifiques pour maximiser la valeur de notre session",
    important: "Important",
    importantDescription: "Après le traitement de votre paiement, vous recevrez un email de confirmation. Je vous contacterai ensuite dans les 24 heures pour organiser notre consultation à un moment qui vous convient le mieux."
  },
  footer: {
    description: "Transformer des défis de données complexes en intelligence commerciale exploitable grâce à des analyses avancées et des systèmes d'IA personnalisés.",
    rightsReserved: "Tous droits réservés.",
    quickLinks: "Liens Rapides",
    home: "Accueil",
    connect: "Connecter"
  }
};

// Italian translations
const itTranslations = {
  header: {
    title: "Data Scientist & Esperto di IA",
    expertise: "Competenze",
    industries: "Settori",
    why: "Perché Scegliermi",
    contact: "Contatti",
    book: "Prenota Consulenza"
  },
  hero: {
    title: "Trasformare i Dati in",
    highlight: "Soluzioni Intelligenti",
    description: "Con oltre 6 anni di esperienza specializzata, offro soluzioni avanzate di IA e machine learning che guidano la crescita aziendale attraverso insight basati sui dati. Come data scientist certificato, ho aiutato organizzazioni in molteplici settori a sfruttare i loro asset di dati per ottenere ROI misurabili e vantaggi competitivi.",
    exploreExpertise: "Esplora le Mie Competenze",
    bookConsultation: "Prenota una Consulenza"
  },
  profile: {
    description: "Come data scientist e consulente di IA con oltre 6 anni di esperienza, mi specializzo nel trasformare sfide complesse sui dati in opportunità strategiche per le aziende. La mia competenza comprende machine learning, analisi predittiva e processo decisionale basato sui dati.",
    services: "Servizi Professionali",
    standardRate: "Tariffa Standard",
    perDay: "al giorno",
    customSolutions: "Soluzioni personalizzate adattate alle tue specifiche esigenze aziendali",
    billingOptions: "Opzioni di fatturazione settimanali o mensili disponibili per progetti continuativi",
    projectPricing: "Prezzi fissi basati sul progetto disponibili previa valutazione",
    scheduleConsultation: "Programma una Consulenza"
  },
  contact: {
    title: "Mettiamoci in",
    touch: "Contatto",
    description: "Sei pronto a trasformare i tuoi dati in insight azionabili? Discutiamo di come posso aiutare la tua organizzazione a sfruttare l'IA e il machine learning.",
    contactInfo: "Informazioni di Contatto",
    remoteAvailable: "Disponibile in Tutto il Mondo (Remoto)",
    followMe: "Seguimi",
    bookConsultation: "Prenota una Consulenza",
    consultationPackage: "Pacchetto di Consulenza",
    hour: "Ora",
    consultation: "Consulenza",
    dataScience: "Scienza dei Dati, Machine Learning e IA",
    whatHappensNext: "Cosa Succede Dopo",
    confirmationEmail: "Email di Conferma",
    receiveConfirmation: "Riceverai una conferma di pagamento immediatamente dopo il checkout",
    personalContact: "Contatto Personale",
    emailWithin: "Ti invierò un'email entro 24 ore per discutere dei tuoi requisiti specifici",
    calendarInvite: "Invito Calendario",
    schedulingLink: "Riceverai un link per programmare un orario che funzioni per te",
    weekendAvailability: "Disponibilità nei Weekend",
    saturdayAvailability: "Le consulenze sono disponibili il sabato per tua comodità",
    refundPolicy: "Politica di Rimborso",
    refundDescription: "I rimborsi possono essere richiesti entro 24 ore dal pagamento se non abbiamo ancora programmato la chiamata",
    preparation: "Preparazione",
    preparationDescription: "Ti preghiamo di preparare domande o obiettivi specifici per massimizzare il valore della nostra sessione",
    important: "Importante",
    importantDescription: "Dopo l'elaborazione del pagamento, riceverai un'email di conferma. Ti contatterò entro 24 ore per organizzare la nostra consulenza in un orario che funzioni meglio per te."
  },
  footer: {
    description: "Trasformare sfide di dati complesse in intelligenza aziendale attraverso analisi avanzate e sistemi AI personalizzati.",
    rightsReserved: "Tutti i diritti riservati.",
    quickLinks: "Link Rapidi",
    home: "Home",
    connect: "Connettiti"
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: enTranslations
      },
      fr: {
        translation: frTranslations
      },
      it: {
        translation: itTranslations
      }
    }
  });

export default i18n;

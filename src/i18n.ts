import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// English translations
const enTranslations = {
  header: {
    expertise: 'Expertise',
    industries: 'Industries',
    whyChooseMe: 'Why Choose Me',
    contact: 'Contact',
    bookConsultation: 'Book Consultation'
  },
  hero: {
    title: 'Transforming Data Into',
    titleHighlight: 'Intelligent Solutions',
    description: 'With 6+ years of specialized experience, I deliver advanced AI and machine learning solutions that drive business growth through data-driven insights. As a certified data scientist, I\'ve helped organizations across multiple sectors leverage their data assets to achieve measurable ROI and competitive advantages.',
    exploreExpertise: 'Explore My Expertise',
    bookConsultation: 'Book a Consultation'
  },
  profile: {
    description: 'As a data scientist and AI consultant with over 6 years of experience, I specialize in turning complex data challenges into strategic business opportunities. My expertise spans machine learning, predictive analytics, and data-driven decision making.',
    professionalServices: 'Professional Services',
    standardRate: 'Standard Rate',
    rateValue: '500 EUR + VAT',
    perDay: 'per day',
    customSolutions: 'Customized solutions tailored to your specific business requirements',
    billingOptions: 'Weekly or monthly billing options available for ongoing projects',
    projectPricing: 'Project-based fixed pricing available upon assessment',
    scheduleConsultation: 'Schedule a Consultation'
  },
  expertise: {
    title: 'AI & Machine Learning',
    titleHighlight: 'Expertise',
    description: 'Leveraging cutting-edge technologies and methodologies to deliver transformative AI solutions across various domains and use cases.',
    additionalSkills: 'Additional Key Skills',
    areas: {
      aiSolution: {
        title: 'Custom AI Solution Development',
        description: 'Design and implement end-to-end ML pipelines tailored to your business objectives'
      },
      deepLearning: {
        title: 'Deep Learning Specialist',
        description: 'Expert in CNN, RNN, LSTM, Transformer architectures using TensorFlow/PyTorch'
      },
      mlAlgorithms: {
        title: 'Advanced ML Algorithms',
        description: 'Mastery of Random Forest, XGBoost, SVM, and ensemble methods for optimal predictive accuracy'
      },
      nlpVision: {
        title: 'NLP & Computer Vision',
        description: 'Production-ready solutions for text classification, sentiment analysis, image recognition, and generative AI'
      },
      mlOps: {
        title: 'MLOps & Deployment',
        description: 'Streamlined model deployment with monitoring and maintenance for sustainable AI solutions'
      },
      statistics: {
        title: 'Statistical Analysis & Modeling',
        description: 'Proficient in Hypothesis Testing, Mixed Models, ARIMA, and more advanced statistical methods'
      }
    },
    skills: {
      dataViz: {
        title: 'Data Visualization & Dashboards',
        description: 'Advanced skills in ggplot2, matplotlib, and R Shiny for insightful visual presentations'
      },
      nlp: {
        title: 'NLP & Text Analysis',
        description: 'Competent in clustering, text generation, and sentiment analysis'
      },
      geoSpatial: {
        title: 'Geospatial & Biostatistical Analysis',
        description: 'Proficient in applying computational methods to biostatistics and geospatial data'
      },
      aws: {
        title: 'AWS Technologies',
        description: 'Knowledgeable in EC2, EMR, Glue, SageMaker, QuickSight'
      },
      etl: {
        title: 'Data Scraping & ETL Processes',
        description: 'Efficient in extracting and processing large datasets'
      },
      ml: {
        title: 'Machine Learning & AI',
        description: 'Expert in PCA, K-means, Random Forest, XGBoost, SVM, Logistic Regression, Deep Learning using TensorFlow'
      }
    }
  },
  industries: {
    title: 'Industries',
    titleHighlight: 'Served',
    description: 'I\'ve helped organizations across various sectors leverage the power of data science and AI to achieve their business goals.',
    managementConsulting: 'Management Consulting',
    healthcare: 'Healthcare',
    technology: 'Technology',
    marketing: 'Marketing',
    realEstate: 'Real Estate',
    government: 'Government',
    ngos: 'NGOs',
    politicalCampaigns: 'Political Campaigns',
    bottomText: 'Whatever your industry, I can help you leverage AI and machine learning to gain competitive advantages and unlock new opportunities.',
    discussButton: 'Discuss Your Industry Needs'
  },
  whyMe: {
    title: 'What Sets Me',
    titleHighlight: 'Apart',
    description: 'Beyond technical expertise, I offer a comprehensive approach to ensure your AI projects deliver real business value.',
    advantages: {
      strategy: {
        title: 'AI Strategy Consulting',
        description: 'Not just implementation, but strategic guidance on AI adoption to maximize ROI'
      },
      prototyping: {
        title: 'Rapid Prototyping',
        description: 'Quick proof-of-concept development to validate AI solutions before full investment'
      },
      explainable: {
        title: 'Explainable AI',
        description: 'Making complex models interpretable for stakeholder buy-in and trust'
      },
      collaboration: {
        title: 'Flexible Collaboration',
        description: 'On-call support and timezone-aligned project updates for seamless communication'
      },
      rates: {
        title: 'Special Rates',
        description: 'Discounted services for non-profits and startups to support innovation'
      }
    },
    bottomText: 'I\'m committed to not just delivering AI solutions, but ensuring they create meaningful impact for your organization.',
    workTogether: 'Let\'s Work Together'
  },
  contact: {
    title: 'Get In',
    titleHighlight: 'Touch',
    description: 'Ready to transform your data into actionable insights? Let\'s discuss how I can help your organization leverage AI and machine learning.',
    contactInfo: 'Contact Information',
    followMe: 'Follow Me',
    bookConsultation: 'Book a Consultation',
    consultationPackage: 'Consultation Package:',
    consultationTitle: '1 Hour: Consultation - Data Science, Machine Learning and AI',
    whatHappensNext: 'What Happens Next',
    confirmation: {
      title: 'Confirmation Email:',
      description: 'You\'ll receive a payment confirmation immediately after checkout'
    },
    personalContact: {
      title: 'Personal Contact:',
      description: 'I\'ll email you within 24 hours to discuss your specific requirements'
    },
    calendarInvite: {
      title: 'Calendar Invite:',
      description: 'You\'ll receive a scheduling link to book a time that works for you'
    },
    weekendAvailability: {
      title: 'Weekend Availability:',
      description: 'Consultations are available on Saturdays for your convenience'
    },
    prepMaterials: {
      title: 'Preparation Materials:',
      description: 'You\'ll receive guidance on how to prepare for our meeting to maximize value'
    },
    refundPolicy: {
      title: 'Refund Policy:',
      description: 'Refund requests can be made within 24 hours if the call hasn\'t been scheduled'
    },
    important: 'Important:',
    importantText: 'After your payment is processed, you\'ll receive a confirmation email. I\'ll then contact you within 24 hours to arrange our consultation at a time that works best for you.',
    form: {
      contactMe: 'Send Me a Message',
      fullName: 'Full Name',
      fullNamePlaceholder: 'Enter your full name',
      emailAddress: 'Email Address',
      emailAddressPlaceholder: 'Enter your email address',
      inquirySubject: 'Subject',
      inquirySubjectPlaceholder: 'What is your inquiry about?',
      messageDetails: 'Message',
      messageDetailsPlaceholder: 'Please provide details about your project or inquiry',
      submitMessage: 'Send Message',
      submitting: 'Sending...',
      successTitle: 'Message Sent',
      successMessage: 'Thank you for your message. I will get back to you as soon as possible.',
      errorTitle: 'Error',
      errorMessage: 'There was an error sending your message. Please try again.',
      emailLabel: 'Email',
      phoneLabel: 'Phone',
      locationLabel: 'Location'
    }
  },
  footer: {
    description: 'Transforming complex data challenges into actionable business intelligence through advanced analytics and custom AI systems.',
    copyright: '© 2025 Aru Bhardwaj. All rights reserved.',
    quickLinks: 'Quick Links',
    home: 'Home',
    connect: 'Connect'
  },
  languageSwitcher: {
    en: 'English',
    fr: 'Français',
    it: 'Italiano'
  }
};

// French translations
const frTranslations = {
  header: {
    expertise: 'Expertise',
    industries: 'Secteurs',
    whyChooseMe: 'Pourquoi Me Choisir',
    contact: 'Contact',
    bookConsultation: 'Réserver une Consultation'
  },
  hero: {
    title: 'Transformer les Données en',
    titleHighlight: 'Solutions Intelligentes',
    description: 'Avec plus de 6 ans d\'expérience spécialisée, je propose des solutions avancées d\'IA et d\'apprentissage automatique qui stimulent la croissance des entreprises grâce à des insights basés sur les données. En tant que data scientist certifié, j\'ai aidé des organisations de multiples secteurs à tirer parti de leurs données pour obtenir un ROI mesurable et des avantages concurrentiels.',
    exploreExpertise: 'Explorer Mon Expertise',
    bookConsultation: 'Réserver une Consultation'
  },
  profile: {
    description: 'En tant que data scientist et consultant en IA avec plus de 6 ans d\'expérience, je me spécialise dans la transformation de défis complexes en opportunités stratégiques. Mon expertise couvre l\'apprentissage automatique, l\'analyse prédictive et la prise de décision basée sur les données.',
    professionalServices: 'Services Professionnels',
    standardRate: 'Tarif Standard',
    rateValue: '500 EUR + TVA',
    perDay: 'par jour',
    customSolutions: 'Solutions personnalisées adaptées à vos besoins spécifiques',
    billingOptions: 'Options de facturation hebdomadaire ou mensuelle pour les projets continus',
    projectPricing: 'Tarification fixe basée sur le projet disponible après évaluation',
    scheduleConsultation: 'Planifier une Consultation'
  },
  expertise: {
    title: 'IA & Apprentissage Automatique',
    titleHighlight: 'Expertise',
    description: 'Utilisation de technologies et méthodologies de pointe pour fournir des solutions d\'IA transformatives dans divers domaines et cas d\'utilisation.',
    additionalSkills: 'Compétences Clés Additionnelles',
    areas: {
      aiSolution: {
        title: 'Développement de Solutions IA Personnalisées',
        description: 'Conception et implémentation de pipelines ML adaptés à vos objectifs commerciaux'
      },
      deepLearning: {
        title: 'Spécialiste en Deep Learning',
        description: 'Expert en architectures CNN, RNN, LSTM, Transformer utilisant TensorFlow/PyTorch'
      },
      mlAlgorithms: {
        title: 'Algorithmes ML Avancés',
        description: 'Maîtrise de Random Forest, XGBoost, SVM et méthodes d\'ensemble pour une précision prédictive optimale'
      },
      nlpVision: {
        title: 'NLP & Vision par Ordinateur',
        description: 'Solutions prêtes pour la production pour la classification de texte, l\'analyse de sentiment, la reconnaissance d\'image et l\'IA générative'
      },
      mlOps: {
        title: 'MLOps & Déploiement',
        description: 'Déploiement de modèles avec surveillance et maintenance pour des solutions d\'IA durables'
      },
      statistics: {
        title: 'Analyse Statistique & Modélisation',
        description: 'Compétent en tests d\'hypothèses, modèles mixtes, ARIMA et méthodes statistiques avancées'
      }
    },
    skills: {
      dataViz: {
        title: 'Visualisation de Données & Tableaux de Bord',
        description: 'Compétences avancées en ggplot2, matplotlib et R Shiny pour des présentations visuelles perspicaces'
      },
      nlp: {
        title: 'NLP & Analyse de Texte',
        description: 'Compétent en clustering, génération de texte et analyse de sentiment'
      },
      geoSpatial: {
        title: 'Analyse Géospatiale & Biostatistique',
        description: 'Compétent dans l\'application de méthodes computationnelles à la biostatistique et aux données géospatiales'
      },
      aws: {
        title: 'Technologies AWS',
        description: 'Connaissance de EC2, EMR, Glue, SageMaker, QuickSight'
      },
      etl: {
        title: 'Scraping de Données & Processus ETL',
        description: 'Efficace dans l\'extraction et le traitement de grands ensembles de données'
      },
      ml: {
        title: 'Apprentissage Automatique & IA',
        description: 'Expert en PCA, K-means, Random Forest, XGBoost, SVM, Régression Logistique, Deep Learning avec TensorFlow'
      }
    }
  },
  industries: {
    title: 'Secteurs',
    titleHighlight: 'Servis',
    description: 'J\'ai aidé des organisations de divers secteurs à tirer parti de la puissance de la data science et de l\'IA pour atteindre leurs objectifs commerciaux.',
    managementConsulting: 'Conseil en Management',
    healthcare: 'Santé',
    technology: 'Technologie',
    marketing: 'Marketing',
    realEstate: 'Immobilier',
    government: 'Gouvernement',
    ngos: 'ONG',
    politicalCampaigns: 'Campagnes Politiques',
    bottomText: 'Quel que soit votre secteur, je peux vous aider à exploiter l\'IA et l\'apprentissage automatique pour obtenir des avantages concurrentiels et débloquer de nouvelles opportunités.',
    discussButton: 'Discuter de vos Besoins Sectoriels'
  },
  whyMe: {
    title: 'Ce Qui Me',
    titleHighlight: 'Distingue',
    description: 'Au-delà de l\'expertise technique, j\'offre une approche globale pour garantir que vos projets d\'IA apportent une valeur commerciale réelle.',
    advantages: {
      strategy: {
        title: 'Conseil en Stratégie IA',
        description: 'Pas seulement l\'implémentation, mais des conseils stratégiques sur l\'adoption de l\'IA pour maximiser le ROI'
      },
      prototyping: {
        title: 'Prototypage Rapide',
        description: 'Développement rapide de preuves de concept pour valider les solutions d\'IA avant un investissement complet'
      },
      explainable: {
        title: 'IA Explicable',
        description: 'Rendre les modèles complexes interprétables pour l\'adhésion et la confiance des parties prenantes'
      },
      collaboration: {
        title: 'Collaboration Flexible',
        description: 'Support à la demande et mises à jour de projet alignées sur les fuseaux horaires pour une communication fluide'
      },
      rates: {
        title: 'Tarifs Spéciaux',
        description: 'Services à prix réduits pour les organisations à but non lucratif et les startups afin de soutenir l\'innovation'
      }
    },
    bottomText: 'Je m\'engage non seulement à fournir des solutions d\'IA, mais à garantir qu\'elles créent un impact significatif pour votre organisation.',
    workTogether: 'Travaillons Ensemble'
  },
  contact: {
    title: 'Entrer en',
    titleHighlight: 'Contact',
    description: 'Prêt à transformer vos données en insights actionnables ? Discutons de la façon dont je peux aider votre organisation à tirer parti de l\'IA et du machine learning.',
    contactInfo: 'Informations de Contact',
    followMe: 'Suivez-moi',
    bookConsultation: 'Réserver une Consultation',
    consultationPackage: 'Forfait de Consultation:',
    consultationTitle: '1 Heure: Consultation - Science des Données, Apprentissage Automatique et IA',
    whatHappensNext: 'Prochaines Étapes',
    confirmation: {
      title: 'Email de Confirmation:',
      description: 'Vous recevrez une confirmation de paiement immédiatement après le règlement'
    },
    personalContact: {
      title: 'Contact Personnel:',
      description: 'Je vous contacterai dans les 24 heures pour discuter de vos besoins spécifiques'
    },
    calendarInvite: {
      title: 'Invitation Calendrier:',
      description: 'Vous recevrez un lien pour programmer un rendez-vous à un moment qui vous convient'
    },
    weekendAvailability: {
      title: 'Disponibilité le Weekend:',
      description: 'Les consultations sont disponibles le samedi pour votre commodité'
    },
    prepMaterials: {
      title: 'Matériel de Préparation:',
      description: 'Vous recevrez des conseils pour vous préparer à notre réunion afin d\'en maximiser la valeur'
    },
    refundPolicy: {
      title: 'Politique de Remboursement:',
      description: 'Les demandes de remboursement peuvent être faites dans les 24 heures si l\'appel n\'a pas été programmé'
    },
    important: 'Important:',
    importantText: 'Après le traitement de votre paiement, vous recevrez un email de confirmation. Je vous contacterai ensuite dans les 24 heures pour organiser notre consultation à un moment qui vous convient le mieux.',
    form: {
      contactMe: 'Envoyez-moi un Message',
      fullName: 'Nom Complet',
      fullNamePlaceholder: 'Entrez votre nom complet',
      emailAddress: 'Adresse Email',
      emailAddressPlaceholder: 'Entrez votre adresse email',
      inquirySubject: 'Sujet',
      inquirySubjectPlaceholder: 'Quel est l\'objet de votre demande ?',
      messageDetails: 'Message',
      messageDetailsPlaceholder: 'Veuillez fournir des détails sur votre projet ou demande',
      submitMessage: 'Envoyer le Message',
      submitting: 'Envoi en cours...',
      successTitle: 'Message Envoyé',
      successMessage: 'Merci pour votre message. Je vous répondrai dès que possible.',
      errorTitle: 'Erreur',
      errorMessage: 'Une erreur s\'est produite lors de l\'envoi de votre message. Veuillez réessayer.',
      emailLabel: 'Email',
      phoneLabel: 'Téléphone',
      locationLabel: 'Localisation'
    }
  },
  footer: {
    description: 'Transformer les défis complexes des données en intelligence commerciale exploitable grâce à l\'analyse avancée et aux systèmes d\'IA personnalisés.',
    copyright: '© 2025 Aru Bhardwaj. Tous droits réservés.',
    quickLinks: 'Liens Rapides',
    home: 'Accueil',
    connect: 'Connexion'
  },
  languageSwitcher: {
    en: 'English',
    fr: 'Français',
    it: 'Italiano'
  }
};

// Italian translations
const itTranslations = {
  header: {
    expertise: 'Competenze',
    industries: 'Settori',
    whyChooseMe: 'Perché Scegliermi',
    contact: 'Contatti',
    bookConsultation: 'Prenota una Consulenza'
  },
  hero: {
    title: 'Trasformare i Dati in',
    titleHighlight: 'Soluzioni Intelligenti',
    description: 'Con più di 6 anni di esperienza specializzata, offro soluzioni avanzate di IA e machine learning che stimolano la crescita aziendale attraverso insight basati sui dati. Come data scientist certificato, ho aiutato organizzazioni in diversi settori a sfruttare i loro asset di dati per ottenere un ROI misurabile e vantaggi competitivi.',
    exploreExpertise: 'Esplora le Mie Competenze',
    bookConsultation: 'Prenota una Consulenza'
  },
  profile: {
    description: 'Come data scientist e consulente di IA con oltre 6 anni di esperienza, mi specializzo nel trasformare sfide complesse di dati in opportunità di business strategiche. La mia esperienza comprende machine learning, analisi predittiva e processi decisionali basati sui dati.',
    professionalServices: 'Servizi Professionali',
    standardRate: 'Tariffa Standard',
    rateValue: '500 EUR + IVA',
    perDay: 'al giorno',
    customSolutions: 'Soluzioni personalizzate adattate alle tue specifiche esigenze aziendali',
    billingOptions: 'Opzioni di fatturazione settimanale o mensile disponibili per progetti continui',
    projectPricing: 'Prezzi fissi basati sul progetto disponibili dopo valutazione',
    scheduleConsultation: 'Programma una Consulenza'
  },
  expertise: {
    title: 'IA e Machine Learning',
    titleHighlight: 'Competenze',
    description: 'Utilizzo di tecnologie e metodologie all\'avanguardia per fornire soluzioni IA trasformative in vari domini e casi d\'uso.',
    additionalSkills: 'Competenze Chiave Aggiuntive',
    areas: {
      aiSolution: {
        title: 'Sviluppo di Soluzioni IA Personalizzate',
        description: 'Progettazione e implementazione di pipeline ML su misura per i tuoi obiettivi aziendali'
      },
      deepLearning: {
        title: 'Specialista in Deep Learning',
        description: 'Esperto in architetture CNN, RNN, LSTM, Transformer utilizzando TensorFlow/PyTorch'
      },
      mlAlgorithms: {
        title: 'Algoritmi ML Avanzati',
        description: 'Padronanza di Random Forest, XGBoost, SVM e metodi ensemble per un\'accuratezza predittiva ottimale'
      },
      nlpVision: {
        title: 'NLP e Computer Vision',
        description: 'Soluzioni pronte per la produzione per classificazione di testo, analisi del sentiment, riconoscimento immagini e IA generativa'
      },
      mlOps: {
        title: 'MLOps e Deployment',
        description: 'Implementazione semplificata di modelli con monitoraggio e manutenzione per soluzioni IA sostenibili'
      },
      statistics: {
        title: 'Analisi Statistica e Modellazione',
        description: 'Competente in test delle ipotesi, modelli misti, ARIMA e metodi statistici avanzati'
      }
    },
    skills: {
      dataViz: {
        title: 'Visualizzazione Dati e Dashboard',
        description: 'Competenze avanzate in ggplot2, matplotlib e R Shiny per presentazioni visive intuitive'
      },
      nlp: {
        title: 'NLP e Analisi del Testo',
        description: 'Competente in clustering, generazione di testo e analisi del sentiment'
      },
      geoSpatial: {
        title: 'Analisi Geospaziale e Biostatistica',
        description: 'Competente nell\'applicazione di metodi computazionali alla biostatistica e ai dati geospaziali'
      },
      aws: {
        title: 'Tecnologie AWS',
        description: 'Conoscenza di EC2, EMR, Glue, SageMaker, QuickSight'
      },
      etl: {
        title: 'Data Scraping e Processi ETL',
        description: 'Efficiente nell\'estrazione e processamento di grandi set di dati'
      },
      ml: {
        title: 'Machine Learning e IA',
        description: 'Esperto in PCA, K-means, Random Forest, XGBoost, SVM, Regressione Logistica, Deep Learning con TensorFlow'
      }
    }
  },
  industries: {
    title: 'Settori',
    titleHighlight: 'Serviti',
    description: 'Ho aiutato organizzazioni in vari settori a sfruttare il potere della data science e dell\'IA per raggiungere i loro obiettivi aziendali.',
    managementConsulting: 'Consulenza Gestionale',
    healthcare: 'Sanità',
    technology: 'Tecnologia',
    marketing: 'Marketing',
    realEstate: 'Immobiliare',
    government: 'Governo',
    ngos: 'ONG',
    politicalCampaigns: 'Campagne Politiche',
    bottomText: 'Qualunque sia il tuo settore, posso aiutarti a sfruttare l\'IA e il machine learning per ottenere vantaggi competitivi e sbloccare nuove opportunità.',
    discussButton: 'Discuti delle Tue Esigenze Settoriali'
  },
  whyMe: {
    title: 'Cosa Mi',
    titleHighlight: 'Distingue',
    description: 'Oltre all\'esperienza tecnica, offro un approccio completo per garantire che i tuoi progetti di IA forniscano un reale valore aziendale.',
    advantages: {
      strategy: {
        title: 'Consulenza Strategica IA',
        description: 'Non solo implementazione, ma anche guida strategica sull\'adozione dell\'IA per massimizzare il ROI'
      },
      prototyping: {
        title: 'Prototipazione Rapida',
        description: 'Sviluppo rapido di proof-of-concept per convalidare le soluzioni di IA prima di un investimento completo'
      },
      explainable: {
        title: 'IA Spiegabile',
        description: 'Rendere i modelli complessi interpretabili per ottenere il consenso e la fiducia degli stakeholder'
      },
      collaboration: {
        title: 'Collaborazione Flessibile',
        description: 'Supporto su chiamata e aggiornamenti di progetto allineati ai fusi orari per una comunicazione senza interruzioni'
      },
      rates: {
        title: 'Tariffe Speciali',
        description: 'Servizi scontati per organizzazioni non-profit e startup per supportare l\'innovazione'
      }
    },
    bottomText: 'Mi impegno non solo a fornire soluzioni di IA, ma a garantire che creino un impatto significativo per la tua organizzazione.',
    workTogether: 'Lavoriamo Insieme'
  },
  contact: {
    title: 'Mettiti in',
    titleHighlight: 'Contatto',
    description: 'Pronto a trasformare i tuoi dati in insight azionabili? Parliamo di come posso aiutare la tua organizzazione a sfruttare l\'IA e il machine learning.',
    contactInfo: 'Informazioni di Contatto',
    followMe: 'Seguimi',
    bookConsultation: 'Prenota una Consulenza',
    consultationPackage: 'Pacchetto di Consulenza:',
    consultationTitle: '1 Ora: Consulenza - Data Science, Machine Learning e IA',
    whatHappensNext: 'Cosa Succede Dopo',
    confirmation: {
      title: 'Email di Conferma:',
      description: 'Riceverai una conferma di pagamento immediatamente dopo il checkout'
    },
    personalContact: {
      title: 'Contatto Personale:',
      description: 'Ti contatterò entro 24 ore per discutere dei tuoi requisiti specifici'
    },
    calendarInvite: {
      title: 'Invito Calendario:',
      description: 'Riceverai un link per programmare un orario che funzioni per te'
    },
    weekendAvailability: {
      title: 'Disponibilità nei Weekend:',
      description: 'Le consulenze sono disponibili anche il sabato per tua comodità'
    },
    prepMaterials: {
      title: 'Materiali di Preparazione:',
      description: 'Riceverai una guida su come prepararti per il nostro incontro per massimizzarne il valore'
    },
    refundPolicy: {
      title: 'Politica di Rimborso:',
      description: 'Le richieste di rimborso possono essere effettuate entro 24 ore se la chiamata non è stata programmata'
    },
    important: 'Importante:',
    importantText: 'Dopo che il tuo pagamento sarà elaborato, riceverai un\'email di conferma. Ti contatterò entro 24 ore per organizzare la nostra consulenza in un momento più adatto a te.',
    form: {
      contactMe: 'Inviami un Messaggio',
      fullName: 'Nome Completo',
      fullNamePlaceholder: 'Inserisci il tuo nome completo',
      emailAddress: 'Indirizzo Email',
      emailAddressPlaceholder: 'Inserisci il tuo indirizzo email',
      inquirySubject: 'Oggetto',
      inquirySubjectPlaceholder: 'Qual è l\'oggetto della tua richiesta?',
      messageDetails: 'Messaggio',
      messageDetailsPlaceholder: 'Fornisci dettagli sul tuo progetto o richiesta',
      submitMessage: 'Invia Messaggio',
      submitting: 'Invio in corso...',
      successTitle: 'Messaggio Inviato',
      successMessage: 'Grazie per il tuo messaggio. Ti risponderò il prima possibile.',
      errorTitle: 'Errore',
      errorMessage: 'Si è verificato un errore durante l\'invio del messaggio. Riprova più tardi.',
      emailLabel: 'Email',
      phoneLabel: 'Telefono',
      locationLabel: 'Posizione'
    }
  },
  footer: {
    description: 'Trasformazione di sfide complesse di dati in intelligence aziendale utilizzabile attraverso analisi avanzate e sistemi IA personalizzati.',
    copyright: '© 2025 Aru Bhardwaj. Tutti i diritti riservati.',
    quickLinks: 'Link Rapidi',
    home: 'Home',
    connect: 'Connetti'
  },
  languageSwitcher: {
    en: 'English',
    fr: 'Français',
    it: 'Italiano'
  }
};

// Initialize i18n
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
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
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React already escapes by default
    }
  });

export default i18n;

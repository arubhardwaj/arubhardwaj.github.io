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
    en: 'I Build AI That',
    it: 'Creo AI Che',
    fr: 'Je Crée des IA Qui',
    de: 'Ich baue KI, die'
  },
  intelligentSolutions: {
    en: 'Ships to Production',
    it: 'Va in Produzione',
    fr: 'Passent en Production',
    de: 'in Produktion geht'
  },
  heroDescription1: {
    en: 'I architect production-grade AI systems built to ship — intelligent RAG pipelines, autonomous agents, and sovereign LLM infrastructure that stands up to compliance, scale, and scrutiny.',
    it: 'Progetto sistemi AI di livello enterprise costruiti per andare in produzione — pipeline RAG intelligenti, agenti autonomi e infrastrutture LLM sovrane che reggono compliance, scala e audit.',
    fr: 'Je conçois des systèmes IA de niveau production — pipelines RAG intelligents, agents autonomes et infrastructures LLM souveraines qui tiennent face à la conformité, l\'échelle et l\'audit.',
    de: 'Ich architektiere produktionsreife KI-Systeme — intelligente RAG-Pipelines, autonome Agenten und souveräne LLM-Infrastruktur, die Compliance, Skalierung und Prüfung standhält.'
  },
  heroDescription2: {
    en: 'Whether you\'re a founder mapping a technical roadmap or a team racing to launch an AI product, I close the gap between cutting-edge generative AI and real business impact — with systems built secure by design, compliant by default, and engineered to win.',
    it: 'Che tu sia un founder alla ricerca della tua roadmap tecnica o un team che corre a lanciare un prodotto AI, colmo il gap tra intelligenza artificiale di frontiera e impatto reale sul business — con sistemi secure by design, compliant by default e ingegnerizzati per vincere.',
    fr: 'Que vous soyez fondateur en quête d\'une feuille de route technique ou une équipe en course pour lancer un produit IA, je comble l\'écart entre IA générative de pointe et impact business réel — avec des systèmes pensés secure by design, compliant by default, et conçus pour gagner.',
    de: 'Ob Sie Gründer mit einer Tech-Roadmap im Aufbau sind oder ein Team, das ein KI-Produkt launchen will — ich schließe die Lücke zwischen modernster generativer KI und echtem Business-Impact. Mit Systemen, die secure by design, compliant by default und zum Gewinnen gebaut sind.'
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
  // Section heading pair (section title stays a two-tone split)
  sendAMessageInstead: {
    en: 'Prefer to send a message instead?',
    it: 'Preferisci inviare un messaggio?',
    fr: 'Vous préférez envoyer un message ?',
    de: 'Lieber eine Nachricht senden?'
  },
  getInTouch: {
    en: 'Book a',
    it: 'Prenota una',
    fr: 'Réservez une',
    de: 'Buchen Sie eine'
  },
  touch: {
    en: 'Consultation',
    it: 'Consulenza',
    fr: 'Consultation',
    de: 'Beratung'
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
    en: 'Book a Consultation',
    it: 'Prenota una Consulenza',
    fr: 'Réserver une Consultation',
    de: 'Beratung Buchen'
  },
  consultationNudge: {
    en: "Have a project in mind? Let's talk. Book a focused call — quick scope in 30 minutes, or a deep-dive to plan your build in 60.",
    it: "Hai un progetto in mente? Parliamone. Prenota una call mirata — scoping veloce in 30 minuti o approfondimento per pianificare il tuo progetto in 60.",
    fr: "Un projet en tête ? Parlons-en. Réservez un appel ciblé — cadrage rapide en 30 min, ou immersion pour planifier votre build en 60 min.",
    de: "Haben Sie ein Projekt? Lassen Sie uns sprechen. Buchen Sie einen fokussierten Call — schnelles Scoping in 30 Minuten oder Deep-Dive zur Projektplanung in 60."
  },
  book30Min: {
    en: 'Book 30-min Call',
    it: 'Prenota Call 30 min',
    fr: 'Réserver 30 min',
    de: '30-Min-Call Buchen'
  },
  book30MinSub: {
    en: 'Quick scope & validation',
    it: 'Scoping & validazione rapida',
    fr: 'Cadrage & validation rapides',
    de: 'Schnelles Scoping & Validierung'
  },
  book60Min: {
    en: 'Book 60-min Deep-Dive',
    it: 'Prenota Deep-Dive 60 min',
    fr: 'Réserver 60 min',
    de: '60-Min-Deep-Dive Buchen'
  },
  book60MinSub: {
    en: 'Strategy, architecture & roadmap',
    it: 'Strategia, architettura & roadmap',
    fr: 'Stratégie, architecture & feuille de route',
    de: 'Strategie, Architektur & Roadmap'
  },
  mostPopular: {
    en: 'Most Popular',
    it: 'Più Popolare',
    fr: 'Le Plus Populaire',
    de: 'Am Beliebtesten'
  },
  securePayment: {
    en: 'Secure payment via Stripe · Instant calendar invite',
    it: 'Pagamento sicuro tramite Stripe · Invito calendario istantaneo',
    fr: 'Paiement sécurisé via Stripe · Invitation calendrier immédiate',
    de: 'Sichere Zahlung via Stripe · Sofortige Kalendereinladung'
  },
  // Social proof line above CTAs
  consultationSocialProof: {
    en: 'Trusted by founders and teams across fintech, healthtech, luxury, and the public sector in France, Germany, the UK, and the Middle East.',
    it: 'Scelto da founder e team in fintech, healthtech, luxury e pubblica amministrazione in Francia, Germania, UK e Medio Oriente.',
    fr: 'Choisi par des fondateurs et équipes en fintech, healthtech, luxe et secteur public en France, Allemagne, au Royaume-Uni et au Moyen-Orient.',
    de: 'Geschätzt von Gründern und Teams aus Fintech, Healthtech, Luxury und öffentlichem Sektor in Frankreich, Deutschland, UK und dem Nahen Osten.'
  },
  // Value stack
  valueStackTitle: {
    en: "What's included",
    it: 'Cosa è incluso',
    fr: 'Ce qui est inclus',
    de: 'Was enthalten ist'
  },
  valueBullet1: {
    en: 'Live video call — screen-share ready',
    it: 'Videocall dal vivo — pronto per lo screen-share',
    fr: 'Appel vidéo en direct — partage d\'écran inclus',
    de: 'Live-Videocall — Bildschirmfreigabe bereit'
  },
  valueBullet2: {
    en: 'Written summary + action items within 24h',
    it: 'Riepilogo scritto + action item entro 24 ore',
    fr: 'Synthèse écrite + actions concrètes sous 24h',
    de: 'Schriftliche Zusammenfassung + To-Dos innerhalb von 24h'
  },
  valueBullet3: {
    en: 'Architecture sketches & concrete recommendations',
    it: 'Schizzi di architettura e raccomandazioni concrete',
    fr: 'Schémas d\'architecture et recommandations concrètes',
    de: 'Architektur-Skizzen & konkrete Empfehlungen'
  },
  valueBullet4: {
    en: 'Follow-up email Q&A for 7 days after the call',
    it: 'Q&A via email per 7 giorni dopo la call',
    fr: 'Questions/réponses par email pendant 7 jours après l\'appel',
    de: 'E-Mail-Follow-up mit Q&A für 7 Tage nach dem Call'
  },
  // Trust signals row
  trustSecureStripe: {
    en: 'Secure Stripe checkout',
    it: 'Checkout sicuro Stripe',
    fr: 'Paiement sécurisé Stripe',
    de: 'Sicherer Stripe-Checkout'
  },
  trustEuResidency: {
    en: 'EU data residency',
    it: 'Dati residenti in UE',
    fr: 'Données hébergées en UE',
    de: 'EU-Datenresidenz'
  },
  trustRefundable: {
    en: 'Refundable within 15 days (T&C apply)',
    it: 'Rimborsabile entro 15 giorni (si applicano T&C)',
    fr: 'Remboursable sous 15 jours (CGV applicables)',
    de: 'Rückerstattung innerhalb von 15 Tagen (AGB gelten)'
  },
  // Session preview — "best for"
  book30BestFor: {
    en: 'Best for validating an AI idea, scoping a small project, or one specific technical question.',
    it: 'Ideale per validare un\'idea AI, definire lo scope di un piccolo progetto o una domanda tecnica specifica.',
    fr: 'Idéal pour valider une idée IA, cadrer un petit projet ou poser une question technique précise.',
    de: 'Perfekt zum Validieren einer KI-Idee, Scoping eines kleinen Projekts oder einer konkreten technischen Frage.'
  },
  book60BestFor: {
    en: 'Best for architecture reviews, roadmap discussions, or deep-diving into your AI build end to end.',
    it: 'Ideale per review di architettura, discussioni di roadmap o deep-dive completo sul tuo build AI.',
    fr: 'Idéal pour une revue d\'architecture, une discussion de roadmap ou un deep-dive complet sur votre projet IA.',
    de: 'Perfekt für Architektur-Reviews, Roadmap-Gespräche oder End-to-End Deep-Dives in Ihren KI-Build.'
  },
  // Nudge card price line
  nudgePrice: {
    en: 'From €45 · 30 or 60 minutes',
    it: 'Da €45 · 30 o 60 minuti',
    fr: 'À partir de 45 € · 30 ou 60 minutes',
    de: 'Ab 45 € · 30 oder 60 Minuten'
  },
  whatHappensNext: {
    en: 'What Happens Next?',
    it: 'Cosa Succede Dopo?',
    fr: 'Et Ensuite ?',
    de: 'Wie geht es weiter?'
  },
  confirmationEmail: {
    en: 'Instant confirmation delivered to your inbox',
    it: 'Conferma immediata nella tua casella di posta',
    fr: 'Confirmation instantanée dans votre boîte mail',
    de: 'Sofortige Bestätigung in Ihrem Posteingang'
  },
  personalContact: {
    en: 'Personal response from me within 24 hours to align on goals',
    it: 'Risposta personale da parte mia entro 24 ore per allinearci sugli obiettivi',
    fr: 'Réponse personnelle de ma part sous 24h pour définir vos objectifs',
    de: 'Persönliche Rückmeldung von mir innerhalb von 24 Stunden zur Zielabstimmung'
  },
  calendarInvite: {
    en: 'Calendar invite for your preferred time slot — no back-and-forth',
    it: 'Invito calendario per la tua fascia oraria preferita — senza continui scambi',
    fr: 'Invitation calendrier à votre créneau préféré — sans allers-retours',
    de: 'Kalendereinladung zu Ihrem Wunschtermin — ohne langes Hin und Her'
  },
  weekendAvailability: {
    en: 'Evenings & weekends available for time-sensitive projects',
    it: 'Sere e weekend disponibili per progetti con scadenze urgenti',
    fr: 'Soirs et week-ends disponibles pour les projets urgents',
    de: 'Abende und Wochenenden verfügbar für zeitkritische Projekte'
  },
  preparationMaterials: {
    en: 'Tailored briefing document shared ahead of our session',
    it: 'Documento di briefing personalizzato condiviso prima della sessione',
    fr: 'Document de briefing personnalisé partagé avant notre session',
    de: 'Maßgeschneidertes Briefing-Dokument vor unserem Gespräch bereitgestellt'
  },
  refundPolicy: {
    en: 'Full refund guaranteed within 48 hours if scheduling doesn\'t work out',
    it: 'Rimborso completo garantito entro 48 ore in caso di incompatibilità di orari',
    fr: 'Remboursement intégral garanti sous 48h si la planification ne convient pas',
    de: 'Volle Rückerstattung innerhalb von 48 Stunden garantiert, falls kein passender Termin möglich ist'
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
    en: 'With 7+ years across AI and data engineering, I serve as a Fractional CTO for startups and scale-ups turning complex data into production intelligence. My specialty: architecting sovereign AI solutions — from custom ML models and agentic RAG systems to secure predictive pipelines running on European infrastructure.',
    it: 'Con 7+ anni di esperienza in AI e data engineering, opero come Fractional CTO per startup e scale-up che trasformano dati complessi in intelligenza di produzione. La mia specialità: architettare soluzioni AI sovrane — dai modelli ML custom ai sistemi RAG agentici, fino a pipeline predittive sicure su infrastruttura europea.',
    fr: 'Avec 7+ ans d\'expérience en IA et data engineering, j\'interviens comme Fractional CTO auprès de startups et scale-ups qui transforment des données complexes en intelligence de production. Ma spécialité : architecturer des solutions IA souveraines — des modèles ML sur mesure aux systèmes RAG agentiques, jusqu\'aux pipelines prédictifs sécurisés sur infrastructure européenne.',
    de: 'Mit 7+ Jahren Erfahrung in KI und Data Engineering agiere ich als Fractional CTO für Startups und Scale-ups, die komplexe Daten in produktionsreife Intelligenz verwandeln. Meine Spezialität: souveräne KI-Lösungen zu architektieren — von Custom-ML-Modellen über agentische RAG-Systeme bis zu sicheren Predictive-Pipelines auf europäischer Infrastruktur.'
  },
  aboutMeDescription2: {
    en: 'I don\'t just build models — I build the scalable, audit-ready technical foundations that compound in business value over time and keep your data under European jurisdiction.',
    it: 'Non costruisco solo modelli — costruisco le fondamenta tecniche scalabili e audit-ready che compongono valore di business nel tempo e mantengono i tuoi dati sotto giurisdizione europea.',
    fr: 'Je ne construis pas seulement des modèles — je construis les fondations techniques scalables et audit-ready qui composent de la valeur business dans le temps, tout en gardant vos données sous juridiction européenne.',
    de: 'Ich baue nicht nur Modelle — ich baue skalierbare, audit-ready technische Fundamente, die Business-Wert über die Zeit akkumulieren und Ihre Daten unter europäischer Jurisdiktion halten.'
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
  paymentSuccessTitle: {
    en: 'Payment Successful — Now Pick a Time',
    it: 'Pagamento Riuscito — Ora Scegli un Orario',
    fr: 'Paiement Réussi — Choisissez Maintenant un Créneau',
    de: 'Zahlung Erfolgreich — Wählen Sie Jetzt einen Termin'
  },
  paymentSuccessSubtitle: {
    en: 'Thanks for booking your consultation with me.',
    it: 'Grazie per aver prenotato la tua consulenza con me.',
    fr: 'Merci d\'avoir réservé votre consultation avec moi.',
    de: 'Danke, dass Sie Ihre Beratung bei mir gebucht haben.'
  },
  paymentSuccessHint: {
    en: 'Pick a time that works for you below — you\'ll receive a calendar invite instantly.',
    it: 'Scegli un orario qui sotto — riceverai subito un invito sul calendario.',
    fr: 'Choisissez un créneau ci-dessous — vous recevrez une invitation calendrier instantanément.',
    de: 'Wählen Sie unten einen Termin — Sie erhalten sofort eine Kalendereinladung.'
  },
  paymentSuccessFooter: {
    en: 'Having trouble with the scheduler? Email aru.bhardwaj@insightrix.eu',
    it: 'Problemi con il calendario? Scrivi a aru.bhardwaj@insightrix.eu',
    fr: 'Problème avec le planificateur ? Écrivez à aru.bhardwaj@insightrix.eu',
    de: 'Probleme mit dem Planer? Schreiben Sie an aru.bhardwaj@insightrix.eu'
  },
  bookCallGateTitle: {
    en: 'Complete Payment to Book a Time',
    it: 'Completa il Pagamento per Prenotare',
    fr: 'Finalisez le Paiement pour Réserver',
    de: 'Zahlung Abschließen zum Buchen'
  },
  bookCallGateBody: {
    en: 'This scheduling page is reserved for clients who have booked a paid consultation. Choose a 30-min or 60-min call first, then you\'ll be redirected back here to pick a time.',
    it: 'Questa pagina è riservata ai clienti che hanno prenotato una consulenza a pagamento. Scegli prima una chiamata di 30 o 60 minuti, poi verrai reindirizzato qui per scegliere un orario.',
    fr: 'Cette page est réservée aux clients ayant réservé une consultation payante. Choisissez d\'abord un appel de 30 ou 60 minutes, puis vous serez redirigé ici pour choisir un créneau.',
    de: 'Diese Seite ist Kunden vorbehalten, die eine bezahlte Beratung gebucht haben. Wählen Sie zuerst ein 30- oder 60-Minuten-Gespräch, dann werden Sie hierher zurückgeleitet, um einen Termin zu wählen.'
  },
  bookCallGateCta: {
    en: 'Book a Consultation',
    it: 'Prenota una Consulenza',
    fr: 'Réserver une Consultation',
    de: 'Beratung Buchen'
  },
  nudgeKicker: {
    en: "Let's talk",
    it: 'Parliamone',
    fr: 'Parlons-en',
    de: 'Lass uns reden'
  },
  nudgeTitle: {
    en: 'Thinking about your next AI move?',
    it: 'Pensando alla tua prossima mossa AI?',
    fr: 'Un projet IA en tête ?',
    de: 'Denken Sie über Ihren nächsten KI-Schritt nach?'
  },
  nudgeBody: {
    en: "Book a focused call — 30-min scope or 60-min deep-dive. No fluff, just real answers to your questions.",
    it: 'Prenota una call mirata — scoping in 30 minuti o deep-dive in 60. Niente fuffa, solo risposte concrete.',
    fr: "Réservez un appel ciblé — cadrage en 30 min ou immersion en 60. Pas de blabla, des réponses concrètes.",
    de: 'Buchen Sie einen fokussierten Call — Scoping in 30 Minuten oder Deep-Dive in 60. Kein Blabla, nur konkrete Antworten.'
  },
  nudgeCta: {
    en: 'Book a Call',
    it: 'Prenota una Call',
    fr: 'Réserver un Appel',
    de: 'Call Buchen'
  },
  nudgeDismiss: {
    en: 'Dismiss',
    it: 'Chiudi',
    fr: 'Fermer',
    de: 'Schließen'
  },
  // Engagement Models cards (inside AboutSection)
  engagementModelsTitle: {
    en: 'How We Work Together',
    it: 'Come Lavoriamo Insieme',
    fr: 'Comment Nous Collaborons',
    de: 'Wie Wir Zusammenarbeiten'
  },
  engagementHourlyTag: {
    en: 'Hourly',
    it: 'Oraria',
    fr: 'Horaire',
    de: 'Stündlich'
  },
  engagementHourlyDesc: {
    en: 'Best for focused consults, code reviews, or quick technical questions.',
    it: 'Ideale per consulenze mirate, code review o domande tecniche rapide.',
    fr: 'Idéal pour les consultations ciblées, revues de code ou questions techniques rapides.',
    de: 'Ideal für fokussierte Beratungen, Code-Reviews oder schnelle technische Fragen.'
  },
  engagementDailyTag: {
    en: 'Daily / Sprint',
    it: 'Giornaliera / Sprint',
    fr: 'Journalier / Sprint',
    de: 'Tagessatz / Sprint'
  },
  engagementDailyDesc: {
    en: 'Best for defined projects, MVPs, and multi-week build sprints.',
    it: 'Ideale per progetti definiti, MVP e sprint di sviluppo di più settimane.',
    fr: 'Idéal pour les projets définis, MVPs et sprints de développement pluri-hebdomadaires.',
    de: 'Ideal für definierte Projekte, MVPs und mehrwöchige Entwicklungssprints.'
  },
  engagementPartnershipTag: {
    en: 'Partnership',
    it: 'Partnership',
    fr: 'Partenariat',
    de: 'Partnerschaft'
  },
  engagementPartnershipBadge: {
    en: 'Startup-Friendly',
    it: 'Pensato per Startup',
    fr: 'Adapté aux Startups',
    de: 'Startup-Freundlich'
  },
  engagementPartnershipDesc: {
    en: 'Reduced service fee + equity or success bonus. For startups and long-term MVP builds where I go deep on your product.',
    it: 'Tariffa ridotta + equity o success fee. Per startup e sviluppo MVP a lungo termine dove mi immergo nel prodotto.',
    fr: 'Tarif réduit + equity ou success fee. Pour startups et développement MVP long terme où je m\'investis dans votre produit.',
    de: 'Reduzierter Stundensatz + Equity oder Erfolgshonorar. Für Startups und langfristige MVP-Entwicklung mit tiefer Produktbeteiligung.'
  },
  engagementPartnershipNote: {
    en: 'Service fee always applies. Pure-equity engagements are not offered.',
    it: 'La tariffa base si applica sempre. Non sono disponibili impegni solo in equity.',
    fr: 'Les frais de service s\'appliquent toujours. Les engagements uniquement en equity ne sont pas proposés.',
    de: 'Servicegebühr gilt immer. Reine Equity-Engagements werden nicht angeboten.'
  },
  engagementDiscussCta: {
    en: 'Discuss Partnership',
    it: 'Discuti la Partnership',
    fr: 'Discuter du Partenariat',
    de: 'Partnerschaft Besprechen'
  },
  // FAQ section
  faqNavLink: {
    en: 'FAQ',
    it: 'FAQ',
    fr: 'FAQ',
    de: 'FAQ'
  },
  faqTitle: {
    en: 'Frequently Asked Questions',
    it: 'Domande Frequenti',
    fr: 'Questions Fréquentes',
    de: 'Häufig Gestellte Fragen'
  },
  faqSubtitle: {
    en: 'Quick answers to the questions I get most often. Still not sure? Book a call — first answer is on me.',
    it: 'Risposte veloci alle domande che ricevo più spesso. Hai ancora dubbi? Prenota una call — la prima risposta è gratis.',
    fr: 'Réponses rapides aux questions qu\'on me pose le plus. Encore un doute ? Réservez un appel — la première réponse est offerte.',
    de: 'Schnelle Antworten auf die häufigsten Fragen. Noch unsicher? Buchen Sie einen Call — die erste Antwort geht auf mich.'
  },
  faq1Q: {
    en: 'Do you work on pure equity or revenue-share?',
    it: 'Lavori solo in equity o con revenue-share?',
    fr: 'Travaillez-vous uniquement en equity ou revenue-share ?',
    de: 'Arbeiten Sie rein auf Equity- oder Revenue-Share-Basis?'
  },
  faq1A: {
    en: 'I love working with ambitious founders, and I happily structure hybrid engagements — a reduced service fee combined with equity or a success bonus — when the fit is right. Pure-equity or revenue-share-only arrangements, however, aren\'t something I take on. <strong>A service fee is required on every project: it ensures focused delivery, protects both sides against misaligned timelines, and keeps the engagement sustainable the same way any senior technical hire is compensated.</strong> If you\'re an early-stage founder, let\'s talk — there\'s almost always a structure that works.',
    it: 'Amo lavorare con founder ambiziosi e strutturo volentieri ingaggi ibridi — tariffa ridotta più equity o success bonus — quando c\'è il giusto match. Ma accordi solo in equity o solo revenue-share non li accetto. <strong>Una tariffa di servizio è sempre richiesta: garantisce un\'esecuzione focalizzata, protegge entrambe le parti da tempistiche disallineate e rende il rapporto sostenibile, esattamente come qualsiasi senior tecnico viene retribuito.</strong> Se sei un founder early-stage, parliamone — quasi sempre troviamo una struttura che funziona.',
    fr: 'J\'adore travailler avec des fondateurs ambitieux et je structure volontiers des engagements hybrides — tarif réduit combiné à de l\'equity ou un bonus de succès — quand le fit est là. Les arrangements uniquement en equity ou revenue-share, en revanche, je ne les prends pas. <strong>Un service fee est requis sur chaque projet : il garantit une exécution focalisée, protège les deux parties contre les dérives de planning, et rend l\'engagement durable comme n\'importe quel poste senior technique.</strong> Si vous êtes fondateur early-stage, parlons-en — il y a presque toujours une structure qui fonctionne.',
    de: 'Ich liebe es, mit ambitionierten Gründern zu arbeiten, und strukturiere gerne hybride Engagements — reduzierte Servicegebühr kombiniert mit Equity oder Erfolgsbonus — wenn der Fit stimmt. Reine Equity- oder Revenue-Share-Vereinbarungen nehme ich jedoch nicht an. <strong>Eine Servicegebühr ist bei jedem Projekt erforderlich: sie sichert fokussierte Umsetzung, schützt beide Seiten vor Zeitplan-Diskrepanzen und hält die Zusammenarbeit nachhaltig — genau wie bei jeder anderen Senior-Position.</strong> Wenn Sie Gründer in der Frühphase sind, lassen Sie uns sprechen — es gibt fast immer eine Struktur, die passt.'
  },
  faq2Q: {
    en: 'How does the Partnership model work?',
    it: 'Come funziona il modello Partnership?',
    fr: 'Comment fonctionne le modèle Partenariat ?',
    de: 'Wie funktioniert das Partnerschafts-Modell?'
  },
  faq2A: {
    en: 'It\'s a hybrid engagement: a reduced cash rate (typically 40–60% of my standard) combined with equity, a success fee, or milestone-based bonuses. The exact split is discussed case by case after we\'ve talked through your stage, timeline, runway, and goals. The service-fee component is always present; it\'s what keeps the engagement focused and fair to both sides.',
    it: 'È un ingaggio ibrido: una tariffa cash ridotta (tipicamente 40–60% della mia standard) combinata con equity, success fee o bonus su milestone. La suddivisione esatta si discute caso per caso dopo aver parlato del tuo stadio, timeline, runway e obiettivi. La componente di service fee è sempre presente: è ciò che mantiene l\'ingaggio focalizzato e equo per entrambe le parti.',
    fr: 'C\'est un engagement hybride : un tarif cash réduit (généralement 40–60% de mon standard) combiné à de l\'equity, une success fee, ou des bonus sur milestones. La répartition exacte se discute au cas par cas après avoir parlé de votre stade, calendrier, runway et objectifs. La composante service fee est toujours présente — c\'est ce qui maintient l\'engagement focalisé et équitable pour les deux parties.',
    de: 'Es ist ein hybrides Engagement: ein reduzierter Cash-Satz (typischerweise 40–60% meines Standards) kombiniert mit Equity, einer Erfolgsgebühr oder Meilenstein-Boni. Die genaue Aufteilung wird von Fall zu Fall besprochen, nachdem wir über Ihre Phase, Zeitplan, Runway und Ziele gesprochen haben. Die Servicegebühr-Komponente ist immer vorhanden — sie hält das Engagement fokussiert und fair für beide Seiten.'
  },
  faq3Q: {
    en: 'What\'s a typical engagement duration?',
    it: 'Qual è la durata tipica di un ingaggio?',
    fr: 'Quelle est la durée typique d\'un engagement ?',
    de: 'Wie lang ist ein typisches Engagement?'
  },
  faq3A: {
    en: 'Consultations run 30 or 60 minutes. MVPs typically ship in 4–8 weeks. Fractional CTO engagements are usually 2–3 days/month minimum, with the cadence scaling up based on traction and fit. Shorter sprint engagements (1–2 weeks) are also possible for well-scoped prototypes.',
    it: 'Le consulenze durano 30 o 60 minuti. Gli MVP vengono rilasciati tipicamente in 4–8 settimane. Gli ingaggi Fractional CTO sono di solito minimo 2–3 giorni/mese, con la cadenza che cresce in base al traction e al fit. Sono possibili anche sprint più brevi (1–2 settimane) per prototipi ben definiti.',
    fr: 'Les consultations durent 30 ou 60 minutes. Les MVPs sont généralement livrés en 4–8 semaines. Les engagements Fractional CTO sont habituellement d\'au minimum 2–3 jours/mois, la cadence augmentant selon la traction et le fit. Des sprints plus courts (1–2 semaines) sont aussi possibles pour des prototypes bien cadrés.',
    de: 'Beratungen dauern 30 oder 60 Minuten. MVPs werden typischerweise in 4–8 Wochen ausgeliefert. Fractional-CTO-Engagements laufen meist mindestens 2–3 Tage/Monat, wobei die Kadenz je nach Traction und Fit skaliert. Kürzere Sprint-Engagements (1–2 Wochen) sind auch möglich für gut abgegrenzte Prototypen.'
  },
  faq4Q: {
    en: 'Remote or on-site?',
    it: 'Da remoto o on-site?',
    fr: 'À distance ou sur site ?',
    de: 'Remote oder vor Ort?'
  },
  faq4A: {
    en: 'Remote-first, based in Paris. I\'m open to on-site days in Paris and short on-site sprints across Europe for the right engagements. Most clients are 100% remote with weekly syncs and async daily updates.',
    it: 'Remote-first, con base a Parigi. Disponibile per giornate on-site a Parigi e brevi sprint on-site in Europa per gli ingaggi giusti. La maggior parte dei clienti lavora 100% in remoto con sync settimanali e update giornalieri asincroni.',
    fr: 'Remote-first, basé à Paris. Ouvert à des journées on-site à Paris et à des sprints courts on-site en Europe pour les engagements appropriés. La plupart de mes clients travaillent 100% à distance avec des syncs hebdomadaires et des updates quotidiens asynchrones.',
    de: 'Remote-first, mit Sitz in Paris. Offen für Vor-Ort-Tage in Paris und kurze Vor-Ort-Sprints in Europa bei passenden Engagements. Die meisten Kunden arbeiten 100% remote mit wöchentlichen Syncs und asynchronen täglichen Updates.'
  },
  faq5Q: {
    en: 'How quickly can you start?',
    it: 'Quanto velocemente puoi iniziare?',
    fr: 'À quelle vitesse pouvez-vous commencer ?',
    de: 'Wie schnell können Sie anfangen?'
  },
  faq5A: {
    en: 'Usually within 1–2 weeks of signing. For urgent MVPs or discovery sprints I can often kick off within days, starting with a scoped 3–5 day discovery phase before we commit to the full build.',
    it: 'Di solito entro 1–2 settimane dalla firma. Per MVP urgenti o sprint di discovery posso spesso iniziare in pochi giorni, partendo da una fase di discovery di 3–5 giorni prima di impegnarci sullo sviluppo completo.',
    fr: 'Généralement dans les 1–2 semaines suivant la signature. Pour les MVPs urgents ou sprints de cadrage, je peux souvent démarrer en quelques jours, en commençant par une phase de discovery de 3–5 jours avant de s\'engager sur le build complet.',
    de: 'In der Regel innerhalb von 1–2 Wochen nach Vertragsabschluss. Für dringende MVPs oder Discovery-Sprints kann ich oft innerhalb weniger Tage starten — mit einer abgegrenzten 3–5-tägigen Discovery-Phase, bevor wir uns auf den vollständigen Build festlegen.'
  },
  faq6Q: {
    en: 'Do you sign NDAs?',
    it: 'Firmi NDA?',
    fr: 'Signez-vous des NDA ?',
    de: 'Unterzeichnen Sie NDAs?'
  },
  faq6A: {
    en: 'Yes. Mutual NDAs are standard. I can send you a clean one to start, or sign yours if the terms are reasonable. All client work, product ideas, and internal data stay strictly confidential — during and after the engagement.',
    it: 'Sì. Gli NDA reciproci sono standard. Posso inviarti il mio per iniziare, o firmare il tuo se i termini sono ragionevoli. Tutto il lavoro cliente, le idee di prodotto e i dati interni rimangono strettamente confidenziali — durante e dopo l\'ingaggio.',
    fr: 'Oui. Les NDA mutuels sont standard. Je peux vous envoyer le mien pour commencer, ou signer le vôtre si les termes sont raisonnables. Tout le travail client, les idées produit et les données internes restent strictement confidentiels — pendant et après l\'engagement.',
    de: 'Ja. Gegenseitige NDAs sind Standard. Ich kann Ihnen meinen zusenden oder Ihren unterzeichnen, wenn die Bedingungen angemessen sind. Alle Kundenarbeit, Produktideen und internen Daten bleiben streng vertraulich — während und nach dem Engagement.'
  },
  faq9Q: {
    en: 'How much does a Fractional CTO cost in Europe?',
    it: 'Quanto costa un Fractional CTO in Europa?',
    fr: 'Combien coûte un Fractional CTO en Europe ?',
    de: 'Was kostet ein Fractional CTO in Europa?'
  },
  faq9A: {
    en: 'Hourly consulting is €150/hour, day rate is €700/day. Ongoing Fractional CTO retainers start from about €2,100/month for a 2-3 days/month minimum and scale up with the cadence — a 1-day-a-week engagement typically lands between €5,000–€8,000 per month depending on scope. Partnership deals (reduced fee + equity or success bonus) are available for aligned early-stage startups. All prices exclude VAT and French TVA applies where relevant; EU B2B clients with a valid intra-community VAT number benefit from reverse charge.',
    it: 'La consulenza oraria è €150/ora, la tariffa giornaliera €700/giorno. I retainer Fractional CTO partono da circa €2,100/mese per un minimo di 2-3 giorni al mese e scalano con la cadenza — un ingaggio da 1 giorno alla settimana è tipicamente tra €5,000 e €8,000 al mese a seconda dello scope. Accordi di Partnership (tariffa ridotta + equity o success bonus) sono disponibili per startup early-stage allineate. Tutti i prezzi escludono l\'IVA; l\'IVA francese si applica dove rilevante; i clienti B2B UE con numero IVA intracomunitario valido beneficiano del reverse charge.',
    fr: 'Le conseil horaire est de 150 €/heure, le tarif journalier de 700 €/jour. Les forfaits Fractional CTO commencent à environ 2 100 €/mois pour un minimum de 2-3 jours/mois et augmentent avec la cadence — un engagement d\'un jour par semaine tombe généralement entre 5 000 € et 8 000 €/mois selon le scope. Des accords Partenariat (tarif réduit + equity ou success bonus) sont disponibles pour les startups early-stage alignées. Tous les prix sont hors TVA ; la TVA française s\'applique le cas échéant ; les clients B2B UE avec un numéro de TVA intracommunautaire valide bénéficient de l\'autoliquidation.',
    de: 'Stundensatz für Beratung: 150 €/Stunde, Tagessatz: 700 €/Tag. Laufende Fractional-CTO-Retainer beginnen bei etwa 2.100 €/Monat für 2-3 Tage/Monat Minimum und skalieren mit der Kadenz — ein Ein-Tag-pro-Woche-Engagement liegt typischerweise zwischen 5.000 € und 8.000 €/Monat je nach Scope. Partnerschafts-Deals (reduzierte Gebühr + Equity oder Erfolgsbonus) stehen für passende Early-Stage-Startups zur Verfügung. Alle Preise zzgl. MwSt.; französische TVA gilt wo zutreffend; EU-B2B-Kunden mit gültiger innergemeinschaftlicher USt-IdNr. profitieren vom Reverse-Charge.'
  },
  faq10Q: {
    en: 'Fractional CTO vs full-time CTO — which should I hire?',
    it: 'Fractional CTO vs CTO a tempo pieno — quale dovrei assumere?',
    fr: 'Fractional CTO vs CTO à temps plein — lequel choisir ?',
    de: 'Fractional CTO vs Vollzeit-CTO — welchen sollte ich einstellen?'
  },
  faq10A: {
    en: 'Hire a full-time CTO when the role genuinely needs 40+ hours/week of executive tech leadership — usually post-Series A with 10+ engineers, a real product in market, and a 3-year roadmap. Hire a Fractional CTO when you need senior technical leadership but: you\'re pre-seed to Series A, your engineering team is under 10 people, you want to validate the product before committing to a cap-table-impacting hire, or you need a specific expertise (AI strategy, EU compliance, sovereign cloud) that a generalist full-time CTO wouldn\'t bring. Many scale-ups also use a Fractional CTO as a bridge while recruiting a permanent hire.',
    it: 'Assumi un CTO a tempo pieno quando il ruolo richiede davvero 40+ ore/settimana di leadership tecnica — solitamente post-Series A con 10+ ingegneri, un prodotto reale sul mercato e una roadmap a 3 anni. Assumi un Fractional CTO quando ti serve leadership tecnica senior ma: sei pre-seed o Series A, il tuo team ingegneristico è sotto le 10 persone, vuoi validare il prodotto prima di impegnarti in un\'assunzione che impatta sulla cap-table, o ti serve una competenza specifica (strategia AI, compliance UE, cloud sovrano) che un CTO generalista full-time non porterebbe. Molte scale-up usano anche il Fractional CTO come ponte mentre reclutano un CTO permanente.',
    fr: 'Recrutez un CTO à temps plein lorsque le poste nécessite vraiment 40+ heures/semaine de leadership technique exécutif — généralement post-Series A avec 10+ ingénieurs, un produit réel sur le marché et une feuille de route sur 3 ans. Recrutez un Fractional CTO lorsque vous avez besoin d\'un leadership technique senior mais : vous êtes pre-seed à Series A, votre équipe technique est sous les 10 personnes, vous voulez valider le produit avant un recrutement qui impacte la cap-table, ou vous avez besoin d\'une expertise spécifique (stratégie IA, conformité UE, cloud souverain) qu\'un CTO temps plein généraliste n\'apporterait pas. Beaucoup de scale-ups utilisent aussi un Fractional CTO comme pont le temps de recruter un CTO permanent.',
    de: 'Stellen Sie einen Vollzeit-CTO ein, wenn die Rolle wirklich 40+ Stunden/Woche an exekutiver Tech-Führung erfordert — meist post-Series-A mit 10+ Ingenieuren, einem realen Produkt im Markt und einer 3-Jahres-Roadmap. Stellen Sie einen Fractional CTO ein, wenn Sie senior-technische Führung brauchen, aber: Sie sind Pre-Seed bis Series A, Ihr Engineering-Team umfasst unter 10 Personen, Sie möchten das Produkt validieren, bevor Sie eine Cap-Table-relevante Einstellung vornehmen, oder Sie benötigen spezifisches Fachwissen (KI-Strategie, EU-Compliance, Souveräne Cloud), das ein Allround-Vollzeit-CTO nicht mitbringen würde. Viele Scale-ups nutzen einen Fractional CTO auch als Brücke während der Rekrutierung eines festen CTOs.'
  },
  faq11Q: {
    en: 'Can you help with EU AI Act compliance?',
    it: 'Puoi aiutare con la conformità all\'EU AI Act?',
    fr: 'Pouvez-vous aider avec la conformité à l\'EU AI Act ?',
    de: 'Können Sie bei der EU-AI-Act-Compliance helfen?'
  },
  faq11A: {
    en: 'Yes. I help companies classify their AI systems by risk tier (prohibited / high-risk / limited-risk / minimal-risk), implement the technical documentation and post-market monitoring required by Articles 9–15, align with GPAI obligations for foundation-model users, and produce the DPIA, Transfer Impact Assessments (Schrems II), and Article 28 DPAs needed. I also cross-walk with GDPR, NIS2, DORA (for financial services), and ISO/IEC 42001 / 23894. Sign-off always rests with your DPO or legal counsel; what I deliver is a defensible, documented compliance posture.',
    it: 'Sì. Aiuto le aziende a classificare i loro sistemi AI per livello di rischio (proibito / alto rischio / rischio limitato / rischio minimo), implementare la documentazione tecnica e il monitoraggio post-market richiesti dagli Articoli 9-15, allinearsi agli obblighi GPAI per utenti di foundation model, e produrre DPIA, Transfer Impact Assessment (Schrems II) e DPA ai sensi dell\'Articolo 28. Mi occupo anche del cross-walk con GDPR, NIS2, DORA (per i servizi finanziari) e ISO/IEC 42001 / 23894. La firma finale spetta sempre al DPO o al legale; quello che consegno è una postura di compliance documentata e difendibile.',
    fr: 'Oui. J\'aide les entreprises à classer leurs systèmes IA par niveau de risque (interdits / haut risque / risque limité / risque minimal), à mettre en œuvre la documentation technique et le monitoring post-marché exigés par les Articles 9-15, à s\'aligner sur les obligations GPAI pour les utilisateurs de modèles de fondation, et à produire les DPIA, Transfer Impact Assessments (Schrems II) et DPA au titre de l\'Article 28. Je réalise aussi les cross-walks avec le RGPD, NIS2, DORA (services financiers) et ISO/IEC 42001 / 23894. La validation finale revient toujours à votre DPO ou conseil juridique ; ce que je livre est une posture de conformité documentée et défendable.',
    de: 'Ja. Ich helfe Unternehmen, ihre KI-Systeme nach Risikoklasse zu klassifizieren (verboten / Hochrisiko / begrenztes Risiko / minimales Risiko), die von den Artikeln 9-15 geforderte technische Dokumentation und Post-Market-Monitoring zu implementieren, sich an GPAI-Pflichten für Nutzer von Foundation Models auszurichten und die erforderlichen DPIAs, Transfer Impact Assessments (Schrems II) und Artikel-28-DVVs zu erstellen. Ich erstelle außerdem Cross-Walks mit DSGVO, NIS2, DORA (Finanzdienstleistungen) und ISO/IEC 42001 / 23894. Die finale Freigabe liegt immer beim DPO oder Rechtsberater; was ich liefere, ist eine dokumentierte, verteidigungsfähige Compliance-Position.'
  },
  faq12Q: {
    en: 'Do you work with non-technical founders?',
    it: 'Lavori con founder non tecnici?',
    fr: 'Travaillez-vous avec des fondateurs non techniques ?',
    de: 'Arbeiten Sie mit nicht-technischen Gründern?'
  },
  faq12A: {
    en: 'Yes — this is one of my most common engagements. Non-technical founders hire me to make the build vs buy decision, run the first hiring, set up the stack, ship the MVP, and represent the company technically with investors, partners, and early customers. I translate between product intent and engineering reality, and write everything in plain language so the founder stays in the loop without needing to code.',
    it: 'Sì — questo è uno degli ingaggi più comuni. Founder non tecnici mi assumono per prendere la decisione build vs buy, condurre le prime assunzioni, impostare lo stack, rilasciare l\'MVP e rappresentare l\'azienda tecnicamente con investitori, partner e primi clienti. Traduco tra intenzione di prodotto e realtà ingegneristica, e scrivo tutto in linguaggio semplice così che il founder resti aggiornato senza dover programmare.',
    fr: 'Oui — c\'est l\'un de mes engagements les plus fréquents. Les fondateurs non techniques m\'embauchent pour prendre la décision build vs buy, mener les premiers recrutements, mettre en place la stack, livrer le MVP et représenter l\'entreprise techniquement auprès des investisseurs, partenaires et premiers clients. Je fais la traduction entre l\'intention produit et la réalité de l\'ingénierie, et j\'écris tout en langage simple pour que le fondateur reste au courant sans avoir à coder.',
    de: 'Ja — das ist eines meiner häufigsten Engagements. Nicht-technische Gründer beauftragen mich, die Build-vs-Buy-Entscheidung zu treffen, die ersten Einstellungen zu leiten, den Stack aufzusetzen, das MVP auszuliefern und das Unternehmen technisch bei Investoren, Partnern und frühen Kunden zu vertreten. Ich übersetze zwischen Produktabsicht und Engineering-Realität und schreibe alles in klarer Sprache, damit der Gründer auf dem Laufenden bleibt, ohne selbst programmieren zu müssen.'
  },
  faq13Q: {
    en: 'Can you help us migrate from OpenAI to sovereign infrastructure?',
    it: 'Puoi aiutarci a migrare da OpenAI a infrastruttura sovrana?',
    fr: 'Pouvez-vous nous aider à migrer d\'OpenAI vers une infrastructure souveraine ?',
    de: 'Können Sie uns helfen, von OpenAI zu souveräner Infrastruktur zu migrieren?'
  },
  faq13A: {
    en: 'Yes — this is becoming a common request from European companies facing compliance pressure or customer procurement scrutiny. Typical path: audit current OpenAI/Anthropic usage, map workloads by quality/latency/cost sensitivity, select replacement targets (Mistral Large for most chat, self-hosted Llama-3 or Mixtral for sensitive data, Claude Sonnet via Bedrock EU where acceptable), build an eval harness that proves parity, migrate behind a feature flag, and cut over gradually. End state: zero prompt/response egress to non-EU jurisdictions, with an auditable trail.',
    it: 'Sì — sta diventando una richiesta comune da aziende europee sotto pressione di compliance o scrutiny di procurement clienti. Percorso tipico: audit dell\'uso attuale OpenAI/Anthropic, mappatura dei carichi per sensibilità qualità/latenza/costi, selezione dei target di sostituzione (Mistral Large per la maggior parte delle chat, Llama-3 o Mixtral self-hosted per dati sensibili, Claude Sonnet via Bedrock EU dove accettabile), costruzione di un eval harness che prova la parità, migrazione dietro un feature flag e switch-over graduale. Stato finale: zero egress di prompt/response verso giurisdizioni extra-UE, con trail auditabile.',
    fr: 'Oui — c\'est une demande de plus en plus fréquente chez les entreprises européennes sous pression de conformité ou de scrutiny procurement de leurs clients. Parcours type : audit de l\'usage OpenAI/Anthropic actuel, cartographie des charges par sensibilité qualité/latence/coût, sélection des cibles de remplacement (Mistral Large pour la plupart des chats, Llama-3 ou Mixtral self-hosted pour les données sensibles, Claude Sonnet via Bedrock EU lorsque acceptable), construction d\'un eval harness qui prouve la parité, migration derrière un feature flag et bascule graduelle. État final : zéro egress de prompts/réponses vers des juridictions hors UE, avec traçabilité auditable.',
    de: 'Ja — dies wird zu einer häufigen Anfrage europäischer Unternehmen unter Compliance-Druck oder Prüfung durch Kunden-Procurement. Typischer Pfad: Audit der aktuellen OpenAI/Anthropic-Nutzung, Mapping der Workloads nach Qualitäts-/Latenz-/Kostensensitivität, Auswahl der Ersatzziele (Mistral Large für die meisten Chats, Self-hosted Llama-3 oder Mixtral für sensible Daten, Claude Sonnet via Bedrock EU wo akzeptabel), Aufbau eines Eval-Harness, der Parität beweist, Migration hinter einem Feature-Flag und schrittweiser Cutover. Endzustand: kein Egress von Prompts/Responses in nicht-EU-Jurisdiktionen, mit auditierbarem Trail.'
  },
  faq14Q: {
    en: 'What\'s the difference between 30-min and 60-min consultations?',
    it: 'Qual è la differenza tra consulenze da 30 e 60 minuti?',
    fr: 'Quelle est la différence entre les consultations de 30 et 60 minutes ?',
    de: 'Was ist der Unterschied zwischen 30-Min- und 60-Min-Beratungen?'
  },
  faq14A: {
    en: '30-min (€45) is best for validating a specific idea, scoping one concrete question, or a sanity-check on a decision you\'re about to make. You\'ll get a direct answer and 3 concrete next steps — no deep architecture work. 60-min (€90) is the default for founders and teams serious about shipping: architecture reviews, roadmap discussions, migration planning, or deep-diving into your AI build end-to-end. Both include a written summary within 24h and 7 days of follow-up email Q&A. Refundable within 15 days subject to T&C.',
    it: '30 min (€45) è l\'ideale per validare un\'idea specifica, definire lo scope di una domanda concreta o un sanity-check su una decisione che stai per prendere. Otterrai una risposta diretta e 3 next step concreti — niente lavoro approfondito di architettura. 60 min (€90) è il default per founder e team seri sullo shipping: review di architettura, discussioni di roadmap, planning di migrazione o deep-dive completo sul tuo build AI. Entrambi includono un riepilogo scritto entro 24h e 7 giorni di Q&A via email. Rimborsabile entro 15 giorni secondo i T&C.',
    fr: '30 min (45 €) convient pour valider une idée précise, cadrer une question concrète, ou faire un sanity-check d\'une décision que vous êtes sur le point de prendre. Vous aurez une réponse directe et 3 prochaines étapes concrètes — pas de travail d\'architecture approfondi. 60 min (90 €) est le format par défaut pour les fondateurs et équipes sérieux sur la livraison : revue d\'architecture, discussion de feuille de route, planning de migration, ou immersion complète dans votre build IA. Les deux incluent une synthèse écrite sous 24h et 7 jours de Q&A email. Remboursable sous 15 jours selon les CGV.',
    de: '30 Min (45 €) ist ideal zum Validieren einer spezifischen Idee, Scoping einer konkreten Frage oder Sanity-Check einer bevorstehenden Entscheidung. Sie erhalten eine direkte Antwort und 3 konkrete nächste Schritte — keine tiefe Architekturarbeit. 60 Min (90 €) ist der Standard für Gründer und Teams, die ernsthaft liefern wollen: Architektur-Reviews, Roadmap-Gespräche, Migrations-Planung oder End-to-End-Deep-Dive in Ihren KI-Build. Beide enthalten eine schriftliche Zusammenfassung innerhalb von 24 Stunden und 7 Tage E-Mail-Follow-up-Q&A. Rückerstattung innerhalb von 15 Tagen gemäß AGB.'
  },
  faq8Q: {
    en: 'Can you join as a technical co-founder?',
    it: 'Puoi unirti come co-founder tecnico?',
    fr: 'Pouvez-vous rejoindre en tant que co-fondateur technique ?',
    de: 'Können Sie als technischer Mitgründer einsteigen?'
  },
  faq8A: {
    en: 'Rarely, and only for startups I\'m deeply aligned with — on mission, market, and long-term collaboration. Equity-heavy co-founder arrangements need mutual conviction on both sides and a realistic path to milestones. More often than not, the Partnership model (reduced service fee + equity or success bonus) is a better fit for both of us — it gets you senior technical leadership without the co-founder commitment, and it keeps my focus across a handful of great projects rather than locked into one.',
    it: 'Raramente, e solo per startup con cui c\'è un allineamento profondo — su missione, mercato e collaborazione a lungo termine. Gli accordi co-founder pesanti in equity richiedono convinzione reciproca da entrambe le parti e un percorso realistico verso i milestone. Il più delle volte, il modello Partnership (tariffa ridotta + equity o success bonus) è più adatto per entrambi — ti dà leadership tecnica senior senza il commitment da co-founder e mantiene il mio focus su diversi grandi progetti invece di bloccarmi su uno solo.',
    fr: 'Rarement, et seulement pour des startups avec lesquelles je suis profondément aligné — sur la mission, le marché et la collaboration long terme. Les arrangements co-fondateur à forte equity nécessitent une conviction mutuelle des deux côtés et un chemin réaliste vers les milestones. Le plus souvent, le modèle Partenariat (tarif réduit + equity ou bonus de succès) est un meilleur fit pour nous deux — il vous donne un leadership technique senior sans l\'engagement de co-fondateur, et me garde concentré sur plusieurs grands projets plutôt qu\'enfermé dans un seul.',
    de: 'Selten, und nur für Startups, mit denen ich tief ausgerichtet bin — bei Mission, Markt und langfristiger Zusammenarbeit. Equity-lastige Mitgründer-Vereinbarungen erfordern beidseitige Überzeugung und einen realistischen Weg zu den Meilensteinen. Meistens ist das Partnerschafts-Modell (reduzierte Servicegebühr + Equity oder Erfolgsbonus) für beide Seiten besser geeignet — es gibt Ihnen erfahrene technische Führung ohne Mitgründer-Commitment und hält meinen Fokus auf mehrere großartige Projekte verteilt statt auf eines fixiert.'
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

const detectLanguage = (): Language => {
  const supported: Language[] = ['en', 'de', 'fr', 'it'];
  const browserLang = navigator.language || (navigator as any).userLanguage || 'en';
  const primary = browserLang.split('-')[0].toLowerCase();
  if (supported.includes(primary as Language)) {
    return primary as Language;
  }
  return 'en';
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('preferred-language');
    if (saved && ['en', 'de', 'fr', 'it'].includes(saved)) {
      return saved as Language;
    }
    return detectLanguage();
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

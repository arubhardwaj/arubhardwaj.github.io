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
    en: 'I build with ChatGPT, Claude, LLMs, and cutting-edge generative AI — from intelligent agents and RAG pipelines to predictive models and NLP systems that actually ship to production.',
    it: 'Sviluppo con ChatGPT, Claude, LLM e intelligenza artificiale generativa all\'avanguardia — dagli agenti intelligenti e pipeline RAG ai modelli predittivi e sistemi NLP pronti per la produzione.',
    fr: 'Je développe avec ChatGPT, Claude, LLMs et l\'IA générative de pointe — des agents intelligents et pipelines RAG aux modèles prédictifs et systèmes NLP prêts pour la production.',
    de: 'Ich entwickle mit ChatGPT, Claude, LLMs und modernster generativer KI — von intelligenten Agenten und RAG-Pipelines bis hin zu Vorhersagemodellen und NLP-Systemen für den Produktiveinsatz.'
  },
  heroDescription2: {
    en: 'Whether you need an AI-powered product, a custom LLM solution, or deep data science — I turn complex ideas into production-ready systems that drive real business impact.',
    it: 'Che tu abbia bisogno di un prodotto basato sull\'IA, una soluzione LLM personalizzata o data science avanzata — trasformo idee complesse in sistemi pronti per la produzione con impatto reale.',
    fr: 'Que vous ayez besoin d\'un produit propulsé par l\'IA, d\'une solution LLM sur mesure ou de data science approfondie — je transforme les idées complexes en systèmes prêts pour la production.',
    de: 'Ob Sie ein KI-gestütztes Produkt, eine maßgeschneiderte LLM-Lösung oder tiefgreifende Data Science benötigen — ich verwandle komplexe Ideen in produktionsreife Systeme mit echtem Geschäftsimpact.'
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
    en: 'I love working with ambitious founders, and I happily structure hybrid engagements — a reduced service fee combined with equity or a success bonus — when the fit is right. Pure-equity or revenue-share-only arrangements, however, aren\'t something I take on. A service fee is required on every project: it ensures focused delivery, protects both sides against misaligned timelines, and keeps the engagement sustainable the same way any senior technical hire is compensated. If you\'re an early-stage founder, let\'s talk — there\'s almost always a structure that works.',
    it: 'Amo lavorare con founder ambiziosi e strutturo volentieri ingaggi ibridi — tariffa ridotta più equity o success bonus — quando c\'è il giusto match. Ma accordi solo in equity o solo revenue-share non li accetto. Una tariffa di servizio è sempre richiesta: garantisce un\'esecuzione focalizzata, protegge entrambe le parti da tempistiche disallineate e rende il rapporto sostenibile, esattamente come qualsiasi senior tecnico viene retribuito. Se sei un founder early-stage, parliamone — quasi sempre troviamo una struttura che funziona.',
    fr: 'J\'adore travailler avec des fondateurs ambitieux et je structure volontiers des engagements hybrides — tarif réduit combiné à de l\'equity ou un bonus de succès — quand le fit est là. Les arrangements uniquement en equity ou revenue-share, en revanche, je ne les prends pas. Un service fee est requis sur chaque projet : il garantit une exécution focalisée, protège les deux parties contre les dérives de planning, et rend l\'engagement durable comme n\'importe quel poste senior technique. Si vous êtes fondateur early-stage, parlons-en — il y a presque toujours une structure qui fonctionne.',
    de: 'Ich liebe es, mit ambitionierten Gründern zu arbeiten, und strukturiere gerne hybride Engagements — reduzierte Servicegebühr kombiniert mit Equity oder Erfolgsbonus — wenn der Fit stimmt. Reine Equity- oder Revenue-Share-Vereinbarungen nehme ich jedoch nicht an. Eine Servicegebühr ist bei jedem Projekt erforderlich: sie sichert fokussierte Umsetzung, schützt beide Seiten vor Zeitplan-Diskrepanzen und hält die Zusammenarbeit nachhaltig — genau wie bei jeder anderen Senior-Position. Wenn Sie Gründer in der Frühphase sind, lassen Sie uns sprechen — es gibt fast immer eine Struktur, die passt.'
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
  faq7Q: {
    en: 'What if my project needs a stack you don\'t specialize in?',
    it: 'Cosa succede se il mio progetto richiede uno stack in cui non sei specializzato?',
    fr: 'Et si mon projet nécessite une stack dans laquelle vous n\'êtes pas spécialisé ?',
    de: 'Was, wenn mein Projekt einen Stack benötigt, in dem Sie nicht spezialisiert sind?'
  },
  faq7A: {
    en: 'I\'ll tell you upfront. My core stack is TypeScript, React, Next.js, Python, Node.js, and modern LLM tooling (OpenAI, Anthropic, LangChain, RAG pipelines, vector DBs). For adjacent stacks (Go, Rust, mobile native, heavy data engineering), I\'ll either ramp up quickly if it\'s close to my core, or help you find the right specialist from my network. Honesty over overcommitment — every time.',
    it: 'Te lo dico subito. Il mio core stack è TypeScript, React, Next.js, Python, Node.js e tooling LLM moderno (OpenAI, Anthropic, LangChain, RAG pipeline, vector DB). Per stack adiacenti (Go, Rust, mobile native, data engineering pesante), o mi aggiorno velocemente se è vicino al mio core, o ti aiuto a trovare lo specialista giusto dal mio network. Onestà sempre prima dell\'over-commitment.',
    fr: 'Je vous le dirai d\'emblée. Ma stack principale : TypeScript, React, Next.js, Python, Node.js et outillage LLM moderne (OpenAI, Anthropic, LangChain, pipelines RAG, bases vectorielles). Pour les stacks adjacentes (Go, Rust, mobile natif, data engineering lourd), soit je monte en compétence vite si c\'est proche de mon core, soit je vous aide à trouver le bon spécialiste dans mon réseau. Honnêteté plutôt que surengagement, toujours.',
    de: 'Ich sage es Ihnen direkt. Mein Kern-Stack: TypeScript, React, Next.js, Python, Node.js und moderne LLM-Tools (OpenAI, Anthropic, LangChain, RAG-Pipelines, Vector-DBs). Für angrenzende Stacks (Go, Rust, Mobile Native, schweres Data Engineering) arbeite ich mich entweder schnell ein (wenn es nah an meinem Kern ist) oder helfe Ihnen, den richtigen Spezialisten aus meinem Netzwerk zu finden. Ehrlichkeit vor Überversprechen — immer.'
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

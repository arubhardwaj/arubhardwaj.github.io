import ServicePageLayout from '@/components/layout/ServicePageLayout';
import { useLanguage } from '@/contexts/LanguageContext';

type Lang = 'en' | 'it' | 'fr' | 'de';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://arubhardwaj.eu/services/mvp-builder#service',
  name: 'AI-Powered MVP Development',
  serviceType: 'MVP Development',
  provider: { '@type': 'Person', '@id': 'https://arubhardwaj.eu/#person', name: 'Aru Bhardwaj' },
  audience: { '@type': 'Audience', audienceType: 'Startup founders and product leaders' },
  description: 'End-to-end AI-powered MVP builds for startups and scale-ups. Idea to production in 4-8 weeks. Full-stack with AI baked in from day one.',
  url: 'https://arubhardwaj.eu/services/mvp-builder',
  dateModified: '2026-04-21'
};

const CONTENT = {
  en: {
    title: 'AI-Powered MVP Development | 4-8 Week Builds | Aru Bhardwaj',
    h1: 'AI-Powered MVPs, Shipped in 4-8 Weeks',
    tagline: 'End-to-end MVP builds for founders: architecture, AI integration, frontend, backend, deployment. Modern stack with ChatGPT, Claude, Mistral, or custom LLMs baked in from day one.',
    description: 'AI MVP builder in Paris and Europe. Idea-to-production in 4-8 weeks for startups and scale-ups. React/Next.js, Python, Node.js, LLM integration (OpenAI, Anthropic, Mistral), sovereign-cloud deployment.',
    whoItsFor: [
      'Non-technical founders with a validated idea who need a production MVP fast',
      'Teams that raised pre-seed or seed and need to ship before the next milestone',
      'Corporate innovation teams building an AI-first product outside the mothership',
      'Agencies that need a senior engineer for a fixed-scope MVP without the agency overhead',
      'Founders migrating from no-code (Bubble, Webflow) to a real product'
    ],
    whatsIncluded: [
      'Architecture design: stack selection, infrastructure sketch, data model',
      'Full-stack build: frontend (React/Next.js), backend (Node.js/Python/FastAPI), database (Postgres/Redis)',
      'AI integration: LLM selection, RAG pipelines, agents, prompt engineering, cost modelling',
      'Cloud deployment: Vercel, AWS, OVHcloud, Scaleway — whichever fits the regulatory profile',
      'Auth, payments (Stripe), basic analytics, transactional email',
      'CI/CD pipeline and production-ready observability baseline',
      'Written handover documentation: architecture diagrams, runbook, onboarding guide',
      'One month of post-launch support included — bug fixes and minor tweaks'
    ],
    process: [
      { step: 'Discovery sprint (3-5 days)', detail: 'Paid discovery to map the product, scope the MVP ruthlessly, decide the stack, and produce a fixed-scope proposal with timeline and price.' },
      { step: 'Week 1-2: foundations', detail: 'Repo, auth, database schema, core CRUD, basic UI shell, CI/CD, staging environment. Daily async updates.' },
      { step: 'Week 3-5: core build', detail: 'AI features, main workflows, integrations. Weekly demos on staging for feedback.' },
      { step: 'Week 6-7: polish & launch', detail: 'UX polish, performance, error handling, monitoring, copy pass. Production deployment.' },
      { step: 'Week 8: handover', detail: 'Documentation, architecture walkthrough, 1:1 with any future engineer. One month of post-launch support included.' }
    ],
    outcomes: [
      'A production URL your users can hit on day 1 of week 5-8',
      'Code you (or your next engineer) can own, not a black box',
      'A cost model for the next 6-12 months of infra + AI spend',
      'Enough usage data to validate the core hypothesis',
      'A credible technical story for the next funding round',
      'Written architecture docs and runbooks',
      'A clean handover if you bring on a full-time engineer later',
      'AI features designed with cost, latency, and quality guardrails in place'
    ],
    pricing: [
      { label: 'Discovery sprint (3-5 days)', price: 'from €2,500', note: 'Fixed-price. Credited toward the MVP if you proceed.' },
      { label: 'Fixed-scope MVP (4-8 weeks)', price: 'from €18,000', note: '50% upfront, 50% on launch. Scoped in the Proposal.' }
    ],
    faqs: [
      { q: 'Will I actually get something shipped in 4-8 weeks?', a: 'Yes, if the scope is right-sized. The discovery sprint exists specifically to cut the MVP down to what can genuinely ship in that window. If your idea needs 12+ weeks, we scope Phase 1 for 4-8 weeks and Phase 2 separately.' },
      { q: 'Who owns the code?', a: 'You do, on full payment. The code is in your GitHub/GitLab org from day one. Pre-existing tools and internal libraries I use to move fast remain my property (licensed perpetually to you as part of the deliverable).' },
      { q: 'What if requirements change mid-build?', a: 'Small tweaks are normal and included. Structural changes (new major features, stack changes) trigger a Change Request with an addendum to the proposal.' },
      { q: 'Do you work with designers?', a: 'I bring a clean default design system (Tailwind + shadcn/ui). For brand-critical UIs I partner with designers you or I bring in. The MVP scope accounts for this.' },
      { q: 'Can you build on my existing codebase?', a: 'Possible for discrete features. For full MVPs, greenfield is faster and cheaper — most MVPs I inherit have accumulated decisions that fight the build.' },
      { q: 'Do you take equity?', a: 'Only in a Partnership engagement — reduced fixed fee combined with equity or a success bonus. Pure-equity is not offered. A cash service fee is always required.' }
    ]
  },
  it: {
    title: 'Sviluppo MVP basato su AI | Build in 4-8 settimane | Aru Bhardwaj',
    h1: 'MVP basati su AI, rilasciati in 4-8 settimane',
    tagline: 'Build MVP end-to-end per founder: architettura, integrazione AI, frontend, backend, deployment. Stack moderno con ChatGPT, Claude, Mistral o LLM custom integrati fin dal giorno uno.',
    description: 'AI MVP builder a Parigi e in Europa. Dall\'idea alla produzione in 4-8 settimane per startup e scale-up. React/Next.js, Python, Node.js, integrazione LLM (OpenAI, Anthropic, Mistral), deployment su cloud sovrano.',
    whoItsFor: [
      'Founder non tecnici con un\'idea validata che hanno bisogno di un MVP in produzione velocemente',
      'Team che hanno raccolto pre-seed o seed e devono rilasciare prima del prossimo milestone',
      'Team di innovazione corporate che costruiscono un prodotto AI-first fuori dalla casa madre',
      'Agenzie che hanno bisogno di un ingegnere senior per un MVP a scope fisso senza overhead di agenzia',
      'Founder che migrano da no-code (Bubble, Webflow) a un prodotto reale'
    ],
    whatsIncluded: [
      'Design dell\'architettura: selezione dello stack, sketch di infrastruttura, data model',
      'Build full-stack: frontend (React/Next.js), backend (Node.js/Python/FastAPI), database (Postgres/Redis)',
      'Integrazione AI: selezione LLM, pipeline RAG, agenti, prompt engineering, modellazione dei costi',
      'Deployment su cloud: Vercel, AWS, OVHcloud, Scaleway — quello che si adatta al profilo regolatorio',
      'Auth, pagamenti (Stripe), analytics di base, email transazionali',
      'Pipeline CI/CD e baseline di observability production-ready',
      'Documentazione scritta di handover: diagrammi di architettura, runbook, guida di onboarding',
      'Un mese di supporto post-launch incluso — bug fix e piccoli ritocchi'
    ],
    process: [
      { step: 'Discovery sprint (3-5 giorni)', detail: 'Discovery a pagamento per mappare il prodotto, definire lo scope dell\'MVP in modo rigoroso, decidere lo stack e produrre una proposta a scope fisso con timeline e prezzo.' },
      { step: 'Settimane 1-2: fondamenta', detail: 'Repo, auth, schema database, CRUD core, shell UI di base, CI/CD, ambiente di staging. Update asincroni giornalieri.' },
      { step: 'Settimane 3-5: build core', detail: 'Feature AI, workflow principali, integrazioni. Demo settimanali su staging per feedback.' },
      { step: 'Settimane 6-7: rifinitura & launch', detail: 'Rifinitura UX, performance, gestione errori, monitoring, pass sul copy. Deployment in produzione.' },
      { step: 'Settimana 8: handover', detail: 'Documentazione, walkthrough dell\'architettura, 1:1 con qualsiasi futuro ingegnere. Un mese di supporto post-launch incluso.' }
    ],
    outcomes: [
      'Un URL di produzione che i tuoi utenti possono raggiungere dal giorno 1 della settimana 5-8',
      'Codice che tu (o il tuo prossimo ingegnere) puoi possedere, non una black box',
      'Un modello di costi per i prossimi 6-12 mesi di spesa infra + AI',
      'Dati di utilizzo sufficienti per validare l\'ipotesi core',
      'Una storia tecnica credibile per il prossimo round di funding',
      'Documentazione scritta di architettura e runbook',
      'Un handover pulito se in seguito assumi un ingegnere full-time',
      'Feature AI progettate con guardrail di costo, latenza e qualità'
    ],
    pricing: [
      { label: 'Discovery sprint (3-5 giorni)', price: 'da €2.500', note: 'Prezzo fisso. Accreditato sull\'MVP se procedi.' },
      { label: 'MVP a scope fisso (4-8 settimane)', price: 'da €18.000', note: '50% all\'inizio, 50% al launch. Definito nella Proposta.' }
    ],
    faqs: [
      { q: 'Riuscirò davvero a rilasciare qualcosa in 4-8 settimane?', a: 'Sì, se lo scope è dimensionato correttamente. Lo sprint di discovery esiste proprio per ridurre l\'MVP a ciò che può davvero essere rilasciato in quella finestra. Se la tua idea richiede 12+ settimane, definiamo la Fase 1 per 4-8 settimane e la Fase 2 separatamente.' },
      { q: 'Chi possiede il codice?', a: 'Tu, a saldo completo. Il codice è nella tua org GitHub/GitLab fin dal giorno uno. Gli strumenti preesistenti e le librerie interne che uso per muovermi velocemente restano di mia proprietà (concessi in licenza perpetua come parte del deliverable).' },
      { q: 'Cosa succede se i requisiti cambiano durante il build?', a: 'Piccoli ritocchi sono normali e inclusi. Cambi strutturali (nuove feature maggiori, cambi di stack) attivano un Change Request con addendum alla proposta.' },
      { q: 'Lavori con designer?', a: 'Porto un design system di default pulito (Tailwind + shadcn/ui). Per UI brand-critical mi affianco a designer portati da te o da me. Lo scope dell\'MVP lo prevede.' },
      { q: 'Puoi costruire sul mio codebase esistente?', a: 'Possibile per feature discrete. Per MVP completi, il greenfield è più veloce ed economico — la maggior parte degli MVP che eredito ha accumulato decisioni che combattono con il build.' },
      { q: 'Accetti equity?', a: 'Solo in un ingaggio Partnership — tariffa fissa ridotta combinata con equity o un success bonus. Il solo equity non è offerto. Una tariffa di servizio cash è sempre richiesta.' }
    ]
  },
  fr: {
    title: 'Développement MVP IA | Livrés en 4-8 semaines | Aru Bhardwaj',
    h1: 'MVP IA, livrés en 4-8 semaines',
    tagline: 'Builds MVP end-to-end pour fondateurs : architecture, intégration IA, frontend, backend, déploiement. Stack moderne avec ChatGPT, Claude, Mistral ou LLMs custom intégrés dès le jour un.',
    description: 'Constructeur de MVP IA à Paris et en Europe. De l\'idée à la production en 4-8 semaines pour startups et scale-ups. React/Next.js, Python, Node.js, intégration LLM (OpenAI, Anthropic, Mistral), déploiement cloud souverain.',
    whoItsFor: [
      'Fondateurs non techniques avec une idée validée qui ont besoin d\'un MVP en production rapidement',
      'Équipes qui ont levé pre-seed ou seed et doivent livrer avant la prochaine milestone',
      'Équipes d\'innovation corporate construisant un produit AI-first hors de la maison mère',
      'Agences qui ont besoin d\'un ingénieur senior pour un MVP à scope fixe sans l\'overhead agence',
      'Fondateurs migrant de no-code (Bubble, Webflow) vers un vrai produit'
    ],
    whatsIncluded: [
      'Design de l\'architecture : sélection de la stack, croquis d\'infrastructure, modèle de données',
      'Build full-stack : frontend (React/Next.js), backend (Node.js/Python/FastAPI), base de données (Postgres/Redis)',
      'Intégration IA : sélection des LLM, pipelines RAG, agents, prompt engineering, modélisation des coûts',
      'Déploiement cloud : Vercel, AWS, OVHcloud, Scaleway — selon le profil réglementaire',
      'Auth, paiements (Stripe), analytics de base, emails transactionnels',
      'Pipeline CI/CD et socle d\'observability production-ready',
      'Documentation écrite de remise : schémas d\'architecture, runbook, guide d\'onboarding',
      'Un mois de support post-launch inclus — corrections de bugs et ajustements mineurs'
    ],
    process: [
      { step: 'Sprint de discovery (3-5 jours)', detail: 'Discovery payant pour cartographier le produit, cadrer le MVP avec rigueur, décider de la stack, et produire une proposition à scope fixe avec calendrier et prix.' },
      { step: 'Semaines 1-2 : fondations', detail: 'Repo, auth, schéma de base, CRUD central, shell UI, CI/CD, environnement de staging. Updates asynchrones quotidiens.' },
      { step: 'Semaines 3-5 : build central', detail: 'Fonctionnalités IA, workflows principaux, intégrations. Démos hebdomadaires sur staging pour feedback.' },
      { step: 'Semaines 6-7 : polish & launch', detail: 'Polish UX, performance, gestion d\'erreurs, monitoring, pass sur le copy. Déploiement en production.' },
      { step: 'Semaine 8 : handover', detail: 'Documentation, walkthrough d\'architecture, 1:1 avec tout futur ingénieur. Un mois de support post-launch inclus.' }
    ],
    outcomes: [
      'Une URL de production que vos utilisateurs peuvent toucher dès le jour 1 de la semaine 5-8',
      'Du code que vous (ou votre prochain ingénieur) pouvez posséder, pas une boîte noire',
      'Un modèle de coût pour les 6-12 prochains mois de dépenses infra + IA',
      'Assez de données d\'usage pour valider l\'hypothèse centrale',
      'Un récit technique crédible pour le prochain tour de funding',
      'Documentation d\'architecture et runbooks écrits',
      'Un handover propre si vous recrutez un ingénieur à temps plein plus tard',
      'Fonctionnalités IA conçues avec des garde-fous coût/latence/qualité'
    ],
    pricing: [
      { label: 'Sprint de discovery (3-5 jours)', price: 'à partir de 2 500 €', note: 'Prix fixe. Crédité sur le MVP si vous continuez.' },
      { label: 'MVP à scope fixe (4-8 semaines)', price: 'à partir de 18 000 €', note: '50 % à la signature, 50 % au launch. Cadré dans la Proposition.' }
    ],
    faqs: [
      { q: 'Vais-je vraiment livrer quelque chose en 4-8 semaines ?', a: 'Oui, si le scope est bien dimensionné. Le sprint de discovery existe spécifiquement pour ramener le MVP à ce qui peut vraiment être livré dans cette fenêtre. Si votre idée nécessite 12+ semaines, on cadre la Phase 1 pour 4-8 semaines et la Phase 2 séparément.' },
      { q: 'Qui possède le code ?', a: 'Vous, au paiement complet. Le code est dans votre org GitHub/GitLab dès le jour un. Les outils préexistants et bibliothèques internes que j\'utilise pour avancer vite restent ma propriété (licence perpétuelle accordée avec le livrable).' },
      { q: 'Et si les exigences changent en cours de build ?', a: 'Les petits ajustements sont normaux et inclus. Les changements structurels (nouvelles fonctionnalités majeures, changements de stack) déclenchent un Change Request avec un avenant à la proposition.' },
      { q: 'Travaillez-vous avec des designers ?', a: 'J\'apporte un design system par défaut propre (Tailwind + shadcn/ui). Pour les UI brand-critical, je m\'associe à des designers apportés par vous ou moi. Le scope du MVP en tient compte.' },
      { q: 'Pouvez-vous construire sur mon codebase existant ?', a: 'Possible pour des fonctionnalités isolées. Pour des MVP complets, le greenfield est plus rapide et moins cher — la plupart des MVP que j\'hérite ont accumulé des décisions qui se battent contre le build.' },
      { q: 'Prenez-vous de l\'equity ?', a: 'Seulement dans un engagement Partenariat — tarif fixe réduit combiné à de l\'equity ou un bonus de succès. L\'equity pure n\'est pas proposé. Un service fee cash est toujours requis.' }
    ]
  },
  de: {
    title: 'KI-MVP-Entwicklung | 4-8-Wochen-Builds | Aru Bhardwaj',
    h1: 'KI-MVPs, ausgeliefert in 4-8 Wochen',
    tagline: 'End-to-End-MVP-Builds für Gründer: Architektur, KI-Integration, Frontend, Backend, Deployment. Moderner Stack mit ChatGPT, Claude, Mistral oder Custom-LLMs — von Tag eins integriert.',
    description: 'KI-MVP-Builder in Paris und Europa. Idee bis Produktion in 4-8 Wochen für Startups und Scale-ups. React/Next.js, Python, Node.js, LLM-Integration (OpenAI, Anthropic, Mistral), souveränes Cloud-Deployment.',
    whoItsFor: [
      'Nicht-technische Gründer mit einer validierten Idee, die schnell ein Produktions-MVP brauchen',
      'Teams, die Pre-Seed oder Seed gehoben haben und vor dem nächsten Meilenstein ausliefern müssen',
      'Corporate-Innovation-Teams, die ein KI-first-Produkt außerhalb der Muttergesellschaft bauen',
      'Agenturen, die einen Senior-Ingenieur für ein MVP mit festem Umfang ohne Agentur-Overhead brauchen',
      'Gründer, die von No-Code (Bubble, Webflow) auf ein echtes Produkt migrieren'
    ],
    whatsIncluded: [
      'Architekturdesign: Stack-Auswahl, Infrastruktur-Skizze, Datenmodell',
      'Full-Stack-Build: Frontend (React/Next.js), Backend (Node.js/Python/FastAPI), Datenbank (Postgres/Redis)',
      'KI-Integration: LLM-Auswahl, RAG-Pipelines, Agenten, Prompt-Engineering, Kostenmodellierung',
      'Cloud-Deployment: Vercel, AWS, OVHcloud, Scaleway — je nach regulatorischem Profil',
      'Auth, Zahlungen (Stripe), grundlegende Analytics, transaktionale E-Mails',
      'CI/CD-Pipeline und produktionsreife Observability-Baseline',
      'Schriftliche Übergabedokumentation: Architekturdiagramme, Runbook, Onboarding-Leitfaden',
      'Ein Monat Post-Launch-Support inklusive — Bugfixes und kleinere Anpassungen'
    ],
    process: [
      { step: 'Discovery-Sprint (3-5 Tage)', detail: 'Bezahlte Discovery, um das Produkt zu mappen, das MVP rigoros zu scopen, den Stack zu entscheiden und ein Fixpreis-Angebot mit Zeitplan und Preis zu erstellen.' },
      { step: 'Woche 1-2: Fundamente', detail: 'Repo, Auth, Datenbankschema, Kern-CRUD, einfache UI-Shell, CI/CD, Staging-Umgebung. Tägliche asynchrone Updates.' },
      { step: 'Woche 3-5: Core-Build', detail: 'KI-Funktionen, Haupt-Workflows, Integrationen. Wöchentliche Demos auf Staging für Feedback.' },
      { step: 'Woche 6-7: Polish & Launch', detail: 'UX-Polish, Performance, Fehlerbehandlung, Monitoring, Copy-Durchgang. Produktions-Deployment.' },
      { step: 'Woche 8: Übergabe', detail: 'Dokumentation, Architektur-Walkthrough, 1:1 mit jedem zukünftigen Ingenieur. Ein Monat Post-Launch-Support inklusive.' }
    ],
    outcomes: [
      'Eine Produktions-URL, die Ihre Nutzer ab Tag 1 von Woche 5-8 erreichen können',
      'Code, den Sie (oder Ihr nächster Ingenieur) besitzen können, keine Blackbox',
      'Ein Kostenmodell für die nächsten 6-12 Monate Infra- + KI-Ausgaben',
      'Genug Nutzungsdaten, um die Kernhypothese zu validieren',
      'Eine glaubwürdige technische Story für die nächste Finanzierungsrunde',
      'Schriftliche Architektur-Dokumente und Runbooks',
      'Eine saubere Übergabe, wenn Sie später einen Vollzeit-Ingenieur einstellen',
      'KI-Funktionen mit Kosten-, Latenz- und Qualitäts-Guardrails konzipiert'
    ],
    pricing: [
      { label: 'Discovery-Sprint (3-5 Tage)', price: 'ab €2.500', note: 'Festpreis. Wird auf das MVP angerechnet, wenn Sie fortfahren.' },
      { label: 'Fixpreis-MVP (4-8 Wochen)', price: 'ab €18.000', note: '50 % vorab, 50 % beim Launch. Im Angebot abgegrenzt.' }
    ],
    faqs: [
      { q: 'Werde ich wirklich in 4-8 Wochen etwas ausliefern?', a: 'Ja, wenn der Scope richtig dimensioniert ist. Der Discovery-Sprint existiert genau dafür: das MVP auf das zu reduzieren, was in diesem Zeitfenster ehrlich ausgeliefert werden kann. Wenn Ihre Idee 12+ Wochen braucht, scopen wir Phase 1 für 4-8 Wochen und Phase 2 separat.' },
      { q: 'Wem gehört der Code?', a: 'Ihnen, bei vollständiger Zahlung. Der Code ist vom ersten Tag an in Ihrer GitHub/GitLab-Org. Vorbestehende Tools und interne Bibliotheken, die ich zum schnellen Fortschritt nutze, bleiben mein Eigentum (wird mit dem Liefergegenstand als unbefristete Lizenz eingeräumt).' },
      { q: 'Was, wenn sich Anforderungen mitten im Build ändern?', a: 'Kleine Anpassungen sind normal und enthalten. Strukturelle Änderungen (neue große Features, Stack-Änderungen) lösen einen Change-Request mit Anhang zum Angebot aus.' },
      { q: 'Arbeiten Sie mit Designern?', a: 'Ich bringe ein sauberes Standard-Design-System mit (Tailwind + shadcn/ui). Für markenkritische UIs arbeite ich mit Designern zusammen, die Sie oder ich einbringen. Der MVP-Scope berücksichtigt das.' },
      { q: 'Können Sie auf meinem bestehenden Codebase bauen?', a: 'Möglich für einzelne Features. Für ganze MVPs ist Greenfield schneller und günstiger — die meisten MVPs, die ich erbe, haben angesammelte Entscheidungen, die gegen den Build kämpfen.' },
      { q: 'Nehmen Sie Equity?', a: 'Nur in einem Partnerschafts-Engagement — reduzierte Fixgebühr kombiniert mit Equity oder einem Erfolgsbonus. Reine Equity wird nicht angeboten. Eine Cash-Servicegebühr ist immer erforderlich.' }
    ]
  }
};

const MvpBuilderPage = () => {
  const { language } = useLanguage();
  const c = CONTENT[language as Lang];
  return (
    <ServicePageLayout
      slug="mvp-builder"
      title={c.title}
      h1={c.h1}
      tagline={c.tagline}
      description={c.description}
      jsonLd={jsonLd}
      whoItsFor={c.whoItsFor}
      whatsIncluded={c.whatsIncluded}
      process={c.process}
      outcomes={c.outcomes}
      pricing={c.pricing}
      faqs={c.faqs}
    />
  );
};

export default MvpBuilderPage;

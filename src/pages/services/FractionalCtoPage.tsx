import ServicePageLayout from '@/components/layout/ServicePageLayout';
import { useLanguage } from '@/contexts/LanguageContext';

type Lang = 'en' | 'it' | 'fr' | 'de';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://arubhardwaj.eu/services/fractional-cto#service',
  name: 'Fractional CTO Services',
  serviceType: 'Fractional CTO',
  provider: { '@type': 'Person', '@id': 'https://arubhardwaj.eu/#person', name: 'Aru Bhardwaj' },
  areaServed: [
    { '@type': 'Country', name: 'France' },
    { '@type': 'Country', name: 'Germany' },
    { '@type': 'Country', name: 'Switzerland' },
    { '@type': 'Country', name: 'Italy' },
    { '@type': 'Place', name: 'European Union' }
  ],
  audience: { '@type': 'Audience', audienceType: 'Startup founders and scale-up leadership' },
  description: 'Part-time technical leadership for startups and scale-ups. Technical roadmap, architecture decisions, hiring, AI strategy, EU regulatory compliance. 2-3 days per month minimum.',
  url: 'https://arubhardwaj.eu/services/fractional-cto',
  dateModified: '2026-04-21'
};

const CONTENT = {
  en: {
    title: 'Fractional CTO Services | Paris-based, EU-focused | Aru Bhardwaj',
    h1: 'Fractional CTO for Startups & Scale-Ups',
    tagline: 'Senior technical leadership, 2-3 days per month. Paris-based, same time zone as your European team, fluent in GDPR, RGPD, the EU AI Act, and sovereign cloud.',
    description: 'Hire a Fractional CTO in Paris and across Europe. Technical roadmap, architecture, hiring, and AI strategy — without the cost of a full-time executive. Startups and scale-ups from seed to Series B.',
    whoItsFor: [
      'Non-technical founders building an AI-first or tech-heavy product',
      "Seed to Series B startups that need senior tech leadership but can't yet justify a full-time CTO",
      'Scale-ups under 100 people where the founding engineer has outgrown the role',
      'Companies preparing for fundraising, due diligence, or an acquisition',
      'European teams that need GDPR/RGPD, EU AI Act, and sovereign-cloud expertise on the leadership side'
    ],
    whatsIncluded: [
      'Technical roadmap: 3-6-12 month plan aligned with funding and product milestones',
      'Architecture decisions and reviews (code, infra, data, AI stack)',
      'Engineering hiring: job specs, interviews, reference checks, offer negotiations',
      'Team leadership: 1:1s with senior engineers, sprint cadence, delivery reviews',
      'AI strategy: build vs buy, model selection, vendor contracts, cost forecasting',
      'Regulatory advisory: EU AI Act readiness, GDPR/RGPD, NIS2, DORA, sector-specific (HDS, ACPR, BaFin)',
      'Investor/board support: technical due diligence prep, board-pack narratives, investor calls',
      'Vendor and partnership evaluation (cloud, SaaS, model providers, consulting firms)'
    ],
    process: [
      { step: 'Discovery week', detail: 'A 3-5 day paid discovery sprint to map your stack, team, risks, and priorities. Outputs: a written technical assessment and a proposed engagement scope.' },
      { step: 'Engagement start', detail: 'Typically within 1-2 weeks of signing. Shared Slack, weekly syncs, async updates, and a running decision log.' },
      { step: 'Ongoing cadence', detail: '2-3 days per month minimum, scaling up based on traction. Monthly retainer, invoiced at the start of each month.' },
      { step: 'Quarterly reviews', detail: 'Every 90 days, a written review of progress against the roadmap, budget burn, team health, and risks. Course-correct explicitly.' },
      { step: 'Handover', detail: 'When a full-time CTO is ready, clean handover with a written runbook, architecture diagrams, and intro to key vendors/partners.' }
    ],
    outcomes: [
      'A technical roadmap your board can understand',
      'A hiring pipeline for the next 2-3 engineers',
      'A reduced vendor bill (typically 15-30% on cloud/SaaS)',
      'Investor-ready technical diligence materials',
      'EU AI Act and GDPR compliance posture reviewed',
      'A clear answer to "build vs buy" for each AI component',
      'Fewer production incidents through better architecture reviews',
      'A cleaner handover when a full-time CTO joins'
    ],
    pricing: [
      { label: 'Monthly retainer (minimum 2-3 days)', price: 'from €2,100/month', note: 'Scales with traction. Invoiced monthly, due within 7 days.' },
      { label: 'Partnership (reduced fee + equity)', price: 'Custom', note: 'For aligned early-stage startups. Service fee always required.' }
    ],
    faqs: [
      { q: "What's the minimum engagement?", a: '2-3 days per month for a 3-month trial period, with option to extend. For urgent technical crises, one-off sprint engagements (1-2 weeks) are also possible.' },
      { q: 'Can you replace our founding CTO?', a: "No — a Fractional CTO is a complement, not a full-time replacement. The role is best suited to startups that don't yet have (or have outgrown) a founding engineer, or to scale-ups where the CTO needs senior advisory support." },
      { q: 'Do you take equity?', a: 'Only as part of a Partnership engagement — reduced cash fee combined with equity. Pure-equity arrangements are not offered. A service fee is always required.' },
      { q: 'How is this different from consulting?', a: "Fractional CTO work is embedded leadership — I'm accountable for outcomes, attend your leadership meetings, and represent your company externally (investors, partners, key hires). Consulting is typically scoped advisory without accountability." },
      { q: 'Can you work alongside our full-time VP of Engineering?', a: 'Yes — this is a common setup in scale-ups. The VP runs day-to-day execution; I provide technical strategy, senior advisory, investor-facing support, and coaching.' },
      { q: 'Remote or on-site?', a: 'Remote-first with on-site days in Paris and short on-site sprints across Europe. Most engagements run 100% remote with weekly syncs and async daily updates.' }
    ]
  },
  it: {
    title: 'Servizi Fractional CTO | Con base a Parigi, focus UE | Aru Bhardwaj',
    h1: 'Fractional CTO per Startup e Scale-Up',
    tagline: 'Leadership tecnica senior, 2-3 giorni al mese. Con base a Parigi, stesso fuso orario del tuo team europeo, padronanza di GDPR, EU AI Act e cloud sovrano.',
    description: 'Assumi un Fractional CTO a Parigi e in tutta Europa. Roadmap tecnica, architettura, assunzioni e strategia AI — senza il costo di un dirigente full-time. Startup e scale-up da seed a Series B.',
    whoItsFor: [
      'Founder non tecnici che costruiscono un prodotto AI-first o tech-heavy',
      'Startup da seed a Series B che hanno bisogno di leadership tecnica senior ma non possono ancora giustificare un CTO full-time',
      'Scale-up sotto le 100 persone dove l\'ingegnere fondatore è cresciuto oltre il ruolo',
      'Aziende che si preparano a un round, a una due diligence o a un\'acquisizione',
      'Team europei che hanno bisogno di GDPR/RGPD, EU AI Act e cloud sovrano a livello di leadership'
    ],
    whatsIncluded: [
      'Roadmap tecnica: piano a 3-6-12 mesi allineato con funding e milestone di prodotto',
      'Decisioni e review di architettura (codice, infrastruttura, dati, AI stack)',
      'Hiring di ingegneria: job spec, interviste, reference check, negoziazioni di offerta',
      'Leadership di team: 1:1 con ingegneri senior, cadenza di sprint, review di delivery',
      'Strategia AI: build vs buy, selezione modelli, contratti vendor, forecast di costi',
      'Advisory regolatoria: EU AI Act, GDPR/RGPD, NIS2, DORA, settori specifici (HDS, ACPR, BaFin)',
      'Supporto investor/board: preparazione due diligence tecnica, narrazioni board-pack, call con investitori',
      'Valutazione di vendor e partnership (cloud, SaaS, model provider, società di consulenza)'
    ],
    process: [
      { step: 'Discovery week', detail: 'Uno sprint di discovery a pagamento di 3-5 giorni per mappare stack, team, rischi e priorità. Output: una assessment tecnica scritta e uno scope di ingaggio proposto.' },
      { step: 'Inizio ingaggio', detail: 'Tipicamente entro 1-2 settimane dalla firma. Slack condiviso, sync settimanali, update asincroni e un decision log continuo.' },
      { step: 'Cadenza continua', detail: '2-3 giorni al mese minimo, che scalano in base al traction. Retainer mensile, fatturato all\'inizio di ogni mese.' },
      { step: 'Review trimestrali', detail: 'Ogni 90 giorni, una review scritta dei progressi rispetto alla roadmap, del budget burn, della salute del team e dei rischi. Correzioni di rotta esplicite.' },
      { step: 'Handover', detail: 'Quando un CTO full-time è pronto, handover pulito con runbook scritto, diagrammi di architettura e presentazione ai vendor/partner chiave.' }
    ],
    outcomes: [
      'Una roadmap tecnica che il tuo board può capire',
      'Una pipeline di hiring per i prossimi 2-3 ingegneri',
      'Una bolletta vendor ridotta (tipicamente 15-30% su cloud/SaaS)',
      'Materiali di due diligence tecnica pronti per gli investitori',
      'Postura di compliance EU AI Act e GDPR revisionata',
      'Una risposta chiara al "build vs buy" per ogni componente AI',
      'Meno incidenti di produzione grazie a review di architettura migliori',
      'Un handover più pulito quando arriva un CTO full-time'
    ],
    pricing: [
      { label: 'Retainer mensile (minimo 2-3 giorni)', price: 'da €2.100/mese', note: 'Scala con il traction. Fatturato mensilmente, pagabile entro 7 giorni.' },
      { label: 'Partnership (tariffa ridotta + equity)', price: 'Custom', note: 'Per startup early-stage allineate. Tariffa di servizio sempre richiesta.' }
    ],
    faqs: [
      { q: 'Qual è il minimo di ingaggio?', a: '2-3 giorni al mese per un trial di 3 mesi, con opzione di estensione. Per crisi tecniche urgenti sono possibili anche sprint one-off (1-2 settimane).' },
      { q: 'Puoi sostituire il nostro CTO fondatore?', a: 'No — un Fractional CTO è un complemento, non un sostituto full-time. Il ruolo è adatto a startup che non hanno ancora (o hanno superato) un ingegnere fondatore, o a scale-up dove il CTO ha bisogno di supporto advisory senior.' },
      { q: 'Accetti equity?', a: 'Solo come parte di un ingaggio Partnership — tariffa cash ridotta combinata con equity. Gli accordi solo in equity non sono offerti. Una tariffa di servizio è sempre richiesta.' },
      { q: 'Come differisce dalla consulenza?', a: 'Il lavoro Fractional CTO è leadership embedded — sono responsabile dei risultati, partecipo ai meeting di leadership e rappresento la tua azienda esternamente (investitori, partner, assunzioni chiave). La consulenza è tipicamente advisory scopato senza accountability.' },
      { q: 'Puoi lavorare accanto al nostro VP of Engineering full-time?', a: 'Sì — è un setup comune nelle scale-up. Il VP gestisce l\'esecuzione day-to-day; io fornisco strategia tecnica, advisory senior, supporto investor-facing e coaching.' },
      { q: 'Remote o on-site?', a: 'Remote-first con giornate on-site a Parigi e brevi sprint on-site in Europa. La maggior parte degli ingaggi è 100% remote con sync settimanali e update asincroni quotidiani.' }
    ]
  },
  fr: {
    title: 'Services Fractional CTO | Basé à Paris, Focus UE | Aru Bhardwaj',
    h1: 'Fractional CTO pour Startups et Scale-Ups',
    tagline: 'Leadership technique senior, 2-3 jours par mois. Basé à Paris, même fuseau horaire que votre équipe européenne, expertise RGPD, EU AI Act, et cloud souverain.',
    description: 'Recrutez un Fractional CTO à Paris et partout en Europe. Feuille de route technique, architecture, recrutement, et stratégie IA — sans le coût d\'un dirigeant à temps plein. Startups et scale-ups du seed au Series B.',
    whoItsFor: [
      'Fondateurs non techniques construisant un produit AI-first ou tech-heavy',
      'Startups du seed au Series B qui ont besoin de leadership technique senior mais ne peuvent pas encore justifier un CTO à temps plein',
      'Scale-ups sous 100 personnes où l\'ingénieur fondateur a dépassé le rôle',
      'Entreprises préparant une levée, une due diligence, ou une acquisition',
      'Équipes européennes qui ont besoin d\'expertise RGPD, EU AI Act, et cloud souverain côté leadership'
    ],
    whatsIncluded: [
      'Feuille de route technique : plan à 3-6-12 mois aligné avec le funding et les milestones produit',
      'Décisions et revues d\'architecture (code, infra, data, AI stack)',
      'Recrutement ingénieurs : job specs, entretiens, prises de références, négociations d\'offre',
      'Leadership d\'équipe : 1:1 avec les ingénieurs seniors, cadence de sprint, revues de livraison',
      'Stratégie IA : build vs buy, sélection de modèles, contrats vendor, prévisions de coût',
      'Conseil réglementaire : EU AI Act, RGPD, NIS2, DORA, sectoriels (HDS, ACPR, BaFin)',
      'Support investisseurs/board : préparation due diligence technique, narratifs board-pack, appels investisseurs',
      'Évaluation de vendors et partenariats (cloud, SaaS, éditeurs de modèles, cabinets conseil)'
    ],
    process: [
      { step: 'Semaine de discovery', detail: 'Un sprint de discovery payant de 3-5 jours pour cartographier votre stack, équipe, risques et priorités. Livrables : une évaluation technique écrite et un scope d\'engagement proposé.' },
      { step: 'Démarrage', detail: 'Typiquement dans les 1-2 semaines après signature. Slack partagé, syncs hebdomadaires, updates asynchrones et un decision log continu.' },
      { step: 'Cadence continue', detail: '2-3 jours par mois minimum, montant avec la traction. Forfait mensuel, facturé en début de mois.' },
      { step: 'Revues trimestrielles', detail: 'Tous les 90 jours, une revue écrite des progrès vs la feuille de route, du budget burn, de la santé de l\'équipe, et des risques. Corrections de trajectoire explicites.' },
      { step: 'Handover', detail: 'Quand un CTO à temps plein arrive, handover propre avec runbook écrit, diagrammes d\'architecture, et présentation aux vendors/partenaires clés.' }
    ],
    outcomes: [
      'Une feuille de route technique que votre board peut comprendre',
      'Un pipeline de recrutement pour les 2-3 prochains ingénieurs',
      'Une facture vendor réduite (typiquement 15-30 % sur cloud/SaaS)',
      'Des matériaux de due diligence technique prêts pour les investisseurs',
      'Posture de conformité EU AI Act et RGPD revue',
      'Une réponse claire au « build vs buy » pour chaque composant IA',
      'Moins d\'incidents de production grâce à de meilleures revues d\'architecture',
      'Un handover plus propre quand un CTO à temps plein arrive'
    ],
    pricing: [
      { label: 'Forfait mensuel (minimum 2-3 jours)', price: 'à partir de 2 100 €/mois', note: 'Évolue avec la traction. Facturé mensuellement, dû sous 7 jours.' },
      { label: 'Partenariat (tarif réduit + equity)', price: 'Sur mesure', note: 'Pour startups early-stage alignées. Service fee toujours requis.' }
    ],
    faqs: [
      { q: 'Quel est l\'engagement minimum ?', a: '2-3 jours par mois pour une période d\'essai de 3 mois, avec option de prolongation. Pour les crises techniques urgentes, des sprints ponctuels (1-2 semaines) sont aussi possibles.' },
      { q: 'Pouvez-vous remplacer notre CTO fondateur ?', a: 'Non — un Fractional CTO est un complément, pas un remplacement à temps plein. Le rôle convient aux startups qui n\'ont pas encore (ou ont dépassé) un ingénieur fondateur, ou aux scale-ups dont le CTO a besoin de conseil senior.' },
      { q: 'Prenez-vous de l\'equity ?', a: 'Uniquement dans le cadre d\'un engagement Partenariat — tarif cash réduit combiné à de l\'equity. Les arrangements purement en equity ne sont pas proposés. Un service fee est toujours requis.' },
      { q: 'Quelle différence avec du conseil ?', a: 'Le travail Fractional CTO est un leadership intégré — je suis redevable des résultats, participe à vos réunions de leadership, et représente votre entreprise à l\'externe (investisseurs, partenaires, recrutements clés). Le conseil est typiquement un advisory cadré sans accountability.' },
      { q: 'Pouvez-vous travailler aux côtés de notre VP of Engineering ?', a: 'Oui — c\'est une configuration courante en scale-up. Le VP gère l\'exécution quotidienne ; j\'apporte la stratégie technique, le conseil senior, le support investisseurs, et du coaching.' },
      { q: 'À distance ou sur site ?', a: 'Remote-first avec des journées sur site à Paris et des sprints courts sur site en Europe. La plupart des engagements sont 100 % à distance avec syncs hebdos et updates asynchrones quotidiens.' }
    ]
  },
  de: {
    title: 'Fractional-CTO-Services | Paris-basiert, EU-fokussiert | Aru Bhardwaj',
    h1: 'Fractional CTO für Startups & Scale-ups',
    tagline: 'Senior technische Führung, 2-3 Tage pro Monat. In Paris ansässig, gleiche Zeitzone wie Ihr europäisches Team, fließend in DSGVO, EU AI Act und souveräner Cloud.',
    description: 'Stellen Sie einen Fractional CTO in Paris und in ganz Europa ein. Technische Roadmap, Architektur, Hiring und KI-Strategie — ohne die Kosten eines Vollzeit-Executives. Startups und Scale-ups von Seed bis Series B.',
    whoItsFor: [
      'Nicht-technische Gründer, die ein KI-first oder tech-lastiges Produkt bauen',
      'Seed- bis Series-B-Startups, die senior-technische Führung brauchen, aber noch keinen Vollzeit-CTO rechtfertigen können',
      'Scale-ups unter 100 Personen, wo der Gründungsingenieur der Rolle entwachsen ist',
      'Unternehmen, die sich auf Fundraising, Due Diligence oder eine Übernahme vorbereiten',
      'Europäische Teams, die DSGVO, EU AI Act und Souveräne-Cloud-Expertise auf Führungsebene brauchen'
    ],
    whatsIncluded: [
      'Technische Roadmap: 3-6-12-Monats-Plan abgestimmt auf Funding und Produkt-Meilensteine',
      'Architekturentscheidungen und -Reviews (Code, Infra, Data, KI-Stack)',
      'Engineering-Hiring: Jobprofile, Interviews, Referenz-Checks, Offer-Verhandlungen',
      'Team-Führung: 1:1s mit Senior-Ingenieuren, Sprint-Kadenz, Delivery-Reviews',
      'KI-Strategie: Build vs Buy, Modellauswahl, Vendor-Verträge, Kostenprognose',
      'Regulatorische Beratung: EU AI Act, DSGVO, NIS2, DORA, branchenspezifisch (HDS, ACPR, BaFin)',
      'Investor/Board-Support: technische Due-Diligence-Vorbereitung, Board-Pack-Narrative, Investor-Calls',
      'Vendor- und Partnerschafts-Bewertung (Cloud, SaaS, Modellanbieter, Beratungen)'
    ],
    process: [
      { step: 'Discovery-Woche', detail: 'Ein bezahlter Discovery-Sprint von 3-5 Tagen, um Stack, Team, Risiken und Prioritäten zu mappen. Ergebnisse: eine schriftliche technische Bewertung und ein vorgeschlagener Engagement-Scope.' },
      { step: 'Engagement-Start', detail: 'Typischerweise innerhalb von 1-2 Wochen nach Vertragsabschluss. Gemeinsamer Slack, wöchentliche Syncs, asynchrone Updates und ein laufendes Decision-Log.' },
      { step: 'Laufende Kadenz', detail: 'Mindestens 2-3 Tage pro Monat, skalierend mit der Traction. Monatlicher Retainer, Anfang des Monats abgerechnet.' },
      { step: 'Quartals-Reviews', detail: 'Alle 90 Tage eine schriftliche Review der Fortschritte gegenüber der Roadmap, des Budget-Burns, der Team-Gesundheit und der Risiken. Kurs-Korrekturen explizit.' },
      { step: 'Übergabe', detail: 'Wenn ein Vollzeit-CTO bereit ist, saubere Übergabe mit schriftlichem Runbook, Architekturdiagrammen und Vorstellung bei wichtigen Vendors/Partnern.' }
    ],
    outcomes: [
      'Eine technische Roadmap, die Ihr Board versteht',
      'Eine Hiring-Pipeline für die nächsten 2-3 Ingenieure',
      'Eine reduzierte Vendor-Rechnung (typischerweise 15-30 % bei Cloud/SaaS)',
      'Investor-fertige technische Due-Diligence-Unterlagen',
      'EU-AI-Act- und DSGVO-Compliance-Posture überprüft',
      'Eine klare Antwort auf „Build vs Buy" für jede KI-Komponente',
      'Weniger Produktionsvorfälle durch bessere Architektur-Reviews',
      'Eine sauberere Übergabe, wenn ein Vollzeit-CTO kommt'
    ],
    pricing: [
      { label: 'Monats-Retainer (mindestens 2-3 Tage)', price: 'ab €2.100/Monat', note: 'Skaliert mit der Traction. Monatlich abgerechnet, innerhalb von 7 Tagen fällig.' },
      { label: 'Partnerschaft (reduzierte Gebühr + Equity)', price: 'Individuell', note: 'Für passende Early-Stage-Startups. Servicegebühr immer erforderlich.' }
    ],
    faqs: [
      { q: 'Was ist das Mindest-Engagement?', a: '2-3 Tage pro Monat für eine 3-monatige Probephase, mit Option auf Verlängerung. Für dringende technische Krisen sind auch einmalige Sprint-Engagements (1-2 Wochen) möglich.' },
      { q: 'Können Sie unseren Gründungs-CTO ersetzen?', a: 'Nein — ein Fractional CTO ist eine Ergänzung, kein Vollzeit-Ersatz. Die Rolle passt am besten zu Startups, die noch keinen (oder über einen hinausgewachsenen) Gründungsingenieur haben, oder zu Scale-ups, deren CTO seniorberatende Unterstützung braucht.' },
      { q: 'Nehmen Sie Equity?', a: 'Nur im Rahmen eines Partnerschafts-Engagements — reduzierte Cash-Gebühr kombiniert mit Equity. Reine Equity-Vereinbarungen werden nicht angeboten. Eine Servicegebühr ist immer erforderlich.' },
      { q: 'Was ist der Unterschied zu Consulting?', a: 'Fractional-CTO-Arbeit ist eingebettete Führung — ich bin für Ergebnisse verantwortlich, nehme an Ihren Führungsmeetings teil und repräsentiere Ihr Unternehmen extern (Investoren, Partner, Schlüsseleinstellungen). Consulting ist typischerweise abgegrenztes Advisory ohne Ergebnisverantwortung.' },
      { q: 'Können Sie neben unserem Vollzeit-VP of Engineering arbeiten?', a: 'Ja — dies ist ein gängiges Setup in Scale-ups. Der VP führt die tägliche Umsetzung; ich liefere technische Strategie, Senior-Advisory, Investor-gerichtete Unterstützung und Coaching.' },
      { q: 'Remote oder vor Ort?', a: 'Remote-first mit Vor-Ort-Tagen in Paris und kurzen Vor-Ort-Sprints in Europa. Die meisten Engagements laufen zu 100 % remote mit wöchentlichen Syncs und asynchronen täglichen Updates.' }
    ]
  }
};

const FractionalCtoPage = () => {
  const { language } = useLanguage();
  const c = CONTENT[language as Lang];

  return (
    <ServicePageLayout
      slug="fractional-cto"
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

export default FractionalCtoPage;

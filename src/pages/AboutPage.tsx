import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Linkedin, ExternalLink, MapPin, Mail, Phone, Building2, Briefcase, Award, Languages, Zap } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import BookConsultationDialog from '@/components/BookConsultationDialog';
import CostCalculator from '@/components/CostCalculator';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

type Lang = 'en' | 'it' | 'fr' | 'de';

interface AboutContent {
  metaTitle: string;
  metaDesc: string;
  ogTitle: string;
  ogDesc: string;
  kicker: string;
  heading: string;
  tagline: (insightrix: React.ReactNode) => React.ReactNode;
  imgAlt: string;
  bio: React.ReactNode[];
  companyKicker: string;
  companyLocation: string;
  insightrixP1: React.ReactNode;
  insightrixP2: string;
  visitInsightrix: string;
  whatIDoHeading: string;
  whatIDo: { title: string; desc: string; to: string }[];
  keyFactsHeading: string;
  facts: { label: string; value: string; iconKey: 'role' | 'company' | 'base' | 'experience' | 'languages' | 'availability' }[];
  getInTouch: string;
  paris: string;
  readyHeading: string;
  readyBody: string;
  bookCta: string;
  submitCta: string;
  backToHome: string;
}

const CONTENT: Record<Lang, AboutContent> = {
  en: {
    metaTitle: 'About Aru Bhardwaj — Fractional CTO, AI Strategist & President of Insightrix SAS',
    metaDesc: 'Paris-based Fractional CTO, AI Strategist, and President of Insightrix SAS (insightrix.eu). 7+ years in AI, data engineering, and sovereign LLM infrastructure. Serving startups and regulated enterprises across Europe.',
    ogTitle: 'About Aru Bhardwaj — Fractional CTO & AI Strategist',
    ogDesc: 'Paris-based Fractional CTO and President of Insightrix SAS, specialising in European sovereign AI, GDPR-compliant LLM systems, and AI MVP builds.',
    kicker: 'About',
    heading: 'Aru Bhardwaj',
    tagline: (insightrix) => (
      <>
        Fractional CTO, AI Strategist, and President of {insightrix} — a Paris-based AI consulting firm serving startups, scale-ups, and regulated enterprises across Europe.
      </>
    ),
    imgAlt: 'Aru Bhardwaj — Fractional CTO, AI Strategist & President of Insightrix SAS, based in Paris, France',
    bio: [
      (<>
        I'm a Paris-based technical leader with 7+ years across AI, data engineering, and full-stack development. I serve as a <strong>Fractional CTO</strong> for European startups and scale-ups — providing senior technical leadership on a part-time basis — and as an <strong>AI Strategist</strong> for regulated enterprises navigating the EU AI Act, GDPR, and sovereign-cloud requirements.
      </>),
      'I architect production-grade AI systems built to ship: intelligent RAG pipelines, autonomous agents, and sovereign LLM infrastructure that stands up to compliance, scale, and scrutiny.',
      "Whether you're a founder mapping a technical roadmap or a team racing to launch an AI product, I close the gap between cutting-edge generative AI and real business impact — with systems built secure by design, compliant by default, and engineered to win."
    ],
    companyKicker: 'Company',
    companyLocation: 'Paris, France · AI consulting firm',
    insightrixP1: (<>
      I'm the <strong>President and founder of Insightrix SAS</strong> — a Paris-headquartered AI consulting firm with active operations across the <strong>European Union</strong>, the <strong>United Kingdom</strong>, <strong>India</strong>, and the <strong>GCC region</strong> (Saudi Arabia, UAE, Qatar, Kuwait, Bahrain, Oman). Insightrix delivers Fractional CTO services, AI-powered MVP development, sovereign LLM infrastructure, and regulatory compliance advisory for startups, scale-ups, and regulated enterprises.
    </>),
    insightrixP2: 'Working through Insightrix means one European counterparty that speaks your compliance language — French law for EU contracts, GDPR-ready data handling, and multi-region delivery across France, the UK, India, and the GCC.',
    visitInsightrix: 'Visit insightrix.eu',
    whatIDoHeading: 'What I do',
    whatIDo: [
      { title: 'Fractional CTO', desc: 'Part-time technical leadership for startups and scale-ups.', to: '/services/fractional-cto' },
      { title: 'AI-Powered MVP Builder', desc: 'Idea-to-production MVPs in 4-8 weeks.', to: '/services/mvp-builder' },
      { title: 'EU Sovereign AI & GDPR LLM', desc: 'OVHcloud, Scaleway, Mistral, on-prem deployments.', to: '/services/sovereign-ai' },
      { title: 'Consultations', desc: '30-min (€45) or 60-min (€90) focused calls.', to: '/#consultation' }
    ],
    keyFactsHeading: 'Key facts',
    facts: [
      { iconKey: 'role', label: 'Role', value: 'Fractional CTO & AI Strategist' },
      { iconKey: 'company', label: 'Company', value: 'President, Insightrix SAS' },
      { iconKey: 'base', label: 'Base', value: 'Paris, France' },
      { iconKey: 'experience', label: 'Experience', value: '7+ years in AI & data engineering' },
      { iconKey: 'languages', label: 'Languages', value: 'EN · IT · FR (B1) · HI' },
      { iconKey: 'availability', label: 'Availability', value: 'Paris & Remote' }
    ],
    getInTouch: 'Get in touch',
    paris: 'Paris, France & Remote',
    readyHeading: 'Ready to discuss your project?',
    readyBody: 'Book a focused call — 30-min scope (€45) or 60-min deep-dive (€90). Written summary within 24h.',
    bookCta: 'Book a Consultation',
    submitCta: 'Submit a Project',
    backToHome: 'Back to home'
  },
  it: {
    metaTitle: 'Chi è Aru Bhardwaj — Fractional CTO, AI Strategist e Presidente di Insightrix SAS',
    metaDesc: 'Fractional CTO, AI Strategist e Presidente di Insightrix SAS (insightrix.eu) con base a Parigi. 7+ anni in AI, data engineering e infrastrutture LLM sovrane. Al servizio di startup e aziende regolamentate in tutta Europa.',
    ogTitle: 'Chi è Aru Bhardwaj — Fractional CTO & AI Strategist',
    ogDesc: 'Fractional CTO a Parigi e Presidente di Insightrix SAS, specializzato in AI sovrana europea, sistemi LLM GDPR-compliant e sviluppo di MVP basati su AI.',
    kicker: 'Chi Sono',
    heading: 'Aru Bhardwaj',
    tagline: (insightrix) => (
      <>
        Fractional CTO, AI Strategist e Presidente di {insightrix} — una società di consulenza AI con sede a Parigi che serve startup, scale-up e aziende regolamentate in tutta Europa.
      </>
    ),
    imgAlt: 'Aru Bhardwaj — Fractional CTO, AI Strategist e Presidente di Insightrix SAS, con base a Parigi, Francia',
    bio: [
      (<>
        Sono un technical leader con base a Parigi e oltre 7 anni di esperienza tra AI, data engineering e sviluppo full-stack. Lavoro come <strong>Fractional CTO</strong> per startup e scale-up europee — fornendo leadership tecnica senior part-time — e come <strong>AI Strategist</strong> per aziende regolamentate che navigano l'EU AI Act, il GDPR e requisiti di cloud sovrano.
      </>),
      'Progetto sistemi AI di livello enterprise pronti per la produzione: pipeline RAG intelligenti, agenti autonomi e infrastruttura LLM sovrana che regge compliance, scala e audit.',
      "Che tu sia un founder alla ricerca della tua roadmap tecnica o un team che corre a lanciare un prodotto AI, colmo il gap tra intelligenza artificiale di frontiera e impatto reale sul business — con sistemi secure by design, compliant by default e ingegnerizzati per vincere."
    ],
    companyKicker: 'Azienda',
    companyLocation: 'Parigi, Francia · Società di consulenza AI',
    insightrixP1: (<>
      Sono il <strong>Presidente e fondatore di Insightrix SAS</strong> — una società di consulenza AI con sede a Parigi e operatività attiva nell'<strong>Unione Europea</strong>, nel <strong>Regno Unito</strong> e in <strong>India</strong>. Insightrix offre servizi di Fractional CTO, sviluppo di MVP basati su AI, infrastrutture LLM sovrane e consulenza di conformità normativa per startup, scale-up e aziende regolamentate.
    </>),
    insightrixP2: 'Lavorare tramite Insightrix significa avere un\'unica controparte europea che parla il tuo linguaggio di compliance — diritto francese per i contratti UE, gestione dati GDPR-ready e delivery multi-regione tra Francia, Regno Unito e India.',
    visitInsightrix: 'Visita insightrix.eu',
    whatIDoHeading: 'Cosa faccio',
    whatIDo: [
      { title: 'Fractional CTO', desc: 'Leadership tecnica part-time per startup e scale-up.', to: '/services/fractional-cto' },
      { title: 'MVP Builder basato su AI', desc: 'MVP dall\'idea alla produzione in 4-8 settimane.', to: '/services/mvp-builder' },
      { title: 'AI Sovrana UE & LLM GDPR', desc: 'OVHcloud, Scaleway, Mistral, deployment on-prem.', to: '/services/sovereign-ai' },
      { title: 'Consulenze', desc: 'Call mirate da 30 min (€45) o 60 min (€90).', to: '/#consultation' }
    ],
    keyFactsHeading: 'Dati principali',
    facts: [
      { iconKey: 'role', label: 'Ruolo', value: 'Fractional CTO & AI Strategist' },
      { iconKey: 'company', label: 'Azienda', value: 'Presidente, Insightrix SAS' },
      { iconKey: 'base', label: 'Sede', value: 'Parigi, Francia' },
      { iconKey: 'experience', label: 'Esperienza', value: '7+ anni in AI & data engineering' },
      { iconKey: 'languages', label: 'Lingue', value: 'EN · IT · FR (B1) · HI' },
      { iconKey: 'availability', label: 'Disponibilità', value: 'Parigi & Remote' }
    ],
    getInTouch: 'Contattami',
    paris: 'Parigi, Francia & Remoto',
    readyHeading: 'Pronto a discutere il tuo progetto?',
    readyBody: 'Prenota una call mirata — scoping di 30 min (€45) o deep-dive di 60 min (€90). Riepilogo scritto entro 24 ore.',
    bookCta: 'Prenota una Consulenza',
    submitCta: 'Invia un Progetto',
    backToHome: 'Torna alla home'
  },
  fr: {
    metaTitle: 'À propos d\'Aru Bhardwaj — Fractional CTO, AI Strategist et Président d\'Insightrix SAS',
    metaDesc: 'Fractional CTO, AI Strategist et Président d\'Insightrix SAS (insightrix.eu) basé à Paris. 7+ ans en IA, data engineering et infrastructures LLM souveraines. Au service des startups et entreprises régulées à travers l\'Europe.',
    ogTitle: 'À propos d\'Aru Bhardwaj — Fractional CTO & AI Strategist',
    ogDesc: 'Fractional CTO à Paris et Président d\'Insightrix SAS, spécialiste de l\'IA souveraine européenne, des systèmes LLM conformes RGPD, et des MVP IA.',
    kicker: 'À propos',
    heading: 'Aru Bhardwaj',
    tagline: (insightrix) => (
      <>
        Fractional CTO, AI Strategist et Président d{"'"}{insightrix} — une société de conseil IA basée à Paris qui accompagne startups, scale-ups et entreprises régulées à travers l'Europe.
      </>
    ),
    imgAlt: 'Aru Bhardwaj — Fractional CTO, AI Strategist et Président d\'Insightrix SAS, basé à Paris, France',
    bio: [
      (<>
        Je suis un leader technique basé à Paris avec plus de 7 ans d'expérience en IA, data engineering et développement full-stack. J'interviens comme <strong>Fractional CTO</strong> pour des startups et scale-ups européennes — en apportant un leadership technique senior à temps partiel — et comme <strong>AI Strategist</strong> pour des entreprises régulées naviguant l'EU AI Act, le RGPD et les exigences de cloud souverain.
      </>),
      'Je conçois des systèmes IA de niveau production — pipelines RAG intelligents, agents autonomes et infrastructure LLM souveraine qui tient face à la conformité, l\'échelle et l\'audit.',
      "Que vous soyez fondateur en quête d'une feuille de route technique ou une équipe en course pour lancer un produit IA, je comble l'écart entre IA générative de pointe et impact business réel — avec des systèmes pensés secure by design, compliant by default, et conçus pour gagner."
    ],
    companyKicker: 'Entreprise',
    companyLocation: 'Paris, France · Société de conseil IA',
    insightrixP1: (<>
      Je suis le <strong>Président et fondateur d'Insightrix SAS</strong> — une société de conseil IA dont le siège est à Paris, avec des opérations actives dans l'<strong>Union Européenne</strong>, au <strong>Royaume-Uni</strong>, et en <strong>Inde</strong>. Insightrix délivre des services de Fractional CTO, du développement de MVP IA, de l'infrastructure LLM souveraine et du conseil en conformité réglementaire pour startups, scale-ups et entreprises régulées.
    </>),
    insightrixP2: "Travailler via Insightrix, c'est avoir une seule contrepartie européenne qui parle votre langage de conformité — droit français pour les contrats UE, gestion des données prête pour le RGPD, et livraison multi-région en France, au Royaume-Uni, et en Inde.",
    visitInsightrix: 'Visiter insightrix.eu',
    whatIDoHeading: 'Ce que je fais',
    whatIDo: [
      { title: 'Fractional CTO', desc: 'Leadership technique à temps partiel pour startups et scale-ups.', to: '/services/fractional-cto' },
      { title: 'Constructeur de MVP IA', desc: "MVP de l'idée à la production en 4-8 semaines.", to: '/services/mvp-builder' },
      { title: 'IA Souveraine UE & LLM RGPD', desc: 'OVHcloud, Scaleway, Mistral, déploiements on-prem.', to: '/services/sovereign-ai' },
      { title: 'Consultations', desc: 'Appels ciblés de 30 min (45 €) ou 60 min (90 €).', to: '/#consultation' }
    ],
    keyFactsHeading: 'Faits clés',
    facts: [
      { iconKey: 'role', label: 'Rôle', value: 'Fractional CTO & AI Strategist' },
      { iconKey: 'company', label: 'Entreprise', value: 'Président, Insightrix SAS' },
      { iconKey: 'base', label: 'Base', value: 'Paris, France' },
      { iconKey: 'experience', label: 'Expérience', value: '7+ ans en IA & data engineering' },
      { iconKey: 'languages', label: 'Langues', value: 'EN · IT · FR (B1) · HI' },
      { iconKey: 'availability', label: 'Disponibilité', value: 'Paris & À distance' }
    ],
    getInTouch: 'Me contacter',
    paris: 'Paris, France & À distance',
    readyHeading: 'Prêt à discuter de votre projet ?',
    readyBody: 'Réservez un appel ciblé — cadrage en 30 min (45 €) ou deep-dive en 60 min (90 €). Synthèse écrite sous 24 h.',
    bookCta: 'Réserver une Consultation',
    submitCta: 'Soumettre un Projet',
    backToHome: "Retour à l'accueil"
  },
  de: {
    metaTitle: 'Über Aru Bhardwaj — Fractional CTO, KI-Stratege & Präsident von Insightrix SAS',
    metaDesc: 'In Paris ansässiger Fractional CTO, AI Strategist und Präsident von Insightrix SAS (insightrix.eu). 7+ Jahre in KI, Data Engineering und souveräner LLM-Infrastruktur. Für Startups und regulierte Unternehmen in ganz Europa.',
    ogTitle: 'Über Aru Bhardwaj — Fractional CTO & KI-Stratege',
    ogDesc: 'In Paris ansässiger Fractional CTO und Präsident von Insightrix SAS, spezialisiert auf europäische souveräne KI, DSGVO-konforme LLM-Systeme und KI-MVP-Entwicklung.',
    kicker: 'Über mich',
    heading: 'Aru Bhardwaj',
    tagline: (insightrix) => (
      <>
        Fractional CTO, KI-Stratege und Präsident von {insightrix} — einem KI-Beratungsunternehmen mit Sitz in Paris, das Startups, Scale-ups und regulierte Unternehmen in ganz Europa betreut.
      </>
    ),
    imgAlt: 'Aru Bhardwaj — Fractional CTO, KI-Stratege und Präsident von Insightrix SAS, mit Sitz in Paris, Frankreich',
    bio: [
      (<>
        Ich bin ein in Paris ansässiger Tech-Leader mit über 7 Jahren Erfahrung in KI, Data Engineering und Full-Stack-Entwicklung. Ich arbeite als <strong>Fractional CTO</strong> für europäische Startups und Scale-ups — mit senior-technischer Führung auf Teilzeitbasis — und als <strong>KI-Stratege</strong> für regulierte Unternehmen, die sich mit dem EU AI Act, der DSGVO und souveränen Cloud-Anforderungen auseinandersetzen.
      </>),
      'Ich architektiere produktionsreife KI-Systeme — intelligente RAG-Pipelines, autonome Agenten und souveräne LLM-Infrastruktur, die Compliance, Skalierung und Prüfung standhält.',
      'Ob Sie Gründer mit einer Tech-Roadmap im Aufbau sind oder ein Team, das ein KI-Produkt launchen will — ich schließe die Lücke zwischen modernster generativer KI und echtem Business-Impact. Mit Systemen, die secure by design, compliant by default und zum Gewinnen gebaut sind.'
    ],
    companyKicker: 'Unternehmen',
    companyLocation: 'Paris, Frankreich · KI-Beratungsunternehmen',
    insightrixP1: (<>
      Ich bin der <strong>Präsident und Gründer von Insightrix SAS</strong> — einem KI-Beratungsunternehmen mit Sitz in Paris und aktiven Operationen in der <strong>Europäischen Union</strong>, dem <strong>Vereinigten Königreich</strong> und <strong>Indien</strong>. Insightrix bietet Fractional-CTO-Services, KI-gestützte MVP-Entwicklung, souveräne LLM-Infrastruktur und regulatorische Compliance-Beratung für Startups, Scale-ups und regulierte Unternehmen.
    </>),
    insightrixP2: 'Über Insightrix zu arbeiten bedeutet, einen einzigen europäischen Vertragspartner zu haben, der Ihre Compliance-Sprache spricht — französisches Recht für EU-Verträge, DSGVO-konforme Datenverarbeitung und Multi-Region-Delivery zwischen Frankreich, Großbritannien und Indien.',
    visitInsightrix: 'Insightrix.eu besuchen',
    whatIDoHeading: 'Was ich mache',
    whatIDo: [
      { title: 'Fractional CTO', desc: 'Technische Führung in Teilzeit für Startups und Scale-ups.', to: '/services/fractional-cto' },
      { title: 'KI-MVP-Builder', desc: 'MVPs von der Idee zur Produktion in 4-8 Wochen.', to: '/services/mvp-builder' },
      { title: 'Souveräne EU-KI & DSGVO-LLM', desc: 'OVHcloud, Scaleway, Mistral, On-Prem-Deployments.', to: '/services/sovereign-ai' },
      { title: 'Beratungen', desc: '30 Min. (€45) oder 60 Min. (€90) fokussierte Calls.', to: '/#consultation' }
    ],
    keyFactsHeading: 'Eckdaten',
    facts: [
      { iconKey: 'role', label: 'Rolle', value: 'Fractional CTO & KI-Stratege' },
      { iconKey: 'company', label: 'Unternehmen', value: 'Präsident, Insightrix SAS' },
      { iconKey: 'base', label: 'Sitz', value: 'Paris, Frankreich' },
      { iconKey: 'experience', label: 'Erfahrung', value: '7+ Jahre in KI & Data Engineering' },
      { iconKey: 'languages', label: 'Sprachen', value: 'EN · IT · FR (B1) · HI' },
      { iconKey: 'availability', label: 'Verfügbarkeit', value: 'Paris & Remote' }
    ],
    getInTouch: 'Kontakt aufnehmen',
    paris: 'Paris, Frankreich & Remote',
    readyHeading: 'Bereit, Ihr Projekt zu besprechen?',
    readyBody: 'Buchen Sie einen fokussierten Call — 30-Min-Scoping (€45) oder 60-Min-Deep-Dive (€90). Schriftliche Zusammenfassung binnen 24 Std.',
    bookCta: 'Beratung Buchen',
    submitCta: 'Projekt Einreichen',
    backToHome: 'Zurück zur Startseite'
  }
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  '@id': 'https://arubhardwaj.eu/about#aboutpage',
  url: 'https://arubhardwaj.eu/about',
  name: 'About Aru Bhardwaj — Fractional CTO & AI Strategist',
  mainEntity: {
    '@type': 'Person',
    '@id': 'https://arubhardwaj.eu/#person',
    name: 'Aru Bhardwaj',
    givenName: 'Aru',
    familyName: 'Bhardwaj',
    jobTitle: 'Fractional CTO, AI Strategist & President of Insightrix SAS',
    description: 'Paris-based Fractional CTO, AI Strategist, and President of Insightrix SAS — a French AI consulting firm. 7+ years across AI, data engineering, and full-stack development.',
    worksFor: { '@id': 'https://insightrix.eu/#organization' },
    knowsLanguage: ['English', 'Italian', 'French', 'Hindi'],
    nationality: 'Indian',
    url: 'https://arubhardwaj.eu/',
    image: 'https://arubhardwaj.eu/images/headshot.jpg',
    sameAs: [
      'https://www.linkedin.com/in/arub',
      'https://www.malt.fr/profile/arubhardwaj',
      'https://github.com/arubhardwaj',
      'https://insightrix.eu'
    ]
  },
  dateModified: '2026-04-21'
};

const AboutPage = () => {
  const { language } = useLanguage();
  const c = CONTENT[language as Lang];

  const insightrixLink = (
    <a href="https://insightrix.eu" target="_blank" rel="noopener noreferrer" className="text-theme-olive underline decoration-theme-gold underline-offset-4 hover:text-theme-gold transition-colors">
      Insightrix SAS
    </a>
  );

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{c.metaTitle}</title>
        <meta name="description" content={c.metaDesc} />
        <link rel="canonical" href="https://arubhardwaj.eu/about" />
        <meta property="og:title" content={c.ogTitle} />
        <meta property="og:description" content={c.ogDesc} />
        <meta property="og:url" content="https://arubhardwaj.eu/about" />
        <meta property="og:type" content="profile" />
        <meta property="og:image" content="https://arubhardwaj.eu/images/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={c.ogTitle} />
        <meta name="twitter:description" content={c.ogDesc} />
        <meta name="twitter:image" content="https://arubhardwaj.eu/images/og-image.jpg" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://arubhardwaj.eu/' },
              { '@type': 'ListItem', position: 2, name: 'About', item: 'https://arubhardwaj.eu/about' }
            ]
          })}
        </script>
      </Helmet>
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-theme-olive hover:text-theme-gold transition-colors mb-6">
            <ArrowLeft className="h-4 w-4" />
            {c.backToHome}
          </Link>

          <header className="mb-12">
            <p className="text-sm font-semibold uppercase tracking-wider text-theme-gold mb-3">{c.kicker}</p>
            <h1 className="text-4xl md:text-5xl font-bold text-theme-olive mb-4 leading-tight">{c.heading}</h1>
            <p className="text-xl text-gray-700 leading-relaxed">{c.tagline(insightrixLink)}</p>
          </header>

          <div className="grid md:grid-cols-[auto,1fr] gap-8 mb-12 items-start">
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden ring-4 ring-theme-gold/30 mx-auto md:mx-0 shadow-xl shrink-0">
              <img src="/images/headshot.jpg" alt={c.imgAlt} className="w-full h-full object-cover object-top" loading="eager" width="224" height="224" />
            </div>

            <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
              {c.bio.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>

          {/* Insightrix SAS card */}
          <section className="mb-12 bg-theme-olive/5 rounded-xl p-8 border border-theme-olive/15">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-lg bg-theme-gold/20 flex items-center justify-center shrink-0">
                <Building2 className="h-6 w-6 text-theme-gold" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-theme-gold mb-1">{c.companyKicker}</p>
                <h2 className="text-2xl font-bold text-theme-olive">Insightrix SAS</h2>
                <p className="text-sm text-gray-600">{c.companyLocation}</p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">{c.insightrixP1}</p>
            <p className="text-gray-700 leading-relaxed mb-5">{c.insightrixP2}</p>
            <a href="https://insightrix.eu" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-theme-olive font-semibold hover:text-theme-gold transition-colors">
              {c.visitInsightrix}
              <ExternalLink className="h-4 w-4" />
            </a>
          </section>

          {/* What I do */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-theme-olive mb-5">{c.whatIDoHeading}</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {c.whatIDo.map((item, i) => (
                <Link key={i} to={item.to} className="block bg-white border border-gray-200 rounded-lg p-5 hover:border-theme-gold hover:shadow-md transition-all group">
                  <h3 className="font-semibold text-theme-olive mb-2 group-hover:text-theme-gold transition-colors">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </Link>
              ))}
            </div>
          </section>

          {/* Facts — visual stat grid */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-theme-olive mb-5">{c.keyFactsHeading}</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {c.facts.map((f, i) => {
                const Icon =
                  f.iconKey === 'role' ? Briefcase :
                  f.iconKey === 'company' ? Building2 :
                  f.iconKey === 'base' ? MapPin :
                  f.iconKey === 'experience' ? Award :
                  f.iconKey === 'languages' ? Languages :
                  Zap;
                return (
                  <div
                    key={i}
                    className="group bg-white border border-gray-200 rounded-xl p-4 hover:border-theme-gold hover:shadow-md transition-all"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-theme-gold/10 flex items-center justify-center shrink-0 group-hover:bg-theme-gold/20 transition-colors">
                        <Icon className="h-4 w-4 text-theme-gold" />
                      </div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-theme-olive/70">
                        {f.label}
                      </p>
                    </div>
                    <p className="text-sm font-semibold text-theme-olive leading-snug">
                      {f.value}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Cost calculator */}
          <section className="mb-12">
            <CostCalculator />
          </section>

          {/* Contact */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-theme-olive mb-5">{c.getInTouch}</h2>
            <div className="space-y-3">
              <a href="mailto:aru.bhardwaj@insightrix.eu" className="flex items-center gap-3 text-gray-700 hover:text-theme-gold transition-colors">
                <Mail className="h-5 w-5 text-theme-gold" />
                aru.bhardwaj@insightrix.eu
              </a>
              <a href="tel:+33766985210" className="flex items-center gap-3 text-gray-700 hover:text-theme-gold transition-colors">
                <Phone className="h-5 w-5 text-theme-gold" />
                +33 (0) 766985210
              </a>
              <div className="flex items-center gap-3 text-gray-700">
                <MapPin className="h-5 w-5 text-theme-gold" />
                {c.paris}
              </div>
              <a href="https://www.linkedin.com/in/arub" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-700 hover:text-theme-gold transition-colors">
                <Linkedin className="h-5 w-5 text-theme-gold" />
                linkedin.com/in/arub
              </a>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-gradient-to-br from-theme-gold/15 to-theme-olive/10 rounded-xl p-8 md:p-10 text-center border-2 border-theme-gold/30 shadow-md">
            <h2 className="text-2xl md:text-3xl font-bold text-theme-olive mb-3">{c.readyHeading}</h2>
            <p className="text-gray-700 mb-6 max-w-xl mx-auto">{c.readyBody}</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <BookConsultationDialog>
                <Button className="bg-theme-gold hover:bg-theme-gold/90 text-white px-6 py-5 text-base">
                  {c.bookCta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </BookConsultationDialog>
              <Link to="/submit-project">
                <Button variant="outline" className="border-theme-olive text-theme-olive hover:bg-theme-olive hover:text-white px-6 py-5 text-base">
                  {c.submitCta}
                </Button>
              </Link>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;

import { useState, useMemo } from 'react';
import { Calculator, ArrowRight } from 'lucide-react';
import BookConsultationDialog from '@/components/BookConsultationDialog';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

type EngagementType = 'consultation' | 'mvp' | 'fractional-cto' | 'sovereign-ai';
type Stage = 'idea' | 'seed' | 'series-a' | 'scale-up';
type Cadence = 'light' | 'medium' | 'heavy';
type Lang = 'en' | 'it' | 'fr' | 'de';

const DAY_RATE = 700;

const fmt = (n: number) => `€${n.toLocaleString('en-US')}`;

const NOTES = {
  consultation: {
    en: 'Prepaid via Stripe. Includes a 24h written summary and 7 days of follow-up email Q&A.',
    it: 'Prepagata tramite Stripe. Include un riepilogo scritto entro 24 ore e 7 giorni di Q&A via email.',
    fr: 'Prépayé via Stripe. Inclut une synthèse écrite sous 24 h et 7 jours de Q&A par email.',
    de: 'Vorauszahlung via Stripe. Enthält eine schriftliche Zusammenfassung binnen 24 Std. und 7 Tage Follow-up-Q&A per E-Mail.'
  },
  consultationMath: {
    en: '30-min @ €45 or 60-min @ €90',
    it: '30 min a €45 o 60 min a €90',
    fr: '30 min à 45 € ou 60 min à 90 €',
    de: '30 Min. für €45 oder 60 Min. für €90'
  },
  // Fractional CTO notes by cadence
  ctoLight: {
    en: 'Advisory-only cadence: board prep, hiring support, monthly roadmap review. Minimum entry point.',
    it: 'Cadenza solo advisory: preparazione board, supporto assunzioni, review mensile della roadmap. Punto di ingresso minimo.',
    fr: 'Cadence purement conseil : préparation board, support recrutement, revue mensuelle de la feuille de route. Point d\'entrée minimum.',
    de: 'Nur beratende Kadenz: Board-Vorbereitung, Hiring-Support, monatliche Roadmap-Review. Mindesteinstieg.'
  },
  ctoMedium: {
    en: 'Active technical leadership: weekly engineering sync, architecture reviews, vendor decisions, investor calls.',
    it: 'Leadership tecnica attiva: sync settimanale, review di architettura, decisioni sui vendor, call con investitori.',
    fr: 'Leadership technique actif : sync hebdomadaire, revues d\'architecture, décisions fournisseurs, appels investisseurs.',
    de: 'Aktive technische Führung: wöchentlicher Sync, Architektur-Reviews, Vendor-Entscheidungen, Investor-Calls.'
  },
  ctoHeavy: {
    en: 'Embedded leadership: on Slack daily, delivery reviews, team 1:1s, pre-seed to Series B transition.',
    it: 'Leadership embedded: Slack ogni giorno, review di delivery, 1:1 con il team, transizione da pre-seed a Series B.',
    fr: 'Leadership intégré : Slack au quotidien, revues de livraison, 1:1 avec l\'équipe, transition pre-seed à Series B.',
    de: 'Eingebettete Führung: täglich auf Slack, Delivery-Reviews, Team-1:1s, Pre-Seed-bis-Series-B-Übergang.'
  },
  // MVP notes by stage
  mvpIdea: {
    en: 'Discovery sprint only — validate scope and stack before committing to a full build. Credited toward the MVP if you proceed.',
    it: 'Solo sprint di discovery — valida scope e stack prima di impegnarti nel build completo. Accreditato sull\'MVP se procedi.',
    fr: 'Sprint de découverte uniquement — valider le scope et la stack avant le build complet. Crédité sur le MVP si vous continuez.',
    de: 'Nur Discovery-Sprint — Umfang und Stack validieren, bevor Sie sich auf den vollen Build festlegen. Wird auf das MVP angerechnet.'
  },
  mvpSeed: {
    en: 'Fixed-scope MVP, 4-8 weeks. Production URL, auth, payments, core AI feature, CI/CD, monitoring, and handover docs.',
    it: 'MVP a scope fisso, 4-8 settimane. URL di produzione, autenticazione, pagamenti, feature AI core, CI/CD, monitoraggio e documentazione di handover.',
    fr: 'MVP à périmètre fixe, 4-8 semaines. URL de production, auth, paiements, fonctionnalité IA centrale, CI/CD, monitoring et docs de remise.',
    de: 'MVP mit festem Umfang, 4-8 Wochen. Produktions-URL, Auth, Zahlungen, zentrale KI-Funktion, CI/CD, Monitoring und Übergabedokumentation.'
  },
  mvpSeriesA: {
    en: 'Full MVP plus post-launch iteration, 6-10 weeks. Production-ready with proper observability and load testing.',
    it: 'MVP completo più iterazione post-launch, 6-10 settimane. Production-ready con observability adeguata e load testing.',
    fr: 'MVP complet plus itération post-launch, 6-10 semaines. Production-ready avec observability et load testing adéquats.',
    de: 'Komplettes MVP plus Nach-Launch-Iteration, 6-10 Wochen. Produktionsreif mit ordentlicher Observability und Lasttests.'
  },
  mvpScaleUp: {
    en: 'Enterprise-grade build with compliance baseline (GDPR, sector regulations), 10-16 weeks.',
    it: 'Build enterprise-grade con baseline di compliance (GDPR, regolamentazioni di settore), 10-16 settimane.',
    fr: 'Build de qualité entreprise avec socle de conformité (RGPD, régulations sectorielles), 10-16 semaines.',
    de: 'Enterprise-Grade-Build mit Compliance-Baseline (DSGVO, Branchenregulierung), 10-16 Wochen.'
  },
  // Sovereign AI notes by stage
  sovIdea: {
    en: 'Scoping sprint: regulatory classification, provider selection memo, architecture options.',
    it: 'Sprint di scoping: classificazione regolatoria, memo sulla selezione del provider, opzioni di architettura.',
    fr: 'Sprint de cadrage : classification réglementaire, mémo de sélection de fournisseur, options d\'architecture.',
    de: 'Scoping-Sprint: regulatorische Klassifizierung, Provider-Auswahl-Memo, Architekturoptionen.'
  },
  sovSeed: {
    en: 'OVHcloud or Scaleway inference stack + DPIA + basic compliance artefacts. 3-5 weeks.',
    it: 'Stack di inferenza OVHcloud o Scaleway + DPIA + artefatti di compliance di base. 3-5 settimane.',
    fr: 'Stack d\'inférence OVHcloud ou Scaleway + DPIA + artéfacts de conformité de base. 3-5 semaines.',
    de: 'OVHcloud- oder Scaleway-Inferenz-Stack + DSFA + grundlegende Compliance-Artefakte. 3-5 Wochen.'
  },
  sovSeriesA: {
    en: 'Full sovereign stack + DPIA + Transfer Impact Assessment + AI Act risk classification. 5-9 weeks.',
    it: 'Stack sovrano completo + DPIA + Transfer Impact Assessment + classificazione del rischio AI Act. 5-9 settimane.',
    fr: 'Stack souverain complet + DPIA + Transfer Impact Assessment + classification des risques AI Act. 5-9 semaines.',
    de: 'Vollständiger souveräner Stack + DSFA + Transfer Impact Assessment + AI-Act-Risikoklassifizierung. 5-9 Wochen.'
  },
  sovScaleUp: {
    en: 'Enterprise-grade with multi-region, audit trail, procurement-ready docs, and DPO handover. 9-14 weeks.',
    it: 'Enterprise-grade con multi-regione, audit trail, documenti procurement-ready e handover al DPO. 9-14 settimane.',
    fr: 'Niveau entreprise avec multi-région, piste d\'audit, documents prêts pour l\'achat, et transfert au DPO. 9-14 semaines.',
    de: 'Enterprise-Grade mit Multi-Region, Audit-Trail, Procurement-ready Docs und DPO-Übergabe. 9-14 Wochen.'
  }
} as const;

const CostCalculator = () => {
  const { language, translations } = useLanguage();
  const [engagement, setEngagement] = useState<EngagementType>('fractional-cto');
  const [stage, setStage] = useState<Stage>('seed');
  const [cadence, setCadence] = useState<Cadence>('medium');

  const lang = language as Lang;

  const result = useMemo(() => {
    switch (engagement) {
      case 'consultation':
        return {
          range: '€45 – €90',
          unit: translations.calcPerSession[language],
          math: NOTES.consultationMath[lang],
          note: NOTES.consultation[lang],
          cta: translations.calcCtaConsultation[language]
        };

      case 'fractional-cto': {
        const byCadence: Record<Cadence, { days: [number, number]; note: string }> = {
          light: { days: [2, 3], note: NOTES.ctoLight[lang] },
          medium: { days: [4, 5], note: NOTES.ctoMedium[lang] },
          heavy: { days: [8, 10], note: NOTES.ctoHeavy[lang] }
        };
        const opt = byCadence[cadence];
        return {
          range: `${fmt(opt.days[0] * DAY_RATE)} – ${fmt(opt.days[1] * DAY_RATE)}`,
          unit: translations.calcPerMonth[language],
          math: `${opt.days[0]}-${opt.days[1]} × €${DAY_RATE}/day`,
          note: opt.note,
          cta: translations.calcCtaEngagement[language]
        };
      }

      case 'mvp': {
        const byStage: Record<Stage, { days: [number, number]; note: string }> = {
          idea: { days: [4, 6], note: NOTES.mvpIdea[lang] },
          seed: { days: [22, 32], note: NOTES.mvpSeed[lang] },
          'series-a': { days: [34, 52], note: NOTES.mvpSeriesA[lang] },
          'scale-up': { days: [54, 82], note: NOTES.mvpScaleUp[lang] }
        };
        const opt = byStage[stage];
        const min = Math.round((opt.days[0] * DAY_RATE) / 500) * 500;
        const max = Math.round((opt.days[1] * DAY_RATE) / 500) * 500;
        return {
          range: `${fmt(min)} – ${fmt(max)}`,
          unit: translations.calcFixedScope[language],
          math: `${opt.days[0]}-${opt.days[1]} × €${DAY_RATE}/day`,
          note: opt.note,
          cta: translations.calcCtaBuild[language]
        };
      }

      case 'sovereign-ai': {
        const byStage: Record<Stage, { days: [number, number]; note: string }> = {
          idea: { days: [3, 5], note: NOTES.sovIdea[lang] },
          seed: { days: [20, 32], note: NOTES.sovSeed[lang] },
          'series-a': { days: [32, 58], note: NOTES.sovSeriesA[lang] },
          'scale-up': { days: [58, 92], note: NOTES.sovScaleUp[lang] }
        };
        const opt = byStage[stage];
        const min = Math.round((opt.days[0] * DAY_RATE) / 500) * 500;
        const max = Math.round((opt.days[1] * DAY_RATE) / 500) * 500;
        return {
          range: `${fmt(min)} – ${fmt(max)}`,
          unit: translations.calcOneTime[language],
          math: `${opt.days[0]}-${opt.days[1]} × €${DAY_RATE}/day`,
          note: opt.note,
          cta: translations.calcCtaCompliance[language]
        };
      }
    }
  }, [engagement, stage, cadence, language, translations, lang]);

  const showStage = engagement === 'mvp' || engagement === 'sovereign-ai';
  const showCadence = engagement === 'fractional-cto';

  return (
    <section className="bg-white rounded-2xl border border-theme-olive/15 shadow-sm p-6 md:p-8">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-11 h-11 rounded-lg bg-theme-gold/15 flex items-center justify-center shrink-0">
          <Calculator className="h-5 w-5 text-theme-gold" />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-theme-gold">{translations.calcKicker[language]}</p>
          <h2 className="text-xl font-bold text-theme-olive">{translations.calcTitle[language]}</h2>
        </div>
      </div>

      <p className="text-sm text-gray-600 mb-2">{translations.calcBasedOn[language]}</p>
      <p className="text-xs text-gray-500 mb-6">{translations.calcPartnershipNote[language]}</p>

      {/* Engagement type */}
      <div className="mb-5">
        <label className="block text-xs font-semibold uppercase tracking-wider text-theme-olive mb-2">
          {translations.calcEngagementType[language]}
        </label>
        <div className="grid grid-cols-2 gap-2">
          {[
            { id: 'consultation' as const, label: translations.calcConsultation[language] },
            { id: 'mvp' as const, label: translations.calcMvpBuild[language] },
            { id: 'fractional-cto' as const, label: translations.fractionalCtoService[language] },
            { id: 'sovereign-ai' as const, label: translations.sovereignAiService[language] }
          ].map((opt) => (
            <button
              key={opt.id}
              type="button"
              onClick={() => setEngagement(opt.id)}
              className={`px-3 py-2.5 text-sm rounded-lg font-medium transition-all ${
                engagement === opt.id
                  ? 'bg-theme-olive text-white border-2 border-theme-olive'
                  : 'bg-white text-theme-olive border-2 border-gray-200 hover:border-theme-olive'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Stage selector */}
      {showStage && (
        <div className="mb-5">
          <label className="block text-xs font-semibold uppercase tracking-wider text-theme-olive mb-2">
            {translations.calcCompanyStage[language]}
          </label>
          <div className="grid grid-cols-2 gap-2">
            {[
              { id: 'idea' as const, label: translations.calcStageIdea[language] },
              { id: 'seed' as const, label: translations.calcStageSeed[language] },
              { id: 'series-a' as const, label: translations.calcStageSeriesA[language] },
              { id: 'scale-up' as const, label: translations.calcStageScaleUp[language] }
            ].map((opt) => (
              <button
                key={opt.id}
                type="button"
                onClick={() => setStage(opt.id)}
                className={`px-3 py-2.5 text-sm rounded-lg font-medium transition-all ${
                  stage === opt.id
                    ? 'bg-theme-gold text-white border-2 border-theme-gold'
                    : 'bg-white text-theme-olive border-2 border-gray-200 hover:border-theme-gold'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Cadence selector */}
      {showCadence && (
        <div className="mb-5">
          <label className="block text-xs font-semibold uppercase tracking-wider text-theme-olive mb-2">
            {translations.calcCadence[language]}
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {[
              { id: 'light' as const, label: translations.calcLight[language], sub: translations.calcLightSub[language] },
              { id: 'medium' as const, label: translations.calcMedium[language], sub: translations.calcMediumSub[language] },
              { id: 'heavy' as const, label: translations.calcHeavy[language], sub: translations.calcHeavySub[language] }
            ].map((opt) => (
              <button
                key={opt.id}
                type="button"
                onClick={() => setCadence(opt.id)}
                className={`px-3 py-2.5 rounded-lg font-medium transition-all text-center ${
                  cadence === opt.id
                    ? 'bg-theme-gold text-white border-2 border-theme-gold'
                    : 'bg-white text-theme-olive border-2 border-gray-200 hover:border-theme-gold'
                }`}
              >
                <span className="block text-sm font-semibold">{opt.label}</span>
                <span className={`block text-[11px] ${cadence === opt.id ? 'opacity-90' : 'text-gray-500'}`}>{opt.sub}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Result */}
      <div className="bg-gradient-to-br from-theme-gold/15 to-theme-olive/5 rounded-xl p-5 border-2 border-theme-gold/30">
        <p className="text-xs font-semibold uppercase tracking-wider text-theme-olive mb-1">{translations.calcEstimatedRange[language]}</p>
        <p className="text-3xl md:text-4xl font-extrabold text-theme-olive mb-1 leading-tight">
          {result.range}
          <span className="text-sm font-medium text-gray-600 ml-2">{result.unit}</span>
        </p>
        <p className="text-xs font-mono text-theme-olive/70 mb-3">{result.math}</p>
        <p className="text-sm text-gray-700 mb-1">{result.note}</p>
        <p className="text-xs text-gray-500 mb-4">{translations.calcVatExcluded[language]}</p>

        <BookConsultationDialog>
          <Button className="bg-theme-olive hover:bg-theme-olive/90 text-white w-full md:w-auto px-5 py-2.5">
            {result.cta}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </BookConsultationDialog>
      </div>
    </section>
  );
};

export default CostCalculator;

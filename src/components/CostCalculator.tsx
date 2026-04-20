import { useState, useMemo } from 'react';
import { Calculator, ArrowRight } from 'lucide-react';
import BookConsultationDialog from '@/components/BookConsultationDialog';
import { Button } from '@/components/ui/button';

type EngagementType = 'consultation' | 'mvp' | 'fractional-cto' | 'sovereign-ai';
type Stage = 'idea' | 'seed' | 'series-a' | 'scale-up';
type Cadence = 'light' | 'medium' | 'heavy';

const DAY_RATE = 700; // €/day base for all day-based calculations

const fmt = (n: number) => `€${n.toLocaleString('en-US')}`;

const CostCalculator = () => {
  const [engagement, setEngagement] = useState<EngagementType>('fractional-cto');
  const [stage, setStage] = useState<Stage>('seed');
  const [cadence, setCadence] = useState<Cadence>('medium');

  const result = useMemo(() => {
    switch (engagement) {
      case 'consultation':
        return {
          range: '€45 – €90',
          unit: 'per session',
          math: '30-min @ €45 or 60-min @ €90',
          note: 'Prepaid via Stripe. Includes a 24h written summary and 7 days of follow-up email Q&A.',
          cta: 'Book a Consultation'
        };

      case 'fractional-cto': {
        const byCadence: Record<Cadence, { days: [number, number]; label: string; note: string }> = {
          light: {
            days: [2, 3],
            label: 'Light · 2-3 days/month',
            note: 'Advisory-only cadence: board prep, hiring support, monthly roadmap review. Minimum entry point.'
          },
          medium: {
            days: [4, 5],
            label: 'Medium · ~1 day/week',
            note: 'Active technical leadership: weekly engineering sync, architecture reviews, vendor decisions, investor calls.'
          },
          heavy: {
            days: [8, 10],
            label: 'Heavy · ~2 days/week',
            note: 'Embedded leadership: on Slack daily, delivery reviews, team 1:1s, pre-seed to Series B transition.'
          }
        };
        const opt = byCadence[cadence];
        const min = opt.days[0] * DAY_RATE;
        const max = opt.days[1] * DAY_RATE;
        return {
          range: `${fmt(min)} – ${fmt(max)}`,
          unit: 'per month',
          math: `${opt.days[0]}-${opt.days[1]} days × €${DAY_RATE}/day`,
          note: opt.note,
          cta: 'Discuss the Engagement'
        };
      }

      case 'mvp': {
        const byStage: Record<Stage, { days: [number, number]; note: string }> = {
          idea: { days: [4, 6], note: 'Discovery sprint only — validate scope and stack before committing to a full build. Credited toward the MVP if you proceed.' },
          seed: { days: [22, 32], note: 'Fixed-scope MVP, 4-8 weeks. Production URL, auth, payments, core AI feature, CI/CD, monitoring, and handover docs.' },
          'series-a': { days: [34, 52], note: 'Full MVP plus post-launch iteration, 6-10 weeks. Production-ready with proper observability and load testing.' },
          'scale-up': { days: [54, 82], note: 'Enterprise-grade build with compliance baseline (GDPR, sector regulations), 10-16 weeks.' }
        };
        const opt = byStage[stage];
        const min = Math.round((opt.days[0] * DAY_RATE) / 500) * 500;
        const max = Math.round((opt.days[1] * DAY_RATE) / 500) * 500;
        return {
          range: `${fmt(min)} – ${fmt(max)}`,
          unit: 'fixed scope',
          math: `${opt.days[0]}-${opt.days[1]} days × €${DAY_RATE}/day (fixed-price, 50% upfront)`,
          note: opt.note,
          cta: 'Discuss the Build'
        };
      }

      case 'sovereign-ai': {
        const byStage: Record<Stage, { days: [number, number]; note: string }> = {
          idea: { days: [3, 5], note: 'Scoping sprint: regulatory classification, provider selection memo, architecture options.' },
          seed: { days: [20, 32], note: 'OVHcloud or Scaleway inference stack + DPIA + basic compliance artefacts. 3-5 weeks.' },
          'series-a': { days: [32, 58], note: 'Full sovereign stack + DPIA + Transfer Impact Assessment + AI Act risk classification. 5-9 weeks.' },
          'scale-up': { days: [58, 92], note: 'Enterprise-grade with multi-region, audit trail, procurement-ready docs, and DPO handover. 9-14 weeks.' }
        };
        const opt = byStage[stage];
        const min = Math.round((opt.days[0] * DAY_RATE) / 500) * 500;
        const max = Math.round((opt.days[1] * DAY_RATE) / 500) * 500;
        return {
          range: `${fmt(min)} – ${fmt(max)}`,
          unit: 'one-time project',
          math: `${opt.days[0]}-${opt.days[1]} days × €${DAY_RATE}/day`,
          note: opt.note,
          cta: 'Discuss Your Compliance'
        };
      }
    }
  }, [engagement, stage, cadence]);

  const showStage = engagement === 'mvp' || engagement === 'sovereign-ai';
  const showCadence = engagement === 'fractional-cto';

  return (
    <section className="bg-white rounded-2xl border border-theme-olive/15 shadow-sm p-6 md:p-8">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-11 h-11 rounded-lg bg-theme-gold/15 flex items-center justify-center shrink-0">
          <Calculator className="h-5 w-5 text-theme-gold" />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-theme-gold">Quick estimator</p>
          <h2 className="text-xl font-bold text-theme-olive">What might your engagement cost?</h2>
        </div>
      </div>

      <p className="text-sm text-gray-600 mb-2">
        Indicative ranges based on a <strong>€{DAY_RATE}/day</strong> base rate. Final pricing depends on scope, compliance depth, and timeline — confirmed in the Project Proposal after a discovery call.
      </p>
      <p className="text-xs text-gray-500 mb-6">
        Partnership deals (reduced cash + equity or success bonus) can cut the cash component by 40-60% for aligned early-stage startups. A service fee is always required.
      </p>

      {/* Engagement type */}
      <div className="mb-5">
        <label className="block text-xs font-semibold uppercase tracking-wider text-theme-olive mb-2">
          Engagement type
        </label>
        <div className="grid grid-cols-2 gap-2">
          {[
            { id: 'consultation' as const, label: 'Consultation' },
            { id: 'mvp' as const, label: 'MVP Build' },
            { id: 'fractional-cto' as const, label: 'Fractional CTO' },
            { id: 'sovereign-ai' as const, label: 'Sovereign AI' }
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
            Company stage
          </label>
          <div className="grid grid-cols-2 gap-2">
            {[
              { id: 'idea' as const, label: 'Idea / Pre-seed' },
              { id: 'seed' as const, label: 'Seed' },
              { id: 'series-a' as const, label: 'Series A' },
              { id: 'scale-up' as const, label: 'Scale-up' }
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
            Cadence
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {[
              { id: 'light' as const, label: 'Light', sub: '2-3 days/month' },
              { id: 'medium' as const, label: 'Medium', sub: '~1 day/week' },
              { id: 'heavy' as const, label: 'Heavy', sub: '~2 days/week' }
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
        <p className="text-xs font-semibold uppercase tracking-wider text-theme-olive mb-1">Estimated range</p>
        <p className="text-3xl md:text-4xl font-extrabold text-theme-olive mb-1 leading-tight">
          {result.range}
          <span className="text-sm font-medium text-gray-600 ml-2">{result.unit}</span>
        </p>
        <p className="text-xs font-mono text-theme-olive/70 mb-3">{result.math}</p>
        <p className="text-sm text-gray-700 mb-1">{result.note}</p>
        <p className="text-xs text-gray-500 mb-4">All prices exclude VAT.</p>

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

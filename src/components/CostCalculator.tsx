import { useState, useMemo } from 'react';
import { Calculator, ArrowRight } from 'lucide-react';
import BookConsultationDialog from '@/components/BookConsultationDialog';
import { Button } from '@/components/ui/button';

type EngagementType = 'consultation' | 'mvp' | 'fractional-cto' | 'sovereign-ai';
type Stage = 'idea' | 'seed' | 'series-a' | 'scale-up';
type Cadence = 'light' | 'medium' | 'heavy';

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
          note: '30-min (€45) or 60-min (€90). Prepaid via Stripe.',
          cta: 'Book a Consultation'
        };
      case 'mvp': {
        const byStage: Record<Stage, { range: string; note: string }> = {
          idea: { range: '€2,500 – €5,000', note: 'Discovery sprint only — validate scope before full build.' },
          seed: { range: '€18,000 – €28,000', note: 'Fixed-scope MVP, 4-8 weeks.' },
          'series-a': { range: '€28,000 – €45,000', note: 'Full MVP + post-launch iteration, 6-10 weeks.' },
          'scale-up': { range: '€40,000 – €75,000', note: 'Production-grade build with compliance baseline.' }
        };
        return { ...byStage[stage], unit: 'fixed scope', cta: 'Discuss the Build' };
      }
      case 'fractional-cto': {
        const byCadence: Record<Cadence, { range: string; note: string }> = {
          light: { range: '€2,100 – €3,000', note: '2-3 days/month — advisory, board prep, hiring support.' },
          medium: { range: '€4,500 – €7,000', note: '~1 day/week — active technical leadership.' },
          heavy: { range: '€8,000 – €12,000', note: '2 days/week — embedded leadership, intensive delivery.' }
        };
        return { ...byCadence[cadence], unit: 'per month', cta: 'Discuss the Engagement' };
      }
      case 'sovereign-ai': {
        const byStage: Record<Stage, { range: string; note: string }> = {
          idea: { range: '€2,500 – €5,000', note: 'Scoping sprint: regulatory assessment, provider selection memo.' },
          seed: { range: '€15,000 – €25,000', note: 'OVHcloud or Scaleway inference stack + basic compliance artefacts.' },
          'series-a': { range: '€25,000 – €45,000', note: 'Full sovereign stack + DPIA + TIA + AI Act risk classification.' },
          'scale-up': { range: '€45,000 – €80,000', note: 'Enterprise-grade with multi-region, audit trail, and procurement-ready docs.' }
        };
        return { ...byStage[stage], unit: 'one-time project', cta: 'Discuss Your Compliance' };
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

      <p className="text-sm text-gray-600 mb-6">
        Indicative ranges only. Final pricing depends on scope, compliance depth, and timeline — confirmed in the Project Proposal after a discovery call.
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
          <div className="grid grid-cols-3 gap-2">
            {[
              { id: 'light' as const, label: 'Light · 2-3d/mo' },
              { id: 'medium' as const, label: 'Medium · 1d/wk' },
              { id: 'heavy' as const, label: 'Heavy · 2d/wk' }
            ].map((opt) => (
              <button
                key={opt.id}
                type="button"
                onClick={() => setCadence(opt.id)}
                className={`px-2 py-2.5 text-xs rounded-lg font-medium transition-all ${
                  cadence === opt.id
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

      {/* Result */}
      <div className="bg-gradient-to-br from-theme-gold/15 to-theme-olive/5 rounded-xl p-5 border-2 border-theme-gold/30">
        <p className="text-xs font-semibold uppercase tracking-wider text-theme-olive mb-1">Estimated range</p>
        <p className="text-3xl md:text-4xl font-extrabold text-theme-olive mb-1">
          {result.range}
          <span className="text-sm font-medium text-gray-600 ml-2">{result.unit}</span>
        </p>
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

import ServicePageLayout from '@/components/layout/ServicePageLayout';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://arubhardwaj.eu/services/fractional-cto#service',
  name: 'Fractional CTO Services',
  serviceType: 'Fractional CTO',
  provider: {
    '@type': 'Person',
    '@id': 'https://arubhardwaj.eu/#person',
    name: 'Aru Bhardwaj'
  },
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

const FractionalCtoPage = () => (
  <ServicePageLayout
    slug="fractional-cto"
    title="Fractional CTO Services | Paris-based, EU-focused | Aru Bhardwaj"
    h1="Fractional CTO for Startups &amp; Scale-Ups"
    tagline="Senior technical leadership, 2-3 days per month. Paris-based, same time zone as your European team, fluent in GDPR, RGPD, the EU AI Act, and sovereign cloud."
    description="Hire a Fractional CTO in Paris and across Europe. Technical roadmap, architecture, hiring, and AI strategy — without the cost of a full-time executive. Startups and scale-ups from seed to Series B."
    jsonLd={jsonLd}
    whoItsFor={[
      'Non-technical founders building an AI-first or tech-heavy product',
      'Seed to Series B startups that need senior tech leadership but can\'t yet justify a full-time CTO',
      'Scale-ups under 100 people where the founding engineer has outgrown the role',
      'Companies preparing for fundraising, due diligence, or an acquisition',
      'European teams that need GDPR/RGPD, EU AI Act, and sovereign-cloud expertise on the leadership side'
    ]}
    whatsIncluded={[
      'Technical roadmap: 3-6-12 month plan aligned with funding and product milestones',
      'Architecture decisions and reviews (code, infra, data, AI stack)',
      'Engineering hiring: job specs, interviews, reference checks, offer negotiations',
      'Team leadership: 1:1s with senior engineers, sprint cadence, delivery reviews',
      'AI strategy: build vs buy, model selection, vendor contracts, cost forecasting',
      'Regulatory advisory: EU AI Act readiness, GDPR/RGPD, NIS2, DORA, sector-specific (HDS, ACPR, BaFin)',
      'Investor/board support: technical due diligence prep, board-pack narratives, investor calls',
      'Vendor and partnership evaluation (cloud, SaaS, model providers, consulting firms)'
    ]}
    process={[
      { step: 'Discovery week', detail: 'A 3-5 day paid discovery sprint to map your stack, team, risks, and priorities. Outputs: a written technical assessment and a proposed engagement scope.' },
      { step: 'Engagement start', detail: 'Typically within 1-2 weeks of signing. Shared Slack, weekly syncs, async updates, and a running decision log.' },
      { step: 'Ongoing cadence', detail: '2-3 days per month minimum, scaling up based on traction. Monthly retainer, invoiced at the start of each month.' },
      { step: 'Quarterly reviews', detail: 'Every 90 days, a written review of progress against the roadmap, budget burn, team health, and risks. Course-correct explicitly.' },
      { step: 'Handover', detail: 'When a full-time CTO is ready, clean handover with a written runbook, architecture diagrams, and intro to key vendors/partners.' }
    ]}
    outcomes={[
      'A technical roadmap your board can understand',
      'A hiring pipeline for the next 2-3 engineers',
      'A reduced vendor bill (typically 15-30% on cloud/SaaS)',
      'Investor-ready technical diligence materials',
      'EU AI Act and GDPR compliance posture reviewed',
      'A clear answer to "build vs buy" for each AI component',
      'Fewer production incidents through better architecture reviews',
      'A cleaner handover when a full-time CTO joins'
    ]}
    pricing={[
      { label: 'Monthly retainer (minimum 2-3 days)', price: 'from €2,100/month', note: 'Scales with traction. Invoiced monthly, due within 7 days.' },
      { label: 'Partnership (reduced fee + equity)', price: 'Custom', note: 'For aligned early-stage startups. Service fee always required.' }
    ]}
    faqs={[
      { q: 'What\'s the minimum engagement?', a: '2-3 days per month for a 3-month trial period, with option to extend. For urgent technical crises, one-off sprint engagements (1-2 weeks) are also possible.' },
      { q: 'Can you replace our founding CTO?', a: 'No — a Fractional CTO is a complement, not a full-time replacement. The role is best suited to startups that don\'t yet have (or have outgrown) a founding engineer, or to scale-ups where the CTO needs senior advisory support.' },
      { q: 'Do you take equity?', a: 'Only as part of a Partnership engagement — reduced cash fee combined with equity or a success bonus. Pure-equity arrangements are not offered. A service fee is always required.' },
      { q: 'How is this different from consulting?', a: 'Fractional CTO work is embedded leadership — I\'m accountable for outcomes, attend your leadership meetings, and represent your company externally (investors, partners, key hires). Consulting is typically scoped advisory without accountability.' },
      { q: 'Can you work alongside our full-time VP of Engineering?', a: 'Yes — this is a common setup in scale-ups. The VP runs day-to-day execution; I provide technical strategy, senior advisory, investor-facing support, and coaching.' },
      { q: 'Remote or on-site?', a: 'Remote-first with on-site days in Paris and short on-site sprints across Europe. Most engagements run 100% remote with weekly syncs and async daily updates.' }
    ]}
  />
);

export default FractionalCtoPage;

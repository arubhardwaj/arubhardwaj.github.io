import ServicePageLayout from '@/components/layout/ServicePageLayout';

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

const MvpBuilderPage = () => (
  <ServicePageLayout
    slug="mvp-builder"
    title="AI-Powered MVP Development | 4-8 Week Builds | Aru Bhardwaj"
    h1="AI-Powered MVPs, Shipped in 4-8 Weeks"
    tagline="End-to-end MVP builds for founders: architecture, AI integration, frontend, backend, deployment. Modern stack with ChatGPT, Claude, Mistral, or custom LLMs baked in from day one."
    description="AI MVP builder in Paris and Europe. Idea-to-production in 4-8 weeks for startups and scale-ups. React/Next.js, Python, Node.js, LLM integration (OpenAI, Anthropic, Mistral), sovereign-cloud deployment."
    jsonLd={jsonLd}
    whoItsFor={[
      'Non-technical founders with a validated idea who need a production MVP fast',
      'Teams that raised pre-seed or seed and need to ship before the next milestone',
      'Corporate innovation teams building an AI-first product outside the mothership',
      'Agencies that need a senior engineer for a fixed-scope MVP without the agency overhead',
      'Founders migrating from no-code (Bubble, Webflow) to a real product'
    ]}
    whatsIncluded={[
      'Architecture design: stack selection, infrastructure sketch, data model',
      'Full-stack build: frontend (React/Next.js), backend (Node.js/Python/FastAPI), database (Postgres/Redis)',
      'AI integration: LLM selection, RAG pipelines, agents, prompt engineering, cost modelling',
      'Cloud deployment: Vercel, AWS, OVHcloud, Scaleway — whichever fits the regulatory profile',
      'Auth, payments (Stripe), basic analytics, transactional email',
      'CI/CD pipeline and production-ready observability baseline',
      'Written handover documentation: architecture diagrams, runbook, onboarding guide',
      'One month of post-launch support included — bug fixes and minor tweaks'
    ]}
    process={[
      { step: 'Discovery sprint (3-5 days)', detail: 'Paid discovery to map the product, scope the MVP ruthlessly, decide the stack, and produce a fixed-scope proposal with timeline and price.' },
      { step: 'Week 1-2: foundations', detail: 'Repo, auth, database schema, core CRUD, basic UI shell, CI/CD, staging environment. Daily async updates.' },
      { step: 'Week 3-5: core build', detail: 'AI features, main workflows, integrations. Weekly demos on staging for feedback.' },
      { step: 'Week 6-7: polish & launch', detail: 'UX polish, performance, error handling, monitoring, copy pass. Production deployment.' },
      { step: 'Week 8: handover', detail: 'Documentation, architecture walkthrough, 1:1 with any future engineer. One month of post-launch support included.' }
    ]}
    outcomes={[
      'A production URL your users can hit on day 1 of week 5-8',
      'Code you (or your next engineer) can own, not a black box',
      'A cost model for the next 6-12 months of infra + AI spend',
      'Enough usage data to validate the core hypothesis',
      'A credible technical story for the next funding round',
      'Written architecture docs and runbooks',
      'A clean handover if you bring on a full-time engineer later',
      'AI features designed with cost, latency, and quality guardrails in place'
    ]}
    pricing={[
      { label: 'Discovery sprint (3-5 days)', price: 'from €2,500', note: 'Fixed-price. Credited toward the MVP if you proceed.' },
      { label: 'Fixed-scope MVP (4-8 weeks)', price: 'from €18,000', note: '50% upfront, 50% on launch. Scoped in the Proposal.' }
    ]}
    faqs={[
      { q: 'Will I actually get something shipped in 4-8 weeks?', a: 'Yes, if the scope is right-sized. The discovery sprint exists specifically to cut the MVP down to what can genuinely ship in that window. If your idea needs 12+ weeks, we scope Phase 1 for 4-8 weeks and Phase 2 separately.' },
      { q: 'Who owns the code?', a: 'You do, on full payment. The code is in your GitHub/GitLab org from day one. Pre-existing tools and internal libraries I use to move fast remain my property (licensed perpetually to you as part of the deliverable).' },
      { q: 'What if requirements change mid-build?', a: 'Small tweaks are normal and included. Structural changes (new major features, stack changes) trigger a Change Request with an addendum to the proposal.' },
      { q: 'Do you work with designers?', a: 'I bring a clean default design system (Tailwind + shadcn/ui). For brand-critical UIs I partner with designers you or I bring in. The MVP scope accounts for this.' },
      { q: 'Can you build on my existing codebase?', a: 'Possible for discrete features. For full MVPs, greenfield is faster and cheaper — most MVPs I inherit have accumulated decisions that fight the build.' },
      { q: 'Do you take equity?', a: 'Only in a Partnership engagement — reduced fixed fee combined with equity or a success bonus. Pure-equity is not offered. A cash service fee is always required.' }
    ]}
  />
);

export default MvpBuilderPage;

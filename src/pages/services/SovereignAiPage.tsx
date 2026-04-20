import ServicePageLayout from '@/components/layout/ServicePageLayout';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://arubhardwaj.eu/services/sovereign-ai#service',
  name: 'EU Sovereign AI & GDPR-Compliant LLM Deployment',
  serviceType: 'Sovereign AI Deployment',
  provider: { '@type': 'Person', '@id': 'https://arubhardwaj.eu/#person', name: 'Aru Bhardwaj' },
  audience: { '@type': 'Audience', audienceType: 'European enterprises in regulated industries' },
  description: 'GDPR-compliant, EU-sovereign AI infrastructure. Private and self-hosted LLM deployment on OVHcloud, Scaleway, Hetzner, and Mistral AI. No CLOUD Act exposure, full EU data residency.',
  url: 'https://arubhardwaj.eu/services/sovereign-ai',
  dateModified: '2026-04-21'
};

const SovereignAiPage = () => (
  <ServicePageLayout
    slug="sovereign-ai"
    title="EU Sovereign AI &amp; GDPR-Compliant LLM Deployment | Aru Bhardwaj"
    h1="Sovereign AI &amp; GDPR-Compliant LLM Infrastructure"
    tagline="Private, self-hosted, and EU-sovereign LLM deployment. OVHcloud, Scaleway, Hetzner, Mistral AI. Full EU data residency, no CLOUD Act exposure, audit-ready for regulated industries."
    description="EU sovereign AI consulting and deployment. GDPR/RGPD-compliant LLM infrastructure on OVHcloud, Scaleway, Hetzner, and Mistral AI. For banks, insurers, healthcare, legal, and public sector in France, Germany, Switzerland, Italy."
    jsonLd={jsonLd}
    whoItsFor={[
      'Banks, insurers, and fintechs regulated by ACPR, BaFin, FINMA, CONSOB, or DNB',
      'Healthcare organisations needing HDS-compliant AI (France) or KHZG-aligned deployments (Germany)',
      'Law firms and legaltechs with attorney-client privilege concerns',
      'Public sector and defence contractors where CLOUD Act exposure is disqualifying',
      'Scale-ups preparing for EU AI Act high-risk system obligations',
      'Any European enterprise whose DPO or Compliance officer has blocked US-hosted AI APIs'
    ]}
    whatsIncluded={[
      'Provider selection: OVHcloud (AI Endpoints, AI Deploy, AI Training, AI Notebooks, HDS) vs Scaleway (Generative APIs, Inference, H100 clusters) vs Hetzner (cost-optimised GPU) vs on-prem',
      'Model selection: Mistral Large / Codestral / Pixtral, Aleph Alpha Luminous, self-hosted Llama 3, Mixtral, Qwen, DeepSeek, fine-tuned SLMs',
      'Inference stack: vLLM, TGI, Ollama — load-balanced, observable, token-metered',
      'Retrieval architecture: Qdrant, Weaviate, pgvector, Milvus; hybrid search; reranking',
      'Orchestration: LangChain, LangGraph, LlamaIndex, DSPy; eval harness and guardrails',
      'Compliance deliverables: DPIA, Transfer Impact Assessment, Article 28 DPA template, AI Act risk classification, ISO/IEC 42001 alignment',
      'Cost modelling: token economics, GPU hour forecasting, cache-hit optimisation',
      'Observability: Langfuse, OpenTelemetry, Helicone — full audit trail of every inference'
    ]}
    process={[
      { step: 'Regulatory scoping', detail: 'Identify the applicable regulations (GDPR, EU AI Act, NIS2, DORA, sector-specific) and the compliance posture required: data residency, retention, audit, explainability, human oversight.' },
      { step: 'Architecture design', detail: 'Provider and model selection, network topology (VPC, private endpoints, zero egress to non-EU), secret management, audit logging.' },
      { step: 'Build & integrate', detail: 'Stand up the inference stack, orchestration, retrieval, and guardrails. Integrate with the client application and existing IAM/SSO.' },
      { step: 'Compliance artefacts', detail: 'Write the DPIA, DPA, TIA, AI Act risk classification memo, and operational runbook. Handoff to the DPO / CISO.' },
      { step: 'Operate or transfer', detail: 'Either operate the stack on retainer, or fully transfer to the internal team with training and a runbook.' }
    ]}
    outcomes={[
      'LLM stack with zero prompt/response egress to non-EU jurisdictions',
      'DPIA and TIA documents your DPO can sign off on',
      'AI Act risk classification with defensible reasoning',
      'Audit trail covering every inference request (who, what, when, model version)',
      'Provider cost projections for 12 and 24 months',
      'Inference latency and availability SLO baselines',
      'A migration path away from US-hosted APIs if that becomes mandated',
      'A compliance story your enterprise customers will accept in procurement'
    ]}
    pricing={[
      { label: 'Discovery sprint (3-5 days)', price: 'from €2,500', note: 'Regulatory scoping + architecture options memo.' },
      { label: 'Full deployment', price: 'from €25,000', note: 'Depends on scale and compliance depth. Typically 3-6 weeks end-to-end.' },
      { label: 'Ongoing retainer', price: 'from €2,100/month', note: 'Monitor, adjust, and keep compliance artefacts current.' }
    ]}
    faqs={[
      { q: 'Is it really possible to run GPT-4-level quality on EU infrastructure?', a: 'Yes, in most use cases. Mistral Large and Claude Sonnet via Bedrock EU, combined with Llama-3 or Mixtral fine-tuned on your domain, covers 85%+ of use cases with competitive quality. Gaps are narrowing monthly.' },
      { q: 'What about the CLOUD Act if I use Bedrock EU?', a: 'Bedrock EU reduces but does not eliminate CLOUD Act exposure because AWS is a US-owned entity. For zero-exposure needs (defence, some public sector) the answer is OVHcloud, Scaleway, or on-prem — all EU-headquartered, EU-owned.' },
      { q: 'Will this be slower than OpenAI/Anthropic APIs?', a: 'For self-hosted Llama/Mixtral on Scaleway H100s: 50-200ms TTFT at similar token throughput. For Mistral hosted APIs: parity. For OVHcloud AI Endpoints: 100-300ms TTFT depending on model. Latency is rarely the bottleneck; auditability is.' },
      { q: 'Can you guarantee EU AI Act compliance?', a: 'No consultant can "guarantee" compliance with a law that\'s still rolling out. What I deliver is a defensible compliance posture: risk classification, documented controls, DPIA, monitoring, and audit trail. Sign-off rests with your DPO and legal team.' },
      { q: 'Do you work with our existing DPO and CISO?', a: 'Yes — the compliance artefacts are written specifically for them. I can also participate in cross-functional reviews and respond to their security/privacy questionnaires directly.' },
      { q: 'What happens if a model gets deprecated?', a: 'The architecture is model-agnostic. Swapping Mistral-Large for Mixtral or Llama-4 typically takes 1-3 days of work plus an eval re-run. Observability and cost models follow the change automatically.' }
    ]}
  />
);

export default SovereignAiPage;

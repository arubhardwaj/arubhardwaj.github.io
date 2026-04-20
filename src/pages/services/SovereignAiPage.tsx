import ServicePageLayout from '@/components/layout/ServicePageLayout';
import { useLanguage } from '@/contexts/LanguageContext';

type Lang = 'en' | 'it' | 'fr' | 'de';

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

const CONTENT = {
  en: {
    title: 'EU Sovereign AI & GDPR-Compliant LLM Deployment | Aru Bhardwaj',
    h1: 'Sovereign AI & GDPR-Compliant LLM Infrastructure',
    tagline: 'Private, self-hosted, and EU-sovereign LLM deployment. OVHcloud, Scaleway, Hetzner, Mistral AI. Full EU data residency, no CLOUD Act exposure, audit-ready for regulated industries.',
    description: 'EU sovereign AI consulting and deployment. GDPR/RGPD-compliant LLM infrastructure on OVHcloud, Scaleway, Hetzner, and Mistral AI. For banks, insurers, healthcare, legal, and public sector in France, Germany, Switzerland, Italy.',
    whoItsFor: [
      'Banks, insurers, and fintechs regulated by ACPR, BaFin, FINMA, CONSOB, or DNB',
      'Healthcare organisations needing HDS-compliant AI (France) or KHZG-aligned deployments (Germany)',
      'Law firms and legaltechs with attorney-client privilege concerns',
      'Public sector and defence contractors where CLOUD Act exposure is disqualifying',
      'Scale-ups preparing for EU AI Act high-risk system obligations',
      "Any European enterprise whose DPO or Compliance officer has blocked US-hosted AI APIs"
    ],
    whatsIncluded: [
      'Provider selection: OVHcloud (AI Endpoints, AI Deploy, AI Training, AI Notebooks, HDS) vs Scaleway (Generative APIs, Inference, H100 clusters) vs Hetzner (cost-optimised GPU) vs on-prem',
      'Model selection: Mistral Large / Codestral / Pixtral, Aleph Alpha Luminous, self-hosted Llama 3, Mixtral, Qwen, DeepSeek, fine-tuned SLMs',
      'Inference stack: vLLM, TGI, Ollama — load-balanced, observable, token-metered',
      'Retrieval architecture: Qdrant, Weaviate, pgvector, Milvus; hybrid search; reranking',
      'Orchestration: LangChain, LangGraph, LlamaIndex, DSPy; eval harness and guardrails',
      'Compliance deliverables: DPIA, Transfer Impact Assessment, Article 28 DPA template, AI Act risk classification, ISO/IEC 42001 alignment',
      'Cost modelling: token economics, GPU hour forecasting, cache-hit optimisation',
      'Observability: Langfuse, OpenTelemetry, Helicone — full audit trail of every inference'
    ],
    process: [
      { step: 'Regulatory scoping', detail: 'Identify the applicable regulations (GDPR, EU AI Act, NIS2, DORA, sector-specific) and the compliance posture required: data residency, retention, audit, explainability, human oversight.' },
      { step: 'Architecture design', detail: 'Provider and model selection, network topology (VPC, private endpoints, zero egress to non-EU), secret management, audit logging.' },
      { step: 'Build & integrate', detail: 'Stand up the inference stack, orchestration, retrieval, and guardrails. Integrate with the client application and existing IAM/SSO.' },
      { step: 'Compliance artefacts', detail: 'Write the DPIA, DPA, TIA, AI Act risk classification memo, and operational runbook. Handoff to the DPO / CISO.' },
      { step: 'Operate or transfer', detail: 'Either operate the stack on retainer, or fully transfer to the internal team with training and a runbook.' }
    ],
    outcomes: [
      'LLM stack with zero prompt/response egress to non-EU jurisdictions',
      'DPIA and TIA documents your DPO can sign off on',
      'AI Act risk classification with defensible reasoning',
      'Audit trail covering every inference request (who, what, when, model version)',
      'Provider cost projections for 12 and 24 months',
      'Inference latency and availability SLO baselines',
      'A migration path away from US-hosted APIs if that becomes mandated',
      'A compliance story your enterprise customers will accept in procurement'
    ],
    pricing: [
      { label: 'Discovery sprint (3-5 days)', price: 'from €2,500', note: 'Regulatory scoping + architecture options memo.' },
      { label: 'Full deployment', price: 'from €25,000', note: 'Depends on scale and compliance depth. Typically 3-6 weeks end-to-end.' },
      { label: 'Ongoing retainer', price: 'from €2,100/month', note: 'Monitor, adjust, and keep compliance artefacts current.' }
    ],
    faqs: [
      { q: 'Is it really possible to run GPT-4-level quality on EU infrastructure?', a: 'Yes, in most use cases. Mistral Large and Claude Sonnet via Bedrock EU, combined with Llama-3 or Mixtral fine-tuned on your domain, covers 85%+ of use cases with competitive quality. Gaps are narrowing monthly.' },
      { q: 'What about the CLOUD Act if I use Bedrock EU?', a: 'Bedrock EU reduces but does not eliminate CLOUD Act exposure because AWS is a US-owned entity. For zero-exposure needs (defence, some public sector) the answer is OVHcloud, Scaleway, or on-prem — all EU-headquartered, EU-owned.' },
      { q: 'Will this be slower than OpenAI/Anthropic APIs?', a: 'For self-hosted Llama/Mixtral on Scaleway H100s: 50-200ms TTFT at similar token throughput. For Mistral hosted APIs: parity. For OVHcloud AI Endpoints: 100-300ms TTFT depending on model. Latency is rarely the bottleneck; auditability is.' },
      { q: 'Can you guarantee EU AI Act compliance?', a: 'No consultant can "guarantee" compliance with a law that\'s still rolling out. What I deliver is a defensible compliance posture: risk classification, documented controls, DPIA, monitoring, and audit trail. Sign-off rests with your DPO and legal team.' },
      { q: 'Do you work with our existing DPO and CISO?', a: 'Yes — the compliance artefacts are written specifically for them. I can also participate in cross-functional reviews and respond to their security/privacy questionnaires directly.' },
      { q: 'What happens if a model gets deprecated?', a: 'The architecture is model-agnostic. Swapping Mistral-Large for Mixtral or Llama-4 typically takes 1-3 days of work plus an eval re-run. Observability and cost models follow the change automatically.' }
    ]
  },
  it: {
    title: 'AI Sovrana UE & Deployment LLM GDPR-Compliant | Aru Bhardwaj',
    h1: 'AI Sovrana & Infrastruttura LLM GDPR-Compliant',
    tagline: 'Deployment LLM privato, self-hosted e UE-sovrano. OVHcloud, Scaleway, Hetzner, Mistral AI. Piena residenza dati UE, zero esposizione al CLOUD Act, audit-ready per settori regolamentati.',
    description: 'Consulenza e deployment di AI sovrana UE. Infrastruttura LLM conforme al GDPR su OVHcloud, Scaleway, Hetzner e Mistral AI. Per banche, assicurazioni, sanità, legale e settore pubblico in Francia, Germania, Svizzera, Italia.',
    whoItsFor: [
      'Banche, assicurazioni e fintech regolamentate da ACPR, BaFin, FINMA, CONSOB o DNB',
      'Organizzazioni sanitarie che richiedono AI HDS-compliant (Francia) o deployment allineati al KHZG (Germania)',
      'Studi legali e legaltech con preoccupazioni di segreto professionale',
      'Settore pubblico e contractor della difesa per cui l\'esposizione al CLOUD Act è un deal-breaker',
      'Scale-up che si preparano agli obblighi EU AI Act per sistemi ad alto rischio',
      'Qualsiasi azienda europea il cui DPO o Compliance officer ha bloccato le API AI ospitate negli USA'
    ],
    whatsIncluded: [
      'Selezione del provider: OVHcloud (AI Endpoints, AI Deploy, AI Training, AI Notebooks, HDS) vs Scaleway (Generative APIs, Inference, cluster H100) vs Hetzner (GPU ottimizzato sui costi) vs on-prem',
      'Selezione dei modelli: Mistral Large / Codestral / Pixtral, Aleph Alpha Luminous, Llama 3 self-hosted, Mixtral, Qwen, DeepSeek, SLM fine-tuned',
      'Stack di inferenza: vLLM, TGI, Ollama — load-balanced, osservabili, token-metered',
      'Architettura di retrieval: Qdrant, Weaviate, pgvector, Milvus; ricerca ibrida; reranking',
      'Orchestrazione: LangChain, LangGraph, LlamaIndex, DSPy; eval harness e guardrail',
      'Deliverable di compliance: DPIA, Transfer Impact Assessment, template DPA Articolo 28, classificazione del rischio AI Act, allineamento ISO/IEC 42001',
      'Modellazione costi: economia dei token, forecast di ore GPU, ottimizzazione del cache-hit',
      'Observability: Langfuse, OpenTelemetry, Helicone — audit trail completo di ogni inferenza'
    ],
    process: [
      { step: 'Scoping regolatorio', detail: 'Identificare le regolamentazioni applicabili (GDPR, EU AI Act, NIS2, DORA, settori specifici) e la postura di compliance richiesta: residenza dati, ritenzione, audit, spiegabilità, supervisione umana.' },
      { step: 'Design dell\'architettura', detail: 'Selezione provider e modelli, topologia di rete (VPC, endpoint privati, zero egress extra-UE), gestione dei secret, audit logging.' },
      { step: 'Build & integrazione', detail: 'Mettere in piedi lo stack di inferenza, orchestrazione, retrieval e guardrail. Integrazione con l\'applicazione cliente e con IAM/SSO esistenti.' },
      { step: 'Artefatti di compliance', detail: 'Scrivere DPIA, DPA, TIA, memo di classificazione del rischio AI Act e runbook operativo. Handoff al DPO / CISO.' },
      { step: 'Operare o trasferire', detail: 'O operiamo lo stack in retainer, o lo trasferiamo completamente al team interno con formazione e runbook.' }
    ],
    outcomes: [
      'Stack LLM con zero egress di prompt/response verso giurisdizioni extra-UE',
      'Documenti DPIA e TIA che il tuo DPO può firmare',
      'Classificazione del rischio AI Act con motivazione difendibile',
      'Audit trail che copre ogni richiesta di inferenza (chi, cosa, quando, versione del modello)',
      'Proiezioni di costi del provider per 12 e 24 mesi',
      'Baseline SLO di latenza e disponibilità di inferenza',
      'Un percorso di migrazione dalle API ospitate negli USA se dovesse diventare obbligatorio',
      'Una storia di compliance che i tuoi clienti enterprise accetteranno in procurement'
    ],
    pricing: [
      { label: 'Discovery sprint (3-5 giorni)', price: 'da €2.500', note: 'Scoping regolatorio + memo di opzioni di architettura.' },
      { label: 'Deployment completo', price: 'da €25.000', note: 'Dipende da scala e profondità di compliance. Tipicamente 3-6 settimane end-to-end.' },
      { label: 'Retainer continuo', price: 'da €2.100/mese', note: 'Monitor, aggiustamenti e manutenzione degli artefatti di compliance.' }
    ],
    faqs: [
      { q: 'È davvero possibile far girare qualità GPT-4 su infrastruttura UE?', a: 'Sì, nella maggior parte dei casi d\'uso. Mistral Large e Claude Sonnet via Bedrock UE, combinati con Llama-3 o Mixtral fine-tuned sul tuo dominio, coprono l\'85%+ dei casi d\'uso con qualità competitiva. Le differenze si riducono ogni mese.' },
      { q: 'E il CLOUD Act se uso Bedrock UE?', a: 'Bedrock UE riduce ma non elimina l\'esposizione al CLOUD Act perché AWS è un\'entità US-owned. Per esigenze a zero esposizione (difesa, alcuni settori pubblici) la risposta è OVHcloud, Scaleway o on-prem — tutti con sede UE, proprietà UE.' },
      { q: 'Sarà più lento delle API OpenAI/Anthropic?', a: 'Per Llama/Mixtral self-hosted su Scaleway H100: 50-200ms TTFT a throughput di token simile. Per API hosted Mistral: parità. Per OVHcloud AI Endpoints: 100-300ms TTFT a seconda del modello. La latenza raramente è il collo di bottiglia; l\'auditabilità sì.' },
      { q: 'Puoi garantire la compliance all\'EU AI Act?', a: 'Nessun consulente può "garantire" la compliance a una legge ancora in fase di rollout. Quello che consegno è una postura di compliance difendibile: classificazione del rischio, controlli documentati, DPIA, monitoring e audit trail. La firma spetta al tuo DPO e team legale.' },
      { q: 'Lavori con il nostro DPO e CISO esistenti?', a: 'Sì — gli artefatti di compliance sono scritti proprio per loro. Posso anche partecipare a review cross-funzionali e rispondere direttamente ai loro questionari di security/privacy.' },
      { q: 'Cosa succede se un modello viene deprecato?', a: 'L\'architettura è model-agnostic. Sostituire Mistral-Large con Mixtral o Llama-4 richiede tipicamente 1-3 giorni di lavoro più un re-run dell\'eval. Observability e modelli di costo seguono il cambio automaticamente.' }
    ]
  },
  fr: {
    title: 'IA Souveraine UE & Déploiement LLM RGPD | Aru Bhardwaj',
    h1: 'IA Souveraine & Infrastructure LLM Conforme RGPD',
    tagline: 'Déploiement LLM privé, self-hosted et souverain UE. OVHcloud, Scaleway, Hetzner, Mistral AI. Résidence des données UE complète, aucune exposition au CLOUD Act, audit-ready pour secteurs régulés.',
    description: 'Conseil et déploiement d\'IA souveraine UE. Infrastructure LLM conforme RGPD sur OVHcloud, Scaleway, Hetzner et Mistral AI. Pour banques, assurances, santé, juridique et secteur public en France, Allemagne, Suisse, Italie.',
    whoItsFor: [
      'Banques, assureurs et fintechs régulés par l\'ACPR, BaFin, FINMA, CONSOB ou DNB',
      'Organisations de santé nécessitant une IA HDS-compliant (France) ou des déploiements alignés KHZG (Allemagne)',
      'Cabinets d\'avocats et legaltech avec des préoccupations de secret professionnel',
      'Secteur public et contractants défense pour qui l\'exposition au CLOUD Act est rédhibitoire',
      'Scale-ups se préparant aux obligations EU AI Act pour systèmes à haut risque',
      'Toute entreprise européenne dont le DPO ou Compliance officer a bloqué les API IA US-hébergées'
    ],
    whatsIncluded: [
      'Sélection du fournisseur : OVHcloud (AI Endpoints, AI Deploy, AI Training, AI Notebooks, HDS) vs Scaleway (Generative APIs, Inference, clusters H100) vs Hetzner (GPU optimisé coût) vs on-prem',
      'Sélection des modèles : Mistral Large / Codestral / Pixtral, Aleph Alpha Luminous, Llama 3 self-hosted, Mixtral, Qwen, DeepSeek, SLM fine-tunés',
      'Stack d\'inférence : vLLM, TGI, Ollama — load-balanced, observable, token-metered',
      'Architecture de retrieval : Qdrant, Weaviate, pgvector, Milvus ; recherche hybride ; reranking',
      'Orchestration : LangChain, LangGraph, LlamaIndex, DSPy ; eval harness et garde-fous',
      'Livrables de conformité : DPIA, Transfer Impact Assessment, template DPA Article 28, classification du risque AI Act, alignement ISO/IEC 42001',
      'Modélisation des coûts : économie des tokens, prévision des heures GPU, optimisation du cache-hit',
      'Observability : Langfuse, OpenTelemetry, Helicone — piste d\'audit complète de chaque inférence'
    ],
    process: [
      { step: 'Cadrage réglementaire', detail: 'Identifier les régulations applicables (RGPD, EU AI Act, NIS2, DORA, sectorielles) et la posture de conformité requise : résidence des données, rétention, audit, explicabilité, supervision humaine.' },
      { step: 'Design de l\'architecture', detail: 'Sélection fournisseur et modèles, topologie réseau (VPC, endpoints privés, zéro egress hors UE), gestion des secrets, audit logging.' },
      { step: 'Build & intégration', detail: 'Mise en place de la stack d\'inférence, orchestration, retrieval et garde-fous. Intégration avec l\'application client et IAM/SSO existants.' },
      { step: 'Artéfacts de conformité', detail: 'Rédaction du DPIA, DPA, TIA, mémo de classification du risque AI Act, et runbook opérationnel. Remise au DPO / CISO.' },
      { step: 'Opérer ou transférer', detail: 'Soit on opère la stack en forfait, soit on la transfère entièrement à l\'équipe interne avec formation et runbook.' }
    ],
    outcomes: [
      'Stack LLM sans egress de prompts/réponses vers des juridictions hors UE',
      'Documents DPIA et TIA que votre DPO peut valider',
      'Classification du risque AI Act avec raisonnement défendable',
      'Piste d\'audit couvrant chaque requête d\'inférence (qui, quoi, quand, version du modèle)',
      'Projections de coûts fournisseur sur 12 et 24 mois',
      'Baselines SLO de latence et disponibilité d\'inférence',
      'Un chemin de migration depuis les API US-hébergées si cela devient obligatoire',
      'Un récit de conformité que vos clients enterprise accepteront en procurement'
    ],
    pricing: [
      { label: 'Sprint de discovery (3-5 jours)', price: 'à partir de 2 500 €', note: 'Cadrage réglementaire + mémo d\'options d\'architecture.' },
      { label: 'Déploiement complet', price: 'à partir de 25 000 €', note: 'Dépend de l\'échelle et de la profondeur de conformité. Typiquement 3-6 semaines end-to-end.' },
      { label: 'Forfait continu', price: 'à partir de 2 100 €/mois', note: 'Monitoring, ajustements, et maintien à jour des artéfacts de conformité.' }
    ],
    faqs: [
      { q: 'Est-il vraiment possible d\'avoir une qualité niveau GPT-4 sur infrastructure UE ?', a: 'Oui, dans la plupart des cas d\'usage. Mistral Large et Claude Sonnet via Bedrock UE, combinés avec Llama-3 ou Mixtral fine-tunés sur votre domaine, couvrent 85 %+ des cas d\'usage avec une qualité compétitive. Les écarts se réduisent chaque mois.' },
      { q: 'Et le CLOUD Act si j\'utilise Bedrock UE ?', a: 'Bedrock UE réduit mais n\'élimine pas l\'exposition au CLOUD Act car AWS est une entité US-owned. Pour un besoin zéro exposition (défense, certains secteurs publics), la réponse est OVHcloud, Scaleway, ou on-prem — tous basés UE, détenus UE.' },
      { q: 'Sera-t-il plus lent que les API OpenAI/Anthropic ?', a: 'Pour Llama/Mixtral self-hosted sur Scaleway H100 : 50-200ms TTFT à un throughput de tokens similaire. Pour les API hosted Mistral : parité. Pour OVHcloud AI Endpoints : 100-300ms TTFT selon le modèle. La latence est rarement le goulot ; l\'auditabilité l\'est.' },
      { q: 'Pouvez-vous garantir la conformité EU AI Act ?', a: 'Aucun consultant ne peut « garantir » la conformité à une loi encore en déploiement. Ce que je livre est une posture de conformité défendable : classification du risque, contrôles documentés, DPIA, monitoring et piste d\'audit. La validation revient à votre DPO et équipe juridique.' },
      { q: 'Travaillez-vous avec notre DPO et CISO existants ?', a: 'Oui — les artéfacts de conformité sont rédigés spécialement pour eux. Je peux aussi participer à des revues cross-fonctionnelles et répondre directement à leurs questionnaires sécurité/confidentialité.' },
      { q: 'Que se passe-t-il si un modèle est déprécié ?', a: 'L\'architecture est agnostique du modèle. Échanger Mistral-Large contre Mixtral ou Llama-4 prend typiquement 1-3 jours de travail plus un re-run des evals. Observability et modèles de coût suivent le changement automatiquement.' }
    ]
  },
  de: {
    title: 'EU-Souveräne KI & DSGVO-konforme LLM-Deployment | Aru Bhardwaj',
    h1: 'Souveräne KI & DSGVO-konforme LLM-Infrastruktur',
    tagline: 'Privates, selbst-gehostetes, EU-souveränes LLM-Deployment. OVHcloud, Scaleway, Hetzner, Mistral AI. Volle EU-Datenresidenz, keine CLOUD-Act-Exposition, audit-ready für regulierte Branchen.',
    description: 'EU-souveräne KI-Beratung und Deployment. DSGVO-konforme LLM-Infrastruktur auf OVHcloud, Scaleway, Hetzner und Mistral AI. Für Banken, Versicherer, Gesundheit, Recht und öffentlichen Sektor in Frankreich, Deutschland, Schweiz, Italien.',
    whoItsFor: [
      'Banken, Versicherer und Fintechs, die von ACPR, BaFin, FINMA, CONSOB oder DNB reguliert werden',
      'Gesundheitsorganisationen, die HDS-konforme KI (Frankreich) oder KHZG-ausgerichtete Deployments (Deutschland) benötigen',
      'Kanzleien und LegalTechs mit Mandatsschutzbedenken',
      'Öffentlicher Sektor und Verteidigungs-Vertragspartner, für die CLOUD-Act-Exposition disqualifizierend ist',
      'Scale-ups, die sich auf EU-AI-Act-Pflichten für Hochrisiko-Systeme vorbereiten',
      'Jedes europäische Unternehmen, dessen DPO oder Compliance-Officer US-gehostete KI-APIs blockiert hat'
    ],
    whatsIncluded: [
      'Provider-Auswahl: OVHcloud (AI Endpoints, AI Deploy, AI Training, AI Notebooks, HDS) vs Scaleway (Generative APIs, Inference, H100-Cluster) vs Hetzner (kosten­optimiertes GPU) vs On-Prem',
      'Modellauswahl: Mistral Large / Codestral / Pixtral, Aleph Alpha Luminous, Self-hosted Llama 3, Mixtral, Qwen, DeepSeek, Fine-tuned SLMs',
      'Inference-Stack: vLLM, TGI, Ollama — load-balanced, beobachtbar, token-gemessen',
      'Retrieval-Architektur: Qdrant, Weaviate, pgvector, Milvus; hybride Suche; Reranking',
      'Orchestrierung: LangChain, LangGraph, LlamaIndex, DSPy; Eval-Harness und Guardrails',
      'Compliance-Lieferobjekte: DSFA, Transfer Impact Assessment, Artikel-28-DPV-Vorlage, AI-Act-Risikoklassifizierung, ISO/IEC-42001-Ausrichtung',
      'Kostenmodellierung: Token-Ökonomie, GPU-Stunden-Forecast, Cache-Hit-Optimierung',
      'Observability: Langfuse, OpenTelemetry, Helicone — vollständiger Audit-Trail jeder Inferenz'
    ],
    process: [
      { step: 'Regulatorisches Scoping', detail: 'Identifizierung der anwendbaren Regulierungen (DSGVO, EU AI Act, NIS2, DORA, branchenspezifisch) und der erforderlichen Compliance-Posture: Datenresidenz, Aufbewahrung, Audit, Erklärbarkeit, menschliche Aufsicht.' },
      { step: 'Architekturdesign', detail: 'Provider- und Modellauswahl, Netzwerk-Topologie (VPC, private Endpoints, kein Egress außerhalb der EU), Secret-Management, Audit-Logging.' },
      { step: 'Build & Integration', detail: 'Aufbau des Inference-Stacks, Orchestrierung, Retrieval und Guardrails. Integration mit der Client-Anwendung und bestehendem IAM/SSO.' },
      { step: 'Compliance-Artefakte', detail: 'DSFA, DPV, TIA, AI-Act-Risikoklassifizierungs-Memo und operatives Runbook verfassen. Übergabe an DPO / CISO.' },
      { step: 'Betreiben oder übergeben', detail: 'Entweder Betrieb des Stacks als Retainer oder vollständige Übergabe an das interne Team mit Schulung und Runbook.' }
    ],
    outcomes: [
      'LLM-Stack ohne Prompt/Response-Egress in Nicht-EU-Jurisdiktionen',
      'DSFA- und TIA-Dokumente, die Ihr DPO freigeben kann',
      'AI-Act-Risikoklassifizierung mit verteidigungsfähiger Begründung',
      'Audit-Trail über jede Inferenzanfrage (wer, was, wann, Modellversion)',
      'Provider-Kostenprognosen für 12 und 24 Monate',
      'Inference-Latenz- und Verfügbarkeits-SLO-Baselines',
      'Ein Migrationspfad weg von US-gehosteten APIs, falls das vorgeschrieben wird',
      'Eine Compliance-Story, die Ihre Enterprise-Kunden im Procurement akzeptieren'
    ],
    pricing: [
      { label: 'Discovery-Sprint (3-5 Tage)', price: 'ab €2.500', note: 'Regulatorisches Scoping + Architektur-Optionen-Memo.' },
      { label: 'Vollständiges Deployment', price: 'ab €25.000', note: 'Abhängig von Skala und Compliance-Tiefe. Typischerweise 3-6 Wochen End-to-End.' },
      { label: 'Laufender Retainer', price: 'ab €2.100/Monat', note: 'Monitoring, Anpassungen und Aktualisierung der Compliance-Artefakte.' }
    ],
    faqs: [
      { q: 'Ist es wirklich möglich, GPT-4-Qualität auf EU-Infrastruktur zu betreiben?', a: 'Ja, in den meisten Anwendungsfällen. Mistral Large und Claude Sonnet via Bedrock EU, kombiniert mit domänen-fine-tuned Llama-3 oder Mixtral, decken 85%+ der Anwendungsfälle mit wettbewerbsfähiger Qualität ab. Die Lücken schließen sich monatlich.' },
      { q: 'Was ist mit dem CLOUD Act bei Bedrock EU?', a: 'Bedrock EU reduziert die CLOUD-Act-Exposition, eliminiert sie aber nicht, weil AWS ein US-eigenes Unternehmen ist. Für Null-Expositions-Anforderungen (Verteidigung, Teile des öffentlichen Sektors) heißt die Antwort OVHcloud, Scaleway oder On-Prem — alle mit EU-Hauptsitz, EU-eigen.' },
      { q: 'Wird das langsamer sein als OpenAI/Anthropic-APIs?', a: 'Für Self-hosted Llama/Mixtral auf Scaleway-H100s: 50-200ms TTFT bei vergleichbarem Token-Durchsatz. Für gehostete Mistral-APIs: Parität. Für OVHcloud AI Endpoints: 100-300ms TTFT je nach Modell. Latenz ist selten der Flaschenhals — Auditierbarkeit schon.' },
      { q: 'Können Sie EU-AI-Act-Compliance garantieren?', a: 'Kein Berater kann Compliance mit einem Gesetz, das sich noch in der Einführung befindet, „garantieren". Was ich liefere, ist eine verteidigungsfähige Compliance-Posture: Risikoklassifizierung, dokumentierte Kontrollen, DSFA, Monitoring und Audit-Trail. Die Freigabe liegt bei Ihrem DPO und Rechtsteam.' },
      { q: 'Arbeiten Sie mit unserem bestehenden DPO und CISO zusammen?', a: 'Ja — die Compliance-Artefakte sind speziell für sie geschrieben. Ich kann auch an funktionsübergreifenden Reviews teilnehmen und direkt auf deren Security-/Privacy-Fragebögen antworten.' },
      { q: 'Was passiert, wenn ein Modell abgekündigt wird?', a: 'Die Architektur ist modell-agnostisch. Mistral-Large gegen Mixtral oder Llama-4 auszutauschen dauert typischerweise 1-3 Tage Arbeit plus einen Eval-Rerun. Observability und Kostenmodelle folgen der Änderung automatisch.' }
    ]
  }
};

const SovereignAiPage = () => {
  const { language } = useLanguage();
  const c = CONTENT[language as Lang];
  return (
    <ServicePageLayout
      slug="sovereign-ai"
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

export default SovereignAiPage;

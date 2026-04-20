import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { useLanguage } from '@/contexts/LanguageContext';

type Language = 'en' | 'it' | 'fr' | 'de';

interface Section {
  id: string;
  title: string;
  body: React.ReactNode;
}

interface TermsContent {
  pageTitle: string;
  lastUpdated: string;
  languageNote: string;
  sections: Section[];
  outro: string;
}

const TERMS: Record<Language, TermsContent> = {
  en: {
    pageTitle: 'Terms and Conditions',
    lastUpdated: 'Last updated: 21 April 2026',
    languageNote: 'Available in English, French, German, and Italian. In case of any discrepancy between translations, the English version prevails.',
    sections: [
      {
        id: '1',
        title: '1. Agreement Overview',
        body: (
          <p className="text-gray-700 leading-relaxed">
            These Terms and Conditions govern the professional services provided by Aru Bhardwaj —
            including Fractional CTO engagements, AI and data science development, technical advisory,
            and infrastructure implementation. By engaging these services, you agree to be bound by these
            terms alongside any Project Proposal, Statement of Work, or separate agreement signed between
            the parties.
          </p>
        )
      },
      {
        id: '2',
        title: '2. Services Provided',
        body: (
          <>
            <p className="text-gray-700 leading-relaxed mb-3">Services include, but are not limited to:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><strong>Fractional CTO Leadership</strong> and Technical Roadmap Strategy</li>
              <li><strong>Infrastructure Architecture</strong> and Sovereign Cloud Implementation (OVHcloud, Scaleway, Hetzner, multi-cloud)</li>
              <li><strong>Technical Due Diligence</strong> and AI Regulatory Compliance advisory (EU AI Act, GDPR/RGPD, NIS2, DORA)</li>
              <li>AI, LLM, and Generative AI development (ChatGPT, Claude, Gemini, Mistral, self-hosted models)</li>
              <li>RAG pipelines, agentic systems, and vector-database architecture</li>
              <li>Machine learning model development and predictive analytics</li>
              <li>MVP and rapid-prototyping builds for startups and scale-ups</li>
              <li>Natural Language Processing and Computer Vision solutions</li>
              <li>Data engineering, ETL pipelines, and analytics platforms</li>
            </ul>
          </>
        )
      },
      {
        id: '3',
        title: '3. Payment Terms',
        body: (
          <div className="space-y-4 text-gray-700">
            <p><strong>Project-Based Engagements:</strong> Payment terms will be specified in the Project Proposal. Typically, fixed-scope projects require 50% upfront payment before work begins, with the remainder due upon project completion or at agreed milestones.</p>
            <p><strong>Retainer Services:</strong> For ongoing Fractional CTO engagements, invoices are issued at the beginning of each month and are due within 7 days. Services may be paused if the retainer is not settled by the invoice due date. Retainers are prepaid and non-refundable once the month has commenced.</p>
            <p><strong>Consultations:</strong> One-off consultations (30 or 60 minute calls) are prepaid in full via the website booking flow before the session is scheduled.</p>
            <p><strong>Late Payments:</strong> Late payments may incur a 2% monthly service charge. Work may be suspended for accounts more than 30 days overdue and suspended engagements may be terminated after 60 days of non-payment, with all deliverables released only after the outstanding balance is cleared.</p>
            <p><strong>Currency &amp; VAT:</strong> All payments are due in EUR unless otherwise specified. French TVA/VAT is added where applicable; EU B2B clients with a valid intra-community VAT number benefit from reverse charge per Article 196 of the EU VAT Directive.</p>
          </div>
        )
      },
      {
        id: '4',
        title: '4. Refund Policy',
        body: (
          <>
            <div className="bg-yellow-50 border-l-4 border-theme-gold p-4 mb-4">
              <p className="text-gray-800 font-semibold">
                <strong>Important:</strong> Refunds are not possible after 15 days from the date of payment. This policy applies to all services and consultations.
              </p>
            </div>
            <div className="space-y-3 text-gray-700">
              <p>Refund requests must be submitted within 15 days of payment and will be evaluated on a case-by-case basis. Refunds may be considered only if:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>No substantial work has been delivered</li>
                <li>The project cannot be completed due to technical impossibility</li>
                <li>Mutual agreement to terminate the project is reached</li>
              </ul>
              <p><strong>Prorated refunds only:</strong> Where a refund is granted following mutual termination, it will be calculated on a <em>prorated basis</em> — time already invested, delivered work, and any non-recoverable third-party costs (API credits, cloud infrastructure, third-party licences, paid tools, or reserved GPU capacity) will be deducted from the refunded amount.</p>
              <p><strong>Fixed-price project deposits:</strong> The 50% upfront deposit on fixed-price projects is <em>non-refundable</em> once work has commenced. This deposit covers the immediate engagement cost, scoping and discovery time, priority calendar blocking, and resource allocation — and is not recoverable even in the event of mutual termination.</p>
              <p>Even partial work delivered will be charged at the agreed hourly rate. Monthly retainers, once invoiced and the month commenced, are non-refundable.</p>
            </div>
          </>
        )
      },
      {
        id: '5',
        title: '5. Project Scope and Changes',
        body: (
          <div className="space-y-3 text-gray-700">
            <p>Project scope will be clearly defined in the Project Proposal or Statement of Work. Any changes to the scope must be agreed upon in writing and may result in additional charges.</p>
            <p><strong>Change Requests:</strong> Additional work beyond the original scope will be billed at the agreed hourly rate or as a separate project.</p>
          </div>
        )
      },
      {
        id: '6',
        title: '6. Intellectual Property',
        body: (
          <div className="space-y-3 text-gray-700">
            <p><strong>Final Deliverables:</strong> Upon full payment, the Client will own all final deliverables created specifically for their project — including custom code, bespoke model weights, documentation, and project-specific architecture.</p>
            <p><strong>Pre-Existing Tools &amp; Standard Libraries:</strong> The Client does <em>not</em> acquire ownership of, and shall not claim rights over, any pre-existing tools, frameworks, scripts, boilerplate code, internal libraries, methodologies, or know-how authored by Aru Bhardwaj prior to or outside the scope of the engagement (collectively, "Standard Libraries"). Where Standard Libraries are incorporated into Final Deliverables, the Client is granted a perpetual, worldwide, non-exclusive, royalty-free licence to use, modify, and distribute them solely as an integrated part of the delivered project. Standard Libraries remain the sole property of Aru Bhardwaj and may be reused in other engagements.</p>
            <p><strong>Third-Party Components:</strong> Final Deliverables may include open-source components and third-party APIs (OpenAI, Anthropic, Mistral, cloud provider SDKs, etc.) governed by their respective licences and terms — those remain under their original terms and are passed through to the Client as-is.</p>
            <p><strong>Client-Provided Materials:</strong> The Client is responsible for ensuring they have the right to use any data, content, or materials provided for the project, and warrants that such materials do not infringe third-party rights.</p>
          </div>
        )
      },
      {
        id: '7',
        title: '7. Confidentiality',
        body: (
          <p className="text-gray-700 leading-relaxed">
            All client information, data, and project details will be kept strictly confidential. Mutual non-disclosure agreements may be signed upon request and are standard practice for any substantial engagement. Client data, source code, product ideas, and internal documents will not be shared, sold, or distributed to third parties, and will not be used to train models or improve third-party services without explicit written consent.
          </p>
        )
      },
      {
        id: '8',
        title: '8. Limitation of Liability',
        body: (
          <div className="space-y-3 text-gray-700">
            <p>While all reasonable professional care is taken in every deliverable, liability is limited to the total amount paid by the Client for the specific project or the preceding three months of retainer fees, whichever is lower. Aru Bhardwaj is not responsible for:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Indirect, incidental, special, or consequential damages</li>
              <li>Loss of profits, revenue, goodwill, or business opportunities</li>
              <li>Data loss due to Client system failures or Client-managed backups</li>
              <li>Third-party service interruptions (cloud providers, APIs, model vendors)</li>
              <li>Changes in third-party model behaviour, pricing, deprecation, or availability</li>
            </ul>
            <div className="bg-yellow-50 border-l-4 border-theme-gold p-4 mt-4">
              <p className="font-semibold mb-2"><strong>AI &amp; LLM Output Disclaimer:</strong></p>
              <p>The Client acknowledges that AI and Large Language Model (LLM) outputs are inherently <em>probabilistic</em> and may produce inaccurate, biased, or hallucinated content. While Aru Bhardwaj implements industry best-practice guardrails (evaluation harnesses, grounding, safety filters, human-in-the-loop checkpoints, and observability), the Client is solely responsible for final validation, human review, and editorial sign-off of AI-generated content before any public, regulatory, or commercial use. This includes compliance with the EU AI Act, sector-specific regulations, and Client's own internal policies.</p>
            </div>
          </div>
        )
      },
      {
        id: '9',
        title: '9. Termination',
        body: (
          <p className="text-gray-700 leading-relaxed">
            Either party may terminate a project engagement with 7 days written notice. For ongoing Fractional CTO retainers, either party may terminate with 30 days written notice to allow an orderly handover. Upon termination, payment is due for all work completed and all retainer periods commenced up to the termination date. All deliverables completed will be provided to the Client upon settlement of the outstanding balance.
          </p>
        )
      },
      {
        id: '10',
        title: '10. Communication and Support',
        body: (
          <div className="space-y-3 text-gray-700">
            <p>Regular project updates will be provided via email or the agreed communication channel (Slack, Teams, async tools). Response time for communications is typically 24-48 hours during business days.</p>
            <p><strong>Business Hours:</strong> Monday to Friday, 9:00 AM to 6:00 PM CET. Urgent matters outside business hours should be flagged explicitly.</p>
          </div>
        )
      },
      {
        id: '11',
        title: '11. Governing Law',
        body: (
          <p className="text-gray-700 leading-relaxed">
            These terms are governed by <strong>French law</strong>. Any disputes will be resolved through good-faith negotiation first, then — if unresolved — through arbitration in Paris, France, or the competent French courts. This jurisdiction choice is deliberate: it aligns with EU data-sovereignty principles and provides both parties with a neutral, well-established legal framework.
          </p>
        )
      },
      {
        id: '12',
        title: '12. Contact Information',
        body: (
          <div className="space-y-2 text-gray-700">
            <p><strong>Email:</strong> aru.bhardwaj@insightrix.eu</p>
            <p><strong>Phone:</strong> +33 (0) 766985210</p>
            <p><strong>Address:</strong> Paris, France</p>
          </div>
        )
      },
      {
        id: '13',
        title: '13. Alternative Compensation (Success Fees & Equity)',
        body: (
          <div className="space-y-3 text-gray-700">
            <p>Where specifically agreed in a Project Proposal or Partnership Agreement, compensation may include — in addition to the mandatory service fee — success fees, performance bonuses, revenue-share, milestone-based incentives, or equity vesting.</p>
            <p>Such alternative-compensation arrangements will be governed by a separate <strong>Shareholders&apos; Agreement</strong>, <strong>Success Fee Addendum</strong>, or <strong>Partnership Agreement</strong> signed between the parties, which shall supersede these general terms where they conflict on matters of compensation, vesting, cliffs, acceleration, and exit events.</p>
            <p>For the avoidance of doubt: <em>a service fee component is always present in every engagement</em>. Pure-equity, pure-revenue-share, or pure-success-fee arrangements without a cash service-fee component are not offered.</p>
          </div>
        )
      }
    ],
    outro: 'By engaging these services, you acknowledge that you have read, understood, and agree to these Terms and Conditions. These terms may be updated periodically, and clients will be notified by email of any material changes at least 30 days before they take effect for existing engagements.'
  },

  fr: {
    pageTitle: 'Conditions Générales',
    lastUpdated: 'Dernière mise à jour : 21 avril 2026',
    languageNote: 'Disponibles en anglais, français, allemand et italien. En cas de divergence entre les traductions, la version anglaise prévaut.',
    sections: [
      {
        id: '1',
        title: '1. Aperçu de l\'Accord',
        body: (
          <p className="text-gray-700 leading-relaxed">
            Les présentes Conditions Générales régissent les services professionnels fournis par Aru Bhardwaj — incluant les missions de Fractional CTO, le développement IA et data science, le conseil technique et la mise en œuvre d\'infrastructures. En engageant ces services, vous acceptez d\'être lié par ces conditions ainsi que par toute Proposition de Projet, Statement of Work ou contrat distinct signé entre les parties.
          </p>
        )
      },
      {
        id: '2',
        title: '2. Services Fournis',
        body: (
          <>
            <p className="text-gray-700 leading-relaxed mb-3">Les services incluent, sans s\'y limiter :</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><strong>Leadership Fractional CTO</strong> et stratégie de feuille de route technique</li>
              <li><strong>Architecture d\'Infrastructure</strong> et implémentation de Cloud Souverain (OVHcloud, Scaleway, Hetzner, multi-cloud)</li>
              <li><strong>Due Diligence Technique</strong> et conseil en conformité réglementaire IA (EU AI Act, RGPD, NIS2, DORA)</li>
              <li>Développement IA, LLM et IA générative (ChatGPT, Claude, Gemini, Mistral, modèles auto-hébergés)</li>
              <li>Pipelines RAG, systèmes agentiques et architecture de bases vectorielles</li>
              <li>Développement de modèles de machine learning et analyses prédictives</li>
              <li>MVP et prototypage rapide pour startups et scale-ups</li>
              <li>Solutions de traitement du langage naturel et vision par ordinateur</li>
              <li>Data engineering, pipelines ETL et plateformes analytiques</li>
            </ul>
          </>
        )
      },
      {
        id: '3',
        title: '3. Conditions de Paiement',
        body: (
          <div className="space-y-4 text-gray-700">
            <p><strong>Missions au Projet :</strong> Les conditions de paiement seront précisées dans la Proposition de Projet. Généralement, les projets à périmètre fixe nécessitent 50 % de paiement à l\'avance avant le début des travaux, le solde étant dû à la livraison ou selon les jalons convenus.</p>
            <p><strong>Services au Forfait Mensuel (Retainer) :</strong> Pour les missions Fractional CTO en cours, les factures sont émises en début de chaque mois et dues sous 7 jours. Les services peuvent être suspendus si le forfait n\'est pas réglé à l\'échéance. Les forfaits sont prépayés et non-remboursables une fois le mois entamé.</p>
            <p><strong>Consultations :</strong> Les consultations ponctuelles (appels de 30 ou 60 minutes) sont prépayées intégralement via le système de réservation du site avant toute planification.</p>
            <p><strong>Retards de Paiement :</strong> Les retards peuvent entraîner des frais de 2 % mensuels. Les travaux peuvent être suspendus pour les comptes en retard de plus de 30 jours, et les missions suspendues peuvent être résiliées après 60 jours de non-paiement, avec libération des livrables uniquement après règlement du solde.</p>
            <p><strong>Devise &amp; TVA :</strong> Tous les paiements sont dus en EUR sauf indication contraire. La TVA française est ajoutée lorsque applicable ; les clients B2B de l\'UE disposant d\'un numéro de TVA intracommunautaire valide bénéficient de l\'autoliquidation conformément à l\'Article 196 de la Directive TVA de l\'UE.</p>
          </div>
        )
      },
      {
        id: '4',
        title: '4. Politique de Remboursement',
        body: (
          <>
            <div className="bg-yellow-50 border-l-4 border-theme-gold p-4 mb-4">
              <p className="text-gray-800 font-semibold">
                <strong>Important :</strong> Aucun remboursement n\'est possible au-delà de 15 jours suivant la date de paiement. Cette politique s\'applique à tous les services et consultations.
              </p>
            </div>
            <div className="space-y-3 text-gray-700">
              <p>Les demandes de remboursement doivent être soumises dans les 15 jours suivant le paiement et seront évaluées au cas par cas. Un remboursement ne peut être envisagé que si :</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Aucun travail substantiel n\'a été livré</li>
                <li>Le projet ne peut être réalisé en raison d\'une impossibilité technique</li>
                <li>Un accord mutuel de résiliation est conclu</li>
              </ul>
              <p><strong>Remboursements au prorata uniquement :</strong> Lorsqu\'un remboursement est accordé suite à une résiliation mutuelle, il sera calculé <em>au prorata</em> — le temps déjà investi, les travaux livrés, et les coûts de tiers non récupérables (crédits API, infrastructure cloud, licences tierces, outils payants ou capacité GPU réservée) seront déduits du montant remboursé.</p>
              <p><strong>Acomptes sur projets à prix fixe :</strong> L\'acompte de 50 % sur les projets à prix fixe est <em>non remboursable</em> une fois les travaux commencés. Cet acompte couvre le coût immédiat d\'engagement, le temps de cadrage et de discovery, la priorisation calendaire, et l\'allocation des ressources — et n\'est pas récupérable, même en cas de résiliation mutuelle.</p>
              <p>Le travail partiellement livré sera facturé au taux horaire convenu. Les forfaits mensuels, une fois facturés et le mois commencé, ne sont pas remboursables.</p>
            </div>
          </>
        )
      },
      {
        id: '5',
        title: '5. Périmètre du Projet et Modifications',
        body: (
          <div className="space-y-3 text-gray-700">
            <p>Le périmètre du projet sera clairement défini dans la Proposition de Projet ou le Statement of Work. Toute modification doit être convenue par écrit et peut entraîner des frais additionnels.</p>
            <p><strong>Demandes de Modification :</strong> Tout travail au-delà du périmètre initial sera facturé au taux horaire convenu ou comme un projet distinct.</p>
          </div>
        )
      },
      {
        id: '6',
        title: '6. Propriété Intellectuelle',
        body: (
          <div className="space-y-3 text-gray-700">
            <p><strong>Livrables Finaux :</strong> Au paiement intégral, le Client détiendra tous les livrables finaux créés spécifiquement pour son projet — incluant le code sur mesure, les poids de modèles spécifiques, la documentation et l\'architecture propre au projet.</p>
            <p><strong>Outils Préexistants &amp; Bibliothèques Standard :</strong> Le Client <em>n\'acquiert pas</em> la propriété et ne pourra revendiquer aucun droit sur les outils, frameworks, scripts, code boilerplate, bibliothèques internes, méthodologies ou savoir-faire préexistants développés par Aru Bhardwaj avant ou en dehors de la mission (collectivement, « Bibliothèques Standard »). Lorsque des Bibliothèques Standard sont intégrées aux Livrables Finaux, le Client bénéficie d\'une licence perpétuelle, mondiale, non-exclusive et libre de redevance pour les utiliser, modifier et distribuer uniquement en tant que partie intégrée du projet livré. Les Bibliothèques Standard restent la propriété exclusive d\'Aru Bhardwaj et peuvent être réutilisées dans d\'autres missions.</p>
            <p><strong>Composants Tiers :</strong> Les Livrables Finaux peuvent inclure des composants open-source et des API tierces (OpenAI, Anthropic, Mistral, SDK de providers cloud, etc.) régis par leurs licences et conditions respectives — ceux-ci restent soumis à leurs conditions d\'origine et sont transférés au Client en l\'état.</p>
            <p><strong>Matériaux Fournis par le Client :</strong> Le Client est responsable de s\'assurer qu\'il dispose des droits d\'utilisation de toutes données, contenus ou matériaux fournis pour le projet, et garantit que ces éléments ne violent pas de droits de tiers.</p>
          </div>
        )
      },
      {
        id: '7',
        title: '7. Confidentialité',
        body: (
          <p className="text-gray-700 leading-relaxed">
            Toutes les informations client, données et détails de projet seront tenus strictement confidentiels. Des accords de non-divulgation mutuels peuvent être signés sur demande et sont une pratique standard pour toute mission substantielle. Les données client, le code source, les idées produit et les documents internes ne seront pas partagés, vendus ou distribués à des tiers, et ne seront pas utilisés pour entraîner des modèles ou améliorer des services tiers sans consentement écrit explicite.
          </p>
        )
      },
      {
        id: '8',
        title: '8. Limitation de Responsabilité',
        body: (
          <div className="space-y-3 text-gray-700">
            <p>Bien que tout le soin professionnel raisonnable soit apporté à chaque livrable, la responsabilité est limitée au montant total payé par le Client pour le projet spécifique ou aux trois derniers mois de forfait, le montant le plus faible prévalant. Aru Bhardwaj n\'est pas responsable de :</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Dommages indirects, accessoires, spéciaux ou consécutifs</li>
              <li>Perte de profits, de revenus, de clientèle ou d\'opportunités commerciales</li>
              <li>Perte de données dues aux défaillances des systèmes Client ou aux sauvegardes gérées par le Client</li>
              <li>Interruptions de services tiers (providers cloud, API, éditeurs de modèles)</li>
              <li>Changements de comportement, tarification, dépréciation ou disponibilité des modèles tiers</li>
            </ul>
            <div className="bg-yellow-50 border-l-4 border-theme-gold p-4 mt-4">
              <p className="font-semibold mb-2"><strong>Avertissement sur les Sorties IA &amp; LLM :</strong></p>
              <p>Le Client reconnaît que les sorties des modèles d\'IA et LLM sont par nature <em>probabilistes</em> et peuvent produire du contenu inexact, biaisé ou halluciné. Bien qu\'Aru Bhardwaj applique les meilleures pratiques de l\'industrie (harnais d\'évaluation, grounding, filtres de sécurité, points de contrôle avec humain dans la boucle, et observabilité), le Client est seul responsable de la validation finale, de la revue humaine et du bon à tirer éditorial des contenus générés par IA avant toute utilisation publique, réglementaire ou commerciale. Cela inclut la conformité à l\'EU AI Act, aux réglementations sectorielles et aux politiques internes du Client.</p>
            </div>
          </div>
        )
      },
      {
        id: '9',
        title: '9. Résiliation',
        body: (
          <p className="text-gray-700 leading-relaxed">
            Chaque partie peut résilier une mission au projet avec un préavis écrit de 7 jours. Pour les forfaits Fractional CTO en cours, chaque partie peut résilier avec un préavis écrit de 30 jours afin de permettre une transition ordonnée. À la résiliation, le paiement est dû pour tous les travaux réalisés et tous les forfaits commencés jusqu\'à la date de résiliation. Tous les livrables achevés seront remis au Client après règlement du solde.
          </p>
        )
      },
      {
        id: '10',
        title: '10. Communication et Support',
        body: (
          <div className="space-y-3 text-gray-700">
            <p>Des mises à jour régulières seront fournies par email ou le canal de communication convenu (Slack, Teams, outils asynchrones). Le délai de réponse est généralement de 24-48 heures en jours ouvrés.</p>
            <p><strong>Horaires :</strong> Du lundi au vendredi, 9h00 à 18h00 CET. Les urgences hors horaires doivent être signalées explicitement.</p>
          </div>
        )
      },
      {
        id: '11',
        title: '11. Loi Applicable',
        body: (
          <p className="text-gray-700 leading-relaxed">
            Les présentes conditions sont régies par <strong>le droit français</strong>. Tout litige sera résolu d\'abord par négociation de bonne foi, puis — à défaut — par arbitrage à Paris, France, ou devant les tribunaux français compétents. Ce choix de juridiction est délibéré : il s\'aligne sur les principes de souveraineté des données de l\'UE et offre aux deux parties un cadre juridique neutre et bien établi.
          </p>
        )
      },
      {
        id: '12',
        title: '12. Coordonnées',
        body: (
          <div className="space-y-2 text-gray-700">
            <p><strong>Email :</strong> aru.bhardwaj@insightrix.eu</p>
            <p><strong>Téléphone :</strong> +33 (0) 766985210</p>
            <p><strong>Adresse :</strong> Paris, France</p>
          </div>
        )
      },
      {
        id: '13',
        title: '13. Rémunération Alternative (Success Fees & Equity)',
        body: (
          <div className="space-y-3 text-gray-700">
            <p>Lorsque spécifiquement convenu dans une Proposition de Projet ou un Accord de Partenariat, la rémunération peut inclure — en plus du service fee obligatoire — des success fees, primes de performance, revenue-share, incentives par jalons ou vesting d\'equity.</p>
            <p>Ces arrangements de rémunération alternative seront régis par un <strong>Pacte d\'Actionnaires</strong>, un <strong>Avenant Success Fee</strong> ou un <strong>Accord de Partenariat</strong> séparé signé entre les parties, qui prévaudra sur les présentes conditions générales en cas de conflit sur les questions de rémunération, vesting, cliffs, accélération et événements de sortie.</p>
            <p>Pour lever toute ambiguïté : <em>une composante service fee est toujours présente dans chaque mission</em>. Les arrangements purement en equity, purement en revenue-share ou purement en success fee sans composante cash ne sont pas proposés.</p>
          </div>
        )
      }
    ],
    outro: 'En engageant ces services, vous reconnaissez avoir lu, compris et accepté ces Conditions Générales. Ces conditions peuvent être mises à jour périodiquement, et les clients seront informés par email de toute modification substantielle au moins 30 jours avant leur entrée en vigueur pour les missions existantes.'
  },

  de: {
    pageTitle: 'Allgemeine Geschäftsbedingungen',
    lastUpdated: 'Zuletzt aktualisiert: 21. April 2026',
    languageNote: 'Verfügbar auf Englisch, Französisch, Deutsch und Italienisch. Bei Abweichungen zwischen den Übersetzungen hat die englische Fassung Vorrang.',
    sections: [
      {
        id: '1',
        title: '1. Übersicht der Vereinbarung',
        body: (
          <p className="text-gray-700 leading-relaxed">
            Diese Allgemeinen Geschäftsbedingungen regeln die von Aru Bhardwaj erbrachten professionellen Dienstleistungen — einschließlich Fractional-CTO-Engagements, KI- und Data-Science-Entwicklung, technischer Beratung und Infrastrukturimplementierung. Mit der Beauftragung dieser Dienstleistungen erklären Sie sich an diese Bedingungen sowie an jeden zwischen den Parteien unterzeichneten Project Proposal, Statement of Work oder separaten Vertrag gebunden.
          </p>
        )
      },
      {
        id: '2',
        title: '2. Erbrachte Leistungen',
        body: (
          <>
            <p className="text-gray-700 leading-relaxed mb-3">Zu den Leistungen gehören unter anderem:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><strong>Fractional-CTO-Leadership</strong> und technische Roadmap-Strategie</li>
              <li><strong>Infrastrukturarchitektur</strong> und Implementierung souveräner Cloud-Lösungen (OVHcloud, Scaleway, Hetzner, Multi-Cloud)</li>
              <li><strong>Technische Due Diligence</strong> und Beratung zur KI-Regulatorik (EU AI Act, DSGVO, NIS2, DORA)</li>
              <li>KI-, LLM- und generative KI-Entwicklung (ChatGPT, Claude, Gemini, Mistral, self-hosted Modelle)</li>
              <li>RAG-Pipelines, agentische Systeme und Vektor-Datenbank-Architektur</li>
              <li>Entwicklung von Machine-Learning-Modellen und Predictive Analytics</li>
              <li>MVP- und Rapid-Prototyping-Builds für Startups und Scale-ups</li>
              <li>Natural-Language-Processing- und Computer-Vision-Lösungen</li>
              <li>Data Engineering, ETL-Pipelines und Analyseplattformen</li>
            </ul>
          </>
        )
      },
      {
        id: '3',
        title: '3. Zahlungsbedingungen',
        body: (
          <div className="space-y-4 text-gray-700">
            <p><strong>Projektbasierte Engagements:</strong> Die Zahlungsbedingungen werden im Project Proposal festgelegt. Typischerweise erfordern Festpreisprojekte eine Vorauszahlung von 50 % vor Arbeitsbeginn, der Restbetrag ist bei Projektabschluss oder zu vereinbarten Meilensteinen fällig.</p>
            <p><strong>Retainer-Services:</strong> Für laufende Fractional-CTO-Engagements werden Rechnungen zu Beginn jedes Monats erstellt und sind innerhalb von 7 Tagen fällig. Die Leistungen können pausiert werden, wenn der Retainer nicht zum Fälligkeitsdatum beglichen ist. Retainer sind vorausbezahlt und nach Monatsbeginn nicht erstattungsfähig.</p>
            <p><strong>Beratungen:</strong> Einzelne Beratungen (30- oder 60-Minuten-Calls) werden vor der Terminvereinbarung vollständig über das Website-Buchungssystem im Voraus bezahlt.</p>
            <p><strong>Zahlungsverzug:</strong> Bei Zahlungsverzug können monatlich 2 % Verzugszinsen anfallen. Die Arbeit kann bei Konten mit mehr als 30 Tagen Verzug ausgesetzt werden und ausgesetzte Engagements können nach 60 Tagen Zahlungsverzug gekündigt werden, wobei alle Lieferergebnisse erst nach Begleichung des Außenstands freigegeben werden.</p>
            <p><strong>Währung &amp; MwSt.:</strong> Alle Zahlungen sind in EUR fällig, sofern nicht anders angegeben. Die französische TVA/MwSt. wird bei Bedarf hinzugefügt; EU-B2B-Kunden mit gültiger innergemeinschaftlicher USt-IdNr. profitieren vom Reverse-Charge-Verfahren gemäß Artikel 196 der EU-MwSt.-Richtlinie.</p>
          </div>
        )
      },
      {
        id: '4',
        title: '4. Rückerstattungsrichtlinie',
        body: (
          <>
            <div className="bg-yellow-50 border-l-4 border-theme-gold p-4 mb-4">
              <p className="text-gray-800 font-semibold">
                <strong>Wichtig:</strong> Rückerstattungen sind nach 15 Tagen ab Zahlungsdatum nicht mehr möglich. Diese Richtlinie gilt für alle Leistungen und Beratungen.
              </p>
            </div>
            <div className="space-y-3 text-gray-700">
              <p>Rückerstattungsanträge müssen innerhalb von 15 Tagen nach Zahlung eingereicht werden und werden im Einzelfall geprüft. Eine Rückerstattung kann nur erwogen werden, wenn:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Keine wesentlichen Arbeiten geliefert wurden</li>
                <li>Das Projekt aufgrund technischer Unmöglichkeit nicht abgeschlossen werden kann</li>
                <li>Eine einvernehmliche Beendigung des Projekts erreicht wird</li>
              </ul>
              <p><strong>Nur anteilige Rückerstattungen:</strong> Wenn eine Rückerstattung nach einvernehmlicher Beendigung gewährt wird, wird sie <em>anteilig</em> berechnet — bereits investierte Zeit, gelieferte Arbeiten und nicht wiedererlangbare Drittkosten (API-Credits, Cloud-Infrastruktur, Drittanbieter-Lizenzen, bezahlte Tools oder reservierte GPU-Kapazitäten) werden vom Rückerstattungsbetrag abgezogen.</p>
              <p><strong>Anzahlungen für Festpreis-Projekte:</strong> Die 50%-Anzahlung bei Festpreis-Projekten ist <em>nicht rückerstattungsfähig</em>, sobald die Arbeit begonnen hat. Diese Anzahlung deckt die unmittelbaren Engagement-Kosten, die Scoping- und Discovery-Zeit, die vorrangige Kalenderblockierung und die Ressourcenzuteilung ab — und ist auch bei einvernehmlicher Beendigung nicht erstattungsfähig.</p>
              <p>Auch teilweise gelieferte Arbeiten werden zum vereinbarten Stundensatz abgerechnet. Monatliche Retainer sind nach Rechnungsstellung und Monatsbeginn nicht erstattungsfähig.</p>
            </div>
          </>
        )
      },
      {
        id: '5',
        title: '5. Projektumfang und Änderungen',
        body: (
          <div className="space-y-3 text-gray-700">
            <p>Der Projektumfang wird im Project Proposal oder Statement of Work klar definiert. Änderungen müssen schriftlich vereinbart werden und können zusätzliche Kosten verursachen.</p>
            <p><strong>Änderungsanträge:</strong> Zusätzliche Arbeit über den ursprünglichen Umfang hinaus wird zum vereinbarten Stundensatz oder als separates Projekt abgerechnet.</p>
          </div>
        )
      },
      {
        id: '6',
        title: '6. Geistiges Eigentum',
        body: (
          <div className="space-y-3 text-gray-700">
            <p><strong>Endgültige Lieferergebnisse:</strong> Nach vollständiger Zahlung besitzt der Kunde alle Lieferergebnisse, die speziell für sein Projekt erstellt wurden — einschließlich maßgeschneiderter Code, projektspezifischer Modell-Gewichte, Dokumentation und Architektur.</p>
            <p><strong>Vorbestehende Tools &amp; Standard-Bibliotheken:</strong> Der Kunde erwirbt <em>keine</em> Eigentumsrechte und kann keine Ansprüche geltend machen auf vorbestehende Tools, Frameworks, Skripte, Boilerplate-Code, interne Bibliotheken, Methoden oder Know-how, die von Aru Bhardwaj vor oder außerhalb des Engagements erstellt wurden (zusammen: „Standard-Bibliotheken"). Werden Standard-Bibliotheken in die Endergebnisse integriert, erhält der Kunde eine unbefristete, weltweite, nicht-exklusive, gebührenfreie Lizenz zur Nutzung, Änderung und Verbreitung, jedoch ausschließlich als integraler Bestandteil des gelieferten Projekts. Standard-Bibliotheken bleiben ausschließliches Eigentum von Aru Bhardwaj und können in anderen Engagements wiederverwendet werden.</p>
            <p><strong>Komponenten Dritter:</strong> Endergebnisse können Open-Source-Komponenten und APIs Dritter (OpenAI, Anthropic, Mistral, Cloud-Provider-SDKs usw.) enthalten, die ihren jeweiligen Lizenzen und Bedingungen unterliegen — diese bleiben unter ihren Originalbedingungen und werden dem Kunden unverändert weitergegeben.</p>
            <p><strong>Vom Kunden bereitgestellte Materialien:</strong> Der Kunde ist dafür verantwortlich sicherzustellen, dass er das Recht zur Nutzung aller für das Projekt bereitgestellten Daten, Inhalte oder Materialien hat, und gewährleistet, dass diese keine Rechte Dritter verletzen.</p>
          </div>
        )
      },
      {
        id: '7',
        title: '7. Vertraulichkeit',
        body: (
          <p className="text-gray-700 leading-relaxed">
            Alle Kundendaten, Informationen und Projektdetails werden streng vertraulich behandelt. Gegenseitige Geheimhaltungsvereinbarungen können auf Anfrage unterzeichnet werden und sind gängige Praxis bei jedem substantiellen Engagement. Kundendaten, Quellcode, Produktideen und interne Dokumente werden nicht an Dritte weitergegeben, verkauft oder verteilt und werden nicht zum Trainieren von Modellen oder zur Verbesserung von Drittanbieter-Services ohne ausdrückliche schriftliche Zustimmung verwendet.
          </p>
        )
      },
      {
        id: '8',
        title: '8. Haftungsbeschränkung',
        body: (
          <div className="space-y-3 text-gray-700">
            <p>Obwohl bei jedem Liefergegenstand die zumutbare professionelle Sorgfalt angewendet wird, ist die Haftung auf den vom Kunden für das spezifische Projekt gezahlten Gesamtbetrag oder die Retainer-Gebühren der letzten drei Monate begrenzt — je nachdem, welcher Betrag niedriger ist. Aru Bhardwaj haftet nicht für:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Indirekte, zufällige, besondere oder Folgeschäden</li>
              <li>Entgangene Gewinne, Umsätze, Goodwill oder Geschäftschancen</li>
              <li>Datenverlust durch Systemausfälle oder vom Kunden verwaltete Backups</li>
              <li>Drittanbieter-Dienstunterbrechungen (Cloud-Provider, APIs, Modellanbieter)</li>
              <li>Änderungen im Verhalten, Pricing, Deprecation oder der Verfügbarkeit von Drittanbieter-Modellen</li>
            </ul>
            <div className="bg-yellow-50 border-l-4 border-theme-gold p-4 mt-4">
              <p className="font-semibold mb-2"><strong>Haftungsausschluss für KI- &amp; LLM-Ausgaben:</strong></p>
              <p>Der Kunde erkennt an, dass KI- und Large-Language-Model-Ausgaben von Natur aus <em>probabilistisch</em> sind und ungenaue, voreingenommene oder halluzinierte Inhalte erzeugen können. Obwohl Aru Bhardwaj branchenübliche Best-Practice-Guardrails implementiert (Evaluation Harnesses, Grounding, Sicherheitsfilter, Human-in-the-Loop-Checkpoints und Observability), ist der Kunde allein verantwortlich für die finale Validierung, menschliche Prüfung und redaktionelle Freigabe von KI-generierten Inhalten vor jeder öffentlichen, regulatorischen oder kommerziellen Nutzung. Dies umfasst die Einhaltung des EU AI Act, branchenspezifischer Regulierungen und interner Richtlinien des Kunden.</p>
            </div>
          </div>
        )
      },
      {
        id: '9',
        title: '9. Kündigung',
        body: (
          <p className="text-gray-700 leading-relaxed">
            Jede Partei kann ein Projekt-Engagement mit einer schriftlichen Kündigungsfrist von 7 Tagen kündigen. Für laufende Fractional-CTO-Retainer kann jede Partei mit einer schriftlichen Frist von 30 Tagen kündigen, um eine geordnete Übergabe zu ermöglichen. Bei Kündigung ist die Zahlung für alle abgeschlossenen Arbeiten und alle bis zum Kündigungsdatum begonnenen Retainer-Perioden fällig. Alle fertiggestellten Liefergegenstände werden dem Kunden nach Begleichung des Außenstands übergeben.
          </p>
        )
      },
      {
        id: '10',
        title: '10. Kommunikation und Support',
        body: (
          <div className="space-y-3 text-gray-700">
            <p>Regelmäßige Projekt-Updates erfolgen per E-Mail oder über den vereinbarten Kommunikationskanal (Slack, Teams, asynchrone Tools). Die Antwortzeit beträgt typischerweise 24-48 Stunden an Werktagen.</p>
            <p><strong>Geschäftszeiten:</strong> Montag bis Freitag, 9:00 bis 18:00 Uhr CET. Dringende Angelegenheiten außerhalb der Geschäftszeiten sind explizit zu kennzeichnen.</p>
          </div>
        )
      },
      {
        id: '11',
        title: '11. Anwendbares Recht',
        body: (
          <p className="text-gray-700 leading-relaxed">
            Diese Bedingungen unterliegen <strong>französischem Recht</strong>. Streitigkeiten werden zunächst durch gutgläubige Verhandlungen beigelegt, danach — falls ungelöst — durch Schiedsverfahren in Paris, Frankreich, oder durch die zuständigen französischen Gerichte. Diese Gerichtswahl ist bewusst getroffen: sie entspricht den EU-Datensouveränitätsprinzipien und bietet beiden Parteien einen neutralen, etablierten Rechtsrahmen.
          </p>
        )
      },
      {
        id: '12',
        title: '12. Kontaktinformationen',
        body: (
          <div className="space-y-2 text-gray-700">
            <p><strong>E-Mail:</strong> aru.bhardwaj@insightrix.eu</p>
            <p><strong>Telefon:</strong> +33 (0) 766985210</p>
            <p><strong>Adresse:</strong> Paris, Frankreich</p>
          </div>
        )
      },
      {
        id: '13',
        title: '13. Alternative Vergütung (Erfolgsprämien & Equity)',
        body: (
          <div className="space-y-3 text-gray-700">
            <p>Wo dies in einem Project Proposal oder Partnerschaftsvertrag ausdrücklich vereinbart wurde, kann die Vergütung — zusätzlich zur verpflichtenden Servicegebühr — Erfolgsprämien, Leistungsboni, Revenue-Share, meilensteinbasierte Anreize oder Equity-Vesting umfassen.</p>
            <p>Solche Vereinbarungen zu alternativer Vergütung werden durch einen separaten <strong>Gesellschaftervertrag</strong>, <strong>Erfolgsprämien-Nachtrag</strong> oder <strong>Partnerschaftsvertrag</strong> geregelt, der zwischen den Parteien unterzeichnet wird und diese allgemeinen Bedingungen bei Konflikten in Fragen der Vergütung, des Vesting, der Cliffs, der Beschleunigung und von Exit-Ereignissen ersetzt.</p>
            <p>Zur Klarstellung: <em>Eine Servicegebühr-Komponente ist in jedem Engagement immer vorhanden</em>. Reine Equity-, reine Revenue-Share- oder reine Erfolgsprämien-Vereinbarungen ohne Cash-Servicegebühr werden nicht angeboten.</p>
          </div>
        )
      }
    ],
    outro: 'Mit der Beauftragung dieser Dienstleistungen bestätigen Sie, diese Allgemeinen Geschäftsbedingungen gelesen, verstanden und akzeptiert zu haben. Diese Bedingungen können periodisch aktualisiert werden; Kunden werden per E-Mail über wesentliche Änderungen mindestens 30 Tage vor deren Inkrafttreten für bestehende Engagements informiert.'
  },

  it: {
    pageTitle: 'Termini e Condizioni',
    lastUpdated: 'Ultimo aggiornamento: 21 aprile 2026',
    languageNote: 'Disponibili in inglese, francese, tedesco e italiano. In caso di discrepanze tra le traduzioni, prevale la versione inglese.',
    sections: [
      {
        id: '1',
        title: '1. Panoramica dell\'Accordo',
        body: (
          <p className="text-gray-700 leading-relaxed">
            I presenti Termini e Condizioni regolano i servizi professionali forniti da Aru Bhardwaj — inclusi gli ingaggi Fractional CTO, lo sviluppo AI e data science, la consulenza tecnica e l\'implementazione di infrastrutture. Con l\'attivazione di tali servizi, accetti di essere vincolato da questi termini insieme a qualsiasi Project Proposal, Statement of Work o accordo separato firmato tra le parti.
          </p>
        )
      },
      {
        id: '2',
        title: '2. Servizi Offerti',
        body: (
          <>
            <p className="text-gray-700 leading-relaxed mb-3">I servizi includono, a titolo esemplificativo:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><strong>Leadership Fractional CTO</strong> e strategia di roadmap tecnica</li>
              <li><strong>Architettura di Infrastruttura</strong> e implementazione di Cloud Sovrano (OVHcloud, Scaleway, Hetzner, multi-cloud)</li>
              <li><strong>Due Diligence Tecnica</strong> e consulenza di conformità regolatoria AI (EU AI Act, GDPR, NIS2, DORA)</li>
              <li>Sviluppo AI, LLM e AI generativa (ChatGPT, Claude, Gemini, Mistral, modelli self-hosted)</li>
              <li>Pipeline RAG, sistemi agentici e architettura di vector database</li>
              <li>Sviluppo di modelli di machine learning e analisi predittiva</li>
              <li>MVP e rapid prototyping per startup e scale-up</li>
              <li>Soluzioni di Natural Language Processing e Computer Vision</li>
              <li>Data engineering, pipeline ETL e piattaforme analitiche</li>
            </ul>
          </>
        )
      },
      {
        id: '3',
        title: '3. Termini di Pagamento',
        body: (
          <div className="space-y-4 text-gray-700">
            <p><strong>Ingaggi a Progetto:</strong> I termini di pagamento saranno specificati nel Project Proposal. Tipicamente, i progetti a scope fisso richiedono un pagamento anticipato del 50% prima dell\'inizio del lavoro, con il saldo dovuto al completamento o alle milestone concordate.</p>
            <p><strong>Servizi a Forfait Mensile (Retainer):</strong> Per gli ingaggi Fractional CTO continuativi, le fatture vengono emesse all\'inizio di ogni mese e sono dovute entro 7 giorni. I servizi possono essere sospesi se il retainer non viene saldato entro la scadenza. I retainer sono prepagati e non rimborsabili una volta iniziato il mese.</p>
            <p><strong>Consulenze:</strong> Le consulenze singole (call da 30 o 60 minuti) sono prepagate integralmente tramite il sistema di prenotazione del sito prima della pianificazione della sessione.</p>
            <p><strong>Ritardi di Pagamento:</strong> I ritardi possono comportare un interesse del 2% mensile. Il lavoro può essere sospeso per conti con più di 30 giorni di ritardo e gli ingaggi sospesi possono essere terminati dopo 60 giorni di mancato pagamento, con i deliverable rilasciati solo dopo il saldo del debito.</p>
            <p><strong>Valuta &amp; IVA:</strong> Tutti i pagamenti sono dovuti in EUR salvo diversa indicazione. La TVA/IVA francese viene aggiunta dove applicabile; i clienti B2B UE con un numero IVA intracomunitario valido beneficiano del reverse charge ai sensi dell\'Articolo 196 della Direttiva IVA UE.</p>
          </div>
        )
      },
      {
        id: '4',
        title: '4. Politica di Rimborso',
        body: (
          <>
            <div className="bg-yellow-50 border-l-4 border-theme-gold p-4 mb-4">
              <p className="text-gray-800 font-semibold">
                <strong>Importante:</strong> I rimborsi non sono possibili oltre 15 giorni dalla data del pagamento. Questa politica si applica a tutti i servizi e consulenze.
              </p>
            </div>
            <div className="space-y-3 text-gray-700">
              <p>Le richieste di rimborso devono essere presentate entro 15 giorni dal pagamento e saranno valutate caso per caso. Un rimborso può essere considerato solo se:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Non è stato consegnato alcun lavoro sostanziale</li>
                <li>Il progetto non può essere completato a causa di impossibilità tecnica</li>
                <li>Si raggiunge un accordo reciproco di cessazione</li>
              </ul>
              <p><strong>Rimborsi solo prorata:</strong> Quando un rimborso viene concesso a seguito di cessazione reciproca, sarà calcolato <em>prorata</em> — il tempo già investito, il lavoro consegnato e i costi di terze parti non recuperabili (crediti API, infrastruttura cloud, licenze di terze parti, strumenti a pagamento o capacità GPU riservata) saranno dedotti dall\'importo rimborsato.</p>
              <p><strong>Acconti su progetti a prezzo fisso:</strong> L\'acconto del 50% sui progetti a prezzo fisso è <em>non rimborsabile</em> una volta iniziati i lavori. Questo acconto copre il costo immediato dell\'ingaggio, il tempo di scoping e discovery, il blocco prioritario del calendario e l\'allocazione delle risorse — e non è recuperabile nemmeno in caso di cessazione reciproca.</p>
              <p>Anche il lavoro parzialmente consegnato verrà fatturato alla tariffa oraria concordata. I retainer mensili, una volta fatturati e iniziato il mese, non sono rimborsabili.</p>
            </div>
          </>
        )
      },
      {
        id: '5',
        title: '5. Scope del Progetto e Modifiche',
        body: (
          <div className="space-y-3 text-gray-700">
            <p>Lo scope del progetto sarà chiaramente definito nel Project Proposal o Statement of Work. Qualsiasi modifica deve essere concordata per iscritto e può comportare costi aggiuntivi.</p>
            <p><strong>Richieste di Modifica:</strong> Il lavoro aggiuntivo oltre lo scope iniziale sarà fatturato alla tariffa oraria concordata o come progetto separato.</p>
          </div>
        )
      },
      {
        id: '6',
        title: '6. Proprietà Intellettuale',
        body: (
          <div className="space-y-3 text-gray-700">
            <p><strong>Deliverable Finali:</strong> A saldo completo, il Cliente possiederà tutti i deliverable finali creati specificamente per il suo progetto — inclusi codice custom, pesi di modelli specifici, documentazione e architettura dedicata al progetto.</p>
            <p><strong>Strumenti Preesistenti &amp; Librerie Standard:</strong> Il Cliente <em>non</em> acquisisce la proprietà e non potrà rivendicare diritti su strumenti, framework, script, codice boilerplate, librerie interne, metodologie o know-how preesistenti creati da Aru Bhardwaj prima o al di fuori dell\'ingaggio (collettivamente, "Librerie Standard"). Quando le Librerie Standard vengono incorporate nei Deliverable Finali, al Cliente viene concessa una licenza perpetua, mondiale, non esclusiva e royalty-free per utilizzarle, modificarle e distribuirle unicamente come parte integrata del progetto consegnato. Le Librerie Standard rimangono proprietà esclusiva di Aru Bhardwaj e possono essere riutilizzate in altri ingaggi.</p>
            <p><strong>Componenti di Terze Parti:</strong> I Deliverable Finali possono includere componenti open-source e API di terze parti (OpenAI, Anthropic, Mistral, SDK di cloud provider, ecc.) soggetti alle rispettive licenze e termini — questi rimangono soggetti ai termini originali e vengono trasferiti al Cliente così come sono.</p>
            <p><strong>Materiali Forniti dal Cliente:</strong> Il Cliente è responsabile di garantire il diritto di utilizzo di tutti i dati, contenuti o materiali forniti per il progetto, e garantisce che tali materiali non violino diritti di terzi.</p>
          </div>
        )
      },
      {
        id: '7',
        title: '7. Riservatezza',
        body: (
          <p className="text-gray-700 leading-relaxed">
            Tutte le informazioni cliente, i dati e i dettagli di progetto saranno trattati con la massima riservatezza. Accordi di non divulgazione reciproci possono essere firmati su richiesta e sono prassi standard per qualsiasi ingaggio sostanziale. I dati cliente, il codice sorgente, le idee di prodotto e i documenti interni non saranno condivisi, venduti o distribuiti a terzi, e non saranno utilizzati per addestrare modelli o migliorare servizi di terze parti senza il consenso scritto esplicito.
          </p>
        )
      },
      {
        id: '8',
        title: '8. Limitazione di Responsabilità',
        body: (
          <div className="space-y-3 text-gray-700">
            <p>Pur prestando ogni ragionevole cura professionale in ogni deliverable, la responsabilità è limitata all\'importo totale pagato dal Cliente per il progetto specifico o ai tre mesi precedenti di retainer, a seconda di quale sia inferiore. Aru Bhardwaj non è responsabile per:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Danni indiretti, incidentali, speciali o consequenziali</li>
              <li>Perdita di profitti, ricavi, avviamento o opportunità commerciali</li>
              <li>Perdita di dati dovuta a guasti dei sistemi Cliente o a backup gestiti dal Cliente</li>
              <li>Interruzioni di servizi di terze parti (cloud provider, API, vendor di modelli)</li>
              <li>Cambiamenti nel comportamento, pricing, deprecazione o disponibilità di modelli di terze parti</li>
            </ul>
            <div className="bg-yellow-50 border-l-4 border-theme-gold p-4 mt-4">
              <p className="font-semibold mb-2"><strong>Disclaimer per Output AI &amp; LLM:</strong></p>
              <p>Il Cliente riconosce che gli output di modelli AI e LLM sono intrinsecamente <em>probabilistici</em> e possono produrre contenuti inesatti, biased o allucinati. Pur implementando i migliori guardrail di settore (evaluation harness, grounding, filtri di sicurezza, checkpoint human-in-the-loop e observability), il Cliente è l\'unico responsabile della validazione finale, della revisione umana e del sign-off editoriale dei contenuti generati da AI prima di qualsiasi uso pubblico, regolatorio o commerciale. Ciò include la conformità con l\'EU AI Act, le regolamentazioni settoriali e le policy interne del Cliente.</p>
            </div>
          </div>
        )
      },
      {
        id: '9',
        title: '9. Cessazione',
        body: (
          <p className="text-gray-700 leading-relaxed">
            Ciascuna parte può terminare un ingaggio a progetto con preavviso scritto di 7 giorni. Per i retainer Fractional CTO continuativi, ciascuna parte può terminare con preavviso scritto di 30 giorni per consentire un passaggio ordinato. Alla cessazione, il pagamento è dovuto per tutti i lavori completati e tutti i periodi di retainer iniziati fino alla data di cessazione. Tutti i deliverable completati saranno consegnati al Cliente al saldo del debito residuo.
          </p>
        )
      },
      {
        id: '10',
        title: '10. Comunicazione e Supporto',
        body: (
          <div className="space-y-3 text-gray-700">
            <p>Aggiornamenti regolari saranno forniti via email o tramite il canale di comunicazione concordato (Slack, Teams, strumenti asincroni). Il tempo di risposta è tipicamente 24-48 ore nei giorni lavorativi.</p>
            <p><strong>Orari:</strong> Lunedì-Venerdì, 9:00-18:00 CET. Le urgenze fuori orario devono essere segnalate esplicitamente.</p>
          </div>
        )
      },
      {
        id: '11',
        title: '11. Legge Applicabile',
        body: (
          <p className="text-gray-700 leading-relaxed">
            I presenti termini sono regolati dalla <strong>legge francese</strong>. Qualsiasi controversia sarà risolta prima tramite negoziazione in buona fede, poi — se non risolta — tramite arbitrato a Parigi, Francia, o presso i tribunali francesi competenti. Questa scelta di giurisdizione è deliberata: si allinea ai principi UE di sovranità dei dati e offre a entrambe le parti un quadro giuridico neutrale e ben consolidato.
          </p>
        )
      },
      {
        id: '12',
        title: '12. Informazioni di Contatto',
        body: (
          <div className="space-y-2 text-gray-700">
            <p><strong>Email:</strong> aru.bhardwaj@insightrix.eu</p>
            <p><strong>Telefono:</strong> +33 (0) 766985210</p>
            <p><strong>Indirizzo:</strong> Parigi, Francia</p>
          </div>
        )
      },
      {
        id: '13',
        title: '13. Compensi Alternativi (Success Fee & Equity)',
        body: (
          <div className="space-y-3 text-gray-700">
            <p>Ove specificamente concordato in un Project Proposal o Accordo di Partnership, il compenso può includere — oltre al service fee obbligatorio — success fee, bonus di performance, revenue-share, incentivi basati su milestone o vesting di equity.</p>
            <p>Tali accordi di compenso alternativo saranno regolati da un <strong>Patto Parasociale</strong>, un <strong>Addendum Success Fee</strong> o un <strong>Accordo di Partnership</strong> separato firmato tra le parti, che prevarrà sui presenti termini generali in caso di conflitto su materie di compenso, vesting, cliff, accelerazione ed eventi di exit.</p>
            <p>Per chiarezza: <em>una componente di service fee è sempre presente in ogni ingaggio</em>. Accordi puramente in equity, puramente in revenue-share o puramente in success fee senza componente cash non sono offerti.</p>
          </div>
        )
      }
    ],
    outro: 'Attivando questi servizi, riconosci di aver letto, compreso e accettato i presenti Termini e Condizioni. Questi termini possono essere aggiornati periodicamente e i clienti saranno informati via email di qualsiasi modifica sostanziale almeno 30 giorni prima della sua entrata in vigore per gli ingaggi esistenti.'
  }
};

const TermsAndConditions = () => {
  const { language } = useLanguage();
  const content = TERMS[language];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{content.pageTitle} | Aru Bhardwaj — Fractional CTO</title>
        <meta name="description" content="Terms and conditions for Fractional CTO services, AI development, sovereign LLM infrastructure, and technical advisory provided by Aru Bhardwaj, Paris." />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://arubhardwaj.eu/terms-and-conditions" />
      </Helmet>
      <Navbar />
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-theme-olive text-center mb-4">
                {content.pageTitle}
              </CardTitle>
              <p className="text-center text-gray-600">
                {content.lastUpdated}
              </p>
              <p className="text-center text-xs text-gray-500 italic mt-2">
                {content.languageNote}
              </p>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <div className="space-y-8">
                {content.sections.map((section, idx) => (
                  <React.Fragment key={section.id}>
                    <section>
                      <h2 className="text-2xl font-semibold text-theme-olive mb-4">{section.title}</h2>
                      {section.body}
                    </section>
                    {idx < content.sections.length - 1 && <Separator />}
                  </React.Fragment>
                ))}

                <div className="mt-8 p-4 bg-theme-lime/20 rounded-lg">
                  <p className="text-sm text-gray-600">{content.outro}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsAndConditions;

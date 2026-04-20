import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Terms and Conditions | Aru Bhardwaj — Fractional CTO</title>
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
                Terms and Conditions
              </CardTitle>
              <p className="text-center text-gray-600">
                Last updated: 20 April 2026
              </p>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-semibold text-theme-olive mb-4">1. Agreement Overview</h2>
                  <p className="text-gray-700 leading-relaxed">
                    These Terms and Conditions govern the professional services provided by Aru Bhardwaj
                    — including Fractional CTO engagements, AI and data science development, technical
                    advisory, and infrastructure implementation. By engaging these services, you agree to
                    be bound by these terms alongside any Project Proposal, Statement of Work, or
                    separate agreement signed between the parties.
                  </p>
                </section>

                <Separator />

                <section>
                  <h2 className="text-2xl font-semibold text-theme-olive mb-4">2. Services Provided</h2>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Services include, but are not limited to:
                  </p>
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
                </section>

                <Separator />

                <section>
                  <h2 className="text-2xl font-semibold text-theme-olive mb-4">3. Payment Terms</h2>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      <strong>Project-Based Engagements:</strong> Payment terms will be specified in the
                      Project Proposal. Typically, fixed-scope projects require 50% upfront payment before
                      work begins, with the remainder due upon project completion or at agreed milestones.
                    </p>
                    <p>
                      <strong>Retainer Services:</strong> For ongoing Fractional CTO engagements,
                      invoices are issued at the beginning of each month and are due within 7 days.
                      Services may be paused if the retainer is not settled by the invoice due date.
                      Retainers are prepaid and non-refundable once the month has commenced.
                    </p>
                    <p>
                      <strong>Consultations:</strong> One-off consultations (30 or 60 minute calls) are
                      prepaid in full via the website booking flow before the session is scheduled.
                    </p>
                    <p>
                      <strong>Late Payments:</strong> Late payments may incur a 2% monthly service charge.
                      Work may be suspended for accounts more than 30 days overdue and suspended engagements
                      may be terminated after 60 days of non-payment, with all deliverables released only
                      after the outstanding balance is cleared.
                    </p>
                    <p>
                      <strong>Currency &amp; VAT:</strong> All payments are due in EUR unless otherwise
                      specified. French TVA/VAT is added where applicable; EU B2B clients with a valid
                      intra-community VAT number benefit from reverse charge per Article 196 of the EU
                      VAT Directive.
                    </p>
                  </div>
                </section>

                <Separator />

                <section>
                  <h2 className="text-2xl font-semibold text-theme-olive mb-4">4. Refund Policy</h2>
                  <div className="bg-yellow-50 border-l-4 border-theme-gold p-4 mb-4">
                    <p className="text-gray-800 font-semibold">
                      <strong>Important:</strong> Refunds are not possible after 15 days from the date of
                      payment. This policy applies to all services and consultations.
                    </p>
                  </div>
                  <div className="space-y-3 text-gray-700">
                    <p>
                      Refund requests must be submitted within 15 days of payment and will be evaluated
                      on a case-by-case basis. Refunds may be considered only if:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>No substantial work has been delivered</li>
                      <li>The project cannot be completed due to technical impossibility</li>
                      <li>Mutual agreement to terminate the project is reached</li>
                    </ul>
                    <p>
                      Even partial work delivered will be charged at the agreed hourly rate. Monthly
                      retainers, once invoiced and the month commenced, are non-refundable.
                    </p>
                  </div>
                </section>

                <Separator />

                <section>
                  <h2 className="text-2xl font-semibold text-theme-olive mb-4">5. Project Scope and Changes</h2>
                  <div className="space-y-3 text-gray-700">
                    <p>
                      Project scope will be clearly defined in the Project Proposal or Statement of Work.
                      Any changes to the scope must be agreed upon in writing and may result in additional
                      charges.
                    </p>
                    <p>
                      <strong>Change Requests:</strong> Additional work beyond the original scope will be
                      billed at the agreed hourly rate or as a separate project.
                    </p>
                  </div>
                </section>

                <Separator />

                <section>
                  <h2 className="text-2xl font-semibold text-theme-olive mb-4">6. Intellectual Property</h2>
                  <div className="space-y-3 text-gray-700">
                    <p>
                      <strong>Final Deliverables:</strong> Upon full payment, the Client will own all
                      final deliverables created specifically for their project — including custom code,
                      bespoke model weights, documentation, and project-specific architecture.
                    </p>
                    <p>
                      <strong>Pre-Existing Tools &amp; Standard Libraries:</strong> The Client does
                      <em> not</em> acquire ownership of, and shall not claim rights over, any pre-existing
                      tools, frameworks, scripts, boilerplate code, internal libraries, methodologies, or
                      know-how authored by Aru Bhardwaj prior to or outside the scope of the engagement
                      (collectively, "Standard Libraries"). Where Standard Libraries are incorporated into
                      Final Deliverables, the Client is granted a perpetual, worldwide, non-exclusive,
                      royalty-free licence to use, modify, and distribute them solely as an integrated
                      part of the delivered project. Standard Libraries remain the sole property of Aru
                      Bhardwaj and may be reused in other engagements.
                    </p>
                    <p>
                      <strong>Third-Party Components:</strong> Final Deliverables may include open-source
                      components and third-party APIs (OpenAI, Anthropic, Mistral, cloud provider SDKs,
                      etc.) governed by their respective licences and terms — those remain under their
                      original terms and are passed through to the Client as-is.
                    </p>
                    <p>
                      <strong>Client-Provided Materials:</strong> The Client is responsible for ensuring
                      they have the right to use any data, content, or materials provided for the project,
                      and warrants that such materials do not infringe third-party rights.
                    </p>
                  </div>
                </section>

                <Separator />

                <section>
                  <h2 className="text-2xl font-semibold text-theme-olive mb-4">7. Confidentiality</h2>
                  <p className="text-gray-700 leading-relaxed">
                    All client information, data, and project details will be kept strictly confidential.
                    Mutual non-disclosure agreements may be signed upon request and are standard practice
                    for any substantial engagement. Client data, source code, product ideas, and internal
                    documents will not be shared, sold, or distributed to third parties, and will not be
                    used to train models or improve third-party services without explicit written consent.
                  </p>
                </section>

                <Separator />

                <section>
                  <h2 className="text-2xl font-semibold text-theme-olive mb-4">8. Limitation of Liability</h2>
                  <div className="space-y-3 text-gray-700">
                    <p>
                      While all reasonable professional care is taken in every deliverable, liability is
                      limited to the total amount paid by the Client for the specific project or the
                      preceding three months of retainer fees, whichever is lower. Aru Bhardwaj is not
                      responsible for:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Indirect, incidental, special, or consequential damages</li>
                      <li>Loss of profits, revenue, goodwill, or business opportunities</li>
                      <li>Data loss due to Client system failures or Client-managed backups</li>
                      <li>Third-party service interruptions (cloud providers, APIs, model vendors)</li>
                      <li>Changes in third-party model behaviour, pricing, deprecation, or availability</li>
                    </ul>
                    <div className="bg-yellow-50 border-l-4 border-theme-gold p-4 mt-4">
                      <p className="font-semibold mb-2"><strong>AI &amp; LLM Output Disclaimer:</strong></p>
                      <p>
                        The Client acknowledges that AI and Large Language Model (LLM) outputs are
                        inherently <em>probabilistic</em> and may produce inaccurate, biased, or
                        hallucinated content. While Aru Bhardwaj implements industry best-practice
                        guardrails (evaluation harnesses, grounding, safety filters, human-in-the-loop
                        checkpoints, and observability), the Client is solely responsible for final
                        validation, human review, and editorial sign-off of AI-generated content before
                        any public, regulatory, or commercial use. This includes compliance with the
                        EU AI Act, sector-specific regulations, and Client's own internal policies.
                      </p>
                    </div>
                  </div>
                </section>

                <Separator />

                <section>
                  <h2 className="text-2xl font-semibold text-theme-olive mb-4">9. Termination</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Either party may terminate a project engagement with 7 days written notice. For
                    ongoing Fractional CTO retainers, either party may terminate with 30 days written
                    notice to allow an orderly handover. Upon termination, payment is due for all work
                    completed and all retainer periods commenced up to the termination date. All
                    deliverables completed will be provided to the Client upon settlement of the
                    outstanding balance.
                  </p>
                </section>

                <Separator />

                <section>
                  <h2 className="text-2xl font-semibold text-theme-olive mb-4">10. Communication and Support</h2>
                  <div className="space-y-3 text-gray-700">
                    <p>
                      Regular project updates will be provided via email or the agreed communication
                      channel (Slack, Teams, async tools). Response time for communications is typically
                      24-48 hours during business days.
                    </p>
                    <p>
                      <strong>Business Hours:</strong> Monday to Friday, 9:00 AM to 6:00 PM CET.
                      Urgent matters outside business hours should be flagged explicitly.
                    </p>
                  </div>
                </section>

                <Separator />

                <section>
                  <h2 className="text-2xl font-semibold text-theme-olive mb-4">11. Governing Law</h2>
                  <p className="text-gray-700 leading-relaxed">
                    These terms are governed by <strong>French law</strong>. Any disputes will be
                    resolved through good-faith negotiation first, then — if unresolved — through
                    arbitration in Paris, France, or the competent French courts. This jurisdiction
                    choice is deliberate: it aligns with EU data-sovereignty principles and provides
                    both parties with a neutral, well-established legal framework.
                  </p>
                </section>

                <Separator />

                <section>
                  <h2 className="text-2xl font-semibold text-theme-olive mb-4">12. Contact Information</h2>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>Email:</strong> aru.bhardwaj@insightrix.eu</p>
                    <p><strong>Phone:</strong> +33 (0) 766985210</p>
                    <p><strong>Address:</strong> Paris, France</p>
                  </div>
                </section>

                <Separator />

                <section>
                  <h2 className="text-2xl font-semibold text-theme-olive mb-4">13. Alternative Compensation (Success Fees &amp; Equity)</h2>
                  <div className="space-y-3 text-gray-700">
                    <p>
                      Where specifically agreed in a Project Proposal or Partnership Agreement,
                      compensation may include — in addition to the mandatory service fee — success
                      fees, performance bonuses, revenue-share, milestone-based incentives, or equity
                      vesting.
                    </p>
                    <p>
                      Such alternative-compensation arrangements will be governed by a separate
                      <strong> Shareholders&apos; Agreement</strong>, <strong>Success Fee Addendum</strong>,
                      or <strong>Partnership Agreement</strong> signed between the parties, which shall
                      supersede these general terms where they conflict on matters of compensation,
                      vesting, cliffs, acceleration, and exit events.
                    </p>
                    <p>
                      For the avoidance of doubt: <em>a service fee component is always present in
                      every engagement</em>. Pure-equity, pure-revenue-share, or pure-success-fee
                      arrangements without a cash service-fee component are not offered.
                    </p>
                  </div>
                </section>

                <div className="mt-8 p-4 bg-theme-lime/20 rounded-lg">
                  <p className="text-sm text-gray-600">
                    By engaging these services, you acknowledge that you have read, understood, and
                    agree to these Terms and Conditions. These terms may be updated periodically, and
                    clients will be notified by email of any material changes at least 30 days before
                    they take effect for existing engagements.
                  </p>
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

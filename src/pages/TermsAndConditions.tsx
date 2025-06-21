import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-theme-olive text-center mb-4">
                Terms and Conditions
              </CardTitle>
              <p className="text-center text-gray-600">
                Last updated: 31 January 2025
              </p>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-semibold text-theme-olive mb-4">1. Agreement Overview</h2>
                  <p className="text-gray-700 leading-relaxed">
                    These Terms and Conditions govern the professional services provided by Aru Bhardwaj 
                    for data science, machine learning, and AI consulting projects. By engaging our services, 
                    you agree to be bound by these terms.
                  </p>
                </section>

                <Separator />

                <section>
                  <h2 className="text-2xl font-semibold text-theme-olive mb-4">2. Services Provided</h2>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Our services include but are not limited to:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Data Science and Analytics Consulting</li>
                    <li>Machine Learning Model Development</li>
                    <li>Natural Language Processing Solutions</li>
                    <li>Predictive Analytics Implementation</li>
                    <li>AI Strategy Consulting</li>
                    <li>Data Visualization and Business Intelligence</li>
                  </ul>
                </section>

                <Separator />

                <section>
                  <h2 className="text-2xl font-semibold text-theme-olive mb-4">3. Payment Terms</h2>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      <strong>Payment Schedule:</strong> Payment terms will be specified in the project proposal. 
                      Typically, projects require 50% upfront payment before work begins, with the remainder 
                      due upon project completion.
                    </p>
                    <p>
                      <strong>Late Payments:</strong> Late payments may incur a 2% monthly service charge. 
                      Work may be suspended for accounts more than 30 days overdue.
                    </p>
                    <p>
                      <strong>Currency:</strong> All payments are due in EUR unless otherwise specified.
                    </p>
                  </div>
                </section>

                <Separator />

                <section>
                  <h2 className="text-2xl font-semibold text-theme-olive mb-4">4. Refund Policy</h2>
                  <div className="bg-yellow-50 border-l-4 border-theme-gold p-4 mb-4">
                    <p className="text-gray-800 font-semibold">
                      <strong>Important:</strong> Refunds are not possible after 15 days from the date of payment. 
                      This policy applies to all services and consultations.
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
                      Even the partial work done will be charged according to the hourly rate.
                    </p>
                  </div>
                </section>

                <Separator />

                <section>
                  <h2 className="text-2xl font-semibold text-theme-olive mb-4">5. Project Scope and Changes</h2>
                  <div className="space-y-3 text-gray-700">
                    <p>
                      Project scope will be clearly defined in the project proposal. Any changes to the 
                      scope must be agreed upon in writing and may result in additional charges.
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
                      Upon full payment, the client will own all deliverables created specifically for 
                      their project. However, general methodologies, techniques, and knowledge gained 
                      remain the property of Aru Bhardwaj.
                    </p>
                    <p>
                      The client is responsible for ensuring they have the right to use any data, 
                      content, or materials provided for the project.
                    </p>
                  </div>
                </section>

                <Separator />

                <section>
                  <h2 className="text-2xl font-semibold text-theme-olive mb-4">7. Confidentiality</h2>
                  <p className="text-gray-700 leading-relaxed">
                    All client information, data, and project details will be kept strictly confidential. 
                    Non-disclosure agreements may be signed upon request. We will not share, sell, or 
                    distribute any client data or project information to third parties.
                  </p>
                </section>

                <Separator />

                <section>
                  <h2 className="text-2xl font-semibent text-theme-olive mb-4">8. Limitation of Liability</h2>
                  <div className="space-y-3 text-gray-700">
                    <p>
                      While we strive for excellence in all deliverables, our liability is limited to 
                      the amount paid for the specific project. We are not responsible for:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Indirect or consequential damages</li>
                      <li>Loss of profits or business opportunities</li>
                      <li>Data loss due to client system failures</li>
                      <li>Third-party service interruptions</li>
                    </ul>
                  </div>
                </section>

                <Separator />

                <section>
                  <h2 className="text-2xl font-semibold text-theme-olive mb-4">9. Termination</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Either party may terminate the agreement with 7 days written notice. Upon termination, 
                    payment is due for all work completed up to the termination date. All deliverables 
                    completed will be provided to the client upon full payment.
                  </p>
                </section>

                <Separator />

                <section>
                  <h2 className="text-2xl font-semibold text-theme-olive mb-4">10. Communication and Support</h2>
                  <div className="space-y-3 text-gray-700">
                    <p>
                      Regular project updates will be provided via email or agreed communication channels. 
                      Response time for communications is typically 24-48 hours during business days.
                    </p>
                    <p>
                      <strong>Business Hours:</strong> Monday to Friday, 9:00 AM to 6:00 PM CET
                    </p>
                  </div>
                </section>

                <Separator />

                <section>
                  <h2 className="text-2xl font-semibold text-theme-olive mb-4">11. Governing Law</h2>
                  <p className="text-gray-700 leading-relaxed">
                    These terms are governed by French law. Any disputes will be resolved through 
                    arbitration in Paris, France, or through the appropriate courts in France.
                  </p>
                </section>

                <Separator />

                <section>
                  <h2 className="text-2xl font-semibold text-theme-olive mb-4">12. Contact Information</h2>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>Email:</strong> aru.bhardwaj@insighrix.eu</p>
                    <p><strong>Phone:</strong> +33 (0) 766985210</p>
                    <p><strong>Address:</strong> Paris, France</p>
                  </div>
                </section>

                <div className="mt-8 p-4 bg-theme-lime/20 rounded-lg">
                  <p className="text-sm text-gray-600">
                    By engaging our services, you acknowledge that you have read, understood, and agree 
                    to these Terms and Conditions. These terms may be updated periodically, and clients 
                    will be notified of any significant changes.
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

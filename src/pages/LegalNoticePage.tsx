import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const LegalNoticePage = () => (
  <div className="min-h-screen bg-background">
    <Helmet>
      <title>Legal Notice / Mentions Légales | Insightrix SAS</title>
      <meta name="description" content="Legal information for Insightrix SAS — Paris-based AI consulting firm. SIRET, TVA, registered address, hosting, and publication director per French law." />
      <meta name="robots" content="noindex, follow" />
      <link rel="canonical" href="https://arubhardwaj.eu/legal-notice" />
    </Helmet>
    <Navbar />
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-theme-olive hover:text-theme-gold transition-colors mb-6">
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-theme-olive text-center mb-2">
              Legal Notice / Mentions Légales
            </CardTitle>
            <p className="text-center text-sm text-gray-500">
              Published pursuant to Article 6 III of the French Law for Confidence in the Digital Economy (LCEN) of 21 June 2004.
            </p>
          </CardHeader>
          <CardContent className="prose prose-gray max-w-none">
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-theme-olive mb-4">1. Publisher / Éditeur</h2>
                <div className="space-y-1 text-gray-700">
                  <p><strong>Company name / Raison sociale:</strong> Insightrix SAS</p>
                  <p><strong>Legal form / Forme juridique:</strong> Société par Actions Simplifiée (SAS)</p>
                  <p><strong>Registered office / Siège social:</strong> 60 Rue François Ier, 75008 Paris, France</p>
                  <p><strong>SIRET:</strong> 989 236 856 00013</p>
                  <p><strong>SIREN:</strong> 989 236 856</p>
                  <p><strong>Intra-community VAT / TVA intracommunautaire:</strong> FR42989236856</p>
                  <p><strong>President / Président:</strong> Aru Bhardwaj</p>
                  <p><strong>Publication director / Directeur de la publication:</strong> Aru Bhardwaj</p>
                  <p><strong>Email:</strong> <a href="mailto:aru.bhardwaj@insightrix.eu" className="text-theme-olive underline hover:text-theme-gold">aru.bhardwaj@insightrix.eu</a></p>
                  <p><strong>Phone / Téléphone:</strong> +33 (0) 766985210</p>
                </div>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold text-theme-olive mb-4">2. Hosting / Hébergement</h2>
                <div className="space-y-1 text-gray-700">
                  <p><strong>Host / Hébergeur:</strong> Vercel Inc.</p>
                  <p><strong>Address:</strong> 440 N Barranca Ave #4133, Covina, CA 91723, United States</p>
                  <p><strong>Website:</strong> <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-theme-olive underline hover:text-theme-gold">vercel.com</a></p>
                </div>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold text-theme-olive mb-4">3. Intellectual Property / Propriété Intellectuelle</h2>
                <p className="text-gray-700 leading-relaxed">
                  The entire arubhardwaj.eu website — including its structure, content, text, images, logos, graphics, and software — is the exclusive property of Insightrix SAS or its licensors. Any reproduction, representation, modification, publication, or transmission, in whole or in part, is prohibited without prior written authorisation from Insightrix SAS, save as expressly permitted under applicable law (including the exceptions set out in Articles L.122-5 and L.122-6-1 of the French Intellectual Property Code).
                </p>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold text-theme-olive mb-4">4. Personal Data / Données Personnelles</h2>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Personal data collected via this website (contact form, project submission, booking) is processed by Insightrix SAS as data controller, in accordance with the EU General Data Protection Regulation (GDPR — Regulation 2016/679) and the French Data Protection Act (Loi Informatique et Libertés).
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Purpose of processing: responding to enquiries, scheduling consultations, invoicing, and compliance with legal obligations. Legal basis: performance of contract, consent, and legitimate interest.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  You have the right to access, rectify, delete, object to, restrict, and port your personal data. To exercise these rights, contact <a href="mailto:aru.bhardwaj@insightrix.eu" className="text-theme-olive underline hover:text-theme-gold">aru.bhardwaj@insightrix.eu</a>. You also have the right to lodge a complaint with the CNIL (<a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-theme-olive underline hover:text-theme-gold">cnil.fr</a>).
                </p>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold text-theme-olive mb-4">5. Applicable Law / Loi Applicable</h2>
                <p className="text-gray-700 leading-relaxed">
                  This legal notice and all matters relating to the use of this website are governed by <strong>French law</strong>. Any disputes shall be subject to the jurisdiction of the competent French courts of Paris.
                </p>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold text-theme-olive mb-4">6. Contact</h2>
                <p className="text-gray-700 leading-relaxed">
                  For any legal, editorial, or technical questions regarding this website, please contact: <a href="mailto:aru.bhardwaj@insightrix.eu" className="text-theme-olive underline hover:text-theme-gold">aru.bhardwaj@insightrix.eu</a>.
                </p>
              </section>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
    <Footer />
  </div>
);

export default LegalNoticePage;

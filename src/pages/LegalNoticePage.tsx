import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { useLanguage } from '@/contexts/LanguageContext';

type Lang = 'en' | 'it' | 'fr' | 'de';

interface LegalContent {
  metaTitle: string;
  metaDesc: string;
  backToHome: string;
  pageTitle: string;
  publishedNotice: string;
  s1: string;
  s1_company: string;
  s1_legalForm: string;
  s1_legalFormValue: string;
  s1_registeredOffice: string;
  s1_siret: string;
  s1_siren: string;
  s1_vat: string;
  s1_president: string;
  s1_publicationDirector: string;
  s1_email: string;
  s1_phone: string;
  s2: string;
  s2_host: string;
  s2_hostName: string;
  s2_address: string;
  s2_addressValue: string;
  s2_website: string;
  s3: string;
  s3_body: string;
  s4: string;
  s4_body1: string;
  s4_body2: string;
  s4_body3: React.ReactNode;
  s5: string;
  s5_body: React.ReactNode;
  s6: string;
  s6_body: React.ReactNode;
}

const emailLink = (
  <a href="mailto:aru.bhardwaj@insightrix.eu" className="text-theme-olive underline hover:text-theme-gold">aru.bhardwaj@insightrix.eu</a>
);
const cnilLink = (
  <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-theme-olive underline hover:text-theme-gold">cnil.fr</a>
);

const CONTENT: Record<Lang, LegalContent> = {
  en: {
    metaTitle: 'Legal Notice / Mentions Légales | Insightrix SAS',
    metaDesc: 'Legal information for Insightrix SAS — Paris-based AI consulting firm. SIRET, TVA, registered address, hosting, and publication director per French law.',
    backToHome: 'Back to home',
    pageTitle: 'Legal Notice / Mentions Légales',
    publishedNotice: 'Published pursuant to Article 6 III of the French Law for Confidence in the Digital Economy (LCEN) of 21 June 2004.',
    s1: '1. Publisher / Éditeur',
    s1_company: 'Company name / Raison sociale:',
    s1_legalForm: 'Legal form / Forme juridique:',
    s1_legalFormValue: 'Société par Actions Simplifiée (SAS)',
    s1_registeredOffice: 'Registered office / Siège social:',
    s1_siret: 'SIRET:',
    s1_siren: 'SIREN:',
    s1_vat: 'Intra-community VAT / TVA intracommunautaire:',
    s1_president: 'President / Président:',
    s1_publicationDirector: 'Publication director / Directeur de la publication:',
    s1_email: 'Email:',
    s1_phone: 'Phone / Téléphone:',
    s2: '2. Hosting / Hébergement',
    s2_host: 'Host / Hébergeur:',
    s2_hostName: 'Vercel Inc.',
    s2_address: 'Address:',
    s2_addressValue: '440 N Barranca Ave #4133, Covina, CA 91723, United States',
    s2_website: 'Website:',
    s3: '3. Intellectual Property / Propriété Intellectuelle',
    s3_body: 'The entire arubhardwaj.eu website — including its structure, content, text, images, logos, graphics, and software — is the exclusive property of Insightrix SAS or its licensors. Any reproduction, representation, modification, publication, or transmission, in whole or in part, is prohibited without prior written authorisation from Insightrix SAS, save as expressly permitted under applicable law (including the exceptions set out in Articles L.122-5 and L.122-6-1 of the French Intellectual Property Code).',
    s4: '4. Personal Data / Données Personnelles',
    s4_body1: 'Personal data collected via this website (contact form, project submission, booking) is processed by Insightrix SAS as data controller, in accordance with the EU General Data Protection Regulation (GDPR — Regulation 2016/679) and the French Data Protection Act (Loi Informatique et Libertés).',
    s4_body2: 'Purpose of processing: responding to enquiries, scheduling consultations, invoicing, and compliance with legal obligations. Legal basis: performance of contract, consent, and legitimate interest.',
    s4_body3: (<>You have the right to access, rectify, delete, object to, restrict, and port your personal data. To exercise these rights, contact {emailLink}. You also have the right to lodge a complaint with the CNIL ({cnilLink}).</>),
    s5: '5. Applicable Law / Loi Applicable',
    s5_body: (<>This legal notice and all matters relating to the use of this website are governed by <strong>French law</strong>. Any disputes shall be subject to the jurisdiction of the competent French courts of Paris.</>),
    s6: '6. Contact',
    s6_body: (<>For any legal, editorial, or technical questions regarding this website, please contact: {emailLink}.</>)
  },
  it: {
    metaTitle: 'Note Legali / Mentions Légales | Insightrix SAS',
    metaDesc: 'Informazioni legali per Insightrix SAS — società di consulenza AI con sede a Parigi. SIRET, TVA, indirizzo registrato, hosting e direttore della pubblicazione secondo la legge francese.',
    backToHome: 'Torna alla home',
    pageTitle: 'Note Legali / Mentions Légales',
    publishedNotice: 'Pubblicato ai sensi dell\'Articolo 6 III della Legge francese sulla Fiducia nell\'Economia Digitale (LCEN) del 21 giugno 2004.',
    s1: '1. Editore / Éditeur',
    s1_company: 'Denominazione sociale / Raison sociale:',
    s1_legalForm: 'Forma giuridica / Forme juridique:',
    s1_legalFormValue: 'Società per Azioni Semplificata (SAS)',
    s1_registeredOffice: 'Sede legale / Siège social:',
    s1_siret: 'SIRET:',
    s1_siren: 'SIREN:',
    s1_vat: 'IVA intracomunitaria / TVA intracommunautaire:',
    s1_president: 'Presidente / Président:',
    s1_publicationDirector: 'Direttore della pubblicazione / Directeur de la publication:',
    s1_email: 'Email:',
    s1_phone: 'Telefono / Téléphone:',
    s2: '2. Hosting / Hébergement',
    s2_host: 'Host / Hébergeur:',
    s2_hostName: 'Vercel Inc.',
    s2_address: 'Indirizzo:',
    s2_addressValue: '440 N Barranca Ave #4133, Covina, CA 91723, Stati Uniti',
    s2_website: 'Sito web:',
    s3: '3. Proprietà Intellettuale / Propriété Intellectuelle',
    s3_body: 'L\'intero sito arubhardwaj.eu — incluse struttura, contenuti, testi, immagini, loghi, grafiche e software — è di proprietà esclusiva di Insightrix SAS o dei suoi licenziatari. Qualsiasi riproduzione, rappresentazione, modifica, pubblicazione o trasmissione, in tutto o in parte, è vietata senza previa autorizzazione scritta di Insightrix SAS, salvo quanto espressamente consentito dalla legge applicabile (incluse le eccezioni previste dagli Articoli L.122-5 e L.122-6-1 del Codice della Proprietà Intellettuale francese).',
    s4: '4. Dati Personali / Données Personnelles',
    s4_body1: 'I dati personali raccolti tramite questo sito (form di contatto, invio di progetti, prenotazione) sono trattati da Insightrix SAS in qualità di titolare del trattamento, in conformità con il Regolamento Generale UE sulla Protezione dei Dati (GDPR — Regolamento 2016/679) e la Legge francese sulla Protezione dei Dati (Loi Informatique et Libertés).',
    s4_body2: 'Finalità del trattamento: rispondere alle richieste, pianificare consulenze, fatturazione e rispetto degli obblighi di legge. Base giuridica: esecuzione del contratto, consenso e interesse legittimo.',
    s4_body3: (<>Hai il diritto di accedere, rettificare, cancellare, opporti, limitare e portare i tuoi dati personali. Per esercitare questi diritti, contatta {emailLink}. Hai anche il diritto di presentare reclamo alla CNIL ({cnilLink}).</>),
    s5: '5. Legge Applicabile / Loi Applicable',
    s5_body: (<>Queste note legali e tutte le questioni relative all\'uso di questo sito sono regolate dalla <strong>legge francese</strong>. Qualsiasi controversia sarà soggetta alla giurisdizione dei tribunali francesi competenti di Parigi.</>),
    s6: '6. Contatto',
    s6_body: (<>Per qualsiasi domanda legale, editoriale o tecnica su questo sito, contatta: {emailLink}.</>)
  },
  fr: {
    metaTitle: 'Mentions Légales | Insightrix SAS',
    metaDesc: 'Informations légales pour Insightrix SAS — société de conseil IA basée à Paris. SIRET, TVA, adresse enregistrée, hébergement et directeur de la publication conformément au droit français.',
    backToHome: "Retour à l'accueil",
    pageTitle: 'Mentions Légales',
    publishedNotice: 'Publiées en application de l\'article 6 III de la Loi pour la Confiance dans l\'Économie Numérique (LCEN) du 21 juin 2004.',
    s1: '1. Éditeur',
    s1_company: 'Raison sociale :',
    s1_legalForm: 'Forme juridique :',
    s1_legalFormValue: 'Société par Actions Simplifiée (SAS)',
    s1_registeredOffice: 'Siège social :',
    s1_siret: 'SIRET :',
    s1_siren: 'SIREN :',
    s1_vat: 'TVA intracommunautaire :',
    s1_president: 'Président :',
    s1_publicationDirector: 'Directeur de la publication :',
    s1_email: 'Email :',
    s1_phone: 'Téléphone :',
    s2: '2. Hébergement',
    s2_host: 'Hébergeur :',
    s2_hostName: 'Vercel Inc.',
    s2_address: 'Adresse :',
    s2_addressValue: '440 N Barranca Ave #4133, Covina, CA 91723, États-Unis',
    s2_website: 'Site web :',
    s3: '3. Propriété Intellectuelle',
    s3_body: "L'ensemble du site arubhardwaj.eu — y compris sa structure, son contenu, ses textes, images, logos, graphismes et logiciels — est la propriété exclusive d'Insightrix SAS ou de ses concédants. Toute reproduction, représentation, modification, publication ou transmission, en tout ou en partie, est interdite sans autorisation écrite préalable d'Insightrix SAS, sauf exceptions expressément prévues par la loi applicable (notamment les exceptions des articles L.122-5 et L.122-6-1 du Code de la Propriété Intellectuelle).",
    s4: '4. Données Personnelles',
    s4_body1: "Les données personnelles collectées via ce site (formulaire de contact, soumission de projet, réservation) sont traitées par Insightrix SAS en qualité de responsable de traitement, conformément au Règlement Général UE sur la Protection des Données (RGPD — Règlement 2016/679) et à la Loi Informatique et Libertés française.",
    s4_body2: "Finalité du traitement : réponse aux demandes, planification des consultations, facturation et respect des obligations légales. Base juridique : exécution du contrat, consentement et intérêt légitime.",
    s4_body3: (<>Vous avez le droit d'accéder, de rectifier, de supprimer, de vous opposer, de limiter et de porter vos données personnelles. Pour exercer ces droits, contactez {emailLink}. Vous avez également le droit d'introduire une réclamation auprès de la CNIL ({cnilLink}).</>),
    s5: '5. Loi Applicable',
    s5_body: (<>Les présentes mentions légales et toutes questions relatives à l'utilisation de ce site sont régies par <strong>le droit français</strong>. Tout litige relèvera de la juridiction des tribunaux français compétents de Paris.</>),
    s6: '6. Contact',
    s6_body: (<>Pour toute question juridique, éditoriale ou technique concernant ce site, veuillez contacter : {emailLink}.</>)
  },
  de: {
    metaTitle: 'Impressum / Mentions Légales | Insightrix SAS',
    metaDesc: 'Rechtliche Informationen für Insightrix SAS — KI-Beratungsunternehmen mit Sitz in Paris. SIRET, TVA, registrierte Adresse, Hosting und Verantwortlicher gemäß französischem Recht.',
    backToHome: 'Zurück zur Startseite',
    pageTitle: 'Impressum / Mentions Légales',
    publishedNotice: 'Veröffentlicht gemäß Artikel 6 III des französischen Gesetzes über das Vertrauen in die digitale Wirtschaft (LCEN) vom 21. Juni 2004.',
    s1: '1. Herausgeber / Éditeur',
    s1_company: 'Firma / Raison sociale:',
    s1_legalForm: 'Rechtsform / Forme juridique:',
    s1_legalFormValue: 'Société par Actions Simplifiée (SAS)',
    s1_registeredOffice: 'Sitz / Siège social:',
    s1_siret: 'SIRET:',
    s1_siren: 'SIREN:',
    s1_vat: 'USt-IdNr. / TVA intracommunautaire:',
    s1_president: 'Präsident / Président:',
    s1_publicationDirector: 'Verantwortlicher für die Veröffentlichung / Directeur de la publication:',
    s1_email: 'E-Mail:',
    s1_phone: 'Telefon / Téléphone:',
    s2: '2. Hosting / Hébergement',
    s2_host: 'Host / Hébergeur:',
    s2_hostName: 'Vercel Inc.',
    s2_address: 'Adresse:',
    s2_addressValue: '440 N Barranca Ave #4133, Covina, CA 91723, Vereinigte Staaten',
    s2_website: 'Website:',
    s3: '3. Geistiges Eigentum / Propriété Intellectuelle',
    s3_body: 'Die gesamte Website arubhardwaj.eu — einschließlich Struktur, Inhalten, Texten, Bildern, Logos, Grafiken und Software — ist ausschließliches Eigentum von Insightrix SAS oder seinen Lizenzgebern. Jede Vervielfältigung, Darstellung, Änderung, Veröffentlichung oder Übertragung, ganz oder teilweise, ist ohne vorherige schriftliche Genehmigung von Insightrix SAS untersagt, soweit nicht ausdrücklich nach geltendem Recht zulässig (einschließlich der in den Artikeln L.122-5 und L.122-6-1 des französischen Gesetzbuchs über geistiges Eigentum vorgesehenen Ausnahmen).',
    s4: '4. Personenbezogene Daten / Données Personnelles',
    s4_body1: 'Personenbezogene Daten, die über diese Website erhoben werden (Kontaktformular, Projekteinreichung, Buchung), werden von Insightrix SAS als Verantwortlicher verarbeitet, in Übereinstimmung mit der EU-Datenschutz-Grundverordnung (DSGVO — Verordnung 2016/679) und dem französischen Datenschutzgesetz (Loi Informatique et Libertés).',
    s4_body2: 'Zweck der Verarbeitung: Beantwortung von Anfragen, Planung von Beratungen, Rechnungsstellung und Einhaltung gesetzlicher Pflichten. Rechtsgrundlage: Vertragserfüllung, Einwilligung und berechtigtes Interesse.',
    s4_body3: (<>Sie haben das Recht, auf Ihre personenbezogenen Daten zuzugreifen, sie zu berichtigen, zu löschen, zu widersprechen, einzuschränken und zu übertragen. Um diese Rechte auszuüben, kontaktieren Sie {emailLink}. Sie haben außerdem das Recht, eine Beschwerde bei der CNIL ({cnilLink}) einzureichen.</>),
    s5: '5. Anwendbares Recht / Loi Applicable',
    s5_body: (<>Dieses Impressum und alle Fragen im Zusammenhang mit der Nutzung dieser Website unterliegen dem <strong>französischen Recht</strong>. Streitigkeiten unterliegen der Zuständigkeit der zuständigen französischen Gerichte in Paris.</>),
    s6: '6. Kontakt',
    s6_body: (<>Für rechtliche, redaktionelle oder technische Fragen zu dieser Website wenden Sie sich bitte an: {emailLink}.</>)
  }
};

const LegalNoticePage = () => {
  const { language } = useLanguage();
  const c = CONTENT[language as Lang];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{c.metaTitle}</title>
        <meta name="description" content={c.metaDesc} />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://arubhardwaj.eu/legal-notice" />
      </Helmet>
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-theme-olive hover:text-theme-gold transition-colors mb-6">
            <ArrowLeft className="h-4 w-4" />
            {c.backToHome}
          </Link>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-theme-olive text-center mb-2">
                {c.pageTitle}
              </CardTitle>
              <p className="text-center text-sm text-gray-500">
                {c.publishedNotice}
              </p>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-semibold text-theme-olive mb-4">{c.s1}</h2>
                  <div className="space-y-1 text-gray-700">
                    <p><strong>{c.s1_company}</strong> Insightrix SAS</p>
                    <p><strong>{c.s1_legalForm}</strong> {c.s1_legalFormValue}</p>
                    <p><strong>{c.s1_registeredOffice}</strong> 60 Rue François Ier, 75008 Paris, France</p>
                    <p><strong>{c.s1_siret}</strong> 989 236 856 00013</p>
                    <p><strong>{c.s1_siren}</strong> 989 236 856</p>
                    <p><strong>{c.s1_vat}</strong> FR42989236856</p>
                    <p><strong>{c.s1_president}</strong> Aru Bhardwaj</p>
                    <p><strong>{c.s1_publicationDirector}</strong> Aru Bhardwaj</p>
                    <p><strong>{c.s1_email}</strong> <a href="mailto:aru.bhardwaj@insightrix.eu" className="text-theme-olive underline hover:text-theme-gold">aru.bhardwaj@insightrix.eu</a></p>
                    <p><strong>{c.s1_phone}</strong> +33 (0) 766985210</p>
                  </div>
                </section>

                <Separator />

                <section>
                  <h2 className="text-2xl font-semibold text-theme-olive mb-4">{c.s2}</h2>
                  <div className="space-y-1 text-gray-700">
                    <p><strong>{c.s2_host}</strong> {c.s2_hostName}</p>
                    <p><strong>{c.s2_address}</strong> {c.s2_addressValue}</p>
                    <p><strong>{c.s2_website}</strong> <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-theme-olive underline hover:text-theme-gold">vercel.com</a></p>
                  </div>
                </section>

                <Separator />

                <section>
                  <h2 className="text-2xl font-semibold text-theme-olive mb-4">{c.s3}</h2>
                  <p className="text-gray-700 leading-relaxed">{c.s3_body}</p>
                </section>

                <Separator />

                <section>
                  <h2 className="text-2xl font-semibold text-theme-olive mb-4">{c.s4}</h2>
                  <p className="text-gray-700 leading-relaxed mb-3">{c.s4_body1}</p>
                  <p className="text-gray-700 leading-relaxed mb-3">{c.s4_body2}</p>
                  <p className="text-gray-700 leading-relaxed">{c.s4_body3}</p>
                </section>

                <Separator />

                <section>
                  <h2 className="text-2xl font-semibold text-theme-olive mb-4">{c.s5}</h2>
                  <p className="text-gray-700 leading-relaxed">{c.s5_body}</p>
                </section>

                <Separator />

                <section>
                  <h2 className="text-2xl font-semibold text-theme-olive mb-4">{c.s6}</h2>
                  <p className="text-gray-700 leading-relaxed">{c.s6_body}</p>
                </section>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LegalNoticePage;

import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Linkedin, ExternalLink, MapPin, Mail, Phone, Building2 } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import BookConsultationDialog from '@/components/BookConsultationDialog';
import CostCalculator from '@/components/CostCalculator';
import { Button } from '@/components/ui/button';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  '@id': 'https://arubhardwaj.eu/about#aboutpage',
  url: 'https://arubhardwaj.eu/about',
  name: 'About Aru Bhardwaj — Fractional CTO & AI Strategist',
  mainEntity: {
    '@type': 'Person',
    '@id': 'https://arubhardwaj.eu/#person',
    name: 'Aru Bhardwaj',
    givenName: 'Aru',
    familyName: 'Bhardwaj',
    jobTitle: 'Fractional CTO, AI Strategist & President of Insightrix SAS',
    description: 'Paris-based Fractional CTO, AI Strategist, and President of Insightrix SAS — a French AI consulting firm. 7+ years across AI, data engineering, and full-stack development. Specialises in European sovereign AI deployments, GDPR-compliant LLM systems, and MVP builds for startups, scale-ups, and regulated enterprises.',
    worksFor: { '@id': 'https://insightrix.eu/#organization' },
    knowsLanguage: ['English', 'Italian', 'French', 'Hindi'],
    nationality: 'Indian',
    url: 'https://arubhardwaj.eu/',
    image: 'https://arubhardwaj.eu/images/headshot.jpg',
    sameAs: [
      'https://www.linkedin.com/in/arub',
      'https://www.malt.fr/profile/arubhardwaj',
      'https://github.com/arubhardwaj',
      'https://insightrix.eu'
    ]
  },
  dateModified: '2026-04-21'
};

const AboutPage = () => (
  <div className="min-h-screen bg-background">
    <Helmet>
      <title>About Aru Bhardwaj — Fractional CTO, AI Strategist & President of Insightrix SAS</title>
      <meta name="description" content="Paris-based Fractional CTO, AI Strategist, and President of Insightrix SAS (insightrix.eu). 7+ years in AI, data engineering, and sovereign LLM infrastructure. Serving startups and regulated enterprises across Europe." />
      <link rel="canonical" href="https://arubhardwaj.eu/about" />
      <meta property="og:title" content="About Aru Bhardwaj — Fractional CTO & AI Strategist" />
      <meta property="og:description" content="Paris-based Fractional CTO and President of Insightrix SAS, specialising in European sovereign AI, GDPR-compliant LLM systems, and AI MVP builds." />
      <meta property="og:url" content="https://arubhardwaj.eu/about" />
      <meta property="og:type" content="profile" />
      <meta property="og:image" content="https://arubhardwaj.eu/images/og-image.jpg" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="About Aru Bhardwaj — Fractional CTO & AI Strategist" />
      <meta name="twitter:description" content="Paris-based Fractional CTO and President of Insightrix SAS." />
      <meta name="twitter:image" content="https://arubhardwaj.eu/images/og-image.jpg" />
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://arubhardwaj.eu/' },
            { '@type': 'ListItem', position: 2, name: 'About', item: 'https://arubhardwaj.eu/about' }
          ]
        })}
      </script>
    </Helmet>
    <Navbar />
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-theme-olive hover:text-theme-gold transition-colors mb-6">
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>

        <header className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-theme-gold mb-3">About</p>
          <h1 className="text-4xl md:text-5xl font-bold text-theme-olive mb-4 leading-tight">Aru Bhardwaj</h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Fractional CTO, AI Strategist, and President of <a href="https://insightrix.eu" target="_blank" rel="noopener noreferrer" className="text-theme-olive underline decoration-theme-gold underline-offset-4 hover:text-theme-gold transition-colors">Insightrix SAS</a> — a Paris-based AI consulting firm serving startups, scale-ups, and regulated enterprises across Europe.
          </p>
        </header>

        <div className="grid md:grid-cols-[auto,1fr] gap-8 mb-12 items-start">
          <div className="w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden ring-4 ring-theme-gold/30 mx-auto md:mx-0 shadow-xl shrink-0">
            <img src="/images/headshot.jpg" alt="Aru Bhardwaj — Fractional CTO, AI Strategist & President of Insightrix SAS, based in Paris, France" className="w-full h-full object-cover" loading="eager" width="224" height="224" />
          </div>

          <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
            <p>
              I'm a Paris-based technical leader with 7+ years across AI, data engineering, and full-stack development. I serve as a <strong>Fractional CTO</strong> for European startups and scale-ups — providing senior technical leadership on a part-time basis — and as an <strong>AI Strategist</strong> for regulated enterprises navigating the EU AI Act, GDPR, and sovereign-cloud requirements.
            </p>
            <p>
              I architect production-grade AI systems built to ship: intelligent RAG pipelines, autonomous agents, and sovereign LLM infrastructure that stands up to compliance, scale, and scrutiny.
            </p>
            <p>
              Whether you're a founder mapping a technical roadmap or a team racing to launch an AI product, I close the gap between cutting-edge generative AI and real business impact — with systems built secure by design, compliant by default, and engineered to win.
            </p>
          </div>
        </div>

        {/* Insightrix SAS card */}
        <section className="mb-12 bg-theme-olive/5 rounded-xl p-8 border border-theme-olive/15">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-12 h-12 rounded-lg bg-theme-gold/20 flex items-center justify-center shrink-0">
              <Building2 className="h-6 w-6 text-theme-gold" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-theme-gold mb-1">Company</p>
              <h2 className="text-2xl font-bold text-theme-olive">Insightrix SAS</h2>
              <p className="text-sm text-gray-600">Paris, France · AI consulting firm</p>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            I'm the <strong>President and founder of Insightrix SAS</strong> — a Paris-headquartered AI consulting firm with active operations across the <strong>European Union</strong>, the <strong>United Kingdom</strong>, and <strong>India</strong>. Insightrix delivers Fractional CTO services, AI-powered MVP development, sovereign LLM infrastructure, and regulatory compliance advisory for startups, scale-ups, and regulated enterprises.
          </p>
          <p className="text-gray-700 leading-relaxed mb-5">
            Working through Insightrix means one European counterparty that speaks your compliance language — French law for EU contracts, GDPR-ready data handling, and multi-region delivery across France, the UK, and India.
          </p>
          <dl className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm text-gray-600 mb-5 pt-5 border-t border-theme-olive/15">
            <div className="flex gap-2"><dt className="font-semibold text-theme-olive shrink-0">Registered:</dt><dd>60 Rue François Ier, 75008 Paris</dd></div>
            <div className="flex gap-2"><dt className="font-semibold text-theme-olive shrink-0">Legal form:</dt><dd>SAS (Société par Actions Simplifiée)</dd></div>
            <div className="flex gap-2"><dt className="font-semibold text-theme-olive shrink-0">SIRET:</dt><dd>989 236 856 00013</dd></div>
            <div className="flex gap-2"><dt className="font-semibold text-theme-olive shrink-0">TVA:</dt><dd>FR42989236856</dd></div>
          </dl>
          <a href="https://insightrix.eu" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-theme-olive font-semibold hover:text-theme-gold transition-colors">
            Visit insightrix.eu
            <ExternalLink className="h-4 w-4" />
          </a>
        </section>

        {/* What I do */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-theme-olive mb-5">What I do</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link to="/services/fractional-cto" className="block bg-white border border-gray-200 rounded-lg p-5 hover:border-theme-gold hover:shadow-md transition-all group">
              <h3 className="font-semibold text-theme-olive mb-2 group-hover:text-theme-gold transition-colors">Fractional CTO</h3>
              <p className="text-sm text-gray-600">Part-time technical leadership for startups and scale-ups.</p>
            </Link>
            <Link to="/services/mvp-builder" className="block bg-white border border-gray-200 rounded-lg p-5 hover:border-theme-gold hover:shadow-md transition-all group">
              <h3 className="font-semibold text-theme-olive mb-2 group-hover:text-theme-gold transition-colors">AI-Powered MVP Builder</h3>
              <p className="text-sm text-gray-600">Idea-to-production MVPs in 4-8 weeks.</p>
            </Link>
            <Link to="/services/sovereign-ai" className="block bg-white border border-gray-200 rounded-lg p-5 hover:border-theme-gold hover:shadow-md transition-all group">
              <h3 className="font-semibold text-theme-olive mb-2 group-hover:text-theme-gold transition-colors">EU Sovereign AI & GDPR LLM</h3>
              <p className="text-sm text-gray-600">OVHcloud, Scaleway, Mistral, on-prem deployments.</p>
            </Link>
            <Link to="/#consultation" className="block bg-white border border-gray-200 rounded-lg p-5 hover:border-theme-gold hover:shadow-md transition-all group">
              <h3 className="font-semibold text-theme-olive mb-2 group-hover:text-theme-gold transition-colors">Consultations</h3>
              <p className="text-sm text-gray-600">30-min (€45) or 60-min (€90) focused calls.</p>
            </Link>
          </div>
        </section>

        {/* Facts */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-theme-olive mb-5">Key facts</h2>
          <dl className="grid md:grid-cols-2 gap-x-8 gap-y-3 text-gray-700">
            <div className="flex gap-2"><dt className="font-semibold text-theme-olive w-32 shrink-0">Role:</dt><dd>Fractional CTO, AI Strategist</dd></div>
            <div className="flex gap-2"><dt className="font-semibold text-theme-olive w-32 shrink-0">Company:</dt><dd>President, Insightrix SAS</dd></div>
            <div className="flex gap-2"><dt className="font-semibold text-theme-olive w-32 shrink-0">Base:</dt><dd>Paris, France</dd></div>
            <div className="flex gap-2"><dt className="font-semibold text-theme-olive w-32 shrink-0">Experience:</dt><dd>7+ years in AI and data engineering</dd></div>
            <div className="flex gap-2"><dt className="font-semibold text-theme-olive w-32 shrink-0">Languages:</dt><dd>English, Italian, French (B1), Hindi</dd></div>
            <div className="flex gap-2"><dt className="font-semibold text-theme-olive w-32 shrink-0">Availability:</dt><dd>Worldwide, remote-first</dd></div>
            <div className="flex gap-2"><dt className="font-semibold text-theme-olive w-32 shrink-0">Rates:</dt><dd>€150/hour or €700/day (ex. VAT)</dd></div>
            <div className="flex gap-2"><dt className="font-semibold text-theme-olive w-32 shrink-0">Jurisdiction:</dt><dd>French law, Paris courts</dd></div>
          </dl>
        </section>

        {/* Cost calculator */}
        <section className="mb-12">
          <CostCalculator />
        </section>

        {/* Contact */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-theme-olive mb-5">Get in touch</h2>
          <div className="space-y-3">
            <a href="mailto:aru.bhardwaj@insightrix.eu" className="flex items-center gap-3 text-gray-700 hover:text-theme-gold transition-colors">
              <Mail className="h-5 w-5 text-theme-gold" />
              aru.bhardwaj@insightrix.eu
            </a>
            <a href="tel:+33766985210" className="flex items-center gap-3 text-gray-700 hover:text-theme-gold transition-colors">
              <Phone className="h-5 w-5 text-theme-gold" />
              +33 (0) 766985210
            </a>
            <div className="flex items-center gap-3 text-gray-700">
              <MapPin className="h-5 w-5 text-theme-gold" />
              Paris, France & Remote
            </div>
            <a href="https://www.linkedin.com/in/arub" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-700 hover:text-theme-gold transition-colors">
              <Linkedin className="h-5 w-5 text-theme-gold" />
              linkedin.com/in/arub
            </a>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-br from-theme-gold/15 to-theme-olive/10 rounded-xl p-8 md:p-10 text-center border-2 border-theme-gold/30 shadow-md">
          <h2 className="text-2xl md:text-3xl font-bold text-theme-olive mb-3">Ready to discuss your project?</h2>
          <p className="text-gray-700 mb-6 max-w-xl mx-auto">Book a focused call — 30-min scope (€45) or 60-min deep-dive (€90). Written summary within 24h.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <BookConsultationDialog>
              <Button className="bg-theme-gold hover:bg-theme-gold/90 text-white px-6 py-5 text-base">
                Book a Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </BookConsultationDialog>
            <Link to="/submit-project">
              <Button variant="outline" className="border-theme-olive text-theme-olive hover:bg-theme-olive hover:text-white px-6 py-5 text-base">
                Submit a Project
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </main>
    <Footer />
  </div>
);

export default AboutPage;

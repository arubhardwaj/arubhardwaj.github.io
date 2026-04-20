import { ReactNode } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Check } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import BookConsultationDialog from '@/components/BookConsultationDialog';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

interface ServicePageProps {
  slug: string;
  title: string;
  h1: string;
  tagline: string;
  description: string;
  ogImage?: string;
  whoItsFor: string[];
  whatsIncluded: string[];
  process?: { step: string; detail: string }[];
  outcomes?: string[];
  faqs?: { q: string; a: string }[];
  pricing?: { label: string; price: string; note?: string }[];
  jsonLd?: object;
  children?: ReactNode;
}

const ServicePageLayout = ({
  slug,
  title,
  h1,
  tagline,
  description,
  ogImage = 'https://arubhardwaj.eu/images/og-image.jpg',
  whoItsFor,
  whatsIncluded,
  process,
  outcomes,
  faqs,
  pricing,
  jsonLd,
  children
}: ServicePageProps) => {
  const { language, translations } = useLanguage();
  const url = `https://arubhardwaj.eu/services/${slug}`;

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={ogImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
        {jsonLd && <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://arubhardwaj.eu/'
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Services',
                item: 'https://arubhardwaj.eu/#expertise'
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: h1.replace(/&amp;/g, '&'),
                item: url
              }
            ]
          })}
        </script>
      </Helmet>
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-theme-olive hover:text-theme-gold transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            {translations.backToHome[language]}
          </Link>

          {/* Hero */}
          <header className="mb-12">
            <p className="text-sm font-semibold uppercase tracking-wider text-theme-gold mb-3">{translations.serviceKicker[language]}</p>
            <h1 className="text-4xl md:text-5xl font-bold text-theme-olive mb-4 leading-tight">{h1}</h1>
            <p className="text-xl text-gray-700 leading-relaxed">{tagline}</p>
          </header>

          {/* Who it's for */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-theme-olive mb-5">{translations.whoThisIsFor[language]}</h2>
            <ul className="space-y-3">
              {whoItsFor.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700 text-lg">
                  <Check className="h-5 w-5 text-theme-gold shrink-0 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* What's included */}
          <section className="mb-12 bg-theme-olive/5 rounded-xl p-8 border border-theme-olive/10">
            <h2 className="text-2xl font-bold text-theme-olive mb-5">{translations.whatsIncluded[language]}</h2>
            <ul className="space-y-3">
              {whatsIncluded.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700">
                  <Check className="h-5 w-5 text-theme-gold shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Process */}
          {process && process.length > 0 && (
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-theme-olive mb-5">{translations.howWeWork[language]}</h2>
              <ol className="space-y-4">
                {process.map((step, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="shrink-0 w-8 h-8 rounded-full bg-theme-gold text-white font-bold flex items-center justify-center text-sm">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="font-semibold text-theme-olive mb-1">{step.step}</h3>
                      <p className="text-gray-700">{step.detail}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>
          )}

          {/* Outcomes */}
          {outcomes && outcomes.length > 0 && (
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-theme-olive mb-5">{translations.outcomesYouCanExpect[language]}</h2>
              <ul className="grid md:grid-cols-2 gap-3">
                {outcomes.map((outcome, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700 bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                    <Check className="h-5 w-5 text-theme-gold shrink-0 mt-0.5" />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Pricing */}
          {pricing && pricing.length > 0 && (
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-theme-olive mb-5">{translations.pricingHeading[language]}</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {pricing.map((tier, i) => (
                  <div key={i} className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
                    <p className="text-sm font-medium text-gray-500 mb-1">{tier.label}</p>
                    <p className="text-2xl font-bold text-theme-olive mb-1">{tier.price}</p>
                    {tier.note && <p className="text-xs text-gray-500">{tier.note}</p>}
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-500 mt-3 italic">{translations.pricingVatNote[language]}</p>
            </section>
          )}

          {/* FAQs */}
          {faqs && faqs.length > 0 && (
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-theme-olive mb-5">{translations.frequentlyAsked[language]}</h2>
              <div className="space-y-5">
                {faqs.map((faq, i) => (
                  <div key={i}>
                    <h3 className="font-semibold text-theme-olive mb-2">{faq.q}</h3>
                    <p className="text-gray-700 leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {children}

          {/* CTA */}
          <section className="bg-gradient-to-br from-theme-gold/15 to-theme-olive/10 rounded-xl p-8 md:p-10 text-center border-2 border-theme-gold/30 shadow-md">
            <h2 className="text-2xl md:text-3xl font-bold text-theme-olive mb-3">{translations.discussYourProject[language]}</h2>
            <p className="text-gray-700 mb-6 max-w-xl mx-auto">{translations.discussYourProjectBody[language]}</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <BookConsultationDialog>
                <Button className="bg-theme-gold hover:bg-theme-gold/90 text-white px-6 py-5 text-base">
                  {translations.bookConsultation[language]}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </BookConsultationDialog>
              <Link to="/submit-project">
                <Button variant="outline" className="border-theme-olive text-theme-olive hover:bg-theme-olive hover:text-white px-6 py-5 text-base">
                  {translations.submitAProject[language]}
                </Button>
              </Link>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ServicePageLayout;

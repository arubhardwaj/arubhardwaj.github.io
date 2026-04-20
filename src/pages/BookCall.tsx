import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSearchParams, Link } from 'react-router-dom';
import { CheckCircle, Calendar, AlertCircle, ArrowRight } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { useLanguage } from '@/contexts/LanguageContext';

const ZCAL_SCRIPT_SRC = 'https://static.zcal.co/embed/v1/embed.js';
const ZCAL_LINK = 'https://zcal.co/i/2rDwr33H';

const BookCall = () => {
  const { language, translations } = useLanguage();
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const hasPaid = Boolean(sessionId && sessionId.startsWith('cs_'));

  useEffect(() => {
    if (!hasPaid) return;
    if (document.querySelector(`script[src="${ZCAL_SCRIPT_SRC}"]`)) return;
    const script = document.createElement('script');
    script.src = ZCAL_SCRIPT_SRC;
    script.async = true;
    document.body.appendChild(script);
  }, [hasPaid]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Helmet>
        <title>Book Your Consultation Call | Aru Bhardwaj</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <Navbar />
      <main className="flex-1 bg-hero-lime py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          {hasPaid ? (
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <div className="flex items-start gap-4 mb-4">
                <CheckCircle className="h-10 w-10 text-green-500 shrink-0 mt-1" />
                <h1 className="text-2xl md:text-3xl font-bold text-theme-olive leading-tight">
                  {translations.paymentSuccessTitle[language]}
                </h1>
              </div>
              <p className="text-lg text-gray-700 mb-3 ml-14">
                {translations.paymentSuccessSubtitle[language]}
              </p>
              <p className="text-gray-600 mb-8 ml-14 flex items-center gap-2">
                <Calendar className="h-5 w-5 text-theme-gold shrink-0" />
                <span>{translations.paymentSuccessHint[language]}</span>
              </p>

              <div className="zcal-inline-widget">
                <a href={ZCAL_LINK}>Consultation — Schedule a meeting</a>
              </div>

              <p className="text-xs text-gray-400 mt-6 text-center">
                {translations.paymentSuccessFooter[language]}
              </p>
            </div>
          ) : (
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 text-center">
              <AlertCircle className="h-12 w-12 text-theme-gold mx-auto mb-4" />
              <h1 className="text-2xl md:text-3xl font-bold text-theme-olive mb-3">
                {translations.bookCallGateTitle[language]}
              </h1>
              <p className="text-gray-700 mb-8">
                {translations.bookCallGateBody[language]}
              </p>
              <Link
                to="/#consultation"
                className="inline-flex items-center gap-2 bg-theme-gold hover:bg-theme-gold/90 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 shadow-md hover:shadow-lg"
              >
                {translations.bookCallGateCta[language]}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BookCall;

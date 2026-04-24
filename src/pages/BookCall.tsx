import { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSearchParams, Link } from 'react-router-dom';
import { CheckCircle, Calendar, AlertCircle, ArrowRight } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { useLanguage } from '@/contexts/LanguageContext';

/**
 * BookCall — post-payment scheduling page.
 *
 * Flow:
 *   Stripe Payment Link → success redirect to /book-call?session_id=cs_...
 *   → session_id gate verifies Stripe returned a valid Checkout session
 *   → inline Cal.com embed for cal.arubhardwaj.eu/aru
 *
 * Direct visits without a session_id see a friendly wall and CTA to
 * the consultation section.
 */

const CAL_ORIGIN = 'https://cal.arubhardwaj.eu';
const CAL_EMBED_SRC = `${CAL_ORIGIN}/embed/embed.js`;
const CAL_NAMESPACE = 'aru';
const CAL_LINK = 'aru'; // resolves to cal.arubhardwaj.eu/aru

declare global {
  interface Window {
    Cal?: {
      (action: string, ...args: unknown[]): void;
      ns?: Record<string, (action: string, ...args: unknown[]) => void>;
      loaded?: boolean;
      q?: unknown[];
    };
  }
}

const BookCall = () => {
  const { language, translations } = useLanguage();
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const hasPaid = Boolean(sessionId && sessionId.startsWith('cs_'));
  const inlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!hasPaid) return;

    // Load the Cal.com embed loader (once) and initialise the inline widget.
    // Pattern adapted from the official Cal.com embed snippet.
    (function (C: Window, A: string, L: string) {
      const p = function (a: unknown, ar: IArguments) {
        (a as { q: unknown[] }).q.push(ar);
      };
      const d = C.document;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      C.Cal = (C.Cal as any) || function (...args: unknown[]) {
        const cal = C.Cal as unknown as {
          loaded?: boolean;
          ns: Record<string, (action: string, ...args: unknown[]) => void>;
          q: unknown[];
        };
        const ar = arguments as unknown as IArguments;
        if (!cal.loaded) {
          cal.ns = {};
          cal.q = cal.q || [];
          const script = d.createElement('script');
          script.src = A;
          d.head.appendChild(script);
          cal.loaded = true;
        }
        if (args[0] === L) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const api: any = function () { p(api, arguments); };
          const namespace = args[1] as string;
          api.q = api.q || [];
          if (typeof namespace === 'string') {
            cal.ns[namespace] = cal.ns[namespace] || api;
            p(cal.ns[namespace], ar);
            p(cal, { 0: 'initNamespace', 1: namespace, length: 2 } as unknown as IArguments);
          } else {
            p(cal, ar);
          }
          return;
        }
        p(cal, ar);
      };
    })(window, CAL_EMBED_SRC, 'init');

    const cal = window.Cal;
    if (!cal) return;

    // Initialise namespace pointing at our self-hosted Cal instance
    cal('init', CAL_NAMESPACE, { origin: CAL_ORIGIN });

    const ns = cal.ns?.[CAL_NAMESPACE];
    if (!ns) return;

    // Mount inline embed into #book-call-cal-inline with EN/IT/FR/DE locale
    // following the current language context.
    ns('inline', {
      elementOrSelector: '#book-call-cal-inline',
      calLink: CAL_LINK,
      config: {
        layout: 'month_view',
        theme: 'light',
      }
    });

    // UI tuning: hide Cal.com branding-heavy chrome if hideEventTypeDetails
    // is desired later. For now, keep defaults.
    ns('ui', {
      hideEventTypeDetails: false,
      layout: 'month_view',
      styles: {
        branding: { brandColor: '#4a5d23' } // theme-olive
      }
    });
  }, [hasPaid]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Helmet>
        <title>Book Your Consultation Call | Aru Bhardwaj</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta property="og:title" content="Book Your Consultation Call | Aru Bhardwaj" />
        <meta property="og:description" content="Schedule your paid consultation with Aru Bhardwaj — Fractional CTO & AI Strategist in Paris." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://arubhardwaj.eu/book-call" />
        <meta property="og:image" content="https://arubhardwaj.eu/images/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Book Your Consultation Call | Aru Bhardwaj" />
        <meta name="twitter:description" content="Schedule your paid consultation with Aru Bhardwaj — Fractional CTO & AI Strategist in Paris." />
        <meta name="twitter:image" content="https://arubhardwaj.eu/images/og-image.jpg" />
      </Helmet>
      <Navbar />
      <main className="flex-1 bg-hero-lime py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          {hasPaid ? (
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10">
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

              {/* Cal.com inline embed — self-hosted at cal.arubhardwaj.eu */}
              <div
                id="book-call-cal-inline"
                ref={inlineRef}
                className="cal-inline-wrapper min-h-[640px]"
                style={{ width: '100%', overflow: 'hidden' }}
              />

              <p className="text-xs text-gray-400 mt-6 text-center">
                {translations.paymentSuccessFooter[language]}
              </p>
            </div>
          ) : (
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 text-center max-w-2xl mx-auto">
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

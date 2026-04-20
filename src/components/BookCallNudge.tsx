import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { X, ArrowRight, Sparkles } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const STORAGE_KEY = 'book-call-nudge-dismissed-v1';
const SCROLL_RATIO_TRIGGER = 0.35;
const TIME_TRIGGER_MS = 30_000;
const MOUNT_DELAY_MS = 1200;

const BookCallNudge = () => {
  const { language, translations } = useLanguage();
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const onHomepage = location.pathname === '/';

  useEffect(() => {
    if (!onHomepage) return;
    if (sessionStorage.getItem(STORAGE_KEY) === 'true') return;

    let triggered = false;

    const trigger = () => {
      if (triggered) return;
      triggered = true;
      setIsMounted(true);
      // Tick after mount so CSS transition runs from hidden -> visible
      requestAnimationFrame(() => {
        setTimeout(() => setIsVisible(true), 20);
      });
    };

    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0 && scrollTop / docHeight >= SCROLL_RATIO_TRIGGER) trigger();
    };

    const timeoutId = setTimeout(trigger, TIME_TRIGGER_MS);
    const mountTimeoutId = setTimeout(() => {
      window.addEventListener('scroll', onScroll, { passive: true });
    }, MOUNT_DELAY_MS);

    return () => {
      clearTimeout(timeoutId);
      clearTimeout(mountTimeoutId);
      window.removeEventListener('scroll', onScroll);
    };
  }, [onHomepage]);

  const close = (persist = true) => {
    setIsVisible(false);
    if (persist) sessionStorage.setItem(STORAGE_KEY, 'true');
    setTimeout(() => setIsMounted(false), 400);
  };

  const handleCta = () => {
    const el = document.getElementById('consultation');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.location.href = '/#consultation';
    }
    close();
  };

  if (!onHomepage || !isMounted) return null;

  return (
    <div
      role="dialog"
      aria-label={translations.nudgeTitle[language]}
      className={`fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 w-[calc(100%-2rem)] max-w-sm transition-all duration-500 ease-out ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'
      }`}
    >
      <div className="relative bg-white rounded-2xl shadow-2xl border border-theme-gold/30 overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-theme-olive via-theme-gold to-theme-olive" />

        <button
          type="button"
          onClick={() => close()}
          aria-label={translations.nudgeDismiss[language]}
          className="absolute top-3 right-3 p-1.5 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="p-5 pt-6 pb-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-11 w-11 rounded-full overflow-hidden ring-2 ring-theme-gold/40 shrink-0">
              <img
                src="/images/headshot.jpg"
                alt="Aru Bhardwaj"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-semibold text-theme-gold flex items-center gap-1 uppercase tracking-wider">
                <Sparkles className="h-3 w-3" />
                {translations.nudgeKicker[language]}
              </p>
              <p className="text-xs text-gray-500 truncate">Aru Bhardwaj · Paris</p>
            </div>
          </div>

          <h4 className="text-base font-semibold text-gray-900 mb-1.5 leading-snug">
            {translations.nudgeTitle[language]}
          </h4>
          <p className="text-sm text-gray-600 mb-4 leading-relaxed">
            {translations.nudgeBody[language]}
          </p>

          <button
            type="button"
            onClick={handleCta}
            className="group inline-flex items-center justify-center gap-2 w-full bg-theme-gold hover:bg-theme-gold/90 text-white font-medium px-4 py-2.5 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
          >
            {translations.nudgeCta[language]}
            <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCallNudge;

import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const SECTION_IDS = ['top', 'about', 'expertise', 'industries', 'why-choose-me', 'faq', 'consultation'] as const;
type SectionId = typeof SECTION_IDS[number];

const ScrollProgressNav = () => {
  const { language, translations } = useLanguage();
  const location = useLocation();
  const [activeId, setActiveId] = useState<SectionId>('top');
  const onHomepage = location.pathname === '/';

  const labels: Record<SectionId, string> = {
    top: translations.home[language],
    about: translations.aboutMe[language],
    expertise: translations.expertise[language],
    industries: translations.industries[language],
    'why-choose-me': translations.whyChooseMe[language],
    faq: translations.faqNavLink[language],
    consultation: translations.contact[language]
  };

  useEffect(() => {
    if (!onHomepage) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the entry with the highest intersection ratio that's intersecting
        let best: IntersectionObserverEntry | null = null;
        for (const entry of entries) {
          if (entry.isIntersecting) {
            if (!best || entry.intersectionRatio > best.intersectionRatio) {
              best = entry;
            }
          }
        }
        if (best) {
          const id = best.target.id;
          if (SECTION_IDS.includes(id as SectionId)) {
            setActiveId(id as SectionId);
          }
        }
      },
      { rootMargin: '-30% 0px -50% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    SECTION_IDS.forEach((id) => {
      if (id === 'top') return;
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    const onScroll = () => {
      if (window.scrollY < 200) setActiveId('top');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, [onHomepage]);

  const handleClick = (id: SectionId) => {
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  if (!onHomepage) return null;

  return (
    <nav
      aria-label="Page section navigation"
      className="fixed left-5 top-1/2 -translate-y-1/2 z-40 hidden lg:block"
    >
      <ul className="space-y-4">
        {SECTION_IDS.map((id) => {
          const isActive = activeId === id;
          return (
            <li key={id}>
              <button
                type="button"
                onClick={() => handleClick(id)}
                aria-label={labels[id]}
                aria-current={isActive ? 'true' : undefined}
                className="group flex items-center gap-3 py-1 focus:outline-none"
              >
                <span
                  className={`block h-[2px] rounded-full transition-all duration-300 ease-out ${
                    isActive
                      ? 'w-10 bg-theme-gold'
                      : 'w-5 bg-gray-400/60 group-hover:w-8 group-hover:bg-theme-olive'
                  }`}
                />
                <span
                  className={`text-xs font-medium tracking-wide whitespace-nowrap transition-all duration-300 ${
                    isActive
                      ? 'opacity-100 text-theme-olive translate-x-0'
                      : 'opacity-0 -translate-x-1 text-gray-700 group-hover:opacity-100 group-hover:translate-x-0'
                  }`}
                >
                  {labels[id]}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default ScrollProgressNav;

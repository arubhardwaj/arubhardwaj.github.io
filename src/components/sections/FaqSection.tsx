import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useLanguage } from '@/contexts/LanguageContext';

const FAQ_KEYS = ['faq1', 'faq2', 'faq3', 'faq4', 'faq5', 'faq6', 'faq8'] as const;

const FaqSection = () => {
  const { language, translations } = useLanguage();

  return (
    <section id="faq" className="py-20 bg-white scroll-mt-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-theme-olive">{translations.faqTitle[language]}</span>
          </h2>
          <p className="text-lg text-gray-700">
            {translations.faqSubtitle[language]}
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {FAQ_KEYS.map((key, idx) => {
              const qKey = `${key}Q` as keyof typeof translations;
              const aKey = `${key}A` as keyof typeof translations;
              return (
                <AccordionItem
                  key={key}
                  value={key}
                  className="border border-gray-200 rounded-lg px-5 shadow-sm hover:shadow-md transition-shadow bg-white data-[state=open]:border-theme-gold/60"
                >
                  <AccordionTrigger className="text-left font-semibold text-theme-olive hover:no-underline py-4 text-base md:text-lg">
                    <span className="flex items-start gap-3">
                      <span className="text-theme-gold font-bold shrink-0 mt-0.5">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <span>{translations[qKey][language]}</span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 leading-relaxed pb-5 pl-10 pr-2 text-[15px]">
                    {translations[aKey][language]}
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;

import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { CalendarCheck, ArrowRight, Lock, RotateCcw } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from '@/components/ui/dialog';
import { useLanguage } from '@/contexts/LanguageContext';

const PAYMENT_LINK_30_MIN = 'https://buy.stripe.com/8x28wPcVL3cj4889hR8so06';
const PAYMENT_LINK_60_MIN = 'https://book.stripe.com/3cI6oH4pf9AHaww1Pp8so07';

interface BookConsultationDialogProps {
  children: ReactNode;
}

const BookConsultationDialog = ({ children }: BookConsultationDialogProps) => {
  const { language, translations } = useLanguage();

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-theme-olive">
            {translations.consultationPackage[language]}
          </DialogTitle>
          <DialogDescription className="text-gray-600">
            {translations.consultationNudge[language]}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-3 mt-2">
          {/* Primary CTA — 60-min */}
          <a
            href={PAYMENT_LINK_60_MIN}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-full flex items-center justify-between gap-3 bg-theme-gold hover:bg-theme-gold/90 text-white border-2 border-theme-gold px-5 py-4 rounded-lg transition-all duration-200 shadow-md hover:shadow-xl hover:-translate-y-0.5 no-underline"
          >
            <span className="absolute -top-2.5 right-4 bg-theme-olive text-white text-[10px] font-semibold px-2.5 py-0.5 rounded-full shadow-sm uppercase tracking-wider">
              {translations.mostPopular[language]}
            </span>
            <CalendarCheck className="h-6 w-6 shrink-0" />
            <div className="flex-1 text-left">
              <div className="font-bold text-base flex items-center gap-1.5">
                {translations.book60Min[language]}
                <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" />
              </div>
              <div className="text-xs opacity-90">{translations.book60MinSub[language]}</div>
            </div>
            <div className="text-right leading-tight shrink-0">
              <span className="block text-2xl font-extrabold">€90</span>
              <span className="block text-[11px] opacity-90">60 min · {translations.vatExtra[language]}</span>
            </div>
          </a>

          {/* Secondary CTA — 30-min */}
          <a
            href={PAYMENT_LINK_30_MIN}
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full flex items-center justify-between gap-3 bg-white hover:bg-theme-olive/5 border border-gray-300 hover:border-theme-olive text-theme-olive px-5 py-3 rounded-lg transition-all duration-200 no-underline"
          >
            <CalendarCheck className="h-5 w-5 shrink-0 text-theme-olive" />
            <div className="flex-1 text-left">
              <div className="font-semibold text-sm flex items-center gap-1.5">
                {translations.book30Min[language]}
                <ArrowRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" />
              </div>
              <div className="text-xs text-gray-500">{translations.book30MinSub[language]}</div>
            </div>
            <div className="text-right leading-tight shrink-0">
              <span className="block text-lg font-bold">€45</span>
              <span className="block text-[11px] text-gray-500">30 min · {translations.vatExtra[language]}</span>
            </div>
          </a>
        </div>

        {/* Trust row */}
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 pt-3 mt-1 border-t border-gray-100">
          <span className="flex items-center gap-1.5 text-[11px] text-gray-600">
            <Lock className="h-3 w-3 text-theme-olive" />
            {translations.trustSecureStripe[language]}
          </span>
          <Link
            to="/terms-and-conditions"
            className="flex items-center gap-1.5 text-[11px] text-gray-600 hover:text-theme-olive hover:underline transition-colors"
          >
            <RotateCcw className="h-3 w-3 text-theme-olive" />
            {translations.trustRefundable[language]}
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookConsultationDialog;

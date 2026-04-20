
import { useState } from 'react';
import { Mail, Phone, MapPin, Check, Linkedin, Lock, ShieldCheck, RotateCcw, CalendarCheck, ArrowRight, ChevronDown } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

// Custom Icon components for Upwork and Malt
const MaltIcon = () => (
  <div className="flex items-center justify-center h-full w-full bg-white rounded-full p-1">
    <img 
      src="/lovable-uploads/1fa53f10-66e1-4d3b-b36d-4095f6e3d4bf.png" 
      alt="Malt" 
      className="w-7 h-7 object-contain"
    />
  </div>
);

const UpworkIcon = () => (
  <div className="flex items-center justify-center h-full w-full bg-white rounded-full p-1">
    <img 
      src="/lovable-uploads/62d7931a-42c8-4548-97c4-7f582b78beb9.png" 
      alt="Upwork" 
      className="w-7 h-7 object-contain"
    />
  </div>
);

declare global {
  interface Window {
    emailjs: any;
  }
}

const PAYMENT_LINK_30_MIN = 'https://buy.stripe.com/8x28wPcVL3cj4889hR8so06';
const PAYMENT_LINK_60_MIN = 'https://book.stripe.com/3cI6oH4pf9AHaww1Pp8so07';

const ConsultationSection = () => {
  const { language, translations } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Load EmailJS
    const emailjsScript = document.createElement('script');
    emailjsScript.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
    emailjsScript.async = true;
    document.body.appendChild(emailjsScript);

    emailjsScript.onload = () => {
      window.emailjs.init("hF6O_JgDy5jUxyk-4");
    };
    emailjsScript.onerror = () => {
      console.warn('Failed to load EmailJS script. Contact form may not work.');
    };

    return () => {
      const existingEmailjsScript = document.querySelector('script[src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"]');
      if (existingEmailjsScript && document.body.contains(existingEmailjsScript)) {
        document.body.removeChild(existingEmailjsScript);
      }
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceId = "service_ugxzpww";
    const templateId = "template_enrm7gd";
    const publicKey = "hF6O_JgDy5jUxyk-4";

    window.emailjs.send(serviceId, templateId, {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message
    }, publicKey)
      .then(() => {
        toast.success('Message sent successfully! I will get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setIsSubmitting(false);
      })
      .catch((error: any) => {
        console.error('Error sending email:', error);
        toast.error('Failed to send message. Please try contacting me directly at aru.bhardwaj@insightrix.eu');
        setIsSubmitting(false);
      });
  };

  return (
    <section className="py-20 bg-hero-lime" id="consultation">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-theme-olive">{translations.getInTouch[language]} </span>
            <span className="text-theme-gold">{translations.touch[language]}</span>
          </h2>
          <p className="text-lg text-gray-700">
            {translations.contactDescription[language]}
          </p>
        </div>
        
        <Card className="bg-white text-gray-800 max-w-5xl mx-auto">
          <CardContent className="p-0">
            <div className="grid md:grid-cols-2">
              <div className="p-8 border-r border-gray-200">
                <h3 className="text-xl font-semibold mb-6 text-theme-olive">{translations.contactInformation[language]}</h3>
                
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-3 bg-yellow-50 p-3 rounded-md">
                    <Mail className="h-5 w-5 text-yellow-500" />
                    <div>
                      <p className="text-sm text-gray-500">{translations.email[language]}</p>
                      <a href="mailto:aru.bhardwaj@insightrix.eu" className="text-theme-olive font-medium">
                        aru.bhardwaj@insightrix.eu
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 mb-3 bg-yellow-50 p-3 rounded-md">
                    <Phone className="h-5 w-5 text-yellow-500" />
                    <div>
                      <p className="text-sm text-gray-500">{translations.phone[language]}</p>
                      <a href="tel:+33766985210" className="text-theme-olive font-medium">
                        +33 (0) 766985210
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 bg-yellow-50 p-3 rounded-md">
                    <MapPin className="h-5 w-5 text-yellow-500" />
                    <div>
                      <p className="text-sm text-gray-500">{translations.location[language]}</p>
                      <p className="text-theme-olive font-medium">Paris, France (Remote)</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="font-semibold mb-3">{translations.followMe[language]}</h4>
                  <div className="flex gap-3">
                    <a 
                      href="https://www.linkedin.com/in/arub" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="h-10 w-10 rounded-full bg-[#0077b5] hover:bg-[#0077b5]/90 flex items-center justify-center text-white transition-colors"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a 
                      href="https://www.malt.fr/profile/arubhardwaj" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="h-10 w-10 rounded-full bg-theme-olive hover:bg-theme-olive/90 flex items-center justify-center transition-colors"
                    >
                      <MaltIcon />
                    </a>
                    <a 
                      href="https://upwork.com/fl/arub" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="h-10 w-10 rounded-full bg-[#6FDA44] hover:bg-[#6FDA44]/90 flex items-center justify-center transition-colors"
                    >
                      <UpworkIcon />
                    </a>
                  </div>
                </div>
                
                <details className="mt-8 group">
                  <summary className="flex items-center justify-between cursor-pointer text-sm font-medium text-theme-olive hover:text-theme-gold transition-colors list-none py-3 border-t border-gray-200">
                    <span>{translations.sendAMessageInstead[language]}</span>
                    <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
                  </summary>
                  <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                    <div>
                      <Label htmlFor="name" className="text-sm">{translations.fullName[language]}</Label>
                      <Input 
                        id="name"
                        name="name"
                        placeholder={translations.enterFullName[language]}
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="email" className="text-sm">{translations.emailAddress[language]}</Label>
                      <Input 
                        id="email"
                        name="email"
                        type="email"
                        placeholder={translations.enterEmail[language]}
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="subject" className="text-sm">{translations.subject[language]}</Label>
                      <Input 
                        id="subject"
                        name="subject"
                        placeholder={translations.enterSubject[language]}
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="message" className="text-sm">{translations.message[language]}</Label>
                      <Textarea 
                        id="message"
                        name="message"
                        placeholder={translations.enterMessage[language]}
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-theme-olive hover:bg-theme-olive/90 text-white"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? translations.sending[language] : translations.sendMessage[language]}
                    </Button>
                  </form>
                </details>
              </div>
              
              <div className="p-8">
                <h3 className="text-xl font-semibold mb-3 text-theme-olive">{translations.consultationPackage[language]}</h3>

                <p className="text-gray-700 mb-4">
                  {translations.consultationNudge[language]}
                </p>

                {/* Social proof */}
                <p className="text-xs text-gray-500 mb-5 italic border-l-2 border-theme-gold/40 pl-3">
                  {translations.consultationSocialProof[language]}
                </p>

                {/* Value stack — 3 strongest bullets */}
                <div className="bg-theme-olive/5 rounded-lg p-4 mb-6 border border-theme-olive/10">
                  <p className="text-xs font-semibold uppercase tracking-wider text-theme-olive mb-2">
                    {translations.valueStackTitle[language]}
                  </p>
                  <ul className="space-y-1.5">
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <Check className="h-4 w-4 text-theme-gold shrink-0 mt-0.5" />
                      <span>{translations.valueBullet1[language]}</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <Check className="h-4 w-4 text-theme-gold shrink-0 mt-0.5" />
                      <span>{translations.valueBullet2[language]}</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <Check className="h-4 w-4 text-theme-gold shrink-0 mt-0.5" />
                      <span>{translations.valueBullet4[language]}</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  {/* Primary CTA — 60-min, visually dominant */}
                  <div>
                    <a
                      href={PAYMENT_LINK_60_MIN}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative w-full flex items-center justify-between gap-4 bg-theme-gold hover:bg-theme-gold/90 text-white border-2 border-theme-gold px-6 py-5 md:py-6 rounded-lg transition-all duration-200 shadow-md hover:shadow-xl hover:-translate-y-0.5 no-underline min-h-[72px]"
                    >
                      <span className="absolute -top-3 right-4 bg-theme-olive text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                        {translations.mostPopular[language]}
                      </span>
                      <CalendarCheck className="h-6 w-6 md:h-7 md:w-7 shrink-0" />
                      <div className="flex-1 text-left">
                        <div className="font-bold text-lg md:text-xl flex items-center gap-2">
                          {translations.book60Min[language]}
                          <ArrowRight className="h-5 w-5 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" />
                        </div>
                        <div className="text-sm md:text-base opacity-90">{translations.book60MinSub[language]}</div>
                      </div>
                      <div className="text-right leading-tight shrink-0">
                        <span className="block text-3xl md:text-4xl font-extrabold">€90</span>
                        <span className="block text-xs md:text-sm opacity-90">60 min · {translations.vatExtra[language]}</span>
                      </div>
                    </a>
                    <p className="text-xs text-gray-500 mt-2 px-1">{translations.book60BestFor[language]}</p>
                  </div>

                  {/* Secondary CTA — 30-min, subordinate weight */}
                  <div>
                    <a
                      href={PAYMENT_LINK_30_MIN}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group w-full flex items-center justify-between gap-4 bg-white hover:bg-theme-olive/5 border border-gray-300 hover:border-theme-olive text-theme-olive px-6 py-4 rounded-lg transition-all duration-200 no-underline min-h-[60px]"
                    >
                      <CalendarCheck className="h-5 w-5 shrink-0 text-theme-olive" />
                      <div className="flex-1 text-left">
                        <div className="font-semibold text-base flex items-center gap-2">
                          {translations.book30Min[language]}
                          <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" />
                        </div>
                        <div className="text-sm text-gray-500">{translations.book30MinSub[language]}</div>
                      </div>
                      <div className="text-right leading-tight shrink-0">
                        <span className="block text-xl font-bold">€45</span>
                        <span className="block text-xs text-gray-500">30 min · {translations.vatExtra[language]}</span>
                      </div>
                    </a>
                    <p className="text-xs text-gray-500 mt-2 px-1">{translations.book30BestFor[language]}</p>
                  </div>
                </div>

                {/* Trust signals row */}
                <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 mt-5 pt-4 border-t border-gray-100">
                  <span className="flex items-center gap-1.5 text-xs text-gray-600">
                    <Lock className="h-3.5 w-3.5 text-theme-olive" />
                    {translations.trustSecureStripe[language]}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-gray-600">
                    <ShieldCheck className="h-3.5 w-3.5 text-theme-olive" />
                    {translations.trustEuResidency[language]}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-gray-600">
                    <RotateCcw className="h-3.5 w-3.5 text-theme-olive" />
                    {translations.trustRefundable[language]}
                  </span>
                </div>
                
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ConsultationSection;

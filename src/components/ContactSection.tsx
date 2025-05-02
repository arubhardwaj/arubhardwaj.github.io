
import React, { useEffect, useRef, useState } from "react";
import { Mail, Phone, MapPin, Calendar, Clock, Send } from "lucide-react";
import { useTranslation } from "react-i18next";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

const ContactSection = () => {
  const { t } = useTranslation();
  const stripeRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    try {
      // In a real implementation, you would send this data to your backend
      console.log("Form submission:", values);
      
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: t('contact.form.successTitle'),
        description: t('contact.form.successMessage'),
      });
      
      form.reset();
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: t('contact.form.errorTitle'),
        description: t('contact.form.errorMessage'),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  useEffect(() => {
    // Add Stripe script
    const script = document.createElement("script");
    script.src = "https://js.stripe.com/v3/buy-button.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      // Clean up
      document.body.removeChild(script);
    };
  }, []);
  
  return (
    <section id="contact" className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('contact.title')} <span className="gradient-text">{t('contact.titleHighlight')}</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('contact.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-semibold mb-6">{t('contact.contactInfo')}</h3>
              
              {/* Horizontal contact info layout */}
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center bg-primary/5 rounded-lg p-3 flex-1">
                  <Mail className="h-5 w-5 text-secondary mr-2 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-sm">{t('contact.form.emailLabel')}</p>
                    <p className="text-sm">aru.bhardwaj@insighrix.eu</p>
                  </div>
                </div>
                
                <div className="flex items-center bg-primary/5 rounded-lg p-3 flex-1">
                  <Phone className="h-5 w-5 text-secondary mr-2 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-sm">{t('contact.form.phoneLabel')}</p>
                    <p className="text-sm">+33 (0) 766985210</p>
                  </div>
                </div>
                
                <div className="flex items-center bg-primary/5 rounded-lg p-3 flex-1">
                  <MapPin className="h-5 w-5 text-secondary mr-2 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-sm">{t('contact.form.locationLabel')}</p>
                    <p className="text-sm">Paris, France (Remote)</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-semibold mb-2">{t('contact.followMe')}</h4>
                <div className="flex space-x-4">
                  <a href="https://www.linkedin.com/in/arub" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-secondary transition">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a href="https://www.malt.fr/profile/arubhardwaj" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-secondary transition">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22c-5.523 0-10-4.477-10-10S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-3.374-9.374L7.5 13.75l1.453 1.453C10.044 16.293 11.081 16.75 12 16.75s1.956-.457 3.047-1.547L16.5 13.75l-1.125-1.124-1.453 1.453c-.597.597-1.203.797-1.922.797s-1.325-.2-1.922-.797l-1.452-1.453z"/>
                    </svg>
                  </a>
                  <a href="https://upwork.com/fl/arub" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-secondary transition">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.281-2.389 5.281-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.688 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z"/>
                    </svg>
                  </a>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="mt-8">
                <h4 className="text-xl font-semibold mb-4">{t('contact.form.contactMe')}</h4>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t('contact.form.fullName')}</FormLabel>
                          <FormControl>
                            <Input placeholder={t('contact.form.fullNamePlaceholder')} {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t('contact.form.emailAddress')}</FormLabel>
                          <FormControl>
                            <Input placeholder={t('contact.form.emailAddressPlaceholder')} type="email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t('contact.form.inquirySubject')}</FormLabel>
                          <FormControl>
                            <Input placeholder={t('contact.form.inquirySubjectPlaceholder')} {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t('contact.form.messageDetails')}</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder={t('contact.form.messageDetailsPlaceholder')} 
                              className="min-h-[120px]" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button 
                      type="submit" 
                      className="w-full" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? t('contact.form.submitting') : t('contact.form.submitMessage')}
                      <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </Form>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-semibold mb-6" id="consultation">{t('contact.bookConsultation')}</h3>
              
              {/* Payment section with content columns */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Left column with payment button */}
                <div>
                  {/* Consultation title display */}
                  <div className="mb-4 p-3 bg-primary/5 border border-primary/10 rounded-lg">
                    <h4 className="font-medium text-primary text-sm">{t('contact.consultationPackage')}</h4>
                    <p className="font-semibold text-base leading-tight">
                      {t('contact.consultationTitle')}
                    </p>
                  </div>
                  
                  {/* Stripe Buy Button - with improved width styling */}
                  <div ref={stripeRef} className="w-full mx-0">
                    <div dangerouslySetInnerHTML={{
                    __html: `
                          <stripe-buy-button
                            buy-button-id="buy_btn_1RJidbDRlpu0XokvgWLL4odr"
                            publishable-key="pk_live_51QTvRbDRlpu0Xokvl70HGWoEOV7yoyJ1ye6INHArLHaeDpSEKk0vGLIycqiN4VMuA0HueyzxLlsPVD1GukvLAcPI00hxC37Dmk"
                            style="width: 100%;"
                          >
                          </stripe-buy-button>
                        `
                  }} className="w-full py-0 my-0" />
                  </div>
                </div>
                
                {/* Right column with what happens next */}
                <div>
                  <h4 className="font-semibold text-xl mb-4 text-primary">{t('contact.whatHappensNext')}</h4>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="rounded-full bg-secondary/10 p-1 mr-3 mt-1">
                        <svg className="h-4 w-4 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-gray-700"><strong>{t('contact.confirmation.title')}</strong> {t('contact.confirmation.description')}</p>
                    </li>
                    <li className="flex items-start">
                      <div className="rounded-full bg-secondary/10 p-1 mr-3 mt-1">
                        <Mail className="h-4 w-4 text-secondary" />
                      </div>
                      <p className="text-gray-700"><strong>{t('contact.personalContact.title')}</strong> {t('contact.personalContact.description')}</p>
                    </li>
                    <li className="flex items-start">
                      <div className="rounded-full bg-secondary/10 p-1 mr-3 mt-1">
                        <Calendar className="h-4 w-4 text-secondary" />
                      </div>
                      <p className="text-gray-700"><strong>{t('contact.calendarInvite.title')}</strong> {t('contact.calendarInvite.description')}</p>
                    </li>
                    <li className="flex items-start">
                      <div className="rounded-full bg-secondary/10 p-1 mr-3 mt-1">
                        <Clock className="h-4 w-4 text-secondary" />
                      </div>
                      <p className="text-gray-700"><strong>{t('contact.weekendAvailability.title')}</strong> {t('contact.weekendAvailability.description')}</p>
                    </li>
                    <li className="flex items-start">
                      <div className="rounded-full bg-secondary/10 p-1 mr-3 mt-1">
                        <svg className="h-4 w-4 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <p className="text-gray-700"><strong>{t('contact.prepMaterials.title')}</strong> {t('contact.prepMaterials.description')}</p>
                    </li>
                    <li className="flex items-start">
                      <div className="rounded-full bg-secondary/10 p-1 mr-3 mt-1">
                        <svg className="h-4 w-4 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <p className="text-gray-700"><strong>{t('contact.refundPolicy.title')}</strong> {t('contact.refundPolicy.description')}</p>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-sm text-yellow-800">
                  <strong>{t('contact.important')}</strong> {t('contact.importantText')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

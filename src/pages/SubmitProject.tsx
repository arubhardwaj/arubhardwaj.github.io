import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { CalendarIcon, Upload, FileText, ArrowLeft } from 'lucide-react';
import { format, addDays } from 'date-fns';
import { cn } from '@/lib/utils';
import { toast } from '@/hooks/use-toast';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

type Lang = 'en' | 'it' | 'fr' | 'de';

declare global {
  interface Window {
    emailjs: any;
  }
}

const formSchema = z.object({
  projectDescription: z.string().min(50, 'Project description must be at least 50 characters'),
  budget: z.number().min(1, 'Budget must be greater than 0'),
  currency: z.enum(['USD', 'EUR']),
  contactEmail: z.string().email('Please enter a valid email address'),
  timeline: z.enum(['less-than-month', '1-3-months', '3-6-months', '6-months-plus']),
  startDate: z.date().optional(),
  dueDate: z.date().optional(),
  urgentProject: z.boolean().default(false),
  startImmediately: z.boolean().default(false),
}).refine((data) => {
  if (data.startDate && data.dueDate) {
    return data.dueDate >= data.startDate;
  }
  return true;
}, {
  message: 'Due date must be on or after start date',
  path: ['dueDate'],
});

type FormData = z.infer<typeof formSchema>;

const CONTENT = {
  en: {
    metaTitle: 'Submit Your AI Project | Aru Bhardwaj — Fractional CTO',
    metaDesc: 'Submit your AI, LLM, MVP, or data science project directly to a Paris-based Fractional CTO. No platform fees, sovereign-cloud ready, response within 1 business day.',
    ogDesc: 'Submit your AI, LLM, MVP, or data science project directly. Paris-based Fractional CTO, sovereign-cloud ready. Response within 1 business day.',
    twitterDesc: 'Submit your AI or data science project directly. No platform fees. Response within 1 business day.',
    backToHome: 'Back to Home',
    heading: 'Submit Your Project',
    subtitle: "Tell us about your AI, LLM, MVP, or data science needs. We'll help transform your ideas into reality.",
    descLabel: 'Project Description *',
    descPlaceholder: 'Describe your project in detail. Include objectives, requirements, expected outcomes, and any specific technologies or methodologies you prefer...',
    budgetLabel: 'Proposed Budget *',
    budgetPlaceholder: '5000',
    emailLabel: 'Contact Email *',
    emailPlaceholder: 'your.email@company.com',
    timelineLabel: 'Project Timeline *',
    timelinePlaceholder: 'Select timeline',
    timelineLess1: 'Less than 1 month',
    timeline1to3: '1-3 months',
    timeline3to6: '3-6 months',
    timeline6plus: '6+ months (Long term)',
    startDateLabel: 'Preferred Start Date (Optional)',
    dueDateLabel: 'Preferred Due Date (Optional)',
    pickDate: 'Pick a date',
    docsLabel: 'Project Documents',
    uploadHint: 'Upload PDF, DOC, CSV, or Excel files',
    chooseFiles: 'Choose Files',
    removeFile: 'Remove',
    urgentProject: 'This is an urgent project',
    startImmediately: 'I want to start immediately',
    submitButton: 'Submit Project',
    submitting: 'Submitting Project...',
    thankYou: 'Thank You!',
    thankYouBody: 'Your project has been submitted successfully. We will review your requirements and get back to you within 1 business day. Please check your email for confirmation.',
    submitAnother: 'Submit Another Project',
    // Toast messages
    toastInvalidType: 'Invalid file type',
    toastInvalidTypeDesc: (name: string) => `"${name}" is not supported. Please upload PDF, DOC, DOCX, CSV, or Excel files.`,
    toastTooLarge: 'File too large',
    toastTooLargeDesc: (name: string) => `"${name}" exceeds 10MB limit.`,
    toastTooMany: 'Too many files',
    toastTooManyDesc: (max: number) => `Maximum ${max} files allowed.`,
    toastSuccess: 'Project submitted successfully!',
    toastSuccessDesc: 'We will get back to you within 1 business day. Check your email for confirmation.',
    toastFail: 'Submission failed',
    toastFailDesc: 'Failed to submit project. Please try again later.'
  },
  it: {
    metaTitle: 'Invia il Tuo Progetto AI | Aru Bhardwaj — Fractional CTO',
    metaDesc: 'Invia il tuo progetto AI, LLM, MVP o data science direttamente a un Fractional CTO basato a Parigi. Nessuna commissione di piattaforma, pronto per cloud sovrano, risposta entro 1 giorno lavorativo.',
    ogDesc: 'Invia il tuo progetto AI, LLM, MVP o data science direttamente. Fractional CTO a Parigi, pronto per cloud sovrano. Risposta entro 1 giorno lavorativo.',
    twitterDesc: 'Invia il tuo progetto AI o data science direttamente. Nessuna commissione di piattaforma. Risposta entro 1 giorno lavorativo.',
    backToHome: 'Torna alla Home',
    heading: 'Invia il Tuo Progetto',
    subtitle: 'Raccontaci le tue esigenze di AI, LLM, MVP o data science. Ti aiuteremo a trasformare le tue idee in realtà.',
    descLabel: 'Descrizione del Progetto *',
    descPlaceholder: 'Descrivi il tuo progetto in dettaglio. Includi obiettivi, requisiti, risultati attesi e qualsiasi tecnologia o metodologia specifica che preferisci...',
    budgetLabel: 'Budget Proposto *',
    budgetPlaceholder: '5000',
    emailLabel: 'Email di Contatto *',
    emailPlaceholder: 'tua.email@azienda.com',
    timelineLabel: 'Tempistica del Progetto *',
    timelinePlaceholder: 'Seleziona tempistica',
    timelineLess1: 'Meno di 1 mese',
    timeline1to3: '1-3 mesi',
    timeline3to6: '3-6 mesi',
    timeline6plus: '6+ mesi (Lungo termine)',
    startDateLabel: 'Data di Inizio Preferita (Opzionale)',
    dueDateLabel: 'Data di Consegna Preferita (Opzionale)',
    pickDate: 'Scegli una data',
    docsLabel: 'Documenti del Progetto',
    uploadHint: 'Carica file PDF, DOC, CSV o Excel',
    chooseFiles: 'Scegli File',
    removeFile: 'Rimuovi',
    urgentProject: 'Questo è un progetto urgente',
    startImmediately: 'Voglio iniziare immediatamente',
    submitButton: 'Invia Progetto',
    submitting: 'Invio in corso...',
    thankYou: 'Grazie!',
    thankYouBody: 'Il tuo progetto è stato inviato con successo. Rivedremo i tuoi requisiti e ti risponderemo entro 1 giorno lavorativo. Controlla la tua email per la conferma.',
    submitAnother: 'Invia un Altro Progetto',
    toastInvalidType: 'Tipo di file non valido',
    toastInvalidTypeDesc: (name: string) => `"${name}" non è supportato. Carica file PDF, DOC, DOCX, CSV o Excel.`,
    toastTooLarge: 'File troppo grande',
    toastTooLargeDesc: (name: string) => `"${name}" supera il limite di 10MB.`,
    toastTooMany: 'Troppi file',
    toastTooManyDesc: (max: number) => `Massimo ${max} file consentiti.`,
    toastSuccess: 'Progetto inviato con successo!',
    toastSuccessDesc: 'Ti risponderemo entro 1 giorno lavorativo. Controlla la tua email per la conferma.',
    toastFail: 'Invio fallito',
    toastFailDesc: 'Invio del progetto fallito. Riprova più tardi.'
  },
  fr: {
    metaTitle: 'Soumettez Votre Projet IA | Aru Bhardwaj — Fractional CTO',
    metaDesc: 'Soumettez votre projet IA, LLM, MVP ou data science directement à un Fractional CTO basé à Paris. Aucune commission de plateforme, prêt pour cloud souverain, réponse sous 1 jour ouvré.',
    ogDesc: 'Soumettez votre projet IA, LLM, MVP ou data science directement. Fractional CTO à Paris, prêt pour cloud souverain. Réponse sous 1 jour ouvré.',
    twitterDesc: 'Soumettez votre projet IA ou data science directement. Aucune commission de plateforme. Réponse sous 1 jour ouvré.',
    backToHome: "Retour à l'accueil",
    heading: 'Soumettez Votre Projet',
    subtitle: 'Parlez-nous de vos besoins IA, LLM, MVP ou data science. Nous vous aiderons à transformer vos idées en réalité.',
    descLabel: 'Description du Projet *',
    descPlaceholder: 'Décrivez votre projet en détail. Incluez objectifs, exigences, résultats attendus, et toutes technologies ou méthodologies spécifiques que vous préférez...',
    budgetLabel: 'Budget Proposé *',
    budgetPlaceholder: '5000',
    emailLabel: 'Email de Contact *',
    emailPlaceholder: 'votre.email@entreprise.com',
    timelineLabel: 'Calendrier du Projet *',
    timelinePlaceholder: 'Sélectionnez un calendrier',
    timelineLess1: 'Moins d\'1 mois',
    timeline1to3: '1-3 mois',
    timeline3to6: '3-6 mois',
    timeline6plus: '6+ mois (Long terme)',
    startDateLabel: 'Date de Début Préférée (Optionnel)',
    dueDateLabel: 'Date de Livraison Préférée (Optionnel)',
    pickDate: 'Choisir une date',
    docsLabel: 'Documents du Projet',
    uploadHint: 'Uploadez des fichiers PDF, DOC, CSV ou Excel',
    chooseFiles: 'Choisir des Fichiers',
    removeFile: 'Retirer',
    urgentProject: "C'est un projet urgent",
    startImmediately: 'Je souhaite commencer immédiatement',
    submitButton: 'Soumettre le Projet',
    submitting: 'Envoi en cours...',
    thankYou: 'Merci !',
    thankYouBody: 'Votre projet a été soumis avec succès. Nous examinerons vos exigences et vous répondrons sous 1 jour ouvré. Veuillez vérifier votre email pour la confirmation.',
    submitAnother: 'Soumettre un Autre Projet',
    toastInvalidType: 'Type de fichier invalide',
    toastInvalidTypeDesc: (name: string) => `"${name}" n'est pas pris en charge. Veuillez uploader des fichiers PDF, DOC, DOCX, CSV ou Excel.`,
    toastTooLarge: 'Fichier trop volumineux',
    toastTooLargeDesc: (name: string) => `"${name}" dépasse la limite de 10 Mo.`,
    toastTooMany: 'Trop de fichiers',
    toastTooManyDesc: (max: number) => `Maximum ${max} fichiers autorisés.`,
    toastSuccess: 'Projet soumis avec succès !',
    toastSuccessDesc: 'Nous vous répondrons sous 1 jour ouvré. Vérifiez votre email pour la confirmation.',
    toastFail: 'Échec de la soumission',
    toastFailDesc: "Échec de la soumission du projet. Veuillez réessayer plus tard."
  },
  de: {
    metaTitle: 'Reichen Sie Ihr KI-Projekt Ein | Aru Bhardwaj — Fractional CTO',
    metaDesc: 'Reichen Sie Ihr KI-, LLM-, MVP- oder Data-Science-Projekt direkt bei einem in Paris ansässigen Fractional CTO ein. Keine Plattformgebühren, souverän-cloud-ready, Antwort innerhalb eines Werktags.',
    ogDesc: 'Reichen Sie Ihr KI-, LLM-, MVP- oder Data-Science-Projekt direkt ein. In Paris ansässiger Fractional CTO, souverän-cloud-ready. Antwort innerhalb eines Werktags.',
    twitterDesc: 'Reichen Sie Ihr KI- oder Data-Science-Projekt direkt ein. Keine Plattformgebühren. Antwort innerhalb eines Werktags.',
    backToHome: 'Zurück zur Startseite',
    heading: 'Reichen Sie Ihr Projekt Ein',
    subtitle: 'Erzählen Sie uns von Ihren KI-, LLM-, MVP- oder Data-Science-Anforderungen. Wir helfen Ihnen, Ihre Ideen Wirklichkeit werden zu lassen.',
    descLabel: 'Projektbeschreibung *',
    descPlaceholder: 'Beschreiben Sie Ihr Projekt im Detail. Fügen Sie Ziele, Anforderungen, erwartete Ergebnisse und bevorzugte Technologien oder Methoden hinzu...',
    budgetLabel: 'Vorgeschlagenes Budget *',
    budgetPlaceholder: '5000',
    emailLabel: 'Kontakt-E-Mail *',
    emailPlaceholder: 'ihre.email@unternehmen.com',
    timelineLabel: 'Projektzeitplan *',
    timelinePlaceholder: 'Zeitplan auswählen',
    timelineLess1: 'Weniger als 1 Monat',
    timeline1to3: '1-3 Monate',
    timeline3to6: '3-6 Monate',
    timeline6plus: '6+ Monate (Langfristig)',
    startDateLabel: 'Bevorzugtes Startdatum (Optional)',
    dueDateLabel: 'Bevorzugtes Abgabedatum (Optional)',
    pickDate: 'Datum wählen',
    docsLabel: 'Projektdokumente',
    uploadHint: 'PDF-, DOC-, CSV- oder Excel-Dateien hochladen',
    chooseFiles: 'Dateien Auswählen',
    removeFile: 'Entfernen',
    urgentProject: 'Dies ist ein dringendes Projekt',
    startImmediately: 'Ich möchte sofort beginnen',
    submitButton: 'Projekt Einreichen',
    submitting: 'Wird eingereicht...',
    thankYou: 'Vielen Dank!',
    thankYouBody: 'Ihr Projekt wurde erfolgreich eingereicht. Wir prüfen Ihre Anforderungen und melden uns innerhalb eines Werktags. Bitte prüfen Sie Ihre E-Mail zur Bestätigung.',
    submitAnother: 'Weiteres Projekt Einreichen',
    toastInvalidType: 'Ungültiger Dateityp',
    toastInvalidTypeDesc: (name: string) => `„${name}" wird nicht unterstützt. Bitte laden Sie PDF-, DOC-, DOCX-, CSV- oder Excel-Dateien hoch.`,
    toastTooLarge: 'Datei zu groß',
    toastTooLargeDesc: (name: string) => `„${name}" überschreitet das 10-MB-Limit.`,
    toastTooMany: 'Zu viele Dateien',
    toastTooManyDesc: (max: number) => `Maximal ${max} Dateien erlaubt.`,
    toastSuccess: 'Projekt erfolgreich eingereicht!',
    toastSuccessDesc: 'Wir melden uns innerhalb eines Werktags. Prüfen Sie Ihre E-Mail zur Bestätigung.',
    toastFail: 'Einreichung fehlgeschlagen',
    toastFailDesc: 'Projekt-Einreichung fehlgeschlagen. Bitte später erneut versuchen.'
  }
} as const;

const SubmitProject = () => {
  const { language } = useLanguage();
  const c = CONTENT[language as Lang];

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      currency: 'USD',
      urgentProject: false,
      startImmediately: false,
    },
  });

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      window.emailjs.init('hF6O_JgDy5jUxyk-4');
    };
    script.onerror = () => {
      console.warn('Failed to load EmailJS script. Form submissions may not work.');
    };

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const watchStartDate = form.watch('startDate');

  const getMinDueDate = () => {
    if (watchStartDate) {
      return addDays(watchStartDate, 2);
    }
    return addDays(new Date(), 2);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    const allowedTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'text/csv',
      'application/vnd.ms-excel',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    ];

    const MAX_FILE_SIZE = 10 * 1024 * 1024;
    const MAX_TOTAL_FILES = 5;

    const validFiles = files.filter(file => {
      if (!allowedTypes.includes(file.type)) {
        toast({
          title: c.toastInvalidType,
          description: c.toastInvalidTypeDesc(file.name),
          variant: 'destructive',
        });
        return false;
      }
      if (file.size > MAX_FILE_SIZE) {
        toast({
          title: c.toastTooLarge,
          description: c.toastTooLargeDesc(file.name),
          variant: 'destructive',
        });
        return false;
      }
      return true;
    });

    if (uploadedFiles.length + validFiles.length > MAX_TOTAL_FILES) {
      toast({
        title: c.toastTooMany,
        description: c.toastTooManyDesc(MAX_TOTAL_FILES),
        variant: 'destructive',
      });
      return;
    }

    setUploadedFiles(prev => [...prev, ...validFiles]);
  };

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    try {
      const timelineMap = {
        'less-than-month': 'Less than 1 month',
        '1-3-months': '1-3 months',
        '3-6-months': '3-6 months',
        '6-months-plus': '6+ months (Long term)'
      };

      const formatDate = (date: Date | undefined) => {
        return date ? format(date, 'PPP') : 'Not specified';
      };

      const emailContent = `
PROJECT SUBMISSION DETAILS

====================
CONTACT INFORMATION
====================
Email: ${data.contactEmail}

====================
PROJECT OVERVIEW
====================
Budget: ${data.budget} ${data.currency}
Timeline: ${timelineMap[data.timeline]}
Start Date: ${formatDate(data.startDate)}
Due Date: ${formatDate(data.dueDate)}
Urgent Project: ${data.urgentProject ? 'Yes' : 'No'}
Start Immediately: ${data.startImmediately ? 'Yes' : 'No'}

====================
PROJECT DESCRIPTION
====================
${data.projectDescription}

====================
FILE ATTACHMENTS
====================
${uploadedFiles.length > 0 ?
  uploadedFiles.map(f => f.name).join('\n') :
  'No files attached'
}

====================
SUBMISSION DETAILS
====================
Submitted: ${new Date().toLocaleString()}
Files Count: ${uploadedFiles.length}
Locale: ${language}
      `;

      const serviceId = 'service_ugxzpww';
      const templateId = 'template_enrm7gd';
      const publicKey = 'hF6O_JgDy5jUxyk-4';

      await window.emailjs.send(serviceId, templateId, {
        name: data.contactEmail,
        email: data.contactEmail,
        subject: `Project Submission - ${data.budget} ${data.currency} - ${timelineMap[data.timeline]}`,
        message: emailContent
      }, publicKey);

      setIsSubmitted(true);

      toast({
        title: c.toastSuccess,
        description: c.toastSuccessDesc,
      });
    } catch (error) {
      console.error('Error submitting project:', error);
      toast({
        title: c.toastFail,
        description: error instanceof Error ? error.message : c.toastFailDesc,
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-hero-lime flex items-center justify-center p-6">
        <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full text-center border-2 border-theme-gold">
          <div className="w-16 h-16 bg-theme-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-theme-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-theme-olive mb-2">{c.thankYou}</h2>
          <p className="text-gray-600 mb-6">{c.thankYouBody}</p>
          <div className="space-y-3">
            <Button onClick={() => setIsSubmitted(false)} className="w-full bg-theme-olive hover:bg-theme-olive/90 text-white">
              {c.submitAnother}
            </Button>
            <Link to="/">
              <Button variant="outline" className="w-full border-theme-gold text-theme-olive hover:bg-theme-gold/10">
                <ArrowLeft className="w-4 h-4 mr-2" />
                {c.backToHome}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-hero-lime py-12 px-6">
      <Helmet>
        <title>{c.metaTitle}</title>
        <meta name="description" content={c.metaDesc} />
        <link rel="canonical" href="https://arubhardwaj.eu/submit-project" />
        <meta property="og:title" content={c.metaTitle} />
        <meta property="og:description" content={c.ogDesc} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://arubhardwaj.eu/submit-project" />
        <meta property="og:image" content="https://arubhardwaj.eu/images/og-image.jpg" />
        <meta property="og:site_name" content="Aru Bhardwaj - Fractional CTO & AI Strategist" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={c.metaTitle} />
        <meta name="twitter:description" content={c.twitterDesc} />
        <meta name="twitter:image" content="https://arubhardwaj.eu/images/og-image.jpg" />
      </Helmet>
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-theme-olive hover:text-theme-gold transition-colors mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            {c.backToHome}
          </Link>

          <div className="text-center">
            <h1 className="text-4xl font-bold text-theme-olive mb-4">{c.heading}</h1>
            <p className="text-xl text-gray-700">{c.subtitle}</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-xl p-8 border-2 border-theme-gold">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="projectDescription"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg font-semibold text-theme-olive">{c.descLabel}</FormLabel>
                    <div className="space-y-2">
                      <FormControl>
                        <Textarea
                          placeholder={c.descPlaceholder}
                          className="min-h-[120px] border-2 border-gray-200 focus:border-theme-gold"
                          {...field}
                        />
                      </FormControl>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="budget"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg font-semibold text-theme-olive">{c.budgetLabel}</FormLabel>
                    <div className="flex gap-2">
                      <FormControl>
                        <Input
                          type="number"
                          placeholder={c.budgetPlaceholder}
                          className="border-2 border-gray-200 focus:border-theme-gold"
                          {...field}
                          onChange={(e) => field.onChange(parseFloat(e.target.value) || 0)}
                        />
                      </FormControl>
                      <FormField
                        control={form.control}
                        name="currency"
                        render={({ field }) => (
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="w-24 border-2 border-gray-200 focus:border-theme-gold">
                                <SelectValue />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="USD">USD</SelectItem>
                              <SelectItem value="EUR">EUR</SelectItem>
                            </SelectContent>
                          </Select>
                        )}
                      />
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="contactEmail"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg font-semibold text-theme-olive">{c.emailLabel}</FormLabel>
                    <FormControl>
                      <Input
                        placeholder={c.emailPlaceholder}
                        className="border-2 border-gray-200 focus:border-theme-gold"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="timeline"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg font-semibold text-theme-olive">{c.timelineLabel}</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="border-2 border-gray-200 focus:border-theme-gold">
                          <SelectValue placeholder={c.timelinePlaceholder} />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="less-than-month">{c.timelineLess1}</SelectItem>
                        <SelectItem value="1-3-months">{c.timeline1to3}</SelectItem>
                        <SelectItem value="3-6-months">{c.timeline3to6}</SelectItem>
                        <SelectItem value="6-months-plus">{c.timeline6plus}</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="startDate"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel className="text-theme-olive">{c.startDateLabel}</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant="outline"
                              className={cn(
                                'w-full pl-3 text-left font-normal border-2 border-gray-200 hover:border-theme-gold',
                                !field.value && 'text-muted-foreground'
                              )}
                            >
                              {field.value ? (
                                format(field.value, 'PPP')
                              ) : (
                                <span>{c.pickDate}</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) => date < new Date()}
                            initialFocus
                            className="pointer-events-auto"
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="dueDate"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel className="text-theme-olive">{c.dueDateLabel}</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant="outline"
                              className={cn(
                                'w-full pl-3 text-left font-normal border-2 border-gray-200 hover:border-theme-gold',
                                !field.value && 'text-muted-foreground'
                              )}
                            >
                              {field.value ? (
                                format(field.value, 'PPP')
                              ) : (
                                <span>{c.pickDate}</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) => date < getMinDueDate()}
                            initialFocus
                            className="pointer-events-auto"
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="space-y-4">
                <label className="text-lg font-semibold text-theme-olive">{c.docsLabel}</label>
                <div className="border-2 border-dashed border-theme-gold rounded-lg p-6 text-center bg-theme-gold/5">
                  <Upload className="w-12 h-12 text-theme-gold mx-auto mb-4" />
                  <p className="text-gray-600 mb-2">{c.uploadHint}</p>
                  <input
                    type="file"
                    multiple
                    accept=".pdf,.doc,.docx,.csv,.xls,.xlsx"
                    onChange={handleFileUpload}
                    className="hidden"
                    id="file-upload"
                  />
                  <Button type="button" variant="outline" asChild className="border-theme-gold text-theme-olive hover:bg-theme-gold/10">
                    <label htmlFor="file-upload" className="cursor-pointer">
                      {c.chooseFiles}
                    </label>
                  </Button>
                </div>

                {uploadedFiles.length > 0 && (
                  <div className="space-y-2">
                    {uploadedFiles.map((file, index) => (
                      <div key={index} className="flex items-center justify-between bg-theme-gold/10 p-3 rounded border border-theme-gold">
                        <div className="flex items-center space-x-2">
                          <FileText className="w-4 h-4 text-theme-olive" />
                          <span className="text-sm">{file.name}</span>
                        </div>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => removeFile(index)}
                          className="text-theme-olive hover:text-red-600"
                        >
                          {c.removeFile}
                        </Button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="urgentProject"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          className="border-theme-gold data-[state=checked]:bg-theme-gold"
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="text-theme-olive">{c.urgentProject}</FormLabel>
                      </div>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="startImmediately"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          className="border-theme-gold data-[state=checked]:bg-theme-gold"
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="text-theme-olive">{c.startImmediately}</FormLabel>
                      </div>
                    </FormItem>
                  )}
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full text-lg py-6 bg-theme-olive hover:bg-theme-olive/90 text-white"
              >
                {isSubmitting ? c.submitting : c.submitButton}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SubmitProject;

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
import { CalendarIcon, Upload, FileText, ArrowLeft, User, Building2, Briefcase, CalendarDays, Euro, Shield, CheckCircle2 } from 'lucide-react';
import { format, addDays } from 'date-fns';
import { cn } from '@/lib/utils';
import { toast } from '@/hooks/use-toast';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

type Lang = 'en' | 'it' | 'fr' | 'de';

// Convert a File to base64 for transport to our API endpoint (Resend)
const fileToBase64 = (file: File): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      // Strip the data URL prefix: "data:<mime>;base64,<payload>"
      const comma = result.indexOf(',');
      resolve(comma === -1 ? result : result.slice(comma + 1));
    };
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });

const formSchema = z.object({
  fullName: z.string().min(2, 'Please enter your full name'),
  contactEmail: z.string().email('Please enter a valid email address'),
  companyName: z.string().min(2, 'Please enter your company or organisation'),
  companyWebsite: z.string().optional().or(z.literal('')),
  serviceInterest: z.enum(['fractional-cto', 'mvp', 'sovereign-ai', 'consultation', 'other']),
  projectDescription: z.string().min(50, 'Project description must be at least 50 characters'),
  budget: z.number().min(1, 'Please enter an estimated budget in EUR'),
  timeline: z.enum(['less-than-month', '1-3-months', '3-6-months', '6-months-plus', 'ongoing-retainer']),
  startDate: z.date().optional(),
  dueDate: z.date().optional(),
  urgentProject: z.boolean().default(false),
  howHeard: z.string().optional(),
  gdprConsent: z.literal(true, {
    errorMap: () => ({ message: 'You must agree to be contacted about your project' })
  })
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
    metaDesc: 'Submit your AI, LLM, MVP, or Fractional CTO project directly to a Paris-based Fractional CTO. Response within 1 business day. No platform fees.',
    ogDesc: 'Submit your AI, LLM, MVP, or Fractional CTO project directly. Paris-based, sovereign-cloud ready. Response within 1 business day.',
    twitterDesc: 'Submit your AI or data science project directly. No platform fees. Response within 1 business day.',
    backToHome: 'Back to Home',
    heading: 'Tell me about your project',
    subtitle: "Send a detailed brief and I'll come back to you within 1 business day with honest feedback, a proposed scope, or a direct yes/no.",
    responseLine: '⚡ Typical response: same business day. Treated confidentially.',
    sec1: 'About you',
    sec2: 'About your project',
    sec3: 'Timeline & budget',
    sec4: 'Extras',
    nameLabel: 'Full name *',
    namePlaceholder: 'Jane Dupont',
    emailLabel: 'Business email *',
    emailPlaceholder: 'jane@yourcompany.com',
    companyLabel: 'Company / organisation *',
    companyPlaceholder: 'Acme SAS',
    websiteLabel: 'Website or LinkedIn (optional)',
    websitePlaceholder: 'yourcompany.com or linkedin.com/in/you',
    serviceLabel: 'What are you interested in? *',
    servicePlaceholder: 'Select a service',
    serviceFractional: 'Fractional CTO engagement',
    serviceMvp: 'AI-powered MVP build',
    serviceSovereign: 'Sovereign AI / GDPR-compliant LLM',
    serviceConsultation: 'One-off consultation (30 or 60 min)',
    serviceOther: 'Something else — will explain below',
    descLabel: 'Project description *',
    descPlaceholder: 'What are you building or trying to solve? Include current stack, team size, stage of company, and any constraints (regulatory, deadlines, budget).',
    budgetLabel: 'Estimated budget in EUR *',
    budgetPlaceholder: '25000',
    budgetHint: 'Rough order of magnitude is fine. Helps me gauge scope.',
    timelineLabel: 'Timeline *',
    timelinePlaceholder: 'Select timeline',
    timelineLess1: 'Less than 1 month',
    timeline1to3: '1-3 months',
    timeline3to6: '3-6 months',
    timeline6plus: '6+ months',
    timelineOngoing: 'Ongoing retainer',
    startDateLabel: 'Preferred start date (optional)',
    dueDateLabel: 'Preferred due date (optional)',
    pickDate: 'Pick a date',
    docsLabel: 'Attachments (optional)',
    uploadHint: 'PDF, DOC, CSV, or Excel · max 5 files, 10 MB each',
    chooseFiles: 'Choose files',
    removeFile: 'Remove',
    urgentProject: 'This is urgent — please prioritise',
    howHeardLabel: 'How did you hear about me? (optional)',
    howHeardPlaceholder: 'LinkedIn, a referral, search, podcast, etc.',
    gdprLabel: 'I agree to be contacted about this project and acknowledge the',
    gdprLinkText: 'Legal Notice & Privacy',
    submitButton: 'Send project brief',
    submitting: 'Sending…',
    thankYou: 'Thank you — brief received',
    thankYouBody: 'Your project has been sent. I typically respond within 1 business day with either a proposed scope, a clarifying question, or an honest "not a fit". Check your inbox (and spam) for confirmation.',
    submitAnother: 'Submit another project',
    toastInvalidType: 'Unsupported file type',
    toastInvalidTypeDesc: (name: string) => `"${name}" is not supported. Upload PDF, DOC, DOCX, CSV, or Excel files.`,
    toastTooLarge: 'File too large',
    toastTooLargeDesc: (name: string) => `"${name}" exceeds the 10 MB limit.`,
    toastTooMany: 'Too many files',
    toastTooManyDesc: (max: number) => `Maximum ${max} files allowed.`,
    toastSuccess: 'Project brief received',
    toastSuccessDesc: 'I will respond within 1 business day. Check your email for confirmation.',
    toastFail: 'Submission failed',
    toastFailDesc: 'Could not send your brief. Please try again or email aru.bhardwaj@insightrix.eu directly.'
  },
  it: {
    metaTitle: 'Invia il Tuo Progetto AI | Aru Bhardwaj — Fractional CTO',
    metaDesc: 'Invia il tuo progetto AI, LLM, MVP o Fractional CTO direttamente a un Fractional CTO con sede a Parigi. Risposta entro 1 giorno lavorativo. Nessuna commissione di piattaforma.',
    ogDesc: 'Invia il tuo progetto AI, LLM, MVP o Fractional CTO direttamente. Con sede a Parigi, pronto per cloud sovrano. Risposta entro 1 giorno lavorativo.',
    twitterDesc: 'Invia il tuo progetto AI o data science direttamente. Nessuna commissione di piattaforma. Risposta entro 1 giorno lavorativo.',
    backToHome: 'Torna alla Home',
    heading: 'Raccontami del tuo progetto',
    subtitle: 'Invia un brief dettagliato e ti risponderò entro 1 giorno lavorativo con feedback onesto, uno scope proposto o un sì/no diretto.',
    responseLine: '⚡ Risposta tipica: stesso giorno lavorativo. Trattato in modo confidenziale.',
    sec1: 'Su di te',
    sec2: 'Sul tuo progetto',
    sec3: 'Tempistiche e budget',
    sec4: 'Extra',
    nameLabel: 'Nome completo *',
    namePlaceholder: 'Marco Rossi',
    emailLabel: 'Email aziendale *',
    emailPlaceholder: 'marco@tuaazienda.com',
    companyLabel: 'Azienda / organizzazione *',
    companyPlaceholder: 'Acme SRL',
    websiteLabel: 'Sito web o LinkedIn (opzionale)',
    websitePlaceholder: 'tuaazienda.com o linkedin.com/in/tuonome',
    serviceLabel: "Cosa ti interessa? *",
    servicePlaceholder: 'Seleziona un servizio',
    serviceFractional: 'Ingaggio Fractional CTO',
    serviceMvp: 'Costruzione MVP basato su AI',
    serviceSovereign: 'AI sovrana / LLM GDPR-compliant',
    serviceConsultation: 'Consulenza one-off (30 o 60 min)',
    serviceOther: "Qualcos'altro — spiego sotto",
    descLabel: 'Descrizione del progetto *',
    descPlaceholder: 'Cosa stai costruendo o cercando di risolvere? Includi stack attuale, dimensione del team, stadio aziendale e vincoli (regolamentari, deadline, budget).',
    budgetLabel: 'Budget stimato in EUR *',
    budgetPlaceholder: '25000',
    budgetHint: 'Un ordine di grandezza approssimativo va bene. Aiuta a valutare lo scope.',
    timelineLabel: 'Tempistiche *',
    timelinePlaceholder: 'Seleziona tempistica',
    timelineLess1: 'Meno di 1 mese',
    timeline1to3: '1-3 mesi',
    timeline3to6: '3-6 mesi',
    timeline6plus: '6+ mesi',
    timelineOngoing: 'Retainer continuativo',
    startDateLabel: 'Data di inizio preferita (opzionale)',
    dueDateLabel: 'Data di consegna preferita (opzionale)',
    pickDate: 'Scegli una data',
    docsLabel: 'Allegati (opzionale)',
    uploadHint: 'PDF, DOC, CSV o Excel · max 5 file, 10 MB ciascuno',
    chooseFiles: 'Scegli file',
    removeFile: 'Rimuovi',
    urgentProject: 'È urgente — dagli priorità',
    howHeardLabel: 'Come hai saputo di me? (opzionale)',
    howHeardPlaceholder: 'LinkedIn, una referenza, ricerca, podcast, ecc.',
    gdprLabel: 'Acconsento a essere contattato su questo progetto e riconosco le',
    gdprLinkText: 'Note Legali e Privacy',
    submitButton: 'Invia brief del progetto',
    submitting: 'Invio…',
    thankYou: 'Grazie — brief ricevuto',
    thankYouBody: 'Il tuo progetto è stato inviato. Rispondo tipicamente entro 1 giorno lavorativo con uno scope proposto, una domanda di chiarimento o un onesto "non sono la persona giusta". Controlla la tua casella di posta (e spam) per la conferma.',
    submitAnother: 'Invia un altro progetto',
    toastInvalidType: 'Tipo di file non supportato',
    toastInvalidTypeDesc: (name: string) => `"${name}" non è supportato. Carica PDF, DOC, DOCX, CSV o Excel.`,
    toastTooLarge: 'File troppo grande',
    toastTooLargeDesc: (name: string) => `"${name}" supera il limite di 10 MB.`,
    toastTooMany: 'Troppi file',
    toastTooManyDesc: (max: number) => `Massimo ${max} file consentiti.`,
    toastSuccess: 'Brief ricevuto',
    toastSuccessDesc: 'Risponderò entro 1 giorno lavorativo. Controlla la tua email per la conferma.',
    toastFail: 'Invio fallito',
    toastFailDesc: "Impossibile inviare il brief. Riprova o scrivi direttamente a aru.bhardwaj@insightrix.eu."
  },
  fr: {
    metaTitle: 'Soumettez Votre Projet IA | Aru Bhardwaj — Fractional CTO',
    metaDesc: 'Soumettez votre projet IA, LLM, MVP ou Fractional CTO directement à un Fractional CTO basé à Paris. Réponse sous 1 jour ouvré. Aucune commission de plateforme.',
    ogDesc: 'Soumettez votre projet IA, LLM, MVP ou Fractional CTO directement. Basé à Paris, prêt pour cloud souverain. Réponse sous 1 jour ouvré.',
    twitterDesc: 'Soumettez votre projet IA ou data science directement. Aucune commission de plateforme. Réponse sous 1 jour ouvré.',
    backToHome: "Retour à l'accueil",
    heading: 'Parlez-moi de votre projet',
    subtitle: "Envoyez un brief détaillé et je reviens vers vous sous 1 jour ouvré avec un retour honnête, un scope proposé, ou un oui/non direct.",
    responseLine: '⚡ Réponse typique : même jour ouvré. Traité confidentiellement.',
    sec1: 'À propos de vous',
    sec2: 'À propos du projet',
    sec3: 'Calendrier et budget',
    sec4: 'Extras',
    nameLabel: 'Nom complet *',
    namePlaceholder: 'Jean Dupont',
    emailLabel: 'Email professionnel *',
    emailPlaceholder: 'jean@votreentreprise.com',
    companyLabel: 'Entreprise / organisation *',
    companyPlaceholder: 'Acme SAS',
    websiteLabel: 'Site web ou LinkedIn (optionnel)',
    websitePlaceholder: 'votreentreprise.com ou linkedin.com/in/vous',
    serviceLabel: 'Quel service vous intéresse ? *',
    servicePlaceholder: 'Sélectionnez un service',
    serviceFractional: 'Engagement Fractional CTO',
    serviceMvp: 'Construction MVP IA',
    serviceSovereign: 'IA souveraine / LLM conforme RGPD',
    serviceConsultation: 'Consultation ponctuelle (30 ou 60 min)',
    serviceOther: "Autre — j'explique ci-dessous",
    descLabel: 'Description du projet *',
    descPlaceholder: 'Que construisez-vous ou cherchez-vous à résoudre ? Incluez votre stack actuelle, taille de l\'équipe, stade de l\'entreprise, et toute contrainte (réglementaire, délais, budget).',
    budgetLabel: 'Budget estimé en EUR *',
    budgetPlaceholder: '25000',
    budgetHint: "Un ordre de grandeur approximatif convient. M'aide à évaluer le scope.",
    timelineLabel: 'Calendrier *',
    timelinePlaceholder: 'Sélectionnez un calendrier',
    timelineLess1: "Moins d'1 mois",
    timeline1to3: '1-3 mois',
    timeline3to6: '3-6 mois',
    timeline6plus: '6+ mois',
    timelineOngoing: 'Forfait mensuel continu',
    startDateLabel: 'Date de début préférée (optionnel)',
    dueDateLabel: 'Date de livraison préférée (optionnel)',
    pickDate: 'Choisir une date',
    docsLabel: 'Pièces jointes (optionnel)',
    uploadHint: 'PDF, DOC, CSV ou Excel · max 5 fichiers, 10 Mo chacun',
    chooseFiles: 'Choisir des fichiers',
    removeFile: 'Retirer',
    urgentProject: "C'est urgent — prioritisez",
    howHeardLabel: 'Comment avez-vous entendu parler de moi ? (optionnel)',
    howHeardPlaceholder: 'LinkedIn, une recommandation, recherche, podcast, etc.',
    gdprLabel: "J'accepte d'être contacté au sujet de ce projet et reconnais les",
    gdprLinkText: 'Mentions Légales & Confidentialité',
    submitButton: 'Envoyer le brief',
    submitting: 'Envoi…',
    thankYou: 'Merci — brief reçu',
    thankYouBody: 'Votre projet a été envoyé. Je réponds généralement sous 1 jour ouvré avec un scope proposé, une question de clarification, ou un honnête « pas le bon fit ». Vérifiez votre boîte mail (et spam) pour la confirmation.',
    submitAnother: 'Soumettre un autre projet',
    toastInvalidType: 'Type de fichier non supporté',
    toastInvalidTypeDesc: (name: string) => `"${name}" n'est pas pris en charge. Uploadez des fichiers PDF, DOC, DOCX, CSV ou Excel.`,
    toastTooLarge: 'Fichier trop volumineux',
    toastTooLargeDesc: (name: string) => `"${name}" dépasse la limite de 10 Mo.`,
    toastTooMany: 'Trop de fichiers',
    toastTooManyDesc: (max: number) => `Maximum ${max} fichiers autorisés.`,
    toastSuccess: 'Brief reçu',
    toastSuccessDesc: 'Je réponds sous 1 jour ouvré. Vérifiez votre email pour la confirmation.',
    toastFail: 'Échec de la soumission',
    toastFailDesc: "Impossible d'envoyer le brief. Réessayez ou écrivez directement à aru.bhardwaj@insightrix.eu."
  },
  de: {
    metaTitle: 'Reichen Sie Ihr KI-Projekt Ein | Aru Bhardwaj — Fractional CTO',
    metaDesc: 'Reichen Sie Ihr KI-, LLM-, MVP- oder Fractional-CTO-Projekt direkt bei einem in Paris ansässigen Fractional CTO ein. Antwort innerhalb eines Werktags. Keine Plattformgebühren.',
    ogDesc: 'Reichen Sie Ihr KI-, LLM-, MVP- oder Fractional-CTO-Projekt direkt ein. In Paris ansässig, souverän-cloud-ready. Antwort innerhalb eines Werktags.',
    twitterDesc: 'Reichen Sie Ihr KI- oder Data-Science-Projekt direkt ein. Keine Plattformgebühren. Antwort innerhalb eines Werktags.',
    backToHome: 'Zurück zur Startseite',
    heading: 'Erzählen Sie mir von Ihrem Projekt',
    subtitle: 'Schicken Sie ein detailliertes Briefing und ich melde mich innerhalb eines Werktags mit ehrlichem Feedback, einem Scope-Vorschlag oder einem direkten Ja/Nein.',
    responseLine: '⚡ Typische Antwort: gleicher Werktag. Vertraulich behandelt.',
    sec1: 'Über Sie',
    sec2: 'Über Ihr Projekt',
    sec3: 'Zeitplan & Budget',
    sec4: 'Extras',
    nameLabel: 'Vollständiger Name *',
    namePlaceholder: 'Max Mustermann',
    emailLabel: 'Geschäftliche E-Mail *',
    emailPlaceholder: 'max@ihrunternehmen.com',
    companyLabel: 'Unternehmen / Organisation *',
    companyPlaceholder: 'Acme GmbH',
    websiteLabel: 'Website oder LinkedIn (optional)',
    websitePlaceholder: 'ihrunternehmen.com oder linkedin.com/in/sie',
    serviceLabel: 'Woran sind Sie interessiert? *',
    servicePlaceholder: 'Leistung auswählen',
    serviceFractional: 'Fractional-CTO-Engagement',
    serviceMvp: 'KI-MVP-Entwicklung',
    serviceSovereign: 'Souveräne KI / DSGVO-konforme LLMs',
    serviceConsultation: 'Einmalige Beratung (30 oder 60 Min.)',
    serviceOther: 'Etwas anderes — erkläre unten',
    descLabel: 'Projektbeschreibung *',
    descPlaceholder: 'Was bauen Sie oder wollen Sie lösen? Nennen Sie aktuellen Stack, Teamgröße, Unternehmensphase und Einschränkungen (regulatorisch, Deadlines, Budget).',
    budgetLabel: 'Geschätztes Budget in EUR *',
    budgetPlaceholder: '25000',
    budgetHint: 'Eine grobe Größenordnung reicht. Hilft mir, den Scope einzuschätzen.',
    timelineLabel: 'Zeitplan *',
    timelinePlaceholder: 'Zeitplan auswählen',
    timelineLess1: 'Weniger als 1 Monat',
    timeline1to3: '1-3 Monate',
    timeline3to6: '3-6 Monate',
    timeline6plus: '6+ Monate',
    timelineOngoing: 'Laufender Retainer',
    startDateLabel: 'Bevorzugtes Startdatum (optional)',
    dueDateLabel: 'Bevorzugtes Abgabedatum (optional)',
    pickDate: 'Datum wählen',
    docsLabel: 'Anhänge (optional)',
    uploadHint: 'PDF, DOC, CSV oder Excel · max. 5 Dateien, 10 MB je Datei',
    chooseFiles: 'Dateien auswählen',
    removeFile: 'Entfernen',
    urgentProject: 'Das ist dringend — bitte priorisieren',
    howHeardLabel: 'Wie haben Sie von mir gehört? (optional)',
    howHeardPlaceholder: 'LinkedIn, Empfehlung, Suche, Podcast usw.',
    gdprLabel: 'Ich stimme zu, zu diesem Projekt kontaktiert zu werden, und bestätige das',
    gdprLinkText: 'Impressum & Datenschutz',
    submitButton: 'Briefing senden',
    submitting: 'Wird gesendet…',
    thankYou: 'Danke — Briefing erhalten',
    thankYouBody: 'Ihr Projekt ist angekommen. Ich melde mich typischerweise innerhalb eines Werktags mit einem Scope-Vorschlag, einer Klarstellungsfrage oder einem ehrlichen „kein passender Fit". Prüfen Sie Ihr Postfach (und Spam) auf die Bestätigung.',
    submitAnother: 'Weiteres Projekt einreichen',
    toastInvalidType: 'Nicht unterstützter Dateityp',
    toastInvalidTypeDesc: (name: string) => `„${name}" wird nicht unterstützt. Laden Sie PDF-, DOC-, DOCX-, CSV- oder Excel-Dateien hoch.`,
    toastTooLarge: 'Datei zu groß',
    toastTooLargeDesc: (name: string) => `„${name}" überschreitet das 10-MB-Limit.`,
    toastTooMany: 'Zu viele Dateien',
    toastTooManyDesc: (max: number) => `Maximal ${max} Dateien erlaubt.`,
    toastSuccess: 'Briefing erhalten',
    toastSuccessDesc: 'Ich antworte innerhalb eines Werktags. Prüfen Sie Ihre E-Mail auf die Bestätigung.',
    toastFail: 'Einreichung fehlgeschlagen',
    toastFailDesc: 'Briefing konnte nicht gesendet werden. Bitte erneut versuchen oder direkt aru.bhardwaj@insightrix.eu schreiben.'
  }
} as const;

const SERVICE_LABELS_EN = {
  'fractional-cto': 'Fractional CTO engagement',
  'mvp': 'AI-powered MVP build',
  'sovereign-ai': 'Sovereign AI / GDPR-compliant LLM',
  'consultation': 'One-off consultation (30 or 60 min)',
  'other': 'Other'
};

const TIMELINE_LABELS_EN = {
  'less-than-month': 'Less than 1 month',
  '1-3-months': '1-3 months',
  '3-6-months': '3-6 months',
  '6-months-plus': '6+ months',
  'ongoing-retainer': 'Ongoing retainer'
};

const SubmitProject = () => {
  const { language } = useLanguage();
  const c = CONTENT[language as Lang];

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      urgentProject: false,
      gdprConsent: false as unknown as true,
    },
  });

  const watchStartDate = form.watch('startDate');

  const getMinDueDate = () => {
    if (watchStartDate) return addDays(watchStartDate, 2);
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
        toast({ title: c.toastInvalidType, description: c.toastInvalidTypeDesc(file.name), variant: 'destructive' });
        return false;
      }
      if (file.size > MAX_FILE_SIZE) {
        toast({ title: c.toastTooLarge, description: c.toastTooLargeDesc(file.name), variant: 'destructive' });
        return false;
      }
      return true;
    });

    if (uploadedFiles.length + validFiles.length > MAX_TOTAL_FILES) {
      toast({ title: c.toastTooMany, description: c.toastTooManyDesc(MAX_TOTAL_FILES), variant: 'destructive' });
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
      const formatDate = (date: Date | undefined) => {
        return date ? format(date, 'PPP') : 'Not specified';
      };

      const emailContent = `NEW PROJECT BRIEF — arubhardwaj.eu

━━━━━━━━━━━━━━━━━━━━━━━━
CONTACT
━━━━━━━━━━━━━━━━━━━━━━━━
Name:       ${data.fullName}
Email:      ${data.contactEmail}
Company:    ${data.companyName}
Website:    ${data.companyWebsite || '—'}
Locale:     ${language}

━━━━━━━━━━━━━━━━━━━━━━━━
INTEREST
━━━━━━━━━━━━━━━━━━━━━━━━
Service:    ${SERVICE_LABELS_EN[data.serviceInterest]}
Urgent:     ${data.urgentProject ? 'YES — please prioritise' : 'No'}
Heard via:  ${data.howHeard || '—'}

━━━━━━━━━━━━━━━━━━━━━━━━
PROJECT DESCRIPTION
━━━━━━━━━━━━━━━━━━━━━━━━
${data.projectDescription}

━━━━━━━━━━━━━━━━━━━━━━━━
BUDGET & TIMELINE
━━━━━━━━━━━━━━━━━━━━━━━━
Budget:     €${data.budget.toLocaleString('en-US')} EUR
Timeline:   ${TIMELINE_LABELS_EN[data.timeline]}
Start date: ${formatDate(data.startDate)}
Due date:   ${formatDate(data.dueDate)}

━━━━━━━━━━━━━━━━━━━━━━━━
ATTACHMENTS
━━━━━━━━━━━━━━━━━━━━━━━━
${uploadedFiles.length > 0 ? uploadedFiles.map((f, i) => `${i + 1}. ${f.name} (${(f.size / 1024 / 1024).toFixed(1)} MB)`).join('\n') : 'No files attached'}

━━━━━━━━━━━━━━━━━━━━━━━━
METADATA
━━━━━━━━━━━━━━━━━━━━━━━━
Submitted:  ${new Date().toISOString()}
GDPR:       Consent given
`;

      const shortService = SERVICE_LABELS_EN[data.serviceInterest];
      const urgentPrefix = data.urgentProject ? '[URGENT] ' : '';
      const subject = `${urgentPrefix}New brief: ${shortService} — ${data.companyName} — €${data.budget.toLocaleString('en-US')}`;

      // Encode files for transport as base64
      const attachmentPayload = await Promise.all(
        uploadedFiles.map(async (file) => ({
          filename: file.name,
          content: await fileToBase64(file)
        }))
      );

      const response = await fetch('/api/submit-project', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          subject,
          message: emailContent,
          fromName: data.fullName,
          fromEmail: data.contactEmail,
          attachments: attachmentPayload
        })
      });

      if (!response.ok) {
        const errBody = await response.json().catch(() => ({ error: 'Request failed' }));
        throw new Error(errBody.error || `Request failed with status ${response.status}`);
      }

      setIsSubmitted(true);
      toast({ title: c.toastSuccess, description: c.toastSuccessDesc });
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
        <div className="bg-white rounded-2xl shadow-xl p-10 max-w-md w-full text-center border-2 border-theme-gold">
          <div className="w-16 h-16 bg-theme-gold/20 rounded-full flex items-center justify-center mx-auto mb-5">
            <CheckCircle2 className="w-9 h-9 text-theme-gold" />
          </div>
          <h2 className="text-2xl font-bold text-theme-olive mb-3">{c.thankYou}</h2>
          <p className="text-gray-600 mb-7 leading-relaxed">{c.thankYouBody}</p>
          <div className="space-y-3">
            <Button onClick={() => { setIsSubmitted(false); form.reset(); setUploadedFiles([]); }} className="w-full bg-theme-olive hover:bg-theme-olive/90 text-white">
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

  const SectionHeader = ({ icon: Icon, title }: { icon: React.ElementType; title: string }) => (
    <div className="flex items-center gap-3 mb-5 pb-3 border-b border-gray-200">
      <div className="w-9 h-9 rounded-lg bg-theme-gold/15 flex items-center justify-center">
        <Icon className="w-5 h-5 text-theme-gold" />
      </div>
      <h2 className="text-lg font-bold text-theme-olive">{title}</h2>
    </div>
  );

  return (
    <div className="min-h-screen bg-hero-lime py-12 px-6">
      <Helmet>
        <title>{c.metaTitle}</title>
        <meta name="description" content={c.metaDesc} />
        <meta name="robots" content="index, follow" />
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
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-theme-olive hover:text-theme-gold transition-colors mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            {c.backToHome}
          </Link>

          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-theme-olive mb-3">{c.heading}</h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">{c.subtitle}</p>
            <p className="text-sm text-theme-olive/80 mt-3">{c.responseLine}</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10 border border-theme-gold/40">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">

              {/* Section 1 — About you */}
              <section>
                <SectionHeader icon={User} title={c.sec1} />
                <div className="grid md:grid-cols-2 gap-4">
                  <FormField control={form.control} name="fullName" render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-theme-olive">{c.nameLabel}</FormLabel>
                      <FormControl>
                        <Input placeholder={c.namePlaceholder} className="border-gray-300 focus:border-theme-gold" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />

                  <FormField control={form.control} name="contactEmail" render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-theme-olive">{c.emailLabel}</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder={c.emailPlaceholder} className="border-gray-300 focus:border-theme-gold" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />

                  <FormField control={form.control} name="companyName" render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-theme-olive">{c.companyLabel}</FormLabel>
                      <FormControl>
                        <Input placeholder={c.companyPlaceholder} className="border-gray-300 focus:border-theme-gold" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />

                  <FormField control={form.control} name="companyWebsite" render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-theme-olive">{c.websiteLabel}</FormLabel>
                      <FormControl>
                        <Input placeholder={c.websitePlaceholder} className="border-gray-300 focus:border-theme-gold" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                </div>
              </section>

              {/* Section 2 — About project */}
              <section>
                <SectionHeader icon={Briefcase} title={c.sec2} />
                <div className="space-y-4">
                  <FormField control={form.control} name="serviceInterest" render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-theme-olive">{c.serviceLabel}</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="border-gray-300 focus:border-theme-gold">
                            <SelectValue placeholder={c.servicePlaceholder} />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="fractional-cto">{c.serviceFractional}</SelectItem>
                          <SelectItem value="mvp">{c.serviceMvp}</SelectItem>
                          <SelectItem value="sovereign-ai">{c.serviceSovereign}</SelectItem>
                          <SelectItem value="consultation">{c.serviceConsultation}</SelectItem>
                          <SelectItem value="other">{c.serviceOther}</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )} />

                  <FormField control={form.control} name="projectDescription" render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-theme-olive">{c.descLabel}</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder={c.descPlaceholder}
                          className="min-h-[140px] border-gray-300 focus:border-theme-gold"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                </div>
              </section>

              {/* Section 3 — Timeline & budget */}
              <section>
                <SectionHeader icon={CalendarDays} title={c.sec3} />
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <FormField control={form.control} name="budget" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-theme-olive">{c.budgetLabel}</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Euro className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                            <Input
                              type="number"
                              placeholder={c.budgetPlaceholder}
                              className="border-gray-300 focus:border-theme-gold pl-9"
                              {...field}
                              onChange={(e) => field.onChange(parseFloat(e.target.value) || 0)}
                            />
                          </div>
                        </FormControl>
                        <p className="text-xs text-gray-500">{c.budgetHint}</p>
                        <FormMessage />
                      </FormItem>
                    )} />

                    <FormField control={form.control} name="timeline" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-theme-olive">{c.timelineLabel}</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="border-gray-300 focus:border-theme-gold">
                              <SelectValue placeholder={c.timelinePlaceholder} />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="less-than-month">{c.timelineLess1}</SelectItem>
                            <SelectItem value="1-3-months">{c.timeline1to3}</SelectItem>
                            <SelectItem value="3-6-months">{c.timeline3to6}</SelectItem>
                            <SelectItem value="6-months-plus">{c.timeline6plus}</SelectItem>
                            <SelectItem value="ongoing-retainer">{c.timelineOngoing}</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )} />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <FormField control={form.control} name="startDate" render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel className="text-sm font-medium text-theme-olive">{c.startDateLabel}</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button variant="outline" className={cn('w-full pl-3 text-left font-normal border-gray-300 hover:border-theme-gold', !field.value && 'text-muted-foreground')}>
                                {field.value ? format(field.value, 'PPP') : <span>{c.pickDate}</span>}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar mode="single" selected={field.value} onSelect={field.onChange} disabled={(date) => date < new Date()} initialFocus className="pointer-events-auto" />
                          </PopoverContent>
                        </Popover>
                        <FormMessage />
                      </FormItem>
                    )} />

                    <FormField control={form.control} name="dueDate" render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel className="text-sm font-medium text-theme-olive">{c.dueDateLabel}</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button variant="outline" className={cn('w-full pl-3 text-left font-normal border-gray-300 hover:border-theme-gold', !field.value && 'text-muted-foreground')}>
                                {field.value ? format(field.value, 'PPP') : <span>{c.pickDate}</span>}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar mode="single" selected={field.value} onSelect={field.onChange} disabled={(date) => date < getMinDueDate()} initialFocus className="pointer-events-auto" />
                          </PopoverContent>
                        </Popover>
                        <FormMessage />
                      </FormItem>
                    )} />
                  </div>

                  <FormField control={form.control} name="urgentProject" render={({ field }) => (
                    <FormItem className="flex flex-row items-center space-x-3 space-y-0 bg-theme-gold/5 border border-theme-gold/30 rounded-lg p-4">
                      <FormControl>
                        <Checkbox checked={field.value} onCheckedChange={field.onChange} className="border-theme-gold data-[state=checked]:bg-theme-gold" />
                      </FormControl>
                      <FormLabel className="text-sm text-theme-olive cursor-pointer m-0">{c.urgentProject}</FormLabel>
                    </FormItem>
                  )} />
                </div>
              </section>

              {/* Section 4 — Extras */}
              <section>
                <SectionHeader icon={Building2} title={c.sec4} />
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-theme-olive mb-2">{c.docsLabel}</label>
                    <div className="border-2 border-dashed border-theme-gold/50 rounded-lg p-6 text-center bg-theme-gold/5">
                      <Upload className="w-10 h-10 text-theme-gold mx-auto mb-3" />
                      <p className="text-sm text-gray-600 mb-3">{c.uploadHint}</p>
                      <input type="file" multiple accept=".pdf,.doc,.docx,.csv,.xls,.xlsx" onChange={handleFileUpload} className="hidden" id="file-upload" />
                      <Button type="button" variant="outline" asChild className="border-theme-gold text-theme-olive hover:bg-theme-gold/10">
                        <label htmlFor="file-upload" className="cursor-pointer">
                          {c.chooseFiles}
                        </label>
                      </Button>
                    </div>

                    {uploadedFiles.length > 0 && (
                      <div className="space-y-2 mt-3">
                        {uploadedFiles.map((file, index) => (
                          <div key={index} className="flex items-center justify-between bg-theme-gold/10 p-3 rounded border border-theme-gold/40">
                            <div className="flex items-center space-x-2 min-w-0">
                              <FileText className="w-4 h-4 text-theme-olive shrink-0" />
                              <span className="text-sm truncate">{file.name}</span>
                              <span className="text-xs text-gray-500 shrink-0">· {(file.size / 1024 / 1024).toFixed(1)} MB</span>
                            </div>
                            <Button type="button" variant="ghost" size="sm" onClick={() => removeFile(index)} className="text-theme-olive hover:text-red-600 shrink-0">
                              {c.removeFile}
                            </Button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <FormField control={form.control} name="howHeard" render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-theme-olive">{c.howHeardLabel}</FormLabel>
                      <FormControl>
                        <Input placeholder={c.howHeardPlaceholder} className="border-gray-300 focus:border-theme-gold" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                </div>
              </section>

              {/* GDPR consent + submit */}
              <section className="pt-4 border-t border-gray-200">
                <FormField control={form.control} name="gdprConsent" render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 mb-6">
                    <FormControl>
                      <Checkbox
                        checked={field.value as boolean}
                        onCheckedChange={field.onChange}
                        className="border-theme-olive data-[state=checked]:bg-theme-olive mt-0.5"
                      />
                    </FormControl>
                    <div className="flex-1">
                      <FormLabel className="text-sm text-gray-700 cursor-pointer leading-relaxed">
                        {c.gdprLabel}{' '}
                        <Link to="/legal-notice" className="text-theme-olive underline hover:text-theme-gold">
                          {c.gdprLinkText}
                        </Link>
                        .
                      </FormLabel>
                      <FormMessage />
                    </div>
                  </FormItem>
                )} />

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full text-base py-6 bg-theme-olive hover:bg-theme-olive/90 text-white shadow-md hover:shadow-lg"
                >
                  <Shield className="w-4 h-4 mr-2" />
                  {isSubmitting ? c.submitting : c.submitButton}
                </Button>
              </section>

            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SubmitProject;


import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { InfoIcon } from "lucide-react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProfileSection from "@/components/ProfileSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import IndustriesServed from "@/components/IndustriesServed";
import WhyChooseMe from "@/components/WhyChooseMe";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    // Set document language attribute on mount and language change
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  // SEO title and descriptions based on current language
  const getLocalizedMetadata = () => {
    const baseUrl = "https://arubhardwaj.com";
    
    switch (i18n.language) {
      case 'fr':
        return {
          title: "Aru Bhardwaj | Scientifique des Données · Statisticien · Expert en IA",
          description: "Aru Bhardwaj – Scientifique des données et statisticien basé à Paris. Expert en IA avec un excellent bilan. Autonomisation des entreprises avec des analyses exploitables.",
          keywords: "Scientifique des données, Statisticien, Expert en IA, Apprentissage automatique, Consultant en analyse, Freelance, Aru Bhardwaj, data scientist indépendant, consultant en science des données freelance, expert en data science à distance, prestataire data scientist, data analyst freelance, analyste de données indépendant, mission freelance data science, consultant data analytique contrat, data scientist pour entreprise, spécialiste data analyste, services de data science freelance, consultant data à la demande, data science en CDD, expert freelance en analyse de données, data analyst pour projet",
          canonicalUrl: `${baseUrl}/?lang=fr`
        };
      case 'it':
        return {
          title: "Aru Bhardwaj | Data Scientist · Statistico · Esperto di IA",
          description: "Aru Bhardwaj – Data Scientist e Statistico con sede a Parigi. Esperto di IA con comprovata esperienza. Potenziamento delle aziende con analisi attivabili.",
          keywords: "Data Scientist, Statistico, Esperto di IA, Machine Learning, Consulente di analisi, Freelance, Aru Bhardwaj, data scientist freelance, consulente di data science, data analyst indipendente, esperto di analisi dati freelance, data science contractor, consulente di analisi dati a progetto, data scientist remoto, analista dati freelance, professionista data science in partita IVA, servizi di data analytics freelance, data scientist per aziende, analista dati per progetto, consulente freelance in data science, data science on demand, data analytics contractor",
          canonicalUrl: `${baseUrl}/?lang=it`
        };
      default: // English
        return {
          title: "Aru Bhardwaj | Data Scientist · Statistician · AI Expert",
          description: "Aru Bhardwaj – Paris-based Data Scientist & Statistician. AI expert with proven track record. Empowering businesses with actionable analytics.",
          keywords: "Data Scientist, Statistician, AI Expert, Machine Learning, Analytics Consultant, Freelance Data Scientist, Freelance Data Analyst, Aru Bhardwaj, freelance data scientist, hire data scientist contractor, remote data science consultant, data science freelancer, contract data scientist, data analytics freelancer, data analyst on demand, part-time data scientist, data science consulting services, independent data scientist, freelance data analyst, data analytics contractor, hire data analytics expert, data scientist for hire, temporary data science specialist",
          canonicalUrl: baseUrl
        };
    }
  };

  const metadata = getLocalizedMetadata();

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <link rel="canonical" href={metadata.canonicalUrl} />
        
        {/* Open Graph / Social */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:url" content={metadata.canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content={i18n.language === 'fr' ? 'fr_FR' : i18n.language === 'it' ? 'it_IT' : 'en_US'} />
        
        {/* Alternate language versions - fixed hrefLang camelCase */}
        <link rel="alternate" hrefLang="en" href="https://arubhardwaj.com/" />
        <link rel="alternate" hrefLang="fr" href="https://arubhardwaj.com/?lang=fr" />
        <link rel="alternate" hrefLang="it" href="https://arubhardwaj.com/?lang=it" />
        <link rel="alternate" hrefLang="x-default" href="https://arubhardwaj.com/" />
      </Helmet>
      
      {/* Availability Notice - Updated text in all languages */}
      <div className="fixed top-20 right-4 z-40 max-w-xs">
        <Alert className="border-[#ea384c] border-2 bg-accent/80 backdrop-blur-sm shadow-md">
          <InfoIcon className="h-5 w-5 text-[#ea384c]" />
          <AlertDescription className="text-sm font-medium">
            {i18n.language === 'fr' 
              ? "Important : Ma disponibilité est limitée. Veuillez m'envoyer un message pour vérifier ma disponibilité ou réserver une consultation et je pourrai donner mon avis sur votre projet."
              : i18n.language === 'it'
              ? "Importante: La mia disponibilità è limitata. Si prega di inviarmi un messaggio per verificare la mia disponibilità o prenotare una consulenza e potrò dare un'opinione sul tuo progetto."
              : "Important: My availability is limited. Please send me a message to check my availability or book a consultation and I can give opinion on your project."}
          </AlertDescription>
        </Alert>
      </div>
      
      <Header />
      <main className="flex-grow">
        <Hero />
        <ProfileSection />
        <ExpertiseSection />
        <IndustriesServed />
        <WhyChooseMe />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

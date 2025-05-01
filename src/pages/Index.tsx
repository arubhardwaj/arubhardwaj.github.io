
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
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
          title: "Aru Bhardwaj | Scientifique des Données · Statisticien · Expert en IA · Top-Rated sur Upwork",
          description: "Aru Bhardwaj – Scientifique des données et statisticien basé à Paris. Expert en IA avec un excellent bilan sur Upwork. Autonomisation des entreprises avec des analyses exploitables.",
          keywords: "Scientifique des données, Statisticien, Expert en IA, Apprentissage automatique, Consultant en analyse, Scientifique des données Upwork, Aru Bhardwaj",
          canonicalUrl: `${baseUrl}/?lang=fr`
        };
      case 'it':
        return {
          title: "Aru Bhardwaj | Data Scientist · Statistico · Esperto di IA · Top-Rated su Upwork",
          description: "Aru Bhardwaj – Data Scientist e Statistico con sede a Parigi. Esperto di IA con comprovata esperienza su Upwork. Potenziamento delle aziende con analisi attivabili.",
          keywords: "Data Scientist, Statistico, Esperto di IA, Machine Learning, Consulente di analisi, Data Scientist Upwork, Aru Bhardwaj",
          canonicalUrl: `${baseUrl}/?lang=it`
        };
      default: // English
        return {
          title: "Aru Bhardwaj | Data Scientist · Statistician · AI Expert · Upwork Top-Rated",
          description: "Aru Bhardwaj – Paris-based Data Scientist & Statistician. AI expert with proven Upwork track record. Empowering businesses with actionable analytics.",
          keywords: "Data Scientist, Statistician, AI Expert, Machine Learning, Analytics Consultant, Upwork Data Scientist, Aru Bhardwaj",
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
        
        {/* Alternate language versions */}
        <link rel="alternate" hreflang="en" href="https://arubhardwaj.com/" />
        <link rel="alternate" hreflang="fr" href="https://arubhardwaj.com/?lang=fr" />
        <link rel="alternate" hreflang="it" href="https://arubhardwaj.com/?lang=it" />
        <link rel="alternate" hreflang="x-default" href="https://arubhardwaj.com/" />
      </Helmet>
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

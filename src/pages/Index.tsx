
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

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>{t('meta.title', 'Aru Bhardwaj - Data Scientist')}</title>
        <meta name="description" content={t('meta.description', 'AI and Machine Learning solutions by Aru Bhardwaj. Expert in data science, machine learning algorithms, and AI solutions for businesses.')} />
        <meta name="keywords" content={t('meta.keywords', 'data scientist, AI solutions, machine learning, artificial intelligence, data analysis, Aru Bhardwaj')} />
        <meta property="og:title" content={t('meta.title', 'Aru Bhardwaj - Data Scientist')} />
        <meta property="og:description" content={t('meta.description', 'AI and Machine Learning solutions by Aru Bhardwaj')} />
        <meta name="twitter:title" content={t('meta.title', 'Aru Bhardwaj - Data Scientist')} />
        <meta name="twitter:description" content={t('meta.description', 'AI and Machine Learning solutions by Aru Bhardwaj')} />
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

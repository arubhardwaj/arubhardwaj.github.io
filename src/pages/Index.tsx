
import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProfileSection from "@/components/ProfileSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import IndustriesServed from "@/components/IndustriesServed";
import WhyChooseMe from "@/components/WhyChooseMe";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
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

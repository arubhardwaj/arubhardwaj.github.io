
import React from "react";
import { ArrowDownCircle } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Hero = () => {
  return (
    <section className="py-20 md:py-32 hero-gradient text-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 flex justify-center">
            <Avatar className="h-32 w-32 border-4 border-secondary">
              <AvatarImage src="lovable-uploads/58cbd9bf-9167-4430-b2f0-c0a1d1080f20.png" alt="Aru Bhardwaj" />
              <AvatarFallback>AB</AvatarFallback>
            </Avatar>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Transforming Data Into <span className="text-secondary">Intelligent Solutions</span>
          </h1>
          <p className="text-lg md:text-xl mb-6">
            With 6+ years of specialized experience, I deliver advanced AI and machine learning solutions that drive business growth through data-driven insights. As a certified data scientist, I've helped organizations across multiple sectors leverage their data assets to achieve measurable ROI and competitive advantages.
          </p>
          <div className="bg-white/60 rounded-lg p-4 mb-10 inline-block">
            <p className="text-xl font-bold text-primary">
              Professional Rate: 500 EUR + VAT per day
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#expertise"
              className="bg-primary text-white rounded-full px-8 py-3 font-medium hover:bg-opacity-90 transition"
            >
              Explore My Expertise
            </a>
            <a
              href="#consultation"
              className="bg-secondary text-white rounded-full px-8 py-3 font-medium hover:bg-opacity-90 transition"
            >
              Book a Consultation
            </a>
          </div>
          <div className="mt-16 animate-bounce">
            <a href="#expertise" className="inline-block">
              <ArrowDownCircle size={36} className="text-primary hover:text-secondary transition" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


import React from "react";
import { ArrowDownCircle } from "lucide-react";

const Hero = () => {
  return (
    <section className="py-20 md:py-32 gradient-bg text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Transforming Data Into <span className="text-secondary">Intelligent Solutions</span>
          </h1>
          <p className="text-lg md:text-xl mb-10 text-gray-200">
            I'm a Top-Rated Data Scientist with 5+ years of expertise delivering cutting-edge AI and machine learning solutions across diverse industries. I transform complex data challenges into actionable business intelligence through advanced analytics and custom AI systems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#expertise"
              className="bg-white text-primary rounded-full px-8 py-3 font-medium hover:bg-gray-100 transition"
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
              <ArrowDownCircle size={36} className="text-gray-300 hover:text-white transition" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

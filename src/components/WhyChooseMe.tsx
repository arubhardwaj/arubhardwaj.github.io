
import React from "react";
import { Puzzle, Zap, Search, Handshake, PiggyBank } from "lucide-react";

const WhyChooseMe = () => {
  const advantages = [
    {
      icon: <Puzzle className="h-12 w-12 text-secondary" />,
      title: "AI Strategy Consulting",
      description: "Not just implementation, but strategic guidance on AI adoption to maximize ROI",
    },
    {
      icon: <Zap className="h-12 w-12 text-secondary" />,
      title: "Rapid Prototyping",
      description: "Quick proof-of-concept development to validate AI solutions before full investment",
    },
    {
      icon: <Search className="h-12 w-12 text-secondary" />,
      title: "Explainable AI",
      description: "Making complex models interpretable for stakeholder buy-in and trust",
    },
    {
      icon: <Handshake className="h-12 w-12 text-secondary" />,
      title: "Flexible Collaboration",
      description: "On-call support and timezone-aligned project updates for seamless communication",
    },
    {
      icon: <PiggyBank className="h-12 w-12 text-secondary" />,
      title: "Special Rates",
      description: "Discounted services for non-profits and startups to support innovation",
    },
  ];

  return (
    <section id="why-me" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Sets Me <span className="gradient-text">Apart</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Beyond technical expertise, I offer a comprehensive approach to ensure your AI 
            projects deliver real business value.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-md border border-gray-100 card-hover">
              <div className="mb-4">{advantage.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{advantage.title}</h3>
              <p className="text-gray-600">{advantage.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            I'm committed to not just delivering AI solutions, but ensuring they create 
            meaningful impact for your organization.
          </p>
          <a
            href="#contact"
            className="mt-6 inline-block bg-primary text-white rounded-full px-8 py-3 font-medium hover:bg-opacity-90 transition"
          >
            Let's Work Together
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseMe;

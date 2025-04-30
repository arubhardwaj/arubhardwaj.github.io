
import React from "react";
import { Briefcase, Users, Heart, MonitorSmartphone, PieChart, Building, Globe, Award } from "lucide-react";

const IndustriesServed = () => {
  const industries = [
    {
      icon: <Briefcase className="h-10 w-10 text-secondary" />,
      name: "Management Consulting",
    },
    {
      icon: <Heart className="h-10 w-10 text-secondary" />,
      name: "Healthcare",
    },
    {
      icon: <MonitorSmartphone className="h-10 w-10 text-secondary" />,
      name: "Technology",
    },
    {
      icon: <PieChart className="h-10 w-10 text-secondary" />,
      name: "Marketing",
    },
    {
      icon: <Building className="h-10 w-10 text-secondary" />,
      name: "Real Estate",
    },
    {
      icon: <Users className="h-10 w-10 text-secondary" />,
      name: "Government",
    },
    {
      icon: <Globe className="h-10 w-10 text-secondary" />,
      name: "NGOs",
    },
    {
      icon: <Award className="h-10 w-10 text-secondary" />,
      name: "Political Campaigns",
    },
  ];

  return (
    <section id="industries" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Industries <span className="gradient-text">Served</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            I've helped organizations across various sectors leverage the power of data science
            and AI to achieve their business goals.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm text-center card-hover"
            >
              <div className="flex justify-center mb-4">{industry.icon}</div>
              <h3 className="font-medium">{industry.name}</h3>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Whatever your industry, I can help you leverage AI and machine learning to gain 
            competitive advantages and unlock new opportunities.
          </p>
          <a
            href="#consultation"
            className="mt-6 inline-block bg-secondary text-white rounded-full px-8 py-3 font-medium hover:bg-opacity-90 transition"
          >
            Discuss Your Industry Needs
          </a>
        </div>
      </div>
    </section>
  );
};

export default IndustriesServed;

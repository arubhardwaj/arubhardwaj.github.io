
import {
  Briefcase,
  Heart,
  Laptop,
  LineChart,
  Home,
  Building,
  Building2,
  Vote,
} from "lucide-react";

const IndustriesSection = () => {
  const industries = [
    {
      name: "Management Consulting",
      icon: Briefcase,
      color: "bg-amber-100 text-amber-600",
    },
    {
      name: "Healthcare",
      icon: Heart,
      color: "bg-red-100 text-red-600",
    },
    {
      name: "Technology",
      icon: Laptop,
      color: "bg-indigo-100 text-indigo-600",
    },
    {
      name: "Marketing",
      icon: LineChart,
      color: "bg-green-100 text-green-600",
    },
    {
      name: "Real Estate",
      icon: Home,
      color: "bg-amber-100 text-amber-600",
    },
    {
      name: "Government",
      icon: Building,
      color: "bg-slate-100 text-slate-600",
    },
    {
      name: "NGOs",
      icon: Building2,
      color: "bg-teal-100 text-teal-600",
    },
    {
      name: "Political Campaigns",
      icon: Vote,
      color: "bg-violet-100 text-violet-600",
    },
  ];

  return (
    <section className="py-20 bg-gray-50" id="industries">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="heading-lg mb-4 text-theme-olive">Industries <span className="text-theme-gold">Served</span></h2>
          <p className="text-lg text-gray-600">
            I've helped organizations across various sectors leverage the power
            of data science and AI to achieve their business goals.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow bg-white"
            >
              <div
                className={`h-14 w-14 rounded-full ${industry.color} flex items-center justify-center mb-4`}
              >
                <industry.icon className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-medium text-center text-theme-olive">{industry.name}</h3>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg mb-6">
            Whatever your industry, I can help you leverage AI and machine
            learning to gain competitive advantages and unlock new opportunities.
          </p>
          <a
            href="#contact"
            className="inline-block bg-theme-gold hover:bg-theme-gold/90 text-white px-6 py-3 rounded-md font-medium transition-all duration-300"
          >
            Discuss Your Industry Needs
          </a>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;

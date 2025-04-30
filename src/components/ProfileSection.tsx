
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { BriefcaseBusiness, Briefcase, DollarSign, Calendar } from "lucide-react";

const ProfileSection = () => {
  return (
    <section id="profile" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col items-center md:items-start">
            <div className="mb-6">
              <Avatar className="h-48 w-48 border-4 border-secondary shadow-lg">
                <AvatarImage src="lovable-uploads/58cbd9bf-9167-4430-b2f0-c0a1d1080f20.png" alt="Aru Bhardwaj" />
                <AvatarFallback>AB</AvatarFallback>
              </Avatar>
            </div>
            <h2 className="text-3xl font-bold mb-4 text-primary">Aru Bhardwaj</h2>
            <p className="text-lg mb-6 text-gray-700 max-w-lg">
              As a data scientist and AI consultant with over 6 years of experience, I specialize in turning complex data challenges into strategic business opportunities. My expertise spans machine learning, predictive analytics, and data-driven decision making.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="inline-flex items-center px-4 py-2 bg-accent rounded-full text-sm font-medium">
                <Briefcase size={16} className="mr-2" /> Independent Consultant
              </span>
              <span className="inline-flex items-center px-4 py-2 bg-accent rounded-full text-sm font-medium">
                <Calendar size={16} className="mr-2" /> Available for Projects
              </span>
            </div>
          </div>
          <div>
            <Card className="card-hover border-2 border-secondary/30 bg-secondary/5">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <DollarSign className="h-10 w-10 text-secondary mr-4" />
                  <h3 className="text-2xl font-bold text-primary">Professional Services</h3>
                </div>
                
                <div className="mb-6 p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-xl font-bold mb-2 text-primary">Standard Rate</div>
                  <div className="text-3xl font-bold text-secondary mb-2">500 EUR + VAT</div>
                  <div className="text-gray-600">per day</div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <div className="rounded-full bg-primary/10 p-1 mr-3 mt-1">
                      <svg className="h-4 w-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-700">Customized solutions tailored to your specific business requirements</p>
                  </div>
                  <div className="flex items-start">
                    <div className="rounded-full bg-primary/10 p-1 mr-3 mt-1">
                      <svg className="h-4 w-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-700">Weekly or monthly billing options available for ongoing projects</p>
                  </div>
                  <div className="flex items-start">
                    <div className="rounded-full bg-primary/10 p-1 mr-3 mt-1">
                      <svg className="h-4 w-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-700">Project-based fixed pricing available upon assessment</p>
                  </div>
                </div>
                
                <a 
                  href="#consultation" 
                  className="block w-full bg-secondary text-white text-center rounded-full px-8 py-3 font-medium hover:bg-opacity-90 transition"
                >
                  Schedule a Consultation
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;

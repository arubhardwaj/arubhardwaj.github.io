
import React from 'react';
import { Brain, GitMerge, BarChart3, MessageSquare, Server, Cpu, LineChart, PieChart, MapPin, Cloud, Database } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ExpertiseSection = () => {
  const expertiseAreas = [
    {
      title: "Custom AI Solution Development",
      icon: Brain,
      description: "Design and implement end-to-end ML pipelines tailored to your business objectives"
    },
    {
      title: "Deep Learning Specialist",
      icon: Cpu,
      description: "Expert in CNN, RNN, LSTM, Transformer architectures using TensorFlow/PyTorch"
    },
    {
      title: "Advanced ML Algorithms",
      icon: GitMerge,
      description: "Mastery of Random Forest, XGBoost, SVM, and ensemble methods for optimal predictive accuracy"
    },
    {
      title: "NLP & Computer Vision",
      icon: MessageSquare, 
      description: "Production-ready solutions for text classification, sentiment analysis, image recognition, and generative AI"
    },
    {
      title: "MLOps & Deployment",
      icon: Server,
      description: "Streamlined model deployment with monitoring and maintenance for sustainable AI solutions"
    },
    {
      title: "Statistical Analysis & Modeling",
      icon: BarChart3,
      description: "Proficient in Hypothesis Testing, Mixed Models, ARIMA, and more advanced statistical methods"
    }
  ];
  
  const additionalSkills = [
    {
      title: "Data Visualization & Dashboards",
      icon: PieChart,
      description: "Advanced skills in ggplot2, matplotlib, and R Shiny for insightful visual presentations"
    },
    {
      title: "NLP & Text Analysis",
      icon: MessageSquare,
      description: "Competent in clustering, text generation, and sentiment analysis"
    },
    {
      title: "Geospatial & Biostatistical Analysis",
      icon: MapPin,
      description: "Proficient in applying computational methods to biostatistics and geospatial data"
    },
    {
      title: "AWS Technologies",
      icon: Cloud,
      description: "Knowledgeable in EC2, EMR, Glue, SageMaker, QuickSight"
    },
    {
      title: "Data Scraping & ETL Processes",
      icon: Database,
      description: "Efficient in extracting and processing large datasets"
    },
    {
      title: "Machine Learning & AI",
      icon: Brain,
      description: "Expert in PCA, K-means, Random Forest, XGBoost, SVM, Logistic Regression, Deep Learning using TensorFlow"
    }
  ];

  return (
    <section className="py-20 bg-gray-50" id="expertise">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="heading-lg mb-4 text-theme-olive">
            AI & Machine Learning <span className="text-theme-gold">Expertise</span>
          </h2>
          <p className="text-lg text-gray-600">
            Leveraging cutting-edge technologies and methodologies to deliver transformative AI solutions 
            across various domains and use cases.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {expertiseAreas.map((area, index) => (
            <Card key={index} className="card-hover border-t-4 border-t-theme-gold bg-white">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-yellow-100 flex items-center justify-center mb-4">
                  <area.icon className="h-6 w-6 text-theme-gold" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-theme-olive">{area.title}</h3>
                <p className="text-gray-600">{area.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="heading-md text-center mb-8 text-theme-olive">Additional Key Skills</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalSkills.map((skill, index) => (
              <Card key={index} className="card-hover bg-white">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-full bg-yellow-100 flex items-center justify-center shrink-0">
                      <skill.icon className="h-5 w-5 text-theme-gold" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2 text-theme-olive">{skill.title}</h4>
                      <p className="text-gray-600">{skill.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;


import React from "react";
import { Brain, Code, ChartBar, FileText, Server, LineChart } from "lucide-react";

const ExpertiseSection = () => {
  const expertiseAreas = [
    {
      icon: <Brain size={36} className="text-secondary mb-4" />,
      title: "Custom AI Solution Development",
      description: "Design and implement end-to-end ML pipelines tailored to your business objectives",
    },
    {
      icon: <Code size={36} className="text-secondary mb-4" />,
      title: "Deep Learning Specialist",
      description: "Expert in CNN, RNN, LSTM, Transformer architectures using TensorFlow/PyTorch",
    },
    {
      icon: <ChartBar size={36} className="text-secondary mb-4" />,
      title: "Advanced ML Algorithms",
      description: "Mastery of Random Forest, XGBoost, SVM, and ensemble methods for optimal predictive accuracy",
    },
    {
      icon: <FileText size={36} className="text-secondary mb-4" />,
      title: "NLP & Computer Vision",
      description: "Production-ready solutions for text classification, sentiment analysis, image recognition, and generative AI",
    },
    {
      icon: <Server size={36} className="text-secondary mb-4" />,
      title: "MLOps & Deployment",
      description: "Streamlined model deployment with monitoring and maintenance for sustainable AI solutions",
    },
    {
      icon: <LineChart size={36} className="text-secondary mb-4" />,
      title: "Statistical Analysis & Modelling",
      description: "Proficient in Hypothesis Testing, Mixed Models, ARIMA, and more advanced statistical methods",
    },
  ];

  return (
    <section id="expertise" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            AI & Machine Learning <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Leveraging cutting-edge technologies and methodologies to deliver transformative 
            AI solutions across various domains and use cases.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseAreas.map((area, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-md card-hover border border-gray-100"
            >
              {area.icon}
              <h3 className="text-xl font-semibold mb-2">{area.title}</h3>
              <p className="text-gray-600">{area.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gray-50 rounded-xl p-8 border border-gray-100">
          <h3 className="text-2xl font-semibold mb-6 text-center">Additional Key Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-semibold mb-2">Data Visualization & Dashboards</h4>
              <p className="text-gray-600 text-sm">Advanced skills in ggplot2, matplotlib, and R Shiny for insightful visual presentations</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-semibold mb-2">NLP & Text Analysis</h4>
              <p className="text-gray-600 text-sm">Competent in clustering, text generation, and sentiment analysis</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-semibold mb-2">Geospatial & Biostatistical Analysis</h4>
              <p className="text-gray-600 text-sm">Proficient in applying computational methods to biostatistics and geospatial data</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-semibold mb-2">AWS Technologies</h4>
              <p className="text-gray-600 text-sm">Knowledgeable in EC2, EMR, Glue, Sagemaker, Quicksight</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-semibold mb-2">Data Scraping & ETL Processes</h4>
              <p className="text-gray-600 text-sm">Efficient in extracting and processing large datasets</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-semibold mb-2">Machine Learning & AI</h4>
              <p className="text-gray-600 text-sm">Expert in PCA, K-means, Random Forest, XGBoost, SVM, Logistic Regression, Deep Learning using TensorFlow</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;

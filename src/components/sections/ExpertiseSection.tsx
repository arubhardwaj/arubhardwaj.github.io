
import React from 'react';
import { Brain, GitMerge, BarChart3, MessageSquare, Server, Cpu, LineChart, PieChart, MapPin, Cloud, Database } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const ExpertiseSection = () => {
  const { language, translations } = useLanguage();
  
  const expertiseAreas = [
    {
      title: {
        en: "Custom AI Solution Development",
        it: "Sviluppo di Soluzioni AI Personalizzate",
        fr: "Développement de Solutions IA Personnalisées"
      },
      icon: Brain,
      description: {
        en: "Design and implement end-to-end ML pipelines tailored to your business objectives",
        it: "Progettazione e implementazione di pipeline ML end-to-end su misura per i tuoi obiettivi aziendali",
        fr: "Conception et implémentation de pipelines ML de bout en bout adaptés à vos objectifs commerciaux"
      }
    },
    {
      title: {
        en: "Deep Learning Specialist",
        it: "Specialista in Deep Learning",
        fr: "Spécialiste en Deep Learning"
      },
      icon: Cpu,
      description: {
        en: "Expert in CNN, RNN, LSTM, Transformer architectures using TensorFlow/PyTorch",
        it: "Esperto in architetture CNN, RNN, LSTM, Transformer utilizzando TensorFlow/PyTorch",
        fr: "Expert en architectures CNN, RNN, LSTM, Transformer utilisant TensorFlow/PyTorch"
      }
    },
    {
      title: {
        en: "Advanced ML Algorithms",
        it: "Algoritmi ML Avanzati",
        fr: "Algorithmes ML Avancés"
      },
      icon: GitMerge,
      description: {
        en: "Mastery of Random Forest, XGBoost, SVM, and ensemble methods for optimal predictive accuracy",
        it: "Padronanza di Random Forest, XGBoost, SVM e metodi ensemble per un'ottimale accuratezza predittiva",
        fr: "Maîtrise de Random Forest, XGBoost, SVM et méthodes d'ensemble pour une précision prédictive optimale"
      }
    },
    {
      title: {
        en: "NLP & Computer Vision",
        it: "NLP & Computer Vision",
        fr: "NLP & Vision par Ordinateur"
      },
      icon: MessageSquare,
      description: {
        en: "Production-ready solutions for text classification, sentiment analysis, image recognition, and generative AI",
        it: "Soluzioni pronte per la produzione per classificazione del testo, analisi del sentiment, riconoscimento delle immagini e AI generativa",
        fr: "Solutions prêtes pour la production pour la classification de texte, l'analyse de sentiment, la reconnaissance d'image et l'IA générative"
      }
    },
    {
      title: {
        en: "MLOps & Deployment",
        it: "MLOps & Deployment",
        fr: "MLOps & Déploiement"
      },
      icon: Server,
      description: {
        en: "Streamlined model deployment with monitoring and maintenance for sustainable AI solutions",
        it: "Deployment di modelli semplificato con monitoraggio e manutenzione per soluzioni AI sostenibili",
        fr: "Déploiement de modèles rationalisé avec surveillance et maintenance pour des solutions d'IA durables"
      }
    },
    {
      title: {
        en: "Statistical Analysis & Modeling",
        it: "Analisi Statistica & Modellazione",
        fr: "Analyse Statistique & Modélisation"
      },
      icon: BarChart3,
      description: {
        en: "Proficient in Hypothesis Testing, Mixed Models, ARIMA, and more advanced statistical methods",
        it: "Competente in Test di Ipotesi, Modelli Misti, ARIMA e metodi statistici più avanzati",
        fr: "Compétent en Tests d'Hypothèses, Modèles Mixtes, ARIMA et méthodes statistiques plus avancées"
      }
    }
  ];
  
  const additionalSkills = [
    {
      title: {
        en: "Data Visualization & Dashboards",
        it: "Visualizzazione Dati & Dashboard",
        fr: "Visualisation de Données & Tableaux de Bord"
      },
      icon: PieChart,
      description: {
        en: "Advanced skills in ggplot2, matplotlib, and R Shiny for insightful visual presentations",
        it: "Competenze avanzate in ggplot2, matplotlib e R Shiny per presentazioni visive approfondite",
        fr: "Compétences avancées en ggplot2, matplotlib et R Shiny pour des présentations visuelles perspicaces"
      }
    },
    {
      title: {
        en: "NLP & Text Analysis",
        it: "NLP & Analisi del Testo",
        fr: "NLP & Analyse de Texte"
      },
      icon: MessageSquare,
      description: {
        en: "Competent in clustering, text generation, and sentiment analysis",
        it: "Competente in clustering, generazione di testo e analisi del sentiment",
        fr: "Compétent en clustering, génération de texte et analyse de sentiment"
      }
    },
    {
      title: {
        en: "Geospatial & Biostatistical Analysis",
        it: "Analisi Geospaziale & Biostatistica",
        fr: "Analyse Géospatiale & Biostatistique"
      },
      icon: MapPin,
      description: {
        en: "Proficient in applying computational methods to biostatistics and geospatial data",
        it: "Esperto nell'applicazione di metodi computazionali alla biostatistica e ai dati geospaziali",
        fr: "Compétent dans l'application de méthodes computationnelles aux biostatistiques et aux données géospatiales"
      }
    },
    {
      title: {
        en: "AWS Technologies",
        it: "Tecnologie AWS",
        fr: "Technologies AWS"
      },
      icon: Cloud,
      description: {
        en: "Knowledgeable in EC2, EMR, Glue, SageMaker, QuickSight",
        it: "Conoscenza di EC2, EMR, Glue, SageMaker, QuickSight",
        fr: "Connaissances en EC2, EMR, Glue, SageMaker, QuickSight"
      }
    },
    {
      title: {
        en: "Data Scraping & ETL Processes",
        it: "Scraping dei Dati & Processi ETL",
        fr: "Scraping de Données & Processus ETL"
      },
      icon: Database,
      description: {
        en: "Efficient in extracting and processing large datasets",
        it: "Efficiente nell'estrazione e nell'elaborazione di grandi set di dati",
        fr: "Efficace dans l'extraction et le traitement de grands ensembles de données"
      }
    },
    {
      title: {
        en: "Machine Learning & AI",
        it: "Machine Learning & AI",
        fr: "Apprentissage Automatique & IA"
      },
      icon: Brain,
      description: {
        en: "Expert in PCA, K-means, Random Forest, XGBoost, SVM, Logistic Regression, Deep Learning using TensorFlow",
        it: "Esperto in PCA, K-means, Random Forest, XGBoost, SVM, Regressione Logistica, Deep Learning utilizzando TensorFlow",
        fr: "Expert en ACP, K-means, Random Forest, XGBoost, SVM, Régression Logistique, Deep Learning utilisant TensorFlow"
      }
    }
  ];

  return (
    <section className="py-20 bg-gray-50" id="expertise">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="heading-lg mb-4 text-theme-olive">
            {translations.aiAndMachineLearning[language]} <span className="text-theme-gold">{translations.expertise[language]}</span>
          </h2>
          <p className="text-lg text-gray-600">
            {translations.expertiseDescription[language]}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {expertiseAreas.map((area, index) => (
            <Card key={index} className="card-hover border-t-4 border-t-theme-gold bg-white">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-yellow-100 flex items-center justify-center mb-4">
                  <area.icon className="h-6 w-6 text-theme-gold" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-theme-olive">{area.title[language as keyof typeof area.title]}</h3>
                <p className="text-gray-600">{area.description[language as keyof typeof area.description]}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="heading-md text-center mb-8 text-theme-olive">{translations.additionalKeySkills[language]}</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalSkills.map((skill, index) => (
              <Card key={index} className="card-hover bg-white">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-full bg-yellow-100 flex items-center justify-center shrink-0">
                      <skill.icon className="h-5 w-5 text-theme-gold" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2 text-theme-olive">{skill.title[language as keyof typeof skill.title]}</h4>
                      <p className="text-gray-600">{skill.description[language as keyof typeof skill.description]}</p>
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

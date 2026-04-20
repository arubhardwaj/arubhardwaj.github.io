
import React from 'react';
import { Brain, GitMerge, BarChart3, MessageSquare, Server, Cpu, LineChart, PieChart, MapPin, Cloud, Database, ShieldCheck } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const ExpertiseSection = () => {
  const { language, translations } = useLanguage();
  
  const expertiseAreas = [
    {
      title: {
        en: "ChatGPT, Claude & LLM Solutions",
        it: "Soluzioni ChatGPT, Claude & LLM",
        fr: "Solutions ChatGPT, Claude & LLM",
        de: "ChatGPT, Claude & LLM-Lösungen"
      },
      icon: Brain,
      description: {
        en: "Custom integrations with ChatGPT, OpenAI, Claude AI, and other large language models. RAG pipelines, fine-tuning, AI agents, agentic workflows, and AI chatbot development",
        it: "Integrazioni personalizzate con ChatGPT, OpenAI, Claude AI e altri modelli linguistici. Pipeline RAG, fine-tuning e sviluppo chatbot AI",
        fr: "Intégrations personnalisées avec ChatGPT, OpenAI, Claude AI et autres grands modèles de langage. Pipelines RAG, fine-tuning et développement de chatbots IA",
        de: "Individuelle Integrationen mit ChatGPT, OpenAI, Claude AI und anderen großen Sprachmodellen. RAG-Pipelines, Feinabstimmung, KI-Agenten und Chatbot-Entwicklung"
      }
    },
    {
      title: {
        en: "Deep Learning Specialist",
        it: "Specialista in Deep Learning",
        fr: "Spécialiste en Deep Learning",
        de: "Deep-Learning-Spezialist"
      },
      icon: Cpu,
      description: {
        en: "Expert in CNN, RNN, LSTM, Transformer architectures using TensorFlow/PyTorch",
        it: "Esperto in architetture CNN, RNN, LSTM, Transformer utilizzando TensorFlow/PyTorch",
        fr: "Expert en architectures CNN, RNN, LSTM, Transformer utilisant TensorFlow/PyTorch",
        de: "Experte für CNN, RNN, LSTM und Transformer-Architekturen mit TensorFlow/PyTorch"
      }
    },
    {
      title: {
        en: "Advanced ML Algorithms",
        it: "Algoritmi ML Avanzati",
        fr: "Algorithmes ML Avancés",
        de: "Fortgeschrittene ML-Algorithmen"
      },
      icon: GitMerge,
      description: {
        en: "Mastery of Random Forest, XGBoost, SVM, and ensemble methods for optimal predictive accuracy",
        it: "Padronanza di Random Forest, XGBoost, SVM e metodi ensemble per un'ottimale accuratezza predittiva",
        fr: "Maîtrise de Random Forest, XGBoost, SVM et méthodes d'ensemble pour une précision prédictive optimale",
        de: "Beherrschung von Random Forest, XGBoost, SVM und Ensemble-Methoden für optimale Vorhersagegenauigkeit"
      }
    },
    {
      title: {
        en: "Generative AI & Prompt Engineering",
        it: "AI Generativa & Prompt Engineering",
        fr: "IA Générative & Prompt Engineering",
        de: "Generative KI & Prompt Engineering"
      },
      icon: MessageSquare,
      description: {
        en: "Production-ready generative AI solutions: text generation, image AI, sentiment analysis, multimodal AI, AI agents, and intelligent prompt engineering for GPT-4, Claude & Gemini",
        it: "Soluzioni AI generative pronte per la produzione: generazione di testo, AI per immagini, analisi del sentiment e prompt engineering per GPT-4, Claude & Gemini",
        fr: "Solutions d'IA générative prêtes pour la production : génération de texte, IA d'image, analyse de sentiment et prompt engineering pour GPT-4, Claude & Gemini",
        de: "Produktionsreife generative KI-Lösungen: Textgenerierung, Bild-KI, Sentimentanalyse, multimodale KI, KI-Agenten und intelligentes Prompt Engineering für GPT-4, Claude & Gemini"
      }
    },
    {
      title: {
        en: "MLOps & Deployment",
        it: "MLOps & Deployment",
        fr: "MLOps & Déploiement",
        de: "MLOps & Bereitstellung"
      },
      icon: Server,
      description: {
        en: "Streamlined model deployment with monitoring and maintenance for sustainable AI solutions",
        it: "Deployment di modelli semplificato con monitoraggio e manutenzione per soluzioni AI sostenibili",
        fr: "Déploiement de modèles rationalisé avec surveillance et maintenance pour des solutions d'IA durables",
        de: "Optimierte Modellbereitstellung mit Überwachung und Wartung für nachhaltige KI-Lösungen"
      }
    },
    {
      title: {
        en: "Statistical Analysis & Modeling",
        it: "Analisi Statistica & Modellazione",
        fr: "Analyse Statistique & Modélisation",
        de: "Statistische Analyse & Modellierung"
      },
      icon: BarChart3,
      description: {
        en: "Proficient in Hypothesis Testing, Mixed Models, ARIMA, and more advanced statistical methods",
        it: "Competente in Test di Ipotesi, Modelli Misti, ARIMA e metodi statistici più avanzati",
        fr: "Compétent en Tests d'Hypothèses, Modèles Mixtes, ARIMA et méthodes statistiques plus avancées",
        de: "Versiert in Hypothesentests, gemischten Modellen, ARIMA und fortgeschrittenen statistischen Methoden"
      }
    }
  ];
  
  const additionalSkills = [
    {
      title: {
        en: "Data Visualization & Dashboards",
        it: "Visualizzazione Dati & Dashboard",
        fr: "Visualisation de Données & Tableaux de Bord",
        de: "Datenvisualisierung & Dashboards"
      },
      icon: PieChart,
      description: {
        en: "Advanced skills in ggplot2, matplotlib, and R Shiny for insightful visual presentations",
        it: "Competenze avanzate in ggplot2, matplotlib e R Shiny per presentazioni visive approfondite",
        fr: "Compétences avancées en ggplot2, matplotlib et R Shiny pour des présentations visuelles perspicaces",
        de: "Fortgeschrittene Fähigkeiten in ggplot2, matplotlib und R Shiny für aufschlussreiche visuelle Darstellungen"
      }
    },
    {
      title: {
        en: "NLP & Text Analysis",
        it: "NLP & Analisi del Testo",
        fr: "NLP & Analyse de Texte",
        de: "NLP & Textanalyse"
      },
      icon: MessageSquare,
      description: {
        en: "Competent in clustering, text generation, and sentiment analysis",
        it: "Competente in clustering, generazione di testo e analisi del sentiment",
        fr: "Compétent en clustering, génération de texte et analyse de sentiment",
        de: "Kompetent in Clustering, Textgenerierung und Sentimentanalyse"
      }
    },
    {
      title: {
        en: "Geospatial & Biostatistical Analysis",
        it: "Analisi Geospaziale & Biostatistica",
        fr: "Analyse Géospatiale & Biostatistique",
        de: "Geodaten- & Biostatistische Analyse"
      },
      icon: MapPin,
      description: {
        en: "Proficient in applying computational methods to biostatistics and geospatial data",
        it: "Esperto nell'applicazione di metodi computazionali alla biostatistica e ai dati geospaziali",
        fr: "Compétent dans l'application de méthodes computationnelles aux biostatistiques et aux données géospatiales",
        de: "Versiert in der Anwendung computergestützter Methoden auf Biostatistik und Geodaten"
      }
    },
    {
      title: {
        en: "Multi-Cloud AI Platforms",
        it: "Piattaforme AI Multi-Cloud",
        fr: "Plateformes IA Multi-Cloud",
        de: "Multi-Cloud-KI-Plattformen"
      },
      icon: Cloud,
      description: {
        en: "AWS (SageMaker, Bedrock, EC2, Lambda), Google Cloud Vertex AI (Gemini, Model Garden, AutoML), Azure OpenAI Service. Portable AI workloads across providers.",
        it: "AWS (SageMaker, Bedrock, EC2, Lambda), Google Cloud Vertex AI (Gemini, Model Garden, AutoML), Azure OpenAI Service. Carichi AI portabili tra provider.",
        fr: "AWS (SageMaker, Bedrock, EC2, Lambda), Google Cloud Vertex AI (Gemini, Model Garden, AutoML), Azure OpenAI Service. Charges IA portables entre providers.",
        de: "AWS (SageMaker, Bedrock, EC2, Lambda), Google Cloud Vertex AI (Gemini, Model Garden, AutoML), Azure OpenAI Service. Portable KI-Workloads über Provider hinweg."
      }
    },
    {
      title: {
        en: "EU Sovereign Cloud & GDPR AI",
        it: "Cloud Sovrano UE & AI GDPR",
        fr: "Cloud Souverain UE & IA RGPD",
        de: "EU-Souveräne Cloud & DSGVO-KI"
      },
      icon: ShieldCheck,
      description: {
        en: "GDPR-compliant AI on European infrastructure — OVHcloud, Scaleway, Hetzner. Mistral AI, Aleph Alpha, open-source LLMs. Full data sovereignty for regulated industries.",
        it: "AI conforme al GDPR su infrastruttura europea — OVHcloud, Scaleway, Hetzner. Mistral AI, Aleph Alpha, LLM open-source. Piena sovranità dei dati per settori regolamentati.",
        fr: "IA conforme RGPD sur infrastructure européenne — OVHcloud, Scaleway, Hetzner. Mistral AI, Aleph Alpha, LLM open-source. Souveraineté totale des données pour secteurs régulés.",
        de: "DSGVO-konforme KI auf europäischer Infrastruktur — OVHcloud, Scaleway, Hetzner. Mistral AI, Aleph Alpha, Open-Source-LLMs. Volle Datensouveränität für regulierte Branchen."
      }
    },
    {
      title: {
        en: "Data Scraping & ETL Processes",
        it: "Scraping dei Dati & Processi ETL",
        fr: "Scraping de Données & Processus ETL",
        de: "Data Scraping & ETL-Prozesse"
      },
      icon: Database,
      description: {
        en: "Efficient in extracting and processing large datasets",
        it: "Efficiente nell'estrazione e nell'elaborazione di grandi set di dati",
        fr: "Efficace dans l'extraction et le traitement de grands ensembles de données",
        de: "Effizient in der Extraktion und Verarbeitung großer Datensätze"
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


import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ExpertiseSection from '@/components/sections/ExpertiseSection';
import IndustriesSection from '@/components/sections/IndustriesSection';
import WhyChooseMeSection from '@/components/sections/WhyChooseMeSection';
import ConsultationSection from '@/components/sections/ConsultationSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Aru Bhardwaj | Freelance AI Developer, ChatGPT & Claude Expert | Data Scientist Paris</title>
        <meta name="description" content="Hire Aru Bhardwaj, a freelance AI developer & data scientist with 7+ years experience. Expert in ChatGPT, Claude AI, OpenAI, LLMs, GPT-4, generative AI, RAG, fine-tuning, machine learning, NLP, predictive analytics, and AI agents. Based in Paris, serving clients worldwide." />
        <link rel="canonical" href="https://arubhardwaj.eu/" />
      </Helmet>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ExpertiseSection />
        <IndustriesSection />
        <WhyChooseMeSection />
        <ConsultationSection />
        {/* SEO-rich content for search engines — hidden from visual display */}
        <section className="sr-only" aria-hidden="true">
          <h2>Freelance AI Developer & ChatGPT Expert in Paris, France</h2>
          <p>Looking for a freelance AI developer who specializes in ChatGPT, Claude AI, OpenAI, and large language models (LLMs)? Aru Bhardwaj is a top-rated freelance data scientist and AI consultant based in Paris, France, available for projects worldwide. With 7+ years of hands-on experience in artificial intelligence, machine learning, and data science, I deliver production-ready AI solutions for businesses of all sizes.</p>

          <h3>AI Development Services</h3>
          <p>Expert in GPT-4, GPT-4o, Claude (Anthropic), Gemini, Mistral AI, Llama, and all major AI platforms. Services include: ChatGPT API integration, Claude AI development, LLM fine-tuning, RAG (Retrieval Augmented Generation) pipeline development, AI agent development, agentic AI workflows, AI chatbot development, generative AI solutions, prompt engineering, multimodal AI systems, and conversational AI.</p>

          <h3>Machine Learning & Data Science Services</h3>
          <p>Comprehensive machine learning and data science consulting: predictive analytics, time series forecasting, classification models, regression analysis, clustering, dimensionality reduction, anomaly detection, churn prediction, recommendation systems, A/B testing, and statistical modeling. Expert in Python, R, SQL, TensorFlow, PyTorch, scikit-learn, XGBoost, LightGBM, Pandas, NumPy, and Spark.</p>

          <h3>NLP & Computer Vision</h3>
          <p>Natural language processing (NLP) solutions including text classification, sentiment analysis, named entity recognition (NER), text summarization, machine translation, question answering, and intelligent document processing. Computer vision services including image classification, object detection, OCR, and visual AI.</p>

          <h3>AI Infrastructure & MLOps</h3>
          <p>End-to-end MLOps and AI infrastructure: model deployment, monitoring, CI/CD for ML, AWS SageMaker, EC2, Lambda, Docker, Kubernetes, vector databases (Pinecone, ChromaDB, FAISS, Weaviate), LangChain, LangGraph, and AI workflow automation. Building scalable AI pipelines and production ML systems.</p>

          <h3>Industries Served</h3>
          <p>Freelance AI developer serving management consulting firms, healthcare organizations, technology companies, marketing agencies, real estate firms, government agencies, NGOs, political campaigns, finance, insurance, retail, e-commerce, energy, manufacturing, education, and legal sectors across France, Europe, and worldwide.</p>

          <h3>Hire a Freelance AI Developer — Better Than Upwork, Fiverr, Malt</h3>
          <p>Available for hire as a freelance AI developer, freelance data scientist, freelance machine learning engineer, AI consultant, ChatGPT developer, Claude AI developer, LLM specialist, generative AI consultant, NLP engineer, and AI strategy advisor. Competitive rates starting at 150 euros per hour or 700 euros per day (exclusive of VAT). Based in Paris, France with availability for remote and on-site projects across Europe and globally. Hire directly without platform fees — better than Upwork, Fiverr, Malt, Freelancer, Toptal, and other freelance platforms. Top-rated AI developer available on Malt and Upwork. Book a 1-hour AI consultation to discuss your project needs.</p>

          <h3>Book an AI Consultation</h3>
          <p>Book a 1-hour consultation with an expert AI developer and data scientist. Get personalized advice on ChatGPT integration, Claude AI development, LLM strategy, RAG implementation, AI agent architecture, machine learning model selection, and data science roadmap. Ideal for CTOs, product managers, startup founders, and business leaders looking to leverage AI. Available worldwide via video call. Weekend availability for urgent projects.</p>

          <h3>Freelance AI Developer on Upwork, Malt, Fiverr</h3>
          <p>Looking for a freelance AI developer on Upwork? Searching for a data scientist on Malt? Need a ChatGPT expert on Fiverr? Aru Bhardwaj is a top-rated freelance AI developer available on major freelance platforms including Upwork, Malt, and directly via this website. Skip the platform fees and hire directly for AI development, data science, machine learning, ChatGPT integration, Claude AI, LLM development, and generative AI projects.</p>

          <h3>AI Developer Available Worldwide</h3>
          <p>Freelance AI developer and data scientist serving clients in the United States, United Kingdom, Australia, India, Israel, Germany, France, Italy, Switzerland, Austria, Belgium, Netherlands, Spain, Portugal, Scandinavia, and all countries worldwide. Fluent in English, German, French, Italian, and Hindi. Remote-first with flexible timezone support for seamless collaboration across continents. KI-Entwickler und Data Scientist für Deutschland, Österreich und die Schweiz. Développeur IA freelance disponible en France et dans toute l'Europe.</p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;


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
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ExpertiseSection />
        <IndustriesSection />
        <WhyChooseMeSection />
        <ConsultationSection />
        {/* SEO-rich content for search engines */}
        <section className="sr-only" aria-hidden="true">
          <h2>Freelance AI Developer & ChatGPT Expert in Paris</h2>
          <p>Looking for a freelance AI developer who specializes in ChatGPT, Claude AI, OpenAI, and large language models (LLMs)? Aru Bhardwaj is a top-rated freelance data scientist and AI consultant based in Paris, France, available for projects worldwide. Expert in GPT-4, Claude (Anthropic), Gemini, Mistral AI, Llama, and all major AI platforms. Services include: ChatGPT API integration, Claude AI development, LLM fine-tuning, RAG pipeline development, AI chatbot development, generative AI solutions, prompt engineering, machine learning model development, deep learning (CNN, RNN, LSTM, Transformers), NLP and text analytics, computer vision, predictive analytics, data visualization, MLOps and model deployment, and AI strategy consulting. Hire a freelance AI developer for your next project.</p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;

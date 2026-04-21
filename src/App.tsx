
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { LanguageProvider } from "./contexts/LanguageContext";
import Index from "./pages/Index";
import SubmitProject from "./pages/SubmitProject";
import TermsAndConditions from "./pages/TermsAndConditions";
import BookCall from "./pages/BookCall";
import AboutPage from "./pages/AboutPage";
import LegalNoticePage from "./pages/LegalNoticePage";
import FractionalCtoPage from "./pages/services/FractionalCtoPage";
import MvpBuilderPage from "./pages/services/MvpBuilderPage";
import SovereignAiPage from "./pages/services/SovereignAiPage";
import NotFound from "./pages/NotFound";
import BookCallNudge from "./components/BookCallNudge";
import ScrollProgressNav from "./components/ScrollProgressNav";
import ScrollToTop from "./components/ScrollToTop";
import { Analytics } from "@vercel/analytics/react";

const queryClient = new QueryClient();

const AppContent = () => (
  <BrowserRouter>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/submit-project" element={<SubmitProject />} />
      <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      <Route path="/legal-notice" element={<LegalNoticePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/services/fractional-cto" element={<FractionalCtoPage />} />
      <Route path="/services/mvp-builder" element={<MvpBuilderPage />} />
      <Route path="/services/sovereign-ai" element={<SovereignAiPage />} />
      <Route path="/book-call" element={<BookCall />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <ScrollProgressNav />
    <BookCallNudge />
  </BrowserRouter>
);

const App = () => {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <LanguageProvider>
          <TooltipProvider>
            <AppContent />
            <Toaster />
            <Sonner />
            <Analytics />
          </TooltipProvider>
        </LanguageProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
};

export default App;

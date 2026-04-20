
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '@/contexts/LanguageContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, translations } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToTop = () => {
    if (isHomePage) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  const scrollToSection = (sectionId: string) => {
    if (isHomePage) {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/#' + sectionId);
    }
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <button onClick={scrollToTop} className="flex items-center gap-2">
          <span className="text-xl md:text-2xl font-bold text-theme-green">Aru Bhardwaj</span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <button onClick={scrollToTop} className="text-foreground hover:text-primary font-medium transition-colors">
            {translations.home[language]}
          </button>
          <button onClick={() => scrollToSection('expertise')} className="text-foreground hover:text-primary font-medium transition-colors">
            {translations.expertise[language]}
          </button>
          <button onClick={() => scrollToSection('industries')} className="text-foreground hover:text-primary font-medium transition-colors">
            {translations.industries[language]}
          </button>
          <button onClick={() => scrollToSection('why-choose-me')} className="text-foreground hover:text-primary font-medium transition-colors">
            {translations.whyChooseMe[language]}
          </button>
          <button onClick={() => scrollToSection('faq')} className="text-foreground hover:text-primary font-medium transition-colors">
            {translations.faqNavLink[language]}
          </button>
          <button onClick={() => scrollToSection('consultation')} className="text-foreground hover:text-primary font-medium transition-colors">
            {translations.contact[language]}
          </button>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <LanguageSwitcher />
          <Link to="/submit-project">
            <Button variant="outline" className="border-theme-olive text-theme-olive hover:bg-theme-olive hover:text-white">
              {translations.submitYourProject[language]}
            </Button>
          </Link>
          <Button onClick={() => scrollToSection('consultation')} className="bg-theme-gold hover:bg-theme-gold/90 text-white">
            {translations.bookConsultation[language]}
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <LanguageSwitcher />
          <button
            onClick={toggleMenu}
            className="p-2 text-foreground hover:text-primary rounded-md"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md py-4 animate-fade-in">
          <nav className="container mx-auto px-4 flex flex-col space-y-4">
            <button onClick={() => { scrollToTop(); setIsMenuOpen(false); }} className="text-foreground hover:text-primary font-medium transition-colors py-2 text-left">
              {translations.home[language]}
            </button>
            <button onClick={() => { scrollToSection('expertise'); setIsMenuOpen(false); }} className="text-foreground hover:text-primary font-medium transition-colors py-2 text-left">
              {translations.expertise[language]}
            </button>
            <button onClick={() => { scrollToSection('industries'); setIsMenuOpen(false); }} className="text-foreground hover:text-primary font-medium transition-colors py-2 text-left">
              {translations.industries[language]}
            </button>
            <button onClick={() => { scrollToSection('why-choose-me'); setIsMenuOpen(false); }} className="text-foreground hover:text-primary font-medium transition-colors py-2 text-left">
              {translations.whyChooseMe[language]}
            </button>
            <button onClick={() => { scrollToSection('faq'); setIsMenuOpen(false); }} className="text-foreground hover:text-primary font-medium transition-colors py-2 text-left">
              {translations.faqNavLink[language]}
            </button>
            <button onClick={() => { scrollToSection('consultation'); setIsMenuOpen(false); }} className="text-foreground hover:text-primary font-medium transition-colors py-2 text-left">
              {translations.contact[language]}
            </button>
            <Link to="/submit-project" onClick={() => setIsMenuOpen(false)}>
              <Button variant="outline" className="border-theme-olive text-theme-olive hover:bg-theme-olive hover:text-white w-full">
                {translations.submitYourProject[language]}
              </Button>
            </Link>
            <Button onClick={() => {
              scrollToSection('consultation');
              setIsMenuOpen(false);
            }} className="bg-theme-gold hover:bg-theme-gold/90 text-white w-full">
              {translations.bookConsultation[language]}
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;

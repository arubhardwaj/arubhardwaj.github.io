
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '@/contexts/LanguageContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, translations } = useLanguage();

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
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
          <a href="#expertise" className="text-foreground hover:text-primary font-medium transition-colors">
            {translations.expertise[language]}
          </a>
          <a href="#industries" className="text-foreground hover:text-primary font-medium transition-colors">
            {translations.industries[language]}
          </a>
          <a href="#why-choose-me" className="text-foreground hover:text-primary font-medium transition-colors">
            {translations.whyChooseMe[language]}
          </a>
          <a href="#contact" className="text-foreground hover:text-primary font-medium transition-colors">
            {translations.contact[language]}
          </a>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <LanguageSwitcher />
          <Button onClick={() => document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth' })} className="bg-theme-gold hover:bg-theme-gold/90 text-white">
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
            <a href="#expertise" className="text-foreground hover:text-primary font-medium transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
              {translations.expertise[language]}
            </a>
            <a href="#industries" className="text-foreground hover:text-primary font-medium transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
              {translations.industries[language]}
            </a>
            <a href="#why-choose-me" className="text-foreground hover:text-primary font-medium transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
              {translations.whyChooseMe[language]}
            </a>
            <a href="#contact" className="text-foreground hover:text-primary font-medium transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
              {translations.contact[language]}
            </a>
            <Button onClick={() => {
              document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth' });
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

import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';
import LanguageSwitcher from './LanguageSwitcher';
import BookConsultationDialog from '@/components/BookConsultationDialog';
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
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen((v) => !v);
  const closeMenu = () => setIsMenuOpen(false);

  const scrollToTop = () => {
    if (isHomePage) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  const linkCls =
    'text-foreground hover:text-theme-gold font-medium transition-colors text-sm';

  const isActive = (path: string) => location.pathname === path;
  const isServicesActive = location.pathname.startsWith('/services');

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center gap-4">
        <button onClick={scrollToTop} className="flex items-center gap-2 shrink-0">
          <span className="text-xl md:text-2xl font-bold text-theme-olive">Aru Bhardwaj</span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-7">
          <Link to="/" className={cn(linkCls, isActive('/') && 'text-theme-gold')}>
            {translations.home[language]}
          </Link>
          <Link to="/about" className={cn(linkCls, isActive('/about') && 'text-theme-gold')}>
            {translations.aboutMe[language]}
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger
              className={cn(
                linkCls,
                'flex items-center gap-1 focus:outline-none',
                isServicesActive && 'text-theme-gold'
              )}
            >
              {translations.services[language]}
              <ChevronDown className="h-3.5 w-3.5" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="min-w-[220px]">
              <DropdownMenuItem asChild>
                <Link to="/services/fractional-cto" className="cursor-pointer">
                  <div>
                    <p className="font-medium">{translations.fractionalCtoService[language]}</p>
                    <p className="text-xs text-gray-500">2-3 days/month minimum</p>
                  </div>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/services/mvp-builder" className="cursor-pointer">
                  <div>
                    <p className="font-medium">{translations.mvpBuilderService[language]}</p>
                    <p className="text-xs text-gray-500">AI MVPs in 4-8 weeks</p>
                  </div>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/services/sovereign-ai" className="cursor-pointer">
                  <div>
                    <p className="font-medium">{translations.sovereignAiService[language]}</p>
                    <p className="text-xs text-gray-500">OVHcloud · Scaleway · Mistral</p>
                  </div>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link
            to="/submit-project"
            className={cn(linkCls, isActive('/submit-project') && 'text-theme-gold')}
          >
            {translations.submitYourProject[language]}
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-3 shrink-0">
          <LanguageSwitcher />
          <BookConsultationDialog>
            <Button className="bg-theme-gold hover:bg-theme-gold/90 text-white">
              {translations.bookConsultation[language]}
            </Button>
          </BookConsultationDialog>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <LanguageSwitcher />
          <button
            onClick={toggleMenu}
            className="p-2 text-foreground hover:text-theme-gold rounded-md"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md py-4 animate-fade-in">
          <nav className="container mx-auto px-4 flex flex-col space-y-1">
            <Link to="/" onClick={closeMenu} className="py-3 px-2 hover:text-theme-gold font-medium">
              {translations.home[language]}
            </Link>
            <Link to="/about" onClick={closeMenu} className="py-3 px-2 hover:text-theme-gold font-medium">
              {translations.aboutMe[language]}
            </Link>

            <p className="py-2 px-2 text-xs font-semibold uppercase tracking-wider text-theme-gold mt-2">
              {translations.services[language]}
            </p>
            <Link to="/services/fractional-cto" onClick={closeMenu} className="py-2 pl-4 hover:text-theme-gold text-sm">
              → {translations.fractionalCtoService[language]}
            </Link>
            <Link to="/services/mvp-builder" onClick={closeMenu} className="py-2 pl-4 hover:text-theme-gold text-sm">
              → {translations.mvpBuilderService[language]}
            </Link>
            <Link to="/services/sovereign-ai" onClick={closeMenu} className="py-2 pl-4 hover:text-theme-gold text-sm">
              → {translations.sovereignAiService[language]}
            </Link>

            <Link to="/submit-project" onClick={closeMenu} className="py-3 px-2 hover:text-theme-gold font-medium mt-2">
              {translations.submitYourProject[language]}
            </Link>

            <BookConsultationDialog>
              <Button
                onClick={closeMenu}
                className="bg-theme-gold hover:bg-theme-gold/90 text-white w-full mt-3"
              >
                {translations.bookConsultation[language]}
              </Button>
            </BookConsultationDialog>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;

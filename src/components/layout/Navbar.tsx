
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-xl md:text-2xl font-bold text-theme-green">Aru Bhardwaj</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-foreground hover:text-primary font-medium transition-colors">
            Home
          </Link>
          <a href="#expertise" className="text-foreground hover:text-primary font-medium transition-colors">
            Expertise
          </a>
          <a href="#industries" className="text-foreground hover:text-primary font-medium transition-colors">
            Industries
          </a>
          <a href="#why-choose-me" className="text-foreground hover:text-primary font-medium transition-colors">
            Why Choose Me
          </a>
          <a href="#contact" className="text-foreground hover:text-primary font-medium transition-colors">
            Contact
          </a>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button onClick={() => document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth' })} className="bg-theme-gold hover:bg-theme-gold/90 text-white">Book Consultation</Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 text-foreground hover:text-primary rounded-md"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md py-4 animate-fade-in">
          <nav className="container mx-auto px-4 flex flex-col space-y-4">
            <Link to="/" className="text-foreground hover:text-primary font-medium transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <a href="#expertise" className="text-foreground hover:text-primary font-medium transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
              Expertise
            </a>
            <a href="#industries" className="text-foreground hover:text-primary font-medium transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
              Industries
            </a>
            <a href="#why-choose-me" className="text-foreground hover:text-primary font-medium transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
              Why Choose Me
            </a>
            <a href="#contact" className="text-foreground hover:text-primary font-medium transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
              Contact
            </a>
            <Button onClick={() => {
              document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth' });
              setIsMenuOpen(false);
            }} className="bg-theme-gold hover:bg-theme-gold/90 text-white w-full">Book Consultation</Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;

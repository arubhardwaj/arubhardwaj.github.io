
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="text-xl font-bold text-primary">
          <span className="gradient-text">Aru Bhardwaj</span>
          <span className="text-sm block text-gray-600">Data Scientist & AI Expert</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#expertise" className="text-gray-700 hover:text-secondary font-medium">
            Expertise
          </a>
          <a href="#industries" className="text-gray-700 hover:text-secondary font-medium">
            Industries
          </a>
          <a href="#why-me" className="text-gray-700 hover:text-secondary font-medium">
            Why Choose Me
          </a>
          <a href="#contact" className="text-gray-700 hover:text-secondary font-medium">
            Contact
          </a>
          <a 
            href="#consultation" 
            className="bg-secondary text-white rounded-full px-5 py-2 font-medium hover:bg-opacity-90 transition"
          >
            Book Consultation
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700 focus:outline-none" 
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute w-full py-4 shadow-md">
          <nav className="container mx-auto px-4 flex flex-col space-y-4">
            <a 
              href="#expertise" 
              className="text-gray-700 hover:text-secondary font-medium"
              onClick={toggleMenu}
            >
              Expertise
            </a>
            <a 
              href="#industries" 
              className="text-gray-700 hover:text-secondary font-medium"
              onClick={toggleMenu}
            >
              Industries
            </a>
            <a 
              href="#why-me" 
              className="text-gray-700 hover:text-secondary font-medium"
              onClick={toggleMenu}
            >
              Why Choose Me
            </a>
            <a 
              href="#contact" 
              className="text-gray-700 hover:text-secondary font-medium"
              onClick={toggleMenu}
            >
              Contact
            </a>
            <a 
              href="#consultation" 
              className="bg-secondary text-white rounded-full px-5 py-2 font-medium hover:bg-opacity-90 transition text-center"
              onClick={toggleMenu}
            >
              Book Consultation
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

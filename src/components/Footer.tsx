
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="gradient-bg text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4">Aru Bhardwaj</h3>
            <p className="mb-4 text-gray-300">
              Transforming complex data challenges into actionable business intelligence
              through advanced analytics and custom AI systems.
            </p>
            <p className="text-gray-300">
              © {currentYear} Aru Bhardwaj. All rights reserved.
            </p>
          </div>
          
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition">Home</a>
              </li>
              <li>
                <a href="#expertise" className="text-gray-300 hover:text-white transition">Expertise</a>
              </li>
              <li>
                <a href="#industries" className="text-gray-300 hover:text-white transition">Industries</a>
              </li>
              <li>
                <a href="#why-me" className="text-gray-300 hover:text-white transition">Why Choose Me</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition">Contact</a>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition">LinkedIn</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition">Twitter</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition">GitHub</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition">Medium</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

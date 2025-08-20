import React from 'react';
import { Phone } from 'lucide-react';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <div className="bg-gray-200 p-2 rounded-lg">
              <Image 
                priority
                src="/images/metraho_svg.svg"
                height={64}
                width={64}
                />
            </div>
            <span className="text-2xl md:text-4xl font-bold text-gray-900">MetraHo Services</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-600 hover:text-gray-900 font-medium">Services</a>
            <a href="#about" className="text-gray-600 hover:text-gray-900 font-medium">About</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900 font-medium">Contact</a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <a href="tel:123-456-7890" className="hidden md:flex items-center text-blue-600 font-medium">
              <Phone className="h-4 w-4 mr-1" />
              (647)-763-7427
            </a>
            <a href="#contact" className="bg-orange-500 hover:bg-orange-600 text-white px-14 py-2 rounded-lg font-medium transition-colors">
              Get Quote
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

import React, { useState } from 'react';
import { Menu, X, Phone, GraduationCap, Heart } from 'lucide-react';
import { SCHOOL_DETAILS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'मुख्यपृष्ठ', href: '#home' },
    { label: 'आमच्याविषयी', href: '#about' },
    { label: 'वैशिष्ट्ये', href: '#features' },
    { label: 'व्यवस्थापन', href: '#management' },
    { label: 'गॅलरी', href: '#gallery' },
    { label: 'संपर्क', href: '#contact' },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      {/* Top Bar for Government/Official Info */}
      <div className="bg-orange-700 text-white py-1 px-4 text-xs md:text-sm">
        <div className="container mx-auto flex justify-between items-center">
          <span>UDISE NO: {SCHOOL_DETAILS.udise}</span>
          <span className="hidden md:inline">संचालित : {SCHOOL_DETAILS.trust}</span>
          <a href="#contact" className="flex items-center gap-1 hover:text-orange-200">
            <Phone size={14} /> संपर्क करा
          </a>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <div className="bg-orange-100 p-2 rounded-full flex items-center justify-center relative">
              <GraduationCap className="text-orange-600 w-8 h-8 md:w-10 md:h-10 relative z-10" />
              {/* Creative Icon Element: Heart symbolizing Care/Special Needs */}
              <Heart className="text-orange-500 w-4 h-4 absolute -top-1 -right-1 fill-orange-500 animate-pulse" />
            </div>
            <div>
              <h1 className="text-lg md:text-2xl font-bold text-gray-900 font-heading leading-tight">
                सावित्रीबाई फुले
              </h1>
              <p className="text-xs md:text-sm text-gray-600 font-medium">
                मूकबधिर निवासी विद्यालय, थाळनेर
              </p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-700 hover:text-orange-600 font-medium transition-colors text-base"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-orange-600 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
          <div className="flex flex-col space-y-2 px-4 py-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-700 hover:text-orange-600 hover:bg-orange-50 px-3 py-2 rounded-md font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

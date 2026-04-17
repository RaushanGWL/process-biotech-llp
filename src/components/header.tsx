import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 flex items-center justify-center bg-emerald-50 rounded-lg overflow-hidden">
              <img 
                src={logo} 
                alt="Process Biotech Logo" 
                className="w-8 h-8 object-contain"
              />
            </div>
            <span className="text-xl font-bold text-gray-900 tracking-tight">
              Process Biotech <span className="text-emerald-600">LLP</span>
            </span>
          </Link>

          {/* Navigation Section */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-sm font-medium text-gray-600 hover:text-emerald-600 hover:border-b-2 hover:border-emerald-600 pb-1 transition-all">
              Home
            </Link>
            <Link to="/about" className="text-sm font-medium text-gray-600 hover:text-emerald-600 hover:border-b-2 hover:border-emerald-600 pb-1 transition-all">
              About Us
            </Link>
            <Link to="/products" className="text-sm font-medium text-gray-600 hover:text-emerald-600 hover:border-b-2 hover:border-emerald-600 pb-1 transition-all">
              Products
            </Link>
            <a href="#" className="text-sm font-medium text-gray-600 hover:text-emerald-600 hover:border-b-2 hover:border-emerald-600 pb-1 transition-all">
              Applications
            </a>

            <Link to="/contact" className="text-sm font-medium text-gray-600 hover:text-emerald-600 hover:border-b-2 hover:border-emerald-600 pb-1 transition-all">
              Contact
            </Link>
          </nav>

          {/* Action Button */}
          <div className="flex items-center">
            <Link to="/contact" className="bg-emerald-800 hover:bg-emerald-900 text-white px-6 py-2.5 rounded-lg text-sm font-semibold transition-all shadow-sm hover:shadow-md active:scale-95">
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

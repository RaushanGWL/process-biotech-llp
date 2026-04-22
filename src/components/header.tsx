import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
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
            <Link to="/applications" className="text-sm font-medium text-gray-600 hover:text-emerald-600 hover:border-b-2 hover:border-emerald-600 pb-1 transition-all">
              Applications
            </Link>

            <Link to="/contact" className="text-sm font-medium text-gray-600 hover:text-emerald-600 hover:border-b-2 hover:border-emerald-600 pb-1 transition-all">
              Contact
            </Link>
          </nav>

          {/* Action Button */}
          <div className="flex items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to="/contact" 
                className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-emerald-400 to-emerald-600 text-white px-6 py-2.5 rounded-xl text-sm font-bold transition-all shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40"
              >
                Get in Touch
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                
                {/* Subtle shine effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

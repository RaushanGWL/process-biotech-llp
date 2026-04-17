import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import logo from '../assets/logo.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#002418] text-white pt-12 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Column 1: Logo & Info */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center overflow-hidden">
                <img src={logo} alt="Logo" className="w-7 h-7 object-contain" />
              </div>
              <span className="text-xl font-bold tracking-tight">Process Biotech <span className="text-emerald-400">LLP</span></span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Leading the way in sustainable Chitosan solutions, pioneering eco-friendly alternatives for a greener world.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-8 text-emerald-400">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors text-sm">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors text-sm">About Us</Link></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Products</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Applications</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-8 text-emerald-400">Contact Details</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>D-402, Rushiraj Harmony Apts.<br />Gangapur Road, Nashik - 422013</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Phone className="w-5 h-5 text-emerald-400 shrink-0" />
                <a href="tel:+919706955009" className="hover:text-white transition-colors">+91-9706955009</a>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Mail className="w-5 h-5 text-emerald-400 shrink-0" />
                <a href="mailto:processbiotech@gmail.com" className="hover:text-white transition-colors">processbiotech@gmail.com</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Our Socials */}
          <div>
            <h4 className="text-lg font-bold mb-8 text-emerald-400">Our Socials</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-all border border-white/10 group">
                <svg className="w-5 h-5 fill-current text-white group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 text-center flex flex-col md:flex-row justify-between items-center gap-6 text-gray-500 text-xs font-medium">
          <p>&copy; {new Date().getFullYear()} Process Biotech LLP. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-emerald-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* Decorative Background Accent */}
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-[150px] -z-0" />
    </footer>
  );
};

export default Footer;

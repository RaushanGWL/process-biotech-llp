import React from 'react';
import { motion } from 'framer-motion';
import facility from '../../assets/facility.png';

const ContactHero: React.FC = () => {
  return (
    <section className="relative h-[45vh] w-full flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={facility} 
          alt="Contact Us" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-emerald-950/40 backdrop-blur-[1px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Contact <span className="text-emerald-400">Us</span>
          </h1>
          <div className="w-24 h-1.5 bg-emerald-500 mx-auto mb-6 rounded-full" />
          <p className="text-xl md:text-2xl text-emerald-50/80 font-medium max-w-3xl mx-auto leading-relaxed">
            Get in touch with our team of experts for tailored Chitosan solutions.
          </p>
        </motion.div>
      </div>

      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />
    </section>
  );
};

export default ContactHero;

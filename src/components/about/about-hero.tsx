import React from 'react';
import { motion } from 'framer-motion';
import facility from '../../assets/facility.png';

const AboutHero: React.FC = () => {
  return (
    <section className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={facility} 
          alt="About Facility" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-emerald-950/40 backdrop-blur-[1px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
            About <span className="text-emerald-400">Process Biotech LLP</span>
          </h1>
          <p className="text-xl md:text-2xl text-emerald-50/80 font-medium max-w-3xl mx-auto leading-relaxed">
            Pioneering Sustainable Chitosan Solutions for a Greener Tomorrow.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;

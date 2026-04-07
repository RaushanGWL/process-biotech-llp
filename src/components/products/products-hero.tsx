import React from 'react';
import { motion } from 'framer-motion';
import heroBg from '../../assets/facility.png'; // Reusing facility image for a consistent industrial look

const ProductsHero: React.FC = () => {
  return (
    <section className="relative h-[50vh] w-full flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Products Hero" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-emerald-950/80 backdrop-blur-[1px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Our Chitosan <span className="text-emerald-400">Products</span>
          </h1>
          <div className="w-24 h-1.5 bg-emerald-500 mx-auto mb-6 rounded-full" />
          <p className="text-xl md:text-2xl text-emerald-50/80 font-medium max-w-3xl mx-auto leading-relaxed">
            Pioneering High-Purity Chitosan Solutions for Global Industries.
          </p>
        </motion.div>
      </div>

      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />
    </section>
  );
};

export default ProductsHero;

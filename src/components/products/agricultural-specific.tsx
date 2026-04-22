import React from 'react';
import { motion } from 'framer-motion';
import { Sprout, CheckCircle, Leaf } from 'lucide-react';
import powder from '../../assets/chitosan_powder.png';
import facility from '../../assets/facility.png';

const AgriculturalSpecific: React.FC = () => {
  return (
    <section className="py-12 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-20 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-6">
               <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-700">
                  <Sprout className="w-6 h-6" />
               </div>
               <h4 className="text-emerald-700 font-bold uppercase tracking-[0.2em] text-sm">Agriculture Grade</h4>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-8 leading-tight">
              Revolutionizing <span className="text-emerald-700">Agricultural</span> Practices
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-10">
              Our agriculture-grade Chitosan serves as a potent biostimulant and natural defense elicitor. It enhances plant growth, improves nutrient uptake, and triggers the plant's own systemic resistance against pathogens.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
               {["Plant defense elicitor", "Growth enhancement", "Water retention agent", "Seed coating solution"].map((point, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-700 font-medium">
                     <CheckCircle className="w-5 h-5 text-emerald-500" />
                     {point}
                  </li>
               ))}
            </ul>

          </motion.div>

          {/* Image Grid Area */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4 relative"
          >
            <div className="absolute -inset-10 bg-emerald-50/50 rounded-full blur-[100px] -z-10" />
            <div className="aspect-square rounded-3xl overflow-hidden shadow-xl border-4 border-white hover:scale-105 transition-transform duration-500">
               <img src={facility} alt="Agri 1" className="w-full h-full object-cover grayscale brightness-75 contrast-125" />
            </div>
            <div className="aspect-square rounded-3xl overflow-hidden shadow-xl border-4 border-white hover:scale-105 transition-transform duration-500 mt-10">
               <img src={powder} alt="Agri 2" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square rounded-3xl overflow-hidden shadow-xl border-4 border-white hover:scale-105 transition-transform duration-500 -mt-10">
               <img src={powder} alt="Agri 3" className="w-full h-full object-cover grayscale opacity-50" />
            </div>
            <div className="aspect-square rounded-3xl overflow-hidden shadow-xl border-4 border-white hover:scale-105 transition-transform duration-500">
               <img src={facility} alt="Agri 4" className="w-full h-full object-cover" />
            </div>
            {/* Floating Leaf Icon */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-emerald-600 rounded-full flex items-center justify-center text-white shadow-2xl border-4 border-white">
               <Leaf className="w-10 h-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AgriculturalSpecific;

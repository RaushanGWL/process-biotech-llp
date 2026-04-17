import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import powder from '../../assets/chitosan_powder.png';
import facility from '../../assets/facility.png';

const ProductRange: React.FC = () => {
  return (
    <section className="py-12 bg-emerald-50/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            Our <span className="text-emerald-700">Product Range</span>
          </h2>
          <div className="w-24 h-1.5 bg-emerald-600 mx-auto mt-4 rounded-full opacity-60" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Plain Chitosan Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col group cursor-default"
          >
            <div className="h-64 overflow-hidden relative">
               <img src={powder} alt="Plain Chitosan" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
               <div className="absolute inset-0 bg-emerald-900/10 mix-blend-overlay" />
               <div className="absolute top-6 left-6 bg-white px-4 py-1.5 rounded-full shadow-lg">
                  <span className="text-emerald-800 text-xs font-bold uppercase tracking-widest">Industry Standard</span>
               </div>
            </div>
            <div className="p-10 flex-grow">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-emerald-700 transition-colors">
                Plain Chitosan (Acid-Soluble)
              </h3>
              <ul className="space-y-4 mb-10">
                {["High degree of deacetylation", "Multiple mesh sizes (flakes/powder)", "Controlled molecular weight", "Excellent film-forming ability"].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-600 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full bg-emerald-700 hover:bg-emerald-800 text-white py-4 rounded-xl font-bold transition-all active:scale-[0.98]">
                Request Datasheet
              </button>
            </div>
          </motion.div>

          {/* Water-Soluble Chitosan Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col group cursor-default"
          >
            <div className="h-64 overflow-hidden relative">
               <img src={facility} alt="Water-Soluble Chitosan" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 grayscale opacity-80" />
               <div className="absolute inset-0 bg-emerald-900/30 backdrop-blur-sm flex items-center justify-center">
                  <span className="text-white text-3xl font-serif italic">Premium Grade</span>
               </div>
            </div>
            <div className="p-10 flex-grow">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-emerald-700 transition-colors">
                Water-Soluble Chitosan
              </h3>
              <ul className="space-y-4 mb-10">
                {["Instant solubility in water", "Superior bioavailability", "Low molecular weight grades", "Odorless and colorless formulations"].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-600 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full border-2 border-emerald-700 text-emerald-700 hover:bg-emerald-50 py-4 rounded-xl font-bold transition-all active:scale-[0.98]">
                Explore Applications
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductRange;

import React from 'react';
import { motion } from 'framer-motion';
import { Microscope, Beaker, Globe } from 'lucide-react';
import powder from '../../assets/chitosan_powder.png';

const SpecialtyPolymer: React.FC = () => {
  const categories = [
    { title: "Industrial Grade", desc: "Optimized for large-volume industrial processes.", icon: Globe, highlight: "90% Purity" },
    { title: "Pharma & Medical", desc: "High deacetylation for biocompatible applications.", icon: Beaker, highlight: "Medical Use" },
    { title: "Research Grade", desc: "Customized molecular weight for lab-scale innovation.", icon: Microscope, highlight: "High Precision" }
  ];

  return (
    <section className="py-12 bg-emerald-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
             Chitosan - A High-Value <span className="text-emerald-400">Specialty Polymer</span>
          </h2>
          <div className="w-24 h-1.5 bg-emerald-500 mx-auto mt-6 rounded-full opacity-60" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {categories.map((cat, idx) => (
             <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-md hover:bg-white/10 transition-all group"
             >
                <div className="w-16 h-16 bg-emerald-400/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-emerald-400 transition-colors">
                   <cat.icon className="w-8 h-8 text-emerald-400 group-hover:text-emerald-900 transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                   {cat.title}
                </h3>
                <p className="text-emerald-100/70 leading-relaxed mb-8">
                   {cat.desc}
                </p>
                <div className="w-full h-40 rounded-2xl overflow-hidden relative border border-white/5">
                   <img src={powder} alt={cat.title} className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700" />
                   <div className="absolute top-4 right-4 bg-emerald-500 text-emerald-900 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                      {cat.highlight}
                   </div>
                </div>
             </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Accents */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-700/10 rounded-full blur-[150px] -z-0" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[150px] -z-0" />
    </section>
  );
};

export default SpecialtyPolymer;

import React from 'react';
import { motion } from 'framer-motion';

const ProductsCTA: React.FC = () => {
  return (
    <section className="py-24 bg-emerald-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8 leading-tight">
             Ready to Source <span className="text-emerald-400 font-serif italic text-5xl">Premium</span> Chitosan?
          </h2>
          <p className="text-xl text-emerald-100/80 mb-12 max-w-2xl mx-auto leading-relaxed">
             Join leading industries worldwide in adopting sustainable, high-performance biopolymer solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-10 py-4 rounded-xl text-lg font-bold transition-all shadow-xl hover:shadow-emerald-500/20 active:scale-95">
              Contact Sales Team
            </button>
            <button className="bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-md px-10 py-4 rounded-xl text-lg font-bold transition-all active:scale-95">
              Request Free Sample
            </button>
          </div>
        </motion.div>
      </div>

      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] -z-0" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] -z-0" />
    </section>
  );
};

export default ProductsCTA;

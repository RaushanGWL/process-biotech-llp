import React from 'react';
import { motion } from 'framer-motion';
import { Microscope, Beaker, FlaskConical } from 'lucide-react';

const CustomSolutions: React.FC = () => {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <div className="w-24 h-24 bg-emerald-600 rounded-[2rem] flex items-center justify-center mx-auto mb-10 shadow-2xl shadow-emerald-600/30">
             <FlaskConical className="w-12 h-12 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8 leading-tight">
             Bespoke <span className="text-emerald-700">Chitosan</span> Formulations
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
             Our R&D team specializes in tailoring Chitosan's molecular weight, viscosity, and solubility profiles to meet your specific application needs. From industrial-scale trials to innovative product development, we are your partner in biopolymer excellence.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-16">
             {[
                { title: "R&D Consultation", icon: Microscope },
                { title: "Custom Viscosity", icon: Beaker },
                { title: "Scalable Trials", icon: FlaskConical }
             ].map((feature, idx) => (
                <div key={idx} className="p-8 border border-emerald-50 rounded-2xl bg-emerald-50/20 hover:bg-emerald-50 transition-all group">
                   <feature.icon className="w-8 h-8 text-emerald-700 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                   <h4 className="font-bold text-gray-900">{feature.title}</h4>
                </div>
             ))}
          </div>

          <div className="mt-20">
             <button className="bg-emerald-700 hover:bg-emerald-800 text-white px-12 py-5 rounded-2xl text-lg font-bold shadow-2xl transition-all active:scale-95">
                Contact Business Development
             </button>
          </div>
        </motion.div>
      </div>

      {/* Decorative Accents */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-50/50 rounded-full blur-[150px] -z-0" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-emerald-50/50 rounded-full blur-[150px] -z-0" />
    </section>
  );
};

export default CustomSolutions;

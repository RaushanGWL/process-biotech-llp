import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Droplets, Zap, Factory } from 'lucide-react';
import powder from '../../assets/chitosan_powder.png';

const WhatIsChitosan: React.FC = () => {
  return (
    <section className="py-12 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Main Content Area */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-8 border-l-[6px] border-emerald-600 pl-8">
              What is <span className="text-emerald-700">Chitosan?</span>
            </h2>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed mb-12">
              <p>
                Chitosan is a versatile, natural biopolymer derived from the chitin of crustacean shells. Known for its unique bio-active properties, it is biodegradable, non-toxic, and biocompatible.
              </p>
              <p>
                At Process Biotech, we refine this natural resource into high-purity grades suitable for advanced industrial, pharmaceutical, and agricultural applications, ensuring consistency and excellence in every batch.
              </p>
            </div>

            {/* Feature Grid */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: Shield, label: "High Purity", desc: "Top-tier refinement" },
                { icon: Droplets, label: "Bio-Active", desc: "Natural properties" },
                { icon: Zap, label: "Fast Acting", desc: "Efficient results" },
                { icon: Factory, label: "Scalable", desc: "Large production" }
              ].map((feature, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 rounded-xl hover:bg-emerald-50 transition-colors group">
                  <div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center group-hover:bg-emerald-600 transition-colors">
                    <feature.icon className="w-5 h-5 text-emerald-700 group-hover:text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{feature.label}</h4>
                    <p className="text-xs text-gray-500">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Graphical Representation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-emerald-100/50 rounded-[2.5rem] blur-2xl -z-10" />
            <div className="bg-white p-6 rounded-[2.2rem] shadow-2xl border border-emerald-50">
              <img 
                src={powder} 
                alt="Chitosan Macro" 
                className="w-full h-auto rounded-[1.8rem] shadow-md object-cover"
              />
              {/* Floating Badge */}
              <div className="absolute -bottom-8 -right-8 bg-emerald-700 text-white p-8 rounded-3xl shadow-xl hidden md:block">
                <p className="text-2xl font-bold leading-tight">95%<br/><span className="text-sm font-medium text-emerald-200 uppercase tracking-widest">Deacetylation</span></p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsChitosan;

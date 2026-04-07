import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, CheckCircle, Zap } from 'lucide-react';

const QualityControls: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
             Quality <span className="text-emerald-700">Controls</span>
          </h2>
          <div className="w-24 h-1.5 bg-emerald-600 mx-auto mt-6 rounded-full opacity-60" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { title: "Standard Purity", desc: "Our products follow strict deacetylation and moisture targets.", icon: ShieldCheck },
            { title: "Batch Consistency", desc: "Rigorous quality checks for every batch manufactured.", icon: CheckCircle },
            { title: "Customer Satisfaction", desc: "Trusted by diverse industries for reliability and performance.", icon: Zap }
          ].map((cat, idx) => (
             <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-emerald-50/50 border border-emerald-100 rounded-3xl p-10 backdrop-blur-md hover:bg-emerald-100 transition-all group"
             >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 group-hover:bg-emerald-600 transition-colors">
                   <cat.icon className="w-8 h-8 text-emerald-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-emerald-800 transition-colors">
                   {cat.title}
                </h3>
                <p className="text-gray-500 leading-relaxed mb-8">
                   {cat.desc}
                </p>
             </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Accents */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-50/50 rounded-full blur-[150px] -z-0" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-50/50 rounded-full blur-[150px] -z-0" />
    </section>
  );
};

export default QualityControls;

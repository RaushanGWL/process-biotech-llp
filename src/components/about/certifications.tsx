import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const Certifications: React.FC = () => {
  return (
    <section className="py-12 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            Quality Assurance & <span className="text-emerald-700">Certifications</span>
          </h2>
          <div className="w-24 h-1.5 bg-emerald-600 mx-auto mt-4 rounded-full opacity-60" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
             { title: "ISO Certified", desc: "Our manufacturing process follows strict ISO standards for quality management." },
             { title: "GMP Standards", desc: "We adhere to Good Manufacturing Practices (GMP) ensuring consistent production." },
             { title: "Eco-Friendly", desc: "Our products are manufactured with a strong focus on environmental sustainability." }
          ].map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white border border-emerald-50 p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all text-center group cursor-default"
            >
              <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:bg-emerald-600 transition-colors">
                <CheckCircle className="w-8 h-8 text-emerald-700 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-emerald-700 transition-colors">
                {cert.title}
              </h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                {cert.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;

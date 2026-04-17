import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Recycle, Zap, Users } from 'lucide-react';

const CoreValues: React.FC = () => {
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
            Our Core <span className="text-emerald-700">Values</span>
          </h2>
          <div className="w-24 h-1.5 bg-emerald-600 mx-auto mt-4 rounded-full opacity-60" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {[
            {
              title: "Quality First",
              desc: "Ensuring top-tier standards in every batch of Chitosan manufactured.",
              icon: ShieldCheck
            },
            {
              title: "Sustainability",
              desc: "Developing biodegradable and eco-friendly solutions for industries.",
              icon: Recycle
            },
            {
              title: "Innovation",
              desc: "Regular R&D and exploring new boundaries of Chitosan research.",
              icon: Zap
            },
            {
              title: "Customer Focus",
              desc: "Building long-term partnerships and providing customized solutions.",
              icon: Users
            }
          ].map((value, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="group p-10 bg-white border border-emerald-50 rounded-3xl shadow-sm hover:shadow-2xl transition-all cursor-default"
            >
              <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:bg-emerald-600 transition-colors">
                <value.icon className="w-8 h-8 text-emerald-700 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-emerald-700 transition-colors">
                {value.title}
              </h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                {value.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;

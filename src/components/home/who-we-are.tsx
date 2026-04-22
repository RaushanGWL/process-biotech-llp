import React from 'react';
import { motion } from 'framer-motion';
import { Factory, Leaf, FlaskConical } from 'lucide-react';

const WhoWeAre: React.FC = () => {
  return (
    <section className="py-12 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            Who We <span className="text-emerald-700">Are</span>
          </h2>
          <div className="w-24 h-1.5 bg-emerald-600 mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Manufacturing Excellence",
              desc: "Large-scale facility in Nashik producing high-quality Chitosan with consistent quality and scalable production capabilities.",
              icon: Factory,
              delay: 0.1
            },
            {
              title: "Sustainability Focused",
              desc: "Derived from natural shrimp shell chitin, our biodegradable products are non-toxic and environmentally responsible.",
              icon: Leaf,
              delay: 0.3
            },
            {
              title: "Technical Expertise",
              desc: "Customized Chitosan solutions tailored to specific molecular weight, solubility, and application requirements.",
              icon: FlaskConical,
              delay: 0.5
            }
          ].map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              transition={{ duration: 0.6, delay: pillar.delay }}
              className="group p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:border-emerald-100 transition-all cursor-default"
            >
              <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-colors duration-300">
                <pillar.icon className="w-8 h-8 text-emerald-700 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-emerald-800 transition-colors">
                {pillar.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {pillar.desc}
              </p>
              <div className="mt-6 w-12 h-1 bg-emerald-100 group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Dynamic Background Element */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-emerald-50 rounded-full blur-3xl opacity-50 -z-10" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-emerald-50 rounded-full blur-3xl opacity-50 -z-10" />
    </section>
  );
};

export default WhoWeAre;

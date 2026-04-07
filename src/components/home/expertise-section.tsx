import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const ExpertiseSection: React.FC = () => {
  return (
    <section className="pb-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            Core <span className="text-emerald-700">Expertise</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {[
            {
              title: "Chitosan Manufacturing",
              points: ["Plain and Water-Soluble Chitosan", "Chitosan derivatives production", "Quality-controlled processes"]
            },
            {
              title: "Water-Soluble Grades",
              points: ["Low molecular weight specialty", "One of few Indian manufacturers", "Advanced processing techniques"]
            },
            {
              title: "Application Solutions",
              points: ["Customized formulations", "Industry-specific requirements", "Technical consultation"]
            },
            {
              title: "Sustainability Focus",
              points: ["Green chemistry principles", "Biodegradable materials", "Environmental responsibility"]
            }
          ].map((expertise, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-white p-8 lg:p-10 rounded-2xl border-l-[6px] border-emerald-600 shadow-[0_4px_20px_-5px_rgba(0,0,0,0.05)] hover:shadow-xl transition-all group"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-8 group-hover:text-emerald-800 transition-colors">
                {expertise.title}
              </h3>
              <ul className="space-y-4">
                {expertise.points.map((point, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-4 text-gray-700 font-medium">
                    <div className="mt-1 flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 group-hover:scale-110 transition-transform" />
                    </div>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Signature Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-50 rounded-full blur-[120px] opacity-20 -z-10" />
    </section>
  );
};

export default ExpertiseSection;

import React from 'react';
import { motion } from 'framer-motion';
import { Target, Flag } from 'lucide-react';

const VisionMission: React.FC = () => {
  return (
    <section className="py-12 bg-emerald-50/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="bg-white p-12 rounded-3xl shadow-xl border border-emerald-100 flex flex-col items-center text-center group cursor-default"
          >
            <div className="w-20 h-20 bg-emerald-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-emerald-600 transition-colors">
              <Target className="w-10 h-10 text-emerald-700 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h3>
            <p className="text-gray-600 text-2xl leading-relaxed italic font-serif">
               "To become a trusted and leading supplier of bio-degradable products in India and globally through innovation, quality manufacturing and strong industry partnerships."
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;

import React from 'react';
import { motion } from 'framer-motion';

const VisionSection: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-12 h-1.5 bg-emerald-600 mx-auto mb-10 rounded-full opacity-60" />
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-12">
            Our <span className="text-emerald-700">Vision</span>
          </h2>
          <p className="text-2xl md:text-3xl text-gray-700 font-medium italic leading-relaxed max-w-4xl mx-auto font-serif">
            "To become a trusted and leading supplier of Chitosan in India, delivering sustainable solutions through innovation, quality manufacturing, and strong industry partnerships."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionSection;

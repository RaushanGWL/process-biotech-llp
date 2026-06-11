import React from 'react';
import { motion } from 'framer-motion';
import powder from '../../assets/chitosan_powder.jpg';

const AboutWhoWeAre: React.FC = () => {
  return (
    <section className="py-12 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-emerald-100 rounded-[2.5rem] blur-2xl -z-10 opacity-60" />
            <img 
              src={powder} 
              alt="Chitosan Powder" 
              className="w-full h-[500px] object-cover rounded-[2rem] shadow-2xl"
            />
          </motion.div>

          {/* Texts & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 border-l-4 border-emerald-600 pl-6">
              Who We Are
            </h2>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed mb-12">
              <p>
                Process Biotech LLP is a technology-driven manufacturing enterprise focused on high-performance molecules. Our commitment to sustainable innovation drives us to explore the vast potential of marine-derived biodegradable biopolymer.
              </p>
              <p>
                With a large-scale facility and a dedicated team of researchers, we provide customised solutions for agriculture, pharmaceuticals, and industrial applications globally, ensuring the highest standards of quality and purity.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-8">
              <div>
                <p className="text-4xl font-extrabold text-emerald-700">100%</p>
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mt-2">Natural</p>
              </div>
              <div>
                <p className="text-4xl font-extrabold text-emerald-700">5+</p>
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mt-2">Products</p>
              </div>
              <div>
                <p className="text-4xl font-extrabold text-emerald-700">8+</p>
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mt-2">Industries Transformed</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutWhoWeAre;

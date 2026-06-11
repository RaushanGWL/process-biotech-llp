import React from 'react';
import { motion } from 'framer-motion';
import flakes from '../../assets/chitosan_flakes.png';
import powder from '../../assets/chitosan_powder.png';
import liquid from '../../assets/chitosan_liquid.png';

const ProductForms: React.FC = () => {
  const forms = [
    { title: "Flakes", desc: "For large-scale water treatment and industrial filtration.", image: flakes },
    { title: "Powder", desc: "Fine mesh sizes for agriculture and textile treatments.", image: powder },
    { title: "Liquid", desc: "Solubilized formulations for precision dosing in industrial and agricultural processes.", image: liquid }
  ];

  return (
    <section className="py-12 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            Available <span className="text-emerald-700">Product Forms</span>
          </h2>
          <div className="w-16 h-1 bg-emerald-600 mx-auto mt-6 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {forms.map((form, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-emerald-50/50 p-8 rounded-3xl border border-emerald-100/50 shadow-sm hover:shadow-xl transition-all group flex flex-col items-center"
            >
              <div className="w-24 h-24 bg-white rounded-full shadow-lg border border-emerald-100 flex items-center justify-center overflow-hidden mb-8 group-hover:scale-110 transition-transform">
                <img src={form.image} alt={form.title} className="w-full h-full object-cover scale-[1.2]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-emerald-800 transition-colors">
                {form.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {form.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductForms;

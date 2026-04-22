import React from 'react';
import { motion } from 'framer-motion';

const ProductSpecsTable: React.FC = () => {
  const specs = [
    { property: "Appearance", plain: "Off-White", water: "Off-White to Light Brown" },
    { property: "Form", plain: "Flakes/Powder/Liquid", water: "Flakes/Powder/Liquid" },
    { property: "Viscosity", plain: "50-80 cps (1% w/v solution)", water: "50-100 cps (10% w/v solution)" },
    { property: "Solubility", plain: "Soluble in Acetic Acid solution", water: "Soluble in Water" },
    { property: "Molecular Weight", plain: "<500 kDa", water: "<25 kDa" },
    { property: "Moisture", plain: "<10%", water: "<10%" }
  ];

  return (
    <section className="py-12 bg-emerald-50/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            Typical <span className="text-emerald-700">Specifications</span>
          </h2>
          <p className="mt-4 text-gray-500 font-medium tracking-widest uppercase text-xs">Standard Reference Values</p>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-emerald-100"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-emerald-900 text-white">
                  <th className="p-8 text-lg font-bold">Property</th>
                  <th className="p-8 text-lg font-bold border-l border-white/10 uppercase tracking-widest text-emerald-400">Plain Chitosan</th>
                  <th className="p-8 text-lg font-bold border-l border-white/10 uppercase tracking-widest text-emerald-400">Water-Soluble Chitosan</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-emerald-50">
                {specs.map((spec, idx) => (
                  <tr key={idx} className="hover:bg-emerald-50/30 transition-colors">
                    <td className="p-8 text-gray-900 font-bold bg-emerald-50/50">{spec.property}</td>
                    <td className="p-8 text-gray-600 font-medium border-l border-emerald-50">{spec.plain}</td>
                    <td className="p-8 text-gray-600 font-medium border-l border-emerald-50">{spec.water}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-emerald-900 p-6 text-center">
             <p className="text-emerald-100/60 text-xs font-bold uppercase tracking-widest">Custom Grades Available Based on Molecular Weight and Viscosity Requirements</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductSpecsTable;

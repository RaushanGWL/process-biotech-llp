import React from 'react';
import { motion } from 'framer-motion';

const ProductSpecsTable: React.FC = () => {
  const specs = [
    { property: "Appearance", plain: "Off-white to Pale Yellow Flakes/Powder", water: "Clear to Pale Yellow Solution" },
    { property: "Deacetylation", plain: "≥ 85% / 90% / 95%", water: "≥ 90% / 95%" },
    { property: "Viscosity (1% in 1% Acid)", plain: "20 - 2000 (Customizable)", water: "< 20 (Low Molecular Weight)" },
    { property: "Solubility", plain: "Soluble in Dilute Organic Acids", water: "Instant Solubility in Water" },
    { property: "Moisture Content", plain: "≤ 10%", water: "≤ 10%" },
    { property: "Ash Content", plain: "≤ 1%", water: "≤ 0.5% (High Purity)" },
    { property: "Heavy Metals", plain: "≤ 10 ppm", water: "≤ 5 ppm" }
  ];

  return (
    <section className="py-24 bg-emerald-50/50 relative overflow-hidden">
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

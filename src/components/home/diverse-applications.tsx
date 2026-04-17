import React from 'react';
import { motion } from 'framer-motion';
import { Sprout, Waves, Apple, Pill, Fish, SprayCan, Shirt, Recycle } from 'lucide-react';

const DiverseApplications: React.FC = () => {
  return (
    <section id="applications" className="py-12 bg-emerald-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Diverse Applications <span className="text-emerald-400">Across Industries</span>
          </h2>
          <div className="w-24 h-1.5 bg-emerald-500 mx-auto mt-4 rounded-full opacity-60" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Agriculture",
              icon: Sprout,
              points: ["Plant defense elicitor", "Growth enhancement", "Residue-free protection"],
              link: "View Trial Reports"
            },
            {
              title: "Water Treatment",
              icon: Waves,
              points: ["Natural flocculating agent", "Biodegradable solution"]
            },
            {
              title: "Food Coatings",
              icon: Apple,
              points: ["Shelf-life enhancement", "Fresh produce protection"]
            },
            {
              title: "Pharmaceuticals",
              icon: Pill,
              points: ["API applications", "Hemostatic agent"]
            },
            {
              title: "Aquaculture",
              icon: Fish,
              points: ["Disease control", "Growth support"]
            },
            {
              title: "Cosmetics",
              icon: SprayCan,
              points: ["Moisturizing properties", "Film-forming agent"]
            },
            {
              title: "Textiles",
              icon: Shirt,
              points: ["Functional biopolymer", "Sustainable treatment"]
            },
            {
              title: "Bioplastics",
              icon: Recycle,
              points: ["Biodegradable alternatives", "Sustainable films"]
            }
          ].map((app, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              whileHover={{ y: -5, backgroundColor: "rgba(255, 255, 255, 0.08)" }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 transition-all group"
            >
              <div className="w-14 h-14 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-8 group-hover:bg-emerald-500/20 transition-colors">
                <app.icon className="w-8 h-8 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-6">
                {app.title}
              </h3>
              <ul className="space-y-3 mb-8">
                {app.points.map((point, pIdx) => (
                  <li key={pIdx} className="text-emerald-100/60 text-sm font-medium flex items-center gap-2">
                     {point}
                  </li>
                ))}
              </ul>
              {app.link && (
                <a href="#" className="text-emerald-400 text-sm font-bold hover:text-emerald-300 transition-colors underline underline-offset-4 decoration-emerald-400/30">
                  {app.link}
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Background Accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-900/20 rounded-full blur-[120px] -z-10" />
    </section>
  );
};

export default DiverseApplications;

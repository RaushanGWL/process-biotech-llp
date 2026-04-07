import React from 'react';
import { motion } from 'framer-motion';

const JourneyTimeline: React.FC = () => {
  const milestones = [
    { year: "1980s", title: "Company Founded", desc: "Started with a vision of creating special-purpose equipment for the chemical industry." },
    { year: "1990s", title: "Technical Expertise", desc: "Expanded into core engineering and industrial process design." },
    { year: "2000s", title: "Chitosan Focus", desc: "Shifted strategic focus towards Chitosan manufacturing and R&D." },
    { year: "2010s", title: "Market Leader", desc: "Became a leading Indian supplier of high-quality Chitosan to global markets." },
    { year: "2020s", title: "Quality Certifications", desc: "Achieved ISO and other international standards of manufacturing excellence." },
    { year: "2024", title: "Innovation Power", desc: "Continuing the legacy with new sustainable Chitosan-based bioplastics and food coatings." }
  ];

  return (
    <section className="py-24 bg-emerald-50/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            Our <span className="text-emerald-700">Journey</span>
          </h2>
          <div className="w-24 h-1.5 bg-emerald-600 mx-auto mt-4 rounded-full opacity-60" />
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-emerald-200 rounded-full hidden md:block" />

          <div className="space-y-16 relative z-10">
            {milestones.map((ms, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`flex flex-col md:flex-row items-center gap-8 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Content */}
                <div className="w-full md:w-1/2 flex justify-center">
                  <div className={`bg-white p-8 rounded-3xl shadow-xl border border-emerald-50 max-w-md w-full hover:shadow-2xl transition-all group ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <span className="inline-block px-4 py-1 bg-emerald-100 text-emerald-700 text-sm font-bold rounded-full mb-4">
                      {ms.year}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors">
                      {ms.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {ms.desc}
                    </p>
                  </div>
                </div>

                {/* Dot */}
                <div className="relative flex items-center justify-center p-4">
                  <div className="w-6 h-6 bg-emerald-600 rounded-full border-4 border-white shadow-lg relative z-20" />
                  <div className="absolute w-10 h-10 bg-emerald-200/50 rounded-full animate-ping z-10" />
                </div>

                {/* Empty space for balance */}
                <div className="w-full md:w-1/2 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneyTimeline;

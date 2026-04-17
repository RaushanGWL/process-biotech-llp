import React from 'react';
import { motion } from 'framer-motion';
import { Sprout, Waves, Apple, Pill, Fish, SprayCan, Shirt, Recycle, CheckCircle2 } from 'lucide-react';

const applications = [
  {
    title: "Agriculture",
    icon: Sprout,
    points: ["Plant defense elicitor", "Growth enhancement", "Residue-free protection"],
    link: "View Trial Reports",
    color: "from-emerald-400 to-green-500"
  },
  {
    title: "Water Treatment",
    icon: Waves,
    points: ["Natural flocculating agent", "Biodegradable solution"],
    color: "from-blue-400 to-emerald-500"
  },
  {
    title: "Food Coatings",
    icon: Apple,
    points: ["Shelf-life enhancement", "Fresh produce protection"],
    color: "from-red-400 to-emerald-500"
  },
  {
    title: "Pharmaceuticals",
    icon: Pill,
    points: ["API applications", "Hemostatic agent"],
    color: "from-purple-400 to-emerald-500"
  },
  {
    title: "Aquaculture",
    icon: Fish,
    points: ["Disease control", "Growth support"],
    color: "from-cyan-400 to-emerald-500"
  },
  {
    title: "Cosmetics",
    icon: SprayCan,
    points: ["Moisturizing properties", "Film-forming agent"],
    color: "from-pink-400 to-emerald-500"
  },
  {
    title: "Textiles",
    icon: Shirt,
    points: ["Functional biopolymer", "Sustainable treatment"],
    color: "from-yellow-400 to-emerald-500"
  },
  {
    title: "Bioplastics",
    icon: Recycle,
    points: ["Biodegradable alternatives", "Sustainable films"],
    color: "from-orange-400 to-emerald-500"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const DiverseApplications: React.FC = () => {
  return (
    <section id="applications" className="py-24 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-950 via-[#062c22] to-black relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.05, 0.15, 0.05],
            x: [0, -40, 0],
            y: [0, 20, 0]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-emerald-700/10 rounded-full blur-[100px]" 
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
            Diverse Applications <br />
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-500 bg-clip-text text-transparent">
              Across Industries
            </span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full shadow-[0_0_15px_rgba(16,185,129,0.5)]" />
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {applications.map((app, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ 
                y: -12,
                transition: { type: "spring", stiffness: 400, damping: 25 }
              }}
              className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 transition-all duration-300 hover:bg-white/[0.08] hover:border-emerald-500/30 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5),0_0_20px_rgba(16,185,129,0.1)] overflow-hidden"
            >
              {/* Card Glow Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-br from-emerald-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl z-0" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-8 border border-emerald-500/20 group-hover:bg-emerald-500/20 group-hover:scale-110 transition-all duration-300 shadow-inner">
                  <app.icon className="w-9 h-9 text-emerald-400 group-hover:text-emerald-300" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-emerald-300 transition-colors">
                  {app.title}
                </h3>
                
                <ul className="space-y-4 mb-10">
                  {app.points.map((point, pIdx) => (
                    <motion.li 
                      key={pIdx} 
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + (pIdx * 0.1) }}
                      className="text-emerald-50/70 text-sm font-medium flex items-center gap-3"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      <span>{point}</span>
                    </motion.li>
                  ))}
                </ul>

                {app.link ? (
                  <motion.a 
                    href="#" 
                    whileHover={{ x: 5 }}
                    className="inline-flex items-center gap-2 text-emerald-400 text-sm font-bold hover:text-emerald-300 transition-colors group/link"
                  >
                    {app.link}
                    <motion.span animate={{ x: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                      →
                    </motion.span>
                  </motion.a>
                ) : (
                  <div className="h-5" /> // Spacer for alignment
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default DiverseApplications;

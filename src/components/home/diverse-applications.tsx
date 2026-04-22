import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { Droplets, Apple, Pill, Fish, SprayCan, Shirt, Recycle, CheckCircle2, Leaf } from 'lucide-react';

const applications = [
  {
    title: "Agriculture",
    icon: Leaf,
    points: ["Plant defense elicitor", "Growth enhancement", "Residue-free protection"],
    link: "View Trial Reports",
    color: "from-emerald-400 to-green-500"
  },
  {
    title: "Water Treatment",
    icon: Droplets,
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

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariants: Variants = {
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
    <section id="applications" className="py-16 bg-emerald-50/30 relative overflow-hidden text-left">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-100/40 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-50/60 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-emerald-700 font-bold uppercase tracking-[0.2em] text-xs md:text-sm mb-2 block"
          >
            Sustainable Solutions
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-4">
            Diverse Applications <br />
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Across Industries
            </span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-emerald-600 to-teal-500 mx-auto rounded-full shadow-sm" />
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
              className="group relative bg-white border border-gray-100 rounded-[2rem] p-8 transition-all duration-300 hover:border-emerald-200 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] overflow-hidden"
            >
              <div className="relative z-10">
                <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mb-8 border border-emerald-100 group-hover:bg-emerald-600 group-hover:scale-110 transition-all duration-300 shadow-sm">
                  <app.icon className="w-8 h-8 text-emerald-700 group-hover:text-white transition-colors" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-emerald-800 transition-colors">
                  {app.title}
                </h3>
                
                <ul className="space-y-4 mb-10">
                  {app.points.map((point, pIdx) => (
                    <li 
                      key={pIdx} 
                      className="text-gray-600 text-sm font-medium flex items-center gap-3"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {app.link && (
                  <motion.a 
                    href="#" 
                    whileHover={{ x: 5 }}
                    className="inline-flex items-center gap-2 text-emerald-700 text-sm font-bold hover:text-emerald-800 transition-colors"
                  >
                    {app.link}
                    <span>→</span>
                  </motion.a>
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

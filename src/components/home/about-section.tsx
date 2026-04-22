import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import facility from '../../assets/facility.png';

const AboutSection: React.FC = () => {
  return (
    <section className="py-12 bg-emerald-50/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1.0fr] gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-8">
              About <span className="text-emerald-700">Process Biotech LLP</span>
            </h2>
            
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              <span className="font-semibold text-emerald-800">Specialised in manufacturing bio-based molecules.</span><br /><br />
              Process Biotech LLP is a technology-driven manufacturing enterprise focused on high-performance molecules. Our commitment to sustainable innovation drives us to explore the vast potential of marine-derived biodegradable biopolymer. With a large-scale facility and a dedicated team of researchers, we provide customised solutions for agriculture, pharmaceuticals, and industrial applications globally, ensuring the highest standards of quality and purity.
            </p>

            <div className="flex items-center gap-3 text-emerald-700 font-semibold mb-12">
              <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
              <span className="text-lg">Nashik, Maharashtra</span>
            </div>

            {/* Stats Grid for Desktop (Inside Text Area) */}
            <div className="hidden lg:grid grid-cols-3 gap-4">
              {[
                { value: "100%", label: "Natural" },
                { value: "5+", label: "Products" },
                { value: "8+", label: "Industries Transformed" }
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + idx * 0.1 }}
                  className="p-6 rounded-2xl bg-white shadow-sm border border-emerald-100"
                >
                  <p className="text-2xl font-bold text-emerald-800">{stat.value}</p>
                  <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-emerald-200/50 rounded-[2.5rem] blur-2xl -z-10" />
            <img 
              src={facility} 
              alt="Process Biotech Facility" 
              className="w-full h-[500px] lg:h-[600px] rounded-[2rem] shadow-2xl object-cover"
            />
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-emerald-50 hidden md:block">
              <p className="text-emerald-800 font-bold text-center">Quality Driven<br/><span className="text-gray-400 font-medium text-sm">Innovation</span></p>
            </div>
          </motion.div>

          {/* Mobile-only Stats Grid */}
          <div className="lg:hidden grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 w-full">
            {[
              { value: "100%", label: "Natural" },
              { value: "5+", label: "Products" },
              { value: "8+", label: "Industries Transformed" }
            ].map((stat, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-white shadow-md border border-emerald-100 text-center">
                <p className="text-3xl font-bold text-emerald-800">{stat.value}</p>
                <p className="text-sm text-gray-500 font-medium uppercase tracking-wider mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

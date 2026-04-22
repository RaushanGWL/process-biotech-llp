import React from 'react';
import { motion } from 'framer-motion';
import facility from '../../assets/facility.png';

const ContactHero: React.FC = () => {
  return (
    <section className="relative h-[65vh] w-full flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Enhanced Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={facility} 
          alt="Contact Us" 
          className="w-full h-full object-cover scale-105"
        />
        {/* Multilayered Overlay for Depth */}
        <div className="absolute inset-0 bg-emerald-950/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-emerald-950/80" />
        <div className="absolute inset-0 backdrop-blur-[1px]" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          {/* Top Label */}
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-emerald-500/10 text-emerald-400 border border-emerald-400/20 px-4 py-1 rounded-full text-xs md:text-sm font-bold uppercase mb-8 backdrop-blur-md"
          >
            Stay Connected
          </motion.span>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-8xl font-extrabold text-white mb-10 tracking-tighter leading-none">
            Contact <span className="text-emerald-400 relative">
              Us
              {/* Subtle underline glow */}
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-emerald-400/50 blur-sm rounded-full" />
            </span>
          </h1>

          {/* Elegant Divider */}
          <div className="relative flex items-center justify-center w-full mb-10">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-emerald-500/50 rounded-full" />
            <div className="w-2 h-2 bg-emerald-400 rotate-45 mx-4 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-emerald-500/50 rounded-full" />
          </div>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-emerald-50/90 font-light max-w-3xl mx-auto leading-relaxed px-4">
            Partner with <span className="font-semibold text-white">Process Biotech</span> for high-performance bio-based molecular solutions tailored to your global industrial needs.
          </p>
        </motion.div>
      </div>

      {/* Scroll Indicator (Mini) */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
        <div className="w-px h-12 bg-gradient-to-b from-emerald-400 to-transparent" />
      </div>

      {/* Decorative Accents */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-emerald-700/10 rounded-full blur-[100px] pointer-events-none animate-pulse" />
    </section>
  );
};

export default ContactHero;

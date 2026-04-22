import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/header';
import Footer from '../components/footer';
import DiverseApplications from '../components/home/diverse-applications';

const ApplicationsPage: React.FC = () => {
  // Ensure we start at the top of the page on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen bg-slate-50 overflow-hidden">
      <Header />
      
      {/* Elegant Hero Section strictly for Applications */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden bg-white">
        <div className="absolute inset-0 z-0">
           <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-emerald-50/50 to-white" />
           <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-emerald-100/30 rounded-full blur-[100px] translate-y-[-20%]" />
           <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-teal-50/40 rounded-full blur-[100px] translate-y-[20%]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-sm font-bold tracking-wide uppercase mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Global Impact
            </span>
            
            <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight mb-8">
              Transforming <br />
              <span className="block mt-2 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Industries Worldwide
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed font-medium">
              Discover how our cutting-edge chitosan biopolymers are revolutionizing agriculture, water treatment, pharmaceuticals, and beyond with sustainable, high-performance solutions.
            </p>

            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.4 }}
               className="w-24 h-1.5 bg-gradient-to-r from-emerald-600 to-teal-500 mx-auto rounded-full shadow-sm" 
            />
          </motion.div>
        </div>
      </section>

      {/* Main content sections */}
      <DiverseApplications />

      <Footer />
    </div>
  );
};

export default ApplicationsPage;

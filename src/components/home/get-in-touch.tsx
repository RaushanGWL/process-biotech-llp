import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, User, Phone, Mail } from 'lucide-react';

const GetInTouch: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-12">
              Get <span className="text-emerald-700">In Touch</span>
            </h2>

            <div className="space-y-10">
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center group-hover:bg-emerald-600 transition-colors">
                  <MapPin className="w-6 h-6 text-emerald-700 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-1">Process Biotech LLP</h4>
                  <p className="text-gray-600 leading-relaxed">
                    D-402, Rushiraj Harmony Apts.<br />
                    Gangapur Road, Nashik, Maharashtra<br />
                    PIN - 422013
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center group-hover:bg-emerald-600 transition-colors">
                  <User className="w-6 h-6 text-emerald-700 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-1">Contact Person</h4>
                  <p className="text-gray-600">Mr. Mahim Sharma</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center group-hover:bg-emerald-600 transition-colors">
                  <Phone className="w-6 h-6 text-emerald-700 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-1">Phone & WhatsApp</h4>
                  <a href="https://wa.me/919706955009" className="text-emerald-700 font-bold text-lg hover:underline underline-offset-4">
                    +91-9706955009
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center group-hover:bg-emerald-600 transition-colors">
                  <Mail className="w-6 h-6 text-emerald-700 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-1">Email Addresses</h4>
                  <div className="flex flex-col gap-1">
                    <a href="mailto:processbiotech@gmail.com" className="text-emerald-700 hover:text-emerald-800 transition-colors">
                      processbiotech@gmail.com
                    </a>
                    <a href="mailto:mahim.processbiotech@gmail.com" className="text-emerald-700 hover:text-emerald-800 transition-colors">
                      mahim.processbiotech@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map Placeholder/Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl group border-[10px] border-emerald-50"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3748.7428456488313!2d73.74830137535492!3d20.01925348139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb8755555555%3A0x6b4f728cce7e15e!2sRushiraj%20Harmony!5e0!3m2!1sen!2sin!4v1712480000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: "grayscale(0.1) contrast(1.1)" }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
            />
            <div className="absolute top-6 left-6 bg-white px-4 py-2 rounded-full shadow-lg border border-emerald-100/50 backdrop-blur-sm">
              <span className="text-emerald-800 text-xs font-bold uppercase tracking-widest">Our Location</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;

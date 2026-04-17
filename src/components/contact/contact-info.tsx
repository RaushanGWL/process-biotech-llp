import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, User } from 'lucide-react';

const ContactInfo: React.FC = () => {
  const infoItems = [
    {
      icon: MapPin,
      title: "Our Address",
      details: ["D-402, Rushiraj Harmony Apts.", "Gangapur Road, Nashik, Maharashtra", "PIN - 422013"],
    },
    {
      icon: User,
      title: "Contact Person",
      details: ["Mr. Mahim Sharma"],
    },
    {
      icon: Phone,
      title: "Phone & WhatsApp",
      details: ["+91-9706955009"],
      link: "https://wa.me/919706955009"
    },
    {
      icon: Mail,
      title: "Email Addresses",
      details: ["processbiotech@gmail.com", "mahim.processbiotech@gmail.com"],
      links: ["mailto:processbiotech@gmail.com", "mailto:mahim.processbiotech@gmail.com"]
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 9:00 AM - 1:00 PM"],
    }
  ];

  return (
    <div className="space-y-12">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8 border-l-4 border-emerald-600 pl-6">
          Contact <span className="text-emerald-700">Information</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-1">
          {infoItems.map((item, idx) => (
            <div key={idx} className="flex items-start gap-6 group">
              <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center group-hover:bg-emerald-600 transition-all duration-300">
                <item.icon className="w-6 h-6 text-emerald-700 group-hover:text-white transition-colors" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
                <div className="space-y-1">
                  {item.details.map((detail, dIdx) => (
                    <p key={dIdx} className="text-gray-600 leading-relaxed text-sm lg:text-base">
                      {item.links && item.links[dIdx] ? (
                        <a href={item.links[dIdx]} className="hover:text-emerald-700 transition-colors">{detail}</a>
                      ) : item.link ? (
                        <a href={item.link} className="hover:text-emerald-700 transition-colors">{detail}</a>
                      ) : detail}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

    </div>
  );
};

export default ContactInfo;

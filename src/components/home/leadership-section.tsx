import React from 'react';
import { motion } from 'framer-motion';

import founder1 from '../../assets/founder1.png';
import founder2 from '../../assets/founder2.png';
import founder3 from '../../assets/founder3.png';
import founder4 from '../../assets/founder4.png';

const LeadershipSection: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            Meet Our <span className="text-emerald-700">Leadership Team</span>
          </h2>
          <div className="w-24 h-1.5 bg-emerald-600 mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              name: "Mr. Pradeep Mundle",
              role: "Founder & Technical Lead",
              image: founder1,
              edu: "B.Tech (Chemical Engineering), IIT Kanpur",
              bio: "Over 40 years of experience in design and manufacture of special-purpose equipment for the chemical industry, with strong specialization in continuous solid-liquid separation systems.",
              linkedin: "#"
            },
            {
              name: "Ms. Amruta Bhombe",
              role: "Founder",
              image: founder2,
              edu: "B.E. (Instrumentation), MBA (University of Colorado), ISB Product Management",
              bio: "Leads strategy, business development, relationship management, financial planning, and operations with strong cross-sectoral experience.",
              linkedin: "#"
            },
            {
              name: "Mr. Jaideep Tilak",
              role: "Co-founder",
              image: founder3,
              edu: "Captain, Merchant Navy",
              bio: "Responsible for business development, regulatory compliance, and workshop operations with disciplined leadership background.",
              linkedin: "#"
            },
            {
              name: "Mahim Sharma",
              role: "Marketing Head",
              image: founder4,
              edu: "B.Sc. in Biotechnology",
              bio: "Leads marketing initiatives with strong domain expertise in biotechnology and Chitosan applications, responsible for market development and customer engagement.",
              linkedin: "#"
            }
          ].map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="group flex flex-col bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <a
                    href={member.linkedin}
                    className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center text-white hover:bg-emerald-700 transition-colors"
                  >
                    <svg
                      className="w-5 h-5 fill-current"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-emerald-700 transition-colors mb-1">
                  {member.name}
                </h3>
                <p className="text-emerald-700 font-bold text-sm mb-4">
                  {member.role}
                </p>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4 border-l-2 border-emerald-100 pl-3">
                  {member.edu}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {member.bio}
                </p>
                <div className="mt-auto flex items-center gap-2 group-hover:gap-4 transition-all duration-300 text-emerald-800 font-bold text-sm cursor-pointer">
                  <div className="w-4 h-4 bg-emerald-100 p-1 rounded box-content">
                    <svg
                      className="w-full h-full fill-emerald-800"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </div>
                  Connect on LinkedIn
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;

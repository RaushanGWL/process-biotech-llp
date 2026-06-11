import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2,  Loader2 } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    industry: 'Select Industry',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    
    // Reset after some time
    setTimeout(() => {
      setIsSuccess(false);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        industry: 'Select Industry',
        subject: '',
        message: ''
      });
    }, 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <motion.div
      id="form"
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-white rounded-[2.5rem] shadow-2xl p-8 md:p-12 border border-emerald-50 relative overflow-hidden"
    >
      <AnimatePresence mode="wait">
        {!isSuccess ? (
          <motion.div
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <h3 className="text-2xl font-extrabold text-gray-900 mb-2">Send a Message</h3>
            <p className="text-gray-500 mb-10 text-sm">We'll get back to you within 24 business hours.</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2 ml-1">First Name</label>
                  <input
                    required
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border-0 rounded-2xl p-4 text-gray-900 focus:ring-2 focus:ring-emerald-500 transition-all outline-none"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2 ml-1">Last Name</label>
                  <input
                    required
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border-0 rounded-2xl p-4 text-gray-900 focus:ring-2 focus:ring-emerald-500 transition-all outline-none"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2 ml-1">Email Address</label>
                  <input
                    required
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border-0 rounded-2xl p-4 text-gray-900 focus:ring-2 focus:ring-emerald-500 transition-all outline-none"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2 ml-1">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border-0 rounded-2xl p-4 text-gray-900 focus:ring-2 focus:ring-emerald-500 transition-all outline-none"
                    placeholder="+91 00000 00000"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="industry" className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2 ml-1">Industry</label>
                <select
                  id="industry"
                  name="industry"
                  value={formData.industry}
                  onChange={handleChange}
                  className="w-full bg-slate-50 border-0 rounded-2xl p-4 text-gray-900 focus:ring-2 focus:ring-emerald-500 transition-all outline-none appearance-none"
                >
                  <option disabled>Select Industry</option>
                  <option>Agriculture</option>
                  <option>Pharmaceuticals</option>
                  <option>Water Treatment</option>
                  <option>Cosmetics</option>
                  <option>Food & Beverage</option>
                  <option>Textiles</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2 ml-1">Message</label>
                <textarea
                  required
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-slate-50 border-0 rounded-2xl p-4 text-gray-900 focus:ring-2 focus:ring-emerald-500 transition-all outline-none"
                  placeholder="How can we help you?"
                />
              </div>
              <button
                disabled={isSubmitting}
                type="submit"
                className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-5 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed group"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    Send Enquiry
                  </>
                )}
              </button>
            </form>
          </motion.div>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center py-20 text-center"
          >
            <div className="w-24 h-24 bg-emerald-50 rounded-full flex items-center justify-center mb-8">
              <CheckCircle2 className="w-12 h-12 text-emerald-600" />
            </div>
            <h3 className="text-3xl font-extrabold text-gray-900 mb-4">Message Sent!</h3>
            <p className="text-gray-500 max-w-sm leading-relaxed">
              Thank you for reaching out. We have received your enquiry and our team will contact you shortly.
            </p>
            <button 
              onClick={() => setIsSuccess(false)}
              className="mt-10 text-emerald-700 font-bold hover:underline underline-offset-4"
            >
              Send another message
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ContactForm;

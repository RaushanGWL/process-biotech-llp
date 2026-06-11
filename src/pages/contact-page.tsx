import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';
import ContactHero from '../components/contact/contact-hero';
import ContactInfo from '../components/contact/contact-info';
import ContactForm from '../components/contact/contact-form';
import LeadershipSection from '../components/home/leadership-section';

const ContactPage: React.FC = () => {
  const location = useLocation();

  // Ensure we start at the top of the page on mount, or scroll to hash
  useEffect(() => {
    if (location.hash === '#form') {
      setTimeout(() => {
        const el = document.getElementById('form');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="relative min-h-screen bg-slate-50 overflow-hidden">
      <Header />
      <ContactHero />
      
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-20 items-start">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
        
        {/* Decorative Background Accents */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[100px] -z-10" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-700/5 rounded-full blur-[100px] -z-10" />
      </section>

      <LeadershipSection />

      <Footer />
    </div>
  );
};

export default ContactPage;

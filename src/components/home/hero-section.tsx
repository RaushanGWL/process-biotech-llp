import React from 'react';
import { useNavigate } from 'react-router-dom';
import bgVideo from '../../assets/biotech_bg_video.mp4';

const HeroSection: React.FC = () => {
  const navigate = useNavigate();
  return (
    <section className="relative min-h-[100svh] w-full flex items-center pt-28 pb-24">
      {/* Video Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover pointer-events-none"
        >
          <source src={bgVideo} type="video/mp4" />
        </video>
        {/* Subtle Dark Overlay for Readability */}
        <div className="absolute inset-0 bg-black/30 z-10" />
      </div>

      {/* Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.1]">
            Powering <span className="text-emerald-400">Sustainability</span> with Bio-Based <span className="text-emerald-400 underline underline-offset-8 decoration-emerald-200/30">Molecules</span>
          </h1>
          
          <p className="mt-8 text-xl text-gray-100 leading-relaxed max-w-xl">
            Leading Indian manufacturer of Chitosan and derivatives for agriculture, water treatment, and industrial applications.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button onClick={() => navigate('/products')} className="bg-emerald-800 hover:bg-emerald-900 text-white px-8 py-4 rounded-lg text-lg font-bold transition-all shadow-lg hover:shadow-emerald-200 hover:-translate-y-1 active:translate-y-0">
              Explore Products
            </button>
            <button onClick={() => navigate('/contact')} className="bg-white border-2 border-emerald-800 text-emerald-800 hover:bg-emerald-50 px-8 py-4 rounded-lg text-lg font-bold transition-all hover:-translate-y-1 active:translate-y-0">
              Download Brochure
            </button>
          </div>

          {/* Micro-stats or trust signals */}
          <div className="mt-12 flex flex-wrap items-center gap-6 sm:gap-8 border-t border-white/20 pt-8">
            <div className="min-w-[140px]">
              <p className="text-3xl font-bold text-white">10+</p>
              <p className="text-sm text-gray-300 uppercase tracking-wider font-semibold">Years Experience</p>
            </div>
            <div className="hidden sm:block w-px h-10 bg-white/20" />
            <div className="min-w-[140px]">
              <p className="text-3xl font-bold text-white">5+</p>
              <p className="text-sm text-gray-300 uppercase tracking-wider font-semibold">Product Range</p>
            </div>
            <div className="hidden sm:block w-px h-10 bg-white/20" />
            <div className="min-w-[140px]">
              <p className="text-3xl font-bold text-white">Global</p>
              <p className="text-sm text-gray-300 uppercase tracking-wider font-semibold">Export Network</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;

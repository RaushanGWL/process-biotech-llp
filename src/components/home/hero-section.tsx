import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center pt-20">
      {/* Video Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <iframe
          className="absolute min-w-full min-h-full object-cover scale-105 pointer-events-none"
          src="https://www.youtube.com/embed/St6yHwKKesQ?autoplay=1&mute=1&loop=1&playlist=St6yHwKKesQ&controls=0&modestbranding=1&rel=0&iv_load_policy=3&playsinline=1"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        {/* Subtle Dark Overlay for Readability */}
        <div className="absolute inset-0 bg-black/30 z-10" />
      </div>

      {/* Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.1]">
            Sustainable <span className="text-emerald-400">Chitosan</span> Solutions for a <span className="text-emerald-400 underline underline-offset-8 decoration-emerald-200/30">Greener Future</span>
          </h1>
          
          <p className="mt-8 text-xl text-gray-100 leading-relaxed max-w-xl">
            Leading Indian manufacturer of Chitosan and derivatives for agriculture, water treatment, and industrial applications.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button className="bg-emerald-800 hover:bg-emerald-900 text-white px-8 py-4 rounded-lg text-lg font-bold transition-all shadow-lg hover:shadow-emerald-200 hover:-translate-y-1 active:translate-y-0">
              Explore Products
            </button>
            <button className="bg-white border-2 border-emerald-800 text-emerald-800 hover:bg-emerald-50 px-8 py-4 rounded-lg text-lg font-bold transition-all hover:-translate-y-1 active:translate-y-0">
              Download Brochure
            </button>
          </div>

          {/* Micro-stats or trust signals */}
          <div className="mt-12 flex items-center gap-8 border-t border-white/20 pt-8">
            <div>
              <p className="text-3xl font-bold text-white">15+</p>
              <p className="text-sm text-gray-300 uppercase tracking-wider font-semibold">Years Experience</p>
            </div>
            <div className="w-px h-10 bg-white/20" />
            <div>
              <p className="text-3xl font-bold text-white">50+</p>
              <p className="text-sm text-gray-300 uppercase tracking-wider font-semibold">Product Range</p>
            </div>
            <div className="w-px h-10 bg-white/20" />
            <div>
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

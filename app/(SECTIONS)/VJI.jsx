import React from 'react';

/**
 * VJI Component
 * Features a full-height (100vh) hero section with responsive typography
 * and a centered content layout.
 */

export default function VJI  ()  {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* 100vh Section */}
      <section className="flex h-screen w-full flex-col items-center justify-center bg-gradient-to-br from-indigo-600 to-violet-700 px-4 text-white">
        <div className="max-w-3xl text-center">
          <h1 className="mb-6 text-5xl font-extrabold tracking-tight md:text-7xl">
            Welcome to VJI
          </h1>
          <p className="mb-8 text-lg font-medium text-indigo-100 md:text-xl">
            This is a full-height section designed to capture attention. 
            Built with React and styled with Tailwind CSS for seamless 
            responsiveness across all devices.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="rounded-full bg-white px-8 py-3 font-semibold text-indigo-600 transition-all hover:bg-indigo-50 active:scale-95">
              Get Started
            </button>
            <button className="rounded-full border-2 border-white/30 px-8 py-3 font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10 active:scale-95">
              Learn More
            </button>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 animate-bounce">
          <svg 
            className="h-6 w-6 text-white/60" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </section>

      {/* Additional Basic Content Section */}
      <section className="mx-auto max-w-5xl py-20 px-6">
        <h2 className="mb-12 text-center text-3xl font-bold text-slate-800">Why VJI?</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {[
            { title: "Fast", desc: "Optimized for speed and performance." },
            { title: "Modern", desc: "Utilizing the latest web technologies." },
            { title: "Responsive", desc: "Looks great on any screen size." }
          ].map((feature, idx) => (
            <div key={idx} className="rounded-2xl bg-white p-8 shadow-sm border border-slate-100">
              <h3 className="mb-3 text-xl font-bold text-indigo-600">{feature.title}</h3>
              <p className="text-slate-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};


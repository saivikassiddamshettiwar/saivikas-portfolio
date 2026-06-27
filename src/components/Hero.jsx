import React from 'react';
import bgImage from '../assets/bg-hero.jpg'; 

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center text-center px-4 overflow-hidden">
      
      {/* Full-Screen Background Image Layer */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transform scale-100 transition-transform duration-700"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      {/* Deep Vignette Overlay filter to make white text pop out legibly */}
      <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-[1px] bg-gradient-to-b from-slate-950/40 via-slate-950/60 to-slate-950" />

      {/* Main Content Card Box */}
      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
        
        <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-blue-400 mb-4 drop-shadow">
          Hi, I am Saivikas Siddamshettiwar, a passionate Software Engineer
        </p>
        
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight drop-shadow-lg">
          Building Solutions with <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-200 to-blue-400">
            Code & Intelligence
          </span>
        </h1>
        
        <p className="text-sm sm:text-base text-slate-300 max-w-xl leading-relaxed mb-10 drop-shadow">
          Specializing in Full Stack Development, Machine Learning pipelines, and Computer Vision architectures to bridge the gap between complex data and intuitive applications.
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://github.com/saivikassiddamshettiwar"
            target="_blank"
            rel="noreferrer"
            className="text-xs sm:text-sm font-semibold tracking-widest uppercase bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white hover:text-slate-950 text-white py-3 px-6 rounded-md transition-all duration-300 shadow-xl"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/siddamshettiwar-saivikas-a4635b284"
            target="_blank"
            rel="noreferrer"
            className="text-xs sm:text-sm font-semibold tracking-widest uppercase bg-slate-900/80 backdrop-blur-md border border-slate-800 hover:border-slate-700 text-slate-200 py-3 px-6 rounded-md transition-all duration-300 shadow-xl"
          >
            LinkedIn
          </a>
        </div>

      </div>
    </section>
  );
}
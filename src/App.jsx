import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen font-sans antialiased selection:bg-blue-500/30 selection:text-blue-200">
      <Navbar />
      
      <main className="w-full">
        {/* Full-width Hero image banner */}
        <Hero />
        
        {/* Max-width content layout blocks */}
        <div className="flex flex-col mx-auto w-full max-w-5xl px-6 sm:px-8 lg:px-10">
          <About />
          <Projects />
          <Education />
          <Certifications />
          <Contact />
        </div>
      </main>

      <footer className="py-12 text-center text-xs text-slate-600 tracking-widest border-t border-slate-900/40">
        © {new Date().getFullYear()} SAIVIKAS SIDDAMSHETTIWAR. ALL RIGHTS RESERVED.
      </footer>
    </div>
  );
}
import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-6 text-slate-100">Get In Touch</h2>
      <p className="text-slate-400 max-w-md mx-auto mb-10 text-sm sm:text-base">
        Feel free to reach out for structural collaborations, development opportunities, or research project discussions.
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-12">
        <a href="mailto:saivikassidds01@gmail.com" className="bg-slate-900 border border-slate-800 hover:border-blue-500 p-4 rounded-xl transition-all">
          <span className="block text-xs text-slate-500 uppercase tracking-wider font-semibold">Email</span>
          <span className="text-sm text-slate-300 font-medium break-all">saivikassidds01@gmail.com</span>
        </a>
        <a href="tel:7822984288" className="bg-slate-900 border border-slate-800 hover:border-blue-500 p-4 rounded-xl transition-all">
          <span className="block text-xs text-slate-500 uppercase tracking-wider font-semibold">Phone</span>
          <span className="text-sm text-slate-300 font-medium">7822984288</span>
        </a>
      </div>

      <div className="flex justify-center gap-6 text-sm text-slate-400">
        <a href="https://linkedin.com/in/siddamshettiwar-saivikas-a4635b284" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors">LinkedIn</a>
        <span className="text-slate-800">|</span>
        <a href="https://github.com/saivikassiddamshettiwar" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors">GitHub</a>
      </div>
    </section>
  );
}
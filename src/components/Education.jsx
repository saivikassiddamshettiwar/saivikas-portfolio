import React from 'react';

export default function Education() {
  return (
    <section id="education" className="py-24 w-full max-w-4xl mx-auto">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-blue-500 mb-3">Timeline</h2>
      <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mb-12 text-slate-100">Academic Background</h3>
      
      <div className="relative border-l border-slate-800 pl-6 ml-2">
        <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[7px] top-1.5 border-4 border-slate-950 shadow-[0_0_10px_#3b82f6]" />
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h4 className="text-xl font-bold text-slate-100">VIT-AP University</h4>
            <p className="text-base text-slate-400 mt-1">Integrated M.Tech in Software Engineering</p>
          </div>
          <div className="bg-slate-900 border border-slate-800 py-2 px-4 rounded-lg self-start sm:self-center">
            <span className="text-xs font-medium text-slate-500 uppercase tracking-wider block">Score</span>
            <span className="text-base font-bold text-blue-400">7.20 CGPA</span>
          </div>
        </div>
      </div>
    </section>
  );
}
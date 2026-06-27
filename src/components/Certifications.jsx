import React from 'react';

export default function Certifications() {
  const certificates = [
    { name: "Machine Learning", issuer: "NPTEL" },
    { name: "Web Development", issuer: "Corizo" },
    { name: "Generative AI", issuer: "Outskill" },
    { name: "Coding/Technical Training", issuer: "GeeksforGeeks" },
    { name: "MATLAB Programming", issuer: "MathWorks" }
  ];

  return (
    <section id="certifications" className="py-24 w-full max-w-4xl mx-auto">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-blue-500 mb-3">Qualifications</h2>
      <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mb-12 text-slate-100">Verified Credentials</h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
        {certificates.map((cert, index) => (
          <div key={index} className="bg-slate-900/60 border border-slate-800/80 p-5 rounded-xl flex justify-between items-center hover:bg-slate-900 transition-colors">
            <div>
              <h4 className="font-semibold text-slate-200 text-sm sm:text-base">{cert.name}</h4>
              <p className="text-xs text-slate-500 mt-1 font-medium">{cert.issuer}</p>
            </div>
            <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-400 bg-emerald-500/10 py-1 px-2.5 rounded-full border border-emerald-500/10">
              Passed
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
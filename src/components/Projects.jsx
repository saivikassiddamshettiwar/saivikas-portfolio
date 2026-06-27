import React from 'react';

export default function Projects() {
  const projectList = [
    {
      title: "Thyroid Detection using Machine Learning",
      role: "Data Analyst",
      tech: ["Python", "Random Forest", "XGBoost", "KNN"],
      desc: "Developed a predictive classification framework using machine learning models to analyze biomarker datasets and diagnostic features for accurate thyroid condition classification."
    },
    {
      title: "Hand Sign Gesture Detection",
      role: "Project Lead & Python Developer",
      tech: ["OpenCV", "Python", "Computer Vision"],
      desc: "Engineered a real-time computer vision platform tracking hand tracking layouts and node structures to dynamically map sign language patterns into semantic commands."
    },
    {
      title: "Portfolio Website",
      role: "Project Lead & Front-End Developer",
      tech: ["React", "Tailwind CSS", "Vite", "JavaScript"],
      desc: "Designed and implemented this responsive, components-driven web architecture optimizing rendering performance and dark layout configurations."
    }
  ];

  return (
    <section id="projects" className="py-24 w-full max-w-4xl mx-auto">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-blue-500 mb-3">Milestones</h2>
      <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mb-12 text-slate-100">Featured Projects</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {projectList.map((project, index) => (
          <div key={index} className="group bg-gradient-to-b from-slate-900 to-slate-900/40 border border-slate-800/80 hover:border-slate-700 p-6 rounded-xl transition-all duration-300 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="text-[10px] font-bold text-blue-400/90 uppercase tracking-wider bg-blue-500/10 px-2.5 py-1 rounded-md border border-blue-500/10">
                  {project.role}
                </span>
              </div>
              <h4 className="text-lg font-bold text-slate-100 group-hover:text-blue-400 transition-colors duration-200 mb-3">
                {project.title}
              </h4>
              <p className="text-sm text-slate-400 leading-relaxed mb-6">
                {project.desc}
              </p>
            </div>
            <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800/60">
              {project.tech.map((t) => (
                <span key={t} className="text-xs text-slate-500 font-mono">#{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
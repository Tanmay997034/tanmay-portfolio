import React from 'react';

const processSteps = [
  { num: '01', title: 'Idea & Research', desc: 'Understanding problems and user needs.' },
  { num: '02', title: 'UI/UX Design', desc: 'Designing intuitive and modern interfaces.' },
  { num: '03', title: 'Frontend Development', desc: 'Building fast, responsive, interactive UIs.' },
  { num: '04', title: 'Backend & APIs', desc: 'Building secure REST APIs and business logic.' },
  { num: '05', title: 'Database', desc: 'Storing data in scalable architectures.' },
  { num: '06', title: 'AI Integration', desc: 'Integrating intelligent AI APIs & workflows.' },
  { num: '07', title: 'Deploy & Optimize', desc: 'Shipping fast and monitoring performance.' }
];

const Process = () => {
  return (
    <section id="process" className="py-24 bg-surface/20 border-y border-surfaceBorder reveal-section overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <span className="text-primary text-sm font-bold tracking-wider uppercase mb-2 block">How I Build</span>
        <h2 className="text-3xl md:text-4xl font-bold mb-16">My Development <span className="text-slate-400 font-light">Process</span></h2>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-6 left-0 w-full h-0.5 bg-surfaceBorder z-0" />
          
          <div className="grid md:grid-cols-7 gap-6 relative z-10">
            {processSteps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center md:items-start text-center md:text-left group">
                <div className="w-12 h-12 rounded-full bg-navy border-2 border-surfaceBorder flex items-center justify-center text-primary font-mono text-sm font-bold mb-4 group-hover:border-primary group-hover:shadow-[0_0_15px_rgba(139,92,246,0.4)] transition-all">
                  {step.num}
                </div>
                <h4 className="text-white font-bold text-sm mb-2">{step.title}</h4>
                <p className="text-slate-400 text-xs leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
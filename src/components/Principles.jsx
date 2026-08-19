import React from 'react';
import { Users, Layers, Zap, Rocket } from 'lucide-react';

const principles = [
  { icon: <Users size={24} />, title: 'User First', desc: 'Build interfaces around real user needs.' },
  { icon: <Layers size={24} />, title: 'Scalable Architecture', desc: 'Keep frontend, backend, APIs, and data layers cleanly separated.' },
  { icon: <Zap size={24} />, title: 'Performance', desc: 'Optimize assets, rendering, loading, and responsive behavior.' },
  { icon: <Rocket size={24} />, title: 'Ship & Improve', desc: 'Deploy quickly, measure results, and continuously improve.' }
];

const Principles = () => {
  return (
    <section className="py-24 relative z-10 reveal-section">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">How I Think About <span className="text-gradient">Building Products</span></h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((p, i) => (
            <div key={i} className="glass-panel p-8 text-center flex flex-col items-center hover:-translate-y-1 transition-transform">
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary mb-6">
                {p.icon}
              </div>
              <h3 className="text-white font-bold text-lg mb-3">{`0${i + 1} — ${p.title}`}</h3>
              <p className="text-slate-400 text-sm">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Principles;
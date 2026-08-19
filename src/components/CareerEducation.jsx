import React from 'react';
import { GraduationCap, Code } from 'lucide-react';

const CareerEducation = () => {
  return (
    <section className="py-24 bg-surface/20 border-y border-surfaceBorder reveal-section">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
        <h2 className="text-3xl font-bold mb-12">Background</h2>
        
        <div className="grid md:grid-cols-2 gap-6 text-left">
          <div className="glass-panel p-6 border-l-4 border-l-primary">
            <div className="flex items-center gap-3 mb-4">
              <Code className="text-primary" size={24} />
              <h3 className="text-xl font-bold text-white">Full-Stack Development</h3>
            </div>
            <p className="text-slate-400 text-sm">
              Self-directed learning and continuous engineering project development. Focused on building real-world applications using the MERN stack, integrating AI APIs, and mastering scalable deployment architectures.
            </p>
          </div>

          <div className="glass-panel p-6 border-l-4 border-l-secondary">
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap className="text-secondary" size={24} />
              <h3 className="text-xl font-bold text-white">Education</h3>
            </div>
            <p className="text-white font-medium mb-1">Engineering Undergraduate</p>
            <p className="text-primary text-sm font-medium mb-2">Electronics & Telecommunication</p>
            <p className="text-slate-400 text-sm">
              Applying engineering principles to software architecture, logical problem solving, and system design.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerEducation;
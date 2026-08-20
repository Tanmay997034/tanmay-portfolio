import React, { Suspense } from 'react';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';

// Lazy loading the 3D scene ensures the rest of the site loads instantly
const Hero3DScene = React.lazy(() => import('./canvas/Hero3DScene'));

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
      {/* Subtle Glow Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center relative z-10 w-full">
        
        {/* Left Content */}
        <div className="space-y-8 mt-12 md:mt-0">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-medium">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Available for Remote & Relocation
          </div>
          
          <div className="space-y-2">
            <p className="text-lg text-slate-400">Hi, I'm</p>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
              Tanmay <span className="text-gradient">Lonkar</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-slate-300 font-medium mt-4 leading-relaxed">
              Full-Stack Developer | React.js | Node.js | MERN | AI Integrations
            </h2>
          </div>

          <p className="text-slate-400 text-lg leading-relaxed max-w-lg">
            I build scalable web applications, AI-powered products, and high-performance digital experiences from idea to deployment.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            
            <a href="#projects" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white px-8 py-3.5 rounded-lg font-medium flex items-center justify-center gap-2 transition-all animate-glow-pulse">
              View My Work <ArrowRight size={18} />
            </a>
            <a href="/cv.pdf" download className="w-full sm:w-auto bg-surface hover:bg-surfaceBorder border border-surfaceBorder text-white px-8 py-3.5 rounded-lg font-medium flex items-center justify-center gap-2 transition-all">
              Download CV <Download size={18} />
            </a>
          </div>

          <div className="flex items-center gap-6 pt-4 text-slate-400">
            <a href="https://github.com/Tanmay997034" target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-white transition-colors"><Github size={24} /></a>
            <a href="https://www.linkedin.com/in/tanmay-lonkar-675318277" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-white transition-colors"><Linkedin size={24} /></a>
            <a href="mailto:tanmaylonkar3@gmail.com" aria-label="Email" className="hover:text-white transition-colors"><Mail size={24} /></a>
          </div>

          {/* Fact-based Statistics */}
          <div className="glass-panel mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 p-6">
            {[
              { label: 'Projects Built', value: '3+' },
              { label: 'Stack', value: 'MERN' },
              { label: 'Focus', value: 'Full-Stack' },
              { label: 'Specialty', value: 'AI Integrations' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-xl md:text-2xl font-bold text-white">{stat.value}</p>
                <p className="text-[10px] md:text-xs text-slate-400 uppercase tracking-wider mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right 3D Scene - Hidden on very small mobile to save performance */}
        <div className="h-[400px] lg:h-[700px] w-full hidden sm:block rounded-2xl overflow-hidden relative">
          <Suspense fallback={<div className="w-full h-full flex items-center justify-center text-slate-500 border border-white/5 rounded-xl glass-panel">Loading 3D Workspace...</div>}>
            <Hero3DScene />
          </Suspense>
        </div>
      </div>
    </section>
  );
};

export default Hero;

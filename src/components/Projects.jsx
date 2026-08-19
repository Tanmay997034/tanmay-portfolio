import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import CodeVisual from './CodeVisual';

const projectData = [
  {
    name: 'ReszuPro',
    category: 'AI-Powered ATS Resume Builder',
    description: 'Engineered a full-stack SaaS platform solving resume formatting bottlenecks. Integrated OpenAI to dynamically generate ATS-compliant content, utilizing a highly scalable MERN architecture.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'AI APIs', 'Netlify', 'Render'],
    architecture: 'MongoDB → Express.js → React → Node.js → AI APIs',
    features: ['ATS-focused generation', 'AI-content optimization', 'Responsive UI', 'REST API backend'],
    live: 'https://reszupro.com',
    github: 'https://github.com/Tanmay997034',
    glow: 'group-hover:shadow-[0_0_40px_-10px_rgba(139,92,246,0.3)] hover:border-primary/50'
  },
  {
    name: 'ThumbBunny',
    category: 'Digital Utility Hub for Creators',
    description: 'Developed a high-traffic, client-side utility platform for content creators. Focused heavily on performance optimization, GSAP micro-animations, and a monetization-ready frontend architecture.',
    tech: ['React', 'JavaScript', 'GSAP', 'Tailwind CSS', 'Netlify'],
    architecture: 'React Frontend → GSAP Animations → Netlify CI/CD',
    features: ['Creator utilities', 'GSAP animations', 'Monetization-ready', 'Automated CI/CD'],
    live: 'https://thumbunny.netlify.com',
    github: 'https://github.com/Tanmay997034',
    glow: 'group-hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.3)] hover:border-secondary/50'
  },
  {
    name: 'Shake Smith Co.',
    category: 'Brand Showcase & Discovery Platform',
    description: 'Architected a dynamic web presence to drive physical store foot traffic. Implemented advanced technical SEO, Schema markup, and a mobile-first UI to maximize search visibility and user conversion.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS', 'SEO', 'Schema Markup'],
    architecture: 'Semantic HTML → Responsive UI → Technical SEO',
    features: ['Interactive previews', 'Technical SEO', 'Schema markup', 'Mobile-first'],
    live: 'https://shakesmithco.com',
    github: 'https://github.com/Tanmay997034',
    glow: 'group-hover:shadow-[0_0_40px_-10px_rgba(217,70,239,0.3)] hover:border-accent/50'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative z-10 reveal-section">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-16">
          <span className="text-primary text-sm font-bold tracking-wider uppercase mb-2 block">Featured Projects</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Some things I've built</h2>
          <p className="text-slate-400 text-lg max-w-2xl">
            Real products. Real implementations. From frontend interfaces to backend systems and AI integrations.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <div key={index} className={`glass-panel group transition-all duration-500 hover:-translate-y-2 ${project.glow} overflow-hidden flex flex-col`}>
              
              {/* Animated Code/Architecture Visual representation */}
              <div className="h-56 bg-navy border-b border-surfaceBorder relative p-4 overflow-hidden">
                <div className="absolute inset-0 bg-hero-glow opacity-10 mix-blend-overlay transition-opacity duration-500 group-hover:opacity-30" />
                <CodeVisual projectType={project.name} />
              </div>

              <div className="p-8 flex-grow flex flex-col">
                <span className="text-primary text-xs font-mono mb-3 block tracking-wider uppercase">{project.category}</span>
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-primary transition-colors">{project.name}</h3>
                <p className="text-slate-400 text-sm mb-6 flex-grow">{project.description}</p>
                
                <div className="mb-6 bg-white/5 p-4 rounded-lg border border-white/5">
                  <p className="text-[10px] text-slate-500 font-mono mb-1 uppercase tracking-widest">Architecture</p>
                  <p className="text-xs text-slate-300 font-medium">{project.architecture}</p>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                 {project.tech.map((t, i) => (
                  <span 
                    key={i} 
                    className="text-[11px] px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-slate-300 hover:text-white hover:bg-white/10 hover:border-primary/50 hover:shadow-[0_0_10px_rgba(139,92,246,0.2)] transition-all cursor-default"
                  >
                   {t}
                  </span>
               ))}
                </div>

                <div className="flex items-center gap-4 mt-auto">
                  <a href={project.live} target="_blank" rel="noreferrer" className="flex-1 bg-white text-navy text-center py-2.5 rounded font-semibold hover:bg-slate-200 transition-colors flex items-center justify-center gap-2 text-sm">
                    Live Demo <ExternalLink size={16} />
                  </a>
                  <a href={project.github} target="_blank" rel="noreferrer" className="flex-1 border border-surfaceBorder text-white hover:bg-white/5 text-center py-2.5 rounded font-semibold transition-colors flex items-center justify-center gap-2 text-sm">
                    GitHub <Github size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-surfaceBorder bg-navy py-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="text-center md:text-left">
          <p className="text-white font-bold text-xl mb-1">Tanmay Lonkar</p>
          <p className="text-sm">Full-Stack Developer | React.js | Node.js | MERN | AI Integrations</p>
        </div>

        <div className="flex items-center gap-6">
          <a href="https://github.com/Tanmay997034" target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-white transition-colors"><Github size={20} /></a>
          <a href="https://linkedin.com/in/tanmaylonkar" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-white transition-colors"><Linkedin size={20} /></a>
          <a href="mailto:tanmaylonkar3@gmail.com" aria-label="Email" className="hover:text-white transition-colors"><Mail size={20} /></a>
          <a href="#projects" className="text-sm font-medium hover:text-white transition-colors ml-4 border-l border-white/10 pl-6">Projects</a>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-8 text-center md:text-left text-xs text-slate-500">
        <p>© 2026 Tanmay Lonkar. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
import React from 'react';
import { MapPin, Globe, Mail } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 relative z-10 reveal-section">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-16 items-center">
        
        <div>
          <span className="text-primary text-sm font-bold tracking-wider uppercase mb-2 block">About Me</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            I turn ideas into <span className="text-gradient">powerful digital products.</span>
          </h2>
          <div className="space-y-4 text-slate-400 text-lg leading-relaxed">
            <p>
              I'm a Full-Stack Developer focused on building modern web applications, AI-powered products, and interactive digital experiences. I work across frontend, backend, databases, APIs, AI integrations, and deployment, allowing me to take products from concept to production.
            </p>
            <p>
              My specialization lies in MERN development, AI API integration, modern UI/UX design, and deploying scalable architectures with a strong emphasis on technical SEO and product development.
            </p>
          </div>
        </div>

        <div className="glass-panel p-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="bg-white/5 p-3 rounded-lg text-primary"><MapPin size={24} /></div>
            <div>
              <p className="text-sm text-slate-400 font-medium">Location</p>
              <p className="text-white font-medium">Nagpur, Maharashtra, India</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-white/5 p-3 rounded-lg text-secondary"><Globe size={24} /></div>
            <div>
              <p className="text-sm text-slate-400 font-medium">Availability</p>
              <p className="text-white font-medium">Open to Remote & Relocation</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-white/5 p-3 rounded-lg text-accent"><Mail size={24} /></div>
            <div>
              <p className="text-sm text-slate-400 font-medium">Email</p>
              <p className="text-white font-medium break-all">tanmaylonkar3@gmail.com</p>
            </div>
          </div>
          <a href="#contact" className="block w-full text-center bg-primary hover:bg-primary/90 text-white font-medium py-3 rounded-lg transition-colors mt-4">
            Let's Connect &rarr;
          </a>
        </div>

      </div>
    </section>
  );
};

export default About;
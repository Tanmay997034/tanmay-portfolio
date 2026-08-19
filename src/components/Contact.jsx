import React from 'react';
import { Mail, Phone, MapPin, Globe, Github, Linkedin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative z-10 reveal-section">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <div className="glass-panel p-8 md:p-12 overflow-hidden relative border border-primary/20">
          
          {/* Decorative Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="grid md:grid-cols-2 gap-12 relative z-10">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
                Let's build something amazing <span className="text-gradient">together.</span>
              </h2>
              <p className="text-slate-400 text-lg mb-8">
                I'm actively open to full-time opportunities, freelance projects, internships, and collaborative software projects.
              </p>
              
              <div className="flex flex-col gap-4">
                <a href="mailto:tanmaylonkar3@gmail.com" className="bg-primary hover:bg-primary/90 text-white px-6 py-4 rounded-lg font-medium flex items-center justify-center gap-2 transition-all w-fit">
                  Send Me a Message <Send size={18} />
                </a>
                <div className="flex items-center gap-4 mt-2">
                  <a href="https://github.com/Tanmay997034" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors bg-white/5 px-4 py-2 rounded-lg border border-white/5">
                    <Github size={18} /> View GitHub
                  </a>
                  <a href="https://linkedin.com/in/tanmaylonkar" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors bg-white/5 px-4 py-2 rounded-lg border border-white/5">
                    <Linkedin size={18} /> Connect on LinkedIn
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-6 flex flex-col justify-center">
              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-12 h-12 rounded-full bg-surface border border-surfaceBorder flex items-center justify-center text-primary">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider font-medium">Email</p>
                  <a href="mailto:tanmaylonkar3@gmail.com" className="hover:text-primary transition-colors text-white">tanmaylonkar3@gmail.com</a>
                </div>
              </div>

              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-12 h-12 rounded-full bg-surface border border-surfaceBorder flex items-center justify-center text-primary">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider font-medium">Phone</p>
                  <p className="text-white">+91 8459489669</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-12 h-12 rounded-full bg-surface border border-surfaceBorder flex items-center justify-center text-primary">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider font-medium">Location</p>
                  <p className="text-white">Nagpur, Maharashtra, India</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-12 h-12 rounded-full bg-surface border border-surfaceBorder flex items-center justify-center text-primary">
                  <Globe size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider font-medium">Availability</p>
                  <p className="text-white">Open to Remote & Relocation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
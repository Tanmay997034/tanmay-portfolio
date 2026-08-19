import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['About', 'Skills', 'Projects', 'Process', 'Contact'];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-navy/80 backdrop-blur-lg border-b border-surfaceBorder py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold tracking-tighter">
          TL<span className="text-primary">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="text-slate-300 hover:text-white transition-colors">
              {link}
            </a>
          ))}
          <a href="/cv.pdf" download className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full transition-all border border-white/5">
            Download CV <Download size={16} />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-slate-300" aria-label="Menu" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-navy/95 backdrop-blur-xl border-b border-surfaceBorder py-4 px-6 flex flex-col gap-4 shadow-xl">
          {navLinks.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setIsOpen(false)} className="text-lg font-medium text-slate-300 py-2 border-b border-white/5">
              {link}
            </a>
          ))}
          <a href="/cv.pdf" download className="flex items-center justify-center gap-2 bg-primary text-white px-4 py-3 rounded-lg mt-4 font-medium">
            Download CV <Download size={18} />
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
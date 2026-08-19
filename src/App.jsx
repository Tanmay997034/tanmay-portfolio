import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Process from './components/Process';
import Principles from './components/Principles';
import CareerEducation from './components/CareerEducation';
import Contact from './components/Contact';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    const sections = document.querySelectorAll('.reveal-section');
    sections.forEach((section) => {
      gsap.fromTo(section, 
        { 
          opacity: 0, 
          y: 60, 
          scale: 0.98,
          filter: 'blur(10px)' // Adds a futuristic focus-pull effect
        },
        {
          opacity: 1, 
          y: 0, 
          scale: 1,
          filter: 'blur(0px)',
          duration: 1.2, // Slightly longer for a cinematic feel
          ease: 'expo.out', // Snappier, premium easing curve
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
          }
        }
      );
    });
  }, []);

  return (
    <div className="min-h-screen bg-navy text-slate-200 font-sans selection:bg-primary/30">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Process />
        <Principles />
        <CareerEducation />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

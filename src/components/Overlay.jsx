import React from 'react';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Projects } from './sections/Projects';
import { Contact } from './sections/Contact';

export const Overlay = () => {
  return (
    <div className="overlay-container">
      {/* Top Header */}
      <header className="header">
        <div className="logo interactive">
          <span className="logo-icon">S</span> sewood
        </div>
        <nav className="nav center-nav">
          <a href="#services" className="nav-link interactive">Services</a>
          <a href="#portfolio" className="nav-link interactive">Portfolio</a>
          <a href="#about" className="nav-link interactive">About</a>
          <a href="#contact" className="nav-link interactive">Contact Me</a>
        </nav>
        <button className="download-btn interactive">
          Download CV
        </button>
      </header>

      {/* Vertical Social Links */}
      <div className="vertical-socials">
        <a href="#" className="interactive">IG</a>
        <a href="#" className="interactive">Be</a>
        <a href="#" className="interactive">Dr</a>
      </div>
      
      <main className="scroll-content">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

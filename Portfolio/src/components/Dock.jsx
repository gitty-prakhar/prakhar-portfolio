import React, { useEffect, useState } from 'react';

export const Dock = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { threshold: 0.5 }); // Trigger when 50% of the section is visible

    // Observe all sections
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="dock-container">
      <a href="#hero" className={`dock-item ${activeSection === 'hero' ? 'active' : ''}`}>Intro</a>
      <a href="#about" className={`dock-item ${activeSection === 'about' ? 'active' : ''}`}>About</a>
      <a href="#experience" className={`dock-item ${activeSection === 'experience' ? 'active' : ''}`}>Experience</a>
      <a href="#projects" className={`dock-item ${activeSection === 'projects' ? 'active' : ''}`}>Projects</a>
      <a href="#contact" className={`dock-item ${activeSection === 'contact' ? 'active' : ''}`}>Contact</a>
    </div>
  );
};

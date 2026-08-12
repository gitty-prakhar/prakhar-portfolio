import React from 'react';
import { GlassCard } from '../GlassCard';
import { Mail } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="hero" className="section" style={{ position: 'relative' }}>
      <h1 className="hero-title">
        Prakhar<br/>Gupta.
      </h1>
      <p className="subtitle" style={{ marginBottom: '2rem' }}>
        Computer Science undergraduate at IIIT Lucknow who enjoys building backend systems, solving algorithmic problems, and understanding how software works under the hood.
      </p>

      <div className="social-row">
        <a href="https://github.com/gitty-prakhar" target="_blank" rel="noopener noreferrer" className="social-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
        </a>
        <a href="https://www.linkedin.com/in/prakhar-gupta-bb38b925b/?skipRedirect=true" target="_blank" rel="noopener noreferrer" className="social-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
        </a>
        <a href="mailto:prakharx.codes@gmail.com" className="social-icon"><Mail size={20} /></a>
      </div>

      <div className="cta-row">
        <a href="#contact" className="cta-button cta-primary">Contact Me</a>
        <a href="/resume.pdf" download className="cta-button cta-secondary">Download Resume</a>
      </div>

      <img src="/hero_character.png" alt="Hero Character" className="floating-asset hero-asset" />

      <div className="spatial-grid">
        <GlassCard className="bento-card">
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'white' }}>Currently Building</h3>
          <h4 style={{ color: 'var(--text-primary)', fontSize: '1.2rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>Online Judge Platform</h4>
          <p style={{ color: '#aaa', lineHeight: 1.6 }}>
            Building a full-stack online judge with Node.js, Express, MongoDB, Redis, BullMQ and Docker. Working on secure code execution, asynchronous judging, test cases, submissions and scalable backend architecture.
          </p>
        </GlassCard>

        <GlassCard className="bento-card-tall" style={{ padding: 0 }}>
          <div className="portrait-container">
            <img src="/profile.png" alt="Profile" />
          </div>
        </GlassCard>
        
        <GlassCard className="bento-card">
          <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'white' }}>Core Stack</h3>
          <div>
            {['React', 'Three.js', 'Framer Motion', 'WebGL', 'Next.js', 'Tailwind'].map(skill => (
              <span key={skill} className="skill-tag">{skill}</span>
            ))}
          </div>
        </GlassCard>
      </div>
    </section>
  );
};

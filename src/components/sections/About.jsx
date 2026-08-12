import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { SplitText } from '../../utils/SplitText';

gsap.registerPlugin(ScrollTrigger);

export const About = () => {
  const container = useRef();

  useGSAP(() => {
    // Text reveal animation - slightly faster and less vertical movement
    gsap.to('.split-word', {
      scrollTrigger: {
        trigger: container.current,
        start: 'top 75%',
      },
      y: '0%',
      duration: 0.8,
      stagger: 0.015,
      ease: 'power3.out'
    });

    // Fade in skills and details
    gsap.from('.fade-up-elem', {
      scrollTrigger: {
        trigger: '.about-container',
        start: 'top 80%',
      },
      y: 20,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power2.out'
    });
    
    // Subtler Parallax effect
    gsap.fromTo('.about-container', {
      y: 50
    }, {
      y: -20,
      ease: 'none',
      scrollTrigger: {
        trigger: container.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });

  }, { scope: container });

  return (
    <section className="section about-section" ref={container}>
      <h2 className="section-title">
        <SplitText>01. ABOUT ME</SplitText>
      </h2>
      <div className="about-container">
        <div className="about-content">
          <p className="about-text">
            <SplitText>
              I'm a full-stack developer specializing in immersive 3D web experiences.
            </SplitText>
          </p>
          <p className="about-text">
            <SplitText>
              My goal is to bridge the gap between design and engineering, crafting pixel-perfect, highly interactive interfaces that push the boundaries of what's possible on the web.
            </SplitText>
          </p>
          <div className="skills-container interactive">
            {['React', 'Three.js', 'WebGL', 'GSAP', 'Next.js', 'TailwindCSS'].map(skill => (
              <span key={skill} className="skill-pill fade-up-elem">{skill}</span>
            ))}
          </div>
        </div>
        
        <div className="about-details">
          <div className="detail-item fade-up-elem">
            <span className="detail-label">ROLE</span>
            <span className="detail-value">Creative Developer</span>
          </div>
          <div className="detail-item fade-up-elem">
            <span className="detail-label">LOCATION</span>
            <span className="detail-value">Earth / Metaverse</span>
          </div>
          <div className="detail-item fade-up-elem">
            <span className="detail-label">EXPERIENCE</span>
            <span className="detail-value">3+ Years</span>
          </div>
          <div className="detail-item fade-up-elem">
            <span className="detail-label">STATUS</span>
            <span className="detail-value">Available for freelance</span>
          </div>
        </div>
      </div>
    </section>
  );
};

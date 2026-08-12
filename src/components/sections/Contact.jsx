import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { GlassCard } from '../GlassCard';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Contact = () => {
  const container = useRef();

  useGSAP(() => {
    gsap.from('.contact-glass-card', {
      scrollTrigger: {
        trigger: container.current,
        start: 'top 80%',
      },
      scale: 0.9,
      opacity: 0,
      duration: 1.2,
      ease: 'power3.out'
    });
  }, { scope: container });

  return (
    <section id="contact" className="section" ref={container} style={{ position: 'relative', marginBottom: '10rem' }}>
      <h2 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '2rem', color: 'white' }}>
        Let's<br/>Connect.
      </h2>

      <img src="/contact_asset.png" alt="Neon Orb Asset" className="floating-asset contact-asset" />
      <GlassCard className="contact-glass-card" style={{ width: '100%', padding: '4rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        <h2 style={{ fontSize: '4rem', fontWeight: 900, color: 'white', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
          Let's Build.
        </h2>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '600px', marginBottom: '3rem' }}>
          I'm always interested in interesting software projects, open-source contributions, internships and opportunities to learn and build with other developers.
        </p>
        <a href="mailto:prakhar@example.com" style={{ display: 'inline-block', padding: '1rem 3rem', background: 'white', color: 'black', textDecoration: 'none', borderRadius: '50px', fontWeight: 600, fontSize: '1.1rem', transition: 'transform 0.3s ease', marginBottom: '3rem' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
          Get In Touch
        </a>

        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <a href="https://github.com" style={{ color: 'white', textDecoration: 'none', fontWeight: 600 }}>GitHub</a>
          <a href="https://linkedin.com" style={{ color: 'white', textDecoration: 'none', fontWeight: 600 }}>LinkedIn</a>
          <a href="mailto:prakhar@example.com" style={{ color: 'white', textDecoration: 'none', fontWeight: 600 }}>Email</a>
          <a href="https://codeforces.com" style={{ color: 'white', textDecoration: 'none', fontWeight: 600 }}>Codeforces</a>
          <a href="https://codechef.com" style={{ color: 'white', textDecoration: 'none', fontWeight: 600 }}>CodeChef</a>
        </div>
      </GlassCard>
    </section>
  );
};

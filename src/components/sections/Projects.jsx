import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { GlassCard } from '../GlassCard';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: 'Online Judge Platform',
    category: 'BACKEND / SYSTEMS',
    desc: 'A scalable competitive programming platform with asynchronous judging, Redis queues and isolated Docker-based code execution.',
    link: '#'
  },
  {
    id: 2,
    title: 'Solana NFT Marketplace',
    category: 'BLOCKCHAIN / RUST',
    desc: "High-performance NFT marketplace protocol built around Solana's low-cost, high-throughput architecture.",
    link: '#'
  },
  {
    id: 3,
    title: 'Train Ticket Booking System',
    category: 'NODE.JS / REST API',
    desc: 'Full-stack ticket booking platform with authentication, booking workflows and persistent database storage.',
    link: '#'
  },
  {
    id: 4,
    title: 'Competitive Programming',
    category: 'C++ / DSA',
    desc: '600+ problems solved across Codeforces, CodeChef, CSES, AtCoder and SPOJ. Demonstrating strong algorithmic problem-solving.',
    link: 'https://codeforces.com',
    linkText: 'View Profiles'
  }
];

export const Projects = () => {
  const container = useRef();

  useGSAP(() => {
    gsap.from('.project-card', {
      scrollTrigger: {
        trigger: container.current,
        start: 'top 70%',
      },
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: 'power3.out'
    });
  }, { scope: container });

  return (
    <section id="projects" className="section" ref={container} style={{ position: 'relative' }}>
      <h2 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '2rem', color: 'white' }}>
        Selected<br/>Works.
      </h2>

      <img src="/project_asset.png" alt="Crystal Asset" className="floating-asset project-asset" />
      
      <div className="spatial-grid">
        {projects.map((p) => (
          <GlassCard key={p.id} className="project-card" style={{ padding: '3rem 2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', letterSpacing: '0.1em', marginBottom: '1rem', textTransform: 'uppercase' }}>
                {p.category}
              </div>
              <h3 style={{ fontSize: '1.8rem', color: 'white', marginBottom: '1rem' }}>
                {p.title}
              </h3>
              <p style={{ color: '#aaa', lineHeight: 1.6, marginBottom: '2rem' }}>
                {p.desc}
              </p>
            </div>
            
            <a href={p.link} style={{ display: 'inline-flex', alignItems: 'center', color: 'white', textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem' }}>
              {p.linkText || 'View Project'} <span style={{ marginLeft: '0.5rem', transition: 'transform 0.3s ease' }} className="arrow-hover">→</span>
            </a>
          </GlassCard>
        ))}
      </div>
    </section>
  );
};

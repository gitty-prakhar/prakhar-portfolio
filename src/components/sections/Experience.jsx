import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { GlassCard } from '../GlassCard';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Server, Hexagon, Train } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    id: 1,
    company: 'Node.js / MongoDB / Redis / BullMQ / Docker',
    role: 'Online Judge',
    date: 'Full Stack Project',
    color: '#06B6D4',
    icon: <Server size={32} color="white" />,
    desc: [
      'A competitive programming platform with asynchronous code judging.',
      'Features secure Docker-based execution, test case management, and submission tracking.'
    ]
  },
  {
    id: 2,
    company: 'Rust / Solana / Web3',
    role: 'Solana NFT Marketplace',
    date: 'Blockchain Project',
    color: '#8B5CF6',
    icon: <Hexagon size={32} color="white" />,
    desc: [
      'Exploring a high-performance NFT marketplace protocol on Solana.',
      'Focusing on smart contracts, on-chain asset management, and decentralized trading.'
    ]
  },
  {
    id: 3,
    company: 'JavaScript / Node.js / Express / MongoDB',
    role: 'Train Ticket Booking System',
    date: 'Backend Project',
    color: '#4F46E5',
    icon: <Train size={32} color="white" />,
    desc: [
      'Full-stack train ticket booking application.',
      'Implemented user authentication, REST APIs, database integration and deployment.'
    ]
  }
];

export const Experience = () => {
  const container = useRef();

  useGSAP(() => {
    gsap.from('.exp-card-gsap', {
      scrollTrigger: {
        trigger: container.current,
        start: 'top 80%',
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power3.out'
    });
  }, { scope: container });

  return (
    <section id="experience" className="section" ref={container} style={{ position: 'relative' }}>
      <h2 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '2rem', color: 'white' }}>
        Projects &<br/>Engineering.
      </h2>
      
      <img src="/tech_asset.png" alt="Tech Cube" className="floating-asset tech-asset" />
      
      <div className="experience-grid">
        {experiences.map((exp) => (
          <GlassCard key={exp.id} className="exp-card exp-card-gsap" style={{ borderTopColor: exp.color }}>
            <div className="exp-logo-circle" style={{ backgroundColor: exp.color }}>
              {exp.icon}
            </div>
            
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'white', marginBottom: '0.5rem' }}>
              {exp.role}
            </h3>
            <p style={{ color: exp.color, fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.2rem' }}>
              {exp.company}
            </p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', marginBottom: '1.5rem' }}>
              {exp.date}
            </p>
            
            <ul style={{ color: '#aaa', fontSize: '0.9rem', lineHeight: 1.6, textAlign: 'left', paddingLeft: '1.2rem', margin: 0 }}>
              {exp.desc.map((item, i) => (
                <li key={i} style={{ marginBottom: '0.5rem' }}>{item}</li>
              ))}
            </ul>
          </GlassCard>
        ))}
      </div>
    </section>
  );
};

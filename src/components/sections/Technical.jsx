import React from 'react';
import { GlassCard } from '../GlassCard';

export const Technical = () => {
  return (
    <section id="about" className="section">
      
      <div className="spatial-grid">
        <GlassCard className="bento-card-tall">
          <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'white' }}>Education & Journey</h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div>
              <div style={{ color: 'white', fontWeight: '600', marginBottom: '0.2rem' }}>B.Tech in Computer Science & Engineering</div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Indian Institute of Information Technology, Lucknow</div>
              <p style={{ color: '#aaa', fontSize: '0.9rem', lineHeight: 1.5 }}>
                Currently pursuing a B.Tech in Computer Science and Engineering at IIIT Lucknow, with a strong focus on software development, algorithms, backend engineering and systems.
              </p>
            </div>
            
            <div>
              <div style={{ color: 'white', fontWeight: '600', marginBottom: '0.2rem' }}>Competitive Programmer</div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Codeforces • CodeChef • CSES</div>
              <p style={{ color: '#aaa', fontSize: '0.9rem', lineHeight: 1.5 }}>
                Solved 600+ problems across Codeforces, CodeChef, CSES, AtCoder and SPOJ.
              </p>
            </div>

            <div>
              <div style={{ color: 'white', fontWeight: '600', marginBottom: '0.2rem' }}>Software Developer</div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Backend Systems</div>
              <p style={{ color: '#aaa', fontSize: '0.9rem', lineHeight: 1.5 }}>
                Building backend-focused projects using Node.js, Express, MongoDB, Redis, Docker and modern JavaScript technologies.
              </p>
            </div>
          </div>
        </GlassCard>

        <GlassCard className="bento-card">
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'white' }}>Tech Stack</h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div>
              <h4 style={{ color: 'white', fontSize: '1rem', marginBottom: '0.3rem' }}>Languages</h4>
              <p style={{ color: '#aaa', fontSize: '0.9rem' }}>C++ · Java · JavaScript · SQL · Rust</p>
            </div>
            <div>
              <h4 style={{ color: 'white', fontSize: '1rem', marginBottom: '0.3rem' }}>Backend</h4>
              <p style={{ color: '#aaa', fontSize: '0.9rem' }}>Node.js · Express · MongoDB · Redis · REST APIs</p>
            </div>
            <div>
              <h4 style={{ color: 'white', fontSize: '1rem', marginBottom: '0.3rem' }}>Engineering</h4>
              <p style={{ color: '#aaa', fontSize: '0.9rem' }}>Docker · Git · Linux · Authentication · System Design</p>
            </div>
          </div>
        </GlassCard>

        <GlassCard className="bento-card">
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'white' }}>What I Do</h3>
          <ul style={{ color: '#aaa', lineHeight: 1.6, paddingLeft: '1.2rem', margin: 0, fontSize: '0.9rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>Build backend services and REST APIs with Node.js and Express</li>
            <li style={{ marginBottom: '0.5rem' }}>Design database schemas and work with MongoDB and SQL</li>
            <li style={{ marginBottom: '0.5rem' }}>Build asynchronous systems using Redis and BullMQ</li>
            <li style={{ marginBottom: '0.5rem' }}>Implement authentication, authorization and secure API architectures</li>
            <li style={{ marginBottom: '0.5rem' }}>Solve algorithmic problems and practice competitive programming</li>
            <li>Explore distributed systems, Docker and scalable application architecture</li>
          </ul>
        </GlassCard>

        <GlassCard className="bento-card" style={{ gridColumn: '1 / -1', padding: '3rem', marginTop: '1rem' }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '3rem', 
            textAlign: 'center' 
          }}>
            <div>
              <div style={{ 
                fontSize: '3.5rem', 
                fontWeight: 900, 
                background: 'linear-gradient(135deg, #fff, #a5b4fc)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: '0.5rem'
              }}>600+</div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 600 }}>Problems Solved</div>
            </div>
            <div>
              <div style={{ 
                fontSize: '3.5rem', 
                fontWeight: 900, 
                background: 'linear-gradient(135deg, #fff, #67e8f9)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: '0.5rem'
              }}>1240</div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 600 }}>CF Rating (Pupil)</div>
            </div>
            <div>
              <div style={{ 
                fontSize: '3.5rem', 
                fontWeight: 900, 
                background: 'linear-gradient(135deg, #fff, #f9a8d4)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: '0.5rem'
              }}>1492</div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 600 }}>CC Rating (2★)</div>
            </div>
            <div>
              <div style={{ 
                fontSize: '3.5rem', 
                fontWeight: 900, 
                background: 'linear-gradient(135deg, #fff, #c4b5fd)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: '0.5rem'
              }}>8.40</div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 600 }}>CGPA</div>
            </div>
          </div>
        </GlassCard>

      </div>
    </section>
  );
};

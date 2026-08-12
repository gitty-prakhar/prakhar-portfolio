import React from 'react';
import { Dock } from './components/Dock';
import { Hero } from './components/sections/Hero';
import { Technical } from './components/sections/Technical';
import { Experience } from './components/sections/Experience';
import { Projects } from './components/sections/Projects';
import { Contact } from './components/sections/Contact';
import { SpotlightCursor } from './components/SpotlightCursor';
import { SmoothScroll } from './components/SmoothScroll';

function App() {
  return (
    <>
      <div className="bg-glow-container">
        <div className="glow-orb orb-1"></div>
        <div className="glow-orb orb-2"></div>
        <div className="glow-orb orb-3"></div>
      </div>
      
      <SpotlightCursor />
      <SmoothScroll />
      <Dock />
      <main>
        <Hero />
        <Technical />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

export default App;

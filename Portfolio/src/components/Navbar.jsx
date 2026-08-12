import React from 'react';

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-brand">
        Prakhar<span>.</span>
      </div>
      <div className="nav-links">
        <a href="#hero">Resume // 2026</a>
        <a href="#technical">Technical Info</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
};

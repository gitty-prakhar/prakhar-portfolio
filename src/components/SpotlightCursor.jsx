import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const SpotlightCursor = () => {
  const dotRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const glow = glowRef.current;

    const onMouseMove = (e) => {
      // Move the glowing spotlight cursor
      gsap.to(glow, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.8,
        ease: 'power3.out'
      });
      
      // Move the tiny precision dot instantly
      gsap.to(dot, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: 'none'
      });
      
      // Update CSS variables on glass cards for the hover border glow effect
      const cards = document.querySelectorAll('.glass-card');
      cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      });
    };

    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  return (
    <>
      <div ref={glowRef} className="spotlight-cursor"></div>
      <div ref={dotRef} className="cursor-dot"></div>
    </>
  );
};

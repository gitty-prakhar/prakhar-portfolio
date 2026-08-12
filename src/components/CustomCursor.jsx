import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const CustomCursor = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;

    const onMouseMove = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: 'power2.out'
      });
      gsap.to(follower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: 'power2.out'
      });
    };

    const onMouseEnter = () => {
      gsap.to(cursor, { scale: 1.5, duration: 0.3 });
      gsap.to(follower, { scale: 2, backgroundColor: 'rgba(0, 255, 255, 0.2)', duration: 0.3 });
    };

    const onMouseLeave = () => {
      gsap.to(cursor, { scale: 1, duration: 0.3 });
      gsap.to(follower, { scale: 1, backgroundColor: 'transparent', duration: 0.3 });
    };

    window.addEventListener('mousemove', onMouseMove);

    const interactiveElements = document.querySelectorAll('.interactive, a, button');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', onMouseEnter);
      el.addEventListener('mouseleave', onMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', onMouseEnter);
        el.removeEventListener('mouseleave', onMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="custom-cursor"></div>
      <div ref={followerRef} className="custom-cursor-follower"></div>
    </>
  );
};

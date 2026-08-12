import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Environment, Float, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

const SquigglyLine = () => {
  const lineRef = useRef();
  
  // Create a winding 3D curve
  const curve = useMemo(() => {
    const points = [];
    // Generate a spiral/winding path that stays in the center
    for (let i = 0; i <= 50; i++) {
      const t = i / 50;
      const angle = t * Math.PI * 8; // 4 full turns
      const radius = 2 + Math.sin(t * Math.PI) * 1.5; // wider in middle
      
      const x = Math.cos(angle) * radius;
      const y = (t - 0.5) * 8; // spread vertically
      const z = Math.sin(angle) * radius;
      
      points.push(new THREE.Vector3(x, y, z));
    }
    return new THREE.CatmullRomCurve3(points);
  }, []);

  useFrame((state, delta) => {
    if (lineRef.current) {
      // Slowly rotate the entire line for a dynamic effect
      lineRef.current.rotation.y += delta * 0.1;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={lineRef}>
        <tubeGeometry args={[curve, 100, 0.03, 8, false]} />
        <meshStandardMaterial 
          color="#34d399" 
          emissive="#34d399"
          emissiveIntensity={0.2}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
};

export const Scene = () => {
  return (
    <>
      {/* Remove the background color completely so HTML shows through */}
      
      <Environment preset="city" />
      
      <ambientLight intensity={0.5} />
      
      {/* Soft gradient orb lights */}
      <pointLight position={[5, 2, -2]} intensity={20} color="#ffc0cb" distance={15} />
      <pointLight position={[-4, -3, -2]} intensity={15} color="#98ff98" distance={15} />

      <Sparkles count={50} scale={10} size={1} speed={0.2} opacity={0.3} color="#1a1a1a" />

      {/* Wrapping squiggly line centered around the portrait */}
      <group position={[0, 0, 0]}>
        <SquigglyLine />
      </group>
    </>
  );
};

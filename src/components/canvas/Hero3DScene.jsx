import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, Environment, ContactShadows, useTexture } from '@react-three/drei';

const FloatingSymbols = () => {
  const group = useRef();
  
  useFrame((state) => {
    group.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.2;
  });

  return (
    <group ref={group}>
      <Float speed={2} rotationIntensity={1} floatIntensity={2} position={[-2, 1, 0]}>
        <mesh>
          <octahedronGeometry args={[0.5]} />
          <meshStandardMaterial color="#22c55e" wireframe />
        </mesh>
      </Float>
      <Float speed={1.5} rotationIntensity={2} floatIntensity={1.5} position={[2, 2, -1]}>
        <mesh>
          <icosahedronGeometry args={[0.6]} />
          <meshStandardMaterial color="#3B82F6" wireframe />
        </mesh>
      </Float>
      <Float speed={2.5} rotationIntensity={1.5} floatIntensity={2} position={[0, -1, 1]}>
        <mesh>
          <torusGeometry args={[0.4, 0.1, 16, 32]} />
          <meshStandardMaterial color="#D946EF" roughness={0.1} metalness={0.8} />
        </mesh>
      </Float>
    </group>
  );
};

// This new component loads your image and puts it on the screen
const MonitorScreen = () => {
  // Make sure your image in the public folder matches this name exactly!
  const texture = useTexture('/hero.png'); 
  
  return (
    <mesh position={[0, 0, 0.11]}>
      <planeGeometry args={[3.8, 2.3]} />
      {/* toneMapped={false} keeps your image colors bright and accurate */}
      <meshBasicMaterial map={texture} toneMapped={false} />
    </mesh>
  );
};

export default function Hero3DScene() {
  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 45 }} dpr={[1, 2]} gl={{ antialias: true, powerPreference: "high-performance" }}>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
      
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
        {/* Monitor Body (The dark plastic frame) */}
        <mesh position={[0, 0, 0]} castShadow>
          <boxGeometry args={[4, 2.5, 0.2]} />
          <meshStandardMaterial color="#1E1E2E" roughness={0.2} metalness={0.8} />
        </mesh>
        
        {/* Monitor Screen (Your Image) */}
        <MonitorScreen />
        
        {/* Glass Reflection Overlay (Makes the image look like it's behind a glossy screen) */}
        <mesh position={[0, 0, 0.12]}>
          <planeGeometry args={[3.8, 2.3]} />
          <meshPhysicalMaterial transparent opacity={0.1} roughness={0.1} metalness={0.8} />
        </mesh>
      </Float>

      <FloatingSymbols />
      
      <ContactShadows position={[0, -2.5, 0]} opacity={0.4} scale={10} blur={2} far={4} />
      <Environment preset="city" />
      <OrbitControls enableZoom={false} enablePan={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 3} />
    </Canvas>
  );
}

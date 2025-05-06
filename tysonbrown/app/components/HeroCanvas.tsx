'use client'
import React, { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useProgress } from '@react-three/drei';

import CameraController from './CameraController';
import Globe from './Globe';

const HeroCanvas = ({ globePosition, globeScale, rotate }: {
  globePosition: [number, number, number];
  globeScale: number;
  rotate: boolean;
}) => {
  const [loading, setLoading] = useState(true);
  const [displayProgress, setDisplayProgress] = useState(0);
  const [screenWidth, setScreenWidth] = useState<number | null>(null); // 👈 new

  const { progress } = useProgress();

  useEffect(() => {
    const updateWidth = () => setScreenWidth(window.innerWidth);
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    interval = setInterval(() => {
      setDisplayProgress((prev) => {
        if (prev < Math.round(progress)) {
          if (prev + 1 === 100) {
            setTimeout(() => {
              setLoading(false);
            }, 500);
          }
          return prev + 1;
        } else {
          clearInterval(interval);
          return prev;
        }
      });
    }, 10);

    return () => clearInterval(interval);
  }, [progress]);

  if (screenWidth === null) {
    return null
  }

  const globeY = screenWidth < 1024 ? -1 : -2.4;

  return (
    <div className="relative w-full h-screen">
      <div className={`${!loading && 'pointer-events-none opacity-0'} fixed top-0 left-0 h-screen w-screen bg-black z-50 flex justify-center ease-in-out duration-1000 lg:invert`}>
        <div className="text-white px-4 py-2 rounded-lg whitespace-nowrap self-center">
          Loading... {displayProgress}%
        </div>
      </div>

      <Canvas
        className="bg-black/95"
        frameloop="always"
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true }}
        camera={{ position: globePosition, fov: 20 }}
      >
        <CameraController globePosition={globePosition} />
        <Suspense fallback={<></>}>
          <Globe position={[0, globeY, 0]} scale={globeScale} />
        </Suspense>

        <OrbitControls enableZoom={false} enableRotate={false} enablePan={false} />
        <Preload all />
      </Canvas>
    </div>
  );
};

export default HeroCanvas;

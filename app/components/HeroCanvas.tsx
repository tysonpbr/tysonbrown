'use client'
import React, { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useProgress } from '@react-three/drei';

import CameraController from './CameraController';
import Globe from './Globe';
import LoadingPage from './LoadingPage';

const HeroCanvas = ({ globePosition, globeScale, loading, setLoading }: {
  globePosition: [number, number, number];
  globeScale: number;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [displayProgress, setDisplayProgress] = useState(0);
  const [screenWidth, setScreenWidth] = useState<number | null>(null);

  const { progress } = useProgress();

  useEffect(() => {
    const updateWidth = () => setScreenWidth(window.innerWidth);
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
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
    <div className="relative w-full h-[100svh]">
      <LoadingPage loading={loading} displayProgress={displayProgress} />

      <Canvas
        className="bg-black invert sepia-[33%]"
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

'use client'
import React, { Suspense, useState, useEffect } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF, useProgress, useTexture } from '@react-three/drei';
import { a, useSpring } from '@react-spring/three';
import * as THREE from 'three';

const Globe = ({ position, scale }: { position: [number, number, number]; scale: number }) => {
  const globe = useGLTF('./space_boi/scene.gltf');
  const imageTexture = useTexture('./image.webp');

  const animatedProps = useSpring({
    position,
    scale: [scale, scale, scale],
    config: { mass: 1, tension: 170, friction: 26 },
  });

  const numPlanes = 10;
  const radius = 20;
  const center = new THREE.Vector3(0, 1.5, 0);

  const planeItems = Array.from({ length: numPlanes }, (_, i) => {
    const angle = (i / numPlanes) * Math.PI * 2;
    const position = new THREE.Vector3(
      radius * Math.cos(angle),
      center.y,
      radius * Math.sin(angle)
    );

    const lookAtMatrix = new THREE.Matrix4();
    lookAtMatrix.lookAt(position, center, new THREE.Vector3(0, 1, 0));
    const rotation = new THREE.Quaternion().setFromRotationMatrix(lookAtMatrix);

    const flipQuaternion = new THREE.Quaternion();
    flipQuaternion.setFromAxisAngle(new THREE.Vector3(0, 1, 0), Math.PI);
    rotation.multiply(flipQuaternion);

    return { position: position.toArray(), rotation };
  });

  return (
    <a.mesh position={animatedProps.position}>
      <a.primitive object={globe.scene} scale={animatedProps.scale} />

      {planeItems.map(({ position, rotation }, index) => (
        <mesh key={index} position={position} quaternion={rotation}>
          <planeGeometry args={[5, 5]} />
          <meshBasicMaterial color="white" transparent opacity={0.5} />
          <meshBasicMaterial map={imageTexture} transparent />
        </mesh>
      ))}
    </a.mesh>
  );
};

const CameraController = ({ globePosition }: { globePosition: [number, number, number] }) => {
  const { camera } = useThree();

  const { position } = useSpring({
    position: globePosition,
    config: { mass: 1, tension: 170, friction: 26 },
    onChange: ({ value }) => {
      const pos: [number, number, number] = value.position as [number, number, number];
      camera.position.set(...pos);
      camera.lookAt(0, 0, 0);
    },
  });

  useEffect(() => {
    camera.position.set(...globePosition);
    camera.lookAt(0, 0, 0);
  }, [globePosition, camera]);

  return null;
};

const HeroCanvas = ({ globePosition, globeScale, rotate }: {
  globePosition: [number, number, number];
  globeScale: number;
  rotate: boolean;
}) => {
  const [loading, setLoading] = useState(true);
  const [displayProgress, setDisplayProgress] = useState(0);
  const { progress } = useProgress();

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

  return (
    <div className="relative w-full h-screen">
      <div className={`${!loading && 'pointer-events-none opacity-0'} fixed top-0 left-0 h-screen w-screen bg-black z-50 flex justify-center ease-in-out duration-1000`}>
        <div className="text-white px-4 py-2 rounded-lg whitespace-nowrap self-center">
          Loading... {displayProgress}%
        </div>
      </div>

      <Canvas
        className="bg-black/95"
        frameloop="demand"
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true }}
        camera={{ position: globePosition, fov: 20 }}
      >
        <CameraController globePosition={globePosition} />
        <Suspense fallback={<></>}>
          <Globe position={[0, -3, 0]} scale={globeScale} />
        </Suspense>

        <OrbitControls enableZoom={false} enableRotate={false} autoRotate={rotate} autoRotateSpeed={0.3} />
        <Preload all />
      </Canvas>
    </div>
  );
};

export default HeroCanvas;

'use client'
import { useEffect } from 'react';
import { useThree } from '@react-three/fiber';
import { useSpring } from '@react-spring/three';

const CameraController = ({ globePosition }: { globePosition: [number, number, number] }) => {
  const { camera } = useThree();

  useSpring({
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

export default CameraController;

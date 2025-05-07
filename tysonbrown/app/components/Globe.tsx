'use client';
import React, { useState, useEffect, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF, useTexture, Text } from '@react-three/drei';
import { a, useSpring } from '@react-spring/three';
import * as THREE from 'three';

const Globe = ({ position, scale }: { position: [number, number, number]; scale: number }) => {
  const globe = useGLTF('./space_boi/scene.gltf');
  const imageTexture = useTexture('./image.webp');
  const globeRef = useRef<THREE.Group>(null!);
  const [responsiveScale, setResponsiveScale] = useState(scale);

  useEffect(() => {
    const updateScale = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const base = scale;
      let factor = 0.75;

      if (width < 1024) {
        factor = 0.75 * width / height;
      }

      setResponsiveScale(base * factor);
    };

    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, [scale]);

  const animatedProps = useSpring({
    position,
    scale: [responsiveScale, responsiveScale, responsiveScale],
    config: { mass: 1, tension: 170, friction: 26 },
  });

  useFrame(() => {
    if (globeRef.current) {
      globeRef.current.rotation.y += 0.0005;
    }
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

  const createFacingTextQuaternion = (positionVec: THREE.Vector3) => {
    const lookAtMatrix = new THREE.Matrix4();
    lookAtMatrix.lookAt(positionVec, new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 1, 0));

    return new THREE.Quaternion().setFromRotationMatrix(lookAtMatrix);
  };

  const aboutTextPosition = new THREE.Vector3(0, 100, 100);
  const titlePosition = new THREE.Vector3(0, 200, 100);
  const contactPosition = new THREE.Vector3(0, 300, 100);

  const aboutQuaternion = createFacingTextQuaternion(aboutTextPosition);
  const titleQuaternion = createFacingTextQuaternion(titlePosition);
  const contactQuaternion = createFacingTextQuaternion(contactPosition);

  return (
    <a.group position={animatedProps.position}>
      <a.group scale={animatedProps.scale} ref={globeRef}>
        <primitive object={globe.scene} />

        {planeItems.map(({ position, rotation }, index) => (
          <mesh key={index} position={position} quaternion={rotation}>
            <planeGeometry args={[5, 5]} />
            <meshBasicMaterial color="white" transparent opacity={0.5} />
            <meshBasicMaterial map={imageTexture} transparent />
          </mesh>
        ))}
      </a.group>

      <Text
        font="/fonts/JosefinSans-Bold.ttf"
        position={titlePosition.toArray()}
        quaternion={titleQuaternion}
        fontSize={1.5}
        color="#E9762B"
        anchorX="center"
        anchorY="middle"
      >
        MY PROJECTS
      </Text>

      <Text
        font="/fonts/JosefinSans-Bold.ttf"
        position={aboutTextPosition.toArray()}
        quaternion={aboutQuaternion}
        fontSize={1}
        color="#E9762B"
        anchorX="center"
        anchorY="middle"
      >
        ABOUT ME
      </Text>

      <Text
        font="/fonts/JosefinSans-Bold.ttf"
        position={contactPosition.toArray()}
        quaternion={contactQuaternion}
        fontSize={1}
        color="#E9762B"
        anchorX="center"
        anchorY="middle"
      >
        CONTACT ME
      </Text>
    </a.group>
  );
};

export default Globe;

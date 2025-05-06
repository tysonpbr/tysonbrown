'use client';
import React, { useState, useEffect } from 'react';
import HeroCanvas from "./components/HeroCanvas";
import Navbar from './components/Navbar/Navbar';
import MouseInvertOverlay from './components/MouseInvertOverlay';

export default function Home() {
  const [globePosition, setGlobePosition] = useState<[number, number, number]>([0, 10, 40]);
  const [globeScale, setGlobeScale] = useState(1);
  const [rotate, setRotate] = useState(true);
  const [makeSmall, setMakeSmall] = useState(false);

  useEffect(() => {
    const handleEnter = () => setMakeSmall(true);
    const handleLeave = () => setMakeSmall(false);

    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
      button.addEventListener('mouseenter', handleEnter);
      button.addEventListener('mouseleave', handleLeave);
    });

    return () => {
      buttons.forEach(button => {
        button.removeEventListener('mouseenter', handleEnter);
        button.removeEventListener('mouseleave', handleLeave);
      });
    };
  }, []);

  return (
    <div className="w-screen h-screen bg-black relative overflow-hidden lg:invert">
      <MouseInvertOverlay makeSmall={makeSmall} />
      <Navbar setGlobePosition={setGlobePosition} setGlobeScale={setGlobeScale} setRotate={setRotate} />
      <HeroCanvas globePosition={globePosition} globeScale={globeScale} rotate={rotate} />
    </div>
  );
}

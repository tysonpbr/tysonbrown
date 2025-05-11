'use client';
import React, { useState, useEffect } from 'react';
import HeroCanvas from "./components/HeroCanvas";
import Navbar from './components/Navbar';
import MouseInvertOverlay from './components/MouseInvertOverlay';
import SideSlide from './components/SideSlide';

export default function Home() {
  const [globePosition, setGlobePosition] = useState<[number, number, number]>([0, 10, 40]);
  const [globeScale, setGlobeScale] = useState(1);
  const [makeSmall, setMakeSmall] = useState(false);
  const [location, setLocation] = useState('Home');
  const [onSideSlide, setOnSideSlide] = useState(false);
  const [link, setLink] = useState('Home');

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
  }, [link, location]);

  return (
    <div className="w-screen h-[100svh] bg-black relative overflow-hidden">
      <SideSlide location={location} setOnSideSlide={setOnSideSlide} link={link} setLink={setLink} />
      <MouseInvertOverlay makeSmall={makeSmall} onSideSlide={onSideSlide} />
      <Navbar setGlobePosition={setGlobePosition} setGlobeScale={setGlobeScale} location={location} setLocation={setLocation} />
      <HeroCanvas globePosition={globePosition} globeScale={globeScale} />
    </div>
  );
}

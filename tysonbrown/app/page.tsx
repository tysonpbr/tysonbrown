'use client'
import React, { Suspense, useState, useEffect } from 'react';
import HeroCanvas from "./components/HeroCanvas";
import Navbar from './components/Navbar/Navbar';

export default function Home() {
  const [globePosition, setGlobePosition] = useState<[number, number, number]>([0, 10, 40]);
  const [globeScale, setGlobeScale] = useState(1);
  const [rotate, setRotate] = useState(true);

  return (
    <div className="w-screen h-screen bg-black">
      <Navbar setGlobePosition={setGlobePosition} setGlobeScale={setGlobeScale} setRotate={setRotate} />
      <HeroCanvas globePosition={globePosition} globeScale={globeScale} rotate={rotate} />
    </div>
  );
}

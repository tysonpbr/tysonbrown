'use client';
import React, { useEffect, useState } from 'react';

const MouseInvertOverlay = ({ makeSmall }: { makeSmall: boolean }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [maxDimension, setMaxDimension] = useState(0);

  useEffect(() => {
    const updateSize = () => {
      const max = Math.max(window.innerWidth, window.innerHeight);
      setMaxDimension(max * 3);
    };

    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  const size = makeSmall ? 150 : maxDimension;

  return (
    <>
      <div
        className="pointer-events-none fixed top-0 left-0 z-50 hidden lg:flex"
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
          width: '0px',
          height: '0px',
        }}
      >
        <div
          className="pointer-events-none fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 transition-all duration-[800ms] ease-in-out"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            borderRadius: '50%',
            backgroundColor: 'rgba(255,255,255,0.001)',
            backdropFilter: 'invert(1)',
            WebkitBackdropFilter: 'invert(1)',
            mixBlendMode: 'normal',
          }}
        />
      </div>
    </>
  );
};

export default MouseInvertOverlay;

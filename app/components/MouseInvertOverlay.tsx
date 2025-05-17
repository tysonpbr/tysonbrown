'use client';
import React, { useEffect, useState, useRef } from 'react';

const MouseInvertOverlay = ({ makeSmall, onSideSlide, location }: {
  makeSmall: boolean,
  onSideSlide: boolean,
  location: string,
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const targetPosition = useRef({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleMouseOut = (e: MouseEvent) => {
      if (!e.relatedTarget) {
        setVisible(false);
      }
    };
    window.addEventListener('mouseout', handleMouseOut);
    return () => window.removeEventListener('mouseout', handleMouseOut);
  }, []);

  useEffect(() => {
    let frameId: number;
    const animate = () => {
      setPosition((prev) => {
        const lerpFactor = 0.2;
        const x = prev.x + (targetPosition.current.x - prev.x) * lerpFactor;
        const y = prev.y + (targetPosition.current.y - prev.y) * lerpFactor;
        return { x, y };
      });
      frameId = requestAnimationFrame(animate);
    };
    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, []);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setVisible(true);
      targetPosition.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  const size = makeSmall ? 150 : 0;
  const sizeCursor = makeSmall ? 150 : 30;

  return (
    <div
      className={`pointer-events-none fixed top-0 left-0 z-50 lg:flex transition-opacity duration-800 ease-in-out ${visible ? 'opacity-100' : 'opacity-0'
        }`}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        width: '0px',
        height: '0px',
      }}
    >
      <div
        className='pointer-events-none fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 transition-all duration-300 ease-in-out'
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

      <div
        className='pointer-events-none fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 transition-all duration-300 ease-in-out border border-black'
        style={{
          width: `${sizeCursor}px`,
          height: `${sizeCursor}px`,
          borderRadius: '50%',
        }}
      />

      <div className={`${!onSideSlide && 'hidden'} pointer-events-none fixed -bottom-20 left-4 z-50 whitespace-nowrap bg-black text-white sepia-[33%] p-2 leading-none rounded flex flex-row gap-2 items-center`}>
        Scroll For More
        <div className='p-2 rounded bg-[#E9762B] text-black invert text-xl leading-none'>
          ⇨
        </div>
      </div>

      <div className={`${location != 'Home' && 'hidden'} pointer-events-none fixed -bottom-40 w-64 left-4 z-50 bg-black text-white sepia-[33%] p-4 leading-none rounded flex flex-col gap-2 items-start`}>
        <div className='whitespace-nowrap text-start font-bold text-xl'>
          Hey there!
        </div>
        <div className='text-base'>
          Thanks for dropping in. To get started, click one of the options in the navbar above.
        </div>
      </div>
    </div>
  );
};

export default MouseInvertOverlay;

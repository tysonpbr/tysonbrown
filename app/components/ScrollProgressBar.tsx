'use client';
import React, { useEffect, useRef, useState } from 'react';

const ScrollProgressBar = ({ scrollRef }: {
  scrollRef: React.RefObject<HTMLDivElement | null>;
}) => {
  const [progress, setProgress] = useState(0);
  const [barSize, setBarSize] = useState({
    bar: 0,
    circle: 0
  });

  const barRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const updateProgress = () => {
      if (!el) return;
      const maxScroll = el.scrollWidth - el.clientWidth;
      const percent = maxScroll > 0 ? el.scrollLeft / maxScroll : 0;
      setProgress(Math.max(0, Math.min(1, percent)));
    };

    el.addEventListener('scroll', updateProgress);
    updateProgress();

    return () => el.removeEventListener('scroll', updateProgress);
  }, [scrollRef]);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        setBarSize({
          bar: window.innerWidth < 1024 ? window.innerWidth * 0.9 : window.innerWidth * 0.4,
          circle: window.innerHeight * 0.03
        });
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleGlobalMouseMove = (e: MouseEvent) => {
    if (!isDragging.current) return;
    const el = scrollRef.current;
    const bar = barRef.current;
    if (!el || !bar) return;

    const rect = bar.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percent = Math.max(0, Math.min(1, x / rect.width));

    const maxScroll = el.scrollWidth - el.clientWidth;
    el.scrollLeft = percent * maxScroll;
  };

  const handleGlobalMouseUp = () => {
    isDragging.current = false;
    window.removeEventListener('mousemove', handleGlobalMouseMove);
    window.removeEventListener('mouseup', handleGlobalMouseUp);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    window.addEventListener('mousemove', handleGlobalMouseMove);
    window.addEventListener('mouseup', handleGlobalMouseUp);
    e.preventDefault();
    e.stopPropagation();
  };

  const handleGlobalTouchMove = (e: TouchEvent) => {
    if (!isDragging.current) return;
    const el = scrollRef.current;
    const bar = barRef.current;
    if (!el || !bar) return;

    const rect = bar.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const percent = Math.max(0, Math.min(1, x / rect.width));

    const maxScroll = el.scrollWidth - el.clientWidth;
    el.scrollLeft = percent * maxScroll;
  };

  const handleGlobalTouchEnd = () => {
    isDragging.current = false;
    window.removeEventListener('touchmove', handleGlobalTouchMove);
    window.removeEventListener('touchend', handleGlobalTouchEnd);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    isDragging.current = true;
    window.addEventListener('touchmove', handleGlobalTouchMove);
    window.addEventListener('touchend', handleGlobalTouchEnd);
    e.preventDefault();
    e.stopPropagation();
  };

  const handleBarClick = (e: React.MouseEvent) => {
    const el = scrollRef.current;
    const bar = barRef.current;
    if (!el || !bar) return;

    const rect = bar.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percent = Math.max(0, Math.min(1, x / rect.width));

    const maxScroll = el.scrollWidth - el.clientWidth;
    el.scrollTo({ left: percent * maxScroll, behavior: 'smooth' });
  };

  return (
    <div
      ref={barRef}
      className="w-full h-full relative cursor-pointer max-w-[90vw] lg:max-w-[40vw] sepia-[33%] rounded-full"
      onClick={handleBarClick}
    >
      <div className="absolute top-1/2 left-0 w-full h-[3svh] bg-slate-300 shadow-inner transform -translate-y-1/2 rounded-full"></div>

      <div
        className="absolute top-1/2 w-[3svh] h-[3svh] bg-[#E9762B] invert rounded-full cursor-grab active:cursor-grabbing transform -translate-y-1/2 drop-shadow-lg"
        style={{ left: `${progress * (barSize.bar - barSize.circle)}px` }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        onClick={(e) => e.stopPropagation()}
      >
        <div className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 cursor-grab active:cursor-grabbing transform rounded-full w-[10svh] h-[10svh] bg-none' />
      </div>
    </div>
  );
};

export default ScrollProgressBar;

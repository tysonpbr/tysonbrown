'use client';
import React, { useEffect, useRef, useState } from 'react';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import ScrollProgressBar from './ScrollProgressBar';

const SideSlide = ({
  location,
  setOnSideSlide,
  link,
  setLink,
}: {
  location: string;
  setOnSideSlide: React.Dispatch<React.SetStateAction<boolean>>;
  link: string;
  setLink: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [collapse, setCollapse] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      if (e.deltaY === 0) return;
      e.preventDefault();
      el.scrollLeft += e.deltaY;
    };

    el.addEventListener('wheel', onWheel, { passive: false });
    return () => {
      el.removeEventListener('wheel', onWheel);
    };
  }, []);

  useEffect(() => {
    if (location === 'Home') return;
    const timer = setTimeout(() => {
      setCollapse(true);
    }, 100);
    return () => clearTimeout(timer);
  }, [link]);

  useEffect(() => {
    if (location != link) {
      setCollapse(false);
      const delay = link == 'Home' ? 500 : 1000;
      setTimeout(() => {
        setLink(location);
      }, delay);
    }
  }, [location, link]);

  useEffect(() => {
    const node = scrollRef.current;
    if (!node) return;

    const handleEnter = () => {
      if (location == 'About' || location == 'Projects') {
        setOnSideSlide(true);
      }
    }
    const handleLeave = () => setOnSideSlide(false);

    node.addEventListener('mouseenter', handleEnter);
    node.addEventListener('mouseleave', handleLeave);

    return () => {
      node.removeEventListener('mouseenter', handleEnter);
      node.removeEventListener('mouseleave', handleLeave);
    };
  }, [setOnSideSlide, location, link]);

  const renderContent = () => {
    switch (link) {
      case 'About':
        return <About />;
      case 'Projects':
        return <Projects />;
      case 'Contact':
        return <Contact />;
      default:
        return null;
    }
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTo({ left: 0, behavior: 'auto' });
  }, [link]);

  return (
    <div
      id="sideSlide"
      ref={containerRef}
      className={`flex flex-col fixed top-[14svh] lg:top-[19svh] w-screen h-[76svh] lg:h-[67svh] gap-[2svh] lg:gap-[2svh] z-[50] ${collapse ? 'left-0' : 'left-[100vw]'} duration-300 ease-in-out`}
    >
      <div
        ref={scrollRef}
        className="w-screen h-[69svh] lg:h-[60svh] overflow-x-scroll overflow-y-hidden text-black"
      >
        <div className="flex flex-row gap-16 lg:gap-16 w-max h-full">
          {renderContent()}
        </div>
      </div>
      <div className={`${link == 'Contact' && 'hidden'} w-screen h-[5svh] flex justify-center items-center`}>
        <ScrollProgressBar scrollRef={scrollRef} />
      </div>
    </div>
  );
};

export default SideSlide;

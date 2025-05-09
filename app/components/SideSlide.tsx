'use client';
import React, { useEffect, useRef, useState } from 'react';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

const SideSlide = ({
  location,
  setOnSideSlide,
}: {
  location: string;
  setOnSideSlide: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [link, setLink] = useState('Home');
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
    const node = containerRef.current;
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

  return (
    <div
      id="sideSlide"
      ref={containerRef}
      className={`fixed top-[15vh] lg:top-[19vh] w-screen h-[78vh] lg:h-[67vh] z-[50] ${collapse ? 'left-0' : 'left-[100vw]'} duration-300 ease-in-out`}>
      <div
        ref={scrollRef}
        className="w-screen h-[78vh] lg:h-[67vh] overflow-x-scroll overflow-y-hidden text-black"
      >
        <div className="flex flex-row gap-16 lg:gap-16 w-max h-full">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default SideSlide;

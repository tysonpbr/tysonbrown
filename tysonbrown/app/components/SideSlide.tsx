'use client';
import React, { useEffect, useRef, useState } from 'react';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

const SideSlide = ({ location }: { location: string }) => {
  const [link, setLink] = useState('Home')
  const scrollRef = useRef<HTMLDivElement>(null);
  const [collapse, setCollapse] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      if (e.deltaY === 0) return;
      e.preventDefault();
      el.scrollLeft += e.deltaY / 2;
    };

    el.addEventListener('wheel', onWheel, { passive: false });

    return () => {
      el.removeEventListener('wheel', onWheel);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCollapse(true);
    }, 100);
    return () => clearTimeout(timer);
  }, [link]);

  useEffect(() => {
    if (location != link) {
      setCollapse(false);
      if (link == 'Home') {
        setTimeout(() => {
          setLink(location)
        }, 500);
      } else {
        setTimeout(() => {
          setLink(location)
        }, 1000);
      }
    }
  }, [location]);

  const renderContent = () => {
    switch (link) {
      case 'About':
        return <About />;
      case 'Projects':
        return <Projects />;
      case 'Contact':
        return <Contact />;
    }
  };

  return (
    <div className={`fixed top-[12vh] lg:top-[19vh] w-screen h-[78vh] lg:h-[67vh] z-[100] ${collapse ? 'left-0' : 'left-[100vw]'} duration-300 ease-in-out invert`}>
      <div
        ref={scrollRef}
        className="w-screen h-[78vh] lg:h-[67vh] overflow-x-scroll overflow-y-hidden text-black"
      >
        <div className="flex flex-row gap-8 w-max h-full px-8">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default SideSlide;

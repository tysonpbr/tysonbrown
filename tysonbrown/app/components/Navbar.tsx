import React, { useState } from 'react';

const Navbar = ({ setGlobePosition, setGlobeScale, location, setLocation }: {
  setGlobePosition: React.Dispatch<React.SetStateAction<[number, number, number]>>;
  setGlobeScale: React.Dispatch<React.SetStateAction<number>>;
  location: string;
  setLocation: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [inUse, setInUse] = useState(false);

  const goToLocation = (title: string, desktop: [number, number, number], mobile: [number, number, number]) => {
    setInUse(true)
    if (location == 'Home') {
      setLocation(title);
      if (window.innerWidth < 1024) {
        setGlobePosition(mobile);
      } else {
        setGlobePosition(desktop);
      }
      setGlobeScale(1);
      setInUse(false)
    } else {
      setLocation(title);
      setTimeout(() => {
        if (window.innerWidth < 1024) {
          setGlobePosition(mobile);
        } else {
          setGlobePosition(desktop);
        }
        setGlobeScale(1);
        setInUse(false)
      }, 500);
    }
  }

  const navLinks = [
    {
      text: 'Home',
      function: () => {
        if (location == 'Home') return
        if (inUse) return

        goToLocation('Home', [0, 10, 40], [0, 10, 40])
      }
    },
    {
      text: 'About',
      function: () => {
        if (location == 'About') return
        if (inUse) return

        goToLocation('About', [0, 128, 121], [0, 165, 140])
      }
    },
    {
      text: 'Projects',
      function: () => {
        if (location == 'Projects') return
        if (inUse) return

        goToLocation('Projects', [0, 253, 115.7], [0, 315, 126.2])
      }
    },
    {
      text: 'Contact',
      function: () => {
        if (location == 'Contact') return
        if (inUse) return

        goToLocation('Contact', [0, 335, 105.75], [0, 377, 109.8])
      }
    },
  ];

  return (
    <div className="fixed top-0 left-0 z-20 p-8 pointer-events-auto scale">
      <div className="text-[8vw] xl:text-[4vw] font-bold text-[#E9762B] leading-none invert sepia-[30%]">
        TYSON BROWN
      </div>
      <div className="w-full flex justify-between px-4 lg:px-[3vw] text-black">
        {navLinks.map((link) => (
          <button
            key={link.text}
            onClick={link.function}
            className={`cursor-pointer lg:py-4 group flex-1`}
          >
            <div className='group-hover:scale-200 ease-in-out duration-500 text-xs lg:text-[0.8vw] pointer-events-none'>
              {link.text}
            </div>
            <div />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Navbar;

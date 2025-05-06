import React, { useState } from 'react';

const Navbar = ({ setGlobePosition, setGlobeScale, setRotate }: {
  setGlobePosition: React.Dispatch<React.SetStateAction<[number, number, number]>>;
  setGlobeScale: React.Dispatch<React.SetStateAction<number>>;
  setRotate: React.Dispatch<React.SetStateAction<boolean>>;
}) => {

  const navLinks = [
    {
      text: 'Home',
      function: () => {
        setRotate(true);
        setGlobePosition([0, 10, 40]);
        setGlobeScale(1);
      }
    },
    {
      text: 'About',
      function: () => {
        setRotate(true);
        setGlobePosition([0, 330, 110]);
        setGlobeScale(1);
      }
    },
    {
      text: 'Projects',
      function: () => {
        setRotate(true);
        setGlobePosition([4.5, 1, 0]);
        setGlobeScale(1);
      }
    },
    {
      text: 'Contact',
      function: () => {
        setRotate(true);
        setGlobePosition([4.5, 1, 0]);
        setGlobeScale(1);
      }
    },
  ];

  return (
    <div className="fixed top-0 left-0 z-20 p-8 pointer-events-auto scale">
      <div className="text-[8vw] xl:text-[4vw] font-bold text-[#E9762B] leading-none">
        TYSON BROWN
      </div>
      <div className="w-full flex justify-between px-4 lg:px-[3vw] text-white">
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

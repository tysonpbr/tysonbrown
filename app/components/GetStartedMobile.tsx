'use client';

import React, { useEffect, useState } from 'react';

const GetStartedMobile = ({
  location
}: {
  location: string
}) => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowText(true);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  const title = 'Hey there!';
  const paragraph =
    'Thanks for dropping in. To get started, click one of the options in the navbar above.';

  return (
    <div className={`${location != 'Home' ? 'opacity-0' : 'opacity-100'} ease-in-out duration-500 lg:hidden fixed top-0 left-0 w-screen h-[100svh] text-black sepia-50 pointer-events-none`}>
      <div className='lg:hidden fixed top-[14svh] left-0 w-screen h-[20svh] flex justify-center items-center text-[4.5svh] font-bold overflow-hidden'>
        {showText &&
          title.split('').map((char, index) => (
            <span
              key={index}
              className='inline-block opacity-0 animate-riseLetter'
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
      </div>

      <div className='lg:hidden fixed bottom-0 left-0 w-screen h-[35svh] flex justify-center items-center px-8 text-center text-lg'>
        <div className='max-w-full flex flex-wrap justify-center leading-relaxed text-balance'>
          {showText &&
            paragraph.split(' ').map((word, index) => (
              <span
                key={index}
                className='inline-block opacity-0 animate-riseWord'
                style={{ animationDelay: `${index * 0.15 + 0.5}s` }}
              >
                {word + '\u00A0'}
              </span>
            ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes riseLetter {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes riseWord {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-riseLetter {
          animation: riseLetter 0.4s forwards;
        }

        .animate-riseWord {
          animation: riseWord 0.5s forwards;
        }
      `}</style>
    </div>
  );
};

export default GetStartedMobile;

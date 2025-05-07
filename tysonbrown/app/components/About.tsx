/* eslint-disable @next/next/no-img-element */
'use client';
import React from 'react';

const About = () => {
  return (
    <>
      <div className="h-full flex flex-col justify-start text-white gap-8 text-lg max-w-64">

        <div className=''>
          <div className='text-white/70 text-base'>
            Location
          </div>
          <div className='uppercase font-bold'>
            Vancouver
          </div>
        </div>

        <div className=''>
          <div className='text-white/70 text-base'>
            Born
          </div>
          <div className='uppercase font-bold'>
            November 26, 1999
          </div>
        </div>

        <div className=''>
          <div className='text-white/70 text-base'>
            Focus
          </div>
          <div className='uppercase font-bold'>
            Web Dev, Machine Learning, Backend Dev
          </div>
        </div>

      </div>



      <div className="h-full max-h-[78vh] lg:max-h-[67vh] flex flex-col justify-start text-white gap-8 text-lg max-w-[90vw] lg:max-w-128">
        <img src="about_1.jpeg" className='object-contain w-full max-h-[35vh] lg:max-h-[30vh]' alt="Tyson Brown" />
        <img src="about_2.jpeg" className='object-contain w-full max-h-[35vh] lg:max-h-[30vh]' alt="Tyson Brown" />
      </div>



      <div className="h-full flex flex-col justify-start text-white max-w-[80vw] lg:max-w-[40vw]">

        <div className='text-white/70 text-base'>
          A Bit About Myself
        </div>

        <div className='text-lg uppercase font-bold'>
          {`I'm a Computer Engineering student at UBC with a strong interest in building software that solves real problems. I’ve worked across the stack, from developing responsive web apps to training machine learning models, through which I've learned how to develop quickly without sacrificing quality. I care about writing clean, reliable code, and making sure the end product is something people actually want to use.`}
        </div>

      </div>



      <div className="h-full flex flex-col justify-start text-white gap-8 text-lg max-w-[80vw] lg:max-w-96">

        <div className=''>
          <div className='text-white/70 text-base'>
            {`October 2024 – April 2025`}
          </div>
          <div className='uppercase font-bold'>
            Korotu Technology, Full Stack Developer (Co-op)
          </div>
        </div>

        <div className=''>
          <div className='text-white/70 text-base'>
            {`May 2023 – August 2023, May 2024 – August 2024`}
          </div>
          <div className='uppercase font-bold'>
            Honeycomb.ai., Backend Developer Intern
          </div>
        </div>

        <div className=''>
          <div className='text-white/70 text-base'>
            {`May 2023 – Current`}
          </div>
          <div className='uppercase font-bold'>
            Kaizen, Full Stack Developer
          </div>
        </div>

        <div className=''>
          <div className='text-white/70 text-base'>
            {`August 2024 – Current`}
          </div>
          <div className='uppercase font-bold'>
            Shadow Noir, Full Stack Developer
          </div>
        </div>

        <div className=''>
          <div className='text-white/70 text-base'>
            {`May 2022 – December 2022`}
          </div>
          <div className='uppercase font-bold'>
            Vidigami Inc., QA Engineer
          </div>
        </div>

      </div>
    </>
  );
};

export default About;

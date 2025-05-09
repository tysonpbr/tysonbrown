/* eslint-disable @next/next/no-img-element */
'use client';
import React from 'react';

const About = () => {
  return (
    <div className='px-8 flex flex-row gap-16 lg:gap-16 w-max h-full'>
      <div className="h-full flex flex-col justify-start text-black gap-8  max-w-64">

        <div className=''>
          <div className='body-title'>
            Location
          </div>
          <div className='body-text'>
            Vancouver
          </div>
        </div>

        <div className=''>
          <div className='body-title'>
            Born
          </div>
          <div className='body-text'>
            November 26, 1999
          </div>
        </div>

        <div className=''>
          <div className='body-title'>
            Education
          </div>
          <div className='body-text'>
            UBC, Computer Engineering
          </div>
        </div>

        <div className=''>
          <div className='body-title'>
            Focus
          </div>
          <div className='body-text'>
            Web Dev, Machine Learning, Backend Dev
          </div>
        </div>

      </div>



      <div className="h-full max-h-[78vh] lg:max-h-[67vh] flex flex-col justify-start gap-8 max-w-[90vw] lg:max-w-128">
        <img src="about_1.jpeg" className='object-contain w-full max-h-[35vh] lg:max-h-[30vh]' alt="Tyson Brown" />
        <img src="about_2.jpeg" className='object-contain w-full max-h-[35vh] lg:max-h-[30vh]' alt="Tyson Brown" />
      </div>



      <div className="h-full flex flex-col justify-start text-black max-w-[80vw] lg:max-w-[40vw]">

        <div className='body-title'>
          A Bit About Myself
        </div>

        <div className=' body-text'>
          {`I'm a Computer Engineering student at UBC with a strong interest in building software that solves real problems. I’ve worked across the stack, from developing responsive web apps to training machine learning models, through which I've learned how to develop quickly without sacrificing quality. I care about writing clean, reliable code, and making sure the end product is something people actually want to use.`}
        </div>

      </div>



      <div className="h-full flex flex-col justify-start text-black gap-8  max-w-[80vw] lg:max-w-96">

        <div className=''>
          <div className='body-title'>
            {`October 2024 – April 2025`}
          </div>
          <div className='body-text'>
            Korotu Technology, Full Stack Developer (Capstone)
          </div>
        </div>

        <div className=''>
          <div className='body-title'>
            {`May 2023 – August 2023, May 2024 – August 2024`}
          </div>
          <div className='body-text'>
            Honeycomb.ai., Backend Developer Intern
          </div>
        </div>

        <div className=''>
          <div className='body-title'>
            {`May 2023 – Current`}
          </div>
          <div className='body-text'>
            Kaizen, Full Stack Developer
          </div>
        </div>

        <div className=''>
          <div className='body-title'>
            {`August 2024 – Current`}
          </div>
          <div className='body-text'>
            Shadow Noir, Full Stack Developer
          </div>
        </div>

        <div className=''>
          <div className='body-title'>
            {`May 2022 – December 2022`}
          </div>
          <div className='body-text'>
            Vidigami Inc., QA Engineer
          </div>
        </div>

      </div>



      <div className="h-full max-h-[78vh] lg:max-h-[67vh] flex flex-col justify-start text-black gap-8  max-w-[90vw] lg:max-w-128">
        <img src="about_3.jpg" className='object-contain w-full max-h-[35vh] lg:max-h-[30vh]' alt="Tyson Brown" />
        <img src="about_4.jpg" className='object-contain w-full max-h-[35vh] lg:max-h-[30vh]' alt="Tyson Brown" />
      </div>
    </div>
  );
};

export default About;

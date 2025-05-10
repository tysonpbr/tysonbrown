/* eslint-disable @next/next/no-img-element */
'use client';
import React from 'react';

const Contact = () => {
  return (
    <div className="h-full w-[100vw] flex flex-col lg:flex-row gap-16 items-center justify-center px-8">
      <div className="flex flex-col justify-start text-black gap-8 max-w-[80vw] lg:max-w-[40vw] self-center">
        <div className=''>
          <div className='body-title'>
            {`Let's Connect`}
          </div>
          <div className='body-text'>
            {`Always down to chat. Whether you're hiring, want to grab a coffee, or have a project idea in mind. Feel free to reach out!`}
          </div>
        </div>

        <div className=''>
          <div className='body-title'>
            Email
          </div>
          <div className='body-text'>
            thetysonbrown@gmail.com
          </div>
        </div>

        <div className=''>
          <div className='body-title'>
            Location
          </div>
          <div className='body-text'>
            Vancouver, Canada
          </div>
        </div>

        <div className='flex flex-row justify-center gap-8'>
          <button className='w-16 h-16 hover:scale-150 ease-in-out duration-300'>
            <a href="https://github.com/">
              <img src={'github_icon.png'} alt="Github logo" />
            </a>
          </button>
          <button className='w-16 h-16 hover:scale-150 ease-in-out duration-300'>
            <a href="https://www.linkedin.com/in/tysonpbr/">
              <img src={'linkedin_icon.png'} alt="LinkedIn logo" />
            </a>
          </button>
          <button className='w-16 h-16 hover:scale-150 ease-in-out duration-300'>
            <a href="https://www.instagram.com/tysonp.brown">
              <img src={'instagram_icon.png'} alt="Instagram logo" />
            </a>
          </button>
        </div>

      </div>
    </div >
  );
};

export default Contact;

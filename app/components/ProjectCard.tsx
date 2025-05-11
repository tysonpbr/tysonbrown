/* eslint-disable @next/next/no-img-element */
'use client';
import React from 'react';

interface Project {
  title: string;
  description: string;
  images: string[];
  link?: string;
  completed: string;
  role: string;
}

const normalizeUrl = (url: string) => {
  return url.startsWith('http://') || url.startsWith('https://')
    ? url
    : `https://${url}`;
};

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="flex flex-row gap-8 bg-none text-black items-start relative pl-16 2xl:pl-24">

      <div className="flex items-center justify-center min-w-[60px] absolute -top-3 left-6 2xl:-top-8 2xl:left-8 -translate-x-[100%] drop-shadow-md">
        <div className="rotate-[-90deg] origin-right text-black/70 text-4xl 2xl:text-6xl uppercase font-bold whitespace-nowrap leading-none">
          {project.title}
        </div>
      </div>

      <div className="h-full flex flex-col justify-start text-black gap-8  max-w-[90vw] lg:max-w-[768px] mr-16">

        <div className=''>
          <div className='body-title'>
            Date
          </div>
          <div className='body-text'>
            {project.completed}
          </div>
        </div>

        <div className=''>
          <div className='body-title'>
            Role
          </div>
          <div className='body-text'>
            {project.role}
          </div>
        </div>

        <div className=''>
          <div className='body-title'>
            Description
          </div>
          <div className='body-text'>
            {project.description}
          </div>
        </div>

        {project.link && (
          <a
            href={normalizeUrl(project.link)}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#E9762B] invert sepia-[33%] underline text-sm"
          >
            View Project →
          </a>
        )}

      </div>

      <div className="h-full max-h-[69svh] lg:max-h-[60svh] flex flex-col justify-start text-black gap-8  max-w-[90vw] lg:max-w-128">
        <img src={project.images[0]} className='object-contain w-full max-h-[33svh] lg:max-h-[28svh]' alt={project.title + ' 1'} />
        <img src={project.images[1]} className='object-contain w-full max-h-[33svh] lg:max-h-[28svh]' alt={project.title + ' 2'} />
      </div>

      <div className="h-full max-h-[69svh] lg:max-h-[60svh] flex flex-col justify-start text-black gap-8  max-w-[90vw] lg:max-w-128">
        <img src={project.images[2]} className='object-contain w-full max-h-[33svh] lg:max-h-[28svh]' alt={project.title + ' 3'} />
        <img src={project.images[3]} className='object-contain w-full max-h-[33svh] lg:max-h-[28svh]' alt={project.title + ' 4'} />
      </div>
    </div>
  );
};

export default ProjectCard;

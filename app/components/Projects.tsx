'use client';
import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projectsList = [
    {
      title: 'Shadow Noir',
      description: 'I built Shadow Noir as a modern eCommerce site using the MERN stack, designed with a clean, mobile-friendly layout and smooth user experience. The site includes a secure admin dashboard for managing inventory and orders, and Stripe integrated for secure payments. I also used Shippo’s API to automatically create shipping labels and calculate shipping costs at checkout. This project brought together frontend design, backend architecture, and third-party integrations into a complete online retail platform.',
      images: [
        'sn_1.jpg',
        'sn_2.jpg',
        'sn_3.jpg',
        'sn_4.jpg',
      ],
      link: 'https://shadownoir.com',
      completed: 'August 2024 – Current',
      role: 'Full Stack Developer'
    },
    {
      title: 'Kaizen',
      description: 'I built Kaizen Basketball’s website using the MERN stack to simplify registration, scheduling, and team management. The site is fully responsive and includes secure login, an admin dashboard, and integrations with Google Calendar and Sheets for syncing events and rosters. It was designed to be intuitive for both players and coaches, and helped streamline day-to-day operations for the program.',
      images: [
        'kaizen_1.jpg',
        'kaizen_2.jpg',
        'kaizen_3.jpg',
        'kaizen_4.jpg',
      ],
      link: 'https://kaizenbball.com',
      completed: 'May 2023 – Current',
      role: 'Full Stack Developer'
    },
    {
      title: 'Korotu',
      description: 'At Korotu Technology, I helped develop a full-stack web app for tree segmentation using machine learning. I trained and evaluated multiple ML models, fine-tuning hyperparameters to improve accuracy. On the frontend, I built a React interface with file uploads, user authentication, and result history. I also developed Python backend services for handling ML inference and data processing. This project let me work end-to-end, combining ML development with a user-focused web experience.',
      images: [
        'korotu_1.jpg',
        'korotu_2.jpg',
        'korotu_3.jpg',
        'korotu_4.jpg',
      ],
      completed: 'October 2024 – April 2025',
      role: 'Full Stack Developer'
    },
  ]

  return (
    <div className='px-8 flex flex-row gap-16 lg:gap-16 w-max h-full'>
      {projectsList.map((project, i) => (
        <div key={project.title} className='flex flex-row gap-16 lg:gap-16'>
          {i != 0 && <div className='h-full w-[1px] flex pb-8'><div className='bg-black rounded-full flex-1' /></div>}
          <ProjectCard project={project} />
        </div>
      ))}
    </div>
  );
};

export default Projects;
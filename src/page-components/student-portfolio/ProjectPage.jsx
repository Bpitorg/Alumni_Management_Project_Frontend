import React from 'react';
import ProjectCard from './ProjectCard';
const ProjectPage = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'Description of project 1',
      link: 'https://link-to-project-1.com',
    },
    {
      title: 'Project 2',
      description: 'Description of project 2',
      link: 'https://link-to-project-2.com',
    },
    // Add more projects here or replace with dynamic data from backend
  ];

  return (
    <div className="projects-container p-6">
      <div className="text-5xl text-center mb-6">PROJECTS</div>
      <div className="projects-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;

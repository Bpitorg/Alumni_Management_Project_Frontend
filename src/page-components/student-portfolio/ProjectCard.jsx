import React from 'react';
const ProjectCard = ({ project }) => {
  return (
    <div className="project-card bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
      <div className="text-3xl font-semibold mb-2">{project.title}</div>
      <div className="text-lg mb-4">{project.description}</div>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-black hover:text-blue-700"
      >
        View Project
      </a>
    </div>
  );
};

export default ProjectCard;
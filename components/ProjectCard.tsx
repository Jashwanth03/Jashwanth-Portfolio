
import React from 'react';
import { type Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-primary rounded-lg group transform transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/20">
      <div className="relative">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-64 object-cover rounded-t-lg"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-accent to-light text-transparent bg-clip-text">{project.title}</h3>
        <p className="text-slate-400 mb-4 text-sm">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span key={tag} className="bg-accent text-dark text-xs font-bold px-2.5 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex space-x-4 mt-auto">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-light font-semibold hover:text-accent hover:underline transition-colors">
              {project.liveUrlText || 'Live Demo'}
            </a>
          )}
          {project.repoUrl && (
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="text-light font-semibold hover:text-accent hover:underline transition-colors">
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

import React, { useState } from 'react';
import Section from './Section';
import ProjectCard from './ProjectCard';
import { PROJECTS_DATA } from '../constants';

const Projects: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? PROJECTS_DATA.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === PROJECTS_DATA.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <Section id="projects" title="My Projects">
      <div className="relative flex items-center justify-center">
        {/* Previous Button */}
        <button
          onClick={handlePrev}
          className="absolute left-0 -translate-x-1/2 md:-translate-x-full top-1/2 -translate-y-1/2 bg-primary p-3 rounded-full shadow-lg hover:bg-accent hover:text-dark text-accent transition-colors z-10"
          aria-label="Previous project"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>

        <div className="w-full max-w-lg mx-auto">
          {/* The key on the div will force a re-render and trigger animations if any */}
          <div key={currentIndex}>
            <ProjectCard project={PROJECTS_DATA[currentIndex]} />
          </div>
        </div>


        {/* Next Button */}
        <button
          onClick={handleNext}
          className="absolute right-0 translate-x-1/2 md:translate-x-full top-1/2 -translate-y-1/2 bg-primary p-3 rounded-full shadow-lg hover:bg-accent hover:text-dark text-accent transition-colors z-10"
          aria-label="Next project"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center gap-3 mt-8">
        {PROJECTS_DATA.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              currentIndex === index ? 'bg-accent' : 'bg-secondary hover:bg-slate-600'
            }`}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>
    </Section>
  );
};

export default Projects;
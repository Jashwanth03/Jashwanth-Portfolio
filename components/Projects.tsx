

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
        {/* Previous Button (Desktop) */}
        <button
          onClick={handlePrev}
          className="hidden md:block absolute left-0 top-1/2 z-10 -translate-y-1/2 transform rounded-full bg-primary p-3 text-accent shadow-lg transition-colors hover:bg-accent hover:text-dark -translate-x-12"
          aria-label="Previous project"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>

        <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto">
          {/* The key on the div will force a re-render and trigger animations if any */}
          <div key={currentIndex}>
            <ProjectCard project={PROJECTS_DATA[currentIndex]} />
          </div>
        </div>

        {/* Next Button (Desktop) */}
        <button
          onClick={handleNext}
          className="hidden md:block absolute right-0 top-1/2 z-10 -translate-y-1/2 transform rounded-full bg-primary p-3 text-accent shadow-lg transition-colors hover:bg-accent hover:text-dark translate-x-12"
          aria-label="Next project"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>

      {/* Dots Navigation (Desktop) */}
      <div className="hidden md:flex justify-center gap-3 mt-8">
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
      
      {/* Mobile Navigation Controls */}
      <div className="md:hidden flex items-center justify-center gap-6 mt-8">
        <button
            onClick={handlePrev}
            className="rounded-full bg-primary p-2 text-accent shadow-lg transition-colors hover:bg-accent hover:text-dark"
            aria-label="Previous project"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
        </button>
        <div className="flex justify-center gap-3">
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
        <button
            onClick={handleNext}
            className="rounded-full bg-primary p-2 text-accent shadow-lg transition-colors hover:bg-accent hover:text-dark"
            aria-label="Next project"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
        </button>
      </div>
    </Section>
  );
};

export default Projects;
import React from 'react';
import Section from './Section';

const About: React.FC = () => {
  return (
    <Section id="about">
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">
        
        {/* Left Side: Text Content */}
        <div className="md:w-1/2 text-center md:text-left order-2 md:order-1">
          <h2 className="text-3xl sm:text-4xl font-bold text-light mb-2">
            About Me <span className="text-accent">.</span>
          </h2>
          <p className="text-accent font-semibold mb-6">Intro</p>
          
          <p className="text-slate-300 leading-relaxed mb-6">
            I’m a computer science grad who loves turning ideas into interactive web experiences. My toolkit includes Java, React.js, JavaScript, and databases like PostgreSQL and MongoDB. Currently, I’m learning Java Spring Boot to become a full stack developer. I thrive on tackling challenges, collaborating with teams, and always pushing myself to learn more. Let’s create something awesome together!
          </p>
          
          <p className="text-2xl md:text-3xl font-black tracking-wide my-8 bg-gradient-to-r from-accent to-slate-200 text-transparent bg-clip-text">
            Let’s build something amazing!
          </p>

          <a 
            href="/Jashwanth_Resume.pdf" 
           download className="inline-flex items-center gap-3 bg-accent text-dark font-bold py-3 px-6 rounded-lg transition-all transform hover:bg-dark hover:text-accent hover:scale-105 hover:border hover:border-accent"
          >
            Download Resume
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>

        {/* Right Side: Image */}
        <div className="md:w-1/2 order-1 md:order-2">
          <img 
            src="/assets/aboutme.gif"
            alt="Jashwanth" 
            className=""
          />
        </div>

      </div>
    </Section>
  );
};

export default About;
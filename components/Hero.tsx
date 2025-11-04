import React, { useState, useEffect } from 'react';

const roles = [
  "Tech Enthusiast",
  "React.js Developer",
  "Aspiring Full Stack Developer",
];

const SocialIcon: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-accent transition-colors">
    {children}
  </a>
);

const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typeSpeed = isDeleting ? 75 : 150;

    const handleTyping = () => {
      if (isDeleting) {
        setText(currentRole.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else {
        setText(currentRole.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }

      if (!isDeleting && charIndex === currentRole.length) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
      }
    };

    const typingTimeout = setTimeout(handleTyping, typeSpeed);
    return () => clearTimeout(typingTimeout);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section id="home" className="min-h-screen flex items-center bg-dark relative">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-center md:justify-between max-w-5xl gap-10">
        
        {/* Left Side: Image (comes first in flex-row) */}
        <div className="w-3/4 sm:w-1/2 md:w-5/12 lg:w-1/3 order-1 md:order-none">
          <img 
            src="https://picsum.photos/seed/portfolio-person/600/600" 
            alt="Jashwanth" 
            className="rounded-full shadow-2xl shadow-accent/20 border-4 border-secondary animate-breathing" 
          />
        </div>

        {/* Right Side: Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-light leading-tight mb-4">
            <span className="bg-gradient-to-r from-light to-accent text-transparent bg-clip-text">Hi, I'm</span> <span className="bg-gradient-to-r from-accent to-light text-transparent bg-clip-text">Jashwanth</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 min-h-[28px]">
            <span className="font-bold text-light">{text}</span>
            <span className="border-r-2 border-light animate-typing-blink" aria-hidden="true"></span>
          </p>
          <div className="flex items-center justify-center md:justify-start gap-4 mt-8">
            <a href="#contact" className="inline-block bg-accent text-dark font-bold py-3 px-6 rounded-lg transition-all transform hover:bg-dark hover:text-accent hover:scale-105 hover:border hover:border-accent">
              Contact Me
            </a>
            <div className="flex items-center gap-3 bg-gray-800/50 font-semibold py-2 px-5 rounded-full text-sm border border-secondary animate-breathing">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent"></span>
              </span>
              <span className="bg-gradient-to-r from-light to-slate-400 text-transparent bg-clip-text">
                Open to work
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Vertical Social Links on the far right */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden md:flex flex-col space-y-6">
        <SocialIcon href="https://github.com/Jashwanth03">
          {/* GitHub Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
        </SocialIcon>
        <SocialIcon href="https://www.linkedin.com/in/jashwanthem/">
          {/* LinkedIn Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
        </SocialIcon>
      </div>
    </section>
  );
};

export default Hero;
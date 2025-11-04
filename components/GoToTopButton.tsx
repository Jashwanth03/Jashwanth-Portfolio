import React, { useState, useEffect } from 'react';

const GoToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={`
        fixed bottom-4 right-4 z-50
        w-10 h-10 rounded-full
        bg-accent text-dark
        flex items-center justify-center
        shadow-lg
        transition-all duration-300 ease-in-out
        transform hover:scale-110
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dark focus:ring-accent
        ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}
      `}
      aria-label="Go to top"
    >
      {/* Up Arrow SVG */}
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
      </svg>
    </button>
  );
};

export default GoToTopButton;

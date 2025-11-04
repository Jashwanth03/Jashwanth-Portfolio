import React from 'react';

interface SectionProps {
  id: string;
  title?: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, children }) => {
  return (
    <section id={id} className="py-16 sm:py-20 md:py-24">
      <div className="container mx-auto px-6 max-w-5xl">
        {title && (
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-light">
            {title} <span className="text-accent">.</span>
          </h2>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
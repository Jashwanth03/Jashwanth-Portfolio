import React from 'react';
import Section from './Section';
import { HOBBIES_DATA } from '../constants';
import { type Hobby } from '../types';

const HobbyCard: React.FC<{ hobby: Hobby }> = ({ hobby }) => (
  <div className={`bg-primary p-4 sm:p-6 rounded-lg border border-secondary text-center flex flex-col items-center transition-all duration-300 transform hover:-translate-y-2 h-full ${hobby.theme.border} ${hobby.theme.shadow}`}>
    <div className="w-16 h-16 mb-4 flex items-center justify-center">
      {hobby.icon}
    </div>
    <h3 className="text-xl font-bold text-light mb-2">{hobby.title}</h3>
    <p className="text-slate-400 text-sm leading-relaxed">{hobby.description}</p>
  </div>
);

const Hobbies: React.FC = () => {
  return (
    <Section id="hobbies" title="Hobbies & Interests">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {HOBBIES_DATA.map((hobby) => (
          <HobbyCard key={hobby.title} hobby={hobby} />
        ))}
      </div>
    </Section>
  );
};

export default Hobbies;
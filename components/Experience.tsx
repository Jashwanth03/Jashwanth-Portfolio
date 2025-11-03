import React, { useState } from 'react';
import Section from './Section';
import { WORK_DATA, EDUCATION_DATA } from '../constants';
import { ExperienceType, type ExperienceItem } from '../types';

const QualificationItem: React.FC<{ item: ExperienceItem }> = ({ item }) => (
  <div className="relative pl-8 mb-8 border-l-2 border-secondary last:mb-0">
    <div className="absolute -left-2.5 top-1 w-5 h-5 bg-accent rounded-full border-4 border-dark"></div>
    <h3 className="text-lg font-bold text-light">{item.title}</h3>
    <p className="text-accent font-semibold mb-1">{item.institution}</p>
    <p className="text-sm text-slate-400 mb-2">{item.period}</p>
    {item.description && <p className="text-slate-300">{item.description}</p>}
    {item.grade && <p className="text-slate-300 font-medium">{item.grade}</p>}
  </div>
);


const Experience: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ExperienceType>(ExperienceType.Education);

  const dataToShow = activeTab === ExperienceType.Work ? WORK_DATA : EDUCATION_DATA;
  
  return (
    <Section id="qualifications">
      <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-light">
              Qualification <span className="text-accent">.</span>
          </h2>
          <p className="text-slate-400 mt-2">My Personal Journey</p>
      </div>

      {/* Toggle Switch */}
      <div className="flex justify-center items-center gap-4 mb-12">
        <div className={`transition-colors ${activeTab === ExperienceType.Education ? 'text-accent' : 'text-slate-400'}`}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-9.998 12.078 12.078 0 01.665-6.479L12 14z" />
          </svg>
        </div>
        <div 
          onClick={() => setActiveTab(activeTab === ExperienceType.Education ? ExperienceType.Work : ExperienceType.Education)}
          className="w-16 h-8 bg-secondary rounded-full flex items-center p-1 cursor-pointer"
        >
          <div className={`w-6 h-6 bg-light rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${activeTab === ExperienceType.Work ? 'translate-x-8' : ''}`} />
        </div>
        <div className={`transition-colors ${activeTab === ExperienceType.Work ? 'text-accent' : 'text-slate-400'}`}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
      </div>
      
      <div className="max-w-3xl mx-auto">
        {dataToShow.map((item, index) => (
          <QualificationItem key={index} item={item} />
        ))}
      </div>
    </Section>
  );
};

export default Experience;
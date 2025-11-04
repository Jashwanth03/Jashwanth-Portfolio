
import React, { useState } from 'react';
import Section from './Section';
import { WORK_DATA, EDUCATION_DATA } from '../constants';
import { ExperienceType, type ExperienceItem } from '../types';

const QualificationItem: React.FC<{ item: ExperienceItem }> = ({ item }) => (
  <div className="bg-primary p-6 rounded-lg border border-secondary mb-6 transition-all duration-300 hover:border-accent hover:shadow-lg hover:shadow-accent/10">
    <div className="flex items-start gap-4">
      <div className="text-accent mt-1 flex-shrink-0">
        {item.type === ExperienceType.Education ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        )}
      </div>
      <div>
        <h3 className="text-lg font-bold text-light">{item.title}</h3>
        <p className="text-accent font-semibold mb-1">{item.institution}</p>
        <div className="flex items-center gap-2 text-sm text-slate-400 mb-2">
           <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          <span>{item.period}</span>
        </div>
        {item.description && <p className="text-slate-300 text-sm">{item.description}</p>}
        {item.grade && <p className="text-slate-300 font-medium text-sm">{item.grade}</p>}
      </div>
    </div>
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
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342" />
          </svg>
        </div>
        <div 
          onClick={() => setActiveTab(activeTab === ExperienceType.Education ? ExperienceType.Work : ExperienceType.Education)}
          className={`w-16 h-8 rounded-full flex items-center p-1 cursor-pointer transition-colors duration-300 ease-in-out ${activeTab === ExperienceType.Work ? 'bg-accent' : 'bg-secondary'}`}
        >
          <div className={`w-6 h-6 rounded-full shadow-md transform transition-all duration-300 ease-in-out ${activeTab === ExperienceType.Work ? 'translate-x-8 bg-black' : 'bg-slate-200'}`} />
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

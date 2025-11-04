import React from 'react';
import Section from './Section';
import { SKILLS_DATA } from '../constants';
import { type SkillCardData } from '../types';

const SkillCategoryCard: React.FC<{ category: SkillCardData }> = ({ category }) => (
    <div className={`bg-primary p-6 rounded-lg border border-secondary transition-all duration-300 flex flex-col min-h-[260px] sm:min-h-[280px] transform hover:-translate-y-2 ${category.cardTheme.border} ${category.cardTheme.shadow}`}>
      <div className="flex items-center gap-4 mb-6">
        <div className="w-10 h-10 flex-shrink-0">
          {category.icon}
        </div>
        <h3 className="text-xl font-bold text-light">{category.title}</h3>
      </div>
      <div className="flex flex-col gap-3 mt-auto items-start">
        {category.skills.map((skill) => (
          <span 
            key={skill} 
            className={`px-3 py-1 rounded-full text-sm font-medium ${category.pillColors.bg} ${category.pillColors.text} border ${category.pillColors.border}`}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
);


const Skills: React.FC = () => {
  return (
    <Section id="skills" title="My Skills">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {SKILLS_DATA.map((category) => (
                <SkillCategoryCard key={category.title} category={category} />
            ))}
        </div>
    </Section>
  );
};

export default Skills;
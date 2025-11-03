import React from 'react';
import Section from './Section';
import { SKILLS_DATA } from '../constants';
import { type Skill } from '../types';

const SkillCard: React.FC<{ skill: Skill }> = ({ skill }) => (
  <div className="group flex flex-col items-center justify-center gap-4 p-6 bg-primary border border-secondary rounded-lg transition-all duration-300 hover:border-accent w-40 h-36">
    <div className="w-12 h-12 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
      {skill.icon}
    </div>
    <p className="font-semibold text-light text-sm">{skill.name}</p>
  </div>
);


const Skills: React.FC = () => {
  return (
    <Section id="skills">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-light mb-12 uppercase tracking-wider text-center">
          My Skills
        </h2>
        {SKILLS_DATA.map((category) => (
          <div key={category.category} className="mb-12">
            <h3 className="text-xl font-bold text-accent mb-6 text-center">{category.category}</h3>
            <div className="flex flex-wrap justify-center gap-6">
              {category.skills.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
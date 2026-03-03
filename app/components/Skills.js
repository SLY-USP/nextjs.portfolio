import React from 'react';

const SkillCard = ({ name, iconUrl }) => (
  <div className="flex flex-col items-center justify-center space-y-2 group">
    <div className="w-16 h-16 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
      <img 
        src={iconUrl} 
        alt={name} 
        className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all"
      />
    </div>
    <span className="text-[10px] font-black uppercase tracking-widest text-black">{name}</span>
  </div>
);

export default function Skills() {
  const skills = {
    usingNow: [
      { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { name: 'SASS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg' },
      { name: 'JAVASCRIPT', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'REACT', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'BOOTSTRAP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
      { name: 'GIT', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: 'FIGMA', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
    ],
    learning: [
      { name: 'NODEJS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'MYSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { name: 'MONGODB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
      { name: 'TYPESCRIPT', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    ]
  };

  return (
    <section className="bg-[#E5E5E5] py-20 px-4 flex flex-col items-center">
      {/* Sarlavha */}
      <div className="mb-16">
        <h2 className="text-2xl font-black border-[5px] border-black px-10 py-3 uppercase tracking-[0.3em]">
          Skills
        </h2>
      </div>

      <div className="w-full max-w-4xl space-y-16">
        {/* Using Now */}
        <div className="space-y-8">
          <h3 className="text-lg font-black uppercase tracking-widest text-left">Using now:</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-12 gap-x-8">
            {skills.usingNow.map((skill) => (
              <SkillCard key={skill.name} name={skill.name} iconUrl={skill.icon} />
            ))}
          </div>
        </div>

        {/* Learning */}
        <div className="space-y-8">
          <h3 className="text-lg font-black uppercase tracking-widest text-left">Learning:</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-12 gap-x-8">
            {skills.learning.map((skill) => (
              <SkillCard key={skill.name} name={skill.name} iconUrl={skill.icon} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
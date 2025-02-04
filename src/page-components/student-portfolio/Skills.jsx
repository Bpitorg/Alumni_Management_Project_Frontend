import React from 'react';
const Skills = () => {
  const skills = ['HTML', 'React']; // Example skills, replace with backend data

  return (
    <div className="h-[50%]">
      <div className="text-5xl text-white">SKILLS</div>
      <div className="p-2 mt-4 flex gap-3">
        {skills.map((skill, index) => (
          <div key={index} className="text-xl">
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
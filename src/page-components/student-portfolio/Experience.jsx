import React from 'react';

const Experience = () => {
  const experiences = ['Edureka', 'Udemy']; // Example experiences, replace with backend data

  return (
    <div className="h-[50%]">
      <div className="text-5xl text-white">EXPERIENCE</div>
      <div className="p-2 mt-4 flex gap-3">
        {experiences.map((exp, index) => (
          <div key={index} className="text-xl">
            {exp}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;

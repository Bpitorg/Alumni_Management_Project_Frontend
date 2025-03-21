import React from 'react';

const StudentDetails = ({ students }) => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">All Students</h1>
      <div className="flex flex-wrap gap-4">
        {students.map((student, index) => (
          <div key={index} className="w-72 p-4 border rounded-lg shadow-sm">
            <img src={student.imageUrl} alt={student.name} className="w-full h-48 object-cover rounded-lg" />
            <h2 className="text-xl font-semibold mt-2">{student.name}</h2>
            <p className="text-gray-600">{student.degree}</p>
            <p className="text-gray-600">{student.batch}</p>
            <p className="text-gray-600">{student.position} at {student.company}</p>
            <p className="text-gray-600">Skills: {student.skills.join(', ')}</p>
            <p className="text-gray-600">Projects: {student.projects.join(', ')}</p>
            <p className="text-gray-600">Experience: {student.experience} years</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentDetails;
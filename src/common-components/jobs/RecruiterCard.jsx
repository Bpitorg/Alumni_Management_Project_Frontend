import React from "react";
import { useNavigate } from "react-router-dom";

const RecruiterCard = ({ recruiter }) => {
  const navigate = useNavigate();

  // Handle click on the card
  const handleClick = () => {
    navigate(`/jobs/recent-recruiters/${recruiter.id}`); // Navigate to the detailed page
  };

  // Get the most recent year the company visited campus
  const mostRecentYear = recruiter.yearsOnCampus[recruiter.yearsOnCampus.length - 1];

  // Get the first 2 job roles
  const jobRoles = recruiter.jobRoles.slice(0, 2).join(", ");

  return (
    <div
      className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
      onClick={handleClick} // Add click handler
    >
      {/* Company Logo */}
      <img
        src={recruiter.logo}
        alt={recruiter.company}
        className="w-16 h-16 mb-4 mx-auto"
      />

      {/* Company Name */}
      <h2 className="text-xl font-semibold text-center mb-2">{recruiter.company}</h2>

      {/* Job Roles Offered */}
      <p className="text-gray-600 text-center mb-2">
        <strong>Roles:</strong> {jobRoles}
      </p>

      {/* Years on Campus */}
      <p className="text-gray-600 text-center mb-2">
        <strong>Last Visited:</strong> {mostRecentYear}
      </p>

      {/* Students Hired */}
      <p className="text-gray-600 text-center">
        <strong>Students Hired:</strong> {recruiter.studentsHired}
      </p>
    </div>
  );
};

export default RecruiterCard;
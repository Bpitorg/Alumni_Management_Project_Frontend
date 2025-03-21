import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AlumniCompanyCard = ({ company }) => {
  const navigate = useNavigate();
  const [showAll, setShowAll] = useState(false); // State to toggle "Show More"

  // Handle click on the card
  const handleClick = () => {
    navigate(`/jobs/alumni-workplace/${company.id}`); // Navigate to the detailed page
  };

  // Ensure company.alumni is defined, otherwise use an empty array
  const alumni = company.alumni || [];

  // Number of alumni to show initially
  const initialAlumniCount = 3;
  const visibleAlumni = showAll
    ? alumni
    : alumni.slice(0, initialAlumniCount);

  return (
    <div
      onClick={handleClick}
      className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 hover:scale-105 cursor-pointer border border-gray-100"
    >
      <div className="flex flex-col items-center text-center">
        {/* Company Logo */}
        <img
          src={company.logo}
          alt={company.name}
          className="w-20 h-20 rounded-full object-cover mb-4 border-2 border-gray-200"
        />

        {/* Company Name */}
        <h3 className="text-2xl font-bold text-gray-800 mb-2">{company.name}</h3>

        {/* Alumni List */}
        <div className="w-full">
          <p className="text-sm text-gray-600 font-semibold mb-2">
            Alumni Working Here:
          </p>
          <ul className="space-y-2">
            {visibleAlumni.map((alumnus, index) => (
              <li key={index} className="text-sm text-gray-600">
                {alumnus.name} - {alumnus.role}
              </li>
            ))}
          </ul>

          {/* Show More / Show Less Button */}
          {alumni.length > initialAlumniCount && (
            <button
              onClick={(e) => {
                e.stopPropagation(); // Prevent card click event from firing
                setShowAll(!showAll);
              }}
              className="mt-3 text-blue-600 hover:text-blue-800 text-sm font-semibold focus:outline-none"
            >
              {showAll ? "Show Less" : "Show More"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AlumniCompanyCard;
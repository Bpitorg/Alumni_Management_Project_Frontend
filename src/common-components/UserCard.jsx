import React from "react";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

const UserCard = ({
  id, // Unique identifier for the user
  category, // "student", "mentor", or "alumni"
  name,
  degree,
  batch,
  position,
  company,
  skills = [],
  projects = [],
  experience = [],
  imageUrl,
  onConnect,
  onMentor,
}) => {
  const theme = useTheme();
  const navigate = useNavigate(); // Hook for navigation

  // Category-based Titles & Fields
  const isStudent = category === "student";
  const isAlumni = category === "alumni";
  const isMentor = category === "mentor";

  // Determine the tag text based on the category
  const tagText = isStudent
    ? "Looking for a Mentor"
    : isAlumni
    ? "Open to be a Mentor"
    : "Certified Mentor";

  // Handle click event to navigate to the detailed view
  const handleClick = () => {
    navigate(`/networking/${category}/${id}`); // Navigate to the detailed view
  };

  return (
    <div
      className="px-6 py-6 max-w-[360px] bg-white w-full rounded-lg transition-all duration-300 hover:shadow-lg flex flex-col cursor-pointer" // Add cursor-pointer
      style={{
        color: theme.palette.primary.dark,
        border: "1px solid",
        borderColor: theme.palette.grey[300],
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        height: "500px", // Fixed height for all cards
      }}
      onClick={handleClick} // Add onClick handler
    >
      {/* Mentor Tag */}
      <div
        className="tag px-3 py-1 w-fit rounded-full font-semibold text-xs mb-4"
        style={{
          backgroundColor: isStudent
            ? "#E3F2FD" // Light blue for students
            : isAlumni
            ? "#FFF3E0" // Light orange for alumni
            : "#F1E8FF", // Light purple for mentors
          color: isStudent
            ? "#1976D2" // Dark blue for students
            : isAlumni
            ? "#EF6C00" // Dark orange for alumni
            : "#6A1B9A", // Dark purple for mentors
        }}
      >
        {tagText}
      </div>

      {/* User Info */}
      <div className="flex justify-between items-center" style={{ height: "20%" }}>
        <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-gray-200">
          <img
            className="h-full w-full object-cover"
            src={imageUrl}
            alt={name}
          />
        </div>
        <div className="text-right">
          <h1 className="text-lg font-semibold">{name}</h1>
          {isStudent ? (
            <>
              <p className="text-sm text-gray-600">{degree}</p>
              <p className="text-sm text-gray-600">Batch of {batch}</p>
            </>
          ) : (
            <>
              <p className="text-sm text-gray-600">{position}</p>
              <p className="text-sm text-gray-600">{company}</p>
              <p className="text-sm text-gray-600">Batch of {batch}</p>
            </>
          )}
        </div>
      </div>

      {/* Skills / Expertise Section */}
      <div className="mt-4" style={{ height: "25%" }}>
        <h1 className="font-bold text-md mb-2">
          {isStudent ? "Top Skills" : "Expertise In"}
        </h1>
        <div className="flex gap-2 flex-wrap">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="py-1 px-3 rounded-full text-xs bg-gray-100 text-gray-700"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Projects / Experience Section */}
      <div className="mt-4" style={{ height: "25%" }}>
        <h1 className="font-bold text-md mb-2">
          {isStudent ? "Projects/Internships" : "Experience"}
        </h1>
        <div className="flex flex-wrap gap-2">
          {(isStudent ? projects : experience).map((item, index) => (
            <span
              key={index}
              className="py-1 px-3 rounded-full text-xs bg-gray-100 text-gray-700"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Buttons */}
      <div
        className="mt-auto flex justify-center items-center gap-4"
        style={{ height: "10%" }}
        onClick={(e) => e.stopPropagation()} // Prevent click event from bubbling up to the card
      >
        <button
          className="py-2 px-4 text-sm font-semibold bg-blue-50 text-blue-600 rounded-full hover:bg-blue-100 transition-all duration-300"
          onClick={onConnect}
        >
          Connect
        </button>
        <button
          className="py-2 px-4 text-sm font-semibold bg-purple-100 text-purple-600 rounded-full hover:bg-purple-200 transition-all duration-300"
          onClick={onMentor}
        >
          {isStudent ? "Mentor" : "Ask to Mentor"}
        </button>
      </div>
    </div>
  );
};

export default UserCard;
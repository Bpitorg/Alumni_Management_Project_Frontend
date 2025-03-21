import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const MentorshipCard = ({
  id,
  title,
  description,
  targetAudience,
  duration,
  outcome,
  category,
}) => {
  const navigate = useNavigate(); // Initialize the navigate function

  // Define color schemes for each category
  const categoryColors = {
    tech: {
      bg: "bg-[#e3f2fd]", // Light blue for tech
      border: "border-[#90caf9]", // Blue border
      buttonMentor: "bg-[#1976d2]", // Dark blue for mentor button
      buttonStudent: "bg-[#42a5f5]", // Light blue for student button
      text: "text-[#1976d2]", // Blue text for category
    },
    placement: {
      bg: "bg-[#f3e5f5]", // Light purple for placement
      border: "border-[#ce93d8]", // Purple border
      buttonMentor: "bg-[#8e24aa]", // Dark purple for mentor button
      buttonStudent: "bg-[#ba68c8]", // Light purple for student button
      text: "text-[#8e24aa]", // Purple text for category
    },
    personality: {
      bg: "bg-[#fff3e0]", // Light orange for personality
      border: "border-[#ffcc80]", // Orange border
      buttonMentor: "bg-[#ef6c00]", // Dark orange for mentor button
      buttonStudent: "bg-[#ffa726]", // Light orange for student button
      text: "text-[#ef6c00]", // Orange text for category
    },
    entrepreneurship: {
      bg: "bg-[#fbe9e7]", // Light red for entrepreneurship
      border: "border-[#ff8a65]", // Red border
      buttonMentor: "bg-[#d32f2f]", // Dark red for mentor button
      buttonStudent: "bg-[#ff5252]", // Light red for student button
      text: "text-[#d32f2f]", // Red text for category
    },
    creativeArts: {
      bg: "bg-[#f3e5f5]", // Light purple for creative arts
      border: "border-[#ce93d8]", // Purple border
      buttonMentor: "bg-[#8e24aa]", // Dark purple for mentor button
      buttonStudent: "bg-[#ba68c8]", // Light purple for student button
      text: "text-[#8e24aa]", // Purple text for category
    },
    academics: {
      bg: "bg-[#e8f5e9]", // Light green for academics
      border: "border-[#81c784]", // Green border
      buttonMentor: "bg-[#388e3c]", // Dark green for mentor button
      buttonStudent: "bg-[#66bb6a]", // Light green for student button
      text: "text-[#388e3c]", // Green text for category
    },
  };

  // Get the color scheme based on the category
  const colors = categoryColors[category] || categoryColors.default;

  // Handle click event to navigate to the detailed page
  const handleCardClick = () => {
    navigate(`/networking/mentorship-programs/${id}`); // Navigate to the detailed page with the program ID
  };

  return (
    <div
      className={`${colors.bg} border-2 border-solid ${colors.border} rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 w-full cursor-pointer`}
      onClick={handleCardClick} // Add onClick handler
    >
      {/* Title */}
      <h1 className="text-2xl font-bold text-gray-800 mb-4">{title}</h1>

      {/* Description */}
      <p className="text-lg text-gray-700 mb-4">{description}</p>

      {/* Details */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <h2 className="text-lg font-semibold text-gray-800">Audience:</h2>
          <p className="text-lg text-gray-700">{targetAudience}</p>
        </div>
        <div className="flex items-center gap-2">
          <h2 className="text-lg font-semibold text-gray-800">Duration:</h2>
          <p className="text-lg text-gray-700">{duration}</p>
        </div>
        <div className="flex items-center gap-2">
          <h2 className="text-lg font-semibold text-gray-800">Outcome:</h2>
          <p className="text-lg text-gray-700">{outcome}</p>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-4 mt-6">
        <button
          onClick={handleCardClick}
          className={`px-4 py-2 text-center rounded-lg text-white font-semibold ${colors.buttonMentor} hover:opacity-90 transition-opacity`} // Prevent click event from bubbling up to the card
        >
          Join As Mentor
        </button>
        <button
          className={`px-4 py-2 text-center rounded-lg text-white font-semibold ${colors.buttonStudent} hover:opacity-90 transition-opacity`}
          onClick={(e) => e.stopPropagation()} // Prevent click event from bubbling up to the card
        >
          Join As Student
        </button>
      </div>
    </div>
  );
};

export default MentorshipCard;

import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";

const ShortCard = ({
  name = "John Doe",
  department = "CSE",
  year = "2023",
  image = "https://via.placeholder.com/80",
  description = "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
}) => {
  const theme = useTheme();
  const [isFollowing, setIsFollowing] = useState(false); // State to track follow status

  // Function to handle the follow button click
  const handleFollowClick = () => {
    setIsFollowing(!isFollowing); // Toggle the follow state
  };

  return (
    <div
      className="bg-white"
      style={{
        boxShadow: "4px 2px 4px 2px rgba(12, 139, 135, 0.2)",
        border: "1px solid",
        borderColor: theme.palette.primary.main,
        color: theme.palette.primary.main,
        borderRadius: "8px",
        padding: "16px",
        width: "250px", // Fixed width for all cards
        display: "flex",
        flexDirection: "column",
        gap: "12px", // Spacing between elements
      }}
    >
      {/* Profile Image and Details */}
      <div className="flex h-[35%] justify-between items-center">
        <div className="w-20 h-20 rounded-full overflow-hidden">
          <img
            className="h-full w-full object-cover object-top"
            src={image}
            alt={name}
          />
        </div>
        <div className="text-right text-black">
          <h1 className="text-lg font-semibold">{name}</h1>
          <h1 className="text-sm">{department}</h1>
          <h1 className="text-sm">{year}</h1>
        </div>
      </div>

      {/* Description */}
      <div
        className="text-md h-[40%] text-black"
        style={{
          overflow: "hidden",
          textOverflow: "ellipsis",
          display: "-webkit-box",
          WebkitLineClamp: 3, // Limit description to 3 lines
          WebkitBoxOrient: "vertical",
        }}
      >
        {description}
      </div>

      {/* Follow Button */}
      <div className="flex justify-center">
        <button
          className="w-full text-white px-3 py-2 font-semibold shadow-md rounded-xl transition-all duration-300"
          style={{
            backgroundColor: isFollowing
              ? theme.palette.success.main // Change background color when following
              : theme.palette.primary.main,
            color: theme.palette.background.default,
            border: isFollowing
              ? `1px solid ${theme.palette.grey[500]}` // Add border when following
              : "none",
          }}
          onClick={handleFollowClick} // Add click handler
        >
          {isFollowing ? "Following" : "Follow"} {/* Change button text */}
        </button>
      </div>
    </div>
  );
};

export default ShortCard;
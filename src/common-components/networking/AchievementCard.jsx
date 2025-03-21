import React, { useState } from "react";
import { useTheme } from "@mui/material";

const AchievementCard = ({
  title,
  date,
  description,
  highlights,
  testimonials,
  image,
  reverse,
}) => {
  const theme = useTheme();
  const [isExpanded, setIsExpanded] = useState(false);

  // Function to truncate text to a specified number of words
  const truncateText = (text, maxWords) => {
    const words = text.split(" ");
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(" ") + "...";
    }
    return text;
  };

  return (
    <div
      className={`flex flex-col md:flex-row gap-5 p-6 rounded-lg shadow-lg bg-white ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Image */}
      <img
        className="w-full md:w-1/2 h-64 object-cover object-center rounded-lg"
        src={image}
        alt={title}
      />

      {/* Content */}
      <div className="w-full md:w-1/2 flex flex-col justify-center">
        {/* Title */}
        <h1
          className="text-2xl font-bold text-center mb-4"
          style={{
            color: theme.palette.primary.main,
          }}
        >
          {title}
        </h1>

        {/* Date */}
        <h2 className="text-sm text-gray-500 mb-4 text-center">{date}</h2>

        {/* Description */}
        <p className="text-gray-700 mb-4">
          {isExpanded ? description : truncateText(description, 15)}
        </p>

        {/* Key Highlights (Hidden by default) */}
        {isExpanded && highlights && (
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Key Highlights
            </h3>
            <ul className="list-disc list-inside text-gray-700">
              {highlights.map((highlight, index) => (
                <li key={index} className="mb-1">
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Testimonials (Hidden by default) */}
        {isExpanded && testimonials && testimonials.length > 0 && (
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              What People Are Saying
            </h3>
            <div className="text-gray-600 italic">
              "{truncateText(testimonials[0].quote, 10)}" – {testimonials[0].author}
            </div>
          </div>
        )}

        {/* Read More / Read Less Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-blue-600 hover:underline focus:outline-none"
        >
          {isExpanded ? "Read Less" : "Read More"}
        </button>
      </div>
    </div>
  );
};

export default AchievementCard;
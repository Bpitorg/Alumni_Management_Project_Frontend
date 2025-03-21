import React from "react";
import { useParams } from "react-router-dom"; // Import useParams to get the ID from the URL
import achievements from "../../constants/achievementdata"; // Import achievements data
import { useTheme } from "@mui/material";
const AchievementDetails = () => {
  const theme = useTheme();
  const { id } = useParams(); // Get the ID from the URL
  const achievement = achievements.find((a) => a.id === parseInt(id)); // Find the achievement by ID

  if (!achievement) {
    return (
      <div className="p-6 text-center text-red-500">Achievement not found!</div>
    ); // Handle case where achievement is not found
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Achievement Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4"
        style={{
            color: theme.palette.primary.main,
        }}
        >
          {achievement.title}
        </h1>
        <p className="text-lg text-gray-600">{achievement.date}</p>
      </div>

      {/* Achievement Image */}
      <div className="flex justify-center mb-8">
        <img
          src={achievement.image}
          alt={achievement.title}
          className="rounded-lg shadow-lg w-full max-w-2xl"
        />
      </div>

      {/* Achievement Description */}
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Description
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          {achievement.description}
        </p>
      </div>

      {/* Key Highlights */}
      <div className="max-w-2xl mx-auto mt-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Key Highlights
        </h2>
        <ul className="list-disc list-inside text-lg text-gray-700">
          {achievement.highlights.map((highlight, index) => (
            <li key={index} className="mb-2">
              {highlight}
            </li>
          ))}
        </ul>
      </div>

      {/* Testimonials */}
      {achievement.testimonials && (
        <div className="max-w-2xl mx-auto mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            What People Are Saying
          </h2>
          <div className="space-y-4">
            {achievement.testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-500"
              >
                <p className="text-gray-700 italic">"{testimonial.quote}"</p>
                <p className="text-gray-600 font-semibold mt-2">
                  - {testimonial.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Links or References */}
      {achievement.links && (
        <div className="max-w-2xl mx-auto mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Learn More
          </h2>
          <ul className="list-disc list-inside text-lg text-gray-700">
            {achievement.links.map((link, index) => (
              <li key={index} className="mb-2">
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default AchievementDetails;

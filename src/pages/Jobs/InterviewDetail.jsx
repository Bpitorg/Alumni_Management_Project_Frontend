import React from "react";
import { useParams } from "react-router-dom";
import { interviewExperiences } from "../../constants/interviewexp";
import { useTheme } from "@mui/material/styles";

const InterviewDetail = () => {
  const { id } = useParams(); // Get the interview ID from the URL
  const theme = useTheme();

  // Find the interview experience by ID
  const experience = interviewExperiences.find((exp) => exp.id === parseInt(id));

  if (!experience) {
    return (
      <div className="flex justify-center items-center h-screen text-2xl font-bold">
        Interview experience not found
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row gap-10 p-6 bg-gray-50 min-h-screen">
      {/* Main Content */}
      <div className="flex flex-col gap-4 w-3/4 ml-74">
        <div className="bg-white p-8 rounded-xl shadow-2xl max-w-2xl mx-auto">
          {/* Interview Title */}
          <h1
            className="text-3xl font-bold mb-6"
            style={{ color: theme.palette.primary.main }}
          >
            {experience.name} - {experience.role} at {experience.company}
          </h1>

          {/* Interview Details */}
          <div className="space-y-6">
            {/* Date */}
            <p className="text-lg" style={{ color: theme.palette.text.primary }}>
              <strong>Date:</strong> {experience.date}
            </p>

            {/* Difficulty */}
            <p className="text-lg" style={{ color: theme.palette.text.primary }}>
              <strong>Difficulty:</strong> {experience.difficulty}
            </p>

            {/* Interview Type */}
            <p className="text-lg" style={{ color: theme.palette.text.primary }}>
              <strong>Interview Type:</strong> {experience.type}
            </p>

            {/* Experience */}
            <p className="text-lg" style={{ color: theme.palette.text.primary }}>
              <strong>Experience:</strong> {experience.experience}
            </p>

            {/* Preparation Tips */}
            {experience.preparationTips && (
              <div className="space-y-2">
                <h2 className="text-xl font-semibold" style={{ color: theme.palette.primary.main }}>
                  Preparation Tips
                </h2>
                <ul className="list-disc list-inside text-lg" style={{ color: theme.palette.text.primary }}>
                  {experience.preparationTips.map((tip, index) => (
                    <li key={index}>{tip}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Outcome */}
            {experience.outcome && (
              <p className="text-lg" style={{ color: theme.palette.text.primary }}>
                <strong>Outcome:</strong> {experience.outcome}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterviewDetail;
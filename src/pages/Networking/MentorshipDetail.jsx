import React from "react";
import { useParams } from "react-router-dom";
import { programs } from '../../constants/mentorshipPrograms'; // Import mentorship programs
import { FaCalendarAlt, FaCertificate, FaUsers, FaChalkboardTeacher, FaBriefcase } from "react-icons/fa";
import { FaPeopleGroup, FaCalendarCheck } from "react-icons/fa6";
import Sidebar from "../../common-components/Sidebar";
import { useTheme } from "@mui/material";

const MentorshipDetail = () => {
  const theme = useTheme();
  const { id } = useParams(); // Get the program ID from the URL
  const program = programs.find((p) => p.id === parseInt(id));

  if (!program) {
    return <div className="flex justify-center items-center h-screen text-2xl font-bold">Program not found</div>;
  }

  return (
    <div className="flex flex-col md:flex-row gap-6 p-6 bg-gray-50 min-h-screen">
      <Sidebar
        className="fixed"
        searchPlaceholder="Search connections..."
        route="networking"
        title="Mentorship Programs"
      />
      <div className="flex flex-col w-full md:w-3/4 md:ml-80">
        <div className="bg-white p-8 rounded-xl shadow-2xl max-w-2xl mx-auto">
          {/* Program Title and Description */}
          <h1
            className="text-4xl font-bold mb-6"
            style={{ color: theme.palette.primary.main }}
          >
            {program.title}
          </h1>
          <p className="text-gray-600 text-lg mb-8 italic border-l-4 border-blue-500 pl-4">
            {program.description}
          </p>

          {/* Program Details Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <FaCalendarAlt className="text-blue-500" />
                <p className="text-gray-700">
                  <strong>Duration:</strong> {program.duration}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <FaCertificate className="text-blue-500" />
                <p className="text-gray-700">
                  <strong>Certification:</strong> {program.certification ? "Yes" : "No"}
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <FaUsers className="text-blue-500" />
                <p className="text-gray-700">
                  <strong>Target Audience:</strong> {program.targetAudience}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <FaChalkboardTeacher className="text-blue-500" />
                <p className="text-gray-700">
                  <strong>Mentor:</strong> {program.mentor}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <FaBriefcase className="text-blue-500" />
                <p className="text-gray-700">
                  <strong>Outcome:</strong> {program.outcome}
                </p>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          {program.benefits && (
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <FaPeopleGroup className="text-blue-500" />
                How You Can Benefit
              </h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                {program.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Agenda Section */}
          {program.agenda && (
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <FaCalendarCheck className="text-blue-500" />
                Program Agenda
              </h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                {program.agenda.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button
              className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center gap-2"
            >
              Register Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorshipDetail;
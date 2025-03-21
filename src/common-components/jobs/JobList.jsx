import React from "react";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";

const JobList = ({
  jobTitle,
  location,
  salary,
  experience,
  postedBy,
  postedTime,
  status, // Optional: Only for Applied Jobs page
  isAppliedPage = false, // Default to false (Jobs page)
}) => {
  const theme = useTheme();

  // Function to determine status color
  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case "applied":
        return "text-blue-600";
      case "under review":
        return "text-yellow-600";
      case "rejected":
        return "text-red-600";
      default:
        return "text-gray-600";
    }
  };

  return (
    <div
      style={{ backgroundColor: theme.palette.background.paper }}
      className="max-w-2xl w-full mx-auto shadow-lg rounded-lg overflow-hidden my-4"
    >
      {/* Top Section: Company Logo, Posted By, and Job Details */}
      <div className="flex p-6 justify-between items-center">
        {/* Left Section: Company Logo and Posted By */}
        <div className="flex items-center space-x-4">
          <img
            className="w-16 h-16 rounded-full border-2 border-gray-200"
            src="https://via.placeholder.com/150" // Replace with actual image URL
            alt="Company Logo"
          />
          <div style={{ color: theme.palette.text.secondary }} className="text-sm">
            Posted by{" "}
            <span style={{ color: theme.palette.text.primary, fontWeight: 600 }}>
              {postedBy}
            </span>
          </div>
        </div>

        {/* Right Section: Job Details */}
        <div className="flex flex-col items-end space-y-2">
          <h1
            style={{ color: theme.palette.text.primary }}
            className="text-md w-fit text-right font-bold"
          >
            {jobTitle}
          </h1>
          <p style={{ color: theme.palette.text.secondary }} className="text-sm">
            {location}
          </p>
          <p style={{ color: theme.palette.text.secondary }} className="text-sm">
            {salary}
          </p>
          <p style={{ color: theme.palette.text.secondary }} className="text-sm">
            {experience}
          </p>
        </div>
      </div>

      {/* Bottom Section: Posted Time and Conditional Button/Status */}
      <div
        style={{ backgroundColor: theme.palette.background.dark }}
        className="flex justify-between items-center p-4"
      >
        <p style={{ color: theme.palette.text.secondary }} className="text-sm">
          {postedTime}
        </p>

        {/* Conditional Rendering */}
        {isAppliedPage ? (
          // Display status for Applied Jobs page
          <div className={`text-md font-semibold ${getStatusColor(status)}`}>
            Status: {status}
          </div>
        ) : (
          // Display "Apply Now" button for Jobs page
          <Link
            to="/jobs/apply-job"
            style={{
              backgroundColor: theme.palette.primary.main,
              color: theme.palette.primary.contrastText,
            }}
            className="px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Apply Now
          </Link>
        )}
      </div>
    </div>
  );
};

export default JobList;
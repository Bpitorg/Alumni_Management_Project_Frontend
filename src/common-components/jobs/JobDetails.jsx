// components/JobDetails.js
import React from "react";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";

const JobDetails = ({ selectedJob }) => {
  const theme = useTheme();

  if (!selectedJob) {
    return (
      <p
        style={{ color: theme.palette.text.secondary }}
        className="text-center py-10"
      >
        Select a job to view details.
      </p>
    );
  }

  return (
    <div
      style={{ backgroundColor: theme.palette.background.paper }}
      className="flex flex-col p-8 shadow-lg rounded-lg max-w-2xl mx-auto"
    >
      {/* Job Title */}
      <h1
        style={{ color: theme.palette.primary.main }}
        className="text-3xl font-bold mb-6 border-b-2 pb-4"
      >
        {selectedJob.jobTitle}
      </h1>

      {/* Job Metadata */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <p style={{ color: theme.palette.text.primary }}>
          <span style={{ color: theme.palette.text.primary, fontWeight: 600 }}>
            Location:
          </span>{" "}
          {selectedJob.location}
        </p>
        <p style={{ color: theme.palette.text.primary }}>
          <span style={{ color: theme.palette.text.primary, fontWeight: 600 }}>
            Salary:
          </span>{" "}
          {selectedJob.salary}
        </p>
        <p style={{ color: theme.palette.text.primary }}>
          <span style={{ color: theme.palette.text.primary, fontWeight: 600 }}>
            Experience:
          </span>{" "}
          {selectedJob.experience}
        </p>
        <p style={{ color: theme.palette.text.primary }}>
          <span style={{ color: theme.palette.text.primary, fontWeight: 600 }}>
            Posted By:
          </span>{" "}
          {selectedJob.postedBy}
        </p>
        <p style={{ color: theme.palette.text.primary }}>
          <span style={{ color: theme.palette.text.primary, fontWeight: 600 }}>
            Posted Time:
          </span>{" "}
          {selectedJob.postedTime}
        </p>
      </div>

      {/* Job Description */}
      <div className="mb-8">
        <h2
          style={{ color: theme.palette.primary.main }}
          className="text-2xl font-semibold mb-4"
        >
          Job Description
        </h2>
        <p style={{ color: theme.palette.text.primary }} className="leading-relaxed">
          {selectedJob.description}
        </p>
      </div>

      {/* Responsibilities */}
      <div className="mb-8">
        <h2
          style={{ color: theme.palette.primary.main }}
          className="text-2xl font-semibold mb-4"
        >
          Responsibilities
        </h2>
        <ul className="list-disc list-inside space-y-2">
          {selectedJob.responsibilities.map((responsibility, index) => (
            <li
              key={index}
              style={{ color: theme.palette.text.primary }}
              className="pl-4"
            >
              {responsibility}
            </li>
          ))}
        </ul>
      </div>

      {/* Requirements */}
      <div className="mb-8">
        <h2
          style={{ color: theme.palette.primary.main }}
          className="text-2xl font-semibold mb-4"
        >
          Requirements
        </h2>
        <ul className="list-disc list-inside space-y-2">
          {selectedJob.requirements.map((requirement, index) => (
            <li
              key={index}
              style={{ color: theme.palette.text.primary }}
              className="pl-4"
            >
              {requirement}
            </li>
          ))}
        </ul>
      </div>

      {/* Apply Button */}
      <div className="flex justify-center mt-8">
        <Link to='/jobs/apply-job'
          style={{
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
          }}
          className="px-8 py-3 rounded-lg transition duration-300 transform hover:scale-105"
        >
          Apply Now
        </Link>
      </div>
    </div>
  );
};

export default JobDetails;
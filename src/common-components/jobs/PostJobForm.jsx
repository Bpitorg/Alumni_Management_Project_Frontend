import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material";

const PostJobForm = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  // State to manage form inputs
  const [jobData, setJobData] = useState({
    jobTitle: "",
    jobDescription: "",
    requirements: "",
    responsibilities: "",
    techStack: "",
    location: "",
    experience: "",
    salary: "",
    postedBy: "",
    postedTime: "", // This will be auto-filled
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setJobData({
      ...jobData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Automatically set the posted time to the current date and time
    const currentTime = new Date().toISOString(); // Get current time in ISO format
    const updatedJobData = { ...jobData, postedTime: currentTime };

    // Add logic to post the job (e.g., send data to an API)
    console.log("Job Data:", updatedJobData);
    alert("Job posted successfully!");
    navigate("/jobs"); // Redirect to the jobs page
  };

  return (
    <div className="w-full">
      <div className="flex mx-7 mb-7 border-gray-200 rounded-lg gap-10 bg-gray-50 items-center p-6">
        <div className="w-full px-20 py-8 shadow-xl rounded-lg">
          <h1
            className="text-3xl text-center font-bold mb-6"
            style={{
              color: theme.palette.primary.main,
            }}
          >
            Post a Job
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Job Title */}
            <div>
              <label className="block text-lg font-medium text-gray-700">
                Job Title
              </label>
              <input
                type="text"
                name="jobTitle"
                value={jobData.jobTitle}
                onChange={handleInputChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            {/* Job Description */}
            <div>
              <label className="block text-lg font-medium text-gray-700">
                Job Description
              </label>
              <textarea
                name="jobDescription"
                value={jobData.jobDescription}
                onChange={handleInputChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                rows="4"
                placeholder="Describe the job role and responsibilities"
                required
              />
            </div>

            {/* Requirements */}
            <div>
              <label className="block text-lg font-medium text-gray-700">
                Requirements
              </label>
              <textarea
                name="requirements"
                value={jobData.requirements}
                onChange={handleInputChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                rows="4"
                placeholder="List the requirements (one per line)"
                required
              />
            </div>

            {/* Responsibilities */}
            <div>
              <label className="block text-lg font-medium text-gray-700">
                Responsibilities
              </label>
              <textarea
                name="responsibilities"
                value={jobData.responsibilities}
                onChange={handleInputChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                rows="4"
                placeholder="List the responsibilities (one per line)"
                required
              />
            </div>

            {/* Tech Stack */}
            <div>
              <label className="block text-lg font-medium text-gray-700">
                Tech Stack
              </label>
              <input
                type="text"
                name="techStack"
                value={jobData.techStack}
                onChange={handleInputChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                placeholder="List the required tech stack (e.g., React, Node.js)"
                required
              />
            </div>

            {/* Location */}
            <div>
              <label className="block text-lg font-medium text-gray-700">
                Location
              </label>
              <input
                type="text"
                name="location"
                value={jobData.location}
                onChange={handleInputChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                placeholder="e.g., New York, Remote"
                required
              />
            </div>

            {/* Experience */}
            <div>
              <label className="block text-lg font-medium text-gray-700">
                Experience
              </label>
              <input
                type="text"
                name="experience"
                value={jobData.experience}
                onChange={handleInputChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                placeholder="e.g., 2-5 years"
                required
              />
            </div>

            {/* Salary */}
            <div>
              <label className="block text-lg font-medium text-gray-700">
                Salary
              </label>
              <input
                type="text"
                name="salary"
                value={jobData.salary}
                onChange={handleInputChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                placeholder="e.g., $80,000 - $100,000"
                required
              />
            </div>

            {/* Posted By */}
            <div>
              <label className="block text-lg font-medium text-gray-700">
                Posted By
              </label>
              <input
                type="text"
                name="postedBy"
                value={jobData.postedBy}
                onChange={handleInputChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                placeholder="e.g., Company Name"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="px-10 py-2 font-semibold bg-[#077fb2] text-white rounded-md hover:bg-[#066a8f]"
              >
                Post Job
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostJobForm;
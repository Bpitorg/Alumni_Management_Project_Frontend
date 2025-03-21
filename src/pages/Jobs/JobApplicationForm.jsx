import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material";
import programsvg from "../../assets/applyjobs.svg";
import programsvg1 from "../../assets/applyjobs1.svg";

const JobApplicationForm = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  // State to manage form inputs
  const [applicationData, setApplicationData] = useState({
    fullName: "",
    email: "",
    phone: "",
    resume: null,
    coverLetter: "",
    experience: "",
    skills: "",
    availability: "",
    references: "",
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setApplicationData({
      ...applicationData,
      [name]: files ? files[0] : value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to submit the application (e.g., send data to an API)
    console.log("Application Data:", applicationData);
    alert("Application submitted successfully!");
    navigate("/jobs"); // Redirect to the jobs page
  };

  return (
    <div className="">
      <div className="text-md text-red-600 flex justify-center mt-3">
        *Please fill out the form to apply for the job*
      </div>
      <div className="flex m-7 border-1 border-gray-200 rounded-lg gap-10 bg-gray-50 items-center p-6">
        <div className="px-20 py-8 w-3/6 shadow-xl rounded-lg">
          <h1
            className="text-3xl text-center font-bold mb-6"
            style={{
              color: theme.palette.primary.main,
            }}
          >
            Apply for the Job
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name */}
            <div>
              <label className="block text-lg font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={applicationData.fullName}
                onChange={handleInputChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-lg font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={applicationData.email}
                onChange={handleInputChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-lg font-medium text-gray-700">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                value={applicationData.phone}
                onChange={handleInputChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            {/* Resume Upload */}
            <div>
              <label className="block text-lg font-medium text-gray-700">
                Resume
              </label>
              <input
                type="file"
                name="resume"
                onChange={handleInputChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            {/* Cover Letter */}
            <div>
              <label className="block text-lg font-medium text-gray-700">
                Cover Letter
              </label>
              <textarea
                name="coverLetter"
                value={applicationData.coverLetter}
                onChange={handleInputChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                rows="4"
                placeholder="Explain why you are a good fit for this job"
                required
              />
            </div>

            {/* Experience */}
            <div>
              <label className="block text-lg font-medium text-gray-700">
                Experience
              </label>
              <textarea
                name="experience"
                value={applicationData.experience}
                onChange={handleInputChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                rows="4"
                placeholder="Describe your relevant experience"
                required
              />
            </div>

            {/* Skills */}
            <div>
              <label className="block text-lg font-medium text-gray-700">
                Skills
              </label>
              <input
                type="text"
                name="skills"
                value={applicationData.skills}
                onChange={handleInputChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                placeholder="List your skills (e.g., JavaScript, Project Management)"
                required
              />
            </div>

            {/* Availability */}
            <div>
              <label className="block text-lg font-medium text-gray-700">
                Availability
              </label>
              <input
                type="text"
                name="availability"
                value={applicationData.availability}
                onChange={handleInputChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                placeholder="e.g., Full-time, Part-time, Remote"
                required
              />
            </div>

            {/* References */}
            <div>
              <label className="block text-lg font-medium text-gray-700">
                References
              </label>
              <textarea
                name="references"
                value={applicationData.references}
                onChange={handleInputChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                rows="4"
                placeholder="Provide contact details for references"
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="px-10 py-2 font-semibold bg-[#077fb2] text-white rounded-md hover:bg-[#066a8f]"
              >
                Submit Application
              </button>
            </div>
          </form>
        </div>
        <div className="w-3/6 flex flex-col gap-40 items-center">
          <img className="w-[70%]" src={programsvg} alt="" />
          <img className="w-full" src={programsvg1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default JobApplicationForm;
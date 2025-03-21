import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material";
import programsvg from "../../assets/creatementorprog.svg";
import programsvg1 from "../../assets/creatementorprog1.svg";

const CreateMentorshipProgram = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  // State to manage form inputs
  const [programData, setProgramData] = useState({
    title: "",
    description: "",
    targetAudience: "",
    duration: "",
    outcome: "",
    category: "",
    schedule: "",
    mentorDetails: "",
    fees: "",
    capacity: "",
    certification: false, // Assuming certification is a boolean (yes/no)
    tags: "", // Assuming tags are comma-separated values
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProgramData({
      ...programData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to save the program (e.g., send data to an API)
    console.log("Program Data:", programData);
    alert("Program created successfully!");
    navigate("/networking/mentorship-programs"); // Redirect to the mentorship programs page
  };
  // Initialize the navigate function

  const handleCreateProgram = () => {
    navigate("/networking/mentorship-programs"); // Navigate to the desired route
  };

  return (
    <div className="">
      <div className="text-md text-red-600 flex justify-center mt-3">
        *You should be a MENTOR to Create a new Mentorship Program*
      </div>
      <div className="flex m-7 border-1 border-gray-200 rounded-lg gap-10 bg-gray-50 items-center p-6">
        <div className="px-20 py-8 w-3/6 shadow-xl rounded-lg">
          <h1
            className="text-3xl text-center font-bold mb-6"
            style={{
              color: theme.palette.primary.main,
            }}
          >
            Start a New Mentorship Program
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Program Title */}
            <div>
              <label className="block text-lg font-medium text-gray-700">
                Title
              </label>
              <input
                type="text"
                name="title"
                value={programData.title}
                onChange={handleInputChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-lg font-medium text-gray-700">
                Description
              </label>
              <textarea
                name="description"
                value={programData.description}
                onChange={handleInputChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                rows="4"
                required
              />
            </div>

            {/* Target Audience */}
            <div>
              <label className="block text-lg font-medium text-gray-700">
                Target Audience
              </label>
              <input
                type="text"
                name="targetAudience"
                value={programData.targetAudience}
                onChange={handleInputChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            {/* Duration */}
            <div>
              <label className="block text-lg font-medium text-gray-700">
                Duration
              </label>
              <input
                type="text"
                name="duration"
                value={programData.duration}
                onChange={handleInputChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            {/* Expected Outcome */}
            <div>
              <label className="block text-lg font-medium text-gray-700">
                Expected Outcome
              </label>
              <textarea
                name="outcome"
                value={programData.outcome}
                onChange={handleInputChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                rows="4"
                required
              />
            </div>

            {/* Category */}
            <div>
              <label className="block text-lg font-medium text-gray-700">
                Category
              </label>
              <select
                name="category"
                value={programData.category}
                onChange={handleInputChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              >
                <option value="" disabled>
                  Select a category
                </option>
                <option value="tech">Tech</option>
                <option value="placement">Placement</option>
                <option value="personality">Personality Development</option>
                <option value="entrepreneurship">Entrepreneurship</option>
                <option value="creative">Creative Arts</option>
                <option value="academics">Academics</option>
              </select>
            </div>

            {/* Schedule */}
            <div>
              <label className="block text-lg font-medium text-gray-700">
                Schedule
              </label>
              <input
                type="text"
                name="schedule"
                value={programData.schedule}
                onChange={handleInputChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                placeholder="e.g., Every Monday at 6 PM"
                required
              />
            </div>

            {/* Mentor Details */}
            <div>
              <label className="block text-lg font-medium text-gray-700">
                Mentor Details
              </label>
              <textarea
                name="mentorDetails"
                value={programData.mentorDetails}
                onChange={handleInputChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                rows="4"
                placeholder="Provide details about the mentor(s)"
                required
              />
            </div>

            {/* Fees */}
            <div>
              <label className="block text-lg font-medium text-gray-700">
                Fees
              </label>
              <input
                type="number"
                name="fees"
                value={programData.fees}
                onChange={handleInputChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                placeholder="Enter the program fees"
                required
              />
            </div>

            {/* Capacity */}
            <div>
              <label className="block text-lg font-medium text-gray-700">
                Capacity
              </label>
              <input
                type="number"
                name="capacity"
                value={programData.capacity}
                onChange={handleInputChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                placeholder="Enter the maximum number of participants"
                required
              />
            </div>

            {/* Certification */}
            <div>
              <label className="block text-lg font-medium text-gray-700">
                Certification
              </label>
              <div className="mt-1">
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="certification"
                    checked={programData.certification}
                    onChange={handleInputChange}
                    className="form-checkbox h-5 w-5 text-[#077fb2]"
                  />
                  <span className="ml-2">
                    Provide certification upon completion
                  </span>
                </label>
              </div>
            </div>

            {/* Tags */}
            <div>
              <label className="block text-lg font-medium text-gray-700">
                Tags
              </label>
              <input
                type="text"
                name="tags"
                value={programData.tags}
                onChange={handleInputChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                placeholder="e.g., leadership, coding, design"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="px-10 py-2 font-semibold bg-[#077fb2] text-white rounded-md hover:bg-[#066a8f]"
                onClick={handleCreateProgram} // Add onClick handler
              >
                Create Program
              </button>
            </div>
          </form>
        </div>
        <div className="w-3/6 flex flex-col gap-40">
          <img className="w-full" src={programsvg} alt="" />
          <img className="w-full" src={programsvg1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default CreateMentorshipProgram;

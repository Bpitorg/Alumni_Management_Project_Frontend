import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const MentorApplication = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const program = location.state?.program; // Program data passed via state

  // State to manage which section is visible
  const [showForm, setShowForm] = useState(false);

  // State for the application form
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    professionalTitle: "",
    yearsOfExperience: "",
    expertise: "",
    availability: "",
    motivation: "",
    resume: null,
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle file upload
  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to submit the application (e.g., send data to an API)
    console.log("Mentor Application Data:", formData);
    alert("Application submitted successfully!");
    navigate("/"); // Redirect to home or confirmation page
  };

  return (
    <div className="flex flex-col items-center p-8 bg-gray-50 min-h-screen">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-6">
        {/* Program Description Section */}
        {!showForm && (
          <div>
            <h1 className="text-3xl font-bold text-[#077fb2] mb-4">
              {program?.title}
            </h1>
            <p className="text-gray-700 mb-6">{program?.description}</p>

            {/* Key Details */}
            <div className="space-y-4">
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  Program Details
                </h2>
                <ul className="space-y-2">
                  <li>
                    <strong>Target Audience:</strong> {program?.targetAudience}
                  </li>
                  <li>
                    <strong>Duration:</strong> {program?.duration}
                  </li>
                  <li>
                    <strong>Outcome:</strong> {program?.outcome}
                  </li>
                  <li>
                    <strong>Category:</strong> {program?.category}
                  </li>
                </ul>
              </div>
            </div>

            {/* Next Button */}
            <div className="flex justify-end mt-6">
              <button
                onClick={() => setShowForm(true)}
                className="px-6 py-2 bg-[#077fb2] text-white rounded-md hover:bg-[#066a8f]"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {/* Application Form Section */}
        {showForm && (
          <div>
            <h1 className="text-3xl font-bold text-[#077fb2] mb-4">
              Apply as a Mentor for {program?.title}
            </h1>

            {/* Back Button */}
            <button
              onClick={() => setShowForm(false)}
              className="mb-6 text-sm text-[#077fb2] hover:underline"
            >
              ← Back to Program Details
            </button>

            {/* Application Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>

              {/* Professional Title */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Professional Title
                </label>
                <input
                  type="text"
                  name="professionalTitle"
                  value={formData.professionalTitle}
                  onChange={handleInputChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>

              {/* Years of Experience */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Years of Experience
                </label>
                <input
                  type="number"
                  name="yearsOfExperience"
                  value={formData.yearsOfExperience}
                  onChange={handleInputChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>

              {/* Areas of Expertise */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Areas of Expertise
                </label>
                <input
                  type="text"
                  name="expertise"
                  value={formData.expertise}
                  onChange={handleInputChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>

              {/* Availability */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Availability (Hours per Week)
                </label>
                <input
                  type="number"
                  name="availability"
                  value={formData.availability}
                  onChange={handleInputChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>

              {/* Motivation for Joining */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Why do you want to join as a mentor?
                </label>
                <textarea
                  name="motivation"
                  value={formData.motivation}
                  onChange={handleInputChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  rows="4"
                  required
                />
              </div>

              {/* Resume/CV Upload */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Upload Resume/CV (Optional)
                </label>
                <input
                  type="file"
                  name="resume"
                  onChange={handleFileChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="px-6 py-2 bg-[#077fb2] text-white rounded-md hover:bg-[#066a8f]"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default MentorApplication;
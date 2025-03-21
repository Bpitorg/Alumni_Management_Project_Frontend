import React from "react";
import { useParams } from "react-router-dom";
import recentRecruitersData from "../../constants/RecentRecruiters";
import { useTheme } from "@mui/material";
import Sidebar from "../../common-components/Sidebar";

const RecruiterDetails = () => {
  const { id } = useParams(); // Get the recruiter ID from the URL
  const theme = useTheme();

  // Find the recruiter by ID
  const recruiter = recentRecruitersData.find((rec) => rec.id === parseInt(id));

  if (!recruiter) {
    return (
      <div className="flex justify-center items-center h-screen text-2xl font-bold">
        Recruiter not found
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row gap-10 p-6 bg-gray-50 min-h-screen">
      {/* Sidebar */}
      <Sidebar
        className="fixed"
        searchPlaceholder="Search connections..."
        title="Jobs and Projects"
        route="jobs"
      />

      {/* Main Content */}
      <div className="flex flex-col items-center gap-4 w-3/4 ml-74">
        <div className="bg-white p-8 rounded-xl shadow-2xl max-w-2xl mx-auto w-full">
          {/* Company Logo and Title */}
          <div className="flex flex-col items-center mb-6">
            <img
              src={recruiter.logo}
              alt={recruiter.company}
              className="w-24 h-24 mb-4"
            />
            <h1
              className="text-3xl font-bold text-center"
              style={{ color: theme.palette.primary.main }}
            >
              {recruiter.company}
            </h1>
          </div>

          {/* Recruiter Details */}
          <div className="space-y-6">
            {/* Years on Campus */}
            <p className="text-lg" style={{ color: theme.palette.text.primary }}>
              <strong>Years on Campus:</strong>{" "}
              {recruiter.yearsOnCampus.join(", ")}
            </p>

            {/* Students Hired */}
            <p className="text-lg" style={{ color: theme.palette.text.primary }}>
              <strong>Students Hired:</strong> {recruiter.studentsHired}
            </p>

            {/* Min and Max Package */}
            <p className="text-lg" style={{ color: theme.palette.text.primary }}>
              <strong>Package:</strong> {recruiter.minPackage} LPA -{" "}
              {recruiter.maxPackage} LPA
            </p>

            {/* Job Roles Offered */}
            <div className="space-y-2">
              <h2 className="text-xl font-semibold" style={{ color: theme.palette.primary.main }}>
                Job Roles Offered
              </h2>
              <ul className="list-disc list-inside text-lg" style={{ color: theme.palette.text.primary }}>
                {recruiter.jobRoles.map((role, index) => (
                  <li key={index}>{role}</li>
                ))}
              </ul>
            </div>

            {/* Eligibility Criteria */}
            <div className="space-y-2">
              <h2 className="text-xl font-semibold" style={{ color: theme.palette.primary.main }}>
                Eligibility Criteria
              </h2>
              <p className="text-lg" style={{ color: theme.palette.text.primary }}>
                <strong>GPA:</strong> {recruiter.eligibility.gpa}
              </p>
              <p className="text-lg" style={{ color: theme.palette.text.primary }}>
                <strong>Branches:</strong> {recruiter.eligibility.branches.join(", ")}
              </p>
              <p className="text-lg" style={{ color: theme.palette.text.primary }}>
                <strong>Skills:</strong> {recruiter.eligibility.skills.join(", ")}
              </p>
            </div>

            {/* Interview Process */}
            <div className="space-y-2">
              <h2 className="text-xl font-semibold" style={{ color: theme.palette.primary.main }}>
                Interview Process
              </h2>
              <ul className="list-disc list-inside text-lg" style={{ color: theme.palette.text.primary }}>
                {recruiter.interviewProcess.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ul>
            </div>

            {/* Testimonials */}
            <div className="space-y-2">
              <h2 className="text-xl font-semibold" style={{ color: theme.palette.primary.main }}>
                What People Are Saying
              </h2>
              <div className="space-y-4">
                {recruiter.testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-gray-100 p-4 rounded-lg">
                    <p className="text-gray-700 italic">"{testimonial.quote}"</p>
                    <p className="text-gray-600 font-semibold mt-2">
                      – {testimonial.author}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Website Link */}
            <div className="text-center mt-6">
              <a
                href={recruiter.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Visit {recruiter.company}'s Careers Page
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecruiterDetails;